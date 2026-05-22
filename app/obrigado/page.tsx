import type { Metadata } from "next";
import Link from "next/link";
import { Check, Mail, Clock } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { LegalFooter } from "@/components/legal-footer";

export const metadata: Metadata = {
  title: "Recebemos sua solicitação | ProceX AI",
  description:
    "Sua solicitação de diagnóstico gratuito foi recebida. Em breve um especialista entrará em contato.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-mesh opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float -z-10" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float -z-10"
          style={{ animationDelay: "1s" }}
        />

        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border-2 border-primary mb-8">
              <Check className="w-10 h-10 text-primary" strokeWidth={3} />
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Recebemos sua{" "}
              <span className="text-gradient-amber">solicitação</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Obrigado por compartilhar o contexto do seu negócio. Em até{" "}
              <strong className="text-foreground">24 horas úteis</strong>, um
              especialista da ProceX entrará em contato para agendarmos seu{" "}
              <strong className="text-foreground">diagnóstico gratuito</strong>
              .
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
              <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
                <Clock className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-bold mb-1">O que esperar</h3>
                <p className="text-sm text-muted-foreground">
                  Conversa rápida de 30 min para entender sua rotina e
                  apresentar um plano específico.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
                <Mail className="w-6 h-6 text-secondary mb-3" />
                <h3 className="font-display font-bold mb-1">Sem enrolação</h3>
                <p className="text-sm text-muted-foreground">
                  Sem time técnico, sem implementar tudo de uma vez. Começamos
                  pequeno, medimos e evoluímos.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex px-8 py-3 rounded-lg font-semibold border border-border hover:bg-card transition-colors"
              >
                Voltar para o site
              </Link>

              <p className="text-xs text-muted-foreground">
                Enquanto isso, fique à vontade para explorar as{" "}
                <Link
                  href="/atendimento-suporte"
                  className="underline hover:text-primary"
                >
                  páginas de cada solução
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}
