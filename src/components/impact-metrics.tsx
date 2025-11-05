import { ImpactMetricsGrid } from "./impact-metrics.ui";
import { resumeData } from "src/data/resume";

/**
 * Impact Metrics section displaying top achievement statistics
 * Server component that composes the metrics display
 */
export function ImpactMetrics() {
  if (!resumeData.impactMetrics || resumeData.impactMetrics.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Impact at a Glance
        </h2>
        <ImpactMetricsGrid metrics={resumeData.impactMetrics} />
      </div>
    </section>
  );
}
