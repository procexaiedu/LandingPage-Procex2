"use client";

import { motion } from "framer-motion";
import { FileText, RotateCw, Eye, TrendingDown } from "lucide-react";

const audiences = [
  {
    icon: FileText,
    title: "Emite muitos boletos todo mês",
    description: "perde tempo só conferindo e cobrando.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: RotateCw,
    title: "Depende de lembretes manuais",
    description: "para evitar atrasos e improviso.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Eye,
    title: "Não tem visão clara de receitas",
    description: "quem pagou, vai pagar ou está atrasado.",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: TrendingDown,
    title: "Quer reduzir inadimplência",
    description: "sem montar uma grande equipe de cobrança.",
    color: "from-purple-500/20 to-purple-500/5",
  },
];

export function FinancialTargetAudience() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Para quem é
            </h2>
            <p className="text-lg text-muted-foreground">
              Essa solução é para você que:
            </p>
          </div>

          {/* Audience cards grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                  />

                  <div className="relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur group-hover:bg-card/60 group-hover:border-secondary/30 transition-all">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>

                    <h3 className="text-lg font-display font-bold mb-2 group-hover:text-secondary transition-colors">
                      {audience.title}
                    </h3>

                    <p className="text-sm md:text-base text-muted-foreground">
                      {audience.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

