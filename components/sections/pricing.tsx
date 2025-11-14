"use client";

import { motion } from "framer-motion";
import { Check, Star, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "Diagnóstico Guiado",
    description: "Entenda em quais processos a IA pode gerar maior impacto e qual seria o primeiro agente ideal.",
    price: "Ponto de partida",
    features: [
      "Análise de processos",
      "Identificação de gargalos",
      "Recomendações personalizadas",
      "Implementação",
    ],
    cta: "Solicitar Diagnóstico",
    badge: null,
    gradient: "from-muted to-card",
  },
  {
    name: "Projeto Piloto Focado",
    description: "Implantação de um único agente em um processo-chave. Ideal para testar valor rapidamente.",
    price: "A definir",
    features: [
      "1 fluxo automatizado",
      "Integração básica",
      "Suporte inicial (30 dias)",
      "Múltiplos agentes",
    ],
    cta: "Começar Piloto",
    badge: "⭐ Mais Popular",
    gradient: "from-primary/20 to-secondary/20",
    highlight: true,
  },
  {
    name: "Evolução Contínua",
    description: "Após validar o piloto, expansão para novos fluxos e áreas com acompanhamento frequente.",
    price: "Personalizado",
    features: [
      "Múltiplos agentes",
      "Integrações avançadas",
      "Suporte dedicado",
      "Otimizações contínuas",
    ],
    cta: "Escalar Operações",
    badge: null,
    gradient: "from-accent/20 to-primary/20",
  },
];

const highlights = [
  "Não exige equipe técnica interna",
  "Começa com escopo enxuto e objetivo claro",
  "Possibilidade de ajustar e crescer conforme o resultado aparece",
];

export function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background" />

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
            Comece pequeno, teste rápido,{" "}
            <span className="text-gradient-multi">cresça com segurança</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha entre diagnóstico guiado, piloto focado ou evolução contínua. Em todos eles, o objetivo é o mesmo: clareza de escopo, medição de resultado e ajustes constantes.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${plan.highlight ? 'md:-mt-4' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold whitespace-nowrap z-20">
                  {plan.badge}
                </div>
              )}

              <div className={`relative h-full p-8 rounded-2xl border ${plan.highlight ? 'border-primary' : 'border-border'} bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />

                <div className="relative z-10">
                  {/* Plan name */}
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-display font-bold text-gradient-amber">
                      {plan.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${plan.highlight ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30' : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'}`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center">
            Destaques de acessibilidade
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
              Conversar sobre o melhor modelo
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Fique entre os primeiros a receber os modelos de entrada e condições especiais
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
