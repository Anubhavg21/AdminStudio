"use client";

import { comparisonTable } from "@/data/site";
import { ScrollReveal } from "@/components/ui/motion";
import { Check, ShieldCheck } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-14 sm:py-18 bg-surface/50 border-t border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Why Anvik Studio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              The sweet spot between unpredictable freelancers and slow agencies.
            </h2>
            <p className="text-lg text-muted">
              Get the high attention of an in-house partner without the five-figure overhead.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison Table */}
        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto rounded-3xl border border-border bg-surface shadow-xs">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-border-light bg-background/50">
                  <th className="py-5 px-6 text-sm font-semibold text-muted uppercase tracking-wider">
                    Factor
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-muted">
                    Solo Freelancer
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-muted">
                    Big Agency
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-accent bg-accent/[0.04]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span>Anvik Studio</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light text-sm">
                {comparisonTable.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="hover:bg-background/40 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-foreground">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-muted">
                      {row.freelancer}
                    </td>
                    <td className="py-4 px-6 text-muted">
                      {row.agency}
                    </td>
                    <td className="py-4 px-6 font-semibold text-foreground bg-accent/[0.04]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-success shrink-0" />
                        <span>{row.anvik}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
