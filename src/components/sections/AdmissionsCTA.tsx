'use client';
import React from 'react';
import { motion } from 'framer-motion';

/**
 * AdmissionsCTA — a deliberate conversion moment between Videos and the final
 * enquiry form. It does NOT duplicate the "Enquire Now" hero button.
 * It serves as a contextual lead-in that scrolls the user to the
 * enquiry form in the Contact section below.
 */
export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-[#F4C95D] relative overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F28C7A]/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block bg-[#397D67] text-white text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Admissions Open 2026–27
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#304653] mb-5 leading-tight">
            Begin Their Journey at<br className="hidden md:block" /> Learning Tree
          </h2>

          <p className="text-lg text-[#304653]/80 mb-10 font-medium max-w-xl mx-auto">
            Spots for the upcoming academic year are filling quickly. Reach out to us today — we&apos;d love to welcome your family.
          </p>

          {/* Single clear CTA pointing to WhatsApp chat */}
          <a
            href="https://wa.me/917738177135"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#397D67] text-white font-extrabold px-10 py-4 rounded-full text-lg shadow-xl hover:bg-[#304653] transition-colors"
          >
            Send an Enquiry <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
