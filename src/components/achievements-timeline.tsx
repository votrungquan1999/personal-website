import { AchievementsTimelineList } from "./achievements-timeline.ui";
import { resumeData } from "src/data/resume";

/**
 * Achievements Timeline section showing progression and impact over time
 * Server component that composes the timeline display
 */
export function AchievementsTimeline() {
  // Extract achievements from experience and projects
  const timelineItems: Array<{
    date: string;
    title: string;
    company: string;
    achievement: string;
    impact?: string;
  }> = [];

  resumeData.experience.forEach((exp) => {
    // Add first 2 achievements from each experience
    exp.achievements.slice(0, 2).forEach((achievement) => {
      const impactMatch = achievement.match(/(\d+%)/);
      timelineItems.push({
        date: exp.startDate,
        title: exp.title,
        company: exp.company,
        achievement,
        impact: impactMatch ? impactMatch[0] : undefined,
      });
    });

    // Add achievements from projects
    exp.projects?.forEach((project) => {
      project.achievements.slice(0, 1).forEach((achievement) => {
        const impactMatch = achievement.match(/(\d+%)/);
        timelineItems.push({
          date: exp.startDate,
          title: project.name,
          company: exp.company,
          achievement,
          impact: impactMatch ? impactMatch[0] : undefined,
        });
      });
    });
  });

  if (timelineItems.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
          Key Achievements Timeline
        </h2>
        <AchievementsTimelineList items={timelineItems} />
      </div>
    </section>
  );
}
