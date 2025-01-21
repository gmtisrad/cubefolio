import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { CustomResource, Duration } from 'aws-cdk-lib';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

// Load environment variables from .env file
dotenv.config();

export interface InfrastructureStackProps extends cdk.StackProps {
  domainName: string;
  wwwSubdomain?: boolean;
  certificateArn: string;
}

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: InfrastructureStackProps) {
    super(scope, id, {
      ...props,
      env: {
        account: process.env.AWS_ACCOUNT_ID,
        region: process.env.AWS_REGION || 'us-west-2',
      },
    });

    // Import the certificate from us-east-1
    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'Certificate',
      props.certificateArn
    );

    // Handle S3 bucket - create if doesn't exist, import if it does
    const bucketName = process.env.S3_BUCKET_NAME || 'gabetimm-website';

    // Create a Lambda function to check bucket existence
    const checkBucketFunction = new lambda.Function(this, 'CheckBucketFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        const AWS = require('aws-sdk');
        const s3 = new AWS.S3();
        
        exports.handler = async (event) => {
          const bucketName = event.ResourceProperties.bucketName;
          try {
            await s3.headBucket({ Bucket: bucketName }).promise();
            return { Data: { exists: true } };
          } catch (error) {
            if (error.code === 'NotFound') {
              return { Data: { exists: false } };
            }
            throw error;
          }
        }
      `),
    });

    // Add necessary permissions to the Lambda function
    checkBucketFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['s3:HeadBucket'],
      resources: ['*'],
    }));

    // Create the custom resource provider
    const provider = new Provider(this, 'CheckBucketProvider', {
      onEventHandler: checkBucketFunction,
    });

    // Create the custom resource
    const checkBucket = new CustomResource(this, 'CheckBucket', {
      serviceToken: provider.serviceToken,
      properties: {
        bucketName: bucketName,
      },
    });

    // Create or import bucket based on existence check
    const websiteBucket = checkBucket.getAttString('exists') === 'true'
      ? s3.Bucket.fromBucketName(this, 'ExistingWebsiteBucket', bucketName)
      : new s3.Bucket(this, 'NewWebsiteBucket', {
          bucketName: bucketName,
          websiteIndexDocument: 'index.html',
          websiteErrorDocument: 'index.html',
          publicReadAccess: false,
          blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          encryption: s3.BucketEncryption.S3_MANAGED,
        });

    // Create Origin Access Control
    const oac = new cloudfront.CfnOriginAccessControl(this, 'WebsiteOAC', {
      originAccessControlConfig: {
        name: 'WebsiteOAC',
        originAccessControlOriginType: 's3',
        signingBehavior: 'always',
        signingProtocol: 'sigv4'
      }
    });

    // Create CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'WebsiteDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
        compress: true,
      },
      domainNames: props.wwwSubdomain 
        ? [props.domainName, `www.${props.domainName}`]
        : [props.domainName],
      certificate: certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      httpVersion: cloudfront.HttpVersion.HTTP2,
      enableIpv6: true,
    });

    // Attach the OAC to the distribution
    const cfnDistribution = distribution.node.defaultChild as cloudfront.CfnDistribution;
    cfnDistribution.addPropertyOverride('DistributionConfig.Origins.0.OriginAccessControlId', oac.attrId);
    cfnDistribution.addPropertyOverride('DistributionConfig.Origins.0.S3OriginConfig.OriginAccessIdentity', '');

    // Grant CloudFront access to bucket using OAC
    websiteBucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [websiteBucket.arnForObjects('*')],
      principals: [new iam.ServicePrincipal('cloudfront.amazonaws.com')],
      conditions: {
        StringEquals: {
          'AWS:SourceArn': `arn:aws:cloudfront::${this.account}:distribution/${distribution.distributionId}`
        }
      }
    }));

    // Create API Gateway
    const api = new apigateway.RestApi(this, 'PortfolioApi', {
      restApiName: 'Portfolio API',
      description: 'API for portfolio website',
      defaultCorsPreflightOptions: {
        allowOrigins: [
          `https://${props.domainName}`,
          props.wwwSubdomain ? `https://www.${props.domainName}` : '',
        ].filter(Boolean),
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization'],
      },
    });

    // Output values
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'Website bucket name',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront distribution ID',
    });

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront distribution domain name',
    });

    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'API Gateway URL',
    });
  }
}
