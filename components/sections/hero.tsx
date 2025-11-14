"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ThreeDBackground } from "@/components/3d-background";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeDBackground />

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                IA acessível, feita por especialistas do seu mercado
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight md:leading-tight"
          >
            <span className="block mb-1 md:mb-2">Agentes de IA sob medida</span>
            <span className="block text-gradient-multi">criados por especialistas</span>
            <span className="block mt-1 md:mt-2">do seu mercado</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed md:leading-relaxed"
          >
            Você descreve sua rotina e seus objetivos em linguagem de negócio. A ProceX conecta você a{" "}
            <span className="text-primary font-semibold">especialistas em IA de cada segmento</span> para desenhar agentes que{" "}
            <span className="text-secondary font-semibold">trabalham com você no dia a dia</span> — assumindo tarefas, melhorando processos e abrindo novas oportunidades.
          </motion.p>

          {/* Target audience */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground/80"
          >
            Para donos, gestores, analistas, vendedores, CS… qualquer pessoa que quer fazer mais com o que já tem.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
              <span className="relative z-10 flex items-center gap-2">
                Quero um assistente de IA trabalhando comigo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-semibold text-lg hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/30">
              Explorar soluções por área
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
