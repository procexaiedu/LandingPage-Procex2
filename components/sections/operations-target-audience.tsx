"use client";

import { motion } from "framer-motion";
import { Workflow, Grid3x3, AlertTriangle, Eye } from "lucide-react";

const audiences = [
  {
    icon: Workflow,
    title: "Coordena operações com muitas etapas",
    description: "pessoas ou pedidos em paralelo.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Grid3x3,
    title: "Depende de planilhas e mensagens",
    description: "soltas para saber o que está acontecendo.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: AlertTriangle,
    title: "Sente que sempre tem algo perdido",
    description: "ou esquecido no meio do caminho.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Eye,
    title: "Quer ter visão clara das operações",
    description: "sem precisar pedir atualização o tempo todo.",
    color: "from-green-500/20 to-green-500/5",
  },
];

export function OperationsTargetAudience() {
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

                  <div className="relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur group-hover:bg-card/60 group-hover:border-accent/30 transition-all">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    <h3 className="text-lg font-display font-bold mb-2 group-hover:text-accent transition-colors">
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

