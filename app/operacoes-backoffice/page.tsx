import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { OperationsHero } from "@/components/sections/operations-hero";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { OperationsAgentExamples } from "@/components/sections/operations-agent-examples";
import { OperationsTargetAudience } from "@/components/sections/operations-target-audience";
import { OperationsProcessSteps } from "@/components/sections/operations-process-steps";
import { OperationsClosingCTA } from "@/components/sections/operations-closing-cta";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Operações & Backoffice com IA | ProceX",
  description: "Agentes de IA para Operações & Backoffice que organizam o fluxo enquanto você toca o negócio. Automatize status de pedidos, relatórios e organização de tarefas.",
  keywords: ["Operações", "Backoffice", "IA", "Pedidos", "Tarefas", "Agentes", "ProceX", "Relatórios"],
};

export default function OperationsBackofficePage() {
  return (
    <main className="relative">
      <Navbar />

      <div className="pt-16">
        <OperationsHero />
        <BenefitsSection variant="operations" />
        <OperationsAgentExamples />
        <OperationsTargetAudience />
        <OperationsProcessSteps />
        <OperationsClosingCTA />
        <FinalCTA />
      </div>
    </main>
  );
}

