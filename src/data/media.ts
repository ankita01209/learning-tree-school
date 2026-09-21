export type MediaType = 'image' | 'video';
export type MediaCategory = 'hero' | 'gallery' | 'activities' | 'facilities' | 'videos';

export interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
  alt: string;
  category: MediaCategory[];
  title?: string;
  description?: string;
}

export const mediaData: MediaItem[] = [
  // Videos
  { id: 'vid-1', type: 'video', src: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.22.mp4', alt: 'School Video 1', category: ['videos', 'activities'] },
  { id: 'vid-2', type: 'video', src: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.26.mp4', alt: 'School Video 2', category: ['videos', 'gallery'] },
  { id: 'vid-3', type: 'video', src: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.28 (1).mp4', alt: 'School Video 3', category: ['videos'] },
  { id: 'vid-4', type: 'video', src: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.28.mp4', alt: 'School Video 4', category: ['videos'] },
  { id: 'vid-5', type: 'video', src: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.29 (1).mp4', alt: 'School Video 5', category: ['videos'] },
  { id: 'vid-6', type: 'video', src: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.29.mp4', alt: 'School Video 6', category: ['videos'] },
  { id: 'vid-7', type: 'video', src: '/school-assets/WhatsApp Video 2026-09-15 at 15.19.46.mp4', alt: 'School Video 7', category: ['videos'] },

  // First Day of School (Hero candidate)
  { id: 'img-first-day', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.51.jpeg', alt: 'First Day of School is always cool', category: ['hero', 'activities', 'gallery'], title: 'First Day' },

  // Monsoon Activities
  { id: 'img-monsoon-1', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.24.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-2', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.25 (1).jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-3', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.25 (2).jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-4', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.25.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-5', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.26 (1).jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-6', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.26.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-7', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.27 (1).jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-8', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.27 (2).jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-9', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.27.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-10', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.28.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-11', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.29.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-12', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.30.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-13', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.47 (1).jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },
  { id: 'img-monsoon-14', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.47.jpeg', alt: 'Happy Monsoon Event', category: ['gallery', 'activities'] },

  // Yoga Day
  { id: 'img-yoga-1', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.48.jpeg', alt: 'International Day of Yoga', category: ['gallery', 'activities'] },
  { id: 'img-yoga-2', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.48 (1).jpeg', alt: 'International Day of Yoga', category: ['gallery', 'activities'] },
  { id: 'img-yoga-3', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.49.jpeg', alt: 'International Day of Yoga', category: ['gallery', 'activities'] },
  
  // Vari Event
  { id: 'img-vari-1', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.31 (1).jpeg', alt: 'Vari Event', category: ['gallery', 'activities'] },
  { id: 'img-vari-2', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.45.jpeg', alt: 'Vari Event', category: ['gallery', 'activities'] },
  { id: 'img-vari-3', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.46.jpeg', alt: 'Vari Event', category: ['gallery', 'activities'] },

  // General 
  { id: 'img-general-1', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.50 (1).jpeg', alt: 'School Activity', category: ['gallery'] },
  { id: 'img-general-2', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.50.jpeg', alt: 'School Activity', category: ['gallery'] },
  { id: 'img-general-3', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.52 (1).jpeg', alt: 'School Activity', category: ['gallery'] },
  { id: 'img-general-4', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.52.jpeg', alt: 'School Activity', category: ['gallery'] },
  { id: 'img-general-5', type: 'image', src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.53.jpeg', alt: 'School Activity', category: ['gallery'] },
];

export const getGalleryImages = () => mediaData.filter(m => m.type === 'image' && m.category.includes('gallery'));
export const getGalleryVideos = () => mediaData.filter(m => m.type === 'video');
export const getHeroImage = () => mediaData.find(m => m.category.includes('hero'));
export const getFacilitiesImages = () => mediaData.filter(m => m.category.includes('facilities'));
