import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = process.argv[2] || 'public/school-assets/gallery';
const outputDir = process.argv[3] || 'public/school-assets/gallery-clean';

async function stripMetadata() {
  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  console.log(`Processing ${files.length} images from ${inputDir} -> ${outputDir}...\n`);

  let gpsFoundCount = 0;

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    const meta = await sharp(inputPath).metadata();
    let hasGps = false;

    if (meta.exif) {
      const exifStr = meta.exif.toString('latin1');
      if (exifStr.includes('GPS') || /latitude|longitude/i.test(exifStr)) {
        hasGps = true;
        gpsFoundCount++;
        console.log(`[ALERT] GPS detected in: ${file}`);
      }
    }

    // Strip EXIF, IPTC, XMP metadata and save cleaned copy
    await sharp(inputPath)
      .rotate() // auto-orient based on EXIF before stripping
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(outputPath);

    console.log(`Cleaned: ${file}${hasGps ? ' (GPS removed)' : ''}`);
  }

  console.log(`\nMetadata stripping finished!`);
  console.log(`Total files processed: ${files.length}`);
  console.log(`Files with GPS found: ${gpsFoundCount}`);
  console.log(`\nTo swap cleaned files in:`);
  console.log(`1. Backup ${inputDir}`);
  console.log(`2. Copy all files from ${outputDir} to ${inputDir}`);
  console.log(`3. Remove ${outputDir}`);
}

stripMetadata().catch(err => {
  console.error('Error stripping metadata:', err);
  process.exit(1);
});

