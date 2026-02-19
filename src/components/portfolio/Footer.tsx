import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-0">
      {/* Emerald gradient top accent */}
      <div className="footer-gradient-top" />

      <div className="border-t border-border bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col items-center gap-6">

          {/* Name + Tagline */}
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground tracking-tight">Varun T P</p>
            <p className="text-xs text-muted-foreground/60 mt-1 italic">
              "Systems &gt; Features. Architecture &gt; Templates."
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Varugowdatp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-emerald/50 hover:bg-surface transition-all duration-200"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/varun-tp-8ab642262"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-emerald/50 hover:bg-surface transition-all duration-200"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:varu0616@gmail.com"
              aria-label="Email"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-emerald/50 hover:bg-surface transition-all duration-200"
            >
              <Mail size={14} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[10px] text-muted-foreground/40 tracking-wide text-center">
            © {year} Varun T P · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
