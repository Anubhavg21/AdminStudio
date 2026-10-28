"use client";

import { services } from "@/data/services";
import { ScrollReveal } from "@/components/ui/motion";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-18 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Services & Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Full-spectrum digital solutions for modern businesses.
            </h2>
            <p className="text-lg text-muted">
              Whether you need a high-converting website, automated CRM pipelines, or custom AI agents, we design and engineer it end-to-end.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.title}
                delay={index * 0.04}
                className="col-span-1"
              >
                <div className="group relative h-full flex flex-col justify-between p-7 rounded-2xl bg-surface border border-border transition-all duration-300 hover:shadow-xl hover:shadow-accent/[0.06] hover:border-accent/40 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-accent/[0.08] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2">
                        {service.tag && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 tracking-wide uppercase">
                            {service.tag}
                          </span>
                        )}
                        <a
                          href="#contact"
                          className="text-muted hover:text-accent transition-colors p-1"
                          aria-label={`Enquire about ${service.title}`}
                        >
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {service.benefit}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-accent">
                      Custom Scoping Available
                    </span>
                    <a
                      href="#contact"
                      className="text-xs font-semibold text-muted hover:text-foreground transition-colors"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Custom request notice */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-foreground mb-0.5">
              Have a unique technical requirement or custom tool in mind?
            </h4>
            <p className="text-xs text-muted">
              We are an agile engineering studio. If it runs on the web or connects to an API, we can build it.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-bold hover:bg-accent hover:text-white transition-colors shrink-0"
          >
            Discuss Custom Scope
          </a>
        </div>
      </div>
    </section>
  );
}
