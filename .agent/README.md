# ProceX AI Landing Page - Documentation Index

Este documento serve como **índice central** de toda a documentação do projeto. Qualquer engenheiro novo pode começar aqui.

## 📋 Documentação Completa

### 1. **project_architecture.md** ← COMECE AQUI
**Leitura:** 10 min | **Para:** Todos os devs
- Overview do projeto (goal, status, versão)
- Tech stack detalhado (Next.js, React, Three.js, Framer Motion, etc.)
- Estrutura de pastas completa
- Arquitetura de componentes
- Design system (colors, typography)
- Performance considerations
- Path aliases e configurações

**Quando ler**: Antes de qualquer desenvolvimento

---

### 2. **design_system.md**
**Leitura:** 5 min | **Para:** Frontend devs, designers, QA
- Paleta de cores completa (HSL variables)
- Tipografia (Syne + Instrument Sans)
- Componentes de UI (buttons, cards, badges)
- Animações customizadas
- Utilities CSS (.glow-amber, .gradient-mesh, etc.)
- Responsive breakpoints
- Accessibility features

**Quando ler**: Antes de estilizar componentes

---

### 3. **animations_guide.md**
**Leitura:** 15 min | **Para:** Frontend devs especializados em motion
- Padrões de animação usados (4 padrões principais)
- Framer Motion exemplos práticos
- Scroll-triggered animations (parallax)
- Three.js + React Three Fiber (3D)
- Hover effects patterns
- Performance optimization tips
- Accessibility (prefers-reduced-motion)
- Common issues & fixes

**Quando ler**: Antes de adicionar/modificar animações

---

### 4. **components_reference.md**
**Leitura:** 20 min | **Para:** Devs usando componentes
- Documentação de CADA componente
- Layout components (Navbar, Hero, Solutions, etc.)
- Section components (9 seções)
- Utility components (3DBackground, AnimatedCounter, etc.)
- UI components (Accordion)
- Custom hooks (usePrefersReducedMotion)
- Component tree diagram
- Localização exata de arquivos
- Props e tipos

**Quando ler**: Quando vai usar/modificar um componente específico

---

### 5. **sop.md** - Standard Operating Procedures
**Leitura:** 10 min (reference) | **Para:** Devs fazendo qualquer task
- Development setup (npm install, npm run dev)
- Como adicionar nova seção (passo a passo)
- Modifying colors (CSS variables)
- Modifying typography (fonts)
- Adding animations (Framer Motion patterns)
- Testing responsiveness (DevTools)
- Git workflow (branch, commit, PR)
- Deployment (Vercel)
- Debugging (console errors, animations, styling)
- Common issues & solutions
- Accessibility testing

**Quando ler**: Quando vai fazer qualquer tarefa concreta

---

## 🚀 Quick Start Path

**Para novo dev:**
1. Leia `project_architecture.md` (entender projeto)
2. Leia `design_system.md` (entender estilo)
3. `npm install && npm run dev` (rodar localmente)
4. Explore `components/sections/` (ver código real)
5. Quando precisar fazer algo, consulte `sop.md`

**Tempo total:** ~30 minutos

---

## 📁 Estrutura de Documentação

```
.agent/
├── README.md                    ← Você está aqui (índice)
├── project_architecture.md      ← COMECE: visão completa
├── design_system.md             ← Colors, tipos, componentes
├── animations_guide.md          ← Animações detalhadas
├── components_reference.md      ← Cada componente documentado
└── sop.md                       ← Como fazer tarefas comuns
```

---

## 🎯 Objetivo do Projeto

**ProceX AI Landing Page v1.0.0**

Landing page **moderna, impactante e tecnicamente avançada** que:
- ✅ Apresenta agentes de IA como "funcionários digitais 24/7"
- ✅ Design neo-futurista único (não genérico)
- ✅ Implementa 3D interativo (Three.js)
- ✅ Animações avançadas (Framer Motion + Lenis)
- ✅ Totalmente responsivo (mobile-first)
- ✅ Acessível (prefers-reduced-motion support)

---

## 📊 Seções Implementadas (9 total)

1. **Hero** - Background 3D com esferas distorcidas + 200 partículas
2. **Solutions** - Grid 4 cards com parallax individual
3. **Social Proof** - Métricas animadas + 8 logos de clientes
4. **Process Flow** - Timeline de 5 steps com scroll-sync
5. **Before/After** - 4 case studies com comparações
6. **Testimonials** - 2 depoimentos de clientes
7. **Pricing** - 3 planos com destaque "Mais Popular"
8. **FAQ** - Accordion com 6 perguntas
9. **Final CTA** - Benefits + footer com navegação

---

## 🛠 Desenvolvimento Rápido

```bash
# Iniciar
npm install
npm run dev                  # http://localhost:3000

# Build e deploy
npm run build               # Produção
npm start                   # Rodar build localmente

# Qualidade
npm run lint               # ESLint check
```

---

## 🔗 Links Rápidos

**Arquivos principais:**
- `app/page.tsx` - Landing page (composition)
- `app/globals.css` - CSS variables + estilos globais
- `components/sections/` - 9 seções da LP
- `tailwind.config.ts` - Configuração Tailwind

**Dependências críticas:**
- Next.js 14 (App Router)
- React 18
- Framer Motion (animações)
- Three.js (3D)
- Lenis (smooth scroll)
- Tailwind CSS
- shadcn/ui

---

## 📚 Como Navegar a Documentação

**Não sabe por onde começar?**
→ Leia `project_architecture.md`

**Quer entender as cores/fonts?**
→ Leia `design_system.md`

**Precisa adicionar animação?**
→ Leia `animations_guide.md`

**Quer saber sobre um componente específico?**
→ Procure em `components_reference.md`

**Precisa fazer uma tarefa?**
→ Procure em `sop.md`

---

## 🎓 Learning Resources

- **Next.js 14 App Router**: https://nextjs.org/docs/app
- **Framer Motion**: https://www.framer.com/motion/
- **Three.js**: https://threejs.org/docs/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lenis**: https://github.com/studio-freight/lenis

---

## 📞 Como Pedir Help

1. **Documentação não tem resposta?**
   - Procure em todos os arquivos (.md)
   - Google: "framer motion [seu problema]"
   - Check código dos componentes

2. **Bug ou erro?**
   - Check console (F12)
   - Rodar build local: `npm run build`
   - Limpar cache: `rm -rf .next`

3. **Performance issue?**
   - Check Lighthouse (F12 → Lighthouse)
   - Desabilitar slow-mo, rodar novamente

---

## 🚀 Próximos Passos

**Após ler toda documentação:**
- [ ] npm run dev (rodar projeto)
- [ ] Navegar pelo site (explorar)
- [ ] Abrir DevTools (F12 → inspect)
- [ ] Ler components_reference.md enquanto explore código
- [ ] Tentar fazer uma pequena alteração (teste)
- [ ] Fazer seu primeiro commit

---

## 📝 Versão & Status

- **Versão**: 1.0.0
- **Status**: Completo e funcional
- **Data**: Nov 14, 2025
- **Servidor Dev**: http://localhost:3000 (npm run dev)

---

**Last Updated**: Nov 14, 2025
**Maintained By**: Claude Code AI
**For questions**: Consulte a documentação acima ou explore o código!

