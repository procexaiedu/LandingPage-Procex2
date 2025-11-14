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
    title: "Entendimento da sua operação financeira",
    description:
      "Você explica como funciona hoje: como emite boletos, como cobra, quais sistemas usa e quais são os principais gargalos.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Desenho do agente sob medida",
    description:
      "Um especialista em IA com experiência em rotinas financeiras desenha, junto com você, o fluxo ideal de envio, lembretes e atualização de recebimentos.",
    color: "from-cyan-500 to-cyan-500/60",
  },
  {
    icon: Zap,
    number: "03",
    title: "Integração com seus sistemas",
    description:
      "Conectamos o agente ao seu ERP, planilha, banco de dados ou ferramenta financeira, além dos canais de comunicação (WhatsApp, e-mail, SMS).",
    color: "from-blue-500 to-blue-500/60",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Acompanhamento e melhoria contínua",
    description:
      "Monitoramos resultados, ajustamos mensagens, regras de cobrança e fluxos conforme sua carteira de clientes e processos evoluem.",
    color: "from-emerald-500 to-emerald-500/60",
  },
];

export function FinancialProcessSteps() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
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
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-background to-background border-2 border-border/50 group-hover:border-secondary/50 flex items-center justify-center transition-all">
                        <div className="text-center">
                          <p className="text-xs font-bold text-muted-foreground mb-1">
                            {step.number}
                          </p>
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                      </div>
                    </div>

                    {/* Vertical line (except for last) */}
                    {index !== steps.length - 1 && (
                      <div className="w-0.5 h-24 bg-gradient-to-b from-secondary/30 to-transparent mx-auto mt-4" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-secondary transition-colors">
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

