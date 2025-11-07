import type * as pulumi from "@pulumi/pulumi";
import { config } from "./config";
import { createCloudflareDnsRecords } from "./resources/cloudflare-dns";
import { createVercelDeployment } from "./resources/vercel-deployment";
import { createVercelDomains } from "./resources/vercel-domains";
import { createVercelProject } from "./resources/vercel-project";

/**
 * Main entry point for infrastructure deployment
 * Deployment scope is controlled by environment variables:
 * - DEPLOY_VERCEL=true/false (default: true)
 * - DEPLOY_CLOUDFLARE=true/false (default: true)
 *
 * The bun scripts set these variables to control what gets deployed.
 */

// Check environment variables to determine what to deploy
const deployVercel = process.env.DEPLOY_VERCEL !== "false";
const deployCloudflare = process.env.DEPLOY_CLOUDFLARE !== "false";

// Deploy Vercel resources if enabled
let vercelProjectId: pulumi.Output<string> | undefined;
let apexDomain: string | undefined;
let wwwDomain: string | undefined;
let deploymentUrl: pulumi.Output<string> | undefined;

if (deployVercel) {
  // Create Vercel project
  const vercelProject = createVercelProject();

  // Create Vercel domains
  const { domain: _domain, domainWww: _domainWww } = createVercelDomains(
    vercelProject.id,
  );

  // Create Vercel deployment
  const deployment = createVercelDeployment(vercelProject.id);

  vercelProjectId = vercelProject.id;
  apexDomain = config.domain;
  wwwDomain = config.dns.www.name;
  deploymentUrl = deployment.url;
}

// Deploy Cloudflare DNS records if enabled
let cloudflareZoneId: string | undefined;

if (deployCloudflare) {
  const { apexRecord: _apexRecord, wwwRecord: _wwwRecord } =
    createCloudflareDnsRecords();
  cloudflareZoneId = config.cloudflare.zoneId;
}

/**
 * Export outputs
 */
export const vercelProjectIdOutput = vercelProjectId;
export const apexDomainOutput = apexDomain || config.domain;
export const wwwDomainOutput = wwwDomain || config.dns.www.name;
export const cloudflareZoneIdOutput =
  cloudflareZoneId || config.cloudflare.zoneId;
export const deploymentUrlOutput = deploymentUrl;
