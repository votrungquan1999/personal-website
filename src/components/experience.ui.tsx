"use client";

import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Separator } from "src/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import { getProjectIcon, getTechIcon } from "src/lib/tech-icons";
import { Calendar, MapPin } from "lucide-react";
import type { Experience } from "src/data/resume";
import { cn } from "src/lib/utils";

interface ExperienceListProps {
  experiences: Experience[];
}

/**
 * Client component for displaying experience in a timeline
 * Shows key achievements by default with project icons
 */
export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card
          key={`${exp.company}-${exp.startDate}`}
          className={cn(
            "border-border shadow-sm transition-all duration-300 hover:shadow-md",
            "animate-in",
          )}
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: "both",
          }}
        >
          <CardHeader className="pb-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-2 text-sm mb-2">
                  <span className="font-semibold">{exp.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="size-3" />
                    <span>{exp.location}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="size-3" />
                    <span>
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.technologies.map((tech) => {
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
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-card-foreground mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-sm text-card-foreground">
                  {exp.achievements.slice(0, 3).map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                  {exp.achievements.length > 3 && (
                    <Accordion type="single" collapsible className="mt-4">
                      <AccordionItem
                        value="more-achievements"
                        className="border-0"
                      >
                        <AccordionTrigger className="text-sm py-2 hover:no-underline">
                          View {exp.achievements.length - 3} more achievements
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm text-card-foreground">
                            {exp.achievements
                              .slice(3)
                              .map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 leading-relaxed"
                                >
                                  <span className="text-primary mt-1 font-bold">
                                    •
                                  </span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </ul>
              </div>
              {exp.projects && exp.projects.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-3">
                      Key Projects
                    </h4>
                    <div className="space-y-4">
                      {exp.projects.map((project) => {
                        const ProjectIcon = getProjectIcon(project.name);
                        return (
                          <div key={project.name}>
                            <div className="flex items-start gap-2 mb-2">
                              <ProjectIcon className="size-5 text-primary mt-0.5" />
                              <h5 className="font-medium text-card-foreground">
                                {project.name}
                              </h5>
                            </div>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                              {project.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 leading-relaxed"
                                >
                                  <span className="text-foreground mt-1">
                                    •
                                  </span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
