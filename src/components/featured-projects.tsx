import { FeaturedProjectsGrid } from "./featured-projects.ui";
import { resumeData } from "src/data/resume";

/**
 * Featured Projects section highlighting top projects
 * Server component that composes the projects display
 */
export function FeaturedProjects() {
  if (
    !resumeData.featuredProjects ||
    resumeData.featuredProjects.length === 0
  ) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Featured Projects
        </h2>
        <FeaturedProjectsGrid projects={resumeData.featuredProjects} />
      </div>
    </section>
  );
}
