'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDisplayVideos } from '@/data/videos';
import type { VideoItem } from '@/data/videos';

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const backdropRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const vid = videoRef.current;
        const back = backdropRef.current;
        if (!vid || hasError) return;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          vid.play().catch(() => { /* autoplay blocked */ });
          back?.play().catch(() => { });
        } else {
          vid.pause();
          back?.pause();
        }
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasError]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-[#304653] shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-0 min-w-0"
    >
      {/* Fixed 16:9 video area — height is always controlled by aspect-video, never by the source video */}
      <div className="relative w-full aspect-video bg-[#304653] overflow-hidden">
        {!hasError ? (
          <>
            {/* Blurred same-source backdrop — renders for every video so any gap
                left by object-contain (portrait OR a non-16:9 horizontal clip)
                is filled with motion instead of a flat color bar */}
            <video
              ref={backdropRef}
              src={video.videoUrl}
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-50 pointer-events-none"
              muted
              autoPlay
              playsInline
              loop
              preload="auto"
              aria-hidden="true"
            />
            {/* Foreground video — object-contain preserves the full portrait frame */}
            <video
              ref={videoRef}
              src={video.videoUrl}
              className="absolute inset-0 w-full h-full object-contain z-10"
              muted
              playsInline
              loop
              preload="metadata"
              onError={() => setHasError(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60 gap-3 p-6 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10,8 16,12 10,16" />
            </svg>
            <p className="text-sm">Video unavailable</p>
          </div>
        )}
      </div>

      <div className="px-5 py-4 bg-white">
        <h3 className="font-extrabold text-[#304653] text-sm">{video.title}</h3>
        <p className="text-xs text-[#304653]/50 mt-0.5">Learning Tree School</p>
      </div>
    </motion.div>
  );
}

export default function Videos() {
  const videos = getDisplayVideos(4);

  return (
    <section className="py-24 bg-[#FFF9F2] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A8D5C2]/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="See Us in Action"
          subtitle="Watch glimpses of our lively classrooms, exciting events, and creative activities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}