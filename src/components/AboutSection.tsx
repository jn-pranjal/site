import AnimateIn from "./AnimateIn";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <span className="section-label">About</span>
          <h2 className="section-title mb-8">Strategy meets execution</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 mb-0">
          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                She started in architecture school — which taught her how to think in systems.
                How constraints breed creativity. That lens has shaped every role since.
              </p>
              <p>
                Over 5+ years, she's gone from a 0→1 eSIM product at a telecom startup,
                to the CEO's office at a Series-B healthtech company, to managing enterprise
                PMO for 9,000+ employees at Morgan Stanley.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                What stays constant: structured, data-driven, high-ownership. She's most useful
                when things are ambiguous, cross-functional, and high-stakes.
              </p>
              <p>
                She thinks in systems, communicates with clarity, and executes with urgency.
                She's the person founders and CXOs bring in when they need someone to hold the
                strategic vision and make it operational.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
