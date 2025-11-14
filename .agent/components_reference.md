# Components Reference - ProceX AI

## Overview

Documentação técnica de todos os componentes da landing page.

## Layout Components

### Navbar
**Path**: `components/navbar.tsx`
**Type**: Client Component (`use client`)

```typescript
export function Navbar()
```

**Features**:
- Fixed positioning com backdrop blur
- Links de navegação (Como funciona, Soluções, Casos, Planos)
- CTA button "Falar com especialista"
- Menu mobile responsivo (hamburger)
- Animação de entrada (slideDown)

**Props**: None
**Dependencies**: framer-motion, lucide-react (Menu, X icons)

**Usage**:
```tsx
import { Navbar } from "@/components/navbar";

<Navbar />
```

---

## Section Components

### Hero
**Path**: `components/sections/hero.tsx`
**Type**: Client Component

```typescript
export function Hero()
```

**Features**:
- 3D background com ThreeDBackground
- Badge com Sparkles icon
- Headline em múltiplas linhas com gradients
- Descrição com destaque em palavras-chave
- 2 CTAs (primary + secondary)
- Value prop badge
- Scroll indicator animado

**Contains**:
- Importer: ThreeDBackground component
- Gradient mesh overlay
- Staggered animations (Hero.containerVariants, itemVariants)

**Usage**:
```tsx
import { Hero } from "@/components/sections/hero";

<Hero />
```

---

### Solutions
**Path**: `components/sections/solutions.tsx`
**Type**: Client Component

```typescript
export function Solutions()
export function SolutionCard({ solution, index })
```

**Features**:
- Grid 2 columns (md breakpoint)
- 4 solution cards
- Parallax individual por card
- Hover effects com gradients
- Icon badges com colors específicas
- Scroll-triggered animations

**Solution Card Props**:
```typescript
{
  icon: IconComponent,
  title: string,
  description: string,
  color: "primary" | "secondary" | "accent",
  gradient: string,
}
```

**Data**:
- Atendimento & Suporte (MessageSquare, amber)
- Financeiro & Cobrança (DollarSign, cyan)
- Operações & Backoffice (Settings, coral)
- Vendas & Comercial (TrendingUp, violet)

---

### Social Proof
**Path**: `components/sections/social-proof.tsx`
**Type**: Client Component

```typescript
export function SocialProof()
```

**Features**:
- Grid 4 columns (lg: 2 columns, md: 1)
- Animated metrics com AnimatedCounter
- Client logos grid
- Background gradient animations
- Scroll-triggered entrance

**Metrics**:
```typescript
{
  icon: IconComponent,
  value: number,
  suffix: string,
  prefix: string,
  label: string,
  description: string,
  color: "primary" | "secondary" | "accent",
}
```

**Clients**: 8 logos (Banco Aurora, Healthfy, etc.)

---

### Process Flow
**Path**: `components/sections/process-flow.tsx`
**Type**: Client Component

```typescript
export function ProcessFlow()
export function ProcessStep({ step, index })
```

**Features**:
- 5 steps timeline
- Alternating left-right layout
- Connector lines entre steps
- Scroll-sync animations
- Number circles com badges

**Step Structure**:
```typescript
{
  number: string,
  title: string,
  description: string,
  icon: IconComponent,
}
```

**Steps**:
1. Diagnóstico (Search icon)
2. Desenho de fluxo (Map icon)
3. Desenvolvimento (Code icon)
4. Testes e treinamento (TestTube icon)
5. Acompanhamento contínuo (BarChart icon)

---

### Before/After
**Path**: `components/sections/before-after.tsx`
**Type**: Client Component

```typescript
export function BeforeAfter()
export function ComparisonCard({ case, index })
```

**Features**:
- 4 case study cards
- Before/After/Result format
- Hover overlay gradients
- Icons X/Check
- Staggered animations

**Case Structure**:
```typescript
{
  title: string,
  before: { title: string, items: string[] },
  after: { title: string, items: string[] },
  result: string,
  color: string,
}
```

**Cases**:
- Agente Comercial (+32% vendas)
- Agente de Agendamento (15min → 1min)
- Agente Financeiro (100% automatizado)
- Agente Operacional (Tempo real)

---

### Testimonials
**Path**: `components/sections/testimonials.tsx`
**Type**: Client Component

```typescript
export function Testimonials()
```

**Features**:
- Grid 2 columns
- Quote icons
- Colored accent bars
- Gradient per testimonial
- CTA button

**Testimonial Data**:
```typescript
{
  quote: string,
  author: string,
  gradient: string,
}
```

**Count**: 2 testimonials

---

### Pricing
**Path**: `components/sections/pricing.tsx`
**Type**: Client Component

```typescript
export function Pricing()
```

**Features**:
- Grid 3 columns
- Destaque para "Mais Popular" (negative margin)
- Price displays
- Feature lists com Check icons
- Highlights section

**Plan Structure**:
```typescript
{
  name: string,
  description: string,
  price: string,
  features: string[],
  cta: string,
  badge?: string,
  gradient: string,
  highlight?: boolean,
}
```

**Plans**:
1. Diagnóstico Guiado
2. Projeto Piloto Focado ⭐
3. Evolução Contínua

