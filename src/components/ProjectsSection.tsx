const projects = [
  {
    title: "CRM Transformation for Healthtech Sales",
    problem: "Fragmented pipeline visibility across 3 business units, leading to missed revenue and slow decision-making.",
    approach: "Designed and implemented CRM workflows with unified dashboards, pipeline tracking, and automated reporting.",
    outcome: "25% increase in sales efficiency; leadership could track pipeline health in real-time across all BUs.",
    link: "https://quirkyness.super.site",
  },
  {
    title: "Executive Dashboarding for Global Operations",
    problem: "CXOs across 10+ global locations lacked a unified view of space utilization, costs, and forecasting.",
    approach: "Built interactive dashboards consolidating data from multiple sources into a single decision layer.",
    outcome: "Real-time visibility for leadership; enabled data-driven space strategy for 9,000+ employees.",
    link: "https://quirkyness.super.site",
  },
  {
    title: "0→1 eSIM Product Launch",
    problem: "Telecom startup needed to launch an eSIM product from scratch in a competitive market.",
    approach: "Led cross-functional execution across product, engineering, and marketing. Optimized onboarding UX through user research.",
    outcome: "10K+ users in the first quarter; product launch accelerated by 3 months.",
    link: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
  },
  {
    title: "Ops Automation at Enterprise Scale",
    problem: "Manual workflows creating bottlenecks across teams; high turnaround time for routine processes.",
    approach: "Mapped end-to-end workflows, identified automation opportunities, and deployed scalable solutions.",
    outcome: "Significant reduction in manual effort; zero major escalations across 10+ cross-geo teams.",
    link: "https://quirkyness.super.site",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <span className="section-label">Projects</span>
        <h2 className="section-title mb-16">Strategic thinking in action</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="border border-border p-8 card-hover group">
              <h3 className="font-heading text-xl text-foreground mb-5">{project.title}</h3>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.1em] text-accent block mb-1">Problem</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.1em] text-accent block mb-1">Approach</span>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.1em] text-accent block mb-1">Outcome</span>
                  <p>{project.outcome}</p>
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://quirkyness.super.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            View full portfolio →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
