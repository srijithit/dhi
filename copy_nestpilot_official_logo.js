const fs = require('fs');

const src = 'C:\\Users\\SRIXX\\.gemini\\antigravity-ide\\brain\\a309ae3a-2c1c-4892-81e2-b47b2482f8b3\\.user_uploaded\\media_1787572536676.png';
const destLogos = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\nestpilot.png';
const destNestpilot = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\nestpilot\\logo.png';

fs.copyFileSync(src, destLogos);
fs.copyFileSync(src, destNestpilot);

console.log('✓ Successfully saved official NESTPILOT house + wifi wordmark logo to logos/nestpilot.png and nestpilot/logo.png!');
