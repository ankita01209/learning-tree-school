/**
 * Site configuration and canonical base URL.
 * 
 * IMPORTANT FOR HANDOVER:
 * When the custom domain is registered and connected in Vercel,
 * update SITE_URL to the real production domain (e.g., https://learningtreeschool.com).
 */
export const SITE_URL = 'https://learningtreeschool-preview.vercel.app';

export const SITE_CONFIG = {
  name: 'Learning Tree School',
  title: 'Learning Tree School | Ulwe, Navi Mumbai',
  description:
    'Learning Tree School in Sector 20, Ulwe, Navi Mumbai. Playgroup to Standard 7. Nurturing curiosity, holistic learning, and childhood growth since 2017.',
  locale: 'en_IN',
  ogImage: '/school-assets/hero/firstday1.jpeg',
} as const;

