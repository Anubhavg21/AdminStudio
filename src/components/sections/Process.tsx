"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/data/site";
import {
  PhoneCall,
  FileText,
  Layout,
  Code,
  Rocket,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Check,
} from "lucide-react";

interface ProcessStepDetail {
  number: string;
  title: string;
  shortDesc: string;
  phaseLabel: string;
  icon: typeof PhoneCall;
  highlightText: string;
  deliverables: string[];
  timeline: string;
  isHighlighted?: boolean;
  isLast?: boolean;
}

const processSteps: ProcessStepDetail[] = [
  {
    number: "01",
    title: "Discovery Call",
    shortDesc:
      "Free 20-minute call to understand your goals, target audience, and project budget.",
    phaseLabel: "Phase 01 • Alignment & Deep Dive",
    icon: PhoneCall,
    highlightText:
      "We unpack your business model, customer journey, and conversion bottlenecks.",
    deliverables: [
      "Direct 20-min strategy call with senior talent",
      "Clarity on tech stack, scope & business goals",
    ],
    timeline: "Day 1 • 20 mins",
  },
  {
    number: "02",
    title: "Proposal & Fixed Quote",
    shortDesc:
      "Clear scope, timeline, and guaranteed fixed price with no hidden surprises.",
    phaseLabel: "Phase 02 • Architecture & Fixed Pricing",
    icon: FileText,
    highlightText:
      "A complete scope blueprint with transparent timeline and milestone payment terms.",
    deliverables: [
      "Itemized technical & design scope document",
      "Guaranteed fixed price — zero surprise invoices",
    ],
    timeline: "Days 2–3 • Scope Lock",
  },
  {
    number: "03",
    title: "Design Preview",
    shortDesc:
      "High-fidelity visual preview of your website before any development starts.",
    phaseLabel: "Phase 03 • Interactive Visual Prototype",
    icon: Layout,
    highlightText:
      "Experience your website's UX, typography, and layout in Figma before code is written.",
    deliverables: [
      "High-fidelity interactive desktop & mobile Figma mockups",
      "Two rounds of revisions until you are 100% satisfied",
    ],
    timeline: "Week 1 • Figma Preview",
  },
  {
    number: "04",
    title: "Development with Weekly Updates",
    shortDesc:
      "We build with clean code while keeping you updated every week with video walkthroughs.",
    phaseLabel: "Phase 04 • Production Code & Weekly Walkthroughs",
    icon: Code,
    highlightText:
      "Engineered on Next.js with lightning performance, responsive layout, and clean architecture.",
    deliverables: [
      "Weekly recorded Loom demos showing live features",
      "Staging preview link so you can test in real time",
    ],
    timeline: "Weeks 2–3 • Active Build",
  },
  {
    number: "05",
    title: "Launch & 30-Day Support",
    shortDesc:
      "Go live with complete QA and SEO checklists plus 30 days of free technical support.",
    phaseLabel: "Phase 05 • Deployment & 30-Day Warranty",
    icon: Rocket,
    highlightText:
      "Smooth production deploy with comprehensive speed, mobile UX, and SEO checklists.",
    deliverables: [
      "Zero-downtime deployment, DNS setup & Google indexing",
      "30 days of free bug fixes, monitoring & performance support",
    ],
    timeline: "Launch Day & 30-Day Warranty",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate which step is in the active viewport reading zone
      const triggerPoint = window.innerHeight * 0.42;
      stepRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeData = processSteps[activeStep];
  const progressPercent = Math.round(((activeStep + 1) / processSteps.length) * 100);

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-surface/50 border-t border-border-light relative"
    >
      {/* Background ambient radial glow clipped cleanly inside container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-2/3 right-1/4 -translate-y-1/2 w-[520px] h-[520px] bg-accent/[0.05] rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Grid: Left Column is Sticky with Dynamic Step-by-Step Text */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* Left Column — Sticky while right column scrolls through all steps */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 xl:top-28 self-start z-20">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] sm:text-[12px] font-bold text-accent uppercase tracking-wider">
                HOW WE WORK • ROADMAP
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold tracking-tight text-foreground mb-4 leading-[1.12]">
              A smooth 5-step roadmap from kickoff to launch.
            </h2>

            {/* Supporting Intro */}
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
              Scroll through the milestones to see how we guide your project from first conversation to live deployment.
            </p>

            {/* Dynamic Step-by-Step Appearing Card (Changes live as you scroll) */}
            <div className="rounded-3xl bg-surface border border-accent/30 p-6 sm:p-7 shadow-xl shadow-accent/[0.04] relative overflow-hidden mb-6">
              {/* Corner ambient glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              {/* Progress bar across current step */}
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs font-semibold text-muted mb-2">
                  <span className="text-accent font-bold uppercase tracking-wider text-[11px]">
                    Current Milestone: {activeData.number}/05
                  </span>
                  <span className="font-mono text-foreground font-bold">
                    {progressPercent}% Complete
                  </span>
                </div>
                <div className="w-full h-1.5 bg-background rounded-full overflow-hidden border border-border-light">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-accent-light"
                    initial={false}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Dynamic Animated Text Content for Active Step */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                      {activeData.phaseLabel}
                    </span>
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
                      <span>{activeData.title}</span>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                    {activeData.highlightText}
                  </p>

                  {/* Key Deliverables for Active Step */}
                  <div className="pt-3 border-t border-border-light/80 space-y-2">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted block mb-1">
                      What You Receive:
                    </span>
                    {activeData.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-muted">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-muted">
                    <span className="font-semibold text-foreground">Timeline:</span>
                    <span className="font-mono text-accent font-semibold">
                      {activeData.timeline}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pinned Delivery Promise & Kickoff Link */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface/80 border border-border-light flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/[0.08] text-accent flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground block">
                    100% Fixed Quote Guarantee
                  </span>
                  <span className="text-[11px] text-muted">
                    Milestone payments • 30-day warranty
                  </span>
                </div>
              </div>

              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white text-xs font-bold hover:bg-accent/90 transition-all shrink-0 shadow-xs group"
              >
                <span>Book Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column — Generous Vertical Runway with 5 Steps */}
          <div className="lg:col-span-7 pb-12">
            <div className="relative">
              {/* Continuous Thin Connecting Vertical Line */}
              <div
                className="absolute left-[23px] sm:left-[27px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-accent/40 via-accent to-emerald-500/50 rounded-full z-0"
                aria-hidden="true"
              />

              {/* 5 Distinct Scrolling Steps with Generous Vertical Space */}
              <div className="space-y-12 sm:space-y-16 relative z-10">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;
                  const isPast = index < activeStep;

                  return (
                    <div
                      key={step.number}
                      ref={(el) => {
                        stepRefs.current[index] = el;
                      }}
                      className="group scroll-mt-28"
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        {/* Step Number inside Soft Glowing Circle */}
                        <div className="relative shrink-0 pt-1">
                          {/* Soft glowing ambient circle behind number */}
                          <div
                            className={`absolute -inset-1.5 rounded-full blur-[8px] transition-all duration-300 ${
                              isActive
                                ? "bg-accent/50 scale-110"
                                : isPast
                                ? "bg-emerald-500/30"
                                : "bg-accent/15 group-hover:bg-accent/30"
                            }`}
                          />

                          {/* Outer Circle Ring */}
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold text-sm sm:text-base border-2 shadow-lg transition-all duration-300 relative z-10 ${
                              isActive
                                ? "bg-accent text-white border-accent shadow-accent/30 scale-110"
                                : isPast
                                ? "bg-emerald-500 text-white border-emerald-500 shadow-emerald-500/20"
                                : "bg-surface border-border-light text-muted group-hover:border-accent group-hover:text-accent shadow-2xs"
                            }`}
                          >
                            <span className="font-mono tracking-tight">
                              {isPast ? "✓" : step.number}
                            </span>
                          </div>
                        </div>

                        {/* Step Content Card with Height & Elevation */}
                        <div
                          className={`flex-1 p-6 sm:p-8 rounded-3xl transition-all duration-300 relative border ${
                            isActive
                              ? "bg-gradient-to-r from-accent/[0.05] via-surface to-surface border-accent/60 border-l-4 border-l-accent shadow-xl shadow-accent/[0.08] ring-1 ring-accent/25"
                              : "bg-surface border-border border-l-4 border-l-transparent hover:border-accent/40 hover:shadow-md"
                          }`}
                        >
                          {/* Active or Milestone Ribbon */}
                          {isActive && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[10px] font-bold tracking-wide uppercase shadow-xs mb-3">
                              <Sparkles className="w-3 h-3" />
                              <span>Active Milestone</span>
                            </div>
                          )}

                          {step.isHighlighted && !isActive && (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-[10px] font-bold tracking-wide uppercase mb-3">
                              <Sparkles className="w-3 h-3" />
                              <span>Key Milestone</span>
                            </div>
                          )}

                          {/* Header: Title + Small Icon on Right */}
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <h3
                              className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                                isActive ? "text-accent" : "text-foreground group-hover:text-accent"
                              }`}
                            >
                              {step.title}
                            </h3>

                            {/* Small Icon in soft pill on the right */}
                            <div
                              className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs transition-all duration-300 ${
                                isActive
                                  ? "bg-accent text-white border-accent shadow-accent/20 scale-105"
                                  : "bg-background border-border-light text-muted group-hover:text-accent group-hover:border-accent/30"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                          </div>

                          {/* 1-2 Line Description */}
                          <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                            {step.shortDesc}
                          </p>

                          {/* Deliverables Bullet List inside card */}
                          <div className="space-y-2 mb-6 p-3.5 rounded-2xl bg-background/70 border border-border-light">
                            {step.deliverables.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          {/* Card Footer: Meta Phase Tag */}
                          <div className="flex items-center justify-between pt-4 border-t border-border-light/80 text-[11px]">
                            <span
                              className={`font-semibold ${
                                isActive ? "text-accent font-bold" : "text-muted"
                              }`}
                            >
                              {step.timeline}
                            </span>
                            <span className="text-muted/60 font-mono text-[10px]">
                              Step {step.number} of 05
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
