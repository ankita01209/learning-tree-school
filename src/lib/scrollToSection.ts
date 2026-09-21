/**
 * scrollToSection — single scroll utility used by Navbar, Footer, Hero, and any future caller.
 *
 * Behavior:
 *  1. Resolves the target element by id (strips leading #).
 *  2. Respects prefers-reduced-motion: uses instant scroll when motion is reduced.
 *  3. Updates the URL hash without a page reload.
 *  4. Releases any body scroll-lock (overflow: hidden) before scrolling.
 *
 * NOTE: scroll-padding-top: 80px is set globally in globals.css so the fixed
 * navbar never covers the scrolled-to section — no JS offset calculation needed here.
 */
export function scrollToSection(href: string): void {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (!el) return;

  // Release any body scroll-lock that may have been set (e.g. by the lightbox
  // in Gallery.tsx or the mobile menu itself).
  document.body.style.overflow = '';

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  el.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth' });

  // Update the URL hash without triggering a navigation / page reload.
  if (typeof window !== 'undefined') {
    history.pushState(null, '', `#${id}`);
  }
}
