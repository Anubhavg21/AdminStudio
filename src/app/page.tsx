import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { AboutElevora } from "@/components/sections/AboutElevora";
// Instant Quote Estimator section removed per request
// Pricing section removed per request
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
        <div className="my-12 md:my-16"><Hero /></div>

        {/* 3. Tech Stack Marquee */}
        <div className="my-12 md:my-16"><TechStack /></div>

        {/* 4. Services Bento Grid */}
        <div className="my-12 md:my-16"><Services /></div>

        {/* 5. Selected Work (Most Important Section) */}
        <div className="my-12 md:my-16"><Portfolio /></div>

        {/* 6. How We Work (5-Step Timeline) */}
        <div className="my-12 md:my-16"><Process /></div>

        {/* 7. Instant Quote Estimator */}
{/* Instant Quote Estimator section removed per request */}

{/* About Elevora section */}
<div className="my-12 md:my-16"><AboutElevora /></div>

        {/* 8. Pricing (3 Tiers with INR/USD Toggle) */}
{/* Pricing section removed per request */}

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
