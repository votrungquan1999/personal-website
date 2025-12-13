import { V1ProblemSolvingUI } from "./v1-problem-solving.ui";

export function V1ProblemSolving() {
  const steps = [
    {
      title: "Identify Problems",
      icon: "Search" as const,
      principles: [
        "Understand user context and pain points",
        "Align with business goals and constraints",
        "Assess technical feasibility and trade-offs",
      ],
    },
    {
      title: "Simplify Complexity",
      icon: "Target" as const,
      principles: [
        "Break down complex requirements",
        "Find the core problem to solve",
        "Eliminate unnecessary scope and friction",
      ],
    },
    {
      title: "Deliver Solutions",
      icon: "Rocket" as const,
      principles: [
        "Iterate quickly with feedback loops",
        "Focus on measurable impact",
        "Maintain code quality and documentation",
      ],
    },
  ];

  return <V1ProblemSolvingUI steps={steps} />;
}
