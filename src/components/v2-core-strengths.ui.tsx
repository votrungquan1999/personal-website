import { Badge } from "src/components/ui/badge";

interface Strength {
  title: string;
  description: string;
  expanded: string;
  example: string;
  keyMetric: string;
}

interface V2CoreStrengthsUIProps {
  strengths: Strength[];
}

export function V2CoreStrengthsUI({ strengths }: V2CoreStrengthsUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-8 max-lg:text-2xl max-md:text-xl max-md:mb-6">
        Core Strengths
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6">
        {strengths.map((strength) => (
          <div
            key={strength.title}
            className="border-l-4 border-primary pl-6 max-md:pl-4"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2 max-md:text-base">
              {strength.title}
            </h3>

            <p className="text-base text-card-foreground/80 leading-relaxed max-md:text-sm">
              {strength.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
