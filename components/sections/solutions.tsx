"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, DollarSign, Settings, TrendingUp, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: MessageSquare,
    title: "Atendimento & Suporte",
    description: "Respostas rápidas, Filtragem de demandas, Agendamentos",
    color: "primary",
    gradient: "linear-gradient(135deg, #fbbf24, #dc2626)",
  },
  {
    icon: DollarSign,
    title: "Financeiro & Cobrança",
    description: "Envio de boletos, Lembretes, Atualização de recebimentos",
    color: "secondary",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
  },
  {
    icon: Settings,
    title: "Operações & Backoffice",
    description: "Status de pedidos, Relatórios, Organização de tarefas",
    color: "accent",
    gradient: "linear-gradient(135deg, #f43f5e, #ec4899)",
  },
  {
    icon: TrendingUp,
    title: "Vendas & Comercial",
    description: "Nutrição de leads, Reativação de clientes, Atualizações em CRM",
    color: "primary",
    gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
  },
];

function SolutionCard({ solution }: { solution: typeof solutions[0] }) {
  const Icon = solution.icon;

  return (
    <div className="group relative">
      <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: solution.gradient }}
        />

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {solution.title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {solution.description}
          </p>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
            Explorar solução
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Soluções <span className="text-gradient-amber">por área</span>
          </h2>
          <button className="text-secondary font-semibold text-lg hover:underline underline-offset-4 transition-all">
            Ver todas
          </button>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
