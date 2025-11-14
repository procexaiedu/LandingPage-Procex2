# ProceX AI Landing Page

Uma landing page moderna, impactante e tecnicamente avançada para a ProceX AI - plataforma de agentes de IA para empresas brasileiras.

## 🎨 Design & Estética

Esta landing page foi criada com uma abordagem **Neo-Futurista com Elementos Cyber-Organic**:

- **Base escura** com gradientes vibrantes (amber elétrico, cyan neon, coral quente)
- **Elementos 3D interativos** usando Three.js e React Three Fiber
- **Tipografia única**: Syne (display) + Instrument Sans (corpo)
- **Animações fluidas** com Framer Motion
- **Smooth scrolling** com Lenis
- **Parallax multicamadas** e efeitos de profundidade
- **Texturas grain** e gradient meshes para profundidade

## 🚀 Tech Stack

### Core
- **Next.js 14** - App Router com React Server Components
- **TypeScript** - Type safety em todo o projeto
- **Tailwind CSS** - Styling com CSS variables customizadas

### Animações & 3D
- **Framer Motion** - Animações e transições suaves
- **Three.js** - Renderização 3D
- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers para React Three Fiber
- **GSAP** - Animações avançadas
- **Lenis** - Smooth scrolling premium

### UI Components
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de UI headless
- **Lucide React** - Ícones modernos

## 📦 Instalação

As dependências já foram instaladas. Para rodar o projeto:

\`\`\`bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Start produção
npm start

# Lint
npm run lint
\`\`\`

O servidor de desenvolvimento estará disponível em [http://localhost:3000](http://localhost:3000)

## 🎯 Funcionalidades Principais

### 🌟 Hero Section
- Background 3D animado com esferas distorcidas e campo de partículas
- Gradient mesh atmosférico
- Animações staggered de entrada
- CTAs com hover effects sofisticados

### 💼 Solutions Section
- Cards com parallax individual
- Efeitos de hover com gradientes e glows
- Scroll-triggered animations
- Layout responsivo em grid

### 📊 Social Proof
- **Counters animados** que contam progressivamente
- Métricas reais (+32% vendas, 15min→1min resposta, etc.)
- Client logos com micro-interações
- Background gradients animados

### 🔄 Process Flow
- 5 etapas com animações de scroll sincronizadas
- Elementos posicionados alternadamente (esquerda/direita)
- Ícones com badges circulares
- Connector lines entre etapas

### ⚡ Before/After Comparisons
- Cards interativos com hover states
- Comparações lado a lado (Antes vs Depois)
- Result badges destacados
- Gradientes específicos por tipo de agente

### 💬 Testimonials
- Layout criativo com quote icons
- Gradientes por testemunho
- Hover effects suaves

### 💰 Pricing
- 3 planos com destaque para o "Mais Popular"
- Gradientes únicos por plano
- Hover effects com glow e scale
- Features com checkmarks

### ❓ FAQ
- Accordion do Radix UI
- Animações suaves de abertura/fechamento
- Hover states por item

### 🎁 Final CTA
- Background com gradientes animados
- Floating spheres em loop
- Benefits grid com ícones
- Footer completo com links

## 🎨 Design System

### Cores (HSL)
\`\`\`css
--primary: 43 100% 50%      /* Amber elétrico */
--secondary: 187 100% 50%   /* Cyan neon */
--accent: 6 93% 67%         /* Coral/Salmon */
--background: 222 47% 11%   /* Dark navy */
--foreground: 48 100% 96%   /* Warm white */
\`\`\`

### Tipografia
- **Display**: Syne (400-800)
- **Body**: Instrument Sans (400-700)

### Animações Customizadas
- `float` - Movimento vertical suave
- `glow` - Pulsação de opacidade
- `accordion-down/up` - Expansão de accordions

## 📱 Responsividade

Totalmente responsivo com breakpoints Tailwind:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Todos os elementos 3D e animações respeitam `prefers-reduced-motion`.

## ⚡ Performance

### Otimizações Implementadas
- **Code splitting** automático do Next.js
- **React Server Components** para conteúdo estático
- **Client Components** apenas onde necessário (animações, 3D)
- **Lazy loading** de componentes pesados
- **Lenis** com RAF loop otimizado
- **Framer Motion** com animações GPU-accelerated

### Acessibilidade
- Hook `usePrefersReducedMotion` para respeitar preferências
- Semantic HTML em todas as seções
- ARIA labels onde necessário
- Keyboard navigation suportada

## 📂 Estrutura do Projeto

\`\`\`
├── app/
│   ├── globals.css          # Estilos globais + CSS variables
│   ├── layout.tsx           # Root layout com providers
│   └── page.tsx             # Landing page principal
├── components/
│   ├── sections/            # Seções da landing page
│   │   ├── hero.tsx
│   │   ├── solutions.tsx
│   │   ├── social-proof.tsx
│   │   ├── process-flow.tsx
│   │   ├── before-after.tsx
│   │   ├── testimonials.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   └── final-cta.tsx
│   ├── ui/                  # shadcn/ui components
│   │   └── accordion.tsx
│   ├── 3d-background.tsx    # Three.js background
│   ├── animated-counter.tsx # Counter component
│   ├── navbar.tsx           # Navigation
│   └── smooth-scroll-provider.tsx
├── hooks/
│   └── use-prefers-reduced-motion.ts
├── lib/
│   └── utils.ts             # Utilities (cn helper)
└── public/                  # Static assets
\`\`\`

## 🔧 Configurações

### Path Aliases
\`\`\`typescript
@/components → components/
@/lib → lib/
@/ui → components/ui/
@/hooks → hooks/
\`\`\`

### shadcn/ui Registries
Múltiplos registries configurados:
- @alpine, @tailark, @magicui
- @shadcn-form, @animateui
- @fancycomponents, @plateui

## 🌐 Deploy

### Vercel (Recomendado)
\`\`\`bash
npm run build
# Deploy automático via Vercel CLI ou GitHub integration
\`\`\`

### Outros Hosts
\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Conteúdo

Todo o conteúdo foi extraído de \`conteudo_lp.txt\` e implementado nas seções correspondentes:
- Hero messaging
- 4 áreas de solução (Atendimento, Financeiro, Operações, Vendas)
- Métricas sociais (+32% vendas, 1min resposta, etc.)
- 5 etapas do processo
- 4 comparações before/after
- Testimonials de clientes
- FAQ com 6 perguntas
- 3 planos de pricing

## 🎯 Próximos Passos

- [ ] Adicionar imagens/logos reais dos clientes
- [ ] Implementar formulários de contato funcionais
- [ ] Integrar analytics (Google Analytics, Hotjar, etc.)
- [ ] SEO optimization (meta tags, structured data)
- [ ] Testes A/B para CTAs
- [ ] Adicionar mais micro-interações
- [ ] Implementar dark/light mode toggle (opcional)

## 📄 Licença

© 2025 ProceX. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Next.js, Three.js, Framer Motion e muito café ☕**
