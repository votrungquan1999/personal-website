# Deployment Instructions

Step-by-step guide for deploying infrastructure.

## Prerequisites

- ✅ Pulumi CLI installed
- ✅ Bun installed
- ✅ Logged in to Pulumi Cloud (`pulumi login`)
- ✅ Selected dev stack (`cd infrastructure && pulumi stack select dev`)
- ✅ Configured API tokens (see Setup below)
- ✅ `.env` file with required tokens

## Setup (First Time Only)

```bash
# From project root
export $(grep -v '^#' .env | xargs)
cd infrastructure
pulumi config set cloudflare:apiToken "$CLOUDFLARE_API_TOKEN" --secret
pulumi config set vercel:apiToken "$VERCEL_API_TOKEN" --secret
cd ..
```

**Note**: `CLOUDFLARE_ZONE_ID` is read from environment variables, not Pulumi config.

## Deployment Options

### Option 1: Full Deployment (Vercel + Cloudflare DNS)

```bash
bun run infrastructure/scripts/deploy.ts preview
bun run infrastructure/scripts/deploy.ts up
```

### Option 2: Vercel Only (Recommended for Testing)

```bash
bun run infrastructure/scripts/deploy-vercel.ts preview
bun run infrastructure/scripts/deploy-vercel.ts up
```

### Option 3: Cloudflare DNS Only

```bash
bun run infrastructure/scripts/deploy-cloudflare.ts preview
bun run infrastructure/scripts/deploy-cloudflare.ts up
```

## Common Commands

```bash
# Preview changes
bun run infrastructure/scripts/deploy.ts preview

# Deploy
bun run infrastructure/scripts/deploy.ts up

# Destroy (⚠️ use with caution)
bun run infrastructure/scripts/deploy.ts destroy

# Refresh state
bun run infrastructure/scripts/deploy.ts refresh
```

## Troubleshooting

### "PULUMI_ACCESS_TOKEN must be set"

Bun scripts automatically load `.env` files. If running Pulumi directly:

```bash
export $(grep -v '^#' .env | xargs)
```

### "command not found: pulumi"

```bash
brew install pulumi
# or
curl -fsSL https://get.pulumi.com | sh
```

### "command not found: bun"

```bash
curl -fsSL https://bun.sh/install | bash
```

### "stack not found"

```bash
cd infrastructure
pulumi stack select dev
# or if it doesn't exist
pulumi stack init dev
```

## Recommended Workflow

1. **First deployment**: Deploy Vercel only to test

   ```bash
   bun run infrastructure/scripts/deploy-vercel.ts up
   ```

2. **After Vercel works**: Deploy Cloudflare DNS

   ```bash
   bun run infrastructure/scripts/deploy-cloudflare.ts up
   ```

3. **Future updates**: Use full deployment
   ```bash
   bun run infrastructure/scripts/deploy.ts up
   ```
