import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    role: "Consultant, PMO & Automation",
    company: "Morgan Stanley",
    period: "2024 – Present",
    type: "Enterprise",
    highlights: [
      "Managed space strategy for 9,000+ employees across 28+ floors",
      "Built executive dashboards across 10+ global locations for real-time decision-making",
      "Automated workflows reducing manual effort at enterprise scale",
      "Coordinated 10+ cross-geo teams with zero major escalations",
    ],
  },
  {
    role: "Chief of Staff, CEO's Office",
    company: "Remidio",
    period: "2023 – 2024",
    type: "Series B Healthtech",
    highlights: [
      "Built dashboards improving decision-making speed by 30%",
      "Increased sales efficiency by 25% via CRM and pipeline visibility across 3 BUs",
      "Drove nationwide programs (1,000+ reps), increasing adoption by 20%",
      "Delivered 15% cost savings via analytics-led process optimization",
    ],
  },
  {
    role: "Product Consultant",
    company: "Tarento",
    period: "2021 – 2023",
    type: "Telecom Startup",
    highlights: [
      "Led 0→1 eSIM product launch → 10K+ users in first quarter",
      "Accelerated product launch by 3 months via cross-functional execution",
      "Improved onboarding completion by 20% through UX optimization",
    ],
  },
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="border-t border-border">
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-label">Experience</span>
            <h2 className="section-title">Career Progression</h2>
          </motion.div>

          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border">
              <motion.div
                className="w-full bg-foreground/30 origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-8 md:pl-20 py-10 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-12 -translate-x-[4.5px] w-[10px] h-[10px] rounded-full border-2 border-foreground/40 bg-background group-hover:border-foreground group-hover:bg-foreground/10 transition-colors" />

                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.period}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 border border-border px-2 py-0.5 rounded-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl text-foreground mb-1 tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    @ {item.company}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {item.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + j * 0.08 }}
                        className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="text-foreground/25 mt-0.5 shrink-0">—</span>
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
