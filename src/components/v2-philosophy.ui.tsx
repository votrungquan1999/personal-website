interface Principle {
  icon: string;
  title: string;
  description: string;
}

interface V2PhilosophyUIProps {
  heading: string;
  principles: Principle[];
}

export function V2PhilosophyUI({
  heading,
  principles,
}: V2PhilosophyUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-8 max-lg:text-2xl max-md:text-xl max-md:mb-6">
        {heading}
      </h2>

      {/* Scannable Principles Grid */}
      <div className="grid grid-cols-2 gap-6 max-lg:gap-4 max-md:grid-cols-1">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow max-md:p-4"
          >
            <div className="text-4xl shrink-0 max-md:text-3xl">
              {principle.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 max-md:text-base">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-md:text-xs">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
