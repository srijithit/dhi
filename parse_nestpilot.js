const fs = require('fs');
const https = require('https');

const htmlPath = 'C:\\Users\\SRIXX\\.gemini\\antigravity-ide\\brain\\a309ae3a-2c1c-4892-81e2-b47b2482f8b3\\.system_generated\\steps\\1710\\content.md';
const html = fs.readFileSync(htmlPath, 'utf8');

// Strip HTML tags for clean text reading
const cleanText = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                      .replace(/<[^>]+>/g, ' ')
                      .replace(/\s+/g, ' ');

fs.writeFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\nestpilot_text.txt', cleanText, 'utf8');
console.log('Clean text written, length:', cleanText.length);

// Download favicon
const favUrl = 'https://nestpilot.in/favicons/favicon-96.png';
const destLogo = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\nestpilot.png';
const file = fs.createWriteStream(destLogo);
https.get(favUrl, (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved nestpilot logo to', destLogo);
  });
});
