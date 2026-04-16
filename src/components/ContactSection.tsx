import { useState } from "react";
import { motion } from "framer-motion";

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
    <section id="contact" className="border-t border-border">
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Contact</span>
              <h2 className="section-title mb-4">Let's connect</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                Open to conversations about full-time strategy, product, and operations roles.
                Always happy to speak with founders, operators, and investors.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:ar.pranjaljain@gmail.com"
                  className="flex items-center gap-4 text-foreground hover:opacity-60 transition-opacity group"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-20" style={{ fontFamily: "'Inter', sans-serif" }}>Email</span>
                  <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>ar.pranjaljain@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pranjalhjain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:opacity-60 transition-opacity group"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-20" style={{ fontFamily: "'Inter', sans-serif" }}>LinkedIn</span>
                  <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>pranjalhjain →</span>
                </a>
                <a
                  href="https://wa.me/919702727954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:opacity-60 transition-opacity group"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-20" style={{ fontFamily: "'Inter', sans-serif" }}>WhatsApp</span>
                  <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>+91 9702727954</span>
                </a>
                <p className="text-[11px] text-muted-foreground/50 pl-24" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Appreciate texting before calling directly :)
                </p>
                <a
                  href="https://substack.com/@quirkyness22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:opacity-60 transition-opacity group"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-20" style={{ fontFamily: "'Inter', sans-serif" }}>Substack</span>
                  <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>@quirkyness22 →</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <textarea
                    placeholder="Your message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <button
                    type="submit"
                    className="bg-foreground text-primary-foreground px-10 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity rounded-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center border border-border p-12">
                  <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Thanks! Looking forward to connecting.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
