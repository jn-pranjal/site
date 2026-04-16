import { motion } from "framer-motion";

const ideas = [
  "Ask a Better Question. Move Toward Something.",
  "Moving from a City That Grew Me",
  "What Founders Get Wrong About 'Strategy'",
  "The Real Role of a Chief of Staff",
  "Why Generalists Win in Ambiguity",
  "Data Without Decisions Is Just Noise",
  "Building in Public: Lessons from 0→1",
  "The Operator's Edge in Early-Stage Startups",
];

const WritingSection = () => {
  return (
    <section id="writing" className="border-t border-border overflow-hidden">
      <div className="py-12 md:py-16">
        <div className="px-6 md:px-16 lg:px-24 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <span className="section-label">Ideas & Reflections</span>
              <h2 className="text-2xl md:text-3xl text-foreground tracking-tight">Thinking out loud</h2>
            </div>
            <a
              href="https://substack.com/@quirkyness22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read on Substack →
            </a>
          </motion.div>
        </div>

        {/* Ticker */}
        <div className="relative">
          <div className="animate-ticker flex whitespace-nowrap">
            {[...ideas, ...ideas].map((idea, i) => (
              <a
                key={i}
                href={i < ideas.length 
                  ? (i === 0 ? "https://quirkyness22.substack.com/p/ask-a-better-question-move-toward" : 
                     i === 1 ? "https://quirkyness22.substack.com/p/moving-from-a-city-that-grew-me" : "#")
                  : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mx-4 px-6 py-3 border border-border hover:border-foreground/30 transition-colors rounded-sm group"
              >
                <span className="text-sm text-foreground group-hover:text-accent transition-colors whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {idea}
                </span>
                <span className="text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
