"use client";

import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Client Experiences
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Trusted by founders across India, the UK, and the US.
            </h2>
            <p className="text-lg text-muted">
              Here is what business owners have to say about working with our team.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.08}>
              <div className="h-full p-8 rounded-3xl bg-surface border border-border shadow-xs hover:border-accent/40 hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  <p className="text-base text-foreground/90 leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border-light flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-background border border-border-light text-muted">
                    {item.location}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
