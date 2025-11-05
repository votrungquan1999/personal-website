import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Target, Users, Zap, Brain } from "lucide-react";
import type { CoreStrength } from "src/data/resume";
import { cn } from "src/lib/utils";

interface CoreStrengthsGridProps {
  strengths: CoreStrength[];
}

/**
 * Icon mapping for different strength types
 */
const strengthIcons = {
  "User-Centered": Users,
  "UI Engineering": Zap,
  "Backend Engineering": Target,
  "AI Early Adopter": Brain,
  Default: Target,
};

/**
 * Gets the appropriate icon for a strength title
 */
function getStrengthIcon(title: string) {
  const iconKey =
    Object.keys(strengthIcons).find((key) =>
      title.toLowerCase().includes(key.toLowerCase()),
    ) || "Default";
  return (
    strengthIcons[iconKey as keyof typeof strengthIcons] ||
    strengthIcons.Default
  );
}

/**
 * Extracts metrics from achievement text
 */
function extractMetrics(achievements: string[]): string[] {
  const metrics: string[] = [];
  achievements.forEach((achievement) => {
    const matches = achievement.match(/(\d+%)/g);
    if (matches) {
      metrics.push(...matches);
    }
  });
  return [...new Set(metrics)]; // Remove duplicates
}

/**
 * Server component for displaying core strengths in a grid
 * Shows achievements by default with visual icons and metric badges
 */
export function CoreStrengthsGrid({ strengths }: CoreStrengthsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {strengths.map((strength, index) => {
        const StrengthIcon = getStrengthIcon(strength.title);
        const metrics = extractMetrics(strength.achievements);

        return (
          <Card
            key={strength.title}
            className={cn(
              "border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col",
              "animate-in",
            )}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <StrengthIcon className="size-8 text-primary" />
                {metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {metrics.slice(0, 2).map((metric) => (
                      <Badge
                        key={metric}
                        variant="default"
                        className="text-xs bg-primary text-primary-foreground"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <CardTitle className="text-xl mb-2">{strength.title}</CardTitle>
              <CardDescription className="text-sm">
                {strength.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-card-foreground mb-2">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-sm text-card-foreground">
                  {strength.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
