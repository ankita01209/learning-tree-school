# Security, Privacy & Handover Checklist — Learning Tree School

This document outlines critical manual and administrative actions required for production handover that cannot be solved by application code alone. The school administration and technical lead must complete each item below.

---

## 1. Domain, Hosting & Account Ownership
- [ ] **Transfer Domain & DNS:** Ensure the school's primary domain (e.g. `learningtreeschool.com`) is registered under the school's own registrar account (e.g. GoDaddy, Namecheap, Google Domains/Squarespace) and NOT a personal account.
- [ ] **Enable Auto-Renewal & Registrar Lock:** Turn on domain auto-renewal with an active institutional credit card to prevent accidental expiry. Enable registrar lock.
- [ ] **Hosting Account Transfer:** Transfer the Vercel project and Git repository (GitHub/GitLab) to the school's official organization account.
- [ ] **Enforce Two-Factor Authentication (2FA):** Enable 2FA on:
  - Domain registrar account
  - Vercel hosting account
  - GitHub/repository account
  - Google Workspace / school email accounts

---

## 2. Credential Security & Handover
- [ ] **Password Manager Transfer:** Securely share all credentials, master passwords, and recovery codes via a dedicated password manager (e.g. Bitwarden, 1Password) rather than plain text, chat apps, or email.
- [ ] **Revoke Old Access:** Once the school technical lead has confirmed access, revoke developer and contractor access tokens.

---

## 3. Production Domain & Configuration Update
- [ ] **Update `SITE_URL`:** In [`src/data/site.ts`](file:///c:/Users/Ankita/OneDrive/Desktop/learning-tree-school/src/data/site.ts), update `SITE_URL` from the preview URL to the official production domain (e.g. `https://learningtreeschool.com`).
- [ ] **Verify Canonical URL & Sitemap:** Confirm that [`sitemap.xml`](file:///sitemap.xml) and [`robots.txt`](file:///robots.txt) output the production URL.
- [ ] **Enforce HTTPS / HSTS:** In Vercel Project Settings > Domains, ensure "Enforce HTTPS" and Redirect from `http://` to `https://` is active.

---

## 4. Privacy, Parental Consent & DPDP Act Compliance
- [ ] **Written Parental Consent:** Obtain and archive written parental/guardian consent forms for every identifiable student shown in photographs or videos on the website.
- [ ] **Privacy Policy / Terms of Service:** To be drafted and provided by the school administration (or legal counsel). When ready, place the terms on dedicated pages and restore links in the footer.
- [ ] **DPDP Act (Digital Personal Data Protection Act, India):** If web analytics, cookies, contact tracking pixels, or enquiry forms are integrated in the future, review compliance obligations regarding children's data under the DPDP Act.
- [ ] **Opt-Out Procedure:** Provide a clear process for parents wishing to request the takedown of any student photograph or video.

---

## 5. Post-Deployment Verification
- [ ] **Security Headers Test:** Test the live domain on:
  - [SecurityHeaders.com](https://securityheaders.com) (Target: Grade A or A+)
  - [Mozilla Observatory](https://observatory.mozilla.org)
- [ ] **Lighthouse Audit:** Run Google Lighthouse in Chrome DevTools (Incognito mode). Verify Performance, Accessibility, Best Practices, and SEO are all above 90.
- [ ] **Browser Console Check:** Verify in Chrome/Firefox Developer Tools that no Content-Security-Policy (CSP) violations or 404 image errors occur during normal browsing, lightbox usage, or video playback.
- [ ] **WhatsApp Click-to-Chat Test:** Verify all "Enquire Now" and "Enquire on WhatsApp" CTA buttons open the school's WhatsApp support number (`+91 77381 77135`) on both desktop and mobile devices.

---

## 6. Ongoing Maintenance Routine
- [ ] **Designate Administrator:** Assign a named staff member or technical custodian responsible for monthly software maintenance, text updates, and media curation.
- [ ] **Monthly Routine:**
  1. Pull latest repository changes: `git pull`
  2. Run security audit: `npm audit`
  3. Update non-breaking packages: `npm update`
  4. Test build: `npm run build && npm run lint`
  5. Deploy to production

