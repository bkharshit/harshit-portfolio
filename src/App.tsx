import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      <HeroSection />
      {/* <MarqueeSection /> */}
      <AboutSection />
      <ContactSection />
      {/* <ServicesSection /> */}
      {/* <ProjectsSection /> */}
    </main>
  );
};

export default App;
