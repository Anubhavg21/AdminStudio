"use client";

import { processSteps } from "@/data/site";
import { ScrollReveal } from "@/components/ui/motion";
import { PhoneCall, FileText, Layout, Code, Rocket } from "lucide-react";

const stepIcons = [PhoneCall, FileText, Layout, Code, Rocket];

export function Process() {
  return (
    <section id="process" className="py-14 sm:py-18 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12 text-center sm:text-left">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                How We Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              A smooth 5-step roadmap from kickoff to launch.
            </h2>
            <p className="text-lg text-muted">
              No black-box mystery. You know exactly what’s happening every week with Vanshika guiding every step.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-border-light -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index] || Rocket;

              return (
                <ScrollReveal
                  key={step.step}
                  delay={index * 0.1}
                  className="flex flex-col"
                >
                  <div className="h-full p-6 rounded-2xl bg-surface border border-border shadow-xs hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Step Number + Icon Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm flex items-center justify-center">
                          0{step.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-background border border-border-light flex items-center justify-center text-muted">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border-light text-xs font-semibold text-accent/80">
                      Step {step.step} of 5
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
