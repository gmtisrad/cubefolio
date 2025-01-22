import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

export interface CertificateStackProps extends cdk.StackProps {
  domainName: string;
  wwwSubdomain?: boolean;
}

export class CertificateStack extends cdk.Stack {
  public readonly certificate: acm.Certificate;

  constructor(scope: Construct, id: string, props: CertificateStackProps) {
    super(scope, id, {
      ...props,
      env: {
        account: process.env.AWS_ACCOUNT_ID,
        region: 'us-east-1', // Certificate must be in us-east-1 for CloudFront
      },
    });

    // Look up the Route53 zone
    const zone = route53.HostedZone.fromLookup(this, 'Zone', {
      domainName: props.domainName,
    });

    // Create SSL certificate with Route53 DNS validation
    this.certificate = new acm.Certificate(this, 'Certificate', {
      domainName: props.domainName,
      subjectAlternativeNames: props.wwwSubdomain ? [`www.${props.domainName}`] : [],
      validation: acm.CertificateValidation.fromDns(zone),
    });

    // Output the certificate ARN
    new cdk.CfnOutput(this, 'CertificateArn', {
      value: this.certificate.certificateArn,
      description: 'Certificate ARN',
      exportName: 'CertificateArn',
    });
  }
} 