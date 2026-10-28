import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { QuoteEstimator } from "@/components/sections/QuoteEstimator";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { TrustGuarantees } from "@/components/sections/TrustGuarantees";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-foreground">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Tech Stack Marquee */}
        <TechStack />

        {/* 4. Services Bento Grid */}
        <Services />

        {/* 5. Selected Work (Most Important Section) */}
        <Portfolio />

        {/* 6. How We Work (5-Step Timeline) */}
        <Process />

        {/* 7. Instant Quote Estimator */}
        <QuoteEstimator />

        {/* 8. Pricing (3 Tiers with INR/USD Toggle) */}
        <Pricing />

        {/* 9. Why Elevora Comparison Table */}
        <Comparison />

        {/* 10. Trust & Guarantees */}
        <TrustGuarantees />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 13. FAQ Accordion */}
        <Faq />

        {/* 14. Final CTA + Contact */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
