import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "CRM Transformation for Healthtech Sales",
    tag: "Strategy",
    problem: "Fragmented pipeline visibility across 3 business units, leading to missed revenue.",
    outcome: "25% increase in sales efficiency; real-time pipeline health across all BUs.",
    link: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
    color: "from-secondary to-card",
  },
  {
    title: "Executive Dashboarding for Global Ops",
    tag: "Data",
    problem: "CXOs across 10+ locations lacked unified view of space utilization and costs.",
    outcome: "Real-time visibility for leadership; data-driven space strategy for 9,000+ employees.",
    link: "https://quirkyness.super.site",
    color: "from-card to-secondary",
  },
  {
    title: "0→1 eSIM Product Launch",
    tag: "Product",
    problem: "Telecom startup needed to launch an eSIM product from scratch in a competitive market.",
    outcome: "10K+ users in the first quarter; launch accelerated by 3 months.",
    link: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
    color: "from-secondary to-card",
  },
  {
    title: "Enterprise Ops Automation",
    tag: "Operations",
    problem: "Manual workflows creating bottlenecks; high turnaround time for routine processes.",
    outcome: "Significant reduction in manual effort; zero major escalations across 10+ teams.",
    link: "https://quirkyness.super.site",
    color: "from-card to-secondary",
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 380;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="border-t border-border bg-card/20">
      <div className="py-16 md:py-24">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Projects</span>
              <h2 className="section-title mb-0">Strategic thinking in action</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex gap-2"
            >
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground/40 transition-colors rounded-sm"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground/40 transition-colors rounded-sm"
                aria-label="Scroll right"
              >
                →
              </button>
            </motion.div>
          </div>
        </div>

        {/* Horizontal scroll row */}
        <div
          ref={scrollRef}
          className="scroll-row pl-6 md:pl-16 lg:pl-24 pr-6"
        >
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-start shrink-0 w-[340px] md:w-[400px] group cursor-pointer"
            >
              {/* Card */}
              <div className={`bg-gradient-to-br ${project.color} border border-border rounded-sm overflow-hidden hover:border-foreground/20 transition-all duration-300 h-full`}>
                {/* Top visual area */}
                <div className="h-48 relative bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl font-light text-foreground/5 select-none group-hover:scale-110 transition-transform duration-500">
                    {project.tag.charAt(0)}
                  </span>
                  {/* Tag */}
                  <span
                    className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground bg-background/80 px-3 py-1 rounded-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-foreground mb-3 tracking-tight leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Problem & Outcome revealed */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 block mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Problem
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 block mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Outcome
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="px-6 md:px-16 lg:px-24 mt-8"
        >
          <a
            href="https://quirkyness.super.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View full portfolio →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
