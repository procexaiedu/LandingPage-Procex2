# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ProceX AI Landing Page** - A high-end marketing landing page for ProceX, an AI agent platform for Brazilian businesses. The landing page presents AI agents as "digital employees" that automate business processes without requiring technical knowledge.

**Current State**: Pre-development. Only configuration files exist (`components.json`, `.mcp.json`). No package.json, no source code, no Next.js app structure has been initialized yet.

## Tech Stack

- **Framework**: Next.js with App Router (RSC enabled per components.json)
- **UI Components**: shadcn/ui with "new-york" style variant
- **Styling**: Tailwind CSS with neutral base color and CSS variables
- **Animations**: Framer Motion (planned for extensive use)
- **Icons**: Lucide React
- **TypeScript**: Required, with strict path aliases

### Path Aliases (components.json)
```
@/components → components/
@/lib → lib/
@/ui → components/ui/
@/hooks → hooks/
```

### Component Registries
Multiple shadcn registries configured in components.json:
- `@alpine`, `@tailark`, `@magicui` (requires token), `@shadcn-form`
- `@animateui`, `@fancycomponents`, `@plateui`, `@animate-ui`

Use MCP shadcn server (configured in .mcp.json) for component installation.

## Content Strategy

The complete landing page content is defined in **conteudo_lp.txt** (Portuguese). Key messaging:
- AI agents as "digital employees" working 24/7
- Accessibility for non-technical users (owners, managers, analysts, salespeople)
- Practical business results over technical features
- Four main solution areas: Atendimento & Suporte, Financeiro & Cobrança, Operações & Backoffice, Vendas & Comercial
- Target audience: Brazilian SMBs without technical teams

### Content Sections
The file defines 12+ sections including: Hero, Soluções por área, Social Proof (metrics + client logos), Process Flow (5 steps), Before/After Comparisons, Testimonials, FAQ, Pricing, Final CTA.

**Important Social Proof Metrics**:
- +32% increase in sales after customer reactivation
- 15min → 1min response time with scheduling agent
- 100% automated billing and reconciliation
- Real-time updates for spreadsheets and order status

**Client Logos**: Banco Aurora, Healthfy, Cobalto Tech, NorteLog, VivaEdu, Maran Finanças, UpSales, Farmo+

## Design Principles

**CRITICAL**: This project explicitly rejects generic AI aesthetics. Requirements from `.claude/CLAUDE.md`:

### Must Avoid
- Overused font families (Inter, Roboto, Arial, system fonts, Space Grotesk)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and cookie-cutter component patterns
- Generic "AI slop" aesthetic

### Must Include
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Distinctive choices that elevate aesthetics.
- **Color & Theme**: Commit to a cohesive aesthetic with dominant colors and sharp accents. Use CSS variables for consistency. Draw from IDE themes and cultural aesthetics.
- **Motion**: Use animations for page load reveals (staggered with animation-delay) and micro-interactions. Prioritize CSS-only for HTML; use Framer Motion for React.
- **Backgrounds**: Create atmosphere and depth with layered CSS gradients, geometric patterns, or contextual effects rather than solid colors.
- **Creative Interpretation**: Make unexpected choices that feel genuinely designed for this specific context. Vary between light/dark themes, different fonts, different aesthetics.

## Project Initialization Required

The following must be created before development can begin:

### Core Files
```
package.json           - Dependencies: next, react, react-dom, framer-motion, tailwindcss,
                        typescript, lucide-react, @radix-ui/* packages, clsx, tailwind-merge
tsconfig.json         - TypeScript config matching path aliases from components.json
tailwind.config.ts    - Tailwind configuration (referenced in components.json)
next.config.js        - Next.js configuration
```

### Directory Structure
```
app/
  ├── globals.css     - Tailwind directives (@tailwind base/components/utilities) + CSS variables
  ├── layout.tsx      - Root layout with metadata, providers, font imports
  └── page.tsx        - Landing page composition (imports sections from components/)

components/
  ├── sections/       - Page sections (Hero, Solutions, SocialProof, Process, etc.)
  └── ui/            - shadcn/ui components (install as needed)

lib/
  └── utils.ts        - Must export cn() utility (classname merging with clsx + tailwind-merge)

hooks/
  ├── use-prefers-reduced-motion.ts  - Motion preference detection for accessibility
  └── use-device-capabilities.ts     - Device capability checks (if using heavy animations)

public/             - Static assets (images, fonts if self-hosted)
```

### CSS Variables Setup
`app/globals.css` must include Tailwind directives and CSS variable definitions for the neutral color scheme (base, foreground, muted, accent, etc.) as per shadcn/ui requirements.

## Development Workflow

**Once initialized**, standard commands will be:
```bash
npm install              # Install dependencies
npm run dev              # Start development server (typically localhost:3000)
npm run build            # Production build
npm run lint             # ESLint
npx shadcn@latest add [component]  # Add shadcn components via CLI
```

### Installing shadcn Components
The shadcn MCP server is configured. Use CLI or MCP to add components:
```bash
npx shadcn@latest add button card separator
```

Components will be added to `components/ui/` with proper TypeScript and Tailwind styling.

## Architecture Notes

### Client vs Server Components
- All animated/interactive components must use `'use client'` directive (Framer Motion, hooks require client components in App Router)
- Static content sections can be server components where appropriate
- Root layout should wrap children with any required providers

### Accessibility Requirements
- All animations should respect `prefers-reduced-motion` media query
- Use custom hook `usePrefersReducedMotion()` to conditionally render animations
- Fallback to simple opacity transitions when motion is reduced

### Performance Considerations
- If implementing heavy 3D effects or particle systems, add device capability detection
- Conditionally render expensive effects only on capable devices
- Optimize images (Next.js Image component, proper sizing)

## Code Quality Expectations

- **TypeScript**: Strict typing required. Avoid `any` unless absolutely necessary.
- **Imports**: Use path aliases consistently (`@/components`, `@/lib`, `@/hooks`)
- **Component Organization**: Logical grouping (sections/, ui/, effects/ if adding animation primitives)
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **i18n Ready**: Content is Portuguese, but structure should allow for future localization

## Notes

- This repository has extensive Claude Code customization (`.claude/` directory with commands, agents, skills)
- Target deployment: Modern browsers with good animation/CSS support
- Primary language: Portuguese (content/copy), English (code/comments/docs)
- The project emphasizes distinctive, production-quality design over rapid prototyping
