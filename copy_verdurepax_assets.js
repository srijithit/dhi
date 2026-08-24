const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\SRIXX\\Downloads\\images';
const destDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\verdurepax';
const logosDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos';

fs.mkdirSync(destDir, { recursive: true });
fs.mkdirSync(logosDir, { recursive: true });

const files = fs.readdirSync(srcDir);
console.log('Files in source:', files.length);

// Copy all files to destDir
files.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
});

// Copy official logo
const logoFile = path.join(srcDir, 'verdure-pax-logo.webp');
if (fs.existsSync(logoFile)) {
  fs.copyFileSync(logoFile, path.join(logosDir, 'verdurepax.png'));
  fs.copyFileSync(logoFile, path.join(logosDir, 'verdurepax.webp'));
  fs.copyFileSync(logoFile, path.join(destDir, 'logo.png'));
  fs.copyFileSync(logoFile, path.join(destDir, 'logo.webp'));
  console.log('✓ Copied official VerdurePax logo');
}

// Map high-quality showcases
const showcaseMappings = [
  ['plants.webp', 'showcase_1.png', 'showcase_1.webp'],
  ['seeds.webp', 'showcase_2.png', 'showcase_2.webp'],
  ['stands.webp', 'showcase_3.png', 'showcase_3.webp'],
  ['plant_care.webp', 'showcase_4.png', 'showcase_4.webp'],
  ['image-1.webp', 'showcase_5.png', 'showcase_5.webp'],
];

showcaseMappings.forEach(([srcName, destPng, destWebp]) => {
  const srcPath = path.join(srcDir, srcName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(destDir, destPng));
    fs.copyFileSync(srcPath, path.join(destDir, destWebp));
    console.log(`✓ Mapped ${srcName} -> ${destPng}`);
  }
});

console.log('✓ Successfully configured VerdurePax assets!');
