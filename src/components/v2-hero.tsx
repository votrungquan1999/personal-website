import { resumeData } from "src/data/resume";
import { V2HeroUI } from "src/components/v2-hero.ui";

export function V2Hero() {
  const statement = "I build products that solve real problems";
  const taglines = [
    "Product-focused",
    "Problem Simplifier",
    "Technical Excellence",
    "Fast Learner",
  ];

  return (
    <V2HeroUI
      name={resumeData.name}
      statement={statement}
      taglines={taglines}
      contact={resumeData.contact}
    />
  );
}
