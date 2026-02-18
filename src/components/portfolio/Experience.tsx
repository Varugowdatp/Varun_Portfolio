const EXPERIENCE = [
  {
    title: "SDE Intern",
    company: "Medicodio.ai",
    period: "Jan 2026 – Present",
    type: "Full-time Intern",
    points: [
      "Contributing to backend feature engineering in a production AI healthcare system",
      "Working in Agile sprint cycles with defined tickets and code reviews",
      "Applying clean architecture principles across service boundaries",
      "Participating in optimization and debugging across full SDLC stages",
    ],
  },
  {
    title: "Flutter Backend Developer Intern",
    company: "Ignito Corporation",
    period: "June 2025 – July 2025",
    type: "Remote",
    points: [
      "Engineered the Smart Distributor inventory & finance system end-to-end",
      "Designed distributed Firestore schema for real-time multi-user operations",
      "Implemented role-based authentication and transaction logging pipelines",
      "Reduced operational paperwork by 70% across 50+ staff users",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-border">
      <div className="section-inner">
        <p className="section-label">Work History</p>
        <div className="section-divider" />

        <h2 className="section-heading mb-8">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="sm:pl-8 relative">
                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-emerald ring-4 ring-background" />

                <div className="card-base">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-xs text-emerald-accent font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                      <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest mt-0.5">{exp.type}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-border" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
