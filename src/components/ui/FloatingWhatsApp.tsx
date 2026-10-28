"use client";

import { contact } from "@/data/site";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="hidden sm:block bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-foreground/20 animate-fade-in whitespace-nowrap">
          Chat on WhatsApp
        </div>
      )}

      <a
        href={`https://wa.me/${contact.whatsapp}?text=Hi!%20I'm%20visiting%20Anvik%20Studio%20and%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-success text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group relative"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-25 group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
