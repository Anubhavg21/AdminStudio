"use client";

import { useState } from "react";
import { quoteQuestions, calculateEstimate } from "@/data/quote";
import { useCurrency } from "@/lib/currency-context";
import { contact } from "@/data/site";
import { ScrollReveal } from "@/components/ui/motion";
import { Calculator, MessageCircle, Mail, Check } from "lucide-react";

export function QuoteEstimator() {
  const { currency } = useCurrency();

  const [selectedType, setSelectedType] = useState<string>("business");
  const [selectedPages, setSelectedPages] = useState<string>("small");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "contact",
  ]);

  const toggleFeature = (val: string) => {
    if (selectedFeatures.includes(val)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== val));
    } else {
      setSelectedFeatures([...selectedFeatures, val]);
    }
  };

  const estimate = calculateEstimate(
    selectedType,
    selectedPages,
    selectedFeatures
  );

  const formattedMin =
    currency === "INR"
      ? `₹${estimate.minINR.toLocaleString("en-IN")}`
      : `$${estimate.minUSD.toLocaleString("en-US")}`;

  const formattedMax =
    currency === "INR"
      ? `₹${estimate.maxINR.toLocaleString("en-IN")}`
      : `$${estimate.maxUSD.toLocaleString("en-US")}`;

  // WhatsApp prefilled message
  const typeLabel =
    quoteQuestions[0].options.find((o) => o.value === selectedType)?.label ||
    selectedType;
  const pagesLabel =
    quoteQuestions[1].options.find((o) => o.value === selectedPages)?.label ||
    selectedPages;

  const whatsappMessage = encodeURIComponent(
    `Hi! I used the quote estimator on Anvik Studio:\n- Website Type: ${typeLabel}\n- Pages: ${pagesLabel}\n- Features: ${selectedFeatures.join(
      ", "
    )}\n- Estimated range: ${formattedMin} - ${formattedMax}\n\nI'd like to get an exact quote.`
  );

  const mailtoLink = `mailto:${contact.email}?subject=Quote Request from Anvik Studio&body=${whatsappMessage}`;

  return (
    <section id="quote" className="py-14 sm:py-18 bg-surface border-y border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <Calculator className="w-3.5 h-3.5 text-accent" />
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Instant Quote Estimator
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Transparent pricing upfront. No gatekeeping.
            </h2>
            <p className="text-lg text-muted">
              Select your requirements below to see an instant price estimate. No email signup required to view the numbers.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Questions Container */}
          <div className="lg:col-span-7 space-y-8">
            {/* Question 1: Type */}
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                  1
                </span>
                {quoteQuestions[0].question}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quoteQuestions[0].options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedType(opt.value)}
                    className={`p-3.5 rounded-xl text-left text-sm font-medium border transition-all ${selectedType === opt.value
                      ? "bg-accent/10 border-accent text-accent font-semibold shadow-xs"
                      : "bg-surface border-border-light text-foreground/80 hover:border-border"
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Pages */}
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                  2
                </span>
                {quoteQuestions[1].question}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {quoteQuestions[1].options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedPages(opt.value)}
                    className={`p-3.5 rounded-xl text-center text-sm font-medium border transition-all ${selectedPages === opt.value
                      ? "bg-accent/10 border-accent text-accent font-semibold shadow-xs"
                      : "bg-surface border-border-light text-foreground/80 hover:border-border"
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Features */}
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                  3
                </span>
                {quoteQuestions[2].question}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quoteQuestions[2].options.map((opt) => {
                  const isChecked = selectedFeatures.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => toggleFeature(opt.value)}
                      className={`p-3.5 rounded-xl text-left text-sm font-medium border transition-all flex items-center justify-between ${isChecked
                        ? "bg-accent/10 border-accent text-accent font-semibold shadow-xs"
                        : "bg-surface border-border-light text-foreground/80 hover:border-border"
                        }`}
                    >
                      <span>{opt.label}</span>
                      <div
                        className={`w-4 h-4 rounded-sm border flex items-center justify-center ${isChecked
                          ? "bg-accent border-accent text-white"
                          : "border-muted/40"
                          }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Result Box (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-foreground text-background border border-foreground shadow-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-semibold tracking-wider text-background/60 uppercase block mb-2">
                Estimated Investment ({currency})
              </span>

              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
                {formattedMin}{" "}
                <span className="text-2xl text-background/50 font-normal">
                  to
                </span>{" "}
                {formattedMax}
              </div>

              <p className="text-xs text-background/70 leading-relaxed mb-6">
                Based on your selected options. Includes custom design, mobile responsiveness, and 30-day post-launch support.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 space-y-2 text-xs text-background/80">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-semibold text-white">
                    {selectedPages === "small"
                      ? "7–10 days"
                      : selectedPages === "medium"
                        ? "14–21 days"
                        : "3–5 weeks"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Payment structure:</span>
                  <span className="font-semibold text-white">40% / 30% / 30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Code ownership:</span>
                  <span className="font-semibold text-white">100% Yours</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-success text-white text-sm font-bold hover:bg-success/90 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Exact Quote on WhatsApp
                </a>

                <a
                  href={mailtoLink}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email this estimate to our team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
