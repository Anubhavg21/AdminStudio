"use client";

import { useState } from "react";
import { contact } from "@/data/site";
import { ScrollReveal } from "@/components/ui/motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "Business Website",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, contact info, and message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage("Submission failed. Please message us on WhatsApp directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network issue. Please message us on WhatsApp directly.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Let&apos;s Build Together
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Ready to turn your website into a deal-closing asset?
            </h2>
            <p className="text-lg text-muted">
              Book a call directly with Vanshika, send a message below, or start a WhatsApp chat for an instant response.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border shadow-xs">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Send a project enquiry
                </h3>
                <p className="text-xs text-muted mb-8">
                  We reply within 24 hours with ideas and an initial fixed estimate.
                </p>

                {status === "success" ? (
                  <div className="p-8 rounded-2xl bg-success/10 border border-success/30 text-center">
                    <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-muted mb-6">
                      Thank you! Vanshika has received your note and will reach out to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          contactInfo: "",
                          projectType: "Business Website",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-surface border border-border text-xs font-semibold text-foreground hover:border-accent"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-hidden focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Email Address or WhatsApp Number *
                      </label>
                      <input
                        type="text"
                        placeholder="alex@company.com or +1 (555) 000-0000"
                        value={formData.contactInfo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactInfo: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-hidden focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-hidden focus:border-accent transition-colors"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Meta Ads & Digital Marketing">Meta Ads (FB/IG) &amp; Digital Marketing</option>
                        <option value="SEO & Search Growth">SEO &amp; Search Traffic Growth</option>
                        <option value="CRM & Pipeline Setup">CRM &amp; Sales Pipeline Setup</option>
                        <option value="AI Automations & Agents">AI Automations &amp; Intelligent Agents</option>
                        <option value="E-commerce Store">E-commerce Store</option>
                        <option value="Custom Web App">Custom Web App / SaaS MVP</option>
                        <option value="WordPress / Shopify">WordPress or Shopify System</option>
                        <option value="Landing Page for Ads">Landing Page for Ads</option>
                        <option value="Website Redesign">Website Redesign &amp; Optimization</option>
                        <option value="Other">Other / Custom Technical Scope</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Tell us about your project & goals *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="What does your business do, and what are you hoping to achieve with your new site?"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-hidden focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-xs text-rose-500">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-all shadow-md disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === "loading" ? "Sending..." : "Send Project Brief"}</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Calendly Embed / Quick Connect */}
          <div className="lg:col-span-5 space-y-6">
            {/* Calendly Card */}
            <ScrollReveal delay={0.15}>
              <div className="p-8 rounded-3xl bg-surface border border-border shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-accent/[0.08] flex items-center justify-center text-accent mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Book a 20-min Discovery Call
                </h3>
                <p className="text-xs text-muted mb-6 leading-relaxed">
                  Skip the emails and grab a slot directly on Vanshika&apos;s calendar to discuss your timeline, scope, and ideas.
                </p>

                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-accent hover:text-white transition-all shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Calendly Schedule</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Direct Connect Options */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-surface border border-border shadow-xs space-y-5">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  Direct Channels
                </h4>

                <a
                  href={`tel:${contact.phone?.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-background border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground block">
                      Direct Call (Vanshika)
                    </span>
                    <span className="text-[11px] text-muted">
                      {contact.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=Hi%20Vanshika!%20I'd%20like%20to%20discuss%20a%20website%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-background border border-border hover:border-success/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center text-success shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground block">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-[11px] text-muted">
                      Fastest response during working hours
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-background border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground block">
                      Direct Email
                    </span>
                    <span className="text-[11px] text-muted">{contact.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-background border border-border">
                  <div className="w-10 h-10 rounded-xl bg-muted/10 flex items-center justify-center text-muted shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground block">
                      Base Location & Coverage
                    </span>
                    <span className="text-[11px] text-muted">
                      {contact.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs text-muted">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>Timezone overlap with UK and US mornings guaranteed.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
