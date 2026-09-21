'use client';
import React, { useState } from 'react';
import { MapPin, Phone, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const phone = (fd.get('phone') as string) || '';
    if (phone && phone.replace(/\D/g, '').length < 10) {
      setStatus('error');
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }
    setTimeout(() => setStatus('success'), 1500);
  };

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
                    <p className="text-sm text-[#304653] leading-relaxed">
                      K. K. Solitaire, Plot No. 111,<br />
                      Shop No. 1 &amp; 2, Sector 20,<br />
                      Ulwe, Navi Mumbai, India
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#DCEAF3] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} color="#397D67" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#397D67] uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:7738177135" className="text-sm text-[#304653] hover:text-[#397D67] transition-colors font-medium">
                      7738177135
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#DCEAF3] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} color="#397D67" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#397D67] uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:learningtree012@gmail.com" className="text-sm text-[#304653] hover:text-[#397D67] transition-colors font-medium break-all">
                      learningtree012@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden h-52 border border-[#DCEAF3] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15094.062402127394!2d73.01183315!3d18.95280325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39055555555%3A0x1234567890abcdef!2sSector%2020%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1611111111111!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Learning Tree School Location"
              />
            </div>
          </div>

          {/* Right: Enquiry Form (3/5) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-7 md:p-10 shadow-md border border-[#DCEAF3]">
            {status === 'success' ? (
              <div className="h-full min-h-[360px] flex flex-col items-center justify-center text-center p-6 bg-[#A8D5C2]/10 rounded-2xl border border-[#A8D5C2]/30">
                <div className="w-16 h-16 bg-[#397D67] rounded-full flex items-center justify-center mb-5 shadow-md">
                  <CheckCircle2 size={32} color="white" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#304653] mb-2">Thank You!</h3>
                <p className="text-[#304653]/70 text-base max-w-sm">
                  We&apos;ve received your enquiry. Our admissions team will reach out to you very soon.
                </p>
                <button
                  className="mt-7 border-2 border-[#397D67] text-[#397D67] font-bold px-6 py-2.5 rounded-full hover:bg-[#397D67] hover:text-white transition-colors text-sm"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-[#304653] mb-6">Send an Enquiry</h3>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-sm font-bold text-[#304653] mb-1.5">
                    Parent / Guardian Name <span className="text-[#F28C7A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#DCEAF3] bg-white text-[#304653] placeholder-[#304653]/40 focus:outline-none focus:border-[#397D67] focus:ring-2 focus:ring-[#397D67]/20 transition-all text-base font-medium"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#304653] mb-1.5">
                      Phone Number <span className="text-[#F28C7A]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#DCEAF3] bg-white text-[#304653] placeholder-[#304653]/40 focus:outline-none focus:border-[#397D67] focus:ring-2 focus:ring-[#397D67]/20 transition-all text-base font-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#304653] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. priya@email.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#DCEAF3] bg-white text-[#304653] placeholder-[#304653]/40 focus:outline-none focus:border-[#397D67] focus:ring-2 focus:ring-[#397D67]/20 transition-all text-base font-medium"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#304653] mb-1.5">
                    Message / Enquiry <span className="text-[#F28C7A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="I would like to know about admissions for..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#DCEAF3] bg-white text-[#304653] placeholder-[#304653]/40 focus:outline-none focus:border-[#397D67] focus:ring-2 focus:ring-[#397D67]/20 transition-all text-base font-medium resize-none"
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 bg-[#F28C7A]/10 border border-[#F28C7A]/30 text-[#304653] py-3 px-4 rounded-xl">
                    <AlertCircle size={16} color="#F28C7A" />
                    <p className="text-sm font-medium">{errorMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full h-14 bg-[#397D67] text-white font-extrabold text-base rounded-xl shadow-lg hover:bg-[#304653] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
