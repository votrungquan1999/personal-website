import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

const portfolioVariants = [
  {
    title: "Core Strengths",
    description: "Visual overview of capabilities and expertise",
    route: "/strength-first",
  },
  {
    title: "Impact & Proof",
    description: "Measurable outcomes and business results",
    route: "/statement-driven",
  },
  {
    title: "Problem-Solving",
    description: "How challenges are approached and solved",
    route: "/story-led",
  },
  {
    title: "Metrics & Results",
    description: "Data-driven view of achievements",
    route: "/impact-dashboard",
  },
];

export function PortfolioSelector() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {portfolioVariants.map((variant) => (
        <Link key={variant.route} href={variant.route}>
          <Card className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg border-border h-full">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl mb-2">{variant.title}</CardTitle>
              <CardDescription className="text-base">
                {variant.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
