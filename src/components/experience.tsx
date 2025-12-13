import { ExperienceList } from "./experience.ui";
import { resumeData } from "src/data/resume";
import { Separator } from "src/components/ui/separator";

/**
 * Experience section displaying work experience with visible achievements
 * Server component that composes the experience display
 */
export function Experience() {
  if (!resumeData.experience || resumeData.experience.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center max-lg:text-2xl max-md:text-xl max-md:mb-6">
        Experience
      </h2>
      <ExperienceList experiences={resumeData.experience} />
    </section>
  );
}
