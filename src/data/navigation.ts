/** Single source of truth for all navigation links on the site. */
export interface NavLink {
  name: string;
  href: string; // hash anchor, e.g. "#home"
}

export const navLinks: NavLink[] = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Programs',   href: '#programs' },
  { name: 'Why Us',     href: '#why-us' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery',    href: '#gallery' },
  { name: 'Contact',    href: '#contact' },
];
