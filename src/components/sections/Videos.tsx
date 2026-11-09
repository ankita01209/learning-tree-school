'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const isPortrait = video.orientation === 'portrait';
  const videoSrc = `${video.videoUrl}#t=0.1`;

  useEffect(() => {
    const container = containerRef.current;
    const vid = videoRef.current;

    if (!container || !vid) return;

    // Ensure video is explicitly muted by default on load/mount
    vid.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          vid.play()
            .then(() => setIsPlaying(true))
            .catch(() => { setIsPlaying(false); });
        } else {
          vid.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    const nextMuted = !vid.muted;
    vid.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.12,
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
                src={videoSrc}
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
              src={videoSrc}
              className={`absolute inset-0 z-10 h-full w-full ${isPortrait ? 'object-contain' : 'object-cover'
                }`}
              muted={isMuted}
              playsInline
              loop
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
            />

            {/* Unobtrusive playback and mute controls */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-2.5 py-1 text-white border border-white/20 transition-opacity">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1 hover:text-[#F4C95D] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              </button>
              <span className="w-px h-3 bg-white/30" />
              <button
                type="button"
                onClick={toggleMute}
                className="p-1 hover:text-[#F4C95D] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
            </div>
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
