/**
 * Gallery images — strictly mapped to public/school-assets/gallery/
 * Manually ordered to visually mix events (Monsoon, Yoga, Pooja, etc.) 
 * so it appears randomized and curated.
 *
 * NOTE: yoga_day5.jpeg is an exact physical duplicate of yoga_day4.jpeg.
 * It is deliberately omitted from this array so the duplicate is not displayed.
 */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 'gallery-01', src: '/school-assets/gallery/monsoon1.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-02', src: '/school-assets/gallery/pooja1.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-03', src: '/school-assets/gallery/yoga_day1.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-04', src: '/school-assets/gallery/monsoon2.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-05', src: '/school-assets/gallery/firstday2.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-06', src: '/school-assets/gallery/yoga_day2.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-07', src: '/school-assets/gallery/monsoon3.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-08', src: '/school-assets/gallery/pooja2.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-09', src: '/school-assets/gallery/monsoon4.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-10', src: '/school-assets/gallery/student_rank.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-11', src: '/school-assets/gallery/yoga_day3.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-12', src: '/school-assets/gallery/monsoon5.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-13', src: '/school-assets/gallery/monsoon6.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-14', src: '/school-assets/gallery/pooja3.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-15', src: '/school-assets/gallery/yoga_day4.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  // yoga_day5.jpeg omitted (exact byte-duplicate of yoga_day4)
  { id: 'gallery-16', src: '/school-assets/gallery/monsoon7.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-17', src: '/school-assets/gallery/with_teachers.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-18', src: '/school-assets/gallery/yoga_day6.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-19', src: '/school-assets/gallery/monsoon8.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-20', src: '/school-assets/gallery/pooja4.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-21', src: '/school-assets/gallery/monsoon9.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-22', src: '/school-assets/gallery/yoga_day7.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-23', src: '/school-assets/gallery/monsoon10.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-24', src: '/school-assets/gallery/monsoon11.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-25', src: '/school-assets/gallery/yoga_day8.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-26', src: '/school-assets/gallery/monsoon12.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
  { id: 'gallery-27', src: '/school-assets/gallery/yoga_day9.jpeg', alt: 'School Moment', title: 'School Moment', category: 'activities' },
];
