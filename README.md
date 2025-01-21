# Personal Portfolio Website

A modern, serverless portfolio website built with React and AWS infrastructure. This project showcases a robust cloud architecture using AWS services and modern development practices.

## Architecture

The website is deployed using a serverless architecture on AWS:
- **Frontend**: Static React application
- **Hosting**: Amazon S3 for static content storage
- **CDN**: CloudFront distribution for global content delivery
- **Security**: Origin Access Control (OAC) for secure S3 access
- **DNS**: Custom domain configuration with SSL/TLS

## Prerequisites

1. Node.js
2. yarn or npm
3. AWS CLI configured with appropriate credentials
4. AWS CDK CLI installed globally

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Start local development:
   ```bash
   npm start
   # or
   yarn start
   ```

## Development

The project is structured into two main parts:
- `/` - React frontend application
- `/infrastructure` - AWS CDK infrastructure code

### Local Development

```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Production Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```
2. Deploy infrastructure:
   ```bash
   cd infrastructure
   npm install
   npx cdk deploy --all
   ```

## Infrastructure

The infrastructure is defined as code using AWS CDK in TypeScript. Key components:
- S3 bucket for static website hosting
- CloudFront distribution with OAC
- Custom domain configuration
- Secure access policies

For infrastructure-specific details, see the [infrastructure README](./infrastructure/README.md).

## License

MIT

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
