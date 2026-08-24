const https = require('https');
const fs = require('fs');
const path = require('path');

const jsUrl = 'https://rutsnrides.com/assets/index-DSwzY0YL.js';
const cssUrl = 'https://rutsnrides.com/assets/index-DIsWEIsz.css';

const outDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\rutsnrides';
fs.mkdirSync(outDir, { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        resolve(false);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      resolve(false);
    });
  });
}

async function main() {
  console.log('Fetching JS bundle...');
  const jsContent = await fetchUrl(jsUrl);
  fs.writeFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\rutsnrides_bundle.js', jsContent, 'utf8');

  // Extract all asset strings ending in .png, .jpg, .jpeg, .webp, .svg
  const assetRegex = /["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi;
  const assets = new Set();
  let match;
  while ((match = assetRegex.exec(jsContent)) !== null) {
    assets.add(match[1]);
  }

  console.log('Discovered assets in JS bundle:', Array.from(assets));

  // Download all valid assets
  for (const asset of assets) {
    let fullUrl = asset;
    if (!asset.startsWith('http')) {
      fullUrl = 'https://rutsnrides.com' + (asset.startsWith('/') ? asset : '/' + asset);
    }
    const filename = path.basename(asset.split('?')[0]);
    const dest = path.join(outDir, filename);
    console.log(`Downloading ${fullUrl} -> ${filename}...`);
    const success = await downloadFile(fullUrl, dest);
    if (success) {
      console.log(`  ✓ Saved ${filename}`);
    } else {
      console.log(`  ✗ Failed ${filename}`);
    }
  }

  // Also download the main logo
  const logoUrl = 'https://www.rutsnrides.com/android-chrome-512x512.png';
  const logoDest = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\rutsnrides.png';
  fs.mkdirSync(path.dirname(logoDest), { recursive: true });
  await downloadFile(logoUrl, logoDest);
  console.log('Downloaded logo to', logoDest);
}

main().catch(console.error);
