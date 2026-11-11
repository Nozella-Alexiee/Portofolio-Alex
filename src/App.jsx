import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoAbout from './components/BentoAbout';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import FinanceSimulator from './components/FinanceSimulator';
import JourneySection from './components/JourneySection';
import CertificatesSection from './components/CertificatesSection';
import HobbiesSection from './components/HobbiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 bg-grid-pattern relative selection:bg-blue-600 selection:text-white">
      {/* Top subtle blue radial glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 blue-glow-radial pointer-events-none -z-0 opacity-70" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-0">
        <Hero />
        <BentoAbout />
        <ProjectsSection />
        <SkillsSection />
        <FinanceSimulator />
        <JourneySection />
        <CertificatesSection />
        <HobbiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
