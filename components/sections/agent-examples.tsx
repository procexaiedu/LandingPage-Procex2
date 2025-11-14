"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  MessageCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const agents = [
  {
    icon: Inbox,
    title: "Agente de Triagem de Demandas",
    description:
      "Recebe mensagens (WhatsApp, site, e-mail), identifica o assunto, coleta dados mínimos e direciona para a pessoa certa ou resolve sozinho quando possível.",
    color: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: MessageCircle,
    title: "Agente de Respostas Rápidas",
    description:
      "Responde perguntas frequentes com base na sua base de conhecimento (FAQ, documentos, políticas), mantendo o tom de voz da sua marca.",
    color: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: Calendar,
    title: "Agente de Agendamentos",
    description:
      "Conversa com o cliente, checa disponibilidade em agenda, confirma horário e envia lembretes automáticos.",
    color: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: CheckCircle2,
    title: "Agente de Pós-atendimento",
    description:
      "Após o atendimento humano, envia pesquisas de satisfação, coleta feedback e organiza insights para melhoria contínua.",
    color: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-500",
  },
];

export function AgentExamples() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

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
              Exemplos de agentes que podemos criar
            </h2>
            <p className="text-lg text-muted-foreground">
              Alguns exemplos de agentes que desenhamos nessa área (sempre adaptados à sua realidade):
            </p>
          </div>

          {/* Agent cards grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-xl border transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer group ${agent.color}`}
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-background/50 border border-border/50 group-hover:border-primary/30 transition-all">
                    <Icon className={`w-6 h-6 ${agent.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {agent.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {agent.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

