import React from "react";
import { Card, CardContent } from "src/components/ui/card";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface V3ApproachUIProps {
  steps: Step[];
}

export function V3ApproachUI({ steps }: V3ApproachUIProps) {
  return (
    <section className="mb-16 max-md:mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6 max-md:text-xl max-md:mb-5">
        How I Work:
      </h2>

      <div className="flex items-stretch gap-3 max-md:flex-col max-md:gap-6">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <Card className="flex-1 flex flex-col">
              <CardContent className="p-5 max-md:p-4 flex-1">
                {/* Icon + Title row */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-base max-md:w-7 max-md:h-7 max-md:text-sm">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground max-md:text-base">
                    {step.title}
                  </h3>
                </div>

                {/* Description row */}
                <p className="text-sm text-muted-foreground leading-relaxed max-md:text-xs">
                  {step.description}
                </p>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="flex-shrink-0 text-2xl text-muted-foreground font-light pt-2 max-md:hidden">
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
