# MEDIA_AUDIT.md — Learning Tree School (Manually Segregated Folders)
**Audit Date:** 2026-09-22  
**Location of source-of-truth folders:** `public/school-assets/hero`, `public/school-assets/gallery`, `public/school-assets/videos`

---

## A & C. INVENTORY AND COUNTS

**Hero Image Count:** 1  
**Gallery Image Count:** 28  
**Video Count:** 5  
**Facilities Folder Count:** 0 (Folder not found; using existing SVG placeholders per instructions)

### 1. Hero Folder (`public/school-assets/hero`)
| Path | Type | Size (Bytes) | MD5 Hash |
|---|---|---|---|
| `public/school-assets/hero/firstday1.jpeg` | `.jpeg` | 271,469 | `F331B5E6771DC71AB7FB7C678DBA2756` |

### 2. Gallery Folder (`public/school-assets/gallery`)
| Path | Type | Size (Bytes) | MD5 Hash |
|---|---|---|---|
| `.../gallery/firstday2.jpeg` | `.jpeg` | 304,150 | `842BEAF33DED5AD6CDB4342EA877FF52` |
| `.../gallery/monsoon1.jpeg` | `.jpeg` | 812,224 | `C8DFAE40C13983FA055635D1C14C3C85` |
| `.../gallery/monsoon10.jpeg` | `.jpeg` | 868,803 | `75DB2C8623A6956FE1FAD5327A270E39` |
| `.../gallery/monsoon11.jpeg` | `.jpeg` | 800,441 | `398A655BF11FDE49E6B2C4FF19C53218` |
| `.../gallery/monsoon12.jpeg` | `.jpeg` | 894,041 | `41B8F9B0D3A398F0567BE4C96B18FF75` |
| `.../gallery/monsoon2.jpeg` | `.jpeg` | 815,838 | `E31315443DA1F36192960363328945A9` |
| `.../gallery/monsoon3.jpeg` | `.jpeg` | 736,076 | `7F04DA371F5704CD7AFC5C2F8AEDD86D` |
| `.../gallery/monsoon4.jpeg` | `.jpeg` | 789,782 | `F3481697273A54030607E462636CA7CD` |
| `.../gallery/monsoon5.jpeg` | `.jpeg` | 734,046 | `B961EC86267A280378CCA8FA5540B289` |
| `.../gallery/monsoon6.jpeg` | `.jpeg` | 768,942 | `24DB691931912E1A30762778EACAD4E9` |
| `.../gallery/monsoon7.jpeg` | `.jpeg` | 783,566 | `F91894FF43AE0840434EC9D7C7A03828` |
| `.../gallery/monsoon8.jpeg` | `.jpeg` | 833,159 | `B0AEC2F62787C56A12059064F8A942E7` |
| `.../gallery/monsoon9.jpeg` | `.jpeg` | 939,551 | `6DA92F12137AF250CD7BA524D902ACA4` |
| `.../gallery/pooja1.jpeg` | `.jpeg` | 300,584 | `C066F31F2D48CB3C9AB9E800DEAAA049` |
| `.../gallery/pooja2.jpeg` | `.jpeg` | 279,057 | `629C6C03294C8FBCB8830AEC9C5E7688` |
| `.../gallery/pooja3.jpeg` | `.jpeg` | 317,755 | `9D52582F654968BAC9C0E7A1DF4D1494` |
| `.../gallery/pooja4.jpeg` | `.jpeg` | 873,803 | `D86ED25257291C33C3B46437F27335CE` |
| `.../gallery/student_rank.jpeg` | `.jpeg` | 124,046 | `02E148D7FC49AA026E73B13DF3DC218B` |
| `.../gallery/with_teachers.jpeg` | `.jpeg` | 119,570 | `214C1DAE18000280506CA0F694D4CD16` |
| `.../gallery/yoga_day1.jpeg` | `.jpeg` | 115,029 | `51C3F49CCA04D5FF3119A5CF3BF07B09` |
| `.../gallery/yoga_day2.jpeg` | `.jpeg` | 476,380 | `6C642B524832DE12BF3B493F9D00F6AB` |
| `.../gallery/yoga_day3.jpeg` | `.jpeg` | 485,027 | `8197C996BEAD29309287CBE8490BBEC4` |
| `.../gallery/yoga_day4.jpeg` | `.jpeg` | 446,351 | `1908A943972AB29F30DA65EAC02D4C25` |
| `.../gallery/yoga_day5.jpeg` | `.jpeg` | 446,351 | **`1908A943972AB29F30DA65EAC02D4C25`** |
| `.../gallery/yoga_day6.jpeg` | `.jpeg` | 106,599 | `21AAA6D74AE7AD37B0BACF26F5053352` |
| `.../gallery/yoga_day7.jpeg` | `.jpeg` | 424,413 | `C0704DC6F49FF21604F47DABB2509153` |
| `.../gallery/yoga_day8.jpeg` | `.jpeg` | 433,667 | `6CE9B05786E1BBBB5C396789743E7D42` |
| `.../gallery/yoga_day9.jpeg` | `.jpeg` | 107,951 | `C99B5027A8477554C9E3D79675DC6B65` |

