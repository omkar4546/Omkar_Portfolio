import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/ProjectsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theam toggle */}
      <ThemeToggle />
      {/*  Star Background */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* Skillsection */}
      <SkillsSection />
      {/* Project Section */}
      <ProjectsSection />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
