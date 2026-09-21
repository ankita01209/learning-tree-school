/**
 * Facility data.
 *
 * isPlaceholder: true — no verified real photo exists yet for these rooms.
 * To replace a placeholder: drop the real photo at the same src path,
 * then set isPlaceholder to false and update the alt text.
 *
 * DO NOT replace a placeholder with an unrelated gallery or activity image.
 */
export interface FacilityItem {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  isPlaceholder: boolean;
  /** Animation delay in seconds for entrance animation */
  delay: number;
}

export const facilities: FacilityItem[] = [
  {
    id: 'facility-classrooms',
    name: 'Interactive Classrooms',
    image: {
      src: '/images/facilities/placeholder-classrooms.svg',
      alt: 'Interactive Classrooms — Photo Coming Soon',
    },
    isPlaceholder: true,
    delay: 0.1,
  },
  {
    id: 'facility-art-corners',
    name: 'Creative Art Corners',
    image: {
      src: '/images/facilities/placeholder-art-corners.svg',
      alt: 'Creative Art Corners — Photo Coming Soon',
    },
    isPlaceholder: true,
    delay: 0.2,
  },
  {
    id: 'facility-play-area',
    name: 'Spacious Play Area',
    image: {
      src: '/images/facilities/placeholder-play-area.svg',
      alt: 'Spacious Play Area — Photo Coming Soon',
    },
    isPlaceholder: true,
    delay: 0.3,
  },
  {
    id: 'facility-library',
    name: 'Library & Reading Nooks',
    image: {
      src: '/images/facilities/placeholder-library.svg',
      alt: 'Library & Reading Nooks — Photo Coming Soon',
    },
    isPlaceholder: true,
    delay: 0.4,
  },
];
