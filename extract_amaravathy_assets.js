const fs = require('fs');
const https = require('https');
const path = require('path');

const js = fs.readFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\amaravathy_bundle.js', 'utf8');

// Find all image references in bundle (like .webp, .png, .jpg, .svg)
const regex = /["']([^"']*\.(?:png|jpg|jpeg|webp|svg|gif)[^"']*)["']/gi;
const matches = new Set();
let m;
while ((m = regex.exec(js)) !== null) {
  matches.add(m[1]);
}

console.log('Total asset matches in Amaravathy:', matches.size);
console.log(Array.from(matches));

const outDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\amaravathy';
fs.mkdirSync(outDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
  for (const asset of matches) {
    if (asset.startsWith('data:') || asset.includes('w3.org')) continue;
    let fullUrl = asset;
    if (!asset.startsWith('http')) {
      fullUrl = 'https://amaravathycoir.com' + (asset.startsWith('/') ? asset : '/' + asset);
    }
    const filename = path.basename(asset.split('?')[0]);
    const dest = path.join(outDir, filename);
    const ok = await downloadFile(fullUrl, dest);
    if (ok) {
      console.log('✓ Downloaded:', filename);
    }
  }
}

run();
