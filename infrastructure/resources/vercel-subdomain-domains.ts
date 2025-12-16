import * as vercel from "@pulumiverse/vercel";
import { config } from "../config";

/**
 * Creates Vercel domain configurations for subdomains
 * Links subdomains to their respective existing Vercel projects
 *
 * @returns Object containing array of Vercel ProjectDomain resources
 * @throws Error if Vercel project lookup fails for any subdomain
 */
export function createSubdomainDomains() {
  const subdomainDomains = config.dns.subdomains.map((subdomain) => {
    // Look up the existing Vercel project by name
    // This will fail if the project doesn't exist in Vercel
    const project = vercel.getProjectOutput({
      name: subdomain.vercelProjectName,
    });

    // Create a ProjectDomain resource to link the subdomain to the project
    // Vercel will automatically handle SSL certificate provisioning
    return new vercel.ProjectDomain(`${subdomain.name}-domain`, {
      projectId: project.id,
      domain: subdomain.fullDomain,
      // gitBranch can be optionally specified here if needed
      // redirect and redirectStatusCode for domain redirects
    });
  });

  return {
    subdomainDomains,
  };
}
