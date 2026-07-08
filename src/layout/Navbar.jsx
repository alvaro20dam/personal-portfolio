import { Button } from "@/components/Button";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "#about", key: "nav.about" },
  { href: "#projects", key: "nav.projects" },
  { href: "#experience", key: "nav.experience" },
  { href: "#testimonials", key: "nav.testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          AG<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button & Language Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass hover:bg-surface text-sm text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
            title="Change Language"
          >
            <Globe size={16} />
            <span className="font-semibold uppercase">{language}</span>
          </button>
          <Button size="sm" onClick={scrollToContact}>
            {t("nav.contactBtn")}
          </Button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <span className="font-semibold uppercase text-sm">{language}</span>
          </button>
          <button
            className="p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {t(link.key)}
              </a>
            ))}
            <Button onClick={scrollToContact}>{t("nav.contactBtn")}</Button>
          </div>
        </div>
      )}
    </header>
  );
};
