"use client";

import { projects } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ui/motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Portfolio() {
  return (
    <section id="work" className="py-14 sm:py-18 bg-surface/50 border-t border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Proven work that turns clicks into clients.
            </h2>
            <p className="text-lg text-muted">
              Live websites we built with obsessive attention to speed, aesthetics, and conversion. Every project is custom engineered.
            </p>
          </ScrollReveal>
        </div>

        {/* Project Cards */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <ScrollReveal key={project.slug} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-5 sm:p-7 lg:p-8 rounded-3xl bg-surface border border-border shadow-sm hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Browser Mockup with interactive scroll hover */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="group relative rounded-2xl overflow-hidden border border-border shadow-md bg-background">
                      {/* Browser Chrome Header */}
                      <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border-light">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                        </div>
                        <div className="w-3/5 bg-background rounded-md py-1 px-3 border border-border-light text-[11px] text-muted truncate text-center font-mono">
                          {project.liveUrl.replace("https://", "")}
                        </div>
                        <div className="w-8" />
                      </div>

                      {/* Scrollable Viewport on Hover */}
                      <div className="relative h-[320px] sm:h-[400px] overflow-hidden bg-background">
                        <div className="relative w-full transition-transform duration-[6000ms] ease-linear group-hover:-translate-y-[calc(100%-380px)]">
                          <Image
                            src={project.desktopImage}
                            alt={`${project.title} screenshot`}
                            width={1440}
                            height={900}
                            className="w-full h-auto object-cover object-top block"
                            priority={index === 0}
                          />
                        </div>

                        {/* Hover hint badge */}
                        <div className="absolute bottom-3 right-3 pointer-events-none group-hover:opacity-0 transition-opacity bg-black/70 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full shadow-sm font-medium">
                          Hover to scroll
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/[0.08] text-accent border border-accent/20">
                        {project.category}
                      </span>
                      {project.label && (
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20">
                          {project.label}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                      {project.title}
                    </h3>

                    {/* Problem -> Solution Box */}
                    <div className="space-y-3 mb-6 p-4 rounded-xl bg-background border border-border-light">
                      <div>
                        <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                          The Challenge
                        </span>
                        <p className="text-sm text-foreground/90">
                          {project.problem}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-border-light/60">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                          Our Solution
                        </span>
                        <p className="text-sm text-foreground/90">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techTags.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface border border-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-accent hover:text-white transition-all shadow-sm"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
