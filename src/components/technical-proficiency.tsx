import { resumeData } from "src/data/resume";
import { TechnicalProficiencyGrid } from "./technical-proficiency.ui";

/**
 * Technical Proficiency section displaying technologies visually
 * Server component that composes the technologies display
 */
export function TechnicalProficiency() {
  if (
    !resumeData.technicalProficiency ||
    resumeData.technicalProficiency.length === 0
  ) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Tools & Technologies
        </h2>
        <TechnicalProficiencyGrid
          categories={resumeData.technicalProficiency}
        />
      </div>
    </section>
  );
}
