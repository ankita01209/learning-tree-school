'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function MissionVision() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-[#DCEAF3]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#397D67] text-white text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#304653]">
            What Drives Us Every Day
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">

          {/* MISSION */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-md border-l-8 border-[#397D67] relative overflow-hidden"
          >
            {/* Watermark label */}
            <div className="absolute top-4 right-6 text-[80px] font-extrabold text-[#397D67]/5 leading-none select-none pointer-events-none">
              M
            </div>

            {/* Icon tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#397D67] flex items-center justify-center shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <span className="text-lg font-extrabold text-[#397D67] tracking-widest uppercase">Mission</span>
            </div>

            <p className="text-[#304653] text-lg leading-relaxed font-medium">
              To provide a vibrant and inclusive learning ecosystem that nurtures curiosity, builds strong foundational skills, and empowers each child to become a confident, lifelong learner and responsible global citizen.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : 0.15 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-md border-l-8 border-[#F4C95D] relative overflow-hidden"
          >
            {/* Watermark label */}
            <div className="absolute top-4 right-6 text-[80px] font-extrabold text-[#F4C95D]/10 leading-none select-none pointer-events-none">
              V
            </div>

            {/* Icon tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#F4C95D] flex items-center justify-center shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#304653" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              </div>
              <span className="text-lg font-extrabold text-[#304653] tracking-widest uppercase">Vision</span>
            </div>

            <p className="text-[#304653] text-lg leading-relaxed font-medium">
              To be a benchmark institution in early childhood and primary education, renowned for joyful inquiry, academic excellence, creative expression, and strong moral character.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
