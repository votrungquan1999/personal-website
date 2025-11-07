# Infrastructure

Pulumi Infrastructure as Code for deploying the personal website to Vercel and configuring Cloudflare DNS.

## Prerequisites

- **Pulumi CLI**: https://www.pulumi.com/docs/get-started/install/
- **Bun**: https://bun.sh (for deployment scripts)
- **API Tokens**:
  - Cloudflare API Token (Zone DNS Edit permissions)
  - Vercel API Token
  - Pulumi Cloud Access Token

## Quick Start

### 1. Setup (First Time Only)

```bash
# Login to Pulumi
cd infrastructure
pulumi login
pulumi stack init dev

# Configure API tokens (from project root)
export $(grep -v '^#' .env | xargs)
pulumi config set cloudflare:apiToken "$CLOUDFLARE_API_TOKEN" --secret
pulumi config set vercel:apiToken "$VERCEL_API_TOKEN" --secret
```

### 2. Update Configuration

- Update `config.ts` with your Cloudflare Zone ID
- Update `resources/vercel-project.ts` with your GitHub repository path

### 3. Deploy

```bash
# Full deployment (Vercel + Cloudflare DNS)
bun run infrastructure/scripts/deploy.ts up

# Vercel only
bun run infrastructure/scripts/deploy-vercel.ts up

# Cloudflare DNS only
bun run infrastructure/scripts/deploy-cloudflare.ts up
```

## Available Commands

All scripts support: `preview`, `up`, `destroy`, `refresh`

```bash
bun run infrastructure/scripts/deploy.ts preview  # Preview changes
bun run infrastructure/scripts/deploy.ts up       # Deploy (default)
bun run infrastructure/scripts/deploy.ts destroy  # Destroy resources
bun run infrastructure/scripts/deploy.ts refresh   # Refresh state
```

## Project Structure

```
infrastructure/
├── scripts/              # Bun deployment scripts
│   ├── deploy.ts         # Full deployment
│   ├── deploy-vercel.ts # Vercel only
│   └── deploy-cloudflare.ts # Cloudflare DNS only
├── resources/            # Resource definitions
│   ├── vercel-project.ts
│   ├── vercel-domains.ts
│   ├── vercel-deployment.ts
│   └── cloudflare-dns.ts
├── index.ts              # Main entry point (controlled by env vars)
├── config.ts             # Configuration
└── Pulumi.yaml           # Pulumi project config
```

## Infrastructure Components

- **Vercel Project**: Creates and configures the Vercel project
- **Vercel Domains**: Adds `quanvo.dev` and `www.quanvo.dev`
- **Vercel Deployment**: Triggers production deployment from main branch
- **Cloudflare DNS**: A and CNAME records (DNS-only mode, gray cloud)

## Notes

- Bun scripts automatically load `.env` files from the project root
- DNS records use `proxied = false` (required for Vercel integration)
- State is stored in Pulumi Cloud (free tier)
- Pulumi handles state locking to prevent conflicts
