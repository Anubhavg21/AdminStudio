"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { ScrollReveal } from "@/components/ui/motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-surface/50 border-t border-border-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-accent" />
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Got Questions?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Frequently asked questions.
            </h2>
            <p className="text-lg text-muted">
              Everything you need to know about working with Anvik Studio. If you have any other questions, we are just a WhatsApp away.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={item.question} delay={index * 0.04}>
                <div className="rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-background/40 transition-colors"
                  >
                    <span className="text-base font-bold text-foreground pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-muted"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-muted leading-relaxed border-t border-border-light/60">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
