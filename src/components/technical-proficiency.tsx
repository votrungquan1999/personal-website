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
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center max-lg:text-2xl max-md:text-xl max-md:mb-6">
        Tools & Technologies
      </h2>
      <TechnicalProficiencyGrid
        categories={resumeData.technicalProficiency}
      />
    </section>
  );
}
