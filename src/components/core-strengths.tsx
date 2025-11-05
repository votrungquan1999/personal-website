import { CoreStrengthsGrid } from "./core-strengths.ui";
import { resumeData } from "src/data/resume";

/**
 * Core Strengths section displaying strengths with visible achievements
 * Server component that composes the strengths display
 */
export function CoreStrengths() {
  if (!resumeData.coreStrengths || resumeData.coreStrengths.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Core Strengths
        </h2>
        <CoreStrengthsGrid strengths={resumeData.coreStrengths} />
      </div>
    </section>
  );
}
