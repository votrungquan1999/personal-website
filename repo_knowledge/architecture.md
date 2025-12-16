# Architecture Knowledge

## Component Pattern: Dual-File Structure

Major sections use a **two-file pattern** for separation of concerns:

- **`component-name.tsx`**: Data fetching, business logic, composition (Server Component)
- **`component-name.ui.tsx`**: Pure presentational UI (Client Component when needed)

**Example**: `src/components/core-strengths.tsx` + `src/components/core-strengths.ui.tsx`

**Benefits**:
- Clear separation between data/logic and presentation
- Easier testing and maintenance
- Reusable UI components

**When to use this pattern**: For any major section that displays content from `resumeData`. Small utilities and shadcn/ui components remain single-file.

---

## Import Path Pattern

**ALWAYS use `src/*` prefix for imports**:

```typescript
// ✅ Correct
import { resumeData } from "src/data/resume";
import { Button } from "src/components/ui/button";

// ❌ Wrong
import { resumeData } from "../data/resume";
```

Configured in `tsconfig.json` with path alias `"src/*": ["./src/*"]`

---

## Data Architecture

**Single Source of Truth**: All content lives in `src/data/resume.ts`

- Strongly-typed TypeScript interfaces define the data structure
- Components consume `resumeData` directly - no API calls, no props drilling
- Content updates happen in one place

See [data-patterns.md](./data-patterns.md) for data structure details.

---

## Next.js App Router Structure

- **Server Components by default** (`.tsx` files in `src/components/`)
- **Client Components** when needed (`"use client"` directive)
  - Interactive components (theme-toggle, variant-selector)
  - UI components requiring state (accordion, dropdown)
- **App Router** (`src/app/`) for routing

**Routes**:
- `src/app/page.tsx` - **Landing page**:
  - Two-card grid: "View Portfolio" + "Side Projects"
  - Displays name and title from `resumeData`
  - Theme toggle in top-right

- `src/app/portfolio/page.tsx` - **Portfolio variant selector**:
  - Shows 4 variant option cards
  - Allows visitors to choose preferred format

- `src/app/projects/page.tsx` - **Side projects showcase**:
  - Full detailed view with OG images
  - Grouped by category
  - Header: Back to Home + View Portfolio button + Theme toggle
  - Footer: Navigation links (Home, Portfolio) + Copyright

- `src/app/strength-first/page.tsx` - **Variant 1** (Strength-focused bento)
- `src/app/statement-driven/page.tsx` - **Variant 2** (Philosophy-driven)
- `src/app/story-led/page.tsx` - **Variant 3** (Approach-focused)
- `src/app/impact-dashboard/page.tsx` - **Variant 4** (Metrics-first)

- `src/app/layout.tsx` - Root layout with theme provider

**Variant Page Structure** (all 4 variants follow same order):
```
1. Controls (Theme toggle + Variant selector)
2. Variant-specific sections (Hero, Strengths, Problem-Solving, etc.)
3. Side Projects (minimal list) ← with "View All Projects" link
4. Technical Proficiency
5. Experience Timeline
```

**Side Projects Components**:
- `src/components/side-projects-showcase.tsx` + `.ui.tsx` - Full detailed view for `/projects` page
- `src/components/side-projects-minimal.tsx` + `.ui.tsx` - Compact list for variant pages

---

## Styling System

**Tailwind CSS v4** with shadcn/ui components:

- Uses `@tailwindcss/postcss` (v4 architecture)
- Theme system via `next-themes` (dark mode support)
- Component variants via `class-variance-authority`
- Utility merger: `tailwind-merge` + `clsx` (exported as `cn()` from `src/lib/utils`)

**Design tokens**: Defined in `src/app/globals.css` as CSS variables

---

## Portfolio Variants System

Multiple design variations for hiring managers to explore:

- **v1**: Strength-focused with bento grid
- **v2**: Philosophy-driven with proof points
- **v3**: Approach-focused with methodology
- **v4**: Impact-first with strengths+projects integration

Each variant has its own components (e.g., `v1-hero.tsx`, `v2-hero.tsx`, etc.)

**Selection mechanism**: `src/components/portfolio-selector.tsx` on `/portfolio` page allows choosing between variants

**Variant-specific components** (unique to each variant):
- v1: `v1-hero.tsx`, `v1-strength-bento.tsx`, `v1-problem-solving.tsx`
- v2: `v2-hero.tsx`, `v2-philosophy.tsx`, `v2-proof-points.tsx`
- v3: `v3-hero.tsx`, `v3-approach.tsx`, `v3-methodology.tsx`
- v4: `v4-hero.tsx`, `v4-impact-grid.tsx`, `v4-strengths-projects.tsx`

**Shared components** (used by all variants):
- `side-projects-minimal` - Compact list linking to `/projects`
- `technical-proficiency` - Tech stack display
- `experience` - Timeline of work history
- `theme-toggle` - Dark/light mode switcher
- `variant-selector` - Dropdown to switch between variants

---

## React 19 + React Compiler

- **React 19** enabled with React Compiler for automatic optimizations
- Compiler config in `next.config.ts`:
  ```typescript
  experimental: {
    reactCompiler: true,
  }
  ```
- Reduces manual `useMemo`/`useCallback` needs

---

## Image Configuration

External OG images are configured in `next.config.ts` to allow Next.js Image component to load from side project domains:

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "www.stem-venture.com",
    },
    {
      protocol: "https",
      hostname: "app.stem-venture.com",
    },
    {
      protocol: "https",
      hostname: "finance-calculator-lac.vercel.app",
    },
  ],
}
```

**Why needed**: Next.js requires explicit configuration for external image sources for security. These domains host OG images for side projects displayed on `/projects` and variant pages.

---

## SEO Configuration

**Location**: `src/app/layout.tsx`

Comprehensive SEO metadata configured in the root layout:

- **OpenGraph tags**: OG image (`/personal_website_og.png`), title, description, type, locale
- **Twitter Card**: Large image card format for better social sharing
- **Keywords**: Relevant technical and professional keywords
- **Robots**: Configured for full indexing by search engines
- **Canonical URL**: Set to `https://quanvo.dev`
- **Title template**: Allows page-specific titles with site name suffix

**Sitemap**: `src/app/sitemap.ts` - Dynamic sitemap including all main routes:
- Landing page (/)
- Portfolio selector (/portfolio)
- Projects showcase (/projects)
- All 4 variant pages

**Robots.txt**: `public/robots.txt` - Allows all crawlers and references sitemap

**OG Image**: `public/personal_website_og.png` - 1200x630px Open Graph image for social sharing

---

## Related Files

- [data-patterns.md](./data-patterns.md) - Data structure and content management
- [infrastructure.md](./infrastructure.md) - Pulumi deployment architecture
