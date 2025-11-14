import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FinancialCobbranceHero } from "@/components/sections/financial-cobrance-hero";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FinancialAgentExamples } from "@/components/sections/financial-agent-examples";
import { FinancialTargetAudience } from "@/components/sections/financial-target-audience";
import { FinancialProcessSteps } from "@/components/sections/financial-process-steps";
import { FinancialClosingCTA } from "@/components/sections/financial-closing-cta";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Financeiro & Cobrança com IA | ProceX",
  description: "Agentes de IA para Financeiro & Cobrança que ajudam você a receber em dia. Automatize envio de boletos, lembretes e atualizações de recebimentos.",
  keywords: ["Financeiro", "Cobrança", "IA", "Boletos", "Agentes", "ProceX", "Inadimplência"],
};

export default function FinancialCobbrancePage() {
  return (
    <main className="relative">
      <Navbar />

      <div className="pt-16">
        <FinancialCobbranceHero />
        <BenefitsSection variant="financial" />
        <FinancialAgentExamples />
        <FinancialTargetAudience />
        <FinancialProcessSteps />
        <FinancialClosingCTA />
        <FinalCTA />
      </div>
    </main>
  );
}

