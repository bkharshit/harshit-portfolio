import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      {/* <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-8 sm:px-16 md:px-24 lg:px-32 pt-6 md:pt-8 max-w-[1600px] mx-auto">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Price
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn> */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center relative px-8 sm:px-16 md:px-24 lg:px-32 max-w-[1600px] mx-auto w-full">
        {/* Hero Heading Container - 3 lines with hierarchy */}
        {/* Mobile: absolute positioned at ~30% from top for true center-above placement */}
        {/* Desktop: normal flow, left-aligned, vertically centered with my-auto */}
        <div className="absolute md:relative top-[30%] md:top-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0 w-full overflow-hidden z-10 md:z-20 pl-0 md:pl-10 md:my-auto flex flex-col items-center md:items-start text-center md:text-left">
          <FadeIn delay={0.15} y={40}>
            <h1 className="flex flex-col items-center md:items-start text-center md:text-left select-none">
              <span className="text-[7.5vw] sm:text-[4vw] md:text-[5vw] lg:text-[4vw] font-bold uppercase tracking-widest text-[#D7E2EA]/75 leading-tight">
                HI,
              </span>
              <span className="text-[7.5vw] sm:text-[4vw] md:text-[5vw] lg:text-[4vw] font-bold uppercase tracking-widest text-[#D7E2EA]/75 leading-tight mb-2">
                I&apos;M
              </span>
              <span className="hero-heading font-black uppercase tracking-tight leading-[0.88] text-[13vw] sm:text-[10vw] md:text-[9.5vw] lg:text-[9vw]">
                HARSHIT
              </span>
            </h1>
          </FadeIn>
        </div>

        {/* Hero Portrait - Below text on mobile, right-aligned on desktop */}
        <div className="absolute top-[56%] sm:top-[54%] md:top-1/2 left-1/2 md:left-[68%] lg:left-[70%] -translate-x-1/2 -translate-y-1/2 z-20 md:z-10 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[440px] pointer-events-auto">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="w-full flex justify-center"
            >
              <img
                src="/harshit-portrait-transparent.png"
                alt="Harshit BK - Software Engineer at Lowe's"
                className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none select-none"
              />
            </Magnet>
          </FadeIn>
        </div>

        {/* Bottom Bar - Centered Scroll Indicator */}
        <div className="absolute bottom-20 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center z-20 pointer-events-auto">
          <FadeIn delay={0.5} y={20}>
            <button
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-300 cursor-pointer group"
              aria-label="Scroll down"
            >
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em]">Scroll</span>
              <div className="w-5 h-9 border-2 border-[#D7E2EA]/40 group-hover:border-[#D7E2EA]/80 rounded-full flex justify-center p-1 transition-colors duration-300">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 bg-[#D7E2EA] rounded-full"
                />
              </div>
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
