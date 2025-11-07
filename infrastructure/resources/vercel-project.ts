import * as vercel from "@pulumiverse/vercel";
import { config } from "../config";

/**
 * Creates the Vercel project for the personal website
 * @returns Vercel project resource
 */
export function createVercelProject() {
  const vercelProject = new vercel.Project("personal-website", {
    name: config.projectName,
    framework: "nextjs",
    gitRepository: {
      type: "github",
      repo: "votrungquan1999/personal-website",
    },
    buildCommand: "npm run build",
    outputDirectory: ".next",
  });

  return vercelProject;
}

