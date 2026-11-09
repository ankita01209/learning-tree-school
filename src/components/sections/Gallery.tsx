'use client';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

const getGridPattern = (index: number) => {
  const c = [
    "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2",
    "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1",
    "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1",
  ];
  return c[index] || "col-span-1 row-span-1";
};

export default function Gallery() {
  const images = galleryImages;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastTriggerIndex = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const openLightbox = useCallback((index: number) => {
    lastTriggerIndex.current = index;
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
    if (lastTriggerIndex.current !== null) {
      thumbnailRefs.current[lastTriggerIndex.current]?.focus();
    }
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Moments of Joy"
          subtitle="Glimpses into the everyday magic that happens at Learning Tree."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-16 grid-flow-row-dense auto-rows-[280px] sm:auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[240px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: shouldReduceMotion ? 0 : (index % 5) * 0.08 }}
              className={getGridPattern(index)}
            >
              <div
                ref={(el) => { thumbnailRefs.current[index] = el; }}
                className="relative group overflow-hidden rounded-2xl bg-slate/10 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#397D67]"
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${img.alt}`}
              >
                <div className="relative w-full h-full bg-[#304653]/5">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-bold text-sm bg-white/20 px-5 py-2 rounded-full backdrop-blur-md border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M21 21l-4.35-4.35M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16z"/></svg>
                      View
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={22} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Prev Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
              transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom thumbnails strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-xs sm:max-w-md overflow-x-auto px-4 pb-1 scrollbar-none">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`relative w-10 h-10 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${i === lightboxIndex ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-80'}`}
                  aria-label={`Go to photo ${i + 1}`}
                >
                  <Image src={img.src} alt="" fill className="object-cover" sizes="40px" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
