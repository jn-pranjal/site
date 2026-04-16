import AnimateIn from "./AnimateIn";

const positions = [
  { role: "Joint Secretary", org: "Rotaract Club", year: "2020–2021" },
  { role: "Member", org: "Toastmasters Club", year: "2020–2021" },
  { role: "President", org: "Interact Club", year: "2014–2015" },
  { role: "Member", org: "Leap Club", year: "2020–2021" },
  { role: "Volunteer", org: "Smt. Kumudben Dwarkadas Vora Industrial Home for Visually Impaired", year: "May 2023 – Present" },
  { role: "Circle Leader", org: "Lean In", year: "2020–2021" },
];

const certifications = [
  { name: "GrowthX", desc: "Advanced Growth & Data-led Strategy" },
  { name: "McKinsey Forward Program", desc: "" },
  { name: "Product Management Fellowship", desc: "NextLeap" },
  { name: "CSPO", desc: "Scrum Alliance · valid till Feb 2026" },
];

const languages = ["English", "Hindi", "French", "Marathi", "Marwadi", "Arabic"];

const CredentialsSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Positions of Responsibility */}
        <div className="mb-20">
          <AnimateIn>
            <span className="section-label">Positions of Responsibility</span>
            <h2 className="section-title mb-12">Leadership & community</h2>
          </AnimateIn>
          <div className="space-y-0 divide-y divide-border">
            {positions.map((p, i) => (
              <AnimateIn key={i} delay={i * 0.04}>
                <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-foreground text-sm">
                    <span className="font-medium">{p.role}</span>
                    <span className="text-muted-foreground"> — {p.org}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{p.year}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <AnimateIn>
            <span className="section-label">Certifications</span>
            <h2 className="section-title mb-12">Continuous learning</h2>
          </AnimateIn>
          <div className="space-y-0 divide-y divide-border">
            {certifications.map((c, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-foreground text-sm font-medium">{c.name}</p>
                  {c.desc && <p className="text-xs text-muted-foreground">{c.desc}</p>}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Mentorship */}
        <div className="mb-20">
          <AnimateIn>
            <span className="section-label">Mentorship</span>
            <h2 className="section-title mb-8">Active learner</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl">
              Engaged with mentors via ADPList. Completed 500+ mentorship minutes.
              Recognized for active learning and consistent growth.
            </p>
          </AnimateIn>
        </div>

        {/* Languages */}
        <div>
          <AnimateIn>
            <span className="section-label">Languages</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-foreground text-sm tracking-wide">
              {languages.join(" · ")}
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
