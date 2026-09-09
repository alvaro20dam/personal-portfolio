import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { icon: Github, href: "https://github.com/alvaro20dam", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/alvaro20dam/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/", label: "Twitter" },
];

const staticLinks = [
  { href: "#about", labelKey: "about" },
  { href: "#projects", labelKey: "products" },
  { href: "#experience", labelKey: "experience" },
  { href: "#contact", labelKey: "contactBtn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center gap-2 justify-center md:justify-start text-xl font-bold tracking-tight">
              <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-mono">
                VL
              </span>
              <span>
                Valora<span className="text-primary font-normal">Labs</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              © {currentYear} {t("footer.copyright")}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {staticLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(`nav.${link.labelKey}`)}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
