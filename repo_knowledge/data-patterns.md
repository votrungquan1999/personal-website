# Data Patterns & Content Management

## Single Source of Truth: `src/data/resume.ts`

**All content lives in one file**: `resumeData` object exported from `src/data/resume.ts`

**Key principle**: Components consume data directly—no props drilling, no API calls, no separate content files.

---

## Core Data Structure

### Main Interfaces

```typescript
interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  professionalSummary: string;
  aboutMe?: string;
  impactMetrics: ImpactMetric[];
  technicalProficiency: TechnicalCategory[];
  coreStrengths: CoreStrength[];
  featuredProjects: readonly FeaturedProject[];  // Note: readonly
  experience: Experience[];
  freelanceWork: FreelanceWork[];
  education: Education;
  testimonials?: Testimonial[];
  sideProjects: readonly SideProject[];          // NEW: public side projects
}
```

### Important Details

**FeaturedProject uses readonly arrays**:
```typescript
interface FeaturedProject {
  name: string;
  description: string;
  technologies: readonly string[];     // ← readonly
  keyMetrics: readonly string[];       // ← readonly
  achievements: readonly string[];     // ← readonly
  company: string;
}
```

**Why readonly?** Declared as `const` assertion in data:
```typescript
export const resumeData: ResumeData = {
  featuredProjects: [...] as const,
  // ...
};
```

Components must handle readonly types when consuming `featuredProjects`.

---

## Content Update Workflow

To update portfolio content:

1. **Edit `src/data/resume.ts`**
2. TypeScript validates against interfaces
3. Components automatically reflect changes (no manual updates needed)

**Example**: Adding a new achievement to a project:
```typescript
featuredProjects: [
  {
    name: "Partners Portal",
    achievements: [
      "Built a client portal...",
      "New achievement here",  // ← Just add here
    ],
    // ...
  },
] as const,
```

---

## Data Consumption Pattern

Components import and use data directly:

```typescript
// src/components/core-strengths.tsx
import { resumeData } from "src/data/resume";

export function CoreStrengths() {
  return (
    <CoreStrengthsGrid strengths={resumeData.coreStrengths} />
  );
}
```

**No props drilling from page → section → component**. Each component gets what it needs directly from `resumeData`.

---

## Key Data Sections

### Impact Metrics
Quick stats shown prominently:
- `value`: e.g., "90%"
- `label`: e.g., "Faster Processing"
- `description`: Context for the metric

### Featured Projects
4 major projects with detailed metrics:
- `name`, `description`, `company`
- `technologies`: Tech stack used
- `keyMetrics`: 4-5 bullet-point metrics
- `achievements`: Detailed outcome statements

### Core Strengths
4 strength areas with achievements:
- `title`: e.g., "User-Centered Product Design"
- `description`: What this strength means
- `achievements`: 2-4 measurable outcomes

### Experience & Projects
Work history with nested projects:
```typescript
interface Experience {
  // ... job details
  projects?: Project[];  // ← Optional nested projects
}
```

### Side Projects
Public side projects with live demos and GitHub links:
```typescript
interface SideProject {
  name: string;
  category: "Business Websites" | "Developer Tools" | "Personal Projects";
  description: string;           // Brief (3-5 words) for minimal view
  fullDescription: string;        // Rich description for /projects page
  technologies: readonly string[];
  url: string;                    // Live site URL
  githubUrl?: string;             // Optional GitHub URL
  ogImageUrl?: string;            // OG image URL
}
```

**Usage in two contexts**:

1. **Full Showcase** (`/projects` route):
   - Displays `fullDescription`, OG images, all technologies
   - Grouped by category with full card layouts
   - Links to both live site and GitHub

2. **Minimal List** (variant pages):
   - Displays `description` (3-5 words), small thumbnails
   - Single line per project with category badge
   - "Visit" button to live site
   - "View All Projects" link at top

**Adding New Projects**:
1. Add new `SideProject` object to `resumeData.sideProjects` array
2. Assign appropriate `category`
3. Write brief `description` (3-5 words) and rich `fullDescription`
4. List all `technologies` (use names matching `techIcons` in `src/lib/tech-icons.tsx`)
5. Provide `url` (required) and `githubUrl` (optional)
6. Fetch and add `ogImageUrl` from the live site's OG metadata

**Note**: Side projects are publicly accessible projects. Featured projects (internal company tools) remain in variants with detailed metrics.

---

## Portfolio Problem Framing

When writing problem statements for achievements/projects, **always follow**:
`.claude/portfolio-problem-framing.md`

**Core principle**: Focus on **root cause** (user/business impact), not technical symptoms.

❌ Bad: "The UI was slow"
✅ Good: "Users couldn't work efficiently because 10+ second UI freezes broke their flow, increasing support tickets 25%"

---

## Related Files

- [architecture.md](./architecture.md) - Component patterns and structure
- `.claude/portfolio-problem-framing.md` - Guidelines for writing impactful problem statements
