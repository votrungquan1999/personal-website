import { V4ImpactAtGlanceUI } from "src/components/v4-impact-at-glance.ui";

export function V4ImpactAtGlance() {
  const metrics = [
    {
      value: "99%",
      label: "UI Freeze Elimination",
      project: "Bodimatch",
    },
    {
      value: "70%",
      label: "Load Time Reduction",
      project: "Partners Portal",
    },
    {
      value: "80%",
      label: "Interaction Reduction",
      project: "Cross-border Tools",
    },
    {
      value: "60%",
      label: "Faster Deployments",
      project: "Bodidata Architecture",
    },
  ];

  return <V4ImpactAtGlanceUI metrics={metrics} />;
}
