"use client";

import { pricingPlans, pricingNote } from "@/data/pricing";
import { useCurrency } from "@/lib/currency-context";
import { ScrollReveal } from "@/components/ui/motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { contact } from "@/data/site";

export function Pricing() {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <section id="pricing" className="py-14 sm:py-18 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Straightforward Pricing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Honest, fixed rates. Zero hidden fees.
            </h2>
            <p className="text-lg text-muted mb-6">
              Pick the tier that fits your stage, or book a quick discovery call to tailor a custom scope.
            </p>

            {/* Currency selector pill in section */}
            <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-surface border border-border">
              <button
                type="button"
                onClick={() => currency !== "INR" && toggleCurrency()}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === "INR"
                    ? "bg-accent text-white shadow-xs"
                    : "text-muted hover:text-foreground"
                }`}
              >
                ₹ INR (India)
              </button>
              <button
                type="button"
                onClick={() => currency !== "USD" && toggleCurrency()}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === "USD"
                    ? "bg-accent text-white shadow-xs"
                    : "text-muted hover:text-foreground"
                }`}
              >
                $ USD (US & UK)
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const price = currency === "INR" ? plan.priceINR : plan.priceUSD;

            return (
              <ScrollReveal
                key={plan.name}
                delay={index * 0.1}
                className="flex flex-col"
              >
                <div
                  className={`h-full flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 relative ${
                    plan.popular
                      ? "bg-surface border-accent shadow-xl shadow-accent/10 ring-2 ring-accent"
                      : "bg-surface border-border hover:border-accent/40 hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-border-light">
                      <span className="text-xs text-muted font-medium block">
                        Starting from
                      </span>
                      <div className="text-4xl font-extrabold text-foreground tracking-tight">
                        {price}
                      </div>
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted">
                        <span>⏳ {plan.timeline}</span>
                        <span>•</span>
                        <span>🔄 {plan.revisions}</span>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <ul className="space-y-3 mb-8">
                      {plan.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-foreground/80 leading-snug"
                        >
                          <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <a
                      href={contact.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all ${
                        plan.popular
                          ? "bg-accent text-white hover:bg-accent/90 shadow-md"
                          : "bg-background border border-border text-foreground hover:border-accent/40"
                      }`}
                    >
                      <span>Choose {plan.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Note under cards */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted max-w-xl mx-auto">
            💡 {pricingNote}
          </p>
        </div>
      </div>
    </section>
  );
}
