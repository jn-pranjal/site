import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Entry = {
  period: string;
  company: string;
  companySuffix?: string;
  role: string;
  description: string;
};

const timeline: Entry[] = [
  {
    period: "Dec 2025 - May 2026",
    company: "Morgan Stanley",
    companySuffix: "(Contract via Hays Specialist Recruitment Private Limited)",
    role: "Consultant, PMO & Automation",
    description:
      "Managing space strategy for 9,000+ employees across Mumbai & Bengaluru, building real-time dashboards for global leadership, and engineering automated workflows that cut operational friction at scale.",
  },
  {
    period: "2025",
    company: "Remidio Innovative Solutions",
    role: "Chief of Staff",
    description:
      "Sat at the intersection of strategy and execution -- built C-suite dashboards, designed CRM systems across 3 business units, and drove nationwide deployments for health programs across 100+ public health clients.",
  },
  {
    period: "2023 - 2024",
    company: "Tarento Technologies",
    role: "Product Consultant",
    description:
      "Led end-to-end product cycles for a telecom eSIM launch -- from discovery to 10K+ early adopters -- while driving UX improvements that cut onboarding drop-offs by 15%.",
  },
  {
    period: "2023 - 2024",
    company: "What's Your Story",
    role: "Co-Founder",
    description:
      "Built a storytelling platform from scratch -- 100+ interviews, 5K+ followers, 50+ published stories. A side project that sharpened instincts for community, content, and narrative.",
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
            transition={{ duration: 0.3, ease: "easeOut" }}
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

            <div className="flex flex-col gap-8 md:gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.1 }}
                  className="relative pl-8 md:pl-20 group"
                >
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-[4.5px] w-[10px] h-[10px] rounded-full border-2 border-foreground/40 bg-background group-hover:border-foreground transition-colors" />

                  <div
                    className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-muted-foreground mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span>{item.period}</span>
                    <span className="mx-2 text-muted-foreground/40">|</span>
                    <span className="text-foreground/80 normal-case tracking-normal text-[13px] md:text-[14px]">
                      {item.company}
                    </span>
                    {item.companySuffix && (
                      <span
                        className="ml-2 normal-case tracking-normal text-[11px] md:text-[12px] text-muted-foreground/60"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.companySuffix}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl text-foreground mb-3 tracking-tight">
                    {item.role}
                  </h3>

                  <p
                    className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75] max-w-3xl"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.description}
                  </p>
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
