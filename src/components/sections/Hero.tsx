'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

import { scrollToSection } from '@/lib/scrollToSection';

export default function Hero() {
  const heroImage = {
    src: '/school-assets/hero/firstday1.jpeg',
    alt: 'First day at Learning Tree',
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FFF9F2] pt-24 pb-12">
      {/* Soft background blobs */}
      <div className="absolute top-[-8%] right-[-4%] w-96 h-96 bg-[#F4C95D]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-8%] left-[-4%] w-72 h-72 bg-[#F28C7A]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        {/* Left copy — all text uses explicit high-contrast colors */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#F4C95D]/25 text-[#304653] font-bold text-sm mb-6 border border-[#F4C95D]/60 shadow-sm">
              <span className="w-2 h-2 bg-[#F28C7A] rounded-full animate-pulse" />
              Admissions Open 2026–27
            </span>

            {/* H1: every word uses solid, high-contrast colors */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              <span className="text-[#304653]">Nurturing </span>
              <span className="relative inline-block text-[#397D67]">
                Curiosity.
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#F4C95D]/70 rounded-full -z-10" />
              </span>
              <br />
              <span className="text-[#304653]">Inspiring </span>
              <span className="text-[#F28C7A]">Growth.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#304653] mb-10 leading-relaxed font-medium max-w-xl opacity-80">
              At Learning Tree School, Ulwe — a warm, play-based environment where children from Playgroup to Standard&nbsp;7 discover their full potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-[#397D67] text-white shadow-xl hover:bg-[#304653] transition-colors"
              >
                <a
                  href="https://wa.me/917738177135"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Now
                </a>
              </Button>

              {/* Secondary CTA — solid border + dark text for legibility */}
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-bold border-2 border-[#304653] text-[#304653] bg-transparent hover:bg-[#304653] hover:text-white transition-colors"
                onClick={() => scrollToSection('#about')}
              >
                Explore Our School
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-[#304653]/10">
              {[
                { num: '2017', label: 'Established' },
                { num: '8+',   label: 'Grades' },
                { num: '1000+',label: 'Students' },
                { num: 'Ulwe', label: 'Navi Mumbai' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-extrabold text-[#397D67]">{num}</p>
                  <p className="text-xs text-[#304653]/60 font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-[400px] sm:h-[520px] lg:h-[640px] w-full"
        >
          {heroImage && (
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#304653]/20 border-4 border-white ring-1 ring-[#304653]/10">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#397D67]/10 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Floating widgets */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute top-6 -left-4 bg-white px-4 py-3 rounded-2xl shadow-xl z-10 hidden sm:block border border-[#F4C95D]/30"
          >
            <div className="text-3xl">🎒</div>
            <p className="text-[10px] text-[#304653] font-bold mt-1">Ready to learn!</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-12 -right-4 bg-white px-4 py-3 rounded-2xl shadow-xl z-10 hidden sm:block border border-[#A8D5C2]/30"
          >
            <div className="text-3xl">🎨</div>
            <p className="text-[10px] text-[#304653] font-bold mt-1">Create &amp; Explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
