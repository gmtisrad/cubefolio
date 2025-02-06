import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
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

    // Import existing S3 bucket
    const websiteBucket = s3.Bucket.fromBucketName(
      this,
      'WebsiteBucket',
      process.env.S3_BUCKET_NAME || 'gabetimm-website'
    );

    // Create Origin Access Control
    const oac = new cloudfront.CfnOriginAccessControl(this, 'WebsiteOACNew', {
      originAccessControlConfig: {
        name: 'WebsiteOACNew',
        originAccessControlOriginType: 's3',
        signingBehavior: 'always',
        signingProtocol: 'sigv4'
      }
    });

    // Create CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'WebsiteDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket, {
          originAccessIdentity: undefined  // Disable OAI as we're using OAC
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
        compress: true,
        originRequestPolicy: cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
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
    cfnDistribution.addPropertyOverride('DistributionConfig.Origins.0.S3OriginConfig', {
      OriginAccessIdentity: ''  // Required for OAC
    });

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

    // Create Route53 zone
    const zone = route53.HostedZone.fromLookup(this, 'Zone', {
      domainName: props.domainName,
    });

    // Create A record for the domain
    new route53.ARecord(this, 'SiteAliasRecord', {
      zone,
      recordName: props.domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    // Create A record for www subdomain if enabled
    if (props.wwwSubdomain) {
      new route53.ARecord(this, 'WwwSiteAliasRecord', {
        zone,
        recordName: `www.${props.domainName}`,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      });
    }

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
  }
}
