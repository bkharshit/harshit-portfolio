import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  url?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ onClick, url, className = '' }) => {
  return (
    <a
      href={url || '#'}
      target={url ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer ${className}`}
    >
      Live Project
    </a>
  );
};
