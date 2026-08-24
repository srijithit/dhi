const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\rutsnrides';
const destDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\ruts-n-rides';
fs.mkdirSync(destDir, { recursive: true });

// Copy training images
const filesToMap = {
  'showcase_1.png': 'tp1-CrFTknmu.jpg',
  'showcase_2.png': 'tp2-DAFEpQ4m.jpg',
  'showcase_3.png': 'tp3-BV2IOvdh.jpg',
  'showcase_4.png': 'og-racing-image-CTp8AlAM.webp',
  'showcase_5.png': 'service-station-DdqMI-XM.JPG',
  'tp1.jpg': 'tp1-CrFTknmu.jpg',
  'tp2.jpg': 'tp2-DAFEpQ4m.jpg',
  'tp3.jpg': 'tp3-BV2IOvdh.jpg',
  'foundation.jpg': 'tp1-CrFTknmu.jpg',
  'dirt_training.jpg': 'tp2-DAFEpQ4m.jpg',
  'custom_training.jpg': 'tp3-BV2IOvdh.jpg'
};

for (const [destName, srcName] of Object.entries(filesToMap)) {
  const srcFile = path.join(srcDir, srcName);
  const destFile = path.join(destDir, destName);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`✓ Copied ${srcName} -> ${destName}`);
  } else {
    console.warn(`! Missing source file: ${srcName}`);
  }
}

// Copy logo
const logoSrc = path.join(srcDir, 'android-chrome-512x512.png');
const logoDest = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\ruts-n-rides.png';
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, logoDest);
  console.log(`✓ Copied logo to ${logoDest}`);
}
