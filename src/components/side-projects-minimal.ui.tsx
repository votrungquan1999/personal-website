import Link from "next/link";
import { Button } from "src/components/ui/button";
import { Badge } from "src/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { SideProject } from "src/data/resume";
import Image from "next/image";

interface SideProjectsMinimalUIProps {
  projects: readonly SideProject[];
}

export function SideProjectsMinimalUI({
  projects,
}: SideProjectsMinimalUIProps) {
  return (
    <div className="space-y-6">
      {/* Header with link to full page */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold max-lg:text-2xl max-md:text-xl">
          Side Projects
        </h2>
        <Button variant="ghost" asChild size="sm">
          <Link href="/projects" className="flex items-center gap-2">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Projects list */}
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
          >
            {/* OG Image thumbnail */}
            {project.ogImageUrl && (
              <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={project.ogImageUrl}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Project info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-base truncate">
                  {project.name}
                </h3>
                <Badge variant="outline" className="text-xs flex-shrink-0">
                  {project.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {project.description}
              </p>
            </div>

            {/* Visit link */}
            <Button asChild size="sm" variant="ghost">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 flex-shrink-0"
              >
                <ExternalLink className="h-4 w-4" />
                Visit
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
