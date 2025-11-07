#!/usr/bin/env bun
/**
 * Deploy only Vercel infrastructure
 * Usage: bun run scripts/deploy-vercel.ts [preview|up|destroy|refresh]
 *
 * Bun automatically loads .env files from the project root
 */

import { dirname } from "node:path";
import { $ } from "bun";

const command = process.argv[2] || "up";
const scriptDir = import.meta.dir;
const infrastructureDir = dirname(scriptDir); // Parent directory (infrastructure/)

// Command mapping
const commands: Record<string, string> = {
  preview: "pulumi preview",
  up: "pulumi up --yes",
  destroy: "pulumi destroy --yes",
  refresh: "pulumi refresh --yes",
};

const cmd = commands[command];
if (!cmd) {
  console.error(
    `Usage: bun run scripts/deploy-vercel.ts [preview|up|destroy|refresh]`,
  );
  process.exit(1);
}

// Set environment variables to deploy only Vercel
process.env.DEPLOY_VERCEL = "true";
process.env.DEPLOY_CLOUDFLARE = "false";

// Run Pulumi command in the infrastructure directory
await $`${cmd}`.cwd(infrastructureDir);
