import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const outsideOffice = [
  "Meeting new people and learning through conversations",
  "Reading about psychology, productivity, and systems thinking",
  "Hosting or participating in reflection-led and vision-oriented workshops",
  "Travelling solo",
  "Staying active through cycling, aerial silk, and surfing",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-16 lg:px-24 pt-32 pb-20"
      >
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-14"
          >
            <span className="section-label">About</span>
            <h1 className="section-title mb-4">About Me</h1>
            <p
              className="text-muted-foreground text-base md:text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Strategy, systems, and execution
            </p>
          </motion.header>

          {/* Opening paragraph */}
          <motion.p
            {...fadeUp}
            className="text-foreground/90 text-lg md:text-xl leading-[1.7] mb-20"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I've worked across startups and large enterprises, but the common thread has been the same — stepping into ambiguous, high-stakes problems and bringing structure, clarity, and execution.
          </motion.p>

          {/* Who am I */}
          <motion.section {...fadeUp} className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              💡 Who am I?
            </h2>
            <div
              className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-[1.75]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p>
                Think of me as a strategy-driven problem solver who enjoys working in complex, multi-stakeholder environments and bringing structure to ambiguity with holistic experience across Data Analytics, Space Management, Project Management, and Strategy & Growth Consulting.
              </p>
              <p>
                I operate at the intersection of data, systems, and business, with a strong inclination toward designing scalable processes, improving decision-making, and enabling teams to work more effectively.
              </p>
            </div>
          </motion.section>

          {/* What do I do */}
          <motion.section {...fadeUp} className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              🚀 What do I do?
            </h2>
            <div
              className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-[1.75]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p>
                I currently work as a Consultant at Morgan Stanley, where I support enterprise teams across space management, data reporting, process automation, and stakeholder management. My role involves building structured reporting mechanisms, designing dashboards and metrics, streamlining workflows.
              </p>
              <p>
                A core part of my work is automating recurring reports, standardising space and capacity data, or improving visibility for leadership through reliable analytics. I work closely with cross-functional teams to ensure alignment between business needs, operational constraints, and execution on the ground.
              </p>
              <p>
                Previously, I've worked in Founder's Office and Product Consulting roles, driving 0→1 initiatives, digital transformation, and growth strategy for startups. From leading product discovery sprints and user research to building pilots for new revenue models and operational systems, my experience spans both fast-moving startup environments and structured consulting frameworks.
              </p>
              <p>
                I've also co-founded a venture, which gave me hands-on exposure to monetisation, scalability, and the realities of building from scratch — shaping how I approach strategy with pragmatism and execution discipline.
              </p>
            </div>
          </motion.section>

          {/* Outside the office */}
          <motion.section {...fadeUp} className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              ⚽ Outside the office?
            </h2>
            <p
              className="text-muted-foreground text-base md:text-[17px] leading-[1.75] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              When I'm not working through dashboards or process frameworks, you'll likely find me:
            </p>
            <ul
              className="space-y-3 text-muted-foreground text-base md:text-[17px] leading-[1.75]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {outsideOffice.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Always Learning */}
          <motion.section {...fadeUp} className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              📚 Always Learning
            </h2>
            <p
              className="text-muted-foreground text-base md:text-[17px] leading-[1.75]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I'm deeply curious about how organisations scale, how decisions are made at different levels, and how data and automation can be leveraged thoughtfully to drive efficiency and impact. I enjoy continuously refining my thinking through reading, experimentation, and real-world problem solving.
            </p>
          </motion.section>

          {/* Contact */}
          <motion.section {...fadeUp} className="border-t border-border pt-12">
            <span className="section-label">Contact</span>
            <p
              className="text-muted-foreground text-base md:text-[17px] leading-[1.75]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              If you're interested in conversations around business growth, data, strategy consulting, design, automation, or impact, feel free to reach at{" "}
              <a
                href="mailto:ar.pranjaljain@gmail.com"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                ar.pranjaljain@gmail.com
              </a>
              .
            </p>
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default About;
