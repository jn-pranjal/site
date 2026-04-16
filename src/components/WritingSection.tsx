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
    title: "What Founders Get Wrong About "Strategy"",
    link: "#",
  },
  {
    title: "Why Most Ops Teams Fail at Execution",
    link: "#",
  },
  {
    title: "The Real Role of a Chief of Staff",
    link: "#",
  },
  {
    title: "Scaling from 0→1 vs 1→10",
    link: "#",
  },
];

const WritingSection = () => {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <span className="section-label">Writing</span>
        <h2 className="section-title mb-12">Ideas & reflections</h2>

        <div className="space-y-0 divide-y divide-border">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.link}
              target={article.link !== "#" ? "_blank" : undefined}
              rel={article.link !== "#" ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between py-6 group"
            >
              <span className="font-heading text-lg md:text-xl text-foreground group-hover:text-accent transition-colors">
                {article.title}
              </span>
              <span className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all ml-4">
                →
              </span>
            </a>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default WritingSection;
