import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useLanguage } from "@/context/LanguageContext";

export const Projects = ({ onViewAll }) => {
  const { t } = useLanguage();
  const projects = t("projects.items");

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider uppercase text-primary mb-4 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            {t("projects.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("projects.titlePart1")}
            <span className="font-serif italic font-normal text-white">
              {" "}
              {t("projects.titleItalic")}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Array.isArray(projects) && projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 border border-border/40 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image & Status Badge */}
              <div className="relative overflow-hidden aspect-video bg-surface/50">
                <img
                  src={project.image || "/projects/project1.png"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual si la imagen local aún no existe
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                />

                {/* Status Badge */}
                {project.badgeStatus && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                      project.badgeStatus === "Live" || project.badgeStatus === "En Vivo"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : project.badgeStatus === "In Development" || project.badgeStatus === "En Desarrollo"
                        ? "bg-primary/20 text-primary border-primary/30"
                        : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                    }`}>
                      ● {project.badgeStatus}
                    </span>
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                      title="Visit Live"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {Array.isArray(project.tags) && project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={onViewAll}>
            {t("projects.allProjectsBtn")}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
