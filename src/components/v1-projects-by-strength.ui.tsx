"use client";

import { Target, Zap, Server, Sparkles, type LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";

interface Project {
  name: string;
  company?: string;
  challenge: string;
  approach: string;
  outcome: string;
  technologies: string[];
}

interface ProjectGroup {
  strengthTitle: string;
  strengthIcon: "Target" | "Zap" | "Server" | "Sparkles";
  projects: Project[];
}

interface V1ProjectsByStrengthUIProps {
  projectGroups: ProjectGroup[];
}

const iconMap: Record<ProjectGroup["strengthIcon"], LucideIcon> = {
  Target: Target,
  Zap: Zap,
  Server: Server,
  Sparkles: Sparkles,
};

export function V1ProjectsByStrengthUI({
  projectGroups,
}: V1ProjectsByStrengthUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold mb-8 max-lg:text-2xl max-md:text-xl max-md:mb-6">
        Proof in Action
      </h2>
      <div className="space-y-12 max-md:space-y-10">
        {projectGroups.map((group, groupIndex) => {
          const Icon = iconMap[group.strengthIcon];
          return (
            <div key={groupIndex}>
              <div className="flex items-center gap-3 mb-6 max-md:mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold max-lg:text-xl max-md:text-lg">
                  {group.strengthTitle}
                </h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 max-md:gap-4">
                {group.projects.map((project, projectIndex) => (
                  <Card
                    key={projectIndex}
                    className="transition-all duration-300 hover:shadow-md border border-border"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg max-md:text-base">
                        {project.name}
                      </CardTitle>
                      {project.company && (
                        <p className="text-sm text-muted-foreground">
                          {project.company}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Challenge → Approach → Outcome */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                            Challenge
                          </p>
                          <p className="text-sm text-card-foreground">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                            Approach
                          </p>
                          <p className="text-sm text-card-foreground">
                            {project.approach}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                            Outcome
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {project.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="pt-3 border-t border-border">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
