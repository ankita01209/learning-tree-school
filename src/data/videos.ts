export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string | null;
  videoUrl: string;
  isUnverified: boolean;
}

// TODO: confirm titles for these video activities
export const videosItems: VideoItem[] = [
  {
    id: 'video-01',
    title: 'School Activity 1',
    description: 'A glimpse of learning and activities at Learning Tree School.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/painting.mp4',
    isUnverified: true,
  },
  {
    id: 'video-02',
    title: 'School Activity 2',
    description: 'A glimpse of learning and activities at Learning Tree School.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-1.mp4',
    isUnverified: true,
  },
  {
    id: 'video-03',
    title: 'School Activity 3',
    description: 'A glimpse of learning and activities at Learning Tree School.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-2.mp4',
    isUnverified: true,
  },
  {
    id: 'video-04',
    title: 'School Activity 4',
    description: 'A glimpse of learning and activities at Learning Tree School.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-3.mp4',
    isUnverified: true,
  },
  {
    id: 'video-05',
    title: 'School Activity 5',
    description: 'A glimpse of learning and activities at Learning Tree School.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-4.mp4',
    isUnverified: true,
  },
];

export function getDisplayVideos(limit?: number): VideoItem[] {
  return limit ? videosItems.slice(0, limit) : videosItems;
}
