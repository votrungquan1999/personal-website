import type * as pulumi from "@pulumi/pulumi";
import * as vercel from "@pulumiverse/vercel";
import { config } from "../config";

/**
 * Creates Vercel domain configurations for the project
 * @param projectId - The Vercel project ID
 * @returns Vercel domain resources
 */
export function createVercelDomains(projectId: pulumi.Input<string>) {
  /**
   * Add apex domain to Vercel project
   */
  const vercelProjectDomain = new vercel.ProjectDomain(
    "personal-website-domain",
    {
      projectId: projectId,
      domain: config.domain,
    },
  );

  /**
   * Add www subdomain to Vercel project
   */
  const vercelProjectDomainWww = new vercel.ProjectDomain(
    "personal-website-domain-www",
    {
      projectId: projectId,
      domain: config.dns.www.name,
    },
  );

  return {
    domain: vercelProjectDomain,
    domainWww: vercelProjectDomainWww,
  };
}
