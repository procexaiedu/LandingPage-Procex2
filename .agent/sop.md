# Standard Operating Procedures (SOP) - ProceX AI

Procedimentos padrão para tarefas comuns no projeto.

## Development Setup

### Initial Setup
```bash
# 1. Clone/navigate to project
cd procex-ai-landing-page

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Daily Workflow
```bash
# Terminal 1 - Dev server
npm run dev

# Terminal 2 - Any git/editing operations
# (stay here for git, editing, etc)
```

---

## Adding a New Section

### Step 1: Create Component File
```bash
# Create new section in components/sections/
touch components/sections/my-section.tsx
```

### Step 2: Component Template
```typescript
"use client";

import { motion } from "framer-motion";

export function MySection() {
  return (
    <section className="relative py-32">
      <div className="container px-4">
        {/* Content here */}
      </div>
    </section>
  );
}
```

### Step 3: Add to Page
Edit `app/page.tsx`:
```typescript
import { MySection } from "@/components/sections/my-section";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <MySection />  {/* Add here */}
        <Solutions />
        {/* ... */}
      </div>
    </main>
  );
}
```

### Step 4: Add Animations
```typescript
// Use motion components
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  {/* Content */}
</motion.div>
```

### Step 5: Test
1. Dev server auto-reloads
2. Check layout responsively (F12 → responsive mode)
3. Test scroll animations
4. Test mobile (< 768px)

---

## Modifying Colors

### Add Custom Color
Edit `app/globals.css`:
```css
:root {
  --my-color: 120 100% 50%; /* HSL */
  --my-color-foreground: 222 47% 11%;
}
```

### Use in Tailwind
```tsx
<div className="bg-[hsl(var(--my-color))]">
  Text color inherited
</div>

<button className="bg-[hsl(var(--my-color))] text-[hsl(var(--my-color-foreground))]">
  Button
</button>
```

### Better: Add to tailwind.config.ts
```typescript
colors: {
  myColor: {
    DEFAULT: "hsl(var(--my-color))",
    foreground: "hsl(var(--my-color-foreground))",
  },
}
```

Then use:
```tsx
<div className="bg-myColor text-myColor-foreground" />
```

---

## Modifying Typography

### Change Font
Edit `app/layout.tsx`:
```typescript
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-instrument", // Keep variable name
});

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-syne",
});
```

### Add Heading Style
Edit `app/globals.css`:
```css
@layer components {
  .heading-lg {
    @apply text-5xl md:text-7xl font-display font-bold;
  }

  .heading-md {
    @apply text-3xl md:text-5xl font-display font-bold;
  }
}
```

Usage:
```tsx
<h2 className="heading-md">My Heading</h2>
```

---

## Adding Animations

### Scroll-Triggered Animation
```typescript
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MyComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      Content
    </motion.div>
  );
}
```

### Hover Animation
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="cursor-pointer"
>
  Hover me
</motion.div>
```

### Staggered Children
```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={container} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={item}>
      {item.label}
    </motion.div>
  ))}
</motion.div>
```

---

## Testing Responsiveness

### DevTools Method
1. Press F12 (open DevTools)
2. Click device toggle (top-left corner)
3. Test breakpoints:
   - Mobile: 375px (iPhone SE)
   - Tablet: 768px (iPad)
   - Desktop: 1024px+

### Check Mobile Issues
- Text readable (16px+ minimum)
- Buttons tappable (48px minimum)
- No horizontal scroll
- Layout single column
- Spacing adjusted

### Test Command
```bash
# Ctrl+Shift+M (Windows/Linux) or Cmd+Shift+M (Mac)
# Opens responsive mode
```

---

## Adding Components from shadcn/ui

### Install Component
```bash
npx shadcn-ui@latest add button
# or
npx shadcn-ui@latest add dialog
```

### Use Component
```tsx
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return <Button>Click me</Button>;
}
```

### Customize Component
Edit `components/ui/button.tsx` - modify className if needed

---

## Performance Optimization

### Check Bundle Size
```bash
# Build then analyze
npm run build

# Check if any large dependencies
npm ls | grep -E "large" # rough check
```

### Image Optimization
Use Next.js Image component (for future image assets):
```tsx
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
/>
```

### Remove Unused Code
- Check imports (use IDE)
- Remove unused components
- Tree-shake GSAP if not used

---

## Git Workflow

### Before Starting Work
```bash
# Pull latest
git pull origin main

# Create feature branch
git checkout -b feature/my-feature
```

### During Development
```bash
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "feat: add my section"
```

### Commit Message Format
```
feat: add solutions section
fix: correct hero animation timing
refactor: improve component organization
docs: update README
chore: update dependencies
```

### Push and PR
```bash
# Push branch
git push origin feature/my-feature

# Create PR on GitHub
# Fill in description, request review
```

---

## Debugging

### Console Errors
1. Open DevTools (F12)
2. Console tab
3. Check for red errors
4. Fix or search error message

### Animation Issues
1. Check if component has "use client"
2. Verify motion wrapping
3. Check ref assignments (useRef)
4. Test with prefersReducedMotion disabled

### Styling Issues
1. Check class spelling (typos common)
2. Verify Tailwind config loaded
3. Use DevTools inspector (F12 → Elements)
4. Check z-index stacking (z-10, z-20, etc)

### Build Errors
```bash
# Full rebuild
npm run build

# Check for type errors
npx tsc --noEmit

# Lint check
npm run lint
```

---

## Deployment

### Local Testing
```bash
# Build production
npm run build

# Start production server
npm start

# Verify at http://localhost:3000
```

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys
# Check https://vercel.com/dashboard
```

### Deploy to Other Hosts
```bash
# Build
npm run build

# Copy .next/, public/, package.json to server
# Run: npm install && npm start

# Or use Docker (if container is configured)
```

---

## Maintenance

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update specific package
npm update framer-motion

# Update all
npm update

# Audit for vulnerabilities
npm audit
npm audit fix
```

### Regular Tasks
- [ ] Review console warnings
- [ ] Test animations on slow devices
- [ ] Check lighthouse score (F12 → Lighthouse)
- [ ] Update content if needed
- [ ] Monitor analytics

---

## Common Issues & Solutions

### Issue: Animations not working
**Solution**: Check "use client" directive at top of file

### Issue: Styles not applying
**Solution**:
1. Hard refresh (Ctrl+Shift+R)
2. Clear .next folder: `rm -rf .next`
3. Rebuild: `npm run dev`

### Issue: Mobile layout broken
**Solution**:
1. Remove width: 100% hard-coded values
2. Use max-w-* classes
3. Check padding/margin on small screens

### Issue: High bundle size
**Solution**:
1. Remove unused dependencies
2. Use dynamic imports for heavy components
3. Check node_modules for duplicates: `npm dedupe`

---

## Accessibility Testing

### Manual Testing
- [ ] Tab through page (keyboard navigation)
- [ ] Test with screen reader (NVDA, JAWS)
- [ ] Test color contrast (WebAIM)
- [ ] Test with prefers-reduced-motion ON
- [ ] Test alt text on images (if any)

### Automated Testing
```bash
# Install axe DevTools browser extension
# Run audit in DevTools

# Or use axe-core in tests
npm install @axe-core/react
```

---

## Related Documentation

- **project_architecture.md** - Tech stack and structure
- **design_system.md** - Colors and typography
- **animations_guide.md** - Animation patterns
- **components_reference.md** - All components

---

**Última atualização**: Nov 14, 2025
