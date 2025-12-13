import { resumeData } from "src/data/resume";
import { V4HeroUI } from "src/components/v4-hero.ui";

export function V4Hero() {
  return (
    <V4HeroUI
      name={resumeData.name}
      title={resumeData.title}
      contact={resumeData.contact}
    />
  );
}
