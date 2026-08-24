const fs = require('fs');
const path = require('path');

const svgSrc = 'C:\\Users\\SRIXX\\Downloads\\vector_graphic_1.svg';
const img1Src = 'C:\\Users\\SRIXX\\.gemini\\antigravity-ide\\brain\\a309ae3a-2c1c-4892-81e2-b47b2482f8b3\\.user_uploaded\\media_1787572168977.png';
const img2Src = 'C:\\Users\\SRIXX\\.gemini\\antigravity-ide\\brain\\a309ae3a-2c1c-4892-81e2-b47b2482f8b3\\.user_uploaded\\media_1787572170418.png';

const destNestpilotDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\nestpilot';
const destLogosDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos';

fs.mkdirSync(destNestpilotDir, { recursive: true });
fs.mkdirSync(destLogosDir, { recursive: true });

// Copy SVG Logo
if (fs.existsSync(svgSrc)) {
  fs.copyFileSync(svgSrc, path.join(destLogosDir, 'nestpilot.svg'));
  fs.copyFileSync(svgSrc, path.join(destLogosDir, 'nestpilot.png')); // Fallback
  fs.copyFileSync(svgSrc, path.join(destNestpilotDir, 'logo.svg'));
  fs.copyFileSync(svgSrc, path.join(destNestpilotDir, 'logo.png'));
  console.log('✓ Copied vector_graphic_1.svg to nestpilot logos');
}

// Copy UI Screenshots
if (fs.existsSync(img1Src)) {
  fs.copyFileSync(img1Src, path.join(destNestpilotDir, 'showcase_1.png'));
  fs.copyFileSync(img1Src, path.join(destNestpilotDir, 'dashboard.png'));
  console.log('✓ Copied dashboard card to showcase_1.png');
}

if (fs.existsSync(img2Src)) {
  fs.copyFileSync(img2Src, path.join(destNestpilotDir, 'showcase_2.png'));
  fs.copyFileSync(img2Src, path.join(destNestpilotDir, 'banner.png'));
  console.log('✓ Copied autopilot banner to showcase_2.png');
}

// Duplicate for 3, 4, 5 so all cards have real visuals
if (fs.existsSync(img1Src)) {
  fs.copyFileSync(img1Src, path.join(destNestpilotDir, 'showcase_3.png'));
  fs.copyFileSync(img1Src, path.join(destNestpilotDir, 'showcase_5.png'));
}
if (fs.existsSync(img2Src)) {
  fs.copyFileSync(img2Src, path.join(destNestpilotDir, 'showcase_4.png'));
}

console.log('✓ Successfully configured NestPilot assets!');
