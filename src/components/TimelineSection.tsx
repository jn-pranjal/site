import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    role: "Consultant, PMO & Automation",
    company: "Morgan Stanley, India (via Hays)",
    period: "Dec 2025 – May 2026",
    type: "Global Financial Services",
    highlights: [
      "Managed space strategy for 9,000+ employees across Mumbai and Bengaluru",
      "Built dashboards across 10+ global locations for leadership visibility",
      "Coordinated cross-functional teams across NY, Mumbai, and Bengaluru with zero escalations",
      "Automated workflows using RCA, improving turnaround time at scale",
      "Led onboarding systems and large-scale event execution with zero disruption",
    ],
  },
  {
    role: "Chief of Staff, CEO's Office",
    company: "Remidio Innovative Solutions, Bengaluru",
    period: "Jan 2025 – Dec 2025",
    type: "Series B Healthtech",
    highlights: [
      "Built executive dashboards for leadership, improving decision speed by 30%",
      "Led strategic accounts and nationwide deployments, increasing adoption by 20%",
      "Designed CRM systems across 3 business units, improving sales efficiency by 25%",
      "Partnered on GTM and growth strategy, improving retention by 20%",
      "Built and engaged a 250+ doctor community, increasing adoption by 15%",
    ],
  },
  {
    role: "Analyst, Product Consultant",
    company: "Tarento Technologies, Bengaluru",
    period: "Jul 2023 – Jul 2024",
    type: "Startup Consulting",
    highlights: [
      "Led 0 to 1 launch of telecom eSIM product with 10K+ users in first quarter",
      "Accelerated launch by 3 months through cross-functional execution",
      "Improved onboarding completion by 20% and reduced drop-offs by 15%",
      "Delivered CXO-level insights, improving KPI performance by 15%",
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

                  <ul className="flex flex-col gap-2.5 max-w-2xl">
                    {item.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + j * 0.06 }}
                        className="flex gap-3 text-[13px] md:text-[13.5px] text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-foreground/40" />
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
