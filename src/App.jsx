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
    <div className="min-h-screen bg-[#080c16] text-slate-100 selection:bg-blue-600 selection:text-white antialiased">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
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

      <Footer />
    </div>
  );
}
