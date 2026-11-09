import fs from 'fs';
import path from 'path';

const videosDir = path.resolve(process.cwd(), 'public/school-assets/videos');

function scanMp4File(filePath) {
  const buffer = fs.readFileSync(filePath);
  const size = buffer.length;
  const fileName = path.basename(filePath);

  // Search for atom names and common metadata signatures in buffer
  const signatures = [
    { name: 'GPS Coordinates (©xyz atom)', pattern: Buffer.from([0xa9, 0x78, 0x79, 0x7a]) },
    { name: 'Camera Make (©mak atom)', pattern: Buffer.from([0xa9, 0x6d, 0x61, 0x6b]) },
    { name: 'Camera Model (©mod atom)', pattern: Buffer.from([0xa9, 0x6d, 0x6f, 0x64]) },
    { name: 'Software (©swr atom)', pattern: Buffer.from([0xa9, 0x73, 0x77, 0x72]) },
    { name: 'Apple User Data atom', pattern: Buffer.from('Apple', 'ascii') },
    { name: 'QuickTime User Data (udta)', pattern: Buffer.from('udta', 'ascii') },
  ];

  const foundSignatures = [];
  for (const sig of signatures) {
    let index = buffer.indexOf(sig.pattern);
    if (index !== -1) {
      foundSignatures.push({
        name: sig.name,
        offset: index
      });
    }
  }

  // Scan for GPS ISO 6709 pattern: +XX.XXXX+YYY.YYYY/
  const textContent = buffer.toString('latin1');
  const gpsRegex = /[+-][0-9]{2,3}\.[0-9]{2,6}[+-][0-9]{2,3}\.[0-9]{2,6}/g;
  const gpsMatches = textContent.match(gpsRegex) || [];

  // Device make/model text scan
  const deviceRegex = /(iPhone|iPad|Samsung|Xiaomi|Pixel|OnePlus|Nikon|Canon|Sony|GoPro)/gi;
  const deviceMatches = textContent.match(deviceRegex) || [];

  return {
    file: fileName,
    sizeBytes: size,
    sizeMB: (size / (1024 * 1024)).toFixed(2),
    foundSignatures,
    gpsMatches: Array.from(new Set(gpsMatches)),
    deviceMatches: Array.from(new Set(deviceMatches))
  };
}

async function run() {
  if (!fs.existsSync(videosDir)) {
    console.error('Videos directory not found:', videosDir);
    process.exit(1);
  }

  const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.mp4'));
  console.log(`Scanning ${files.length} MP4 videos in ${videosDir}...\n`);

  const results = [];
  for (const file of files) {
    const res = scanMp4File(path.join(videosDir, file));
    results.push(res);
    console.log(`[${res.file}] (${res.sizeMB} MB)`);
    console.log(`  - Signatures: ${res.foundSignatures.length > 0 ? res.foundSignatures.map(s => s.name).join(', ') : 'None'}`);
    console.log(`  - GPS Location Strings: ${res.gpsMatches.length > 0 ? res.gpsMatches.join(', ') : 'None found'}`);
    console.log(`  - Camera/Device Strings: ${res.deviceMatches.length > 0 ? res.deviceMatches.join(', ') : 'None found'}`);
    console.log('');
  }

  const hasAnyGps = results.some(r => r.gpsMatches.length > 0 || r.foundSignatures.some(s => s.name.includes('GPS')));
  if (!hasAnyGps) {
    console.log('Result: No GPS coordinates or embedded location metadata found in any video.');
  } else {
    console.log('Result: WARNING - GPS or location metadata detected!');
  }
}

run();

