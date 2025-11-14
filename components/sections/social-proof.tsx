"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, CheckCircle, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

const metrics = [
  {
    icon: TrendingUp,
    value: 32,
    suffix: "%",
    prefix: "+",
    label: "aumento em vendas",
    description: "após reativação de clientes inativos com agente comercial",
    color: "primary",
  },
  {
    icon: Clock,
    value: 1,
    suffix: "min",
    label: "tempo de resposta",
    description: "Redução de 15min para 1min no WhatsApp com agente de agendamento",
    color: "secondary",
    smallText: "15min →",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    label: "automatizado",
    description: "Cobranças e conciliações com emissão de boletos integrada",
    color: "accent",
  },
  {
    icon: Zap,
    label: "Tempo real",
    description: "Atualizações em tempo real de planilhas e status de pedidos com agente operacional",
    color: "primary",
    isText: true,
  },
];

const clients = [
  "Banco Aurora",
  "Healthfy",
  "Cobalto Tech",
  "NorteLog",
  "VivaEdu",
  "Maran Finanças",
  "UpSales",
  "Farmo+",
];

export function SocialProof() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background -z-10" />

      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            IA já gerando <span className="text-gradient-cyan">resultado</span> em empresas como a sua
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas de diferentes portes já usam agentes ProceX para vender mais, responder mais rápido e organizar bastidores sem contratar mais gente.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />

                <div className="relative z-10">
                  <Icon className={`w-8 h-8 mb-4 text-${metric.color}`} />

                  <div className="mb-2">
                    {metric.isText ? (
                      <div className="text-3xl font-display font-bold text-primary">
                        {metric.label}
                      </div>
                    ) : (
                      <div className="text-4xl font-display font-bold">
                        {metric.smallText && (
                          <span className="text-xl text-muted-foreground mr-2">
                            {metric.smallText}
                          </span>
                        )}
                        <span className={`text-gradient-${metric.color === 'primary' ? 'amber' : metric.color === 'secondary' ? 'cyan' : 'multi'}`}>
                          <AnimatedCounter
                            end={metric.value || 0}
                            prefix={metric.prefix}
                            suffix={metric.suffix}
                            duration={2.5}
                          />
                        </span>
                      </div>
                    )}
                  </div>

                  {!metric.isText && (
                    <div className="text-sm font-semibold mb-2 text-foreground">
                      {metric.label}
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <span className="text-muted-foreground font-medium">{client}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-primary font-semibold hover:underline underline-offset-4 transition-all">
              Ver casos reais por área
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
