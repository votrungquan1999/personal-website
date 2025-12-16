#!/usr/bin/env bun

/**
 * Deploy DNS records and Vercel domain configuration
 * Usage: bun run infrastructure/scripts/deploy.ts [preview|up|destroy|refresh]
 *
 * This script deploys:
 * - DNS records in Cloudflare (quanvo.dev, www, fin-cal, ai-rule)
 * - Vercel domain linking (connects DNS records to existing Vercel projects)
 *
 * Note: This does NOT create or deploy Vercel projects. Projects must already exist.
 *
 * Bun automatically loads .env files from the project root
 */

import { dirname } from "node:path";
import { $ } from "bun";

const command = process.argv[2] || "up";
const scriptDir = import.meta.dir;
const infrastructureDir = dirname(scriptDir); // Parent directory (infrastructure/)

// Validate command
const validCommands = ["preview", "up", "destroy", "refresh"];
if (!validCommands.includes(command)) {
  console.error(
    `Usage: bun run infrastructure/scripts/deploy.ts [preview|up|destroy|refresh]`,
  );
  process.exit(1);
}

console.log(`\n🌐 Deploying DNS and Vercel domain configuration...`);
console.log(`   - Main domains: quanvo.dev, www.quanvo.dev → personal-website`);
console.log(`   - Subdomains: fin-cal.quanvo.dev → finance-calculator`);
console.log(`   - Subdomains: ai-rule.quanvo.dev → ai-rules-setup`);
console.log(`   Command: pulumi ${command}\n`);

// Run Pulumi command in the infrastructure directory
// Build args array based on command
const args = command === "preview" ? [command] : [command, "--yes"];

await $`pulumi ${args}`.cwd(infrastructureDir);

console.log(`\n✅ DNS and domain configuration ${command} completed!`);
console.log(`\n📝 Next steps:`);
console.log(`   1. Wait for DNS propagation (typically 5-15 minutes)`);
console.log(`   2. Verify DNS records:`);
console.log(`      dig quanvo.dev A`);
console.log(`      dig www.quanvo.dev CNAME`);
console.log(`      dig fin-cal.quanvo.dev CNAME`);
console.log(`      dig ai-rule.quanvo.dev CNAME`);
console.log(`   3. Check Vercel projects to confirm domains are linked`);
