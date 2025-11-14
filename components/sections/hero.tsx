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
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Seu hub de especialistas em agentes de IA
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight"
          >
            <span className="block mb-2">IA trabalhando</span>
            <span className="block text-gradient-multi">
              com você para
            </span>
            <span className="block mt-2">você ser mais</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Pare de só ouvir falar sobre IA. A ProceX cria{" "}
            <span className="text-primary font-semibold">agentes que assumem tarefas repetitivas</span>{" "}
            na sua rotina — de vendas ao financeiro — para você ter mais impacto na empresa{" "}
            <span className="text-secondary font-semibold">sem precisar virar especialista em tecnologia</span>.
          </motion.p>

          {/* Target audience */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground/80"
          >
            Serve para donos, gestores, analistas, vendedores, CS — qualquer pessoa que quer fazer mais com o que já tem.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
              <span className="relative z-10 flex items-center gap-2">
                Quero ver, na prática, como IA pode me ajudar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-semibold text-lg hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/30">
              Explorar soluções por área
            </button>
          </motion.div>

          {/* Value prop badge */}
          <motion.div
            variants={itemVariants}
            className="pt-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-gradient backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">
                🎯 Você descreve o problema em linguagem de negócio. A ProceX entrega o agente pronto e acompanha os resultados.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
