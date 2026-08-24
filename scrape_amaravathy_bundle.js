const https = require('https');
const fs = require('fs');
const path = require('path');

const jsUrl = 'https://amaravathycoir.com/assets/index-72hnQW_S.js';
const outDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\amaravathy';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
    }).on('error', () => {
      fs.unlink(dest, () => {});
      resolve(false);
    });
  });
}

async function main() {
  console.log('Fetching amaravathy JS bundle...');
  const js = await fetchUrl(jsUrl);
  fs.writeFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\amaravathy_bundle.js', js, 'utf8');

  // Extract all assets
  const assetRegex = /["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi;
  const assets = new Set();
  let m;
  while ((m = assetRegex.exec(js)) !== null) {
    assets.add(m[1]);
  }

  console.log('Assets found in amaravathy bundle:', Array.from(assets));

  for (const asset of assets) {
    let fullUrl = asset;
    if (!asset.startsWith('http')) {
      fullUrl = 'https://amaravathycoir.com' + (asset.startsWith('/') ? asset : '/' + asset);
    }
    const filename = path.basename(asset.split('?')[0]);
    const dest = path.join(outDir, filename);
    const ok = await downloadFile(fullUrl, dest);
    if (ok) {
      console.log(`  ✓ Saved ${filename}`);
    }
  }

  // Also download the amaravathy SVG logo
  const svgUrl = 'https://amaravathycoir.com/amaravathy.svg';
  const logoDest = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\amaravathy.svg';
  await downloadFile(svgUrl, logoDest);
  console.log('Saved SVG logo to', logoDest);
}

main().catch(console.error);
