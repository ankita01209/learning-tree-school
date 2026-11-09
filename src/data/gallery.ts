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
  { id: 'gallery-01', src: '/school-assets/gallery/monsoon1.jpeg', alt: 'Children holding colourful umbrellas during Monsoon Day celebrations', title: 'Monsoon Celebration', category: 'activities' },
  { id: 'gallery-02', src: '/school-assets/gallery/pooja1.jpeg', alt: 'Traditional festive prayers and cultural ceremony with students', title: 'Festive Pooja Ceremony', category: 'activities' },
  { id: 'gallery-03', src: '/school-assets/gallery/yoga_day1.jpeg', alt: 'Students seated outdoors performing morning yoga asanas', title: 'International Yoga Day', category: 'activities' },
  { id: 'gallery-04', src: '/school-assets/gallery/monsoon2.jpeg', alt: 'Classroom display of handmade monsoon season paper crafts', title: 'Creative Monsoon Crafts', category: 'activities' },
  { id: 'gallery-05', src: '/school-assets/gallery/firstday2.jpeg', alt: 'Young learners happily arriving on their first day of the school year', title: 'First Day of School', category: 'activities' },
  { id: 'gallery-06', src: '/school-assets/gallery/yoga_day2.jpeg', alt: 'Children practicing breathing exercises and meditation postures', title: 'Yoga & Mindfulness', category: 'activities' },
  { id: 'gallery-07', src: '/school-assets/gallery/monsoon3.jpeg', alt: 'Young students dressed in vibrant rain gear celebrating together', title: 'Rainy Day Activity', category: 'activities' },
  { id: 'gallery-08', src: '/school-assets/gallery/pooja2.jpeg', alt: 'Cultural celebration decorations and traditional school gathering', title: 'Cultural Heritage Event', category: 'activities' },
  { id: 'gallery-09', src: '/school-assets/gallery/monsoon4.jpeg', alt: 'Preschool children engaged in hands-on monsoon themed art projects', title: 'Monsoon Art Project', category: 'activities' },
  { id: 'gallery-10', src: '/school-assets/gallery/annual_awards.jpeg', alt: 'Students receiving certificates of merit and academic excellence awards', title: 'Academic Recognition', category: 'activities' },
  { id: 'gallery-11', src: '/school-assets/gallery/yoga_day3.jpeg', alt: 'Students demonstrating balance postures during outdoor yoga session', title: 'Yoga Balance Training', category: 'activities' },
  { id: 'gallery-12', src: '/school-assets/gallery/monsoon5.jpeg', alt: 'Children enjoying fun rainy season sensory play and games', title: 'Monsoon Fun & Games', category: 'activities' },
  { id: 'gallery-13', src: '/school-assets/gallery/monsoon6.jpeg', alt: 'Student group photograph celebrating the seasonal festival', title: 'Festival Gathering', category: 'activities' },
  { id: 'gallery-14', src: '/school-assets/gallery/pooja3.jpeg', alt: 'Traditional sweets and ceremonial blessing during festive pooja', title: 'Festive Traditions', category: 'activities' },
  { id: 'gallery-15', src: '/school-assets/gallery/yoga_day4.jpeg', alt: 'Young yogis in synchronized meditation and posture practice', title: 'Synchronized Yoga', category: 'activities' },
  // yoga_day5.jpeg omitted (exact byte-duplicate of yoga_day4)
  { id: 'gallery-16', src: '/school-assets/gallery/monsoon7.jpeg', alt: 'Group activity with paper boats and monsoon water play', title: 'Monsoon Water Play', category: 'activities' },
  { id: 'gallery-17', src: '/school-assets/gallery/with_teachers.jpeg', alt: 'Encouraging teachers guiding children through an engaging classroom lesson', title: 'Learning with Teachers', category: 'activities' },
  { id: 'gallery-18', src: '/school-assets/gallery/yoga_day6.jpeg', alt: 'Morning stretching and wellness exercises in the school courtyard', title: 'Courtyard Yoga Session', category: 'activities' },
  { id: 'gallery-19', src: '/school-assets/gallery/monsoon8.jpeg', alt: 'Vibrant student artwork depicting rainy clouds and umbrellas', title: 'Seasonal Artwork Display', category: 'activities' },
  { id: 'gallery-20', src: '/school-assets/gallery/pooja4.jpeg', alt: 'Community gathering celebrating Indian cultural festivals with students', title: 'School Cultural Day', category: 'activities' },
  { id: 'gallery-21', src: '/school-assets/gallery/monsoon9.jpeg', alt: 'Children sharing joyous smiles during the school monsoon fair', title: 'Joyful Moments', category: 'activities' },
  { id: 'gallery-22', src: '/school-assets/gallery/yoga_day7.jpeg', alt: 'Students stretching in unison under teacher guidance', title: 'Guided Physical Fitness', category: 'activities' },
  { id: 'gallery-23', src: '/school-assets/gallery/monsoon10.jpeg', alt: 'Creative educational exhibit on weather and nature cycles', title: 'Nature & Seasons Exhibit', category: 'activities' },
  { id: 'gallery-24', src: '/school-assets/gallery/monsoon11.jpeg', alt: 'Playgroup children participating in interactive group rhyme sessions', title: 'Interactive Group Rhymes', category: 'activities' },
  { id: 'gallery-25', src: '/school-assets/gallery/yoga_day8.jpeg', alt: 'Junior school students practicing posture alignment during yoga class', title: 'Posture Alignment Practice', category: 'activities' },
  { id: 'gallery-26', src: '/school-assets/gallery/monsoon12.jpeg', alt: 'Celebration of school spirit and friendship during outdoor play', title: 'Friendship & Play', category: 'activities' },
  { id: 'gallery-27', src: '/school-assets/gallery/yoga_day9.jpeg', alt: 'Closing meditation and peace pledge at the end of Yoga Day', title: 'Yoga Peace Pledge', category: 'activities' },
];
