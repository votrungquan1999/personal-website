import { resumeData } from "src/data/resume";
import { V2ProofPointsUI } from "src/components/v2-proof-points.ui";

export function V2ProofPoints() {
  // Scannable proof points - just the key facts
  const proofPoints = [
    {
      value: "99%",
      label: "UI Freeze Elimination",
      project: "Bodimatch",
      problem: "10+ second UI freezes blocked analysts",
      solution: "Web workers for background processing",
      metrics: ["99% reduction in UI freeze time", "45% accuracy improvement"],
    },
    {
      value: "70%",
      label: "Load Time Improvement",
      project: "Partners Portal",
      problem: "5+ second API waits lost customer trust",
      solution: "Multi-layer Redis caching",
      metrics: ["50% satisfaction increase", "60% API improvement"],
    },
    {
      value: "80%",
      label: "Interaction Reduction",
      project: "Cross-border Tools",
      problem: "10 clicks per task slowed operations",
      solution: "Intuitive scanning with smart defaults",
      metrics: ["50% training reduction", "70% less manual entry"],
    },
    {
      value: "60%",
      label: "Faster Deployments",
      project: "Bodidata",
      problem: "Developers afraid to deploy changes",
      solution: "Event-driven architecture + event sourcing",
      metrics: ["60% faster error resolution", "Confident deployments"],
    },
  ];

  return <V2ProofPointsUI proofPoints={proofPoints} />;
}
