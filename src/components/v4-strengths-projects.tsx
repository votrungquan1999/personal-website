import { V4StrengthsProjectsUI } from "src/components/v4-strengths-projects.ui";

export function V4StrengthsProjects() {
  const pairs = [
    {
      strength: {
        title: "Product Thinking",
        icon: "🎯",
      },
      project: {
        name: "Bodimatch",
        company: "Bodidata",
        challenge:
          "Internal teams couldn't efficiently process complex body measurements while maintaining accuracy under time pressure",
        solution:
          "Built accessible internal tool with 100% keyboard navigation, web workers for calculations, and optimized workflows for power users",
        impact: ["45% data accuracy improvement", "90% faster processing", "99% UI freeze elimination"],
      },
    },
    {
      strength: {
        title: "Performance Optimization",
        icon: "⚡",
      },
      project: {
        name: "Partners Portal",
        company: "Bodidata",
        challenge:
          "Clients couldn't efficiently manage their workflows due to 8+ second load times and tedious manual processes",
        solution:
          "Implemented server/client caching, API optimization, database normalization, and automated repetitive workflows",
        impact: ["70% load time reduction", "60% API improvement", "50% satisfaction increase"],
      },
    },
    {
      strength: {
        title: "Simplifying Complexity",
        icon: "✨",
      },
      project: {
        name: "Cross-border Tools",
        company: "Ninja Van",
        challenge:
          "Warehouse staff needed extensive training for complex multi-step workflows that were error-prone and slow",
        solution:
          "Designed streamlined interface with barcode scanning, automated tracking, and contextual guidance",
        impact: ["70% manual entry reduction", "50% training time reduction", "55% efficiency gain"],
      },
    },
    {
      strength: {
        title: "Architecture Leadership",
        icon: "🔧",
      },
      project: {
        name: "Event-Driven Architecture",
        company: "Bodidata",
        challenge:
          "Tight coupling between services caused deployment delays, made changes risky, and slowed feature development",
        solution:
          "Promoted event-driven architecture, published libraries to support it, and mentored team on best practices",
        impact: ["50% development friction reduction", "60% faster deployments"],
      },
    },
  ];

  return <V4StrengthsProjectsUI pairs={pairs} />;
}
