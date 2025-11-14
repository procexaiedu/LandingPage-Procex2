"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Code, TestTube, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos suas rotinas, gargalos e objetivos. Você explica o dia a dia; nós identificamos onde a IA gera maior impacto primeiro.",
    icon: Search,
  },
  {
    number: "02",
    title: "Desenho de fluxo",
    description: "Mapeamos as tarefas que serão automatizadas, os canais envolvidos e as regras que o agente deve seguir.",
    icon: Map,
  },
  {
    number: "03",
    title: "Desenvolvimento / Integração",
    description: "Configuramos o agente de IA, conectamos aos sistemas da sua empresa e preparamos os dados necessários.",
    icon: Code,
  },
  {
    number: "04",
    title: "Testes e treinamento",
    description: "Validamos o comportamento do agente com casos reais e ajustamos até que ele esteja pronto para operar com segurança.",
    icon: TestTube,
  },
  {
    number: "05",
    title: "Acompanhamento contínuo",
    description: "Monitoramos performance, fazemos ajustes e evoluções conforme sua operação muda.",
    icon: BarChart,
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -50 : 50, 0, index % 2 === 0 ? 50 : -50]
  );

  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity, scale, x }}
      className="relative grid md:grid-cols-2 gap-12 items-center mb-32"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-primary to-transparent hidden md:block" />
      )}

      {/* Number & Icon side */}
      <div className={`flex flex-col items-center md:items-${isEven ? 'end' : 'start'} ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl" />

          {/* Number circle */}
          <div className="relative w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center bg-card">
            <span className="text-5xl font-display font-bold text-gradient-amber">
              {step.number}
            </span>
          </div>

          {/* Icon badge */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-4 border-background">
            <Icon className="w-7 h-7 text-background" />
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className={`${isEven ? 'md:order-2' : 'md:order-1'} ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
          {step.title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background -z-10" />

      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Veja como é <span className="text-gradient-multi">simples começar</span> com IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você não precisa montar um projeto gigante. Escolhemos juntos um fluxo específico, desenhamos o agente ideal e conectamos às ferramentas que já existem na sua operação.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Basta saber qual rotina precisa melhorar. Você descreve em linguagem de negócio, nós traduzimos isso em agentes de IA que executam com consistência.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold text-lg hover:scale-105 transition-transform hover:shadow-xl hover:shadow-primary/50">
            Mapear meu primeiro fluxo de IA
          </button>
        </motion.div>
      </div>
    </section>
  );
}
