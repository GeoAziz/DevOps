# CI/CD Pipeline

This directory contains GitHub Actions workflows for automated testing, linting, type-checking, building, and deployment.

## Workflows

### 1. **CI Pipeline** (`ci.yml`)

Runs automated code quality checks and tests on every push and pull request.

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**
- **Install**: Install dependencies using `npm ci`
- **Lint**: Run ESLint to check code style (`npm run lint`)
- **Type Check**: Run TypeScript compiler (`npm run type-check`)
- **Build**: Build the project (`npm run build`)
- **Tests**: Run unit tests (`npm run test`)
- **Coverage**: Generate coverage reports and upload to Codecov

**Matrix Testing:**
- Runs on Node.js 20.x and 21.x to ensure compatibility

### 2. **Deploy to Vercel** (`deploy.yml`)

Automatically deploys the application to Vercel after passing CI checks.

**Triggers:**
- Push to `main` branch (production deployment)
- Pull requests to `main` (preview deployment)

**Steps:**
1. Checks out code
2. Sets up Node.js environment
3. Runs full CI pipeline (lint, typecheck, build, test)
4. Deploys to Vercel using Vercel's official action

**Required Secrets:**
- `VERCEL_TOKEN`: Your Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID
- `GITHUB_TOKEN`: Automatically provided by GitHub

## Setup Instructions

### 1. Configure Vercel Deployment

For the deployment workflow to work, you need to set up Vercel secrets in your GitHub repository:

```bash
# In your GitHub repository settings:
# Settings > Secrets and variables > Actions > New repository secret

VERCEL_TOKEN: <your-vercel-token>
VERCEL_ORG_ID: <your-vercel-org-id>
VERCEL_PROJECT_ID: <your-vercel-project-id>
```

To get these values:
1. Go to https://vercel.com/account/tokens
2. Create a new token with access to deployments
3. In your Vercel project settings, find your Organization ID and Project ID

### 2. Local Development

Run the same checks locally before pushing:

```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run type-check

# Build
npm run build

# Run tests
npm run test

# Generate coverage
npm run test:coverage
```

## Workflow Status

Check the status of your workflows:
1. Go to your GitHub repository
2. Click the "Actions" tab
3. View workflow runs, logs, and status checks

## Best Practices

- **Before pushing**: Run `npm run lint:fix`, `npm run type-check`, and `npm run test` locally
- **PR Reviews**: All workflows must pass before merging
- **Secrets**: Never commit sensitive tokens; use GitHub Secrets only
- **Branches**: Main branch is production; use develop for staging

## Troubleshooting

### Deployment fails but CI passes
- Verify Vercel secrets are correctly configured
- Check Vercel project settings align with your GitHub repo
- Review Vercel build logs in the Actions output

### Tests fail in CI but pass locally
- Ensure Node.js versions match (currently testing 20.x and 21.x)
- Check for platform-specific issues in test code
- Verify all environment variables are set

### Lint/Type errors only appear in CI
- Run `npm run lint` and `npm run type-check` locally to catch issues early
- Update your ESLint and TypeScript configurations if needed
