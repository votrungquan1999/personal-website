import { config } from "./config";
import { createDnsRecords } from "./resources/cloudflare-dns";
import { createMainDomains } from "./resources/vercel-main-domains";
import { createSubdomainDomains } from "./resources/vercel-subdomain-domains";

/**
 * Main entry point for infrastructure deployment
 *
 * This infrastructure manages:
 * 1. DNS records in Cloudflare (A and CNAME records)
 * 2. Domain linking to existing Vercel projects
 *
 * It does NOT create or deploy Vercel projects - those must already exist.
 */

console.log("🚀 Deploying DNS records and Vercel domain configuration...\n");

// Step 1: Create DNS records in Cloudflare
console.log("📋 Creating DNS records in Cloudflare...");
const {
  apexRecord: _apexRecord,
  wwwRecord: _wwwRecord,
  subdomainRecords: _subdomainRecords,
} = createDnsRecords();

// Step 2: Link main domains (apex + www) to personal website project
console.log("🔗 Linking main domains to personal-website project...");
const { apexDomain: _apexDomain, wwwDomain: _wwwDomain } = createMainDomains();

// Step 3: Link subdomains to their respective Vercel projects
console.log("🔗 Linking subdomains to side project Vercel projects...");
const { subdomainDomains: _subdomainDomains } = createSubdomainDomains();

console.log("\n✅ Infrastructure deployment complete!");

/**
 * Export outputs
 */
export const apexDomainOutput = config.domain;
export const wwwDomainOutput = config.dns.www.name;
export const cloudflareZoneIdOutput = config.cloudflare.zoneId;
export const personalWebsiteProjectOutput = config.projectName;
