import { TestimonialsGrid } from "./testimonials.ui";
import { resumeData } from "src/data/resume";

/**
 * Testimonials section displaying testimonials if available
 * Server component that composes the testimonials display
 */
export function Testimonials() {
  if (!resumeData.testimonials || resumeData.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Testimonials
        </h2>
        <TestimonialsGrid testimonials={resumeData.testimonials} />
      </div>
    </section>
  );
}
