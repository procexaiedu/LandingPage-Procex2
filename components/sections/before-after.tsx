"use client";

import { motion } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";
import { useState } from "react";

const cases = [
  {
    title: "Agente Comercial",
    before: {
      title: "Antes",
      items: [
        "Base de clientes inativos",
        "Follow-ups manuais",
        "Equipe sem tempo para reativar leads",
      ],
    },
    after: {
      title: "Depois",
      items: [
        "Agente de IA reativando a base",
        "Mensagens personalizadas",
        "Fluxo contínuo automatizado",
      ],
    },
    result: "+32% de aumento em vendas em poucos meses",
    color: "primary",
  },
  {
    title: "Agente de Agendamento",
    before: {
      title: "Antes",
      items: [
        "Tempo médio de resposta de 10 a 20 minutos",
        "Perda de oportunidades",
        "Clientes sem atendimento imediato",
      ],
    },
    after: {
      title: "Depois",
      items: [
        "Atendimento automático instantâneo",
        "Tira dúvidas e oferece horários",
        "Disponível 24/7",
      ],
    },
    result: "Tempo de resposta reduzido de 15 min para 1 min",
    color: "secondary",
  },
  {
    title: "Agente Financeiro",
    before: {
      title: "Antes",
      items: [
        "Cobranças manuais",
        "Esquecimentos frequentes",
        "Falta de padrão na comunicação",
      ],
    },
    after: {
      title: "Depois",
      items: [
        "Disparo automático de boletos",
        "Lembretes programados",
        "Atualização automática de registros",
      ],
    },
    result: "Melhor previsibilidade de caixa e redução de inadimplência",
    color: "accent",
  },
  {
    title: "Agente Operacional",
    before: {
      title: "Antes",
      items: [
        "Planilhas desatualizadas",
        "Informações espalhadas",
        "Falta de visão unificada",
      ],
    },
    after: {
      title: "Depois",
      items: [
        "Atualização em tempo real",
        "Sistemas sincronizados",
        "Visão centralizada",
      ],
    },
    result: "Mais controle e menos ruído entre áreas",
    color: "primary",
  },
];

function ComparisonCard({ case: caseData, index }: { case: typeof cases[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${caseData.color}/20 to-transparent`}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Title */}
          <h3 className="text-2xl font-display font-bold mb-6 text-gradient-amber">
            {caseData.title}
          </h3>

          {/* Before/After comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Before */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="font-semibold text-muted-foreground">
                  {caseData.before.title}
                </span>
              </div>
              {caseData.before.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* After */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-full bg-${caseData.color}/20 flex items-center justify-center`}>
                  <Check className={`w-4 h-4 text-${caseData.color}`} />
                </div>
                <span className="font-semibold text-foreground">
                  {caseData.after.title}
                </span>
              </div>
              {caseData.after.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className={`text-${caseData.color} mt-0.5`}>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Result badge */}
          <div className={`p-4 rounded-lg bg-${caseData.color}/10 border border-${caseData.color}/30`}>
            <div className="flex items-start gap-3">
              <div className={`px-3 py-1 rounded-full bg-${caseData.color}/20 text-${caseData.color} text-xs font-semibold`}>
                Resultado
              </div>
              <p className="text-sm font-medium flex-1">{caseData.result}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function BeforeAfter() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

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
            Antes e depois de ter um{" "}
            <span className="text-gradient-cyan">agente de IA</span> na equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja exemplos práticos de como agentes de IA mudaram rotinas, melhoraram indicadores e liberaram tempo da equipe.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((caseData, index) => (
            <ComparisonCard key={caseData.title} case={caseData} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
