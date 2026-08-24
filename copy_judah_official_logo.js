const fs = require('fs');

const src = 'C:\\Users\\SRIXX\\.gemini\\antigravity-ide\\brain\\a309ae3a-2c1c-4892-81e2-b47b2482f8b3\\.user_uploaded\\media_1787570816585.png';
const destLogos = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\judah.png';
const destJudah = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\judah\\logo.png';

fs.copyFileSync(src, destLogos);
fs.copyFileSync(src, destJudah);

console.log('✓ Successfully saved official Judah green scooter delivery logo to logos/judah.png and judah/logo.png!');
