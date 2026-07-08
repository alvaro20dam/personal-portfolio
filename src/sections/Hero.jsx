/* eslint-disable react-hooks/purity */
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "TailwindCSS",
  "Docker",
  "AWS",
  "Python",
  "Django",
  "PostgreSQL",
  "Git",
  "Github Actions",
  "Jest",
];

export const Hero = ({ onOpenCVModal }) => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t("hero.badge")}
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t("hero.titlePart1")}{" "}
                <span className="text-primary glow-text">{t("hero.titleHighlight")}</span>
                <br /> {t("hero.titlePart2")} <br />
                <span className="font-serif italic font-normal text-white">
                  {t("hero.titleItalic")}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={scrollToContact}>
                {t("hero.contactBtn")} <ArrowRight className="w-5 h-5" />
              </Button>

              <div onClick={onOpenCVModal}>
                <AnimatedBorderButton>{t("hero.downloadCv")}</AnimatedBorderButton>
              </div>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">{t("hero.followMe")} </span>
              {[
                { icon: Github, href: "https://github.com/alvaro20dam" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/alvaro20dam/",
                },
                { icon: Twitter, href: "https://x.com/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-secondary/20 rounded-3xl blur-xl animate-pulse"></div>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/foto-perfil-comic.png"
                  alt="Profile Image"
                  className="w-full aspect-4/5 object-cover object-top rounded-2xl animate-fade-in animation-delay-500"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      {t("hero.availableForWork")}
                    </span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">
                    {t("hero.yearsExp")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            {t("hero.techText")}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary-foreground"
        >
          <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
