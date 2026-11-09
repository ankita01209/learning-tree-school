'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '2017', label: 'Established', suffix: '' },
  { value: '8',    label: 'Years of Excellence', suffix: '+' },
  { value: '1000', label: 'Happy Students', suffix: '+' },
  { value: 'Playgroup – Std. 7', label: 'Educational Journey', suffix: '' },
];

export default function TrustStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-14 bg-[#397D67] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 space-y-1 border-r border-white/20 last:border-0"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F4C95D]">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xl md:text-2xl font-extrabold text-[#F4C95D]">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="text-xs md:text-sm font-semibold text-white/85 uppercase tracking-widest block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
