import { resumeData } from "src/data/resume";
import { V1ProjectsByStrengthUI } from "./v1-projects-by-strength.ui";

export function V1ProjectsByStrength() {
  // Map projects to strengths with full context
  const projectsByStrength = [
    {
      strengthTitle: "User-Centered Product Design",
      strengthIcon: "Target" as const,
      projects: [
        {
          name: resumeData.featuredProjects[1].name, // Partners Portal
          company: resumeData.featuredProjects[1].company,
          challenge: "Clients wasted hours repeating the same manual data entry tasks over and over, causing frustration and errors",
          approach: "Analyzed user workflows, identified pain points, and designed automated features to streamline operations",
          outcome: "50% increase in customer satisfaction by eliminating repetitive tasks and reducing errors",
          technologies: resumeData.featuredProjects[1].technologies.slice(0, 4),
        },
        {
          name: resumeData.featuredProjects[2].name, // Cross-border Tools
          company: resumeData.featuredProjects[2].company,
          challenge: "New warehouse staff struggled for weeks to learn the system, and experienced workers wasted hours on tedious manual data entry",
          approach: "Designed intuitive scanning workflows with comprehensive documentation and automated tracking",
          outcome: "50% reduction in training time, 70% less manual entry, 55% efficiency improvement",
          technologies: resumeData.featuredProjects[2].technologies.slice(0, 4),
        },
      ],
    },
    {
      strengthTitle: "UI Engineering Excellence",
      strengthIcon: "Zap" as const,
      projects: [
        {
          name: resumeData.featuredProjects[1].name, // Partners Portal
          company: resumeData.featuredProjects[1].company,
          challenge: "Power users constantly had to switch between keyboard and mouse, breaking their flow and slowing them down significantly",
          approach: "Built accessible UI using Radix primitives with ARIA patterns, ensuring WCAG 2.1 compliance",
          outcome: "100% keyboard navigation achieved, enabling users to work 30% faster without breaking flow",
          technologies: ["Next.js", "TypeScript", "Radix UI", "Shadcn UI"],
        },
        {
          name: resumeData.featuredProjects[0].name, // Bodimatch
          company: resumeData.featuredProjects[0].company,
          challenge: "Users experienced 10+ second UI freezes during calculations, unable to do anything while waiting",
          approach: "Implemented web workers for background processing, designed clear loading states and progress indicators",
          outcome: "99% reduction in UI freeze time, users can continue working while calculations run in background",
          technologies: resumeData.featuredProjects[0].technologies.slice(0, 3),
        },
      ],
    },
    {
      strengthTitle: "Backend Optimization",
      strengthIcon: "Server" as const,
      projects: [
        {
          name: resumeData.featuredProjects[1].name, // Partners Portal
          company: resumeData.featuredProjects[1].company,
          challenge: "Users stared at loading screens for 5+ seconds every time they opened a page, losing focus and productivity",
          approach: "Implemented multi-layer caching strategy with Redis, optimized database queries, and normalized data structure",
          outcome: "90% reduction in load time (5s → 0.5s), dramatically improving user experience and workflow",
          technologies: ["Node.js", "MongoDB", "Redis", "Query Optimization"],
        },
        {
          name: "Event-Driven Architecture Migration",
          company: resumeData.experience[0].company,
          challenge: "Teams feared making changes because a single bug could break multiple unrelated features, slowing down development",
          approach: "Promoted and implemented event-driven architecture to decouple systems and reduce inter-service dependencies",
          outcome: "50% reduction in development friction, teams can now ship changes quickly without worrying about breaking other systems",
          technologies: ["Event-Driven", "Microservices", "Message Queue", "Go"],
        },
      ],
    },
    {
      strengthTitle: "AI Early Adoption",
      strengthIcon: "Sparkles" as const,
      projects: [
        {
          name: "Team AI Integration",
          company: resumeData.experience[0].company,
          challenge: "Developers spent hours on repetitive boilerplate code and routine tasks, reducing time for creative problem-solving",
          approach: "Early adoption of GitHub Copilot (2022) and Cursor, established best practices and trained team members",
          outcome: "40% faster development, 30% team productivity boost through AI tool adoption and mentorship",
          technologies: ["GitHub Copilot", "Cursor", "AI Workflows", "Team Training"],
        },
        {
          name: "AI-Powered Operations Training",
          company: resumeData.experience[0].company,
          challenge: "Operations team and non-technical staff struggled with repetitive manual tasks that could be automated with AI",
          approach: "Trained operators to use AI tools (ChatGPT, Claude) for daily tasks like documentation, data analysis, and problem-solving",
          outcome: "Empowered non-technical team members to automate routine tasks, improving efficiency and job satisfaction",
          technologies: ["ChatGPT", "Claude", "AI Tools", "Training Programs"],
        },
      ],
    },
  ];

  return <V1ProjectsByStrengthUI projectGroups={projectsByStrength} />;
}
