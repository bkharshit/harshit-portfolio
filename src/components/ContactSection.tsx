import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';

// SVG Icons for precision matching
const EmailIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] flex flex-col items-center justify-between px-6 sm:px-10 py-20 overflow-hidden"
    >
      {/* Central Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-4xl w-full text-center my-auto">
        {/* Main Heading matching AboutSection .hero-heading style */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,6vw,120px)] select-none">
            Get in Touch
          </h2>
        </FadeIn>

        {/* Spacing between heading and text */}
        <div className="h-8 sm:h-10 md:h-12" />

        {/* Copy Text using AnimatedText for identical scroll animation & typography */}
        <FadeIn delay={0.2} y={30} className="w-full flex justify-center">
          <AnimatedText text="Have an opportunity you want to discuss about or just wanted to say Hi? I'd love to hear from you." />
        </FadeIn>

        {/* Spacing between text and cards */}
        <div className="h-10 sm:h-12 md:h-14" />

        {/* Illuminating Glassmorphic Cards Row */}
        <FadeIn delay={0.4} y={30} className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl">
            {/* Email Glass Card */}
            <a
              href="mailto:bkharshit27@gmail.com"
              className="relative overflow-hidden rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 border border-white/25 bg-gradient-to-br from-white/15 via-white/[0.05] to-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(215,226,234,0.15),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 hover:border-white/50 hover:shadow-[0_0_30px_rgba(215,226,234,0.35),inset_0_1px_2px_rgba(255,255,255,0.8)] active:scale-95 group"
            >
              {/* Shimmering light sweep reflection */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-[#D7E2EA] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.15)]">
                <EmailIcon />
              </div>

              <span className="relative z-10 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide text-[#D7E2EA] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                bkharshit27@gmail.com
              </span>
            </a>

            {/* LinkedIn Glass Card */}
            <a
              href="https://www.linkedin.com/in/bkharshit/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 border border-white/25 bg-gradient-to-br from-white/15 via-white/[0.05] to-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(215,226,234,0.15),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 hover:border-white/50 hover:shadow-[0_0_30px_rgba(215,226,234,0.35),inset_0_1px_2px_rgba(255,255,255,0.8)] active:scale-95 group"
            >
              {/* Shimmering light sweep reflection */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-[#D7E2EA] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.15)]">
                <LinkedinIcon />
              </div>

              <span className="relative z-10 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide text-[#D7E2EA] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                linkedin.com/in/bkharshit
              </span>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Footer Links */}
      <FadeIn delay={0.6} y={10} className="w-full mt-3 pt-3">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#D7E2EA]/60 font-medium tracking-wider uppercase">
          <a
            href="https://github.com/bkharshit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bkharshit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/bkharshit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LeetCode
          </a>
          <a
            href="mailto:bkharshit27@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/harshitbk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </FadeIn>
    </section>
  );
};
