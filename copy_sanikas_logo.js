const fs = require('fs');

const src = 'C:\\Users\\SRIXX\\.gemini\\antigravity-ide\\brain\\a309ae3a-2c1c-4892-81e2-b47b2482f8b3\\.user_uploaded\\media_1787568163524.jpg';
const destLogoPng = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\sanikas.png';
const destLogoJpg = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\sanikas.jpg';
const destSanikasLogo = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\sanikas\\logo.png';
const destSanikasLogoJpg = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\sanikas\\logo.jpg';

fs.copyFileSync(src, destLogoPng);
fs.copyFileSync(src, destLogoJpg);
fs.copyFileSync(src, destSanikasLogo);
fs.copyFileSync(src, destSanikasLogoJpg);

console.log('✓ Successfully copied Sanika\'s logo to all case-study and logo locations!');
