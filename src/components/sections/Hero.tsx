"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Shield, Headphones } from "lucide-react";
import { contact } from "@/data/site";
import Image from "next/image";

const trustItems = [
  { icon: Shield, label: "3 Live Projects", value: "3" },
  { icon: Clock, label: "24h Response Time", value: "24h" },
  { icon: Users, label: "2 Senior Developers", value: "2" },
  { icon: Headphones, label: "30 Days Free Support", value: "30d" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Gradient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full opacity-[0.07]"
          style={{
            background:
              "conic-gradient(from 0deg, #4F46E5, #7C3AED, #4F46E5, #7C3AED, #4F46E5)",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-accent-light/5 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4 sm:mb-5">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[12px] sm:text-[13px] font-medium text-accent">
                  Available for new projects
                </span>
              </div>

              <h1
                className="text-[34px] sm:text-[46px] lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.08] tracking-tight mb-4 sm:mb-6"
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

              <p className="text-[17px] sm:text-[19px] text-muted leading-relaxed mb-8 max-w-lg">
                One point of contact. Two expert developers. Websites that turn
                visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white text-[15px] font-semibold
                    hover:bg-accent/90 transition-all duration-200 shadow-[0_2px_8px_rgba(79,70,229,0.3)]
                    hover:shadow-[0_8px_24px_rgba(79,70,229,0.35)] hover:-translate-y-[1px]"
                >
                  Book a Free Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground text-[15px] font-semibold
                    hover:border-accent/30 hover:bg-accent/[0.04] transition-all duration-200"
                >
                  Get Free Quote
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Browser Mockups */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative w-full max-w-[520px] ml-auto">
              {/* Main browser mockup */}
              <motion.div
                className="relative z-10 rounded-xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Browser chrome */}
                <div className="bg-surface border-b border-border-light px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-background rounded-md flex items-center px-3">
                      <span className="text-[11px] text-muted truncate">
                        ecommerce-rho-gold.vercel.app
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[16/10] bg-background">
                  <Image
                    src="/work/archifit-desktop.png"
                    alt="ArchiFit e-commerce store"
                    fill
                    className="object-cover object-top"
                    sizes="520px"
                    priority
                  />
                </div>
              </motion.div>

              {/* Second mockup — behind, offset */}
              <motion.div
                className="absolute -bottom-8 -left-12 z-0 w-[300px] rounded-xl overflow-hidden border border-border shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="bg-surface border-b border-border-light px-3 py-2 flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                </div>
                <div className="relative aspect-[16/10] bg-background">
                  <Image
                    src="/work/bmindful-desktop.png"
                    alt="B_mindful website"
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                  />
                </div>
              </motion.div>

              {/* Third mockup — top right, small */}
              <motion.div
                className="absolute -top-6 -right-6 z-20 w-[160px] rounded-lg overflow-hidden border border-border shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="bg-surface border-b border-border-light px-2 py-1.5 flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                </div>
                <div className="relative aspect-[9/16] bg-background">
                  <Image
                    src="/work/archifit-mobile.png"
                    alt="ArchiFit mobile view"
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-4 rounded-[14px] bg-surface border border-border-light"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-accent/[0.08]">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[14px] font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
