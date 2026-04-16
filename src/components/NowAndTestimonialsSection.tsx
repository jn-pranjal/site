import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote: "Pranjal brings a rare combination of strategic thinking and execution speed. He's the kind of operator every founder needs in their corner.",
    name: "Startup Founder",
    role: "Series B Healthtech",
  },
  {
    quote: "Structured, data-driven, and always three steps ahead. Pranjal made our cross-functional chaos feel manageable — and then made it work.",
    name: "Engineering Director",
    role: "Enterprise Technology",
  },
];

const nowItems = [
  "Actively looking for full-time roles in Strategy, Operations, or Chief of Staff positions",
  "Available to join from May 2026",
  "Currently based in Mumbai",
  "Open to relocation (Bangalore / other cities)",
];

const NowAndTestimonialsSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Now */}
        <div className="mb-12">
          <AnimateIn>
            <span className="section-label">Now</span>
            <h2 className="section-title mb-8">What I'm up to</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="space-y-4">
              {nowItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground text-[15px] leading-relaxed">
                  <span className="text-foreground/30 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>

        {/* Testimonials */}
        <div>
          <AnimateIn>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title mb-8">Kind words</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="border border-border p-8">
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="text-foreground text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowAndTestimonialsSection;
