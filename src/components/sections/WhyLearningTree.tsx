'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Smile, Users } from 'lucide-react';

const features = [
  {
    title: 'Safe & Secure',
    description: 'CCTV surveillance and highly trained staff ensure your child is always safe in our care.',
    icon: ShieldCheck,
    accent: '#DCEAF3',   // mist
    iconColor: '#304653',
  },
  {
    title: 'Experienced Educators',
    description: 'Our passionate teachers bring years of experience and deep empathy to the classroom.',
    icon: Users,
    accent: '#A8D5C2',   // sage
    iconColor: '#304653',
  },
  {
    title: 'Holistic Development',
    description: 'Focusing on academic, physical, social, and emotional growth in equal measure.',
    icon: HeartHandshake,
    accent: '#FCE0D8',   // peach
    iconColor: '#F28C7A',
  },
  {
    title: 'Joyful Play',
    description: 'Learning through play is central to our philosophy, making every day a fun discovery.',
    icon: Smile,
    accent: '#FFF9F2',   // ivory
    iconColor: '#F4C95D',
  },
];

export default function WhyLearningTree() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-[#397D67] relative overflow-hidden">
      {/* Decorative blob — very subtle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section heading — explicit white on forest green (9:1 contrast) */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/15 text-white text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-white/20">
            Why Learning Tree
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why Choose Learning Tree?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto font-medium">
            Discover what makes our community the best place for your child to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col items-start border border-white/10"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                  style={{ backgroundColor: feature.accent }}
                >
                  <Icon size={28} color={feature.iconColor} strokeWidth={2.2} />
                </div>

                <h3 className="text-xl font-extrabold text-[#304653] mb-3">
                  {feature.title}
                </h3>

                <p className="text-[#304653] text-sm leading-relaxed font-medium opacity-80">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
