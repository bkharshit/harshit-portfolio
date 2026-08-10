import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  // Split text into paragraphs by double newlines
  const paragraphs = text.split('\n\n').filter(p => p.trim() !== '');

  return (
    <div className={`flex flex-col gap-6 max-w-[720px] w-full px-4 ${className}`}>
      {paragraphs.map((para, idx) => (
        <ParagraphItem key={idx} text={para} />
      ))}
    </div>
  );
};

const ParagraphItem: React.FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'start 0.75'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.p
      ref={containerRef}
      style={{ opacity }}
      className="text-[#D7E2EA] font-light text-center leading-relaxed text-[clamp(1rem,1.5vw,1.15rem)]"
    >
      {text}
    </motion.p>
  );
};

