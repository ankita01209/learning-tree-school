'use client';
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const images = galleryImages;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
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
  React.useEffect(() => {
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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-16 [column-fill:_balance]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="break-inside-avoid mb-4"
            >
              <div
                className="relative group overflow-hidden rounded-2xl bg-slate/10 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${img.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ height: index % 5 === 0 ? '320px' : index % 3 === 0 ? '420px' : '260px' }}
                >
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
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
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
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
