'use client';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_URL } from '@/data/contact';

export default function Contact() {
  return (
    <section className="py-24 bg-[#FFF9F2] relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#397D67]/10 text-[#397D67] text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#304653] mb-4">
            Begin Their Journey at<br className="hidden md:block" /> Learning Tree
          </h2>
          <p className="text-base md:text-lg text-[#304653] opacity-70 max-w-xl mx-auto">
            We love speaking with parents. Contact us for admissions enquiries, campus tours, or general information.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left: contact details + map (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-md border border-[#DCEAF3]">
              <h3 className="text-lg font-extrabold text-[#304653] mb-6">Reach Us Directly</h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#DCEAF3] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} color="#397D67" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#397D67] uppercase tracking-widest mb-1">Address</p>
                    <a
                      href={CONTACT_INFO.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#304653] hover:text-[#397D67] transition-colors font-medium leading-relaxed block"
                    >
                      {CONTACT_INFO.address.line1}<br />
                      {CONTACT_INFO.address.line2}<br />
                      {CONTACT_INFO.address.city}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#DCEAF3] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} color="#397D67" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#397D67] uppercase tracking-widest mb-1">Phone</p>
                    <a href={CONTACT_INFO.phoneHref} className="text-sm text-[#304653] hover:text-[#397D67] transition-colors font-medium">
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#DCEAF3] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} color="#397D67" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#397D67] uppercase tracking-widest mb-1">Email</p>
                    <a href={CONTACT_INFO.emailHref} className="text-sm text-[#304653] hover:text-[#397D67] transition-colors font-medium break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#DCEAF3] shadow-md bg-white flex flex-col">
              <div className="h-52 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4883491410185!2d73.0294384!3d18.9776022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU4JzM5LjQiTiA3M8KwMDEnNDYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Learning Tree School Location"
                />
              </div>
              <a
                href={CONTACT_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-[#397D67] hover:text-white hover:bg-[#397D67] transition-colors border-t border-[#DCEAF3] bg-[#F7FAFC]"
              >
                <MapPin size={14} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Right: WhatsApp Enquiry (3/5) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-7 md:p-10 shadow-md border border-[#DCEAF3] flex flex-col items-center justify-center text-center min-h-[360px]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#128C7E] hover:bg-[#0e6f63] text-white font-extrabold text-lg md:text-xl px-8 py-5 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.475-.15-.676.15-.2.3-.776.98-.952 1.18-.175.2-.351.226-.652.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.175-.3-.019-.463.132-.613.136-.134.301-.35.451-.526.151-.175.201-.3.301-.5.1-.2.05-.375-.025-.526-.075-.15-.676-1.63-.927-2.233-.244-.587-.492-.507-.676-.516l-.576-.01c-.2 0-.526.075-.802.375s-1.053 1.028-1.053 2.508c0 1.48 1.078 2.909 1.228 3.109.151.2 2.122 3.24 5.141 4.544.718.31 1.28.495 1.717.634.721.23 1.378.197 1.897.12.578-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.075-.125-.276-.2-.577-.35zM12.042 21.82a9.78 9.78 0 0 1-4.992-1.365l-.358-.213-3.71.973.99-3.616-.233-.371A9.783 9.783 0 0 1 2.22 12.04c0-5.424 4.41-9.835 9.83-9.835 2.627 0 5.097 1.024 6.955 2.883a9.78 9.78 0 0 1 2.88 6.953c0 5.426-4.41 9.837-9.843 9.837zm0-17.842c-4.414 0-8.006 3.593-8.006 8.008 0 1.41.367 2.787 1.064 4.001l.165.286-.632 2.308 2.36-.619.277.164a8.003 8.003 0 0 0 4.772 1.542c4.414 0 8.007-3.593 8.007-8.008 0-2.14-.834-4.15-2.348-5.665a7.98 7.98 0 0 0-5.66-2.017z" />
              </svg>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
