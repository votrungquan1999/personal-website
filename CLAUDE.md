# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern Next.js 16 personal website and portfolio built with React 19, Tailwind CSS v4, and shadcn/ui components. The site showcases professional experience, projects, achievements, and technical proficiency with a focus on accessibility and performance. Comprehensive SEO setup includes OpenGraph/Twitter cards, dynamic sitemap, and optimized metadata. Infrastructure is managed through Pulumi for automated deployment to Vercel with Cloudflare DNS.

## Repository Knowledge Base

Detailed technical documentation is organized in `repo_knowledge/`:

- **[architecture.md](repo_knowledge/architecture.md)** - Component patterns, import conventions, styling system, React setup
- **[data-patterns.md](repo_knowledge/data-patterns.md)** - Content management, data structure, update workflows
- **[infrastructure.md](repo_knowledge/infrastructure.md)** - Pulumi deployment, scripts, configuration

**When to use**: Refer to these files for detailed implementation patterns, architecture decisions, and codebase conventions.

**Note**: MUST update the documents when making changes related to the content of them

## Development Commands

### Core Commands

```bash
# Start development server (Next.js dev mode)
npm run dev        # or: bun dev

# Build for production
npm run build

# Start production server
npm run start

# Linting and formatting (Biome)
npm run lint       # Check code quality
npm run format     # Format code with Biome
```

### Infrastructure Commands

```bash
# Full deployment (Vercel + Cloudflare DNS)
npm run pulumi:up

# Preview infrastructure changes
npm run pulumi:preview

# Destroy infrastructure
npm run pulumi:destroy

# Individual deployments (from infrastructure/)
bun run infrastructure/scripts/deploy-vercel.ts up
bun run infrastructure/scripts/deploy-cloudflare.ts up
```

Infrastructure scripts support: `preview`, `up`, `destroy`, `refresh`

## Development Workflow

**IMPORTANT**: Do NOT run `npm run dev`, `npm run build`, or `npm run start` unless explicitly instructed by the user. The user prefers to manage the development server and builds themselves.

## Architecture

### Frontend Architecture

**Component Pattern**: The application uses a dual-file pattern for major sections:

- **`component-name.tsx`**: Contains data logic and component orchestration
- **`component-name.ui.tsx`**: Contains pure presentational UI components

This separation improves maintainability and makes components more testable.

**Data Source**: All content is centralized in `src/data/resume.ts` with strongly-typed TypeScript interfaces. This single source of truth makes content updates straightforward and type-safe.

**Styling**: Uses Tailwind CSS v4 with shadcn/ui components (Radix UI primitives). Theme system via `next-themes` provides dark mode support with system preference detection.

**Import Paths**: Uses `src/*` path aliasing configured in tsconfig.json. Always import using `src/` prefix (e.g., `import { resumeData } from "src/data/resume"`).

### Routes

The site has the following main routes:

- **`/`** - Landing page with two-card grid layout:
  - **"View Portfolio"** card → navigates to `/portfolio`
  - **"Side Projects"** card → navigates to `/projects`
  - Displays name and title from `resumeData`
  - Theme toggle in top-right corner

- **`/portfolio`** - Portfolio variant selector page:
  - Shows 4 variant cards with descriptions
  - Allows visitors to choose their preferred viewing format
  - All variants contain the same data, just different layouts

- **`/projects`** - Side projects showcase page:
  - Full detailed view of all side projects
  - Grouped by category (Business Websites, Developer Tools, Personal Projects)
  - OG images, full descriptions, tech stacks, live site + GitHub links
  - Header navigation: Back to Home button + View Portfolio button + Theme toggle
  - Footer navigation: Links to Home and Portfolio + Copyright

- **Variant Pages** (all follow same structure):
  - **`/strength-first`** - Variant 1: Strength-focused bento layout
  - **`/statement-driven`** - Variant 2: Philosophy-driven with proof points
  - **`/story-led`** - Variant 3: Approach-focused with methodology
  - **`/impact-dashboard`** - Variant 4: Metrics-first dashboard aesthetic

**Variant Page Structure** (all 4 variants):
```
1. Controls: Theme toggle + Variant selector
2. Variant-specific sections (Hero, Strengths, Problem-Solving, etc.)
3. Side Projects (minimal list) ← "View All Projects" link → /projects
4. Technical Proficiency
5. Experience Timeline
```

**User Journey**:
```
/ (Landing)
├─ "View Portfolio" → /portfolio → Choose variant → Variant page
│                                                    ├─ Variant sections
│                                                    ├─ Side Projects (minimal)
│                                                    ├─ Tech Proficiency
│                                                    └─ Experience
│
└─ "Side Projects" → /projects (full showcase)
                     └─ Back button → /
```

**Featured vs. Side Projects**:
- **Featured Projects** (Jerni, Bodimatch, Partners Portal, Cross-border) are showcased in variant pages with detailed metrics and achievements. These are internal company tools (not publicly accessible).
- **Side Projects** are publicly accessible projects displayed on `/projects` page with live demos and GitHub links, plus minimal list on all variant pages.

