import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const AllProjects = ({ onBack }) => {
  const { t } = useLanguage();
  const allProjectsList = t("projects.items");
  const texts = t("projects.allProjects");
  const categoriesObj = t("projects.allProjects.categories");

  // Si `categoriesObj` es string (fallback por error en dict), asignamos un objeto vacío
  const categoriesMap = typeof categoriesObj === 'object' ? categoriesObj : {};
  const categoryKeys = Object.keys(categoriesMap);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");

  const filteredProjects = selectedCategoryKey === "all"
    ? allProjectsList
    : (Array.isArray(allProjectsList) ? allProjectsList.filter(
        (p) => p.category === categoriesMap[selectedCategoryKey] || p.category === (selectedCategoryKey === 'fullstack' ? 'Full Stack' : selectedCategoryKey === 'dataViz' ? 'Data Viz' : selectedCategoryKey === 'dataScience' ? 'Data Science' : 'AI')
      ) : []);

  // Use a heuristic or strict map to filter
  const getFiltered = () => {
    if (!Array.isArray(allProjectsList)) return [];
    if (selectedCategoryKey === "all") return allProjectsList;
    
    // Map standard keys to categories used in the data array
    const catMap = {
      fullstack: "Full Stack",
      ai: "AI",
      dataViz: "Data Viz",
      dataScience: "Data Science"
    };

    return allProjectsList.filter((p) => p.category === catMap[selectedCategoryKey]);
  };

  const finalProjects = getFiltered();

  return (
    <section className="py-24 min-h-screen relative overflow-hidden bg-background">
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
            {texts.backBtn}
          </button>
          <span className="text-muted-foreground text-sm font-mono">
            {Array.isArray(allProjectsList) ? allProjectsList.length : 0} total projects
          </span>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            {texts.titlePart1} {texts.titleItalic}
          </h1>
          <p className="text-muted-foreground">
            {texts.description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCategoryKey(key)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                selectedCategoryKey === key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {categoriesMap[key]}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 50}ms` }}
            >
              <div>
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/projects/project1.png"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {(project.liveUrl || project.githubUrl) && (
                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
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
                  {Array.isArray(project.tags) && project.tags.map((tag, tagIdx) => (
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
