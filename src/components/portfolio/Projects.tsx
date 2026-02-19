import { Github, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  subtitle: string;
  tech: string[];
  problem: string;
  architecture: string[];
  impact?: string[];
  links: { label: string; href: string }[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Smart Distributor",
    subtitle: "Inventory & Finance System",
    tech: ["Flutter", "Firebase", "Firestore", "Role-Based Auth"],
    problem:
      "Manual ledger-based inventory operations causing operational inefficiency across 50+ staff users.",
    architecture: [
      "Real-time Firestore distributed database with optimized NoSQL schema",
      "Role-based authentication system",
      "Transaction logging for full operational traceability",
    ],
    impact: [
      "50+ active staff users",
      "70% reduction in paperwork",
      "Full operational traceability",
    ],
    links: [
      { label: "GitHub (Primary)", href: "https://github.com/Coderkrishna12/Smart_distribution_app_new" },
      { label: "GitHub (Mirror)", href: "https://github.com/Mrugen-Fichadia/smart-distributor-app" },
    ],
  },
  {
    id: 2,
    name: "NearBuy",
    subtitle: "Hyperlocal Commerce Platform",
    tech: ["Flutter", "Firebase", "Geo-location", "Firebase Auth"],
    problem:
      "Local vendors lacked digital presence and structured order tracking, forcing dependency on offline walk-ins.",
    architecture: [
      "Dual app ecosystem — Customer app & Vendor dashboard",
      "Geo-location based vendor discovery",
      "Real-time order management pipeline",
    ],
    impact: [
      "10+ vendors onboarded",
      "Reduced offline walk-in dependency",
    ],
    links: [
      { label: "GitHub (Customer)", href: "https://github.com/Varugowdatp/nearBuy" },
      { label: "GitHub (Vendor)", href: "https://github.com/Varugowdatp/shopkeeper-app" },
    ],
  },
  {
    id: 3,
    name: "ML_Textify",
    subtitle: "AI OCR Document Digitization System",
    tech: ["Flutter", "ML Kit", "Image Processing", "NLP"],
    problem:
      "Manual document digitization was slow, error-prone, and unsupported across output formats.",
    architecture: [
      "Image preprocessing pipeline before OCR inference",
      "90%+ OCR accuracy on standard documents",
      "Multi-format export — PDF, Word, TXT",
      "Optimized Flutter state management",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Varugowdatp/ML__Textify" },
    ],
  },
  {
    id: 4,
    name: "Expense Tracker",
    subtitle: "MERN Stack Finance Analytics",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Chart.js"],
    problem:
      "No structured expense analytics with secure multi-user authentication.",
    architecture: [
      "JWT-based authentication system",
      "RESTful Express backend",
      "MongoDB schema design for transaction records",
      "Chart analytics dashboard for visual insights",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Varugowdatp/expense-tracker" },
    ],
  },
  {
    id: 5,
    name: "Tic Tac Toe",
    subtitle: "Flutter State Architecture Demo",
    tech: ["Flutter", "Dart", "State Management"],
    problem:
      "Demonstrating clean state separation and UI logic modeling in Flutter.",
    architecture: [
      "Clean separation of game logic and UI layer",
      "Minimal, well-structured state management",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Varugowdatp/tic-tac-toe" },
    ],
  },
  {
    id: 6,
    name: "PawCare",
    subtitle: "Social Impact Web Platform",
    tech: ["HTML", "CSS", "JavaScript"],
    problem:
      "Raising awareness and centralizing resources for animal welfare.",
    architecture: [
      "Responsive static web platform",
      "Semantic HTML for accessibility and SEO",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Varugowdatp/Paw" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="systems" className="section border-t border-border">
      <div className="section-inner">
        <p className="section-label">Engineering Systems</p>
        <div className="section-divider" />

        <h2 className="section-heading mb-2">Featured Projects</h2>
        <p className="text-sm text-muted-foreground mb-10">
          Production systems built with a focus on architecture, performance, and real-world impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROJECTS.map((p) => (
            <article key={p.id} className="card-base group flex flex-col gap-4">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {p.name}
                  </h3>
                  <span className="flex-shrink-0 text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-widest mt-0.5">
                    #{String(p.id).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-xs text-emerald-accent font-medium">{p.subtitle}</p>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              {/* Problem */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1.5">
                  Problem
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.problem}</p>
              </div>

              {/* Architecture */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1.5">
                  Architecture
                </p>
                <ul className="space-y-1.5">
                  {p.architecture.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-emerald opacity-70" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              {p.impact && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1.5">
                    Impact
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.impact.map((i) => (
                      <span key={i} className="text-xs px-2 py-0.5 rounded-sm border border-emerald/30 text-emerald-accent">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border">
                {p.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Github size={11} />
                    {link.label}
                    <ArrowUpRight size={10} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
