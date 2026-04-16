import { useState } from "react";

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
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <span className="section-label">Contact</span>
        <h2 className="section-title mb-4">Let's connect</h2>
        <p className="text-muted-foreground mb-12 max-w-lg text-[15px] leading-relaxed">
          Always happy to speak with founders, operators, and investors.
          Whether it's a project, a role, or just a conversation — reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Direct links */}
          <div className="space-y-6">
            <a
              href="mailto:ar.pranjaljain@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <span className="text-xs uppercase tracking-[0.15em]">Email</span>
              <span className="text-muted-foreground text-sm group-hover:text-accent">ar.pranjaljain@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pranjalhjain/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <span className="text-xs uppercase tracking-[0.15em]">LinkedIn</span>
              <span className="text-muted-foreground text-sm group-hover:text-accent">pranjalhjain →</span>
            </a>
            <a
              href="https://substack.com/@quirkyness22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <span className="text-xs uppercase tracking-[0.15em]">Substack</span>
              <span className="text-muted-foreground text-sm group-hover:text-accent">@quirkyness22 →</span>
            </a>
          </div>

          {/* Contact form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                placeholder="Your message"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-foreground text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center border border-border p-8">
              <p className="text-muted-foreground text-sm">Thanks! Your email client should have opened. Looking forward to connecting.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
