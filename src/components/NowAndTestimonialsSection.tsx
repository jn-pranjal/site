import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Pranjal brings a rare combination of strategic thinking and execution speed. She's the kind of operator every founder needs in their corner.",
    name: "Startup Founder",
    role: "Series B Healthtech",
  },
  {
    quote: "Structured, data-driven, and always three steps ahead. Pranjal made our cross-functional chaos feel manageable and then made it work.",
    name: "Engineering Director",
    role: "Enterprise Technology",
  },
];

const NowAndTestimonialsSection = () => {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">Kind words</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border border-border p-8 hover:border-foreground/20 transition-colors"
              >
                <p className="text-muted-foreground text-base leading-relaxed mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-foreground text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{t.name}</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowAndTestimonialsSection;
