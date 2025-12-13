interface Method {
  step: string;
  title: string;
  description: string;
}

interface V4MethodologyUIProps {
  methods: Method[];
}

export function V4MethodologyUI({ methods }: V4MethodologyUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-3 max-lg:text-2xl max-md:text-xl">
        How I Achieve These Results
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-md:text-base max-md:mb-8">
        A systematic, data-driven approach to every project:
      </p>

      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1 max-lg:gap-6">
        {methods.map((method) => (
          <div key={method.step} className="space-y-3">
            {/* Step number */}
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4 max-md:w-10 max-md:h-10 max-md:text-lg">
              {method.step}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground max-lg:text-lg max-md:text-base">
              {method.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed max-md:text-xs">
              {method.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
