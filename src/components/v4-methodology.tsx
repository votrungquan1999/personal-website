import { V4MethodologyUI } from "src/components/v4-methodology.ui";

export function V4Methodology() {
  const methods = [
    {
      step: "1",
      title: "Data-Driven Problem Identification",
      description: "Analyze user behavior, measure pain points quantitatively, identify highest-impact opportunities",
    },
    {
      step: "2",
      title: "Technical Excellence + Simplicity",
      description: "Modern web standards, proven patterns, web workers, caching strategies—complexity hidden from users",
    },
    {
      step: "3",
      title: "Measure Everything",
      description: "Track outcomes with real metrics, iterate based on data, prove impact with numbers",
    },
  ];

  return <V4MethodologyUI methods={methods} />;
}
