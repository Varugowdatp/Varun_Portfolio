const STACK = [
  {
    category: "Languages",
    items: ["C++", "C", "Java", "Dart", "Python", "JavaScript"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Firebase", "REST APIs"],
  },
  {
    category: "MERN Stack",
    items: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    category: "AI / ML",
    items: ["OCR", "NLP", "NumPy", "Pandas"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub", "Postman", "Android Studio", "VS Code"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section border-t border-border">
      <div className="section-inner">
        <p className="section-label">Technology</p>
        <div className="section-divider" />

        <h2 className="section-heading mb-8">Technical Stack</h2>

        <div className="space-y-6">
          {STACK.map(({ category, items }) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
              <span className="w-28 flex-shrink-0 text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest pt-1">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
