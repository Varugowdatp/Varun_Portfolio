import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-muted-foreground tracking-wide">
            Varun T P
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-0.5 italic">
            "Systems &gt; Features. Architecture &gt; Templates."
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Varugowdatp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-7 h-7 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
          >
            <Github size={13} />
          </a>
          <a
            href="https://www.linkedin.com/in/varun-tp-8ab642262"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
          >
            <Linkedin size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
