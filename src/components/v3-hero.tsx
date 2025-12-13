import { resumeData } from "src/data/resume";
import { V3HeroUI } from "src/components/v3-hero.ui";

export function V3Hero() {
  return (
    <V3HeroUI
      name={resumeData.name}
      introduction="Hi, I'm a product engineer who focuses on solving problems through simplification and building products that create real impact."
      contact={resumeData.contact}
    />
  );
}
