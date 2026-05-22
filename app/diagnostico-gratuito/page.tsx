import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LeadForm } from "@/components/lead-form";
import { LegalFooter } from "@/components/legal-footer";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito | ProceX AI",
  description:
    "Receba um diagnóstico gratuito sobre como agentes de IA podem assumir tarefas repetitivas e gerar resultado real para a sua empresa.",
};

export default function DiagnosticoGratuitoPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Atmosférico de fundo, suave */}
        <div className="absolute inset-0 -z-10 gradient-mesh opacity-60" />

        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
              Diagnóstico gratuito · 30 minutos
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
              Vamos descobrir{" "}
              <span className="text-gradient-multi">onde a IA</span> entra na
              sua empresa
            </h1>
            <p className="text-lg text-muted-foreground">
              Conte rapidamente sobre seu negócio. Em até 24 horas úteis, um
              especialista entra em contato com um plano específico para a sua
              rotina — sem enrolação e sem compromisso.
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <LeadForm />
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            Seus dados estão protegidos pela nossa{" "}
            <a href="/privacidade" className="underline hover:text-primary">
              Política de Privacidade
            </a>
            .
          </div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}
