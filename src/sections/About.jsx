import { Code2, Brain, LineChart, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const highlightIcons = [LineChart, Brain, Code2, Globe];

export const About = () => {
  const { t } = useLanguage();
  const highlights = t("about.highlights");

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                {t("about.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              {t("about.titlePart1")}
              <span className="font-serif italic font-normal text-white">
                {" "}
                {t("about.titleItalic")}
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                {t("about.quote")}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-col-2 gap-6">
            {Array.isArray(highlights) && highlights.map((item, idx) => {
              const Icon = highlightIcons[idx];
              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
