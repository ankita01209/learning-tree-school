'use client';
import React from 'react';
import { navLinks } from '@/data/navigation';
import { scrollToSection } from '@/lib/scrollToSection';

const footerNavLinks = navLinks.filter(l => l.href !== '#home').map(l => ({
  name: l.name === 'About' ? 'About Us' : l.name,
  href: l.href,
}));

const programs = [
  'Playgroup & Nursery',
  'Junior & Senior KG',
  'Primary (Std. 1 – 4)',
  'Middle School (Std. 5 – 7)',
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#304653' }} className="pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-[#397D67] rounded-full flex items-center justify-center text-white font-extrabold text-base border-2 border-[#F4C95D] shrink-0">
                LT
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">Learning Tree</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Nurturing curiosity and inspiring growth in a warm, play-based environment since 2017.
            </p>
            <p className="text-white/50 text-xs">Discover · Learn · Grow</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-[#F4C95D] mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {footerNavLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/70 text-sm hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-extrabold text-[#F4C95D] mb-5 uppercase tracking-widest">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map(p => (
                <li key={p}>
                  <span className="text-white/70 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-extrabold text-[#F4C95D] mb-5 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-white/70 text-sm leading-relaxed">
                K. K. Solitaire, Plot No. 111,<br />
                Shop No. 1 &amp; 2, Sector 20,<br />
                Ulwe, Navi Mumbai, India
              </li>
              <li>
                <a href="tel:7738177135" className="text-white/70 text-sm hover:text-white transition-colors">
                  7738177135
                </a>
              </li>
              <li>
                <a href="mailto:learningtree012@gmail.com" className="text-white/70 text-sm hover:text-white transition-colors break-all">
                  learningtree012@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Learning Tree School. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
