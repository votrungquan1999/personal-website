import * as cloudflare from "@pulumi/cloudflare";
import { config } from "../config";

/**
 * Vercel DNS configuration
 * Note: Vercel provides specific IP addresses for apex domains and CNAME targets for subdomains
 * These are the standard Vercel DNS values
 */
const vercelApexIP = "76.76.21.21"; // Vercel's apex domain IP (standard for all Vercel projects)
const vercelCnameTarget = "cname.vercel-dns.com"; // Vercel's CNAME target for subdomains

/**
 * Creates Cloudflare DNS records for Vercel deployment
 * @returns Cloudflare DNS record resources
 */
export function createCloudflareDnsRecords() {
  /**
   * Cloudflare DNS Record for apex domain (quanvo.dev)
   * Uses A record pointing to Vercel IP
   * proxied = false (DNS-only mode, gray cloud)
   */
  const apexDnsRecord = new cloudflare.DnsRecord("apex-dns-record", {
    zoneId: config.cloudflare.zoneId,
    name: "@", // @ represents the apex domain
    type: "A",
    content: vercelApexIP,
    ttl: 1, // Auto TTL (1 = automatic)
    proxied: false, // DNS-only mode (gray cloud) - CRITICAL: Must be false for Vercel
  });

  /**
   * Cloudflare DNS Record for www subdomain (www.quanvo.dev)
   * Uses CNAME pointing to Vercel CNAME target
   * proxied = false (DNS-only mode, gray cloud)
   */
  const wwwDnsRecord = new cloudflare.DnsRecord("www-dns-record", {
    zoneId: config.cloudflare.zoneId,
    name: "www",
    type: "CNAME",
    content: vercelCnameTarget,
    ttl: 1, // Auto TTL (1 = automatic)
    proxied: false, // DNS-only mode (gray cloud) - CRITICAL: Must be false for Vercel
  });

  return {
    apexRecord: apexDnsRecord,
    wwwRecord: wwwDnsRecord,
  };
}

