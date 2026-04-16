import AnimateIn from "./AnimateIn";

const services = [
  { title: "Founder's Office / Chief of Staff", desc: "Strategic alignment, cross-functional execution, board prep" },
  { title: "Strategy & Business Problem Solving", desc: "Market entry, competitive analysis, growth strategy" },
  { title: "Ops Design & Process Optimization", desc: "Workflow automation, CRM setup, operational excellence" },
  { title: "GTM & Growth Execution", desc: "Pipeline design, revenue operations, launch strategy" },
  { title: "Dashboarding & Decision Systems", desc: "Executive dashboards, KPI frameworks, data-driven ops" },
];

const whoIWorkWith = [
  { label: "Early-stage founders", desc: "Building from 0→1 and need a strategic co-pilot" },
  { label: "Series A–C startups", desc: "Scaling operations, teams, and GTM" },
  { label: "Investors & VCs", desc: "Needing execution support for portfolio companies" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <AnimateIn>
            <span className="section-label">What I Do</span>
            <h2 className="section-title mb-12">How I can help</h2>
          </AnimateIn>

          <div className="space-y-0 divide-y divide-border">
            {services.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.05}>
                <div className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-foreground font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <div>
          <AnimateIn>
            <span className="section-label">Clients</span>
            <h2 className="section-title mb-12">Who I work with</h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-3 gap-6">
            {whoIWorkWith.map((item, i) => (
              <AnimateIn key={item.label} delay={i * 0.1}>
                <div className="border border-border p-6 card-hover">
                  <h3 className="text-foreground font-medium mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
