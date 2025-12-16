import { ThemeToggle } from "src/components/theme-toggle";
import { PortfolioSelector } from "src/components/portfolio-selector";
import { Footer } from "src/components/footer";

/**
 * Portfolio Selector Page
 * Allows visitors to choose their preferred portfolio viewing format
 */
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="container mx-auto max-w-6xl px-8 py-12 flex-1 flex flex-col items-center justify-center">
        <div className="w-full flex justify-end mb-8">
          <ThemeToggle />
        </div>
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl font-bold">How would you like to explore?</h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            All data is the same, just different layouts optimized for different
            reading preferences
          </p>
        </div>

        <PortfolioSelector />
      </main>

      <div className="container mx-auto max-w-6xl px-8 pb-12">
        <Footer />
      </div>
    </div>
  );
}
