import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Frontend Development');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    scrollToContact();
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050608] text-[#F3F4F6] relative selection:bg-sky-500 selection:text-white">
      {/* Custom desktop cursor */}
      <CustomCursor />

      {/* Sticky frosted glass navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onContactClick={scrollToContact}
          onExploreWorkClick={scrollToProjects}
        />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Services onSelectService={handleSelectService} />

        <Contact selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Footer */}
      <Footer onBackToTop={handleBackToTop} />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}
