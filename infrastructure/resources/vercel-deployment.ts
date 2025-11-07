import type * as pulumi from "@pulumi/pulumi";
import * as vercel from "@pulumiverse/vercel";

/**
 * Creates a production deployment for the Vercel project
 * @param projectId - The Vercel project ID
 * @returns Vercel deployment resource
 */
export function createVercelDeployment(projectId: pulumi.Input<string>) {
  /**
   * Create initial production deployment
   * This triggers an actual deployment from the connected Git repository
   * For Git-connected projects, this will deploy from the main branch
   */
  const productionDeployment = new vercel.Deployment("production-deployment", {
    projectId: projectId,
    production: true,
    ref: "main", // Deploy from main branch (requires project to have gitRepository configured)
  });

  return productionDeployment;
}
