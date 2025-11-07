/**
 * Centralized configuration for infrastructure
 */
export const config = {
  domain: "quanvo.dev",
  projectName: "personal-website",
  cloudflare: {
    zoneId:
      process.env.CLOUDFLARE_ZONE_ID || "REPLACE_WITH_YOUR_CLOUDFLARE_ZONE_ID",
  },
  vercel: {
    // Vercel project will be created with the project name
    // Domain will be automatically configured
  },
  dns: {
    // Apex domain (quanvo.dev) - uses A record pointing to Vercel IPs
    apex: {
      name: "quanvo.dev",
      type: "A",
    },
    // www subdomain - uses CNAME pointing to Vercel CNAME target
    www: {
      name: "www.quanvo.dev",
      type: "CNAME",
    },
  },
} as const;
