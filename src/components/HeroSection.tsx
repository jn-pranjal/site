import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const metrics = [
  { value: "9,000+", label: "Employees impacted" },
  { value: "25%", label: "Efficiency gains" },
  { value: "10K+", label: "Users acquired (0→1)" },
  { value: "30%", label: "Faster decisions" },
];

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center section-padding pt-24 pb-10 min-h-[90vh]">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
            >
              Chief of Staff &nbsp;·&nbsp; Startup Strategist &nbsp;·&nbsp; Operator
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.08] font-bold tracking-tight"
            >
              Pranjal Jain
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed font-light"
            >
              I help founders bring clarity, structure, and execution to scale — across strategy, operations, and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="bg-foreground text-primary-foreground px-7 py-2.5 text-xs uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
              >
                View Work
              </a>
              <a
                href="https://www.canva.com/design/DAGxVwMYY64/view"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground text-foreground px-7 py-2.5 text-xs uppercase tracking-[0.15em] hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden md:block"
          >
            <img
              src={profileImg}
              alt="Pranjal Jain"
              width={512}
              height={512}
              className="w-36 h-36 rounded-full object-cover grayscale"
            />
          </motion.div>
        </div>

        {/* Impact metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="border-t border-border pt-8"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Quantitative Impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-none mb-1">
                  {m.value}
                </p>
                <p className="text-xs text-muted-foreground tracking-wide">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
