const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\SRIXX\\Downloads\\akirva';
const destDir = 'c:\\Users\\SRIXX\\.gemini\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\akirva';
const logosDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos';

fs.mkdirSync(destDir, { recursive: true });
fs.mkdirSync(logosDir, { recursive: true });

const files = fs.readdirSync(srcDir);
console.log('Files in source:', files);

// High-res screenshots
const highResScreenshots = [
  'Jad4LLRqbSKq_lVoUOEp17OHh4059EfcGfUAHurDT9ya9fBeXhmwxaYbkOiAN8MsRjUbkaB-yOXcCxku8RcOoQ_w1052-h592-rw.webp',
  '26FJ26mzAhDGV1We8ls8NXZK1Y6qm7XKrYJJx8ShruCg88NLVZ2ZYa4xIQXIsvJCcMBm7cLETMOnPsXFFwPRFQ_w1052-h592-rw.webp',
  '2UGhvauPH7Fa7Objey-hT_Oel7EzAFOXkDkF06IuinhANoFmIQEjtnS458YP6S_oX2IaS49nxEOar_K6ISHlxJ0_w1052-h592-rw.webp',
  'nl_88xbocsMx5xgXZsCCXY6SrrKz0OL1eEhPFCJ3vPcHFHhYTSuytLjmZJRbJ_rzRXGXYcUndgGzDfLJ7MUP0g_w1052-h592-rw.webp',
  'ZLJv2VvJ4eMkqKjkkas5_EzYDcD4-aAs_8L0d4GygfDHHycvPKMOmj6xgEbpO10KeIUN5J687B84zCaf5BIVJA_w1052-h592-rw.webp'
];

highResScreenshots.forEach((file, index) => {
  const srcPath = path.join(srcDir, file);
  if (fs.existsSync(srcPath)) {
    const destName = `showcase_${index + 1}.webp`;
    const destPngName = `showcase_${index + 1}.png`;
    fs.copyFileSync(srcPath, path.join(destDir, destName));
    fs.copyFileSync(srcPath, path.join(destDir, destPngName));
    console.log(`✓ Copied ${file} -> ${destName} & ${destPngName}`);
  }
});

// Copy logo icon
const logoFile = 'KWHUEjmUZvZWpcSxobGXVrDLA1jRBdvtNyrcZ7ixRgxBTJMfeSBOa6Z4RZX2ecYHOvmd450XX47IN8RfjlAkFA_s0-br30.webp';
const logoSrc = path.join(srcDir, logoFile);
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, path.join(logosDir, 'akirva.png'));
  fs.copyFileSync(logoSrc, path.join(logosDir, 'akirva.webp'));
  fs.copyFileSync(logoSrc, path.join(destDir, 'logo.png'));
  fs.copyFileSync(logoSrc, path.join(destDir, 'logo.webp'));
  console.log('✓ Copied Akirva official logo to logos/akirva.png and akirva/logo.png');
}

// Copy all files
files.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
});

console.log('✓ Successfully copied all Akirva assets!');
