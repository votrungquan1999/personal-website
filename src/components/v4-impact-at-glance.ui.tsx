import { Card, CardContent } from "src/components/ui/card";

interface Metric {
  value: string;
  label: string;
  project: string;
}

interface V4ImpactAtGlanceUIProps {
  metrics: Metric[];
}

export function V4ImpactAtGlanceUI({ metrics }: V4ImpactAtGlanceUIProps) {
  return (
    <section className="mb-16 max-md:mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center max-lg:text-xl max-md:text-lg max-md:mb-6">
        Impact At-a-Glance
      </h2>

      <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="border-2">
            <CardContent className="p-8 text-center max-md:p-6">
              {/* Large metric value */}
              <div className="text-6xl font-bold text-primary mb-4 max-lg:text-5xl max-md:text-4xl">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-base font-semibold text-foreground mb-2 max-md:text-sm">
                {metric.label}
              </div>

              {/* Project */}
              <div className="text-sm text-muted-foreground max-md:text-xs">
                {metric.project}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
