#!/usr/bin/env node
import 'source-map-support/register';
import * as dotenv from 'dotenv';
import * as cdk from 'aws-cdk-lib';
import { CertificateStack } from '../lib/certificate-stack';
import { InfrastructureStack } from '../lib/infrastructure-stack';

// Load environment variables from .env file
dotenv.config();

const app = new cdk.App();

// Get domain name from context or environment
const domainName = process.env.DOMAIN_NAME || app.node.tryGetContext('domainName');
if (!domainName) {
  throw new Error('Domain name must be provided via environment variable DOMAIN_NAME or context');
}

// Create certificate stack in us-east-1
const certStack = new CertificateStack(app, 'PortfolioCertificateStack', {
  domainName: domainName,
  wwwSubdomain: true,
  crossRegionReferences: true,
});

// Create main infrastructure stack in us-west-2
new InfrastructureStack(app, 'PortfolioInfrastructureStack', {
  domainName: domainName,
  wwwSubdomain: true,
  certificateArn: certStack.certificate.certificateArn,
  crossRegionReferences: true,
});

app.synth();