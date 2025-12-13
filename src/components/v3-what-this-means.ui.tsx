import type { CoreStrength } from "src/data/resume";

interface Meaning {
  title: string;
  description: string;
  icon: string;
  strength: CoreStrength;
}

interface V3WhatThisMeansUIProps {
  meanings: Meaning[];
}

export function V3WhatThisMeansUI({ meanings }: V3WhatThisMeansUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-3 max-lg:text-2xl max-md:text-xl">
        What this means for the team
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-md:text-base max-md:mb-8">
        Here's how my approach translates into real-world value:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6">
        {meanings.map((meaning) => (
          <div
            key={meaning.title}
            className="border border-border rounded-lg p-6 max-md:p-4"
          >
            {/* Icon + Title row */}
            <div className="flex items-center gap-3 mb-3 max-md:gap-2 max-md:mb-2">
              <div className="flex-shrink-0 text-3xl max-md:text-2xl">
                {meaning.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground max-md:text-base">
                {meaning.title}
              </h3>
            </div>

            {/* Description row */}
            <p className="text-sm text-card-foreground/80 leading-relaxed max-md:text-xs">
              {meaning.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
