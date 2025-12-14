import { V2FeaturedProjectsUI } from "src/components/v2-featured-projects.ui";
import { resumeData } from "src/data/resume";

export function V2FeaturedProjects() {
  return <V2FeaturedProjectsUI projects={resumeData.featuredProjects} />;
}
