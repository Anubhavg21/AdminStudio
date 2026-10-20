"use client";

import { team } from "@/data/team";
import { ScrollReveal } from "@/components/ui/motion";
import { MessageCircle, Mail, Phone, Sparkles, CheckCircle2, Bot, Layers, ArrowUpRight } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-surface/60 border-t border-border-light relative overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-accent/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                The Core Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Direct access to senior talent. Zero middlemen.
            </h2>
            <p className="text-lg text-muted">
              You collaborate directly with the builders. Vanshika leads client communication, Meta ads &amp; SEO growth, while Anubhav and Ankit engineer high-performance web and AI automation systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {team.map((member, index) => {
            const isVanshika = member.isContact;

            return (
              <ScrollReveal
                key={member.name}
                delay={index * 0.1}
                className="flex flex-col"
              >
                <div
                  className={`h-full flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 relative border ${
                    isVanshika
                      ? "bg-gradient-to-b from-surface via-surface to-accent/[0.03] border-accent/60 shadow-xl shadow-accent/10 ring-1 ring-accent/30"
                      : "bg-surface border-border hover:border-accent/30 hover:shadow-xl hover:shadow-black/[0.03]"
                  }`}
                >
                  {/* Highlight pill for Vanshika */}
                  {isVanshika && (
                    <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-accent to-accent-light text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 tracking-wide uppercase">
                      <Sparkles className="w-3 h-3" />
                      <span>Primary Point of Contact</span>
                    </div>
                  )}

                  <div>
                    {/* Header: Avatar + Name + Role */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Classy Glass Avatar with Glow */}
                      <div className="relative">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-md border border-white/20 relative z-10"
                          style={{
                            background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                          }}
                        >
                          {member.initial}
                        </div>
                        {/* Glow halo */}
                        <div
                          className="absolute -inset-1 rounded-2xl blur-md opacity-40 -z-0"
                          style={{ background: member.gradientFrom }}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground tracking-tight">
                            {member.name}
                          </h3>
                        </div>
                        <p className="text-xs font-semibold text-accent mt-0.5">
                          {member.role}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                          <span>{member.statusBadge}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Skills / Specializations */}
                    <div className="mb-8">
                      <span className="text-[11px] font-bold text-foreground/70 uppercase tracking-wider block mb-2.5">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-background border border-border-light text-foreground/90 shadow-2xs hover:border-accent/30 transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent/60" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions / Highlights */}
                  {isVanshika ? (
                    <div className="pt-6 border-t border-border-light/80 space-y-2.5">
                      {/* Phone pill */}
                      <a
                        href={`tel:${member.phone?.replace(/\s+/g, "")}`}
                        className="flex items-center justify-between p-2.5 px-3 rounded-xl bg-background border border-border hover:border-accent/40 text-xs text-foreground font-semibold transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-accent" />
                          <span>Direct: {member.phone}</span>
                        </div>
                        <span className="text-[10px] text-muted group-hover:text-accent font-medium">
                          Call now →
                        </span>
                      </a>

                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/${member.whatsapp}?text=Hi%20Vanshika!%20I'd%20like%20to%20discuss%20a%20project%20with%20Anvik%20Studio.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-success text-white text-xs font-bold hover:bg-success/90 transition-all shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>

                      {/* Email Link */}
                      <a
                        href={`mailto:${member.email}`}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-background border border-border text-foreground text-xs font-semibold hover:border-accent/40 transition-all"
                      >
                        <Mail className="w-3.5 h-3.5 text-muted" />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  ) : (
                    <div className="pt-6 border-t border-border-light/80 flex items-center justify-between text-xs text-muted">
                      <div className="flex items-center gap-2">
                        {member.name === "Ankit" ? (
                          <Bot className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Layers className="w-4 h-4 text-sky-600" />
                        )}
                        <span>Dedicated technical partner</span>
                      </div>
                      <a
                        href="#contact"
                        className="text-accent font-semibold flex items-center gap-0.5 hover:underline"
                      >
                        <span>Collaborate</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
