'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const activities = [
  { name: 'Yoga & Mindfulness',            bg: '#DCEAF3', text: '#304653' },
  { name: 'Annual Sports Meet',             bg: '#F4C95D', text: '#304653' },
  { name: 'Festival Celebrations (Vari)',   bg: '#F28C7A', text: '#ffffff' },
  { name: 'Monsoon Day',                    bg: '#A8D5C2', text: '#304653' },
  { name: 'Art & Craft Exhibitions',        bg: '#397D67', text: '#ffffff' },
  { name: 'Field Trips',                    bg: '#ffffff', text: '#397D67' },
];

export default function SchoolLife() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-[#FFF9F2] border-t border-[#DCEAF3]/60">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <SectionHeading
          title="Learning Beyond the Classroom"
          subtitle="At Learning Tree, education extends into vibrant, interactive experiences that build character and cultural awareness."
        />

        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.35, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="px-6 py-3 rounded-full font-bold text-sm shadow-sm border border-black/5 hover:-translate-y-1 transition-transform cursor-default select-none"
              style={{ backgroundColor: activity.bg, color: activity.text }}
            >
              {activity.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
