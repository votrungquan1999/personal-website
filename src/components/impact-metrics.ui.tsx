import { TrendingUp, Zap, Clock, Target } from "lucide-react";
import { Card, CardContent } from "src/components/ui/card";
import type { ImpactMetric } from "src/data/resume";
import { cn } from "src/lib/utils";

interface ImpactMetricsGridProps {
  metrics: ImpactMetric[];
}

/**
 * Icon mapping for different metric types
 */
const metricIcons = {
  Faster: Zap,
  Improvement: TrendingUp,
  Reduction: Target,
  Saved: Clock,
  Default: TrendingUp,
};

/**
 * Gets the appropriate icon for a metric label
 */
function getMetricIcon(label: string) {
  const iconKey =
    Object.keys(metricIcons).find((key) =>
      label.toLowerCase().includes(key.toLowerCase()),
    ) || "Default";
  return (
    metricIcons[iconKey as keyof typeof metricIcons] || metricIcons.Default
  );
}

/**
 * Server component for displaying impact metrics in a grid
 * CSS animations and hover effects work without client code
 */
export function ImpactMetricsGrid({ metrics }: ImpactMetricsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => {
        const Icon = getMetricIcon(metric.label);
        return (
          <Card
            key={`${metric.value}-${metric.label}`}
            className={cn(
              "border-border shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105",
              "animate-in",
            )}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Icon className="size-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-foreground">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-card-foreground">
                  {metric.label}
                </div>
                {metric.description && (
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
