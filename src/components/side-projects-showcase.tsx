import { SideProjectsShowcaseUI } from "./side-projects-showcase.ui";
import { resumeData } from "src/data/resume";

/**
 * Side projects showcase - groups projects by category
 * Server component that composes the detailed projects display
 */
export function SideProjectsShowcase() {
  if (!resumeData.sideProjects || resumeData.sideProjects.length === 0) {
    return null;
  }

  // Group projects by category
  const projectsByCategory = {
    "Business Websites": resumeData.sideProjects.filter(
      (p) => p.category === "Business Websites",
    ),
    "Developer Tools": resumeData.sideProjects.filter(
      (p) => p.category === "Developer Tools",
    ),
    "Personal Projects": resumeData.sideProjects.filter(
      (p) => p.category === "Personal Projects",
    ),
  };

  return <SideProjectsShowcaseUI projectsByCategory={projectsByCategory} />;
}
