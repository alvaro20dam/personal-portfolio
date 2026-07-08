import { useState } from "react";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { RequestCVModal } from "@/components/RequestCVModal";
import { AllProjects } from "@/pages/AllProjects";

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("home"); // "home" | "all-projects"

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentView === "all-projects") {
    return (
      <div className="min-h-screen overflow-x-hidden bg-background">
        <AllProjects onBack={() => navigateTo("home")} />
        <Footer />
        <RequestCVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <About />
        <Projects onViewAll={() => navigateTo("all-projects")} />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <RequestCVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;
