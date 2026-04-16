import AnimateIn from "./AnimateIn";

const articles = [
  {
    title: "Ask a Better Question. Move Toward Something.",
    link: "https://quirkyness22.substack.com/p/ask-a-better-question-move-toward",
  },
  {
    title: "Moving from a City That Grew Me",
    link: "https://quirkyness22.substack.com/p/moving-from-a-city-that-grew-me",
  },
  {
    title: "What Founders Get Wrong About 'Strategy'",
    link: "#",
  },
  {
    title: "The Real Role of a Chief of Staff",
    link: "#",
  },
];

const WritingSection = () => {
  return (
    <section id="writing" className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <span className="section-label">Writing</span>
          <h2 className="section-title mb-12">Ideas & reflections</h2>
        </AnimateIn>

        <div className="space-y-0 divide-y divide-border">
          {articles.map((article, i) => (
            <AnimateIn key={i} delay={i * 0.05}>
              <a
                href={article.link}
                target={article.link !== "#" ? "_blank" : undefined}
                rel={article.link !== "#" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between py-6 group"
              >
                <span className="text-lg md:text-xl text-foreground group-hover:opacity-60 transition-opacity">
                  {article.title}
                </span>
                <span className="text-muted-foreground group-hover:translate-x-1 transition-transform ml-4">
                  →
                </span>
              </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2}>
          <div className="mt-10">
            <a
              href="https://substack.com/@quirkyness22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Read more on Substack →
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default WritingSection;
