import { Linkedin, Mail, Instagram, BookOpen, MessageCircle } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:ar.pranjaljain@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pranjalhjain/" },
  { icon: BookOpen, label: "Substack", href: "https://substack.com/@quirkyness22" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/quirkyness22/" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919702727954" },
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
          © {new Date().getFullYear()} Pranjal Jain. Mumbai, India.
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s, i) => {
            const Icon = s.icon;
            const isExternal = !s.href.startsWith("mailto:");
            return (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
