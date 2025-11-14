# Project Architecture

## Project Overview

**ProceX AI Landing Page** is a high-end marketing website for ProceX, an AI agent platform designed for Brazilian businesses. The landing page positions AI agents as "digital employees" that automate business processes without requiring technical knowledge from users.

### Project Goal
Create a distinctive, production-quality landing page that:
- Clearly communicates the value of AI automation to non-technical business users
- Showcases ProceX's four main solution areas (Sales, Support, Finance, Operations)
- Converts visitors into waitlist signups and consultation requests
- Avoids generic "AI slop" aesthetics through creative design choices

### Target Audience
- Brazilian SMB owners, managers, analysts, salespeople, and customer success professionals
- Non-technical users who want business results without becoming technology experts
- Companies without internal technical teams looking for accessible AI solutions

### Current Project State
**PRE-DEVELOPMENT PHASE**

The project currently exists as configuration files only:
- `components.json` - shadcn/ui configuration
- `.mcp.json` - MCP server configuration for shadcn
- `conteudo_lp.txt` - Complete Portuguese landing page content
- `.claude/` - Claude Code customization (commands, agents, skills)
- `CLAUDE.md` - Developer documentation

**No source code, package.json, or Next.js app structure has been created yet.**

---

## Tech Stack

### Frontend Framework
- **Next.js 14+** with App Router
  - React Server Components (RSC) enabled
  - Static generation for optimal performance
  - Image optimization with `next/image`

### UI & Styling
- **shadcn/ui** - Component library with "new-york" style variant
- **Tailwind CSS** - Utility-first CSS framework
  - Base color: `neutral`
  - CSS variables enabled for theming
  - Configuration file: `tailwind.config.ts`
- **Radix UI** - Accessible component primitives (via shadcn/ui)

### Animations & Interactions
- **Framer Motion** - React animation library for:
  - Page load reveals with staggered animations
  - Scroll-triggered effects
  - Micro-interactions and hover states
  - Client-side interactivity

### Icons & Assets
- **Lucide React** - Icon library
- Static assets served from `public/` directory

### Development Tools
- **TypeScript** - Type safety across the entire codebase
- **ESLint** - Code linting (Next.js default configuration)
- **Prettier** - Code formatting (if configured)

### Component Registries
Multiple shadcn registry sources configured for extended components:
- `@alpine` - Alpine registry components
- `@tailark` - Tailark UI components
- `@magicui` - Magic UI Pro components (requires token)
- `@shadcn-form` - Form components
- `@animateui` - Animation-focused components
- `@fancycomponents` - Fancy Components library
- `@plateui` - Plate UI components
- `@animate-ui` - Additional animation components

---

## Project Structure

### Required Directory Structure (Not Yet Created)

```
C:\PROCEXAI-LANDING-PAGE-2/
├── .agent/                      # Project documentation (this folder)
│   ├── system/                  # System architecture docs
│   ├── tasks/                   # PRDs & implementation plans
│   ├── sop/                     # Standard operating procedures
│   └── README.md                # Documentation index
│
├── .claude/                     # Claude Code customization
│   ├── agents/                  # Specialized agents (mobile, TypeScript, UI/UX)
│   ├── commands/                # Custom slash commands
│   ├── skills/                  # Skills (artifacts-builder, frontend-design)
│   ├── scripts/                 # Utility scripts
│   ├── CLAUDE.MD                # Frontend aesthetics guidelines
│   └── settings.local.json      # Local settings
│
├── app/                         # Next.js App Router (TO BE CREATED)
│   ├── globals.css              # Tailwind directives + CSS variables
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Landing page composition
│   └── favicon.ico              # Favicon
│
├── components/                  # React components (TO BE CREATED)
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx
│   │   ├── SolutionAreas.tsx
│   │   ├── SocialProof.tsx
│   │   ├── ProcessFlow.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Audience.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/                      # shadcn/ui components (installed as needed)
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
├── lib/                         # Utilities (TO BE CREATED)
│   └── utils.ts                 # cn() function for className merging
│
├── hooks/                       # Custom React hooks (TO BE CREATED)
│   ├── use-prefers-reduced-motion.ts
│   └── use-device-capabilities.ts (optional)
│
├── public/                      # Static assets (TO BE CREATED)
│   ├── images/
│   └── fonts/ (if self-hosting)
│
├── .mcp.json                    # MCP server configuration ✓ EXISTS
├── components.json              # shadcn/ui configuration ✓ EXISTS
├── conteudo_lp.txt              # Landing page content (Portuguese) ✓ EXISTS
├── CLAUDE.md                    # Developer documentation ✓ EXISTS
├── package.json                 # Dependencies (TO BE CREATED)
├── tsconfig.json                # TypeScript config (TO BE CREATED)
├── tailwind.config.ts           # Tailwind config (TO BE CREATED)
├── next.config.js               # Next.js config (TO BE CREATED)
├── .eslintrc.json               # ESLint config (TO BE CREATED)
└── .gitignore                   # Git ignore (TO BE CREATED)
```

