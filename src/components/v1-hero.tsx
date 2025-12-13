import { resumeData } from "src/data/resume";
import { V1HeroUI } from "./v1-hero.ui";

export function V1Hero() {
  return <V1HeroUI name={resumeData.name} contact={resumeData.contact} />;
}
