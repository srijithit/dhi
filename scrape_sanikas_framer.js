const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\sanikas_raw.html', 'utf8');

// Extract all framer image URLs
const framerRegex = /https:\/\/framerusercontent\.com\/(?:images|assets)\/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png|webp|svg)/gi;
const urls = new Set(html.match(framerRegex) || []);

console.log(`Found ${urls.size} Framer image URLs for Sanikas Restaurant:`);
console.log(Array.from(urls));

const outDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\sanikas';
fs.mkdirSync(outDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else {
        resolve(false);
      }
    }).on('error', () => resolve(false));
  });
}

async function run() {
  let count = 0;
  for (const imgUrl of urls) {
    count++;
    const filename = `sanikas_dish_${count}_` + path.basename(imgUrl);
    const dest = path.join(outDir, filename);
    const ok = await downloadFile(imgUrl, dest);
    if (ok) {
      console.log(`  ✓ Saved: ${filename}`);
    }
  }

  // Also extract readable text
  const clean = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                    .replace(/<[^>]+>/g, ' ')
                    .replace(/\s+/g, ' ');
  fs.writeFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\sanikas_extracted_text.txt', clean, 'utf8');
  console.log(`Clean text written (${clean.length} characters)`);
}

run();
