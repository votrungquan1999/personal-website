import { resumeData } from "src/data/resume";
import { V2PhilosophyUI } from "src/components/v2-philosophy.ui";

export function V2Philosophy() {
  const heading = "How I Approach Work";

  // Break philosophy into scannable principles instead of long paragraph
  const principles = [
    {
      icon: "🎯" as const,
      title: "Problem-First Thinking",
      description:
        "I ask 'How can this be better?' rather than just 'Can this work?'",
    },
    {
      icon: "🔍" as const,
      title: "Deep Understanding",
      description:
        "Great engineering starts with understanding problems deeply, not jumping to solutions",
    },
    {
      icon: "🤝" as const,
      title: "Collaborative Execution",
      description:
        "I work effectively with teams, translating between product and technical perspectives",
    },
    {
      icon: "📈" as const,
      title: "Measurable Outcomes",
      description:
        "Every project should have clear success metrics and demonstrable business impact",
    },
    {
      icon: "♻️" as const,
      title: "Continuous Improvement",
      description:
        "I focus on improving both the product and the development process itself",
    },
    {
      icon: "🏗️" as const,
      title: "Sustainable Solutions",
      description:
        "Building maintainable, scalable code that teams can work with long-term",
    },
  ];

  return <V2PhilosophyUI heading={heading} principles={principles} />;
}
