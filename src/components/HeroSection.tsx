const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label">
          Chief of Staff &nbsp;·&nbsp; Startup Strategist &nbsp;·&nbsp; Operator
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05]">
          Pranjal Jain
        </h1>

        <div className="w-16 h-px bg-accent mx-auto mb-8" />

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-light">
          I help founders bring clarity, structure, and execution to scale.
        </p>

        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Strategy & Operations professional with 5+ years across product consulting,
          CEO's office, and enterprise PMO — spanning healthtech, telecom, and global financial services.
        </p>

        <p className="text-xs uppercase tracking-[0.15em] text-accent mb-12">
          Built systems for 9,000+ employees at Morgan Stanley &nbsp;|&nbsp; Drove 25% efficiency gains at a Series-B healthtech startup
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="bg-foreground text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          <a
            href="https://www.canva.com/design/DAGxVwMYY64/view"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground text-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
