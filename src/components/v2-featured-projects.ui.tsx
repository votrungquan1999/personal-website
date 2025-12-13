import { Badge } from "src/components/ui/badge";

interface FeaturedProject {
  name: string;
  description: string;
  company: string;
  technologies: string[];
  keyMetrics: string[];
}

interface V2FeaturedProjectsUIProps {
  projects: FeaturedProject[];
}

export function V2FeaturedProjectsUI({ projects }: V2FeaturedProjectsUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-8 max-lg:text-2xl max-md:text-xl max-md:mb-6">
        Featured Work
      </h2>

      <div className="space-y-12 max-md:space-y-8">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="border-l-4 border-primary pl-8 max-md:pl-4"
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-baseline gap-3 mb-2 max-md:flex-col max-md:gap-1">
                <h3 className="text-2xl font-bold text-foreground max-lg:text-xl max-md:text-lg">
                  {project.name}
                </h3>
                {project.company && (
                  <span className="text-sm text-muted-foreground">
                    @ {project.company}
                  </span>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-card-foreground leading-relaxed mb-4 max-md:text-sm">
              {project.description}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border/50">
              {project.keyMetrics.map((metric) => (
                <div
                  key={metric}
                  className="flex items-center gap-2 text-sm font-medium text-primary max-md:text-xs"
                >
                  <span className="text-primary">✓</span>
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
