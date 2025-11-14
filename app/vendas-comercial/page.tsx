import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { SalesHero } from "@/components/sections/sales-hero";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { SalesAgentExamples } from "@/components/sections/sales-agent-examples";
import { SalesTargetAudience } from "@/components/sections/sales-target-audience";
import { SalesProcessSteps } from "@/components/sections/sales-process-steps";
import { SalesClosingCTA } from "@/components/sections/sales-closing-cta";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Vendas & Comercial com IA | ProceX",
  description: "Agentes de IA para Vendas & Comercial que trabalham seu funil todos os dias. Nutrição de leads, reativação de clientes e atualizações em CRM.",
  keywords: ["Vendas", "Comercial", "IA", "Leads", "CRM", "Agentes", "ProceX", "Follow-up"],
};

export default function SalesCommercialPage() {
  return (
    <main className="relative">
      <Navbar />

      <div className="pt-16">
        <SalesHero />
        <BenefitsSection variant="sales" />
        <SalesAgentExamples />
        <SalesTargetAudience />
        <SalesProcessSteps />
        <SalesClosingCTA />
        <FinalCTA />
      </div>
    </main>
  );
}

