import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
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

    // Create SSL certificate
    this.certificate = new acm.Certificate(this, 'Certificate', {
      domainName: props.domainName,
      subjectAlternativeNames: props.wwwSubdomain ? [`www.${props.domainName}`] : [],
      validation: acm.CertificateValidation.fromDns(),
    });

    // Output the certificate ARN
    new cdk.CfnOutput(this, 'CertificateArn', {
      value: this.certificate.certificateArn,
      description: 'Certificate ARN',
      exportName: 'CertificateArn',
    });
  }
} 