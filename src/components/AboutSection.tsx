import { motion } from "framer-motion";

const strengths = [
  { title: "Strategic Thinking", desc: "Systems-level reasoning from architecture to business strategy" },
  { title: "Data-Driven Execution", desc: "Dashboards, KPIs, and analytics that drive real decisions" },
  { title: "Cross-Functional Leadership", desc: "Aligning product, engineering, sales, and ops toward outcomes" },
  { title: "0 to 1 & Scale", desc: "Building from scratch and scaling across geographies and teams" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card/30">
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About</span>
            <h2 className="section-title mb-3">Strategy meets execution</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
              A generalist who started in architecture school, learning to think in systems 
              where constraints breed creativity. Over 4.5+ years, she has moved from a 0 to 1 eSIM product at a startup, 
              to the CEO's office at a Series-B healthtech, to consulting at Morgan Stanley in global financial services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 border-t border-border pt-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-muted-foreground text-[15px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                What stays constant: structured, data-driven, high-ownership. She is most useful 
                when things are ambiguous, cross-functional, and high-stakes. She thinks in systems, 
                communicates with clarity, and executes with urgency.
              </p>
              <p className="text-muted-foreground text-[15px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                She's the person founders and CXOs bring in when they need someone to hold the 
                strategic vision and make it operational, whether that's a 10-person startup 
                or a Fortune 500 enterprise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
