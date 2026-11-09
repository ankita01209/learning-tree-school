export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string | null;
  videoUrl: string;
  orientation: 'landscape' | 'portrait';
  isUnverified: boolean;
}

// TODO: confirm titles for these video activities
export const videosItems: VideoItem[] = [
  {
    id: 'video-01',
    title: 'A Celebration of Culture',
    description: 'Celebrating traditions, colours and togetherness.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-2.mp4',
    orientation: 'portrait',
    isUnverified: true,
  },
  {
    id: 'video-02',
    title: 'Little Hands, Big Creations',
    description: 'Exploring creativity through fun, hands-on activities.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-1.mp4',
    orientation: 'landscape',
    isUnverified: true,
  },
  {
    id: 'video-03',
    title: 'Fancy Dress Competition',
    description: 'Little stars expressing big imaginations through creative costumes.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-4.mp4',
    orientation: 'portrait',
    isUnverified: true,
  },
  {
    id: 'video-04',
    title: 'Learning Together',
    description: 'Building friendships, sharing experiences and growing together.',
    thumbnail: null,
    videoUrl: '/school-assets/videos/video-3.mp4',
    orientation: 'landscape',
    isUnverified: true,
  },
];

export function getDisplayVideos(limit?: number): VideoItem[] {
  return limit ? videosItems.slice(0, limit) : videosItems;
}
