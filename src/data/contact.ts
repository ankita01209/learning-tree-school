/**
 * School contact details & WhatsApp communication links.
 * Single source of truth for phone, email, and WhatsApp URL.
 */

export const CONTACT_INFO = {
  phone: '7738177135',
  phoneDisplay: '7738177135',
  phoneHref: 'tel:7738177135',
  email: 'learningtree012@gmail.com',
  emailHref: 'mailto:learningtree012@gmail.com',
  address: {
    line1: 'K. K. Solitaire, Plot No. 111,',
    line2: 'Shop No. 1 & 2, Sector 20,',
    city: 'Ulwe, Navi Mumbai, India',
  },
  mapUrl: 'https://maps.app.goo.gl/Ypf8gerxnRw8SGMSA?g_st=aw',
  whatsappNumber: '917738177135',
} as const;

/**
 * Builds a direct WhatsApp chat URL with an optional prefilled message.
 */
export function getWhatsAppUrl(prefilledMessage?: string): string {
  const base = `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
  if (!prefilledMessage) return base;
  return `${base}?text=${encodeURIComponent(prefilledMessage)}`;
}

export const WHATSAPP_URL = getWhatsAppUrl();

