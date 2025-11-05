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
    <section className="mb-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Experience
        </h2>
        <ExperienceList experiences={resumeData.experience} />
      </div>
    </section>
  );
}
