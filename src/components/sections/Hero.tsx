"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Users,
  Shield,
  Headphones,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { contact } from "@/data/site";
import Image from "next/image";

const trustItems = [
  { icon: Shield, label: "3 Live Projects", value: "3" },
  { icon: Clock, label: "24h Response Time", value: "24h" },
  { icon: Users, label: "10 Developers", value: "10" },
  { icon: Headphones, label: "30 Days Free Support", value: "30d" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-18"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[700px] lg:w-[850px] h-[480px] sm:h-[700px] lg:h-[850px] rounded-full opacity-[0.08]"
          style={{
            background:
              "conic-gradient(from 0deg, #4F46E5, #7C3AED, #4F46E5, #7C3AED, #4F46E5)",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[240px] sm:w-[380px] lg:w-[450px] h-[240px] sm:h-[380px] lg:h-[450px] rounded-full bg-accent/6 blur-[80px] sm:blur-[110px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[180px] sm:w-[280px] lg:w-[320px] h-[180px] sm:h-[280px] lg:h-[320px] rounded-full bg-accent-light/5 blur-[60px] sm:blur-[90px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Column — Copy & Conversion CTAs */}
          <div className="lg:col-span-6 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-3.5 sm:mb-5">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[11px] sm:text-[13px] font-medium text-accent">
                  Available for new projects
                </span>
              </div>

              <h1
                className="text-[32px] sm:text-[46px] lg:text-[54px] xl:text-[62px] font-extrabold leading-[1.1] sm:leading-[1.08] tracking-tight mb-3.5 sm:mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Build Better.
                <br />
                <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  Find Better Leads.
                </span>
                <br />
                Close More Deals.
              </h1>

              <p className="text-[15px] sm:text-[18px] lg:text-[19px] text-muted leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                One dedicated team. Senior talent. Websites, systems, and growth tools that turn visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-accent text-white text-[14px] sm:text-[15px] font-semibold
                    hover:bg-accent/90 transition-all duration-200 shadow-[0_2px_8px_rgba(79,70,229,0.3)]
                    hover:shadow-[0_8px_24px_rgba(79,70,229,0.35)] hover:-translate-y-[1px]"
                >
                  Book a Free Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-border text-foreground text-[14px] sm:text-[15px] font-semibold
                    hover:border-accent/30 hover:bg-accent/[0.04] transition-all duration-200"
                >
                  Get Free Quote
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Illustrated Professional Character & Floating UI Elements */}
          <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end mt-4 sm:mt-8 lg:mt-0 overflow-visible">
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] flex items-center justify-center py-6 sm:py-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {/* Soft light purple circular glow behind character */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] lg:w-[440px] h-[280px] sm:h-[380px] lg:h-[440px] bg-accent/15 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none -z-10" />
              <div className="absolute top-1/3 right-1/4 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] bg-purple-500/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none -z-10" />

              {/* Floating UI Element 1: Client Growth Card (Top-Left) */}
              <motion.div
                className="absolute -top-1 left-0 sm:-top-3 sm:-left-4 z-20 flex items-center gap-2 sm:gap-3 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:shadow-[0_12px_28px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.02]"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-accent/[0.08] text-accent flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="pr-0.5 sm:pr-1">
                  <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-foreground block leading-tight">
                    +42% Enquiries
                  </span>
                  <span className="text-[9.5px] sm:text-[11px] text-muted flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                    Conversion growth
                  </span>
                </div>
              </motion.div>

              {/* Floating UI Element 2: Verified Delivery Badge (Top-Right) */}
              <motion.div
                className="absolute top-8 right-0 sm:top-10 sm:-right-4 z-20 flex items-center gap-2 sm:gap-3 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:shadow-[0_12px_28px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.02]"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="pr-0.5 sm:pr-1">
                  <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-foreground block leading-tight">
                    Project Delivered
                  </span>
                  <span className="text-[9.5px] sm:text-[11px] text-muted block mt-0.5">
                    On-time &amp; guaranteed
                  </span>
                </div>
              </motion.div>

              {/* Floating UI Element 3: Client Satisfaction Chip (Bottom-Left) */}
              <motion.div
                className="absolute bottom-4 left-0 sm:bottom-8 sm:-left-5 z-20 flex items-center gap-2 sm:gap-3 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:shadow-[0_12px_28px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.02]"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="pr-0.5 sm:pr-1">
                  <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-foreground block leading-tight">
                    5.0 ★ Rating
                  </span>
                  <span className="text-[9.5px] sm:text-[11px] text-muted block mt-0.5">
                    Client satisfaction
                  </span>
                </div>
              </motion.div>

              {/* Illustrated Character — Responsive proportions */}
              <div className="relative w-[230px] sm:w-[320px] lg:w-[360px] xl:w-[400px] aspect-[3/4] flex items-end justify-center">
                <Image
                  src="/hero-character.png"
                  alt="Elevora Digital Consultant"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_16px_36px_rgba(79,70,229,0.12)]"
                  sizes="(max-width: 640px) 230px, (max-width: 1024px) 320px, 400px"
                />
                {/* Soft ground pedestal shadow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-5 sm:h-6 bg-indigo-950/15 blur-md sm:blur-lg rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Trust & Key Stats Row — Mobile Optimized */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-5 py-3 sm:py-4 rounded-[12px] sm:rounded-[14px] bg-surface border border-border-light shadow-2xs hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-[8px] sm:rounded-[10px] bg-accent/[0.08] shrink-0">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <span className="text-[12px] sm:text-[14px] font-medium text-foreground leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
