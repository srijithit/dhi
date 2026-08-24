const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const targetSite = {
  slug: 'sanikas',
  url: 'https://sanikasrestaurant.com/',
  destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\sanikas',
  logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\sanikas.png'
};

function fetchUrl(targetUrl) {
  return new Promise((resolve, reject) => {
    const parsed = url.parse(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(url.resolve(targetUrl, res.headers.location)));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(targetUrl, dest) {
  return new Promise((resolve) => {
    try {
      const parsed = url.parse(targetUrl);
      const client = parsed.protocol === 'https:' ? https : http;
      client.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(downloadFile(url.resolve(targetUrl, res.headers.location), dest));
        }
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
    } catch(e) {
      resolve(false);
    }
  });
}

async function main() {
  console.log(`Scraping Sanikas Restaurant (${targetSite.url})...`);
  fs.mkdirSync(targetSite.destDir, { recursive: true });
  fs.mkdirSync(path.dirname(targetSite.logoDest), { recursive: true });

  const html = await fetchUrl(targetSite.url);
  fs.writeFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\sanikas_raw.html', html, 'utf8');

  // Extract all assets
  const allAssetRegex = /["']([^"']+\.(?:png|jpg|jpeg|webp|svg|gif))["']/gi;
  const foundImages = new Set();
  let m;
  while ((m = allAssetRegex.exec(html)) !== null) foundImages.add(m[1]);

  // Check script bundles if SPA
  const scriptRegex = /<script[^>]+src=["']([^"']+)["']/gi;
  const scriptBundles = [];
  while ((m = scriptRegex.exec(html)) !== null) {
    if (m[1].includes('.js') || m[1].includes('/assets/') || m[1].includes('/_next/')) {
      scriptBundles.push(m[1]);
    }
  }

  for (const scriptSrc of scriptBundles) {
    const scriptUrl = url.resolve(targetSite.url, scriptSrc);
    try {
      console.log(`  -> Fetching bundle: ${scriptUrl}`);
      const js = await fetchUrl(scriptUrl);
      while ((m = allAssetRegex.exec(js)) !== null) {
        foundImages.add(m[1]);
      }
    } catch (e) {
      console.warn(`  ! Could not fetch bundle ${scriptUrl}`);
    }
  }

  console.log(`Found ${foundImages.size} image assets for Sanikas Restaurant.`);

  let downloadCount = 0;
  for (const asset of foundImages) {
    if (asset.startsWith('data:') || asset.includes('google') || asset.includes('w3.org') || asset.includes('cloudflare')) continue;
    let fullUrl = asset;
    if (!asset.startsWith('http')) {
      fullUrl = url.resolve(targetSite.url, asset);
    }
    let filename = path.basename(url.parse(fullUrl).pathname);
    if (!filename || filename.length < 3) filename = `asset_${downloadCount}.png`;

    const dest = path.join(targetSite.destDir, filename);
    const ok = await downloadFile(fullUrl, dest);
    if (ok) {
      downloadCount++;
      console.log(`  ✓ [${downloadCount}] Downloaded: ${filename}`);
      if (!fs.existsSync(targetSite.logoDest) && (filename.toLowerCase().includes('logo') || filename.toLowerCase().includes('favicon') || downloadCount === 1)) {
        fs.copyFileSync(dest, targetSite.logoDest);
        console.log(`    ↳ Set as logo: ${targetSite.logoDest}`);
      }
    }
  }

  // Clean text summary
  const cleanText = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                        .replace(/<[^>]+>/g, ' ')
                        .replace(/\s+/g, ' ');
  fs.writeFileSync('c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\sanikas_clean_text.txt', cleanText, 'utf8');

  console.log(`✓ Completed Sanikas Restaurant: ${downloadCount} images saved.`);
}

main().catch(console.error);
