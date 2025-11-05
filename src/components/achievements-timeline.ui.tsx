import { Badge } from "src/components/ui/badge";
import { Card, CardContent } from "src/components/ui/card";
import { TrendingUp, Calendar } from "lucide-react";
import { cn } from "src/lib/utils";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  achievement: string;
  impact?: string;
}

interface AchievementsTimelineListProps {
  items: TimelineItem[];
}

/**
 * Server component for displaying achievements in a timeline
 * CSS animations work without client code
 */
export function AchievementsTimelineList({
  items,
}: AchievementsTimelineListProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={`${item.date}-${item.title}-${index}`}
            className={cn("relative flex items-start gap-4", "animate-in")}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <div className="hidden sm:flex flex-col items-center gap-2 min-w-[80px] pt-1">
              <div className="size-3 rounded-full bg-primary border-2 border-background shadow-sm z-10" />
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="size-3" />
                {item.date}
              </div>
            </div>
            <Card className="flex-1 border-border shadow-sm transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.company}
                    </p>
                  </div>
                  {item.impact && (
                    <Badge
                      variant="default"
                      className="flex items-center gap-1 bg-primary text-primary-foreground"
                    >
                      <TrendingUp className="size-3" />
                      {item.impact}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-card-foreground leading-relaxed">
                  {item.achievement}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
