"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, contact } from "@/data/site";
import { useCurrency } from "@/lib/currency-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currency, toggleCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-[22px] font-extrabold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Elevora
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency Toggle */}
            <button
              onClick={toggleCurrency}
              className="relative flex items-center w-[88px] h-[36px] rounded-full bg-background border border-border p-[3px] cursor-pointer transition-colors hover:border-accent/30"
              aria-label={`Switch to ${currency === "INR" ? "USD" : "INR"}`}
            >
              <motion.div
                className="absolute w-[40px] h-[30px] rounded-full bg-accent shadow-sm"
                animate={{ x: currency === "INR" ? 0 : 42 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              <span
                className={`relative z-10 flex-1 text-center text-[12px] font-semibold transition-colors ${
                  currency === "INR" ? "text-white" : "text-muted"
                }`}
              >
                INR
              </span>
              <span
                className={`relative z-10 flex-1 text-center text-[12px] font-semibold transition-colors ${
                  currency === "USD" ? "text-white" : "text-muted"
                }`}
              >
                USD
              </span>
            </button>

            {/* CTA */}
            <a
              href={contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[14px] font-semibold
                hover:bg-accent/90 transition-all duration-200 shadow-[0_1px_2px_rgba(79,70,229,0.3)]
                hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)] hover:-translate-y-[1px]"
            >
              <Phone className="w-4 h-4" />
              Book Free Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-surface/95 backdrop-blur-xl border-b border-border-light overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[16px] font-medium text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                <button
                  onClick={toggleCurrency}
                  className="relative flex items-center w-[88px] h-[36px] rounded-full bg-background border border-border p-[3px] cursor-pointer"
                >
                  <motion.div
                    className="absolute w-[40px] h-[30px] rounded-full bg-accent"
                    animate={{ x: currency === "INR" ? 0 : 42 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                  <span
                    className={`relative z-10 flex-1 text-center text-[12px] font-semibold ${
                      currency === "INR" ? "text-white" : "text-muted"
                    }`}
                  >
                    INR
                  </span>
                  <span
                    className={`relative z-10 flex-1 text-center text-[12px] font-semibold ${
                      currency === "USD" ? "text-white" : "text-muted"
                    }`}
                  >
                    USD
                  </span>
                </button>

                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[14px] font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Book Free Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
