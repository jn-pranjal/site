import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const leadership = [
  {
    role: "Joint Secretary",
    org: "Rotaract Club",
    year: "2020–2021",
    link: "https://www.instagram.com/p/CAQA7w3AN-N/?utm_source=ig_web_copy_link",
  },
  { role: "President", org: "Interact Club", year: "2014–2015", link: null },
  { role: "Circle Leader", org: "Lean In", year: "2020–2021", link: "https://leanin.org/" },
  {
    role: "Volunteer",
    org: "Industrial Home for Visually Impaired",
    year: "2023–Present",
    link: "https://lightroom.adobe.com/shares/1ac9ae71b2f14184af79add9dd7a24f2/albums/6c2bc853e5a90f3049d8a25ae076e04e/assets/ab92625241ddc2871516f7eaae5f3592",
  },
];

const learning = [
  { name: "GrowthX", desc: "Advanced Growth & Data-led Strategy", link: "https://growthx.club/learn/644382bf66c265d7f22cb2d2" },
  { name: "McKinsey Forward Program", desc: "Problem-solving & leadership", link: "https://www.mckinsey.com/forward/overview" },
  { name: "Product Management Fellowship", desc: "NextLeap", link: "https://www.nextleap.app/" },
  { name: "CSPO", desc: "Scrum Alliance · Valid till Feb 2026", link: "https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner" },
];

const communities = [
  { name: "Toastmasters", link: "https://www.toastmasters.org/" },
  { name: "Leap Club", link: "https://www.instagram.com/leap.club/" },
  { name: "GrowthX", link: "https://growthx.club/learn/644382bf66c265d7f22cb2d2" },
  { name: "ADPList (500+ mentorship minutes)", link: "https://adplist.org/certifications/73250" },
];

const languages = ["English", "Hindi", "French", "Marathi", "Marwadi", "Arabic"];

const linkRowClass =
  "flex items-center justify-between gap-3 group transition-all duration-200 hover:pl-1 active:font-bold";

const arrowClass =
  "w-3.5 h-3.5 text-muted-foreground/60 shrink-0 transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

const CredentialsSection = () => {
  return (
    <section className="border-t border-border">
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Leadership</span>
              <div className="space-y-4 mt-4">
                {leadership.map((l, i) =>
                  l.link ? (
                    <a key={i} href={l.link} target="_blank" rel="noopener noreferrer" className={linkRowClass}>
                      <div className="min-w-0">
                        <p className="text-sm text-foreground font-medium transition-all duration-200 group-hover:text-[15px] group-hover:opacity-90 group-hover:underline underline-offset-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {l.role}
                        </p>
                        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {l.org} · {l.year}
                        </p>
                      </div>
                      <ArrowUpRight className={arrowClass} />
                    </a>
                  ) : (
                    <div key={i} className="flex items-center justify-between gap-3 opacity-90">
                      <div className="min-w-0">
                        <p className="text-sm text-foreground font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{l.role}</p>
                        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{l.org} · {l.year}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Continuous Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="section-label">Continuous Learning</span>
              <div className="space-y-4 mt-4">
                {learning.map((l, i) => (
                  <a key={i} href={l.link} target="_blank" rel="noopener noreferrer" className={linkRowClass}>
                    <div className="min-w-0">
                      <p className="text-sm text-foreground font-medium transition-all duration-200 group-hover:text-[15px] group-hover:opacity-90 group-hover:underline underline-offset-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {l.name}
                      </p>
                      <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{l.desc}</p>
                    </div>
                    <ArrowUpRight className={arrowClass} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="section-label">Community</span>
              <div className="space-y-3 mt-4">
                {communities.map((c, i) => (
                  <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className={linkRowClass}>
                    <span className="text-sm text-muted-foreground transition-all duration-200 group-hover:text-foreground group-hover:text-[15px] group-hover:underline underline-offset-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {c.name}
                    </span>
                    <ArrowUpRight className={arrowClass} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="section-label">Languages</span>
              <div className="flex flex-wrap gap-2 mt-4">
                {languages.map((l, i) => (
                  <span key={i} className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {l}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
