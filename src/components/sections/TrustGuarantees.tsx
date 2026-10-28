"use client";

import { trustPoints, paymentMethods } from "@/data/site";
import { ScrollReveal } from "@/components/ui/motion";
import {
  CreditCard,
  Code2,
  FileLock2,
  Headphones,
  Clock,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";

const icons = [
  CreditCard,
  Code2,
  FileLock2,
  Headphones,
  Clock,
  CalendarCheck,
];

export function TrustGuarantees() {
  return (
    <section className="py-24 sm:py-32 relative border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Risk-Free Guarantees
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Ironclad guarantees so you can order with 100% confidence.
            </h2>
            <p className="text-lg text-muted">
              We eliminate the common pitfalls of hiring remote developers. Everything is documented, milestone-based, and legally sound.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustPoints.map((point, index) => {
            const Icon = icons[index] || CheckCircle;

            return (
              <ScrollReveal key={point.title} delay={index * 0.05}>
                <div className="h-full p-6 rounded-2xl bg-surface border border-border shadow-xs hover:border-accent/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.08] flex items-center justify-center text-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Payment Methods Row */}
        <ScrollReveal delay={0.2}>
          <div className="p-8 rounded-3xl bg-surface border border-border-light flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-foreground mb-1">
                Accepted Payment Methods
              </h4>
              <p className="text-xs text-muted">
                Seamless local and international payment processing with official GST invoicing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="px-4 py-2 rounded-xl bg-background border border-border text-xs font-semibold text-foreground flex items-center gap-2 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
