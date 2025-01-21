# AWS Infrastructure (CDK TypeScript)

This directory contains the AWS CDK infrastructure code for the portfolio website. The infrastructure is defined as code using TypeScript and implements a modern, secure serverless architecture.

## Architecture Overview

The infrastructure consists of:

### Static Website Hosting
- **S3 Bucket**: Stores the static website content
- **CloudFront Distribution**: Global content delivery with edge caching
- **Origin Access Control (OAC)**: Secure access between CloudFront and S3
- **Custom Domain**: Support for custom domain with SSL/TLS

### Security Features
- Private S3 bucket with no public access
- CloudFront OAC for secure origin access
- HTTPS-only access via CloudFront
- Proper IAM roles and policies

## Prerequisites

- AWS CLI configured with appropriate credentials
- Node.js and npm/yarn installed
- AWS CDK CLI installed globally (`npm install -g aws-cdk`)

## Deployment

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the TypeScript code:
   ```bash
   npm run build
   ```

3. Deploy the stack:
   ```bash
   npx cdk deploy --all
   ```

## Useful Commands

* `npm run build`   Compile TypeScript to JavaScript
* `npm run watch`   Watch for changes and compile
* `npm run test`    Run the jest unit tests
* `npx cdk deploy`  Deploy stack to AWS
* `npx cdk diff`    Compare deployed stack with current state
* `npx cdk synth`   Emit CloudFormation template

## Infrastructure Updates

When making changes to the infrastructure:
1. Update the TypeScript code in `lib/`
2. Run `npm run build` to compile
3. Use `npx cdk diff` to review changes
4. Deploy with `npx cdk deploy --all`

## Security Considerations

- S3 bucket is private and accessible only through CloudFront
- CloudFront uses OAC for secure S3 access
- All traffic is HTTPS-only
- Proper IAM roles and policies are in place