### Path Aliases (from components.json)

TypeScript path aliases must be configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/ui/*": ["./components/ui/*"],
      "@/hooks/*": ["./hooks/*"]
    }
  }
}
```

---

## Content Architecture

### Source Content
All landing page copy is defined in **`conteudo_lp.txt`** (Portuguese). This file contains:
- Complete marketing copy for all sections
- Specific metrics and social proof data
- Client testimonials and company logos
- FAQ content
- Pricing plan descriptions

### Content Sections (12 Major Sections)

1. **Hero Section**
   - Main headline: "IA trabalhando com você para você ser mais"
   - Value proposition and primary CTAs
   - Target audience: "donos, gestores, analistas, vendedores, CS"

2. **Solution Areas (4 Areas)**
   - Atendimento & Suporte (Support)
   - Financeiro & Cobrança (Finance)
   - Operações & Backoffice (Operations)
   - Vendas & Comercial (Sales)
   - Each area has dedicated landing page content

3. **Social Proof**
   - Quantitative metrics:
     - +32% increase in sales (reactivation agent)
     - 15min → 1min response time (scheduling agent)
     - 100% automated billing/reconciliation
     - Real-time updates for operations
   - Client logos: Banco Aurora, Healthfy, Cobalto Tech, NorteLog, VivaEdu, Maran Finanças, UpSales, Farmo+

4. **Process Flow (5 Steps)**
   - 01 Diagnóstico (Diagnosis)
   - 02 Desenho de fluxo (Flow design)
   - 03 Desenvolvimento / Integração (Development/Integration)
   - 04 Testes e treinamento (Testing/Training)
   - 05 Acompanhamento contínuo (Continuous monitoring)

5. **Before/After Comparisons (4 Agent Types)**
   - Agente Comercial (Sales Agent)
   - Agente de Agendamento (Scheduling Agent)
   - Agente Financeiro (Finance Agent)
   - Agente Operacional (Operations Agent)

6. **Testimonials**
   - Diretor Comercial quote
   - Gestor Operacional quote

7. **Target Audience**
   - By business area (Sales, Support, Finance, Operations)
   - By business type (Clinics, Retail, Services, B2B)

8. **Pricing/Plans (3 Tiers)**
   - Diagnóstico Guiado (Guided Diagnosis) - Entry point
   - Projeto Piloto Focado (Focused Pilot) - Most popular
   - Evolução Contínua (Continuous Evolution) - Growth

9. **FAQ Section**
   - 7 common questions addressing barriers to adoption
   - Emphasis on accessibility (no coding required, small companies welcome)

10. **Final CTA**
    - Benefits recap (more revenue, less costs, more free time)
    - Waitlist/priority access messaging

11. **Footer**
    - Navigation links
    - Legal links (Privacy Policy, Terms)
    - Contact information

12. **Area-Specific Pages (4 Pages)**
    - Detailed pages for each solution area with specific use cases

---

## Design System Requirements

### Critical Design Principles (from .claude/CLAUDE.MD)

**MUST AVOID "AI Slop" Aesthetics:**
- ❌ Overused fonts: Inter, Roboto, Arial, system fonts, Space Grotesk
- ❌ Clichéd color schemes: purple gradients on white backgrounds
- ❌ Predictable layouts and cookie-cutter patterns
- ❌ Generic component designs

**MUST INCLUDE:**

#### Typography
- Choose beautiful, unique, interesting fonts
- Distinctive choices that elevate aesthetics
- Avoid obvious Google Fonts choices

#### Color & Theme
- Commit to cohesive aesthetic with dominant colors and sharp accents
- Use CSS variables for consistency
- Draw inspiration from IDE themes and cultural aesthetics
- Neutral base color (per components.json)

#### Motion & Animation
- Page load reveals with staggered animations (`animation-delay`)
- Micro-interactions on hover/click
- CSS-only solutions preferred for simple animations
- Framer Motion for complex React animations
- High-impact, orchestrated moments over scattered effects

#### Backgrounds
- Create atmosphere and depth
- Layer CSS gradients
- Geometric patterns
- Contextual effects matching overall aesthetic
- Avoid solid color backgrounds

#### Creative Interpretation
- Make unexpected choices
- Vary between light/dark themes
- Context-specific character
- Think outside the box on every design decision

### Accessibility Requirements

1. **Motion Preferences**
   - All animations must respect `prefers-reduced-motion` media query
   - Implement `usePrefersReducedMotion()` hook
   - Fallback to simple opacity transitions when motion is reduced

2. **Semantic HTML**
   - Proper heading hierarchy
   - ARIA labels where necessary
   - Keyboard navigation support

3. **Device Capabilities (Optional)**
   - Detect device capabilities for heavy effects
   - Conditionally render expensive animations only on capable devices
   - Implement `useDeviceCapabilities()` hook if needed

---

## Integration Points

### MCP Server Configuration
The project uses the shadcn MCP server for component installation:

**`.mcp.json`:**
```json
{
  "mcpServers": {
    "shadcn": {
      "command": "cmd",
      "args": ["/c", "npx", "shadcn@latest", "mcp"]
    }
  }
}
```

### External Dependencies (When package.json is Created)

**Core Dependencies:**
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "framer-motion": "^10.0.0",
  "tailwindcss": "^3.0.0",
  "typescript": "^5.0.0",
  "lucide-react": "^0.300.0",
  "@radix-ui/react-*": "latest",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

### Future Integration Considerations
- WhatsApp CTA links for contact
- Email capture for waitlist
- Analytics tracking (Google Analytics, Mixpanel, etc.)
- Form submission handling
- CMS integration (if content needs to be dynamic)

---

## Component Architecture

### Component Organization Pattern

```
components/
├── sections/          # Full-page sections (smart components)
│   - Import and compose multiple UI components
│   - Handle section-level state and logic
│   - Map content from conteudo_lp.txt to UI
│
└── ui/               # Reusable UI primitives (dumb components)
    - shadcn/ui components
    - Presentation-only components
    - Highly reusable across sections
```

### Client vs Server Components

**Server Components (default in App Router):**
- Static section wrappers
- Content rendering without interactivity
- SEO-optimized sections

**Client Components (require `'use client'` directive):**
- All components using Framer Motion
- All components using React hooks
- Interactive elements (forms, buttons with state)
- Animation wrappers and effects

### Recommended Component Breakdown

**Hero Section:**
- `Hero.tsx` - Server component wrapper
- `HeroAnimation.tsx` - Client component for animated elements
- `CTAButton.tsx` - Reusable CTA button (client)

**Solution Areas:**
- `SolutionAreas.tsx` - Server component wrapper
- `SolutionCard.tsx` - Client component with hover effects
- Framer Motion for staggered card reveals

**Social Proof:**
- `SocialProof.tsx` - Server component wrapper
- `MetricCard.tsx` - Client component with count-up animation
- `ClientLogos.tsx` - Client component with scroll/fade effects

**Process Flow:**
- `ProcessFlow.tsx` - Server component wrapper
- `ProcessStep.tsx` - Client component with scroll-triggered reveals

**Before/After:**
- `BeforeAfterComparison.tsx` - Server component wrapper
- `ComparisonCard.tsx` - Client component with flip/slide animations

**Testimonials:**
- `Testimonials.tsx` - Carousel or grid with animations
- Client component for interaction

**Pricing:**
- `Pricing.tsx` - Server component wrapper
- `PricingCard.tsx` - Client component with hover effects

**FAQ:**
- `FAQ.tsx` - Accordion component (shadcn/ui)
- Client component for expand/collapse

---

## Development Workflow

### Initial Setup (Required Before Development)

1. **Initialize package.json:**
   ```bash
   npm init -y
   ```

2. **Install dependencies:**
   ```bash
   npm install next react react-dom framer-motion
   npm install -D tailwindcss postcss autoprefixer typescript @types/react @types/node
   npm install lucide-react clsx tailwind-merge
   npx tailwindcss init -p
   ```

3. **Create core files:**
   - `tsconfig.json` with path aliases
   - `tailwind.config.ts` with content paths and theme
   - `next.config.js` with production optimizations
   - `lib/utils.ts` with `cn()` utility function
   - `app/globals.css` with Tailwind directives and CSS variables
   - `app/layout.tsx` with root layout structure
   - `app/page.tsx` with section composition

4. **Create custom hooks:**
   - `hooks/use-prefers-reduced-motion.ts`

5. **Install initial shadcn/ui components:**
   ```bash
   npx shadcn@latest add button card separator
   ```

### Development Commands (Once Initialized)

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (if configured)
```

### Installing shadcn Components

Use shadcn CLI or MCP server:
```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button card accordion separator
```

### Git Workflow (Once Git is Initialized)

```bash
git init
git add .
git commit -m "Initial commit"
```

---

## Performance Considerations

### Optimization Strategies

1. **Image Optimization**
   - Use Next.js `Image` component for all images
   - Proper sizing and lazy loading
   - WebP format with fallbacks

2. **Animation Performance**
   - Prefer `transform` and `opacity` for animations
   - Use `will-change` sparingly
   - Implement `useReducedMotion` for accessibility

3. **Code Splitting**
   - Lazy load heavy animation components
   - Dynamic imports for below-the-fold sections

4. **Static Generation**
   - Landing page is fully static
   - Generate at build time for optimal performance

5. **Font Loading**
   - Use Next.js `next/font` for optimized font loading
   - Preload critical fonts
   - Font display: swap strategy

---

## Code Quality Standards

### TypeScript
- Strict mode enabled
- No `any` types unless absolutely necessary
- Proper interface definitions for all props
- Type all function parameters and return values

### Component Structure
```tsx
'use client' // Only if using hooks or Framer Motion

import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'

interface ComponentProps {
  title: string
  description?: string
  className?: string
}

export function Component({ title, description, className }: ComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      {/* Component content */}
    </div>
  )
}
```

### Styling Conventions
- Use Tailwind utility classes
- Use `cn()` helper for conditional classes
- Define reusable CSS variables in `globals.css`
- Avoid inline styles unless dynamic

### Accessibility Checklist
- ✓ Semantic HTML elements
- ✓ ARIA labels for interactive elements
- ✓ Keyboard navigation support
- ✓ Focus indicators visible
- ✓ Color contrast ratios meet WCAG AA
- ✓ All animations respect `prefers-reduced-motion`

---

## Related Documentation

- `CLAUDE.md` (root) - Developer documentation and project overview
- `.claude/CLAUDE.MD` - Frontend aesthetics guidelines
- `conteudo_lp.txt` - Complete landing page content (Portuguese)
- `.agent/README.md` - Documentation index (this directory)
