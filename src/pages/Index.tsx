import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import EngineeringProfile from "@/components/portfolio/EngineeringProfile";
import TechStack from "@/components/portfolio/TechStack";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Leadership from "@/components/portfolio/Leadership";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  // Apply dark class on mount (default theme)
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (!stored || stored === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      {/* SEO meta handled via index.html */}
      <Navbar />
      <main>
        <Hero />
        <EngineeringProfile />
        <TechStack />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
