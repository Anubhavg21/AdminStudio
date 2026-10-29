"use client";

import { ScrollReveal } from "@/components/ui/motion";
import { Briefcase, Clock } from "lucide-react";

const team = [
  {
    name: "Anubhav Gupta",
    role: "Founder",
    experience: "2 Years",
    bio: "Focused on product, development, and delivery.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    name: "Khushbu",
    role: "Co-Founder",
    experience: "4+ Years",
    bio: "Leads strategy, client success, and growth.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    name: "Ankit",
    role: "AI & Automation Lead",
    experience: "2 Years",
    bio: "Builds AI agents, automations, and intelligent systems.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80",
  },
];

export function AboutElevora() {
  return (
    <section id="about" className="py-14 sm:py-18 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge + Heading */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                About Elevora
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Who we are
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Elevora is a senior digital agency helping ambitious businesses
              grow through high-converting websites, smart automations, and
              performance-driven design. We combine strategy, design, and
              technology to deliver real results.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Cards — 3 in a row on lg+, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.12}>
              <div className="bg-surface rounded-2xl border border-border p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                {/* Circular photo */}
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-accent/10 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>

                {/* Role + Experience pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/[0.08] text-accent border border-accent/20">
                    <Briefcase className="w-3 h-3" />
                    {member.role}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-surface border border-border text-muted">
                    <Clock className="w-3 h-3" />
                    {member.experience}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
