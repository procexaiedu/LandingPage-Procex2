# Project Architecture - ProceX AI Landing Page

## Overview

**Projeto**: ProceX AI Landing Page
**Versão**: 1.0.0
**Status**: Completo e funcional
**Objetivo**: Landing page moderna com design neo-futurista, 3D interativo, animações avançadas

## Tech Stack

### Core
- **Next.js 14** - App Router com RSC
- **React 18** - UI framework
- **TypeScript** - Type safety strict

### Styling & Design
- **Tailwind CSS** - Utility-first com custom colors (HSL variables)
- **CSS Variables** - Color system customizável

### Animations & 3D
- **Framer Motion** - React animations, scroll triggers
- **Three.js** - 3D rendering
- **@react-three/fiber** - React para Three.js
- **@react-three/drei** - Three.js helpers
- **Lenis** - Smooth scrolling premium

### UI & Components
- **shadcn/ui** - Componentes headless
- **Radix UI** - Primitivos acessíveis
- **Lucide React** - Ícones

## Project Structure

```
.agent/                       # Documentação
app/                          # Next.js app
├── globals.css              # Estilos globais + CSS vars
├── layout.tsx               # Root layout
└── page.tsx                 # Landing page

components/
├── sections/                # 9 seções da LP
│   ├── hero.tsx            # Hero + 3D
│   ├── solutions.tsx       # 4 soluções
│   ├── social-proof.tsx    # Métricas
│   ├── process-flow.tsx    # 5 steps
│   ├── before-after.tsx    # Comparações
│   ├── testimonials.tsx    # Depoimentos
│   ├── pricing.tsx         # Planos
│   ├── faq.tsx            # FAQ
│   └── final-cta.tsx      # CTA + footer
├── ui/                     # shadcn components
│   └── accordion.tsx
├── 3d-background.tsx       # Three.js scene
├── animated-counter.tsx    # Counter
├── navbar.tsx             # Navigation
└── smooth-scroll-provider.tsx

hooks/
└── use-prefers-reduced-motion.ts

lib/
└── utils.ts               # cn() helper

public/                    # Assets
```

## Design System

### Colors (HSL)
- `--primary: 43 100% 50%` → Amber #FFB800
- `--secondary: 187 100% 50%` → Cyan #00E5FF
- `--accent: 6 93% 67%` → Coral #FF6B6B
- `--background: 222 47% 11%` → Navy #0a0e1a
- `--foreground: 48 100% 96%` → White #fffff0

### Typography
- **Display**: Syne (bold, headlines)
- **Body**: Instrument Sans (regular text)

## Seções Implementadas

1. **Hero** - Background 3D com partículas + gradient mesh
2. **Solutions** - Grid 4 cards parallax
3. **Social Proof** - Counters animados + logos
4. **Process Flow** - Timeline 5 steps
5. **Before/After** - 4 case studies
6. **Testimonials** - 2 quotes
7. **Pricing** - 3 planos
8. **FAQ** - Accordion 6 items
9. **Final CTA** - Benefits + footer

## Key Features

### Animations
- Entrada staggered
- Scroll-triggered opacity/scale/x
- Hover effects (scale, glow, color)
- 3D distortions
- Counters animados
- Smooth scrolling (Lenis)

### Responsiveness
- Mobile-first
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Fluid layouts
- Touch-friendly

### Accessibility
- Respeita prefers-reduced-motion
- Semantic HTML
- ARIA labels
- Keyboard navigation

## Development

```bash
npm install       # Instalar deps
npm run dev       # Dev server (localhost:3000)
npm run build     # Build prod
npm start         # Run prod
npm run lint      # Lint
```

## Configuration

### TypeScript Paths
- `@/components` → `components/`
- `@/lib` → `lib/`
- `@/ui` → `components/ui/`
- `@/hooks` → `hooks/`

## Performance

- Code splitting automático
- CSS-in-JS com Tailwind (zero runtime)
- GPU-accelerated animations
- Lazy loading components
- Image optimization ready

## Deployment

- Vercel (recommended)
- `npm run build && npm start`
- Node.js 18+ required

---

**Related Docs**: design_system.md, animations_guide.md, components_reference.md, sop.md
