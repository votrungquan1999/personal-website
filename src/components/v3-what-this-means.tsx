import { resumeData } from "src/data/resume";
import { V3WhatThisMeansUI } from "src/components/v3-what-this-means.ui";

export function V3WhatThisMeans() {
  // Map core strengths to what they mean in practice (technical + behavioral)
  const meanings = [
    {
      title: "Product thinking + technical execution",
      description: "I bridge the gap between user needs and technical solutions. Understanding pain points first, then building features that actually solve problems—not just code that works.",
      icon: "🎯",
      strength: resumeData.coreStrengths[0],
    },
    {
      title: "Rapid learning + adaptability",
      description: "I learn fast and adapt quickly to new challenges. Promoted from junior to mid-level engineer with 5/5 performance reviews. Continuously mastering new technologies like React 19, Next.js 16, and event sourcing.",
      icon: "📈",
      strength: resumeData.coreStrengths[1],
    },
    {
      title: "Ownership + full accountability",
      description: "I take complete responsibility for outcomes, not just tasks. When I own a problem, I see it through from root cause analysis to measurable improvement and maintenance.",
      icon: "🎖️",
      strength: resumeData.coreStrengths[2],
    },
    {
      title: "Impact over complexity",
      description: "Simple solutions that work beat complex ones that impress. I measure success by user outcomes and business impact, not technical sophistication or clever code.",
      icon: "⚡",
      strength: resumeData.coreStrengths[1],
    },
    {
      title: "Process improvement mindset",
      description: "I don't just build features—I improve how we build. Reduced development time by 90% through better workflows, tooling, and mentoring teams on AI best practices.",
      icon: "⚙️",
      strength: resumeData.coreStrengths[2],
    },
    {
      title: "Team enablement + systems thinking",
      description: "I build systems that are fast for customers AND maintainable for developers. Event-driven architecture, AI adoption (GitHub Copilot since 2022), and mentoring multiply team productivity by 40%.",
      icon: "🚀",
      strength: resumeData.coreStrengths[3],
    },
  ];

  return <V3WhatThisMeansUI meanings={meanings} />;
}
