const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <span className="section-label">About</span>
        <h2 className="section-title mb-12">Strategy meets execution</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              I started in architecture school — which, more than anything, taught me how to think in systems.
              How spaces shape behavior. How constraints breed creativity. That lens has stayed with me across
              every role since.
            </p>
            <p>
              Over 5+ years, I've worked across the spectrum: from a 0→1 eSIM product at a telecom startup,
              to the CEO's office at a Series-B healthtech company, to managing enterprise-scale PMO for 9,000+
              employees at Morgan Stanley.
            </p>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              What stays constant is how I work: structured, data-driven, high-ownership. I'm most useful
              when things are ambiguous, cross-functional, and high-stakes — the kind of work that doesn't
              fit neatly into one team's scope.
            </p>
            <p>
              I think in systems, communicate with clarity, and execute with urgency. I'm the person founders
              bring in when they need someone who can hold the strategic vision and make it operational.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "◆", title: "Strategic Ops", desc: "Founder's office, PMO, cross-functional execution" },
            { icon: "◇", title: "Product & GTM", desc: "0→1 builds, launch strategy, growth levers" },
            { icon: "○", title: "Dashboarding", desc: "CXO dashboards, data pipelines, decision systems" },
            { icon: "△", title: "Process Design", desc: "Automation, CRM, workflow optimization" },
          ].map((item) => (
            <div key={item.title} className="border border-border p-6 card-hover">
              <span className="text-accent text-2xl block mb-3">{item.icon}</span>
              <h3 className="font-heading text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
