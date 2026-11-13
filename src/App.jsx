import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import FinanceSimulator from "./components/FinanceSimulator";
import CertificatesSection from "./components/CertificatesSection";
import HobbiesSection from "./components/HobbiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-slate-100 relative overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white">
      <Background />
      <Navbar />
      <main className="relative z-10 space-y-12">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <FinanceSimulator />
        <CertificatesSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

