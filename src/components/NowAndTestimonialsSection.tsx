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
  "Building systems and dashboards for 9,000+ employees at Morgan Stanley",
  "Writing about strategy, operations, and the operator mindset",
  "Exploring the intersection of AI and enterprise ops",
  "Open to advisory and fractional Chief of Staff roles",
];

const NowAndTestimonialsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        {/* Now */}
        <div className="mb-20">
          <span className="section-label">Now</span>
          <h2 className="section-title mb-8">What I'm up to</h2>
          <ul className="space-y-4">
            {nowItems.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground text-[15px] leading-relaxed">
                <span className="text-accent mt-0.5">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mb-12">Kind words</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-border p-8">
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-foreground text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowAndTestimonialsSection;
