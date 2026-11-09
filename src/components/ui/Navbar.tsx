'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { navLinks } from '@/data/navigation';
import { scrollToSection } from '@/lib/scrollToSection';
import { WHATSAPP_URL } from '@/data/contact';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape and return focus to hamburger button
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  /**
   * handleNavClick — fixes the mobile animation-race bug.
   *
   * Root cause: calling setMobileMenuOpen(false) and allowing the browser to
   * process the href="#id" simultaneously means the Framer Motion exit animation
   * (overflow:hidden, height→0) interferes with the scroll calculation in
   * some mobile browsers.
   *
   * Fix: preventDefault on the anchor, close the menu (which ends the animation),
   * then scroll in requestAnimationFrame so the scroll only runs AFTER React has
   * flushed the state update and the menu DOM node has started collapsing.
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    // Wait for the state update + framer-motion to start the exit, then scroll.
    requestAnimationFrame(() => {
      scrollToSection(href);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-[#FFF9F2] py-5'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-[#F4C95D] shadow group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/school-assets/logo.jpeg"
              alt="Learning Tree School Logo"
              width={52}
              height={52}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[23px] text-[#397D67] tracking-tight leading-none">Learning Tree</span>
            <span className="text-[12px] text-[#397D67]/70 font-semibold tracking-widest uppercase mt-0.5 hidden sm:block">Pre-Primary &amp; Primary School</span>
          </div>
        </a>

        {/* Desktop Nav — always #304653 (slate), never fades */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#304653] font-bold text-sm tracking-wide
                         hover:text-[#397D67] transition-colors
                         relative after:content-[''] after:absolute after:-bottom-1 after:left-0
                         after:w-0 after:h-[2px] after:bg-[#397D67] after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-[#397D67] text-white font-bold shadow hover:bg-[#304653] transition-colors"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className="xl:hidden p-2 text-[#397D67] bg-white rounded-full shadow border border-[#DCEAF3]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-[#DCEAF3] overflow-hidden z-40"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 px-4 text-base font-bold text-[#304653] bg-[#DCEAF3]/20 rounded-xl hover:bg-[#397D67] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#DCEAF3] mt-1 pb-2">
                <Button
                  asChild
                  className="w-full bg-[#397D67] text-white font-bold text-base h-12"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Enquire Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
