# Infrastructure & Deployment

## Pulumi Infrastructure as Code

**Location**: `infrastructure/` directory

**Key Principle**: DNS management + Vercel domain linking only

**What this infrastructure does**:
- ✅ Creates DNS records in Cloudflare
- ✅ Links domains to existing Vercel projects

**What this infrastructure does NOT do**:
- ❌ Create or deploy Vercel projects (projects must already exist)
- ❌ Trigger deployments
- ❌ Manage project settings

---

## Architecture

### Entry Point: `infrastructure/index.ts`

Simple, no environment variables needed. Deploys everything in one go:
1. DNS records in Cloudflare
2. Domain linking to existing Vercel projects

**Resource modules** (in `infrastructure/resources/`):
- `cloudflare-dns.ts` - DNS records (A and CNAME, proxied=false)
- `vercel-main-domains.ts` - Links quanvo.dev + www to personal-website project
- `vercel-subdomain-domains.ts` - Links subdomains to their respective projects

**Configuration**: `infrastructure/config.ts` - Domain, project names, DNS settings

---

## Deployment Scripts

**Location**: `infrastructure/scripts/`

Single deployment script:

```bash
# Deploy everything (DNS + domain linking)
npm run pulumi:up
# or: bun run infrastructure/scripts/deploy.ts up
```

**Supported commands**: `preview`, `up`, `destroy`, `refresh`

**What gets deployed**:
- ✅ DNS records in Cloudflare (A and CNAME)
- ✅ Domain linking to Vercel projects:
  - `quanvo.dev` + `www.quanvo.dev` → `personal-website` project
  - `fin-cal.quanvo.dev` → `finance-calculator` project
  - `ai-rule.quanvo.dev` → `ai-rules-setup` project

**Example**:
```bash
# Preview changes
bun run infrastructure/scripts/deploy.ts preview

# Deploy
bun run infrastructure/scripts/deploy.ts up

# Destroy (removes DNS records and domain links)
bun run infrastructure/scripts/deploy.ts destroy
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

## Deployment Flow

1. **User runs script** (e.g., `bun run infrastructure/scripts/deploy.ts up`)
2. **Script loads `.env`** from project root (automatic with Bun) - loads `CLOUDFLARE_ZONE_ID` and `PULUMI_ACCESS_TOKEN`
3. **Pulumi executes** `infrastructure/index.ts`
4. **Resources created/updated**:
   - Creates DNS records in Cloudflare
   - Looks up existing Vercel projects by name
   - Links domains to those projects
5. **Outputs exported** (domain, zone ID, project name)

---

## Configuration Values

Defined in `infrastructure/config.ts`:

```typescript
export const config = {
  domain: "quanvo.dev",
  projectName: "personal-website", // Main website Vercel project name
  cloudflare: {
    zoneId: process.env.CLOUDFLARE_ZONE_ID, // From .env file
  },
  dns: {
    apex: { name: "quanvo.dev", type: "A" },
    www: { name: "www.quanvo.dev", type: "CNAME" },
    subdomains: [
      {
        name: "fin-cal",
        fullDomain: "fin-cal.quanvo.dev",
        type: "CNAME",
        description: "Finance Calculator",
        vercelProjectName: "finance-calculator", // Existing Vercel project
      },
      {
        name: "ai-rule",
        fullDomain: "ai-rule.quanvo.dev",
        type: "CNAME",
        description: "AI Rule Project",
        vercelProjectName: "ai-rules-setup", // Existing Vercel project
      },
    ],
  },
};
```

**Required environment variables** (in `.env`):
- `CLOUDFLARE_ZONE_ID` - Your Cloudflare zone ID
- `PULUMI_ACCESS_TOKEN` - Your Pulumi access token

### Domain Configuration

**Main domains** (linked to `personal-website` project):
- `quanvo.dev` (A record)
- `www.quanvo.dev` (CNAME)

**Subdomains** (linked to their respective projects):
- `fin-cal.quanvo.dev` → `finance-calculator` project
- `ai-rule.quanvo.dev` → `ai-rules-setup` project

**How it works** (fully automated):
1. DNS records created in Cloudflare pointing to Vercel
2. Pulumi looks up existing Vercel projects by name (e.g., "personal-website")
3. Pulumi creates ProjectDomain resources linking domains to projects
4. Vercel automatically provisions SSL certificates

**Prerequisites**:
- Vercel projects must already exist with the exact names specified in config
- Projects can be deployed however you want (Vercel Git integration, CLI, etc.)

**Deployment**:
```bash
bun run infrastructure/scripts/deploy.ts up
```

**After deployment**:
1. Wait for DNS propagation (5-15 minutes)
2. Verify DNS records:
   ```bash
   dig quanvo.dev A
   dig www.quanvo.dev CNAME
   dig fin-cal.quanvo.dev CNAME
   dig ai-rule.quanvo.dev CNAME
   ```
3. Check Vercel project settings to confirm domains are linked

**Adding new domains**:
1. Create the Vercel project (if it doesn't exist)
2. Add entry to `config.dns.subdomains` array in `infrastructure/config.ts`:
   ```typescript
   {
     name: "my-project",
     fullDomain: "my-project.quanvo.dev",
     type: "CNAME",
     description: "My Project",
     vercelProjectName: "my-project-vercel-name", // Must match existing project
   }
   ```
3. Run `bun run infrastructure/scripts/deploy.ts up`
4. Done! DNS + domain linking is automated

---

## Important Notes

**What this infrastructure manages**:
- ✅ DNS records (creates and updates)
- ✅ Domain linking (connects domains to Vercel projects)

**What this infrastructure does NOT manage**:
- ❌ Vercel project creation/configuration
- ❌ Code deployments
- ❌ Build processes
- ❌ Environment variables (except the ones needed for Pulumi/Cloudflare)

**Vercel projects are managed separately** - they can be deployed via:
- Vercel Git integration (automatic deploys on push)
- Vercel CLI (`vercel deploy`)
- GitHub Actions or other CI/CD

---

## Related Files

- [architecture.md](./architecture.md) - Frontend architecture details
