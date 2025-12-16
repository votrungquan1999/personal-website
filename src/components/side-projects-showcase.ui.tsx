import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { SideProject } from "src/data/resume";
import { getTechIcon } from "src/lib/tech-icons";
import Image from "next/image";

interface SideProjectsShowcaseUIProps {
  projectsByCategory: {
    "Business Websites": readonly SideProject[];
    "Developer Tools": readonly SideProject[];
    "Personal Projects": readonly SideProject[];
  };
}

export function SideProjectsShowcaseUI({
  projectsByCategory,
}: SideProjectsShowcaseUIProps) {
  const categories = [
    "Business Websites",
    "Developer Tools",
    "Personal Projects",
  ] as const;

  return (
    <div className="space-y-16">
      {categories.map((category) => {
        const projects = projectsByCategory[category];
        if (!projects || projects.length === 0) return null;

        return (
          <section key={category}>
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => {
                return (
                  <Card
                    key={project.name}
                    className="border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* OG Image */}
                    {project.ogImageUrl && (
                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={project.ogImageUrl}
                          alt={`${project.name} preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {project.fullDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">
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

                      {/* Action buttons */}
                      <div className="flex gap-2 pt-2 mt-auto">
                        <Button asChild size="sm" className="flex-1">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Visit Site
                          </a>
                        </Button>
                        {project.githubUrl && (
                          <Button asChild size="sm" variant="outline">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