---

### FAQ
**Path**: `components/sections/faq.tsx`
**Type**: Client Component

```typescript
export function FAQ()
```

**Features**:
- Radix UI Accordion
- 6 Q&A items
- Smooth animations
- Hover states
- "Não está aqui?" link

**Uses**: `Accordion` from `components/ui/accordion`

---

### Final CTA
**Path**: `components/sections/final-cta.tsx`
**Type**: Client Component

```typescript
export function FinalCTA()
```

**Features**:
- Animated backgrounds (floating spheres)
- Benefits grid (3 cards)
- Dual CTAs
- Footer completo
- Navigation links

**Benefits**:
1. Mais faturamento (TrendingUp)
2. Menos custos (DollarSign)
3. Mais tempo livre (Clock)

---

## Utility Components

### ThreeDBackground
**Path**: `components/3d-background.tsx`
**Type**: Client Component

```typescript
export function ThreeDBackground()
function AnimatedSphere({ position, color, speed })
function ParticleField()
```

**Features**:
- Canvas Three.js 3D rendering
- 3 esferas distorcidas com MeshDistortMaterial
- 200 partículas coloridas
- Lighting com pointLights (amber + cyan)
- Parallax background

**Dependencies**: Three.js, @react-three/fiber, @react-three/drei

---

### AnimatedCounter
**Path**: `components/animated-counter.tsx`
**Type**: Client Component

```typescript
export function AnimatedCounter({
  end: number,
  duration?: number,
  suffix?: string,
  prefix?: string,
  decimals?: number,
})
```

**Features**:
- Counts from 0 to end value
- RequestAnimationFrame loop
- EaseOutQuart function
- Triggered on view (useInView)
- Props customizáveis

**Usage**:
```tsx
<AnimatedCounter
  end={32}
  suffix="%"
  prefix="+"
  duration={2.5}
/>
```

---

### SmoothScrollProvider
**Path**: `components/smooth-scroll-provider.tsx`
**Type**: Client Component

```typescript
export function SmoothScrollProvider({ children })
```

**Features**:
- Wrapper para Lenis smooth scrolling
- RAF loop management
- Respeita prefers-reduced-motion
- Cleanup on unmount

**Placement**: Wraps children in `app/layout.tsx`

---

## UI Components (shadcn/ui)

### Accordion
**Path**: `components/ui/accordion.tsx`
**Type**: Client Component (Radix-based)

```typescript
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

**Used in**: FAQ section

**Props**:
```typescript
<Accordion type="single" collapsible>
  <AccordionItem value="item-0">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Custom Hooks

### usePrefersReducedMotion
**Path**: `hooks/use-prefers-reduced-motion.ts`
**Type**: Hook

```typescript
export function usePrefersReducedMotion(): boolean
```

**Purpose**: Detect user motion preferences
**Returns**: boolean (true if reduce motion enabled)
**Usage**:
```tsx
const prefersReducedMotion = usePrefersReducedMotion();

if (!prefersReducedMotion) {
  // Render with animations
}
```

---

## Utility Functions

### cn (classname)
**Path**: `lib/utils.ts`

```typescript
export function cn(...inputs: ClassValue[])
```

**Purpose**: Merge classnames with Tailwind
**Uses**: clsx + tailwind-merge
**Example**:
```tsx
cn(
  "p-4 bg-primary",
  isActive && "opacity-100",
  isDisabled && "opacity-50"
)
```

---

## Page Composition

### App Page
**Path**: `app/page.tsx`

```typescript
export default function Home()
```

**Composition**:
```tsx
<main className="relative">
  <Navbar />
  <div className="pt-16">
    <Hero />
    <Solutions />
    <SocialProof />
    <ProcessFlow />
    <BeforeAfter />
    <Testimonials />
    <Pricing />
    <FAQ />
    <FinalCTA />
  </div>
</main>
```

**Order**: Ordem de seções no page.tsx

---

### Root Layout
**Path**: `app/layout.tsx`

```typescript
export default function RootLayout({ children })
```

**Features**:
- Syne + Instrument Sans fonts import
- SmoothScrollProvider wrapper
- Dark mode class
- Grain texture class
- Metadata setup

---

## Component Tree Diagram

```
Layout
├── Navbar
└── main.relative
    ├── Hero
    │   └── ThreeDBackground
    ├── Solutions
    │   └── SolutionCard[] (4x)
    ├── SocialProof
    │   ├── Metrics (4x)
    │   │   └── AnimatedCounter
    │   └── Logos (8x)
    ├── ProcessFlow
    │   └── ProcessStep[] (5x)
    ├── BeforeAfter
    │   └── ComparisonCard[] (4x)
    ├── Testimonials
    │   └── Cards (2x)
    ├── Pricing
    │   └── PricingCard[] (3x)
    ├── FAQ
    │   └── Accordion
    │       └── AccordionItem[] (6x)
    └── FinalCTA
        └── Footer
```

## Related Documentation

- **project_architecture.md** - Estrutura geral
- **design_system.md** - Styling e colors
- **animations_guide.md** - Animation patterns
- **sop.md** - Como adicionar componentes

---

**Última atualização**: Nov 14, 2025
