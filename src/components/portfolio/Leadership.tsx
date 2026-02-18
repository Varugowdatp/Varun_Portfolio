const ACHIEVEMENTS = [
  {
    label: "Flutter Lead",
    detail: "GDG PES Mandya",
    badge: "Leadership",
  },
  {
    label: "HackSprint",
    detail: "Top 5 Finish",
    badge: "Competition",
  },
  {
    label: "Startup Pitch",
    detail: "80 / 100 Score",
    badge: "Entrepreneurship",
  },
  {
    label: "GeeksforGeeks",
    detail: "Institute Rank 13",
    badge: "Coding",
  },
];

export default function Leadership() {
  return (
    <section className="section border-t border-border">
      <div className="section-inner">
        <p className="section-label">Recognition</p>
        <div className="section-divider" />

        <h2 className="section-heading mb-8">Leadership & Achievements</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} className="card-base text-center py-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-accent mb-2">
                {a.badge}
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">{a.label}</p>
              <p className="text-xs text-muted-foreground">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
