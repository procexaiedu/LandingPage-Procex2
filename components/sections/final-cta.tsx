"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais faturamento",
    description: "Processos de vendas e follow-up rodando de forma consistente",
  },
  {
    icon: DollarSign,
    title: "Menos custos",
    description: "Menos retrabalho, erros manuais e tarefas operacionais",
  },
  {
    icon: Clock,
    title: "Mais tempo livre",
    description: "Você e sua equipe focam em estratégia, não em apagar incêndios",
  },
];

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container px-4">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">
            Pronto para ter IA assumindo as{" "}
            <span className="text-gradient-multi">tarefas repetitivas</span>{" "}
            da sua empresa?
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Fale com um especialista ProceX, explique sua rotina em linguagem simples e receba um plano claro de como agentes de IA podem gerar resultado nos próximos meses.
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Sem contratar time técnico e sem implementar tudo de uma vez. Começamos com um fluxo bem definido, medimos o impacto e evoluímos juntos.
          </p>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-primary-foreground rounded-xl font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
              <span className="flex items-center gap-3">
                Falar com especialista em IA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            <button className="px-10 py-5 border-2 border-secondary text-secondary rounded-xl font-bold text-xl hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105">
              Ver soluções para minha área
            </button>
          </div>

          {/* Priority badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <p className="text-sm text-primary font-semibold">
              Garanta prioridade no acesso à plataforma e aos primeiros slots de implantação
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-12"
        >
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 text-gradient-amber">
                ProceX
              </h3>
              <p className="text-sm text-muted-foreground">
                IA acessível para o dia a dia da sua empresa
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-3">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Como funciona</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Casos reais</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Planos</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:contato@procex.ai" className="hover:text-primary transition-colors">contato@procex.ai</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            <p>© 2025 ProceX. Todos os direitos reservados.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
