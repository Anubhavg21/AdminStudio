"use client";

import { techStack } from "@/data/site";
import { ScrollReveal } from "@/components/ui/motion";

export function TechStack() {
  // Duplicate for seamless infinite marquee loop
  const duplicated = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-8 sm:py-10 border-y border-border-light bg-surface/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <ScrollReveal>
          <p className="text-[12px] font-semibold tracking-wider text-muted uppercase">
            Built with modern, reliable technologies
          </p>
        </ScrollReveal>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Subtle edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-12 py-2">
          {duplicated.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface border border-border text-[14px] font-medium text-foreground whitespace-nowrap shadow-xs hover:border-accent/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-accent/60" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
