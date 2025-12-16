import Link from "next/link";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { ThemeToggle } from "src/components/theme-toggle";
import { resumeData } from "src/data/resume";
import { ArrowRight } from "lucide-react";

/**
 * Landing page - navigation hub for portfolio and future sections
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-6xl px-8 py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full flex justify-end mb-8">
          <ThemeToggle />
        </div>
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            {resumeData.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {resumeData.title}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl w-full">
          {/* Portfolio Card */}
          <Card className="border-border shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">View Portfolio</CardTitle>
              <CardDescription>Explore my work and experience</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="w-full group">
                <Link
                  href="/portfolio"
                  className="flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Projects Card */}
          <Card className="border-border shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Side Projects</CardTitle>
              <CardDescription>Explore my personal projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full group"
              >
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2"
                >
                  View Projects
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          More sections coming soon
        </div>
      </main>
    </div>
  );
}
