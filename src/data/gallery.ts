/**
 * Gallery images — all unique real school photos.
 *
 * AUDIT NOTE: img-yoga-2 (WhatsApp Image 2026-09-15 at 15.19.48 (1).jpeg)
 * was an exact MD5 duplicate of img-yoga-1 (15.19.48.jpeg) and has been
 * removed from the gallery data. The physical file is left in place at
 * /school-assets/WhatsApp Image 2026-09-15 at 15.19.48 (1).jpeg
 */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  // First Day of School
  {
    id: 'img-first-day',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.51.jpeg',
    alt: 'First Day of School',
    title: 'First Day',
    category: 'activities',
  },

  // Monsoon Activities (14 unique images)
  {
    id: 'img-monsoon-1',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.24.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-2',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.25 (1).jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-3',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.25 (2).jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-4',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.25.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-5',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.26 (1).jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-6',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.26.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-7',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.27 (1).jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-8',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.27 (2).jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-9',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.27.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-10',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.28.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-11',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.29.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-12',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.30.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-13',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.47 (1).jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },
  {
    id: 'img-monsoon-14',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.47.jpeg',
    alt: 'Happy Monsoon Event',
    category: 'activities',
  },

  // Yoga Day (2 unique images — img-yoga-2 duplicate removed)
  {
    id: 'img-yoga-1',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.48.jpeg',
    alt: 'International Day of Yoga',
    category: 'activities',
  },
  // img-yoga-2 removed: exact MD5 duplicate of img-yoga-1.
  // File: /school-assets/WhatsApp Image 2026-09-15 at 15.19.48 (1).jpeg
  // Left in place on disk; not referenced in data.
  {
    id: 'img-yoga-3',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.49.jpeg',
    alt: 'International Day of Yoga',
    category: 'activities',
  },

  // Vari Event
  {
    id: 'img-vari-1',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.31 (1).jpeg',
    alt: 'Vari Event',
    category: 'activities',
  },
  {
    id: 'img-vari-2',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.45.jpeg',
    alt: 'Vari Event',
    category: 'activities',
  },
  {
    id: 'img-vari-3',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.46.jpeg',
    alt: 'Vari Event',
    category: 'activities',
  },

  // General school activity images
  {
    id: 'img-general-1',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.50 (1).jpeg',
    alt: 'School Activity',
    category: 'general',
  },
  {
    id: 'img-general-2',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.50.jpeg',
    alt: 'School Activity',
    category: 'general',
  },
  {
    id: 'img-general-3',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.52 (1).jpeg',
    alt: 'School Activity',
    category: 'general',
  },
  {
    id: 'img-general-4',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.52.jpeg',
    alt: 'School Activity',
    category: 'general',
  },
  {
    id: 'img-general-5',
    src: '/school-assets/WhatsApp Image 2026-09-15 at 15.19.53.jpeg',
    alt: 'School Activity',
    category: 'general',
  },
];

/** Returns the hero image (First Day photo — the only hero-designated image) */
export const getHeroGalleryImage = (): GalleryImage =>
  galleryImages.find(img => img.id === 'img-first-day')!;
