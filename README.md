# Learning Tree School Website

Official website for **Learning Tree School**, located in Sector 20, Ulwe, Navi Mumbai. Established in 2017, the school serves students from Playgroup to Standard 7 with a warm, play-based and holistic curriculum.

---

## 🛠 Tech Stack
- **Framework:** Next.js 16 (App Router, Static Generation)
- **UI / Styling:** React 19, TypeScript, Tailwind CSS v4
- **Animations & Icons:** Framer Motion (with `prefers-reduced-motion` compliance), Lucide React
- **Primitives:** Radix UI (`@radix-ui/react-slot`)
- **Hosting:** Vercel

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v20.x` or later (LTS recommended)
- npm `v10.x` or later

### 2. Installation
```bash
git clone <repository-url>
cd learning-tree-school
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Local Preview
```bash
npm run build
npm run start
```

### 5. Linting
```bash
npm run lint
```

---

## 📝 How to Update Website Content

### 1. School Information & Contact Details
- **Contact Details & WhatsApp:** Centralized in [`src/data/contact.ts`](src/data/contact.ts). Updating phone numbers, email addresses, or physical campus addresses here propagates across all buttons and contact cards automatically.
- **Canonical Domain:** Configured in [`src/data/site.ts`](src/data/site.ts). Update `SITE_URL` when attaching the final custom domain.
- **Navigation Links:** Managed in [`src/data/navigation.ts`](src/data/navigation.ts).

### 2. Updating Gallery Images
1. **Prepare New Photos:**
   Always sanitize GPS and camera metadata prior to publishing:
   ```bash
   node scripts/strip-metadata.mjs <input-folder> <output-folder>
   ```
2. **Add Files:** Place the cleaned images inside [`public/school-assets/gallery/`](public/school-assets/gallery/).
3. **Register in Code:** Add entries to [`src/data/gallery.ts`](src/data/gallery.ts):
   ```ts
   {
     id: 'gallery-28',
     src: '/school-assets/gallery/new_event.jpeg',
     alt: 'Descriptive screen-reader summary of the event',
     title: 'Event Title',
     category: 'activities'
   }
   ```
4. **Child Privacy Guideline:** Never use children's names in image filenames or alt descriptions.

### 3. Updating Videos
1. **Video Guidelines:**
   - Keep video files under 15 MB for smooth web streaming.
   - Format: MP4 (H.264 video, AAC audio, `+faststart` web-optimized flag).
2. **Add Video:** Place the file in [`public/school-assets/videos/`](public/school-assets/videos/).
3. **Register in Code:** Add or update entries in [`src/data/videos.ts`](src/data/videos.ts).
4. **Metadata Sanitization:** Run the scanner to verify no GPS or device data is leaked:
   ```bash
   node scripts/check-video-metadata.mjs
   ```

---

## 🔒 Security & Performance Features

1. **Content Security Policy (CSP):**
   - Configured in [`next.config.ts`](next.config.ts).
   - Only allows trusted resources: self-hosted media/fonts and the embedded Google Maps iframe (`https://www.google.com`).
   - `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`.
2. **HTTP Security Headers:**
   - `Strict-Transport-Security` (HSTS: 2 years + preload)
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
   - `poweredByHeader: false` (removes `X-Powered-By` header)
3. **Accessibility:**
   - WCAG AA compliant contrast on WhatsApp CTA button (`#128C7E` with white text).
   - Keyboard accessible gallery lightbox (closes on `Escape`, navigates with arrow keys, restores focus to thumbnail).
   - Keyboard accessible mobile menu (closes on `Escape`, returns focus to hamburger button).
   - Respects user OS `prefers-reduced-motion` settings.

---

## ☁️ Deployment to Vercel

1. Push your changes to the GitHub repository:
   ```bash
   git push origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com):
   - Import the project repository.
   - Framework preset: **Next.js**.
   - Build command: `next build` (default).
   - Output directory: `.next` (default).
3. Under **Project Settings > Domains**:
   - Add your custom domain (e.g. `learningtreeschool.com`).
   - Configure DNS records (CNAME or A records) as indicated by Vercel.
   - Ensure "Enforce HTTPS" is toggled ON.

---

## 📅 Monthly Maintenance Routine

Assign an administrative custodian to execute this 5-minute routine on the first week of every month:

1. **Update Codebase:**
   ```bash
   git pull origin main
   ```
2. **Security Vulnerability Check:**
   ```bash
   npm audit
   ```
3. **Safe Updates:**
   ```bash
   npm update
   ```
4. **Verify Quality:**
   ```bash
   npm run lint
   npm run build
   ```
5. **Redeploy:** Push updates to GitHub for automated Vercel deployment.

---

## 📌 Known Improvements & Technical Notes

- **Dev-Only Dependencies (`minimatch` advisories):** `npm audit` reports 8 moderate advisories deep within `@typescript-eslint` (used by `eslint-config-next`). This only affects local build-time linting, has no impact on production runtime or client browsers, and should not be force-fixed until an updated upstream ESLint Next config is released.
- **Portrait Video Decoder:** For vertical/portrait videos in [`Videos.tsx`](src/components/sections/Videos.tsx), an ambient blurred video element is rendered behind the primary video to create a soft background fill. While browsers cache the video stream, future optimization can swap the ambient video with a static blurred snapshot if low-power mobile CPU optimization is desired.
