import { V1Hero } from "src/components/v1-hero";
import { V1StrengthBento } from "src/components/v1-strength-bento";
import { V1ProblemSolving } from "src/components/v1-problem-solving";
import { SideProjectsMinimal } from "src/components/side-projects-minimal";
import { TechnicalProficiency } from "src/components/technical-proficiency";
import { Experience } from "src/components/experience";
import { ThemeToggle } from "src/components/theme-toggle";
import { VariantSelector } from "src/components/variant-selector";
import { Footer } from "src/components/footer";

/**
 * Variant 1: Strength-First Bento
 * Visual hierarchy with strength cards immediately visible
 */
export default function Variant1Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-6xl px-8 py-12 max-lg:px-6 max-md:px-4">
        {/* Controls */}
        <div className="flex justify-end gap-2 mb-8">
          <ThemeToggle />
          <VariantSelector currentVariant="/strength-first" />
        </div>
        {/* Hero: Name + Tagline + Contact */}
        <V1Hero />

        {/* Strength Bento Grid: 4 cards with icons and metrics */}
        <V1StrengthBento />

        {/* Problem-Solving Approach: 3-step process */}
        <V1ProblemSolving />

        {/* Side Projects: Minimal list with link to full page */}
        <SideProjectsMinimal />

        {/* Technical Stack: Condensed view */}
        <TechnicalProficiency />

        {/* Experience Timeline */}
        <Experience />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
