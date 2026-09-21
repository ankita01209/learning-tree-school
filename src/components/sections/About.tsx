'use client';
import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#FFF9F2]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#A8D5C2] rounded-[2rem] transform -rotate-6 opacity-40" />
              <div className="absolute inset-0 bg-[#F28C7A] rounded-[2rem] transform rotate-3 opacity-15" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/school-assets/gallery/with_teachers.jpeg"
                  alt="Students at Learning Tree School"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-[#DCEAF3]">
                <p className="text-[#397D67] font-extrabold text-base">Focus on</p>
                <p className="text-[#F28C7A] font-extrabold text-lg">Holistic Growth</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              title="Welcome to Learning Tree"
              subtitle="Where every child's potential blossoms"
              align="left"
            />

            <div className="space-y-5 text-[#304653] text-base md:text-lg leading-relaxed" style={{ opacity: 0.82 }}>
              <p>
                Located in the heart of Ulwe, Navi Mumbai, Learning Tree School is more than just an educational institution — it is a nurturing community where children take their first foundational steps toward lifelong learning.
              </p>
              <p>
                From Playgroup through Standard 7, our curriculum is carefully designed to foster curiosity, build confidence, and encourage creative expression. We believe that play-based, experiential learning is the key to deep understanding.
              </p>
              <p>
                Our experienced educators are dedicated to providing a safe, joyful environment where every student feels valued, heard, and inspired to achieve their very best.
              </p>
            </div>

            <div className="mt-8">
              {/* "Our Programs" button — scrolls to #programs section */}
              <button
                onClick={() => scrollTo('programs')}
                className="inline-flex items-center gap-2 bg-[#397D67] text-white font-bold px-7 py-3.5 rounded-full text-base shadow-lg hover:bg-[#304653] transition-colors"
              >
                Our Programs <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
