# Repository Knowledge Base

This folder contains technical documentation for the codebase, organized to reduce duplication and provide quick reference for development patterns.

## Quick Navigation

### [architecture.md](./architecture.md)
**When to read**: Setting up new components, understanding project structure, styling questions

**Covers**:
- Dual-file component pattern (`.tsx` + `.ui.tsx`)
- Import path conventions (`src/*` prefix)
- Next.js App Router structure
- Tailwind CSS v4 + shadcn/ui setup
- Portfolio variants system
- React 19 + React Compiler

---

### [data-patterns.md](./data-patterns.md)
**When to read**: Adding/editing content, understanding data flow, working with `resumeData`

**Covers**:
- Single source of truth: `src/data/resume.ts`
- Data structure interfaces
- Content update workflow
- Readonly array handling for `FeaturedProject`
- Portfolio problem framing principles

---

### [infrastructure.md](./infrastructure.md)
**When to read**: Deploying, modifying infrastructure, understanding deployment flow

**Covers**:
- Pulumi IaC architecture
- Deployment scripts (Vercel + Cloudflare)
- Environment variable control pattern
- Configuration management
- Cloudflare DNS setup (proxied: false)

---

## Cross-References

Files reference each other to avoid duplication:
- **Architecture** ↔ **Data Patterns**: Component consumption of `resumeData`
- **Architecture** ↔ **Infrastructure**: Build/deployment separation
- **Data Patterns** → `.claude/portfolio-problem-framing.md`: Content writing guidelines

---

## Usage

These files are **automatically discovered by Claude Code** via the reference in `CLAUDE.md`.

**For developers**: Use as quick reference when working on features that touch these areas.

**For AI agents**: These provide focused context without overwhelming the conversation with obvious or generic instructions.
