"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Pencil,
  Zap,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Mapeamos sua operação atual",
    description:
      "Você mostra como os pedidos e tarefas passam hoje pelos setores, quem atualiza o quê e onde ficam as informações.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Desenhamos o agente sob medida",
    description:
      "Um especialista em IA com experiência em operações constrói, junto com você, o fluxo ideal de automação (status, tarefas, alertas, registros).",
    color: "from-pink-500 to-pink-500/60",
  },
  {
    icon: Zap,
    number: "03",
    title: "Conectamos às suas ferramentas",
    description:
      "Integramos o agente às ferramentas que você já usa (sistemas internos, planilhas, ERPs, Trello/Notion/etc., WhatsApp, e-mail).",
    color: "from-purple-500 to-purple-500/60",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Acompanhamos e ajustamos",
    description:
      "Vemos como o agente se comporta na rotina real, fazemos ajustes finos e vamos aumentando o nível de automação conforme a equipe se adapta.",
    color: "from-emerald-500 to-emerald-500/60",
  },
];

export function OperationsProcessSteps() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Como funciona com a ProceX
            </h2>
          </div>

          {/* Steps timeline */}
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0 group"
                >
                  {/* Step number and icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Background glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300`}
                      />

                      {/* Icon container */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-background to-background border-2 border-border/50 group-hover:border-accent/50 flex items-center justify-center transition-all">
                        <div className="text-center">
                          <p className="text-xs font-bold text-muted-foreground mb-1">
                            {step.number}
                          </p>
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                    </div>

                    {/* Vertical line (except for last) */}
                    {index !== steps.length - 1 && (
                      <div className="w-0.5 h-24 bg-gradient-to-b from-accent/30 to-transparent mx-auto mt-4" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
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

