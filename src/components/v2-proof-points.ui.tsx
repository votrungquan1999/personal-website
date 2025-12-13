import { Card, CardContent, CardHeader } from "src/components/ui/card";

interface ProofPoint {
  value: string;
  label: string;
  project: string;
  problem: string;
  solution: string;
  metrics: string[];
}

interface V2ProofPointsUIProps {
  proofPoints: ProofPoint[];
}

export function V2ProofPointsUI({ proofPoints }: V2ProofPointsUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-4">
        {proofPoints.map((point) => (
          <Card
            key={point.label}
            className="border-2 border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="text-5xl font-bold text-primary max-lg:text-4xl max-md:text-3xl">
                  {point.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium text-right">
                  {point.project}
                </div>
              </div>
              <div className="text-xl font-semibold text-foreground max-md:text-lg">
                {point.label}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground">
                {point.problem}
              </div>
              <div className="text-sm font-medium text-foreground">
                → {point.solution}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {point.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
