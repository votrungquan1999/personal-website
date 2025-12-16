import { SideProjectsShowcase } from "src/components/side-projects-showcase";
import { ThemeToggle } from "src/components/theme-toggle";
import { Footer } from "src/components/footer";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-6xl px-8 py-12 max-lg:px-6 max-md:px-4">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-8 gap-4">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Title */}
        <div className="mb-12 space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">Side Projects</h1>
          <p className="text-xl text-muted-foreground">
            Exploring ideas and building tools
          </p>
        </div>

        {/* Projects showcase */}
        <SideProjectsShowcase />

        {/* Footer navigation */}
        <Footer />
      </main>
    </div>
  );
}
