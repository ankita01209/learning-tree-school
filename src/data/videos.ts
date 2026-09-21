/**
 * Video data.
 *
 * AUDIT NOTE: All 7 video files were received as WhatsApp exports with
 * timestamp-only filenames. There is no metadata, thumbnail, or description
 * that can be used to verify which event each video shows.
 *
 * Per the media rules:
 *  - videoUrl is kept (the video file is real and should still autoplay in cards).
 *  - title is set to "Video Coming Soon" for all unverified entries.
 *  - description is empty — do NOT invent descriptions.
 *  - thumbnail is null — no verified thumbnails exist.
 *
 * To mark a video as verified: replace the title with the confirmed event name,
 * add a real thumbnail at /images/videos/<id>.jpg, and set thumbnail to that path.
 *
 * DO NOT reuse one video under multiple event titles.
 * DO NOT use an unrelated image as a thumbnail.
 */
export interface VideoItem {
  id: string;
  /** Event title — set to "Video Coming Soon" until the content is verified. */
  title: string;
  description: string;
  /** Path to thumbnail, or null if none exists yet. */
  thumbnail: string | null;
  /** Path to the video file. Always present; never null. */
  videoUrl: string;
  /** True while the event title has not been verified against the video content. */
  isUnverified: boolean;
}

export const videos: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Video Coming Soon',
    description: '',
    thumbnail: null,
    videoUrl: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.22.mp4',
    isUnverified: true,
  },
  {
    id: 'vid-2',
    title: 'Video Coming Soon',
    description: '',
    thumbnail: null,
    videoUrl: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.26.mp4',
    isUnverified: true,
  },
  {
    id: 'vid-3',
    title: 'Video Coming Soon',
    description: '',
    thumbnail: null,
    videoUrl: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.28 (1).mp4',
    isUnverified: true,
  },
  {
    id: 'vid-4',
    title: 'Video Coming Soon',
    description: '',
    thumbnail: null,
    videoUrl: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.28.mp4',
    isUnverified: true,
  },
  {
    id: 'vid-5',
    title: 'Video Coming Soon',
    description: '',
    thumbnail: null,
    videoUrl: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.29 (1).mp4',
    isUnverified: true,
  },
  {
    id: 'vid-6',
    title: 'Video Coming Soon',
    description: '',
    thumbnail: null,
    videoUrl: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.29.mp4',
    isUnverified: true,
  },
  {
    id: 'vid-7',
    title: 'Video Coming Soon',
    description: '',
    thumbnail: null,
    videoUrl: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.46.mp4',
    isUnverified: true,
  },
];

/** Returns the first N videos for display (default: 4, matching the existing card grid). */
export const getDisplayVideos = (count = 4): VideoItem[] => videos.slice(0, count);
