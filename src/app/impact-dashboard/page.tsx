import { V4Hero } from "src/components/v4-hero";
import { V4ImpactAtGlance } from "src/components/v4-impact-at-glance";
import { V4Methodology } from "src/components/v4-methodology";
import { V4StrengthsProjects } from "src/components/v4-strengths-projects";
import { SideProjectsMinimal } from "src/components/side-projects-minimal";
import { TechnicalProficiency } from "src/components/technical-proficiency";
import { Experience } from "src/components/experience";
import { ThemeToggle } from "src/components/theme-toggle";
import { VariantSelector } from "src/components/variant-selector";
import { Footer } from "src/components/footer";

/**
 * Variant 4: Impact Dashboard
 * Numbers and metrics front-and-center with data-driven aesthetic
 */
export default function Variant4Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-6xl px-8 py-12 max-lg:px-6 max-md:px-4">
        {/* Controls */}
        <div className="flex justify-end gap-2 mb-8">
          <ThemeToggle />
          <VariantSelector currentVariant="/impact-dashboard" />
        </div>
        {/* Hero: Name + Role */}
        <V4Hero />

        {/* Impact At-a-Glance: Large metric cards */}
        <V4ImpactAtGlance />

        {/* How I Achieve These Results */}
        <V4Methodology />

        {/* Strengths + Projects: Side-by-side pairing */}
        <V4StrengthsProjects />

        {/* Side Projects: Minimal list with link to full page */}
        <SideProjectsMinimal />

        {/* Technical Toolbox */}
        <TechnicalProficiency />

        {/* Experience Timeline */}
        <Experience />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
