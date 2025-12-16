import * as vercel from "@pulumiverse/vercel";
import { config } from "../config";

/**
 * Creates Vercel domain configurations for main domains (apex + www)
 * Links main domains to the personal website Vercel project
 *
 * @returns Object containing Vercel ProjectDomain resources
 * @throws Error if personal website Vercel project lookup fails
 */
export function createMainDomains() {
  // Look up the existing personal website Vercel project
  const project = vercel.getProjectOutput({
    name: config.projectName,
  });

  // Link apex domain (quanvo.dev) to personal website
  const apexDomain = new vercel.ProjectDomain("apex-domain", {
    projectId: project.id,
    domain: config.domain,
  });

  // Link www subdomain to personal website
  const wwwDomain = new vercel.ProjectDomain("www-domain", {
    projectId: project.id,
    domain: config.dns.www.name,
  });

  return {
    apexDomain,
    wwwDomain,
  };
}
