import { V3ApproachUI } from "src/components/v3-approach.ui";

export function V3Approach() {
  const steps = [
    {
      number: "1",
      title: "Identify",
      description: "Find the root cause, not just symptoms. Talk to users, understand their pain.",
    },
    {
      number: "2",
      title: "Simplify",
      description: "Remove complexity. Make the hard things easy and intuitive.",
    },
    {
      number: "3",
      title: "Deliver",
      description: "Ship with measurable impact. Track outcomes, iterate based on data.",
    },
  ];

  return <V3ApproachUI steps={steps} />;
}
