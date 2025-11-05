import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { AboutMe } from "src/components/about-me";
import { AchievementsTimeline } from "src/components/achievements-timeline";
import { CoreStrengths } from "src/components/core-strengths";
import { Experience } from "src/components/experience";
import { FeaturedProjects } from "src/components/featured-projects";
import { ImpactMetrics } from "src/components/impact-metrics";
import { TechnicalProficiency } from "src/components/technical-proficiency";
import { Testimonials } from "src/components/testimonials";
import { ThemeToggle } from "src/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Separator } from "src/components/ui/separator";
import { resumeData } from "src/data/resume";

/**
 * Personal website homepage displaying comprehensive information about engineering excellence
 * with improved visual hierarchy and skimmable content
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-12">
          <Card className="border-border shadow-lg bg-linear-to-br from-card to-card/50">
            <CardHeader className="pb-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-4xl font-bold text-card-foreground mb-2">
                    {resumeData.name}
                  </CardTitle>
                  <CardDescription className="text-xl text-muted-foreground">
                    {resumeData.title}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="shadow-sm"
                  >
                    <Link
                      href="/resume.pdf"
                      download
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="size-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Mail className="size-4" />
                    {resumeData.contact.email}
                  </a>
                  <a
                    href={`tel:${resumeData.contact.phone}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Phone className="size-4" />
                    {resumeData.contact.phone}
                  </a>
                  <a
                    href={`https://${resumeData.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Github className="size-4" />
                    {resumeData.contact.github}
                  </a>
                  <a
                    href={`https://${resumeData.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Linkedin className="size-4" />
                    {resumeData.contact.linkedin}
                  </a>
                </div>

                {/* Professional Summary */}
                <div className="pt-4 border-t border-border">
                  <p className="text-base leading-7 text-card-foreground">
                    {resumeData.professionalSummary}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Impact Metrics */}
        <ImpactMetrics />

        <Separator className="my-12" />

        {/* About Me */}
        <AboutMe />

        <Separator className="my-12" />

        {/* Featured Projects */}
        <FeaturedProjects />

        <Separator className="my-12" />

        {/* Tools & Technologies */}
        <TechnicalProficiency />

        <Separator className="my-12" />

        {/* Core Strengths */}
        <CoreStrengths />

        <Separator className="my-12" />

        {/* Experience */}
        <Experience />

        <Separator className="my-12" />

        {/* Achievements Timeline */}
        <AchievementsTimeline />

        {/* Testimonials */}
        <Testimonials />

        <Separator className="my-12" />

        {/* Education */}
        <section className="mb-12">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
              Education
            </h2>
            <Card className="border-border shadow-sm">
              <Accordion type="single" collapsible>
                <AccordionItem value="education" className="border-0 px-0">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex flex-col items-start gap-1 text-left">
                      <CardTitle className="text-lg">
                        {resumeData.education.degree}
                      </CardTitle>
                      <CardDescription>
                        {resumeData.education.institution} •{" "}
                        {resumeData.education.location} •{" "}
                        {resumeData.education.startDate} –{" "}
                        {resumeData.education.endDate}
                      </CardDescription>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-2 text-sm text-card-foreground">
                      {resumeData.education.minors && (
                        <div>
                          <span className="font-medium">Minors: </span>
                          <span>{resumeData.education.minors.join(", ")}</span>
                        </div>
                      )}
                      {resumeData.education.gpa && (
                        <div>
                          <span className="font-medium">GPA: </span>
                          <span>{resumeData.education.gpa}</span>
                        </div>
                      )}
                      {resumeData.education.honors &&
                        resumeData.education.honors.length > 0 && (
                          <div>
                            <span className="font-medium">Honors: </span>
                            <span>
                              {resumeData.education.honors.join(", ")}
                            </span>
                          </div>
                        )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </section>

        {/* Freelance Work */}
        {resumeData.freelanceWork.length > 0 && (
          <>
            <Separator className="my-12" />
            <section className="mb-12">
              <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
                  Freelance Work
                </h2>
                <div className="space-y-6">
                  {resumeData.freelanceWork.map((work) => (
                    <Card
                      key={`${work.project}-${work.startDate}`}
                      className="border-border shadow-sm"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {work.project}
                        </CardTitle>
                        <CardDescription>
                          {work.startDate} – {work.endDate}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {work.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs border border-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <ul className="space-y-2 text-sm text-card-foreground">
                            {work.achievements.map((achievement) => (
                              <li
                                key={achievement}
                                className="flex items-start gap-2"
                              >
                                <span className="text-foreground mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
