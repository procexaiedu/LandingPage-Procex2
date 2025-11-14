import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { AttendanceSupportHero } from "@/components/sections/attendance-support-hero";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { AgentExamples } from "@/components/sections/agent-examples";
import { TargetAudience } from "@/components/sections/target-audience";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Atendimento & Suporte com IA | ProceX",
  description: "Agentes de IA para Atendimento & Suporte que respondem com você, não no seu lugar. Organize filas, responda mais rápido e não perca nenhuma demanda.",
  keywords: ["Atendimento", "Suporte", "IA", "Agentes", "ProceX", "WhatsApp", "Chat"],
};

export default function AttendanceSupportPage() {
  return (
    <main className="relative">
      <Navbar />

      <div className="pt-16">
        <AttendanceSupportHero />
        <BenefitsSection />
        <AgentExamples />
        <TargetAudience />
        <ProcessSteps />
        <ClosingCTA />
        <FinalCTA />
      </div>
    </main>
  );
}

