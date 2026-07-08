import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Global Human Day Analysis",
    description:
      "Análisis de cómo las personas utilizan el tiempo a nivel global, visualizado mediante una interfaz web interactiva.",
    image: "/projects/global-human-day.gif",
    tags: ["HTML", "Data Science", "Data Visualization"],
    link: "https://alvaro20dam.github.io/global-human-day/",
    github: "https://github.com/alvaro20dam/global-human-day",
  },
  {
    title: "Augusta Global Terminal v6.0",
    description:
      "An institutional-grade financial intelligence platform featuring real-time macro analysis, equities quant scoring, portfolio construction lab, strategy vault, backtesting engine, and AI-powered institutional reports.",
    image: "/projects/augusta-terminal.png",
    tags: ["React", "Vite", "TailwindCSS", "Real-Time Data", "AI Reports"],
    link: "https://augusta-terminal.vercel.app/",
    github: "https://github.com/alvaro20dam/augusta-terminal",
  },
  {
    title: "Child Mortality Analytics",
    description:
      "A data engineering pipeline and interactive dashboard analyzing global child mortality trends (1751-2024). Features automated Python extraction from Our World in Data, SQL modeling, and a Power BI report visualizing demographics and policy impacts.",
    image: "/projects/beautiful-news-story-analytics.png",
    tags: ["Python", "SQL", "Power BI", "Data Engineering", "ETL"],
    link: "#",
    github: "https://github.com/alvaro20dam/Beautiful-News-Story-Analytics",
  },
  {
    title: "Global Trade Visualizer",
    description:
      "Interactive 3D visualization of international trade flows, allowing users to trace supply chain dependencies and tariff impacts.",
    image: "/projects/project3.png",
    tags: ["Three.js", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Quant Backtesting Engine",
    description:
      "A high-performance platform for testing algorithmic trading strategies against historical tick data with sub-millisecond latency.",
    image: "/projects/project4.png",
    tags: ["Rust", "Python", "WebSockets", "React"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, bridging the gap between rigorous
            economic theory and scalable software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Teaser */}
        <div className="glass rounded-2xl p-8 border border-dashed border-border/50 text-center animate-fade-in animation-delay-300 mt-8">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
              <span className="text-primary text-xl">+</span>
            </div>
            <h4 className="text-lg font-semibold text-muted-foreground">
              More Projects Coming Soon
            </h4>
            <p className="text-sm text-muted-foreground/70">
              I'm currently working on new projects involving AI agents,
              econometric modeling, and quantitative analysis. Stay tuned.
            </p>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

