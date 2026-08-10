import React from 'react';
import { FadeIn } from './FadeIn';

const servicesData = [
  {
    number: '01',
    name: 'Boilerplate Service One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    number: '02',
    name: 'Boilerplate Service Two',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    number: '03',
    name: 'Boilerplate Service Three',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    number: '04',
    name: 'Boilerplate Service Four',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    number: '05',
    name: 'Boilerplate Service Five',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {servicesData.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30} className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 sm:py-10 md:py-12">
                {/* Left: Number */}
                <div className="md:col-span-4 lg:col-span-3">
                  <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none select-none">
                    {service.number}
                  </span>
                </div>

                {/* Right: Name + Description */}
                <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-2">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
