import { Card, CardContent } from "src/components/ui/card";
import { ArrowDown } from "lucide-react";

interface Strength {
  title: string;
  icon: string;
}

interface Project {
  name: string;
  company: string;
  challenge: string;
  solution: string;
  impact: string[];
}

interface StrengthProjectPair {
  strength: Strength;
  project: Project;
}

interface V4StrengthsProjectsUIProps {
  pairs: StrengthProjectPair[];
}

export function V4StrengthsProjectsUI({ pairs }: V4StrengthsProjectsUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-3 max-lg:text-2xl max-md:text-xl">
        Strengths + Proof
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-md:text-base max-md:mb-8">
        Each capability backed by measurable outcomes:
      </p>

      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-md:gap-4">
        {pairs.map((pair) => (
          <Card key={pair.strength.title} className="border-2">
            <CardContent className="p-5 max-md:p-4">
              {/* Strength header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border max-md:mb-3 max-md:pb-2">
                <span className="text-2xl max-md:text-xl">{pair.strength.icon}</span>
                <span className="text-base font-bold text-primary max-md:text-sm">
                  {pair.strength.title}
                </span>
              </div>

              {/* Project details */}
              <div className="mb-3 max-md:mb-2">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="text-lg font-bold text-foreground max-md:text-base">
                    {pair.project.name}
                  </h4>
                  <span className="text-xs text-muted-foreground max-md:text-[10px]">
                    {pair.project.company}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed max-md:text-xs">
                  {pair.project.challenge}
                </p>
              </div>

              <p className="text-sm text-foreground leading-relaxed mb-3 max-md:text-xs max-md:mb-2.5">
                {pair.project.solution}
              </p>

              <div className="space-y-1.5 max-md:space-y-1">
                {pair.project.impact.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-2 text-sm font-semibold text-primary max-md:text-xs"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {metric}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
