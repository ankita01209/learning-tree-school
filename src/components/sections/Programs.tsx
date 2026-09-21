'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Verified program data — no invented curriculum
const journey = [
  {
    stage: 'Playgroup',
    ages: '2 – 3 yrs',
    theme: 'Discover',
    themeColor: '#F28C7A', // coral
    bgColor: '#FCE0D8',
    number: '01',
    description: 'First steps into school life. Sensory play, social skills, and building comfort in a loving environment.'
  },
  {
    stage: 'Nursery',
    ages: '3 – 4 yrs',
    theme: 'Discover',
    themeColor: '#F4C95D', // gold
    bgColor: '#FFF9F2',
    number: '02',
    description: 'Language, numbers, and creativity blossom through joyful exploration and guided play.'
  },
  {
    stage: 'Junior KG',
    ages: '4 – 5 yrs',
    theme: 'Learn',
    themeColor: '#A8D5C2', // sage
    bgColor: '#DCEAF3',
    number: '03',
    description: 'Structured pre-reading, writing foundations, and collaborative learning activities.'
  },
  {
    stage: 'Senior KG',
    ages: '5 – 6 yrs',
    theme: 'Learn',
    themeColor: '#397D67', // forest
    bgColor: '#A8D5C2',
    number: '04',
    description: 'Preparing for formal school with confidence, critical thinking, and a strong value system.'
  },
  {
    stage: 'Primary',
    ages: 'Std. 1 – 4',
    theme: 'Grow',
    themeColor: '#304653', // slate
    bgColor: '#DCEAF3',
    number: '05',
    description: 'Academics, arts, sports, and values woven together to shape a well-rounded learner.'
  },
  {
    stage: 'Middle School',
    ages: 'Std. 5 – 7',
    theme: 'Grow',
    themeColor: '#304653', // slate
    bgColor: '#FCE0D8',
    number: '06',
    description: 'Independent thinking, deeper subject exploration, and preparation for higher education.'
  },
];

export default function Programs() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#FFF9F2] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="The Educational Journey"
          subtitle="A thoughtfully structured path from your child's very first days to confident middle-school learners."
        />

        {/* Desktop: horizontal timeline with connectors */}
        <div className="hidden lg:block mt-16 relative">
          {/* Connector line */}
          <div className="absolute top-[56px] left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-gradient-to-r from-[#F28C7A] via-[#A8D5C2] to-[#304653] opacity-40" />

          <div className="grid grid-cols-6 gap-4">
            {journey.map((item, i) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Stage number circle */}
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg mb-5 z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: item.themeColor }}
                >
                  {item.number}
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full opacity-30 animate-ping"
                    style={{ backgroundColor: item.themeColor }}
                  />
                </div>

                {/* Card */}
                <div
                  className="w-full rounded-2xl p-5 border border-black/5 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <span className="text-[10px] font-extrabold tracking-widest uppercase mb-1"
                    style={{ color: item.themeColor }}>
                    {item.theme}
                  </span>
                  <h3 className="text-base font-extrabold text-[#304653] mb-1">{item.stage}</h3>
                  <span className="text-xs font-semibold text-[#304653]/60 bg-white/70 px-2 py-0.5 rounded-full mb-3">{item.ages}</span>
                  <p className="text-xs text-[#304653]/75 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden mt-12 relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F28C7A] via-[#A8D5C2] to-[#304653] opacity-30" />

          <div className="flex flex-col gap-6">
            {journey.map((item, i) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-4"
              >
                {/* Dot on the timeline */}
                <div
                  className="absolute -left-8 top-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-extrabold shadow z-10 shrink-0"
                  style={{ backgroundColor: item.themeColor }}
                >
                  {i + 1}
                </div>

                <div
                  className="flex-1 rounded-2xl p-5 border border-black/5 shadow-sm"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-extrabold text-[#304653]">{item.stage}</h3>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: item.themeColor }}>
                      {item.theme}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#304653]/60 mb-2">{item.ages}</p>
                  <p className="text-sm text-[#304653]/75 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#304653]/60 text-sm font-medium mb-4">Ready to start the journey?</p>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 bg-[#397D67] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#304653] transition-colors text-base"
          >
            Begin Admissions <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
