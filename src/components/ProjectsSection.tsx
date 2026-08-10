import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const projectsData: ProjectData[] = [
  {
    number: '01',
    name: 'Boilerplate Project One',
    category: 'Category A',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Boilerplate Project Two',
    category: 'Category B',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Boilerplate Project Three',
    category: 'Category C',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full flex items-center justify-center mb-10 sm:mb-14 md:mb-16"
      style={{ top: `calc(5rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Top Row: Number, category label, project name, Live Project button */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-[clamp(2rem,6vw,5rem)] leading-none select-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.1rem,2.5vw,2.2rem)] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row: Two-column image grid */}
        <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 overflow-hidden">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            <div className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 border border-[#D7E2EA]/20">
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[clamp(160px,22vw,340px)] flex-1 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 border border-[#D7E2EA]/20">
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div className="md:col-span-7 h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 border border-[#D7E2EA]/20">
            <img
              src={project.col2Img}
              alt={`${project.name} tall preview`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight select-none">
            Project
          </h2>
        </FadeIn>

        {/* Sticky-stacking project cards */}
        <div className="w-full flex flex-col relative">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
