"use client";

import { motion } from "framer-motion";
import { ArrowRight, DollarSign } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function FinancialCobbranceHero() {
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
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          {/* Micro-hero icon */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex p-4 rounded-xl bg-secondary/10">
              <DollarSign className="w-10 h-10 text-secondary" />
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-display font-bold">
            Agentes de IA para
            <br />
            <span className="text-gradient-cyan">Financeiro & Cobrança</span>
          </motion.h1>

          {/* Subtitle with main value proposition */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-base md:text-lg font-semibold text-secondary">
              que ajudam você a receber em dia
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Automatize envio de boletos, lembretes e atualizações de recebimentos com agentes de IA desenhados por especialistas em rotinas financeiras.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <button className="group relative px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-secondary/50">
              <span className="relative z-10 flex items-center gap-2">
                Quero organizar minha cobrança com IA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-semibold text-lg hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/30">
              Falar com um especialista financeiro
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

