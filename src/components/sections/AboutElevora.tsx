"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutElevora() {
  return (
    <section id="about" className="py-14 sm:py-18 bg-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge and Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
            <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
              ABOUT ELEVORA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Who we are
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Elevora is a senior digital agency helping ambitious businesses grow through high-converting websites, smart automations, and performance-driven design. We combine strategy, design, and technology to deliver real results.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side – could hold additional text or graphics – left empty for now */}
          <div className="space-y-8">
            {/* Team Member 1 */}
            <div className="flex items-start gap-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/hero-character.png"
                  alt="Anubhav Gupta"
                  fill
                  className="object-cover rounded-xl shadow-sm"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Anubhav Gupta</h3>
                <p className="text-sm text-muted mb-1">Founder • 1 Year experience</p>
                <p className="text-sm text-foreground/80">
                  Focused on product, development, and delivery.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="flex items-start gap-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/hero-character.png"
                  alt="Khushboo"
                  fill
                  className="object-cover rounded-xl shadow-sm"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Khushboo</h3>
                <p className="text-sm text-muted mb-1">Co‑Founder • 4+ Years experience</p>
                <p className="text-sm text-foreground/80">
                  Leads strategy, client success, and growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right side – decorative illustration similar to Hero */}
          <div className="relative hidden lg:block">
            {/* Soft circular glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px]" />
            </div>
            {/* Re‑use the hero character as a decorative element */}
            <motion.div
              className="relative w-full max-w-[340px] mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Image
                src="/hero-character.png"
                alt="Elevora team illustration"
                fill
                className="object-contain object-bottom drop-shadow-[0_16px_36px_rgba(79,70,229,0.12)]"
                sizes="(max-width: 1024px) 340px, 400px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

