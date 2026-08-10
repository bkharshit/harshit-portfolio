import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact') || document.getElementById('about');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'mailto:bkharshit27@gmail.com';
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center rounded-full text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer overflow-hidden backdrop-blur-xl border border-white/25 bg-gradient-to-br from-white/15 via-white/[0.05] to-white/10 shadow-[0_0_25px_rgba(215,226,234,0.2),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 hover:border-white/50 hover:shadow-[0_0_40px_rgba(215,226,234,0.45),inset_0_1px_2px_rgba(255,255,255,0.8)] active:scale-95 group ${className}`}
    >
      {/* Subtle light sweep reflection */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      <span className="relative z-10 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
        Contact Me
      </span>
    </button>
  );
};