### 3. Videos Folder (`public/school-assets/videos`)
| Path | Type | Size (Bytes) | MD5 Hash |
|---|---|---|---|
| `.../videos/painting.mp4` | `.mp4` | 15,176,240 | `26E434C859F4FF6E71CABDBB41726C08` |
| `.../videos/video-1.mp4` | `.mp4` | 9,105,679 | `67DA3C3F17B69B886D0C31CB686AF7B0` |
| `.../videos/video-2.mp4` | `.mp4` | 2,655,603 | `D6ACFE37E7024976519DEB438107B3DF` |
| `.../videos/video-3.mp4` | `.mp4` | 3,915,091 | `5788B4FC83184F58B5A5B56D234CFC09` |
| `.../videos/video-4.mp4` | `.mp4` | 1,401,752 | `6295326567157E3A60ABBBDB9841695D` |

---

## B. CROSS-FOLDER DUPLICATE CHECK

- **Hero vs Gallery:** No matches. The single Hero image (`firstday1.jpeg`) is unique.
- **Inside Video:** No matches. All 5 videos are unique.
- **Inside Gallery:** ⚠️ **1 exact match found**. `yoga_day4.jpeg` and `yoga_day5.jpeg` are byte-identical files (Hash: `1908A943972AB29F30DA65EAC02D4C25`).

---

## D. FLAGS & WARNINGS (Read-only, do not fix)

1. **Underscores used in filenames:** `pooja1.jpeg` or `yoga_day1.jpeg`. (No spaces or uppercase letters found in the reorganized folders).
2. **Missing Thumbnails/Posters:** No images found in the `videos` folder. The `<video>` tags will rely on the first frame of the MP4.
3. **Old WhatsApp files still in `public/school-assets`:** The old files (e.g. `WhatsApp Image...`) remain in the root of `school-assets`. The new segregated folders (`hero`, `gallery`, `videos`) correctly exist alongside them.
4. (No heavy videos found — all under 16 MB. All formats are `.mp4` / `.jpeg`. No unsupported formats).

---

## E. CURRENT COMPONENT USAGE

1. **`Hero.tsx`**: Uses `next/image` with `fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw"`. Currently calls `getHeroGalleryImage()` from `data/gallery.ts`, which references the old WhatsApp file path representing the first day.
2. **`Gallery.tsx`**: Maps over `galleryImages` from `data/gallery.ts`. Renders via `next/image` with `fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`. Lightbox uses `next/image` with `fill className="object-contain"`.
3. **`Videos.tsx`**: Maps over `getDisplayVideos(4)` from `data/videos.ts`. Renders a plain HTML5 `<video src={...} className="w-full h-full object-cover" muted playsInline loop preload="metadata" />`. Uses intersection observer for scroll-autoplay. Hardcoded title arrays have already been removed from this component; the component reads `video.title` from the data file.
4. **`Facilities.tsx`**: Maps over `facilities` from `data/facilities.ts`. Renders via `next/image` with `fill className="object-cover"`. Currently mapping 4 SVG placeholders located in `public/images/facilities/`. No real photos used here.
5. **`data/gallery.ts`**: Still points to the old 28 WhatsApp URLs. Uses shape: `id, src, alt, title, category`.
6. **`data/videos.ts`**: Still points to the old 7 WhatsApp URLs with the title `"Video Coming Soon"`. Uses shape: `id, title, description, thumbnail, videoUrl, isUnverified`.
