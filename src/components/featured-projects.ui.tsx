import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import type { FeaturedProject } from "src/data/resume";
import { getProjectIcon, getTechIcon } from "src/lib/tech-icons";
import { cn } from "src/lib/utils";

interface FeaturedProjectsGridProps {
  projects: FeaturedProject[];
}

/**
 * Server component for displaying featured projects in a grid
 * CSS animations and hover effects work without client code
 */
export function FeaturedProjectsGrid({ projects }: FeaturedProjectsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => {
        const ProjectIcon = getProjectIcon(project.name);

        return (
          <Card
            key={project.name}
            className={cn(
              "border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col",
              "animate-in",
            )}
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: "both",
            }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <ProjectIcon className="size-10 text-primary" />
                {project.company && (
                  <Badge variant="secondary" className="text-xs">
                    {project.company}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
              <CardDescription className="text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              {project.keyMetrics && project.keyMetrics.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2">
                    Key Metrics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.keyMetrics.map((metric) => (
                      <Badge
                        key={metric}
                        variant="outline"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h4 className="text-sm font-semibold text-card-foreground mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs flex items-center gap-1"
                      >
                        <TechIcon className="size-3" />
                        {tech}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
