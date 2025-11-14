import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { SocialProof } from "@/components/sections/social-proof";
import { ProcessFlow } from "@/components/sections/process-flow";
import { BeforeAfter } from "@/components/sections/before-after";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <div className="pt-16">
        <Hero />
        <Solutions />
        <SocialProof />
        <ProcessFlow />
        <BeforeAfter />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </div>
    </main>
  );
}
