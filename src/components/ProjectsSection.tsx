import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "CRM Transformation for Healthtech Sales",
    problem: "Fragmented pipeline visibility across 3 business units, leading to missed revenue.",
    approach: "Designed CRM workflows with unified dashboards, pipeline tracking, and automated reporting.",
    outcome: "25% increase in sales efficiency; real-time pipeline health across all BUs.",
    link: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
  },
  {
    title: "Executive Dashboarding for Global Ops",
    problem: "CXOs across 10+ locations lacked unified view of space utilization and costs.",
    approach: "Built interactive dashboards consolidating data from multiple sources into a single decision layer.",
    outcome: "Real-time visibility for leadership; data-driven space strategy for 9,000+ employees.",
    link: "https://quirkyness.super.site",
  },
  {
    title: "0→1 eSIM Product Launch",
    problem: "Telecom startup needed to launch an eSIM product from scratch in a competitive market.",
    approach: "Led cross-functional execution across product, engineering, and marketing.",
    outcome: "10K+ users in the first quarter; launch accelerated by 3 months.",
    link: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
  },
  {
    title: "Enterprise Ops Automation",
    problem: "Manual workflows creating bottlenecks; high turnaround time for routine processes.",
    approach: "Mapped end-to-end workflows, identified automation opportunities, deployed scalable solutions.",
    outcome: "Significant reduction in manual effort; zero major escalations across 10+ teams.",
    link: "https://quirkyness.super.site",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <span className="section-label">Projects</span>
          <h2 className="section-title mb-16">Strategic thinking in action</h2>
        </AnimateIn>

        <div className="space-y-0 divide-y divide-border">
          {projects.map((project, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="py-10 first:pt-0">
                <h3 className="text-xl font-bold text-foreground mb-5">{project.title}</h3>
                <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground leading-relaxed mb-5">
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-foreground/50 block mb-1">Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-foreground/50 block mb-1">Approach</span>
                    <p>{project.approach}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-foreground/50 block mb-1">Outcome</span>
                    <p>{project.outcome}</p>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-foreground hover:opacity-60 transition-opacity inline-flex items-center gap-1 underline underline-offset-4"
                >
                  View Case Study →
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
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
        </AnimateIn>
      </div>
    </section>
  );
};

export default ProjectsSection;
