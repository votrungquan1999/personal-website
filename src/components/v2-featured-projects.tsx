import { resumeData } from "src/data/resume";
import { V2FeaturedProjectsUI } from "src/components/v2-featured-projects.ui";

export function V2FeaturedProjects() {
  // Take all 4 featured projects
  const projects = resumeData.featuredProjects.map((project) => ({
    name: project.name,
    description: project.description,
    company: project.company || "",
    technologies: project.technologies,
    keyMetrics: project.keyMetrics,
  }));

  return <V2FeaturedProjectsUI projects={projects} />;
}
