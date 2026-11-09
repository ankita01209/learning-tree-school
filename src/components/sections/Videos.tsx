'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getDisplayVideos } from '@/data/videos';
import type { VideoItem } from '@/data/videos';

function VideoCard({
  video,
  index,
}: {
  video: VideoItem;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  const isPortrait = video.orientation === 'portrait';

  useEffect(() => {
    const container = containerRef.current;
    const vid = videoRef.current;

    if (!container || !vid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          vid.play().catch(() => { });
        } else {
          vid.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Equal-sized video frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#304653]">

        {!hasError ? (
          <>
            {/* Soft blurred background for portrait videos */}
            {isPortrait && (
              <video
                src={video.videoUrl}
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-50"
                muted
                autoPlay
                playsInline
                loop
                preload="metadata"
                aria-hidden="true"
              />
            )}

            {/* Main video */}
            <video
              ref={videoRef}
              src={video.videoUrl}
              className={`absolute inset-0 z-10 h-full w-full ${isPortrait ? 'object-contain' : 'object-cover'
                }`}
              muted
              playsInline
              loop
              preload="metadata"
              onError={() => setHasError(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white/60">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10,8 16,12 10,16" />
            </svg>

            <p className="text-sm">Video unavailable</p>
          </div>
        )}
      </div>

      {/* Video information */}
      <div className="bg-white px-5 py-4">
        <h3 className="text-sm font-extrabold text-[#304653]">
          {video.title}
        </h3>

        <p className="mt-0.5 text-xs text-[#304653]/50">
          Learning Tree School
        </p>
      </div>
    </motion.div>
  );
}

export default function Videos() {
  const videos = getDisplayVideos(4);

  return (
    <section className="relative bg-[#FFF9F2] py-24">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#A8D5C2]/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="See Us in Action"
          subtitle="Watch glimpses of our lively classrooms, exciting events, and creative activities."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
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