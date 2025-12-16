/**
 * Centralized configuration for infrastructure
 */

/**
 * Subdomain configuration for side projects
 */
interface SubdomainConfig {
  readonly name: string;
  readonly fullDomain: string;
  readonly type: "CNAME";
  readonly description: string;
  readonly vercelProjectName: string;
}

/**
 * Main infrastructure configuration
 */
interface Config {
  readonly domain: string;
  readonly projectName: string;
  readonly cloudflare: {
    readonly zoneId: string;
  };
  readonly vercel: Record<string, never>; // Empty object type
  readonly dns: {
    readonly apex: {
      readonly name: string;
      readonly type: "A";
    };
    readonly www: {
      readonly name: string;
      readonly type: "CNAME";
    };
    readonly subdomains: readonly SubdomainConfig[];
  };
}

// Validate required environment variables
const cloudflareZoneId = process.env.CLOUDFLARE_ZONE_ID;
if (!cloudflareZoneId) {
  throw new Error(
    "CLOUDFLARE_ZONE_ID environment variable is required. Please set it in your .env file.",
  );
}

export const config: Config = {
  domain: "quanvo.dev",
  projectName: "personal-website", // Main website Vercel project name
  cloudflare: {
    zoneId: cloudflareZoneId,
  },
  vercel: {},
  dns: {
    // Apex domain (quanvo.dev) - uses A record pointing to Vercel IPs
    // Links to personal-website Vercel project
    apex: {
      name: "quanvo.dev",
      type: "A",
    },
    // www subdomain - uses CNAME pointing to Vercel CNAME target
    // Links to personal-website Vercel project
    www: {
      name: "www.quanvo.dev",
      type: "CNAME",
    },
    // Additional subdomains for side projects
    subdomains: [
      {
        name: "fin-cal",
        fullDomain: "fin-cal.quanvo.dev",
        type: "CNAME",
        description: "Finance Calculator",
        vercelProjectName: "finance-calculator",
      },
      {
        name: "ai-rule",
        fullDomain: "ai-rule.quanvo.dev",
        type: "CNAME",
        description: "AI Rule Project",
        vercelProjectName: "ai-rules-setup",
      },
    ],
  },
};
