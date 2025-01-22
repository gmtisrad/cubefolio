#!/usr/bin/env node
import 'source-map-support/register';
import * as dotenv from 'dotenv';
import * as cdk from 'aws-cdk-lib';
import { CertificateStack } from '../lib/certificate-stack';
import { InfrastructureStack } from '../lib/infrastructure-stack';

// Load environment variables from .env file
dotenv.config();

const app = new cdk.App();

// Ensure required environment variables are present
const accountId = process.env.AWS_ACCOUNT_ID;
const region = process.env.AWS_REGION || 'us-west-2';

if (!accountId) {
  throw new Error('AWS_ACCOUNT_ID environment variable is required');
}

// Get domain name from context or environment
const domainName = process.env.DOMAIN_NAME || app.node.tryGetContext('domainName');
if (!domainName) {
  throw new Error('Domain name must be provided via environment variable DOMAIN_NAME or context');
}

// Define environment
const env = {
  account: accountId,
  region: region,
};

// Create certificate stack in us-east-1
const certStack = new CertificateStack(app, 'PortfolioCertificateStack', {
  env: {
    account: accountId,
    region: 'us-east-1', // Certificate must be in us-east-1 for CloudFront
  },
  domainName: domainName,
  wwwSubdomain: true,
  crossRegionReferences: true,
});

// Create main infrastructure stack in specified region
new InfrastructureStack(app, 'PortfolioInfrastructureStack', {
  env: env,
  domainName: domainName,
  wwwSubdomain: true,
  certificateArn: certStack.certificate.certificateArn,
  crossRegionReferences: true,
});

app.synth();