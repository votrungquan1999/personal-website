"use client";

import { Target, Zap, Server, Sparkles, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog";

interface Project {
  name: string;
  company: string;
  challenge: string;
  approach: string;
  outcome: string;
  technologies: string[];
}

interface StrengthCard {
  title: string;
  icon: "Target" | "Zap" | "Server" | "Sparkles";
  metrics: string[];
  description: string;
  projects: Project[];
}

interface V1StrengthBentoUIProps {
  strengths: StrengthCard[];
}

const iconMap: Record<StrengthCard["icon"], LucideIcon> = {
  Target: Target,
  Zap: Zap,
  Server: Server,
  Sparkles: Sparkles,
};

export function V1StrengthBentoUI({ strengths }: V1StrengthBentoUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-8 max-lg:text-2xl max-md:text-xl max-md:mb-6">
        Core Strengths
      </h2>
      <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
        {strengths.map((strength, index) => {
          const Icon = iconMap[strength.icon];
          return (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg border border-border group">
                  <CardContent className="pt-6 pb-4 px-4 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-center mb-4 min-h-[3.5rem] flex items-center justify-center">
                      {strength.title}
                    </h3>

                    {/* Metrics */}
                    <ul className="space-y-2 mb-4 flex-grow">
                      {strength.metrics.map((metric, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary shrink-0">•</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs text-primary hover:text-primary hover:bg-primary/10"
                    >
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Dialog Content */}
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl">
                      {strength.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-base leading-relaxed text-card-foreground">
                    {strength.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Proof: Real Projects */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Proof in Action
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {strength.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="space-y-3 border border-border rounded-lg p-5 bg-card/50"
                      >
                        {/* Project Name & Company */}
                        <div>
                          <h4 className="text-base font-semibold text-foreground">
                            {project.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {project.company}
                          </p>
                        </div>

                        {/* Challenge */}
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                            Challenge
                          </p>
                          <p className="text-sm text-card-foreground leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        {/* Approach */}
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                            Approach
                          </p>
                          <p className="text-sm text-card-foreground leading-relaxed">
                            {project.approach}
                          </p>
                        </div>

                        {/* Outcome */}
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">
                            Outcome
                          </p>
                          <p className="text-sm font-medium text-foreground leading-relaxed">
                            {project.outcome}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
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
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </section>
  );
}
