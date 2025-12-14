import { resumeData } from "src/data/resume";
import { V2CoreStrengthsUI } from "src/components/v2-core-strengths.ui";

export function V2CoreStrengths() {
  // Expand strengths with user-focused problem framing
  const strengths = [
    {
      title: resumeData.coreStrengths[0].title,
      description: resumeData.coreStrengths[0].description,
      expanded:
        "I believe great products start with understanding user pain points. Before writing code, I analyze workflows, identify friction, and design solutions that feel natural. This approach has consistently delivered measurable business outcomes.",
      example:
        "Cross-border Tools — Warehouse staff couldn't process shipments efficiently because complex workflows required 50+ clicks per task, causing bottlenecks and errors. I analyzed their daily operations, identified repetitive patterns, and designed an intuitive scanning interface with smart defaults that reduced interactions by 80%, cutting training time in half.",
      keyMetric: "80% reduction in required interactions",
    },
    {
      title: resumeData.coreStrengths[1].title,
      description: resumeData.coreStrengths[1].description,
      expanded:
        "Accessibility isn't an afterthought — it's a core requirement. I build with Radix primitives and ARIA patterns from day one, ensuring every user can navigate efficiently. Performance and accessibility go hand in hand in my work.",
      example:
        "Partners Portal — Power users' productivity dropped 30% as constant keyboard-to-mouse switching broke their flow during data-heavy tasks. I built accessible UI using Radix primitives with ARIA patterns, achieving 100% keyboard navigation that enabled users to work 30% faster without breaking their mental flow.",
      keyMetric: "100% keyboard navigation",
    },
    {
      title: resumeData.coreStrengths[2].title,
      description: resumeData.coreStrengths[2].description,
      expanded:
        "I design backend systems with performance and maintainability in mind. Multi-layer caching, query optimization, and event-driven architecture are tools I use to build scalable solutions that handle real-world traffic. I solve problems not just for customers, but also for systems and developers.",
      example:
        "Partners Portal — Developers were afraid to deploy changes or perform database migrations because tight coupling meant every change risked breaking unrelated functionality, requiring days of manual testing. I implemented event-driven architecture and event sourcing, decoupling services and enabling confident deployments. This reduced error resolution time by 60% and improved API response times by 70%.",
      keyMetric: "60% faster error resolution",
    },
    {
      title: resumeData.coreStrengths[3].title,
      description: resumeData.coreStrengths[3].description,
      expanded:
        "Since 2022, I've been using GitHub Copilot and Cursor to boost productivity. But it's not just about speed — I've established best practices and mentored teams on effective AI tool adoption, creating a 30% productivity boost across the team.",
      example:
        "Team Leadership — The team struggled with slow development cycles and inconsistent code quality as traditional workflows couldn't keep pace with product demands. I adopted GitHub Copilot early (2022), established AI-assisted coding practices, and mentored the team, resulting in 40% faster development and improved code consistency.",
      keyMetric: "40% faster development",
    },
  ];

  return <V2CoreStrengthsUI strengths={strengths} />;
}
