import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const strengths = [
  { title: "Strategic Thinking", desc: "Systems-level reasoning from architecture to business strategy" },
  { title: "Data-Driven Execution", desc: "Dashboards, KPIs, and analytics that drive real decisions" },
  { title: "Cross-Functional Leadership", desc: "Aligning product, engineering, sales, and ops toward outcomes" },
  { title: "0 to 1 & Scale", desc: "Building from scratch and scaling across geographies and teams" },
];

const intro =
  "Started in architecture school, learning to think in systems where constraints breed creativity. Over 4.5+ years, she has moved from a 0 to 1 eSIM product at a startup, to the CEO's office at a Series-B healthtech, to consulting at Morgan Stanley in global financial services.";

const closing = [
  "What stays constant: structured, data-driven, high-ownership. She is most useful when things are ambiguous, cross-functional, and high-stakes. She thinks in systems, communicates with clarity, and executes with urgency.",
  "She's the person founders and CXOs bring in when they need someone to hold the strategic vision and make it operational, whether that's a 10-person startup or a Fortune 500 enterprise.",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card/30">
      <div className="px-6 md:px-16 lg:px-24 py-[62px] md:py-[88px]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About</span>
            <h2 className="section-title mb-6">Strategy meets execution</h2>
            <p
              className="text-muted-foreground text-base md:text-[17px] leading-[1.85] max-w-3xl mb-14"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {intro}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
            {strengths.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border p-6 hover:border-foreground/20 transition-colors group"
              >
                <h3 className="text-foreground text-lg mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl"
          >
            {closing.map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground text-base md:text-[17px] leading-[1.85]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mt-14"
          >
            <p
              className="text-[13px] md:text-[14px] text-muted-foreground/80 leading-snug mt-5 mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              There's more behind the work than what fits here.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mt-7 text-sm uppercase tracking-[0.18em] text-foreground border-b border-foreground/30 pb-1 hover:border-foreground hover:opacity-90 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read my story
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
