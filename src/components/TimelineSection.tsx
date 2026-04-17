import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X, ChevronDown } from "lucide-react";
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type CaseStudy = {
  problem: string;
  whatIDid: string;
  impact: string;
  fullCaseUrl?: string;
};

type Entry = {
  period: string;
  company: string;
  companySuffix?: string;
  role: string;
  description: string;
  caseStudy?: CaseStudy;
};

const timeline: Entry[] = [
  {
    period: "Dec 2025 - May 2026",
    company: "Morgan Stanley",
    companySuffix: "(Contract via Hays)",
    role: "Consultant, PMO & Automation",
    description:
      "Managing space strategy for 9,000+ employees across Mumbai & Bengaluru, building real-time dashboards for global leadership, and engineering automated workflows that cut operational friction at scale.",
    caseStudy: {
      problem:
        "CXOs across 10+ locations lacked unified visibility into space utilization and operational costs across Mumbai & Bengaluru.",
      whatIDid:
        "Built executive dashboards consolidating real-time data, designed automated PMO workflows, and standardized reporting cadence for global leadership.",
      impact:
        "Real-time visibility for leadership; data-driven space strategy for 9,000+ employees; significant reduction in manual operational effort.",
      fullCaseUrl: "https://quirkyness.super.site",
    },
  },
  {
    period: "2025",
    company: "Remidio Innovative Solutions",
    role: "Chief of Staff",
    description:
      "Sat at the intersection of strategy and execution -- built C-suite dashboards, designed CRM systems across 3 business units, and drove nationwide deployments for health programs across 100+ public health clients.",
    caseStudy: {
      problem:
        "Fragmented pipeline visibility across 3 business units, leading to missed revenue and slow CXO decisions.",
      whatIDid:
        "Designed a unified CRM, built C-suite dashboards, and ran nationwide deployments across 100+ public health clients.",
      impact:
        "25% increase in sales efficiency; real-time pipeline health across all BUs; zero major escalations across 10+ teams.",
      fullCaseUrl: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
    },
  },
  {
    period: "2023 - 2024",
    company: "Tarento Technologies",
    role: "Product Consultant",
    description:
      "Led end-to-end product cycles for a telecom eSIM launch -- from discovery to 10K+ early adopters -- while driving UX improvements that cut onboarding drop-offs by 15%.",
    caseStudy: {
      problem:
        "Startup needed to launch an eSIM product from scratch in a competitive telecom market with aggressive timelines.",
      whatIDid:
        "Owned end-to-end product cycles -- discovery, scoping, UX iteration, and launch coordination across engineering and GTM.",
      impact:
        "10K+ users in the first quarter; launch accelerated by 3 months; onboarding drop-offs reduced by 15%.",
      fullCaseUrl: "https://quirkyness.super.site/c6e2595e215a47e2b2cf698028b298e2",
    },
  },
  {
    period: "2023 - 2024",
    company: "What's Your Story",
    role: "Co-Founder",
    description:
      "Built a storytelling platform from scratch -- 100+ interviews, 5K+ followers, 50+ published stories. A side project that sharpened instincts for community, content, and narrative.",
    caseStudy: {
      problem:
        "No accessible space for everyday people to share long-form, honest stories outside polished social feeds.",
      whatIDid:
        "Built the platform from scratch, ran 100+ interviews, edited and published stories, and grew the community.",
      impact:
        "100+ interviews, 5K+ followers, 50+ published stories -- and sharper instincts for community, content, and narrative.",
    },
  },
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const active = activeIndex !== null ? timeline[activeIndex] : null;

  return (
    <section id="timeline" className="border-t border-border">
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => {
                    setActiveIndex(i);
                    setDetailsOpen(false);
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="relative pl-8 md:pl-20 group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  aria-label={`Open case study for ${item.role} at ${item.company}`}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.25, delay: i * 0.1 + 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 md:left-8 top-2 -translate-x-[4.5px] w-[10px] h-[10px] rounded-full border-2 border-foreground/40 bg-background group-hover:border-foreground transition-colors"
                  />

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

                  <h3 className="text-xl md:text-2xl text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {item.role}
                  </h3>

                  <p
                    className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75] max-w-3xl"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-1 mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 group-hover:text-foreground transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    View case study
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActiveIndex(null);
            setDetailsOpen(false);
          }
        }}
      >
        <AnimatePresence>
          {active && (
            <DialogPortal forceMount>
              <DialogOverlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-50 bg-black/40"
                />
              </DialogOverlay>
              <DialogPrimitive.Content asChild forceMount>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-[760px] -translate-x-1/2 -translate-y-1/2 bg-background border border-border rounded-md shadow-xl p-6 md:p-8 max-h-[85vh] overflow-y-auto"
                >
                  <div className="flex items-start justify-between gap-6 mb-5">
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {active.company}
                        {active.companySuffix && (
                          <span className="ml-2 normal-case tracking-normal text-muted-foreground/60">
                            {active.companySuffix}
                          </span>
                        )}
                        <span className="mx-2 text-muted-foreground/40">|</span>
                        <span>{active.period}</span>
                      </div>
                      <DialogPrimitive.Title className="text-2xl md:text-3xl text-foreground tracking-tight">
                        {active.role}
                      </DialogPrimitive.Title>
                    </div>
                    <DialogPrimitive.Close
                      className="shrink-0 w-8 h-8 -mr-2 -mt-2 inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </DialogPrimitive.Close>
                  </div>

                  <DialogPrimitive.Description asChild>
                    <p
                      className="text-[15px] text-muted-foreground leading-[1.75]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {active.description}
                    </p>
                  </DialogPrimitive.Description>

                  {active.caseStudy && (
                    <Collapsible
                      open={detailsOpen}
                      onOpenChange={setDetailsOpen}
                      className="mt-6 border-t border-border pt-5"
                    >
                      <CollapsibleTrigger
                        className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {detailsOpen ? "Hide details" : "View details"}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${detailsOpen ? "rotate-180" : ""}`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                          className="mt-5 space-y-5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {[
                            { label: "Problem", text: active.caseStudy.problem },
                            { label: "What I did", text: active.caseStudy.whatIDid },
                            { label: "Impact", text: active.caseStudy.impact },
                          ].map((b) => (
                            <div key={b.label}>
                              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 mb-1.5">
                                {b.label}
                              </div>
                              <p className="text-[14.5px] text-foreground/85 leading-[1.75]">
                                {b.text}
                              </p>
                            </div>
                          ))}

                          {active.caseStudy.fullCaseUrl && (
                            <a
                              href={active.caseStudy.fullCaseUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1.5 mt-2 text-[11px] uppercase tracking-[0.2em] text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-all duration-200 hover:scale-[1.02] origin-left"
                            >
                              View full case study
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            </a>
                          )}
                        </motion.div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPortal>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  );
};

export default TimelineSection;
