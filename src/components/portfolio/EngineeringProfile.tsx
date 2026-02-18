const COMPETENCIES = [
  "Distributed Firestore schema design",
  "JWT-based backend authentication",
  "RESTful API integration",
  "Clean architecture principles",
  "Agile & sprint-based workflows",
  "Performance optimization & debugging",
];

export default function EngineeringProfile() {
  return (
    <section id="overview" className="section border-t border-border">
      <div className="section-inner">
        <p className="section-label">Engineering Overview</p>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary */}
          <div>
            <h2 className="section-heading mb-5">Professional Profile</h2>
            <p className="text-sm text-muted-foreground leading-7">
              System-focused engineer specializing in scalable mobile
              applications and full-stack architectures. Strong foundation in
              SDLC, modular design, distributed databases, and authentication
              systems.
            </p>
            <p className="text-sm text-muted-foreground leading-7 mt-4">
              Comfortable working across the entire product lifecycle—from
              architecture decisions and schema design to production deployment
              and performance optimization. Experienced in Agile environments
              with a bias toward clean, maintainable code.
            </p>
          </div>

          {/* Competencies */}
          <div>
            <h2 className="section-heading mb-5">Core Competencies</h2>
            <ul className="space-y-2.5">
              {COMPETENCIES.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald" />
                  <span className="text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
