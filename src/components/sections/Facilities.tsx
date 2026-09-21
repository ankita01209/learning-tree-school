'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';
import { facilities } from '@/data/facilities';

export default function Facilities() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Our Campus Facilities"
          subtitle="Designed to be a second home, our campus offers diverse spaces to stimulate learning and play."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16 max-w-5xl mx-auto">
          {facilities.map((fac) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: fac.delay }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-white shadow-lg border-2 border-white cursor-pointer"
            >
              <Image
                src={fac.image.src}
                alt={fac.image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{fac.name}</h3>
                <div className="h-1 w-12 bg-gold mt-4 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
