import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const metrics = [
  { value: "9,000+", label: "Employees Managed" },
  { value: "25%", label: "Sales Efficiency ↑" },
  { value: "10K+", label: "Users (0 to 1 Launch)" },
  { value: "30%", label: "Faster Decisions" },
  { value: "15%", label: "Cost Savings" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background pointer-events-none" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-28 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 border border-border px-4 py-1.5 rounded-full text-xs tracking-wide text-muted-foreground">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "hsl(142, 71%, 45%)" }}
              />
              Open to full-time roles · Available May 2026 · Mumbai · Open to relocation
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Chief of Staff · Work Generalist · Growth Strategist
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight"
              >
                Pranjal Jain
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Growth and Strategy generalist with an architect's instinct for systems. Experience ranges from
                automating workflows for 9,000+ employees at Morgan Stanley to driving 25% efficiency gains at a
                Series-B healthtech startup. I bring structure to ambiguity, own outcomes end to end, and help
                leadership teams operate with clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#timeline"
                  className="bg-foreground text-primary-foreground px-8 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity rounded-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Career Journey
                </a>
                <a
                  href="https://www.canva.com/design/DAGxVwMYY64/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-foreground/20 text-foreground px-8 py-3 text-xs uppercase tracking-[0.2em] hover:border-foreground transition-colors rounded-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Let's Talk
                </a>
              </motion.div>
            </div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative">
                <img
                  src={profileImg}
                  alt="Pranjal Jain"
                  className="w-64 h-72 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 border border-foreground/10 rounded-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-width metrics bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 border-t border-b border-border bg-card/50"
      >
        <div className="px-6 md:px-16 lg:px-24 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-none mb-1">
                  {m.value}
                </p>
                <p
                  className="text-[11px] text-muted-foreground tracking-wide uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
