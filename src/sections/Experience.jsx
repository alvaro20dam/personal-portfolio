const experiences = [
  {
    title: "Lead AI Researcher (Economics)",
    company: "OpenMacro Labs",
    duration: "Jan 2023 - Present",
    description:
      "Leading the development of Large Language Models (LLMs) specialized in interpreting Federal Reserve communications. Architecting the inference pipeline and deploying models that predict market volatility with 15% higher accuracy than traditional baselines.",
    technologies: ["Python", "PyTorch", "LangChain", "Rust"],
    current: true,
  },
  {
    title: "Senior Quantitative Developer",
    company: "Vanguard Analytics",
    duration: "Jun 2020 - Dec 2022",
    description:
      "Bridged the gap between the data science team and engineering. Built a high-frequency data ingestion engine for stock market tick data and developed the React-based internal dashboard used by portfolio managers.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    current: false,
  },
  {
    title: "Economic Data Engineer",
    company: "Beacon Economics",
    duration: "Jan 2019 - May 2020",
    description:
      "Responsible for migrating legacy econometric models from Stata/Excel to modern Python workflows. Automated the generation of weekly trade reports, reducing manual labor by 20 hours per week.",
    technologies: ["Python", "Pandas", "Airflow", "Docker"],
    current: false,
  },
  {
    title: "Junior Econometrician",
    company: "Global Policy Institute",
    duration: "Mar 2017 - Dec 2018",
    description:
      "Conducted statistical analysis on international trade flows. Assisted senior economists in cleaning large datasets and visualizing tariff impacts for public policy papers.",
    technologies: ["R", "SQL", "Tableau", "Excel"],
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
