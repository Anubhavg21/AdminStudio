"use client";

import { useState } from "react";
import { navLinks, contact } from "@/data/site";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border-light pt-16 pb-12 text-sm text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-light">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="font-heading text-2xl font-extrabold tracking-tight text-foreground block mb-3"
            >
              Elevora<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted max-w-sm leading-relaxed mb-6">
              Senior digital agency engineering high-converting websites, intelligent automations, and growth systems for ambitious businesses worldwide.
            </p>
            <p className="text-xs text-muted/80">
              Serving ambitious founders and companies across the US, UK, Europe, and India.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Schedule Discovery Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Elevora. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalContent("privacy")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalContent("terms")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-background border border-border hover:border-accent transition-colors flex items-center justify-center text-foreground"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Simple Policy Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-surface rounded-2xl max-w-lg w-full p-6 border border-border shadow-2xl relative">
            <h3 className="text-lg font-bold text-foreground mb-4">
              {modalContent === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h3>
            <div className="text-xs text-muted space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
              <p>
                At Elevora, we take confidentiality and data privacy seriously. All project proposals, codebases, business logic, and communication remain strictly confidential between the client and Elevora.
              </p>
              <p>
                We never sell, share, or disclose client contact information or source code. Non-disclosure agreements (NDAs) are available upon request prior to project kick-off.
              </p>
              <p>
                All intellectual property and code ownership transfer completely to the client upon full payment of agreed project milestones.
              </p>
            </div>
            <button
              onClick={() => setModalContent(null)}
              className="mt-6 w-full py-2.5 rounded-xl bg-accent text-white text-xs font-semibold hover:bg-accent/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
