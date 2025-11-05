import { Quote } from "lucide-react";
import { Card, CardContent } from "src/components/ui/card";
import type { Testimonial } from "src/data/resume";
import { cn } from "src/lib/utils";

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

/**
 * Server component for displaying testimonials in a grid
 * CSS animations and hover effects work without client code
 */
export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card
          key={`${testimonial.author}-${index}`}
          className={cn(
            "border-border shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105",
            "animate-in",
          )}
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "both",
          }}
        >
          <CardContent className="p-6">
            <Quote className="size-8 text-primary mb-4 opacity-50" />
            <p className="text-sm text-card-foreground mb-4 leading-relaxed italic">
              "{testimonial.content}"
            </p>
            <div className="pt-4 border-t border-border">
              <p className="font-semibold text-card-foreground">
                {testimonial.author}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
