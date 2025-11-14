# Design System - ProceX AI

## Color Palette

All colors defined as HSL CSS variables in `app/globals.css`

### Primary Colors
```css
--primary: 43 100% 50%           /* Amber #FFB800 - Main CTA, accents */
--primary-foreground: 222 47% 11% /* Dark navy text on amber */

--secondary: 187 100% 50%        /* Cyan #00E5FF - Secondary accent */
--secondary-foreground: 222 47% 11% /* Dark text on cyan */

--accent: 6 93% 67%              /* Coral #FF6B6B - Highlight accent */
--accent-foreground: 222 47% 11% /* Dark text on coral */
```

### Neutral Colors
```css
--background: 222 47% 11%   /* #0a0e1a - Main background (dark navy) */
--foreground: 48 100% 96%   /* #fffff0 - Primary text (warm white) */

--card: 224 40% 15%         /* #0f1621 - Card backgrounds */
--card-foreground: 48 100% 96% /* Warm white text */

--muted: 224 20% 25%        /* #1a2235 - Muted text/secondary */
--muted-foreground: 48 10% 65% /* #a8a89c - Muted text color */

--border: 224 20% 25%       /* #1a2235 - Border color */
--destructive: 0 84% 60%    /* #ff4949 - Error/alert color */
```

### Semantic Tokens
```css
--input: 224 20% 25%        /* Input backgrounds */
--ring: 43 100% 50%         /* Focus ring (primary color) */
--popover: 224 40% 15%      /* Popover backgrounds */
```

## Typography

### Font Families
- **Display**: Syne (Google Fonts)
  - Used for: h1, h2, h3, h4, h5, h6, titles
  - Weights: 400, 500, 600, 700, 800
  - Character: Geometric, modern, bold

- **Body**: Instrument Sans (Google Fonts)
  - Used for: body text, descriptions, labels
  - Weights: 400, 500, 600, 700
  - Character: Clean, readable, refined

### Type Scale (Tailwind)
```
text-xs   → 12px / 16px
text-sm   → 14px / 20px
text-base → 16px / 24px
text-lg   → 18px / 28px
text-xl   → 20px / 28px
text-2xl  → 24px / 32px
text-3xl  → 30px / 36px
text-4xl  → 36px / 40px
text-5xl  → 48px / 52px
text-6xl  → 60px / 64px
text-7xl  → 72px / 80px
text-8xl  → 96px / 100px
```

### Font Weights
- 400: Regular (body text)
- 500: Medium (semi-bold labels)
- 600: Semibold (strong emphasis)
- 700: Bold (headings, CTAs)
- 800: Extra Bold (display/headlines only)

## Spacing & Layout

### Spacing Scale
```
Base unit: 4px (0.25rem)
p-1 = 4px
p-2 = 8px
p-4 = 16px (base padding)
p-6 = 24px
p-8 = 32px
p-12 = 48px
p-16 = 64px
```

### Container
- Max width: 1400px (2xl breakpoint)
- Padding: 2rem (32px) on sides
- Center aligned

### Grid
- Default: 2 columns (md breakpoint)
- Mobile: 1 column
- Gap: 8px - 32px depending on section

## Components

### Buttons

#### Primary Button
```
Background: hsl(var(--primary))
Text: hsl(var(--primary-foreground))
Padding: 12px 32px
Border radius: 8px
Hover: scale(1.05), shadow glow
```

#### Secondary Button
```
Border: 2px hsl(var(--secondary))
Text: hsl(var(--secondary))
Padding: 12px 32px
Hover: bg-secondary, text-foreground
```

#### Text Button
```
Text: hsl(var(--primary))
Hover: underline offset-4
```

### Cards
```
Background: hsl(var(--card))
Border: 1px hsl(var(--border))
Border radius: 8px-16px
Padding: 24px-32px
Hover: border-primary, shadow-glow
Transition: all 300ms ease
```

### Badges
```
Padding: 6px 12px
Border radius: 20px
Font size: 12px
Font weight: 600
Background: color/10
Text: color
```

## Gradients

### Text Gradients (Utilities)
```css
.text-gradient-amber
→ from-amber-400 via-orange-400 to-amber-500

.text-gradient-cyan
→ from-cyan-400 via-blue-400 to-cyan-500

.text-gradient-multi
→ from-amber-400 via-cyan-400 to-rose-400
```

### Background Gradients
```css
.gradient-mesh
→ Radial gradients at different positions
→ Creates atmospheric blend of primary/secondary/accent
→ Used in Hero and Final CTA sections
```

### Border Gradients
```css
.border-gradient
→ Transparent border with gradient
→ Primary → Secondary → Accent (135deg)
```

## Effects & Utilities

### Glow Effects
```css
.glow-amber  → box-shadow primary amber
.glow-cyan   → box-shadow secondary cyan
.glow-coral  → box-shadow accent coral
```

### Grain Texture
```css
.grain
→ SVG noise overlay
→ opacity: 0.03
→ mix-blend-mode: overlay
→ Creates film grain aesthetic
```

### Animations (Custom)
```css
@keyframes float
→ translateY(0) → translateY(-20px) → translateY(0)
→ duration: 6s
→ ease-in-out infinite

@keyframes glow
→ opacity: 1 → opacity: 0.5 → opacity: 1
→ duration: 2s
→ ease-in-out infinite
```

## Responsive Breakpoints

```
sm:  640px   (small mobile)
md:  768px   (tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
2xl: 1536px  (extra large)
```

### Breakpoint Usage
- **Mobile first**: Base styles for mobile
- **md**: Tablet adjustments (768px+)
- **lg**: Desktop adjustments (1024px+)
- **hidden/block**: Show/hide based on breakpoint

## Accessibility

### Focus States
```css
ring: 2px hsl(var(--ring))
ring-offset: 2px
```

### Color Contrast
- Text on background: 16+ WCAG AAA
- Text on card: 16+ WCAG AAA
- All interactive elements: high contrast

### Motion
- Respects `prefers-reduced-motion`
- Animations disabled if user prefers
- Fallback to simple opacity transitions

## Border Radius

```
rounded: 4px
rounded-lg: 8px
rounded-xl: 12px
rounded-2xl: 16px
rounded-full: 50%
```

## Shadows

### Subtle Shadow
```
shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
```

### Standard Shadow
```
shadow-md: 0 4px 6px rgba(0,0,0,0.1)
```

### Glow Shadow (Hover)
```
hover:shadow-xl hover:shadow-primary/50
→ Creates colored glow on primary color
```

## Transitions

### Default Transition
```css
transition-property: color, background-color, border-color, fill, stroke
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
transition-duration: 150ms
```

### Custom Transitions
```
duration-300  → 300ms
duration-500  → 500ms
ease-in-out   → cubic-bezier(0.4, 0, 0.2, 1)
```

## Dark Mode

- Default: Dark mode always ON
- No light mode toggle in v1.0
- All colors designed for dark backgrounds
- High contrast for readability

## Related Documentation

- **project_architecture.md** - Tech stack e estrutura
- **animations_guide.md** - Detalhes de animações
- **components_reference.md** - Componentes específicos

---

**Última atualização**: Nov 14, 2025
