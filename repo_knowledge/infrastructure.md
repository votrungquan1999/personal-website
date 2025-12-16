# Infrastructure & Deployment

## Pulumi Infrastructure as Code

**Location**: `infrastructure/` directory

**Key Principle**: Modular, environment-variable controlled deployment scope

---

## Architecture

### Entry Point: `infrastructure/index.ts`

Controls what gets deployed via environment variables:
- `DEPLOY_VERCEL` (default: true) - Deploy Vercel resources
- `DEPLOY_CLOUDFLARE` (default: true) - Deploy Cloudflare DNS

**Resource modules** (in `infrastructure/resources/`):
- `vercel-project.ts` - Vercel project creation
- `vercel-domains.ts` - Apex + www domain configuration
- `vercel-deployment.ts` - Deployment trigger
- `cloudflare-dns.ts` - DNS records (CNAME, proxied=false)

**Configuration**: `infrastructure/config.ts` - Domain, Cloudflare zone ID, DNS settings

---

## Deployment Scripts

**Location**: `infrastructure/scripts/`

Bun scripts that automatically load `.env` and set deployment scope:

```bash
# Full deployment (Vercel + Cloudflare)
npm run pulumi:up
# or: bun run infrastructure/scripts/deploy.ts up

# Vercel only
bun run infrastructure/scripts/deploy-vercel.ts up

# Cloudflare only
bun run infrastructure/scripts/deploy-cloudflare.ts up
```

**Supported commands**: `preview`, `up`, `destroy`, `refresh`

**Example**:
```bash
bun run infrastructure/scripts/deploy-vercel.ts preview  # Preview changes
bun run infrastructure/scripts/deploy-vercel.ts up       # Deploy
```

---

## Key Implementation Details

### Cloudflare DNS Configuration

**IMPORTANT**: DNS records use `proxied: false`

```typescript
// Required for Vercel integration
proxied: false  // ← Must be false for Vercel to work
```

This allows Vercel's edge network to handle requests directly.

### Environment Variable Pattern

Scripts set env vars to control deployment:

```typescript
// deploy-vercel.ts
process.env.DEPLOY_VERCEL = "true";
process.env.DEPLOY_CLOUDFLARE = "false";
```

Then `infrastructure/index.ts` reads these to determine what resources to create.

---

## Deployment Flow

1. **User runs script** (e.g., `bun run infrastructure/scripts/deploy-vercel.ts up`)
2. **Script loads `.env`** from project root (automatic with Bun)
3. **Script sets env vars** to control scope
4. **Pulumi reads env vars** in `infrastructure/index.ts`
5. **Resources created/updated** based on flags
6. **Outputs exported** (project ID, domain, deployment URL)

---

## Configuration Values

Defined in `infrastructure/config.ts`:

```typescript
export const config = {
  domain: "quanvotr.com",
  dns: {
    apex: { name: "quanvotr.com", value: "cname.vercel-dns.com" },
    www: { name: "www.quanvotr.com", value: "cname.vercel-dns.com" }
  },
  cloudflare: {
    zoneId: "..."  // Cloudflare zone ID
  }
};
```

---

## Important Notes

**DO NOT run build commands** unless explicitly requested by user:
- `npm run dev` - User manages dev server themselves
- `npm run build` - User manages builds themselves
- `npm run start` - User manages production server themselves

The user prefers to control when these run.

**Infrastructure commands are fine** - deployment is expected to be automated.

---

## Related Files

- [architecture.md](./architecture.md) - Frontend architecture details
