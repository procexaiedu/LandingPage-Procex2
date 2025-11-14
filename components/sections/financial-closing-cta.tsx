"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinancialClosingCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Main message */}
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Sua empresa não precisa perder dinheiro por falta de rotina de cobrança.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Deixe a IA cuidar dos lembretes e atualizações, enquanto você foca em fazer o negócio crescer.
          </p>

          {/* CTA button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-secondary/50 inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Quero um agente de IA para Financeiro & Cobrança
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

