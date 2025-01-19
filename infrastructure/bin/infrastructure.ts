#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();

// Get domain name from context or environment
const domainName = process.env.DOMAIN_NAME || app.node.tryGetContext('domainName');
if (!domainName) {
  throw new Error('Domain name must be provided via environment variable DOMAIN_NAME or context');
}

// Get AWS account and region
const account = process.env.AWS_ACCOUNT_ID || process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.AWS_REGION || process.env.CDK_DEFAULT_REGION || 'us-east-1';

new InfrastructureStack(app, 'PortfolioInfrastructureStack', {
  domainName: domainName,
  wwwSubdomain: true, // Set to false if you don't want www subdomain
  env: {
    account: account,
    region: region,
  },
});

app.synth();