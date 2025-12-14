import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { getTechIcon } from "src/lib/tech-icons";
import type { TechnicalCategory } from "src/data/resume";
import { cn } from "src/lib/utils";

interface TechnicalProficiencyGridProps {
  categories: TechnicalCategory[];
}

/**
 * Server component for displaying technical proficiency in a visual grid
 * CSS hover effects work without client code
 */
export function TechnicalProficiencyGrid({
  categories,
}: TechnicalProficiencyGridProps) {
  return (
    <div className="space-y-4">
      {categories.map((category, categoryIndex) => (
        <div
          key={category.name}
          className={cn("animate-in")}
          style={{
            animationDelay: `${categoryIndex * 150}ms`,
            animationFillMode: "both",
          }}
        >
          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => {
                  const TechIcon = getTechIcon(tech);
                  return (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={cn(
                        "text-xs px-3 py-1.5 flex items-center gap-1.5",
                        "transition-all duration-300 hover:scale-105 hover:shadow-sm",
                        "cursor-default",
                      )}
                    >
                      <TechIcon className="size-3.5" />
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
