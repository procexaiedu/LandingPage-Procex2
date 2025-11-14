"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber programar para usar a ProceX?",
    answer: "Não. Você não precisa escrever uma linha de código. Nosso time cuida de toda a parte técnica, configurações e integrações. Seu papel é explicar o negócio e validar se o agente está atuando como você precisa.",
  },
  {
    question: "Minha empresa é pequena. Faz sentido ter agente de IA?",
    answer: "Sim. Empresas menores normalmente têm equipes enxutas e muita demanda repetitiva. Isso torna o impacto da automação ainda mais perceptível. O modelo de entrada foi pensado justamente para permitir começar pequeno.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer: "Depende do fluxo escolhido, mas em muitos casos o efeito é sentido nas primeiras semanas, seja em tempo economizado, seja em aumento de conversão ou melhor organização das rotinas.",
  },
  {
    question: "E se eu não tiver sistemas modernos (ERP, CRM, etc.)?",
    answer: "Não tem problema. Muitas integrações podem ser feitas com planilhas, WhatsApp e ferramentas simples. Avaliamos o que você já usa e adaptamos o agente a essa realidade.",
  },
  {
    question: "Como funciona o suporte depois da implantação?",
    answer: "O agente não é 'entrega e adeus'. Existe acompanhamento para monitorar resultados, fazer ajustes e evoluir o fluxo conforme sua operação muda.",
  },
  {
    question: "Quanto custa?",
    answer: "O investimento varia conforme a complexidade do fluxo e o número de integrações. Durante o diagnóstico, estimamos essa faixa com transparência, sempre buscando retorno financeiro e operacional claro.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-32">
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
            Ainda com <span className="text-gradient-amber">dúvidas</span> sobre IA na sua empresa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respondemos as perguntas mais comuns de quem quer usar IA, mas ainda não se sente 100% seguro para dar o primeiro passo.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Minha dúvida não está aqui</p>
            <button className="text-primary font-semibold hover:underline underline-offset-4 transition-all">
              Falar pelo WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
