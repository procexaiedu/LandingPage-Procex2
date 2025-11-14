"use client";

import { motion } from "framer-motion";
import { Users, Database, Target, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Tem muitos leads entrando",
    description: "sente que não consegue falar com todos.",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    icon: Database,
    title: "Depende de vendedores para atualizar CRM",
    description: "os dados acabam sempre incompletos.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Target,
    title: "Quer reativar clientes antigos",
    description: "não tem tempo para estruturar campanhas constantes.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: TrendingUp,
    title: "Precisa de mais previsibilidade no funil",
    description: "com follow-up organizado e visão clara das oportunidades.",
    color: "from-green-500/20 to-green-500/5",
  },
];

export function SalesTargetAudience() {
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

                  <div className="relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur group-hover:bg-card/60 group-hover:border-primary/30 transition-all">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
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

