import { useState } from "react";
import AnimateIn from "./AnimateIn";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ar.pranjaljain@gmail.com?subject=Hey Pranjal — from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <span className="section-label">Contact</span>
          <h2 className="section-title mb-4">Let's connect</h2>
          <p className="text-muted-foreground mb-8 max-w-lg text-[15px] leading-relaxed">
            Always happy to speak with founders, operators, and investors.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimateIn delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:ar.pranjaljain@gmail.com"
                className="flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity group"
              >
                <span className="text-xs uppercase tracking-[0.15em]">Email</span>
                <span className="text-muted-foreground text-sm">ar.pranjaljain@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pranjalhjain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity group"
              >
                <span className="text-xs uppercase tracking-[0.15em]">LinkedIn</span>
                <span className="text-muted-foreground text-sm">pranjalhjain →</span>
              </a>
              <a
                href="https://substack.com/@quirkyness22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity group"
              >
                <span className="text-xs uppercase tracking-[0.15em]">Substack</span>
                <span className="text-muted-foreground text-sm">@quirkyness22 →</span>
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <textarea
                  placeholder="Your message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-foreground text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center border border-border p-8">
                <p className="text-muted-foreground text-sm">Thanks! Looking forward to connecting.</p>
              </div>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
