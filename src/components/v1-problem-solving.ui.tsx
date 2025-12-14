"use client";

import {
  Search,
  Target,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "src/components/ui/card";

interface Step {
  title: string;
  icon: "Search" | "Target" | "Rocket";
  principles: string[];
}

interface V1ProblemSolvingUIProps {
  steps: Step[];
}

const iconMap: Record<Step["icon"], LucideIcon> = {
  Search: Search,
  Target: Target,
  Rocket: Rocket,
};

export function V1ProblemSolvingUI({ steps }: V1ProblemSolvingUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center max-lg:text-2xl max-md:text-xl max-md:mb-6">
        How I Solve Problems
      </h2>
      <div className="relative">
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-md:gap-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative">
                <Card className="h-full border border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl max-md:text-lg">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.principles.map((principle, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary">•</span>
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                {!isLast && (
                  <ArrowRight className="absolute top-1/2 -right-3 -translate-y-1/2 translate-x-1/2 w-6 h-6 text-muted-foreground max-lg:hidden" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
