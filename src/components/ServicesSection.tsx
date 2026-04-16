const whoIWorkWith = [
  { label: "Early-stage founders", desc: "Building from 0→1 and need a strategic co-pilot" },
  { label: "Series A–C startups", desc: "Scaling operations, teams, and GTM" },
  { label: "Investors & VCs", desc: "Needing execution support for portfolio companies" },
];

const whatICanHelp = [
  { title: "Founder's Office / Chief of Staff", desc: "Strategic alignment, cross-functional execution, board prep" },
  { title: "GTM & Growth Strategy", desc: "Market entry, pipeline design, revenue operations" },
  { title: "Ops & Process Design", desc: "Workflow automation, CRM setup, operational excellence" },
  { title: "Dashboarding & Decision Systems", desc: "Executive dashboards, KPI frameworks, data-driven ops" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        {/* Who I work with */}
        <div className="mb-20">
          <span className="section-label">Clients</span>
          <h2 className="section-title mb-12">Who I work with</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {whoIWorkWith.map((item) => (
              <div key={item.label} className="border border-border p-6 card-hover">
                <h3 className="font-heading text-lg text-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I can help with */}
        <div>
          <span className="section-label">Services</span>
          <h2 className="section-title mb-12">What I can help with</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {whatICanHelp.map((item) => (
              <div key={item.title} className="border border-border p-8 card-hover">
                <h3 className="font-heading text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
