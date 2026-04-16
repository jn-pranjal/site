import { motion } from "framer-motion";

const leadership = [
  { role: "Joint Secretary", org: "Rotaract Club", year: "2020–2021" },
  { role: "President", org: "Interact Club", year: "2014–2015" },
  { role: "Circle Leader", org: "Lean In", year: "2020–2021" },
  { role: "Volunteer", org: "Kumudben Dwarkadas Vora Industrial Home for Visually Impaired", year: "2023–Present" },
];

const learning = [
  { name: "GrowthX", desc: "Advanced Growth & Data-led Strategy" },
  { name: "McKinsey Forward Program", desc: "Problem-solving & leadership" },
  { name: "Product Management Fellowship", desc: "NextLeap" },
  { name: "CSPO", desc: "Scrum Alliance · Valid till Feb 2026" },
];

const communities = ["Toastmasters", "Leap Club", "GrowthX", "ADPList (500+ mentorship minutes)"];
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
                  <div key={i}>
                    <p className="text-sm text-foreground font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{l.role}</p>
                    <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{l.org} · {l.year}</p>
                  </div>
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
                  <div key={i}>
                    <p className="text-sm text-foreground font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{l.name}</p>
                    <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{l.desc}</p>
                  </div>
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
                  <p key={i} className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{c}</p>
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
