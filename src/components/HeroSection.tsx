import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <img
            src={profileImg}
            alt="Pranjal Jain"
            width={512}
            height={512}
            className="w-28 h-28 rounded-full mx-auto object-cover grayscale"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-label"
        >
          Chief of Staff &nbsp;·&nbsp; Startup Strategist &nbsp;·&nbsp; Operator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] font-bold tracking-tight"
        >
          Pranjal Jain
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-16 h-px bg-foreground mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-light"
        >
          I help founders bring clarity, structure, and execution to scale.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Strategy & Operations professional with 5+ years across product consulting,
          CEO's office, and enterprise PMO — spanning healthtech, telecom, and global financial services.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-12"
        >
          Built systems for 9,000+ employees at Morgan Stanley &nbsp;|&nbsp; Drove 25% efficiency gains at a Series-B healthtech startup
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="bg-foreground text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
          >
            View Work
          </a>
          <a
            href="https://www.canva.com/design/DAGxVwMYY64/view"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground text-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
