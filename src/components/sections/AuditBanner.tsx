"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/motion";
import { ArrowRight, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";

export function AuditBanner() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) {
      setStatus("error");
      setErrorMessage("Please fill in both website URL and your email.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again or WhatsApp us.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or WhatsApp us.");
    }
  };

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-8 sm:p-12 lg:p-16 border border-foreground shadow-2xl">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/25 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-light/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-accent-light" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  No Strings Attached
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                Get a free 10-minute audit of your current website.
              </h2>
              <p className="text-base sm:text-lg text-background/80 leading-relaxed mb-8 max-w-2xl">
                We will record a short video breaking down your site’s speed, conversion bottlenecks, mobile UX, and what changes would bring in more revenue.
              </p>

              {status === "success" ? (
                <div className="p-6 rounded-2xl bg-success/20 border border-success/40 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <div>
                    <h4 className="font-bold">Audit Request Received!</h4>
                    <p className="text-xs text-background/90">
                      Our team will review your website and send your 10-minute video audit to {email} within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Your website URL (e.g. yourbrand.com)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-background/50 text-sm focus:outline-hidden focus:border-accent transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-background/50 text-sm focus:outline-hidden focus:border-accent transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-all shadow-md shrink-0 disabled:opacity-50"
                    >
                      {status === "loading" ? "Analyzing..." : "Claim Free Audit"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <p className="text-[11px] text-background/60">
                    🔒 We respect your privacy. No spam, ever. Review delivered directly to your inbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
