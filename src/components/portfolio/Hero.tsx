import { ArrowDown, Github, ExternalLink } from "lucide-react";
import varunProfile from "@/assets/varun-profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section grid-overlay"
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full opacity-[0.05] dark:opacity-[0.09]"
          style={{ background: "radial-gradient(circle, hsl(141 50% 40%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-inner w-full">
        {/* Top row: avatar + status */}
        <div className="flex items-center gap-4 mb-8 animate-fade-slide-up animate-delay-100">
          <div className="relative flex-shrink-0">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden ring-2 ring-border"
              style={{ boxShadow: "0 0 0 4px hsl(var(--background)), 0 0 14px hsl(var(--emerald) / 0.2)" }}
            >
              <img src={varunProfile} alt="Varun T P" className="w-full h-full object-cover object-top" loading="eager" />
            </div>
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-emerald" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald ring-2 ring-background" />
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Varun T P</p>
            <p className="text-xs text-muted-foreground tracking-wide mt-0.5">
              Available for full-time roles · Graduating 2026
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-foreground max-w-3xl lg:max-w-4xl mb-5 animate-fade-slide-up animate-delay-200">
          Engineering Scalable Systems{" "}
          <span className="text-emerald-accent">with Measurable Impact.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg lg:text-xl font-medium text-muted-foreground mb-4 max-w-xl animate-fade-slide-up animate-delay-300">
          AI-Driven Mobile &amp; Full Stack Engineer
        </p>

        {/* Positioning paragraph */}
        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-fade-slide-up animate-delay-300">
          Final-year Computer Science Engineer (CGPA 9.51) building distributed
          mobile systems, AI-powered applications, and full-stack platforms with
          production-ready architecture.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-3 mb-16 animate-fade-slide-up animate-delay-400">
          <a
            href="#systems"
            className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-md text-sm font-medium bg-emerald text-background hover:bg-emerald-dim transition-all duration-200"
          >
            View Systems
          </a>
          <a
            href="mailto:varu0616@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-md text-sm font-medium border border-border text-foreground hover:border-foreground/40 hover:bg-surface transition-all duration-200"
          >
            Download Resume
            <ExternalLink size={13} />
          </a>
          <a
            href="https://github.com/Varugowdatp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-md text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-surface transition-all duration-200"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>

        {/* Meta strip */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs lg:text-sm text-muted-foreground animate-fade-slide-up animate-delay-500">
          <span>📍 Mandya, Karnataka, India</span>
          <span className="hidden sm:inline dot" />
          <span>B.E. Computer Science · CGPA 9.51</span>
          <span className="hidden sm:inline dot" />
          <span>Flutter · MERN · AI/ML</span>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#overview"
        aria-label="Scroll to overview"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </a>
    </section>
  );
}
