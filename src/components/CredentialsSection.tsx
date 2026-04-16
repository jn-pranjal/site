import { motion } from "framer-motion";

const leadership = [
  { role: "Joint Secretary", org: "Rotaract Club", year: "2020–2021", link: "https://www.rotary.org/en/get-involved/rotaract-clubs" },
  { role: "President", org: "Interact Club", year: "2014–2015", link: "https://www.rotary.org/en/get-involved/interact-clubs" },
  { role: "Circle Leader", org: "Lean In", year: "2020–2021", link: "https://leanin.org/" },
  { role: "Volunteer", org: "Industrial Home for Visually Impaired", year: "2023–Present", link: "https://www.linkedin.com/in/pranjalhjain/" },
];

const learning = [
  { name: "GrowthX", desc: "Advanced Growth & Data-led Strategy", link: "https://www.growthx.club/" },
  { name: "McKinsey Forward Program", desc: "Problem-solving & leadership", link: "https://www.mckinsey.com/forward/overview" },
  { name: "Product Management Fellowship", desc: "NextLeap", link: "https://www.nextleap.app/" },
  { name: "CSPO", desc: "Scrum Alliance · Valid till Feb 2026", link: "https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner" },
];

const communities = [
  { name: "Toastmasters", link: "https://www.toastmasters.org/" },
  { name: "Leap Club", link: "https://www.leapclub.io/" },
  { name: "GrowthX", link: "https://www.growthx.club/" },
  { name: "ADPList (500+ mentorship minutes)", link: "https://adplist.org/" },
];

const languages = ["English", "Hindi", "French", "Marathi", "Marwadi", "Arabic"];

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
                {leadership.map((l, i) => (
                  <a key={i} href={l.link} target="_blank" rel="noopener noreferrer" className="block group">
                    <p className="text-sm text-foreground font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{l.role}</p>
                    <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{l.org} · {l.year}</p>
                  </a>
                ))}
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
                  <a key={i} href={l.link} target="_blank" rel="noopener noreferrer" className="block group">
                    <p className="text-sm text-foreground font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{l.name}</p>
                    <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{l.desc}</p>
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
                  <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {c.name}
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
