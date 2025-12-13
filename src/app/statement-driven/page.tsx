import { V2Hero } from "src/components/v2-hero";
import { V2ProofPoints } from "src/components/v2-proof-points";
import { V2Philosophy } from "src/components/v2-philosophy";
import { V2CoreStrengths } from "src/components/v2-core-strengths";
import { V2FeaturedProjects } from "src/components/v2-featured-projects";
import { TechnicalProficiency } from "src/components/technical-proficiency";
import { Experience } from "src/components/experience";
import { ThemeToggle } from "src/components/theme-toggle";
import { VariantSelector } from "src/components/variant-selector";

/**
 * Variant 2: Statement-Driven
 * Bold value proposition with immediate proof and spacious typography
 */
export default function Variant2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-5xl px-8 py-12 max-lg:px-6 max-md:px-4">
        {/* Controls */}
        <div className="flex justify-end gap-2 mb-8">
          <ThemeToggle />
          <VariantSelector currentVariant="/statement-driven" />
        </div>
        {/* Hero: Bold statement + contact */}
        <V2Hero />

        {/* 3 Key Proof Points: Top metrics */}
        <V2ProofPoints />

        {/* Philosophy: How I approach work */}
        <V2Philosophy />

        {/* Core Strengths: Compact list */}
        <V2CoreStrengths />

        {/* Featured Projects: 3 highlighted */}
        <V2FeaturedProjects />

        {/* Technical Stack: Condensed view */}
        <TechnicalProficiency />

        {/* Experience Timeline */}
        <Experience />
      </main>
    </div>
  );
}
