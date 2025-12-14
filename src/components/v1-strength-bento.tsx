import { resumeData } from "src/data/resume";
import { V1StrengthBentoUI } from "./v1-strength-bento.ui";

export function V1StrengthBento() {
  // Compact bento cards with bullet metrics + full proof in dialog
  const strengthCards = [
    {
      title: "User-Centered Design",
      icon: "Target" as const,
      metrics: [
        "80%↓ clicks (Cross-border)",
        "50%↑ satisfaction (Partners)",
        "90%↓ dev time (Process)",
      ],
      description:
        "I start with understanding actual user pain points, then design intuitive solutions that eliminate unnecessary complexity. The goal is to make systems that people naturally understand and enjoy using.",
      // Real projects as proof
      projects: [
        {
          name: resumeData.featuredProjects[1].name, // Partners Portal
          company: resumeData.featuredProjects[1].company,
          challenge:
            "Clients wasted hours repeating the same manual data entry tasks over and over, causing frustration and errors",
          approach:
            "Analyzed user workflows, identified pain points, and designed automated features to streamline operations",
          outcome:
            "50% increase in customer satisfaction by eliminating repetitive tasks and reducing errors",
          technologies: [
            "Next.js",
            "TypeScript",
            "User Research",
            "Workflow Design",
          ],
        },
        {
          name: resumeData.featuredProjects[2].name, // Cross-border Tools
          company: resumeData.featuredProjects[2].company,
          challenge:
            "Warehouse staff needed 10 clicks per task, slowing operations and causing frequent manual entry errors",
          approach:
            "Designed intuitive scanning workflows with smart defaults and automated tracking",
          outcome:
            "80% reduction in clicks (10 → 2), 50% less training time, 70% less manual entry",
          technologies: ["Next.js", "TypeScript", "UX Design", "Documentation"],
        },
      ],
    },
    {
      title: "UI Engineering",
      icon: "Zap" as const,
      metrics: ["100% keyboard nav", "99%↓ UI freeze time", "30%↓ input time"],
      description:
        "I build accessible, performant interfaces using modern web standards and best practices. Every user should have a smooth experience, whether they use keyboard navigation or need responsive interactions during heavy calculations.",
      // Real projects as proof
      projects: [
        {
          name: resumeData.featuredProjects[1].name, // Partners Portal
          company: resumeData.featuredProjects[1].company,
          challenge:
            "Power users constantly had to switch between keyboard and mouse, breaking their flow and slowing them down significantly",
          approach:
            "Built accessible UI using Radix primitives with ARIA patterns, ensuring WCAG 2.1 compliance",
          outcome:
            "100% keyboard navigation achieved, enabling users to work 30% faster without breaking flow",
          technologies: ["Next.js", "TypeScript", "Radix UI", "Shadcn UI"],
        },
        {
          name: resumeData.featuredProjects[0].name, // Bodimatch
          company: resumeData.featuredProjects[0].company,
          challenge:
            "Users experienced 10+ second UI freezes during calculations, unable to do anything while waiting",
          approach:
            "Implemented web workers for background processing, designed clear loading states and progress indicators",
          outcome:
            "99% reduction in UI freeze time, users can continue working while calculations run in background",
          technologies: resumeData.featuredProjects[0].technologies.slice(0, 3),
        },
      ],
    },
    {
      title: "Backend Optimization",
      icon: "Server" as const,
      metrics: ["90%↓ load time", "50%↓ dev friction", "5s → 0.5s API"],
      description:
        "I optimize backend systems for both user experience and developer productivity. Through smart caching strategies and decoupled architectures, I make applications fast while keeping the codebase maintainable.",
      // Real projects as proof
      projects: [
        {
          name: resumeData.featuredProjects[1].name, // Partners Portal
          company: resumeData.featuredProjects[1].company,
          challenge:
            "Users stared at loading screens for 5+ seconds every time they opened a page, losing focus and productivity",
          approach:
            "Implemented multi-layer caching strategy with Redis, optimized database queries, and normalized data structure",
          outcome:
            "90% reduction in load time (5s → 0.5s), dramatically improving user experience and workflow",
          technologies: ["Node.js", "MongoDB", "Redis", "Query Optimization"],
        },
        {
          name: "Event-Driven Architecture",
          company: resumeData.experience[0].company,
          challenge:
            "Teams feared making changes because a single bug could break multiple unrelated features, slowing down development. It was also hard to change database schemas without breaking existing systems.",
          approach:
            "Promoted and implemented event-driven architecture with event sourcing to decouple systems and reduce inter-service dependencies",
          outcome:
            "50% reduction in development friction, teams can now ship changes quickly without worrying about breaking other systems",
          technologies: ["Event-Driven", "Event Sourcing", "TypeScript", "Bun"],
        },
      ],
    },
    {
      title: "AI Early Adoption",
      icon: "Sparkles" as const,
      metrics: [
        "40%↑ dev speed",
        "30%↑ team productivity",
        "Early adopter (2022)",
      ],
      description:
        "I adopted GitHub Copilot in 2022 and have been leveraging AI to accelerate development ever since. Beyond personal use, I mentor teams on AI tools and train non-technical staff to automate their daily tasks.",
      // Real projects as proof
      projects: [
        {
          name: "Team AI Integration",
          company: resumeData.experience[0].company,
          challenge:
            "Developers spent hours on repetitive boilerplate code and routine tasks, reducing time for creative problem-solving",
          approach:
            "Early adoption of GitHub Copilot (2022) and Cursor, established best practices and trained team members",
          outcome:
            "40% faster development, 30% team productivity boost through AI tool adoption and mentorship",
          technologies: [
            "GitHub Copilot",
            "Cursor",
            "AI Workflows",
            "Team Training",
          ],
        },
        {
          name: "AI-Powered Operations Training",
          company: resumeData.experience[0].company,
          challenge:
            "Operations team and non-technical staff struggled with repetitive manual tasks that could be automated with AI",
          approach:
            "Trained operators to use AI tools (ChatGPT, agentic browser like Comet) for daily tasks like documentation, data analysis, and problem-solving",
          outcome:
            "Empowered non-technical team members to automate routine tasks, improving efficiency and job satisfaction",
          technologies: ["ChatGPT", "Comet", "AI Tools", "Training Programs"],
        },
      ],
    },
  ];

  return <V1StrengthBentoUI strengths={strengthCards} />;
}
