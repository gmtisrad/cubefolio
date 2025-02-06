# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and AWS infrastructure.

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Framer Motion
- **Styling**: Styled Components
- **Infrastructure**: AWS (S3, CloudFront, Route53, ACM)
- **CI/CD**: GitHub Actions

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

The website is automatically deployed through GitHub Actions when changes are pushed to the main branch:

- Frontend changes trigger a build and deployment to S3/CloudFront
- Infrastructure changes trigger a CDK deployment

### Manual Deployment

If needed, you can manually deploy:

1. Frontend:
   ```bash
   pnpm build
   aws s3 sync build/ s3://[BUCKET_NAME] --delete
   aws cloudfront create-invalidation --distribution-id [DISTRIBUTION_ID] --paths "/*"
   ```

2. Infrastructure:
   ```bash
   cd infrastructure
   pnpm cdk deploy --all
   ```

## Infrastructure

The website is hosted on AWS with the following setup:

- S3 bucket for static file hosting
- CloudFront for content delivery and caching
- Route53 for DNS management
- ACM for SSL certificate

## Environment Variables

Required environment variables:
- `AWS_ACCOUNT_ID`: Your AWS account ID
- `AWS_REGION`: AWS region (e.g., us-west-2)
- `DOMAIN_NAME`: Your domain name
- `S3_BUCKET_NAME`: S3 bucket name for static hosting

## License

MIT

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
