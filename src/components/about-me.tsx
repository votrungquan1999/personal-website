import { Card, CardContent } from "src/components/ui/card";
import { resumeData } from "src/data/resume";

/**
 * About Me section displaying personal narrative and engineering philosophy
 * Server component that composes the about content
 */
export function AboutMe() {
  if (!resumeData.aboutMe) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
        <Card className="border-border shadow-sm">
          <CardContent className="p-8">
            <p className="text-base leading-7 text-card-foreground">
              {resumeData.aboutMe}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
