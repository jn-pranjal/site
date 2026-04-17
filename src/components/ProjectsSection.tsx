import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  category: "Strategy" | "Product" | "Data" | "Operations";
  descriptor: string;
  title: string;
  overview: string;
  work: string;
  outcome: string;
  link: string;
};

const projects: Project[] = [
  {
    category: "Strategy",
    descriptor: "CRM transformation across business units",
    title: "CRM Transformation for Healthtech Sales",
    overview:
      "Fragmented pipeline visibility across 3 business units, leading to missed revenue.",
    work:
      "Led discovery, vendor evaluation, and rollout of a unified CRM with standardized pipeline stages, reporting cadences, and enablement across BUs.",
    outcome:
      "25% increase in sales efficiency; real-time pipeline health across all BUs.",
    link: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
  },
  {
    category: "Product",
    descriptor: "0 to 1 launch in a competitive market",
    title: "0 to 1 eSIM Product Launch",
    overview:
      "Startup needed to launch an eSIM product from scratch in a competitive market.",
    work:
      "Owned product strategy, GTM, partner integrations, and launch operations end-to-end, from positioning to onboarding flows.",
    outcome:
      "10K+ users in the first quarter; launch accelerated by 3 months.",
    link: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
  },
  {
    category: "Data",
    descriptor: "Executive visibility for global operations",
    title: "Executive Dashboarding for Global Ops",
    overview:
      "CXOs across 10+ locations lacked unified view of space utilization and costs.",
    work:
      "Designed KPI framework, built executive dashboards, and embedded review rituals so leadership could act on space and cost signals.",
    outcome:
      "Real-time visibility for leadership; data-driven space strategy for 9,000+ employees.",
    link: "https://quirkyness.super.site",
  },
  {
    category: "Operations",
    descriptor: "Automating bottlenecks across teams",
    title: "Enterprise Ops Automation",
    overview:
      "Manual workflows creating bottlenecks; high turnaround time for routine processes.",
    work:
      "Mapped workflows, prioritized automation candidates, and rolled out tooling + SOPs across 10+ teams.",
    outcome:
      "Significant reduction in manual effort; zero major escalations across 10+ teams.",
    link: "https://quirkyness.super.site",
  },
];

const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setDirection(1);
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % projects.length));
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setOpenIndex((i) =>
      i === null ? 0 : (i - 1 + projects.length) % projects.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  const active = openIndex !== null ? projects[openIndex] : null;

  return (
    <section id="projects" className="border-t border-border bg-card/20">
      <div className="py-16 md:py-24">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <span className="section-label">Projects</span>
            <h2 className="section-title mb-0">Strategic thinking in action</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((p, i) => {
              const dimmed = isOpen && openIndex !== i;
              const isActive = openIndex === i;
              return (
                <motion.button
                  key={p.category}
                  layoutId={`project-card-${p.category}`}
                  onClick={() => {
                    setDirection(0);
                    setOpenIndex(i);
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  animate={{
                    opacity: dimmed ? 0.3 : isActive ? 0 : 1,
                    scale: dimmed ? 0.96 : 1,
                  }}
                  whileHover={
                    isOpen ? undefined : { y: -4, transition: { duration: 0.18 } }
                  }
                  className="text-left bg-card border border-border rounded-sm p-6 md:p-8 group cursor-pointer hover:border-foreground/20 hover:shadow-lg transition-shadow"
                  aria-label={`Open ${p.category} case study`}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Category
                  </span>
                  <h3 className="text-2xl md:text-3xl text-foreground mt-2 tracking-tight">
                    {p.category}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground mt-3 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.descriptor}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 mt-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Open
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && active && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            />

            <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none">
              <div className="min-h-full flex items-center justify-center px-4 md:px-12 py-8">
              {/* Prev */}
              <button
                onClick={prev}
                aria-label="Previous project"
                className="hidden md:flex pointer-events-auto fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background border border-border items-center justify-center text-foreground hover:-translate-x-0.5 hover:border-foreground/40 transition-all z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key="modal"
                layoutId={`project-card-${active.category}`}
                className="pointer-events-auto relative w-full max-w-[800px] md:w-[78vw] bg-card border border-border rounded-sm shadow-2xl overflow-hidden my-auto"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between p-6 md:p-8 border-b border-border">
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {active.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl text-foreground mt-1 tracking-tight">
                      {active.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs text-muted-foreground/70 tabular-nums"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {(openIndex ?? 0) + 1} / {projects.length}
                    </span>
                    <button
                      onClick={close}
                      aria-label="Close"
                      className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-muted/40 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={openIndex}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        x: direction === 0 ? 0 : direction > 0 ? 40 : -40,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        x: direction === 0 ? 0 : direction > 0 ? -40 : 40,
                      }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-6"
                    >
                      <Block label="Project overview" body={active.overview} />
                      <Block label="Work done" body={active.work} />
                      <Block label="Outcomes / impact" body={active.outcome} emphasis />

                      <div className="pt-2">
                        <a
                          href={active.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-xs uppercase tracking-[0.2em] rounded-sm hover:scale-[1.02] transition-transform"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          View Project
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Next */}
              <button
                onClick={next}
                aria-label="Next project"
                className="hidden md:flex pointer-events-auto fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background border border-border items-center justify-center text-foreground hover:translate-x-0.5 hover:border-foreground/40 transition-all z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Mobile nav */}
              <div className="md:hidden pointer-events-auto fixed bottom-6 left-0 right-0 flex items-center justify-center gap-3 z-10">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

const Block = ({
  label,
  body,
  emphasis,
}: {
  label: string;
  body: string;
  emphasis?: boolean;
}) => (
  <div>
    <span
      className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 block mb-2"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {label}
    </span>
    <p
      className={`text-base leading-relaxed ${
        emphasis ? "text-foreground font-medium" : "text-muted-foreground"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {body}
    </p>
  </div>
);

export default ProjectsSection;
