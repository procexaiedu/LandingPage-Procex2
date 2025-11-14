# Animations Guide - ProceX AI

## Overview

Landing page implementa 4 camadas de animações:
1. **Entrance Animations** - Staggered reveals on page load
2. **Scroll-Triggered Animations** - Parallax e fade on scroll
3. **Hover Effects** - Interactive state changes
4. **3D Animations** - Three.js scene rendering

## Libraries Used

### Framer Motion
- `motion` component para wrapping
- `useScroll()` para scroll tracking
- `useTransform()` para parallax values
- `variants` para animation definitions
- `whileInView` para viewport triggers

### Three.js + React Three Fiber
- Canvas para 3D rendering
- Geometries: Sphere, BufferGeometry
- Materials: MeshDistortMaterial, PointsMaterial
- useFrame para animation loop

### Lenis
- Smooth scroll interpolation
- Custom easing function
- RAF loop para smooth 60fps
- Respects prefers-reduced-motion

## Animation Patterns

### Pattern 1: Entrance Staggered

Used in: Hero, Solutions, Process Flow sections

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
```

**Effect**: Cada item entra sequencialmente de cima para baixo
**Timing**: Stagger 150ms, duração 800ms
**Easing**: Custom cubic-bezier para suavidade

### Pattern 2: Scroll-Triggered Parallax

Used in: Solutions cards, Social Proof metrics

```typescript
const { scrollYProgress } = useScroll({
  target: cardRef,
  offset: ["start end", "end start"],
});

const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

// Apply to motion div
<motion.div style={prefersReducedMotion ? {} : { y, opacity, scale }} />
```

**Effect**: Cards movem verticalmente enquanto scrollam
**Values**:
- y: 100px to -100px (parallax movement)
- opacity: 0 → 1 → 1 → 0 (fade in/out)
- scale: 0.8 → 1 → 1 → 0.8 (grow/shrink)

### Pattern 3: Hover Effects

Used in: Cards, Buttons, Links

```typescript
<button className="hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
  <motion.div animate={{ ... }} />
</button>
```

**Effects**:
- `scale-105`: Cresce 5%
- `shadow-xl shadow-primary/50`: Glow colorido
- `text-primary/hover:text-primary`: Color change
- Transição: 300ms cubic-bezier

### Pattern 4: 3D Animations

#### Sphere Distortion (Hero Background)

```typescript
<Sphere args={[1, 64, 64]} position={position}>
  <MeshDistortMaterial
    color={color}
    distort={0.4}
    speed={0.5}
    roughness={0.2}
    metalness={0.8}
  />
</Sphere>
```

Used in: 3 esferas no hero com diferentes cores
**Effect**: Superfície distorcida em tempo real, como líquido
**Parameters**:
- distort: 0.4 = amplitude da distorção
- speed: 0.3-0.5 = velocidade da deformação
- metalness: 0.8 = reflexividade

#### Particle Field

```typescript
<points>
  <bufferGeometry>
    <bufferAttribute attach="attributes-position" ... />
    <bufferAttribute attach="attributes-color" ... />
  </bufferGeometry>
  <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
</points>
```

Used in: 200 partículas coloridas em background
**Effect**: Rotate lentamente, criam atmosfera
**Colors**: Amber, Cyan, Coral (same as design system)

## Specific Animations by Section

### Hero Section
1. **Background**: 3 esferas distorcidas + particle field
2. **Title**: Staggered word reveals
3. **CTAs**: Scale on hover
4. **Scroll Indicator**: Bounce animation (repeat: infinite)

### Solutions Section
1. **Cards**: Individual parallax (y offset)
2. **Icons**: Scale up on hover
3. **Background**: Floating radial gradients

### Social Proof
1. **Counters**: useEffect + requestAnimationFrame
2. **Logos**: Scale and fade on scroll into view
3. **Metrics**: Staggered entrance

### Process Flow
1. **Numbers**: Scale/opacity based on scroll progress
2. **Connector Lines**: Gradient fills
3. **Alternating Layout**: Left/right positioning based on index

### Before/After
1. **Cards**: Hover overlay gradient
2. **Result Badge**: Highlight on hover
3. **Icons**: Color transitions

### Pricing
1. **Cards**: Hover lift (scale) + glow
2. **Badge**: Pulsing opacity if wanted
3. **Buttons**: Gradient animation on hover

### FAQ
1. **Accordion**: Smooth height expand/collapse
2. **Chevron**: Rotate 180deg on open/close
3. **Content**: Fade in/out

## Performance Optimization

### GPU Acceleration
All animations use hardware-accelerated properties:
- `transform` (translateX, translateY, scale, rotate)
- `opacity`

Avoid animating:
- `width`, `height` (use scale instead)
- `left`, `right` (use translateX instead)
- `background-color` (transitions okay, not animations)

### Conditional Animations
```typescript
const prefersReducedMotion = usePrefersReducedMotion();

// Animations disabled if user prefers
<motion.div style={prefersReducedMotion ? {} : { y, opacity }} />
```

### RAF Management
Lenis handles RAF loop efficiently:
- Single RAF loop vs multiple
- Automatic cleanup on unmount
- No memory leaks

## Animation Timing

### Easing Functions
```
[0.22, 1, 0.36, 1]  → Custom cubic-bezier
ease-in-out         → cubic-bezier(0.4, 0, 0.2, 1)
```

### Durations
- Staggered entrance: 800ms
- Scroll entrance: 600-800ms
- Hover transitions: 300ms
- Scale animations: 200-300ms

## Accessibility Considerations

### prefers-reduced-motion Support
```typescript
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Hook usage:
```typescript
const prefersReducedMotion = usePrefersReducedMotion();

if (prefersReducedMotion) {
  // Return static version or simple opacity transition
}
```

## Testing Animations

### Chrome DevTools
1. F12 → Rendering tab
2. Enable "Paint flashing" to see GPU rendering
3. Check frame rate (should be 60fps)

### Reduced Motion Testing
1. DevTools → Rendering → Emulate CSS media feature
2. Select "prefers-reduced-motion"
3. Verify animations are disabled

### Mobile Testing
1. DevTools responsive mode
2. Throttle CPU to 4x slow
3. Check animation smoothness

## Common Issues & Fixes

### Janky Animations
**Cause**: Using non-accelerated properties
**Fix**: Use transform and opacity only

### Memory Leaks
**Cause**: RAF loops not cleaned up
**Fix**: Lenis handles this, return cleanup in useEffect

### Missing Animations on Mobile
**Cause**: whileInView not triggering
**Fix**: Ensure viewport={{ once: true }} is set

## Advanced Techniques

### Scroll-Linked Animations
```typescript
useScroll({
  target: ref,
  offset: ["start end", "end start"]
})
```
Create parallax effect linked to scroll position

### Variant Orchestration
```typescript
const container = { visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { y: 20 }, visible: { y: 0 } }
```
Parent controls children staggering

### Gesture Animations
Hover, tap, drag (not used in v1.0, but available)

## Future Enhancements

- Gesture animations (swipe on mobile)
- Scroll snapping for sections
- Page transition animations
- Parallax depth on cursor movement (with throttling)

## Related Documentation

- **design_system.md** - Colors and visual design
- **components_reference.md** - Component-specific animations
- **sop.md** - How to add new animations

---

**Última atualização**: Nov 14, 2025
