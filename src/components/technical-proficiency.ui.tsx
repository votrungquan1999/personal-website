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
    <div className="space-y-8">
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
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => {
                  const TechIcon = getTechIcon(tech);
                  return (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={cn(
                        "text-sm px-4 py-2 flex items-center gap-2",
                        "transition-all duration-300 hover:scale-110 hover:shadow-md",
                        "cursor-default",
                      )}
                    >
                      <TechIcon className="size-4" />
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