### Infrastructure Architecture

**Pulumi IaC**: The infrastructure code is modular and environment-variable controlled:

- `infrastructure/index.ts`: Main entry point that checks `DEPLOY_VERCEL` and `DEPLOY_CLOUDFLARE` env vars
- `infrastructure/resources/`: Separate resource modules for Vercel (project, domains, deployment) and Cloudflare DNS
- `infrastructure/scripts/`: Bun scripts that set env vars to control deployment scope
- `infrastructure/config.ts`: Configuration values including domain and Cloudflare zone ID

**Deployment Flow**:

1. Bun scripts automatically load `.env` from project root
2. Scripts set environment variables to control which resources deploy
3. Pulumi creates/updates Vercel project and Cloudflare DNS records
4. DNS records use `proxied = false` (required for Vercel integration)

## Key Technologies

- **Framework**: Next.js 16 with App Router and React Server Components
- **React**: React 19 with React Compiler enabled
- **Styling**: Tailwind CSS v4 (using @tailwindcss/postcss)
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Linting/Formatting**: Biome (replaces ESLint + Prettier)
- **Infrastructure**: Pulumi with TypeScript
- **Runtime**: Supports both Node.js 20+ and Bun

### TypeScript

- Strict mode enabled
- Path alias `src/*` for all imports
- Bun types included
- React JSX transform (react-jsx)

## About Quan Vo

### Professional Profile

Quan Vo is a **Senior Product Engineer** with a unique blend of product thinking and technical execution. His career demonstrates a consistent focus on **solving real user problems** through thoughtful design and engineering excellence.

### Core Identity

- **Product-Driven Engineer**: Not just building features, but understanding and solving actual business problems
- **Accessibility Champion**: 100% keyboard navigation, reduced user input time by 30%
- **Performance Optimizer**: Achieved 70% load time improvements, 90% faster data processing
- **AI Early Adopter**: Using GitHub Copilot since 2022, 40% faster development
- **Rapid Learner**: Promoted from junior to mid-level engineer with 5/5 performance review

### Key Differentiators

1. **Problem Simplifier**: Takes complex requirements and creates simple, intuitive solutions
2. **Impact-Focused**: Every metric tells a story of real user or business value
3. **Full-Stack Versatility**: Equally strong in frontend (React/Next.js) and backend (Go/Node.js)
4. **Process Improver**: Reduced development time by 90% through process improvements
5. **Team Mentor**: Mentored teams on accessibility, performance, and AI tool adoption

### Notable Achievements

- **Bodimatch**: Built accessible internal tool improving data accuracy 45%, processing speed 90%
- **Partners Portal**: Achieved 100% keyboard navigation, 60% API improvement, 50% satisfaction increase
- **Cross-border Tools**: Reduced training time 50%, manual entry 70%, efficiency up 55%
- **Architecture Leadership**: Promoted event-driven architecture reducing development friction 50%

### Work Philosophy

Quan approaches problems by:

1. **Identifying root causes** rather than treating symptoms
2. **Simplifying complexity** into manageable, user-friendly solutions
3. **Delivering measurable outcomes** with sustainable, maintainable code
4. **Continuously improving** both product and process

### Technical Expertise

**Frontend**: React, Next.js, TypeScript, Tailwind CSS, Radix UI, Shadcn UI
**Backend**: Go, Node.js, REST APIs, GraphQL
**Databases**: SQL (MySQL), NoSQL (MongoDB, Firestore)
**Infrastructure**: CI/CD workflows, event-driven architecture
**AI Tools**: GitHub Copilot (since 2022), Cursor

### Career Trajectory

- **Current**: Senior Product Engineer at Bodidata (Dec 2021 - Present)
- **Previous**: Full Stack Software Engineer at Ninja Van (Sep 2020 - Dec 2021)
- **Freelance**: Multiple SaaS projects (Task Management, Inventory Management)
- **Education**: BS Computer Science, SUNY Plattsburgh (3.6 GPA, Dean's List)

### Design Considerations for Portfolio Variants

When designing portfolio variants for Quan, remember:

1. **Context is Critical**: Metrics like "80% reduction in interactions" need context to show value
2. **Tell the Story**: Don't just list achievements, explain the problem → solution → impact
3. **Show Technical Depth**: Balance product thinking with technical execution
4. **Demonstrate Learning**: Highlight rapid growth and continuous improvement
5. **Prove Outcomes**: Every claim should have measurable evidence
6. **Hiring Manager Focus**: Content should be scannable in 30 seconds while providing depth for deeper reads

**CRITICAL**: When writing problem statements, achievements, or project descriptions, **ALWAYS refer to @.claude/portfolio-problem-framing.md** for guidelines on how to frame problems. Focus on root causes and user/business impact, not technical symptoms.
