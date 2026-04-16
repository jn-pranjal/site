import AnimateIn from "./AnimateIn";

const experiences = [
  {
    company: "Morgan Stanley",
    role: "Consultant, PMO & Automation",
    period: "2024 – Present",
    wins: [
      "Managed space strategy for 9,000+ employees across 28+ floors",
      "Built executive dashboards across 10+ global locations for real-time decision-making",
      "Automated workflows reducing manual effort at enterprise scale",
      "Coordinated 10+ cross-geo teams with zero major escalations",
    ],
  },
  {
    company: "Remidio",
    role: "Chief of Staff, CEO's Office",
    period: "2023 – 2024",
    wins: [
      "Built dashboards improving decision-making speed by 30%",
      "Increased sales efficiency by 25% via CRM and pipeline visibility across 3 BUs",
      "Drove nationwide programs (1,000+ reps), increasing adoption by 20%",
      "Delivered 15% cost savings via analytics-led process optimization",
    ],
  },
  {
    company: "Tarento",
    role: "Product Consultant",
    period: "2021 – 2023",
    wins: [
      "Led 0→1 eSIM product launch → 10K+ users in first quarter",
      "Accelerated product launch by 3 months via cross-functional execution",
      "Improved onboarding completion by 20% through UX optimization",
    ],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <span className="section-label">Experience</span>
          <h2 className="section-title mb-10">Selected work</h2>
        </AnimateIn>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{exp.role}</p>
                  <ul className="space-y-3">
                    {exp.wins.map((win, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-foreground/30 mt-0.5">—</span>
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
