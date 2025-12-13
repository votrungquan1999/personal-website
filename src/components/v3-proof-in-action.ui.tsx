import { Badge } from "src/components/ui/badge";
import type { FeaturedProject } from "src/data/resume";

interface ProjectWithImpact extends FeaturedProject {
  impact: string;
}

interface OutcomeGroup {
  outcomeType: string;
  description: string;
  projects: ProjectWithImpact[];
}

interface V3ProofInActionUIProps {
  outcomeGroups: OutcomeGroup[];
}

export function V3ProofInActionUI({ outcomeGroups }: V3ProofInActionUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-3 max-lg:text-2xl max-md:text-xl">
        Proof in Action
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-md:text-base max-md:mb-8">
        Three types of technical outcomes I consistently deliver:
      </p>

      <div className="space-y-12 max-md:space-y-10">
        {outcomeGroups.map((group) => (
          <div key={group.outcomeType}>
            {/* Outcome header */}
            <div className="mb-6 max-md:mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-2 max-lg:text-xl max-md:text-lg">
                {group.outcomeType}
              </h3>
              <p className="text-base text-muted-foreground max-md:text-sm">
                {group.description}
              </p>
            </div>

            {/* Projects in this outcome group */}
            <div className="space-y-6 max-md:space-y-4">
              {group.projects.map((project) => (
                <div
                  key={`${group.outcomeType}-${project.name}`}
                  className="border-l-4 border-primary pl-6 py-2 max-md:pl-4"
                >
                  <div className="flex items-baseline gap-3 mb-2 max-md:flex-col max-md:gap-1">
                    <h4 className="text-lg font-semibold text-foreground max-md:text-base">
                      {project.name}
                    </h4>
                    {project.company && (
                      <span className="text-sm text-muted-foreground">
                        @ {project.company}
                      </span>
                    )}
                  </div>

                  <p className="text-base text-card-foreground mb-3 max-md:text-sm">
                    {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
