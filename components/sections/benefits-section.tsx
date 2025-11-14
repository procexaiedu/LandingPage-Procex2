"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const attendanceBenefits = [
  "Responder rápido dúvidas frequentes sem perder o tom humano da sua marca.",
  "Filtrar e classificar demandas por urgência, tipo de cliente ou tema.",
  "Organizar a fila de atendimento, evitando esquecimentos e retrabalho.",
  "Agendar retornos e compromissos automaticamente (reuniões, ligações, sessões, etc.).",
  "Registrar tudo em um único lugar, conectado ao sistema que você já usa (CRM, Help Desk, WhatsApp, e-mail).",
];

const financialBenefits = [
  "Enviar boletos e cobranças automaticamente por WhatsApp, e-mail ou SMS.",
  "Lembrar o cliente das datas de vencimento sem sua equipe precisar 'correr atrás'.",
  "Atualizar o status dos recebimentos no sistema que você já usa.",
  "Negociar formas de pagamento simples (parcelamentos, novos prazos) seguindo regras que você define.",
  "Reduzir inadimplência com uma rotina de cobrança organizada e consistente.",
];

const operationsBenefits = [
  "Atualizar status de pedidos e atividades automaticamente, sem depender de lançamentos manuais o tempo todo.",
  "Centralizar informações dispersas (WhatsApp, e-mail, planilhas, sistemas) em um só lugar.",
  "Organizar tarefas e responsáveis, avisando quem precisa fazer o quê e até quando.",
  "Gerar resumos e relatórios operacionais em segundos, em vez de horas.",
  "Reduzir erros e retrabalho, deixando a IA cuidar do 'controle' e da conferência.",
];

const salesBenefits = [
  "Nutrir leads automaticamente, com mensagens alinhadas ao seu posicionamento.",
  "Reativar clientes parados, retomando contatos antigos de forma inteligente.",
  "Atualizar o CRM em tempo real, sem depender que o time preencha tudo manualmente.",
  "Qualificar oportunidades, fazendo perguntas-chave e organizando respostas.",
  "Manter um fluxo constante de follow-ups, sem esquecer ninguém no meio do caminho.",
];

interface BenefitsSectionProps {
  variant?: "attendance" | "financial" | "operations" | "sales";
}

export function BenefitsSection({ variant = "attendance" }: BenefitsSectionProps) {
  const benefits = 
    variant === "financial" ? financialBenefits :
    variant === "operations" ? operationsBenefits :
    variant === "sales" ? salesBenefits :
    attendanceBenefits;
  const title = 
    variant === "financial" ? "Financeiro & Cobrança" :
    variant === "operations" ? "Operações & Backoffice" :
    variant === "sales" ? "Vendas & Comercial" :
    "Atendimento & Suporte";

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
              O que esse agente faz por você
            </h2>
            <p className="text-lg text-muted-foreground">
              Com um agente de IA para {title} da ProceX, você pode:
            </p>
          </div>

          {/* Benefits list */}
          <div className="max-w-3xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex gap-4 p-4 rounded-lg border border-border/50 transition-all ${
                  variant === "financial"
                    ? "bg-card/50 hover:border-secondary/30 hover:bg-card/80"
                    : variant === "operations"
                    ? "bg-card/50 hover:border-accent/30 hover:bg-card/80"
                    : variant === "sales"
                    ? "bg-card/50 hover:border-primary/30 hover:bg-card/80"
                    : "bg-card/50 hover:border-primary/30 hover:bg-card/80"
                }`}
              >
                <div className="flex-shrink-0 pt-1">
                  <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${
                    variant === "financial" ? "text-secondary" :
                    variant === "operations" ? "text-accent" :
                    variant === "sales" ? "text-primary" :
                    "text-primary"
                  }`} />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

