import { Mail, Phone, Linkedin, Github } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "varu0616@gmail.com",
    href: "mailto:varu0616@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9535419091",
    href: "tel:+919535419091",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "varun-tp-8ab642262",
    href: "https://www.linkedin.com/in/varun-tp-8ab642262",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Varugowdatp",
    href: "https://github.com/Varugowdatp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-border">
      <div className="section-inner">
        <p className="section-label">Get in Touch</p>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-heading mb-4">Let's Connect</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Open to full-time software engineering roles and product-focused
              internships. Prefer teams building distributed systems, mobile
              products, or AI-integrated platforms.
            </p>
          </div>

          <div className="space-y-3">
            {LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 px-4 py-3 rounded-md border border-border hover:border-foreground/25 hover:bg-surface transition-all duration-200 group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-surface group-hover:bg-surface-hover transition-colors duration-200">
                  <Icon size={15} className="text-muted-foreground group-hover:text-emerald transition-colors duration-200" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                    {label}
                  </p>
                  <p className="text-sm text-foreground font-medium">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
