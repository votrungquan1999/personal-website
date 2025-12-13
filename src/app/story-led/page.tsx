import { V3Hero } from "src/components/v3-hero";
import { V3Approach } from "src/components/v3-approach";
import { V3WhatThisMeans } from "src/components/v3-what-this-means";
import { V3ProofInAction } from "src/components/v3-proof-in-action";
import { TechnicalProficiency } from "src/components/technical-proficiency";
import { Experience } from "src/components/experience";
import { ThemeToggle } from "src/components/theme-toggle";
import { VariantSelector } from "src/components/variant-selector";

/**
 * Variant 3: Story-Led Flow
 * Linear narrative that builds understanding progressively
 */
export default function Variant3Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-5xl px-8 py-12 max-lg:px-6 max-md:px-4">
        {/* Controls */}
        <div className="flex justify-end gap-2 mb-8">
          <ThemeToggle />
          <VariantSelector currentVariant="/story-led" />
        </div>
        {/* Hero: Who I am */}
        <V3Hero />

        {/* My Approach: How I think */}
        <V3Approach />

        {/* What This Means: 4 strengths explained with visuals */}
        <V3WhatThisMeans />

        {/* Proof in Action: Projects grouped by outcome */}
        <V3ProofInAction />

        {/* Technical Foundation: Enablers */}
        <TechnicalProficiency />

        {/* Track Record: Timeline */}
        <Experience />
      </main>
    </div>
  );
}
