# Personal Website

A modern, responsive personal website and portfolio built with Next.js, showcasing professional experience, projects, achievements, and technical proficiency.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **React**: React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) (Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev)
- **Linting/Formatting**: [Biome](https://biomejs.dev)
- **Infrastructure**: [Pulumi](https://www.pulumi.com) for IaC
- **Deployment**: Vercel with Cloudflare DNS

## Getting Started

### Prerequisites

- Node.js 20+ (or Bun)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files in the `src` directory.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome
- `npm run pulumi:up` - Deploy infrastructure
- `npm run pulumi:preview` - Preview infrastructure changes
- `npm run pulumi:destroy` - Destroy infrastructure

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── about-me.tsx
│   ├── achievements-timeline.tsx
│   ├── core-strengths.tsx
│   ├── experience.tsx
│   ├── featured-projects.tsx
│   ├── impact-metrics.tsx
│   ├── technical-proficiency.tsx
│   ├── testimonials.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui/                # shadcn/ui components
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       └── separator.tsx
├── data/                   # Data files
│   └── resume.ts          # Resume data
└── lib/                    # Utilities
    ├── tech-icons.tsx     # Technology icons
    └── utils.ts           # Utility functions
```

## Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark Mode**: Theme toggle with system preference detection
- **Performance**: Optimized with Next.js App Router and React Server Components
- **Accessibility**: Built with Radix UI primitives for accessibility
- **SEO**: Optimized meta tags and semantic HTML

## Infrastructure & Deployment

This project uses Pulumi for Infrastructure as Code (IaC) to manage:

- Vercel project and deployment configuration
- Cloudflare DNS records
- Domain management

See [infrastructure/README.md](./infrastructure/README.md) for detailed deployment instructions.

## License

Private project - All rights reserved.
