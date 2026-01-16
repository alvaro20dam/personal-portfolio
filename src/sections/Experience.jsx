const experiences = [
  {
    title: "Technical Support Engineer",
    company: "GroTool, LLC",
    duration: "Apr 2021 - Present",
    description:
      "Providing specialized engineering support for a cloud-based agricultural management platform. Leveraging SQL and Python scripts to validate complex payroll data and generate custom labor reports for the US sector. Utilizing AWS to monitor real-time data flows and troubleshooting React-based frontend interfaces.",
    technologies: ["React", "Python", "SQL", "AWS"], // Python added here
    current: true,
  },
  {
    title: "Fintech & Digital Asset Analyst",
    company: "Comunicaciones Fintech",
    duration: "Oct 2017 - Oct 2020",
    description:
      "Led the strategic analysis of international financial markets to optimize corporate resources. Specialized in the emerging blockchain ecosystem, managing technical infrastructure for Proof-of-Work (mining) and Proof-of-Stake validation. Audited and interacted with Smart Contracts to execute yield farming strategies and manage digital asset portfolios.",
    technologies: [
      "Blockchain",
      "Smart Contracts",
      "DeFi Protocols",
      "Technical Analysis",
    ],
    current: false,
  },
  {
    title: "Operations & Cost Data Manager",
    company: "Sercoinfal, C.A.",
    duration: "Dec 2010 - Nov 2013",
    description:
      "Directed the resource optimization strategy for a conglomerate of 20+ industrial locations. Architected and maintained a centralized database to track raw materials and inventory flow. Utilized advanced Excel formulas and data modeling to identify inefficiencies, directly increasing the company's profit margins.",
    technologies: [
      "Excel",
      "Database Management",
      "Cost Optimization",
      "Logistics",
    ],
    current: false,
  },
  {
    title: "Macroeconomic Statistics Analyst",
    company: "Banco Central de Venezuela",
    duration: "Jun 2008 - Dec 2009",
    description:
      "Contributed to the calculation of the National GDP by processing large-scale datasets from the mining industry. Developed automated workflows using Excel VBA and Macros to streamline statistical analysis. Designed complex pivot tables and data models to support the 2008 monetary reconversion strategy.",
    technologies: [
      "Excel VBA",
      "Advanced Statistics",
      "Macroeconomics",
      "Pivot Tables",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4-xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A snapshot of my professional journey, showcasing roles that have
            shaped my skills and expertise.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-tranparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
