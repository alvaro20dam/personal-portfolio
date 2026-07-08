import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

const allProjectsList = [
  {
    title: "Global Human Day Analysis",
    description:
      "Análisis de cómo las personas utilizan el tiempo a nivel global, visualizado mediante una interfaz web interactiva.",
    image: "/projects/global-human-day.png",
    tags: ["HTML", "Data Science", "Data Visualization"],
    category: "Data Science",
    link: "https://alvaro20dam.github.io/global-human-day/",
    github: "https://github.com/alvaro20dam/global-human-day",
  },
  {
    title: "Augusta Global Terminal v6.0",
    description:
      "An institutional-grade financial intelligence platform featuring real-time macro analysis, equities quant scoring, portfolio construction lab, strategy vault, backtesting engine, and AI-powered institutional reports.",
    image: "/projects/augusta-terminal.png",
    tags: ["React", "Vite", "TailwindCSS", "Real-Time Data", "AI Reports"],
    category: "Finance",
    link: "https://augusta-terminal.vercel.app/",
    github: "https://github.com/alvaro20dam/augusta-terminal",
  },
  {
    title: "Child Mortality Analytics",
    description:
      "A data engineering pipeline and interactive dashboard analyzing global child mortality trends (1751-2024). Features automated Python extraction from Our World in Data, SQL modeling, and a Power BI report.",
    image: "/projects/beautiful-news-story-analytics.png",
    tags: ["Python", "SQL", "Power BI", "Data Engineering", "ETL"],
    category: "Data Science",
    link: "#",
    github: "https://github.com/alvaro20dam/Beautiful-News-Story-Analytics",
  },
  {
    title: "Global Trade Visualizer",
    description:
      "Interactive 3D visualization of international trade flows, allowing users to trace supply chain dependencies and tariff impacts.",
    image: "/projects/project3.png",
    tags: ["Three.js", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web Development",
    link: "#",
    github: "#",
  },
  {
    title: "Quant Backtesting Engine",
    description:
      "A high-performance platform for testing algorithmic trading strategies against historical tick data with sub-millisecond latency.",
    image: "/projects/project4.png",
    tags: ["Rust", "Python", "WebSockets", "React"],
    category: "Finance",
    link: "#",
    github: "#",
  },
];

const categories = ["All", "Data Science", "Web Development", "Finance"];

export const AllProjects = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? allProjectsList
    : allProjectsList.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 min-h-screen relative overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Navigation */}
        <div className="flex justify-between items-center mb-16">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-surface text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <span className="text-muted-foreground text-sm font-mono">
            {allProjectsList.length} total projects
          </span>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            All Projects
          </h1>
          <p className="text-muted-foreground">
            A comprehensive archive of my projects, ranging from data engineering
            pipelines and econometric analysis to web development and finance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 50}ms` }}
            >
              <div>
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
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
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-[10px] font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
