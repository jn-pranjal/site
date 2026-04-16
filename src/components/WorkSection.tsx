const experiences = [
  {
    company: "Morgan Stanley",
    role: "Consultant, PMO & Automation",
    period: "2024 – Present",
    wins: [
      "Managed space strategy for 9,000+ employees across 28+ floors; optimized utilization and forecasting",
      "Built executive dashboards across 10+ global locations enabling real-time decision-making",
      "Automated workflows reducing manual effort and improving turnaround time at scale",
      "Coordinated 10+ cross-geo teams with zero major escalations",
    ],
  },
  {
    company: "Remidio",
    role: "Chief of Staff, CEO's Office",
    period: "2023 – 2024",
    wins: [
      "Built executive dashboards improving decision-making speed by 30%",
      "Increased sales efficiency by 25% via CRM and pipeline visibility across 3 business units",
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
      "Improved onboarding completion by 20% through UX and journey optimization",
    ],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <span className="section-label">Experience</span>
        <h2 className="section-title mb-16">Selected work</h2>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  {exp.period}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl text-foreground mb-1">{exp.company}</h3>
                <p className="text-sm text-accent mb-5">{exp.role}</p>
                <ul className="space-y-3">
                  {exp.wins.map((win, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-accent mt-1.5 text-[8px]">◆</span>
                      <span>{win}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
