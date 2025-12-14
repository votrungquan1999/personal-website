import { resumeData } from "src/data/resume";
import { V3ProofInActionUI } from "src/components/v3-proof-in-action.ui";

export function V3ProofInAction() {
  // Group projects by outcome type, not chronology
  const outcomeGroups = [
    {
      outcomeType: "Simplifying Complexity",
      description: "Making hard things easy for users",
      projects: [
        {
          ...resumeData.featuredProjects[3], // Cross-border Tools
          impact:
            "Took ownership of warehouse staff pain points, collaborated to understand workflows, and designed intuitive scanning interface that reduced task complexity from 10 clicks to 2, cutting training time in half",
        },
        {
          ...resumeData.featuredProjects[2], // Partners Portal
          impact:
            "Built accessible portal with 100% keyboard navigation using modern web standards, increasing satisfaction 50%",
        },
      ],
    },
    {
      outcomeType: "Performance & Scale",
      description: "Building systems that handle real-world demands",
      projects: [
        {
          ...resumeData.featuredProjects[1], // Bodimatch
          impact:
            "Built performant interface using web workers for background processing, eliminating 10+ second UI freezes and improving accuracy by 45%",
        },
        {
          ...resumeData.featuredProjects[2], // Partners Portal (also fits here)
          impact:
            "Multi-layer caching reduced load times by 70% and API response by 60%",
        },
      ],
    },
    {
      outcomeType: "Developer Confidence",
      description: "Systems that teams trust to deploy",
      projects: [
        {
          ...resumeData.featuredProjects[0], // Jerni
          impact:
            "Identified team friction with deployments, proposed event sourcing solution—enabled zero-downtime migrations and confident deployments without fear of breaking changes",
        },
      ],
    },
  ];

  return <V3ProofInActionUI outcomeGroups={outcomeGroups} />;
}
