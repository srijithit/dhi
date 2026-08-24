const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const sites = [
  {
    slug: 'gigabull',
    url: 'https://www.gigabull.in/',
    destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\gigabull',
    logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\gigabull.png'
  },
  {
    slug: 'amaravathy',
    url: 'https://amaravathycoir.com/',
    destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\amaravathy',
    logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\amaravathy.svg'
  },
  {
    slug: 'kiipl',
    url: 'https://kiipl.co.in/',
    destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\kiipl',
    logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\kiipl.png'
  },
  {
    slug: 'rutsnrides',
    url: 'https://rutsnrides.com/',
    destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\rutsnrides',
    logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\rutsnrides.png'
  },
  {
    slug: 'nestpilot',
    url: 'https://nestpilot.in/',
    destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\nestpilot',
    logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\nestpilot.png'
  }
];

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

async function processSite(site) {
  console.log(`\n========================================`);
  console.log(`Processing: ${site.slug} (${site.url})`);
  console.log(`========================================`);
  fs.mkdirSync(site.destDir, { recursive: true });
  fs.mkdirSync(path.dirname(site.logoDest), { recursive: true });

  try {
    const html = await fetchUrl(site.url);
    fs.writeFileSync(`c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\${site.slug}_raw.html`, html, 'utf8');

    const allAssetRegex = /["']([^"']+\.(?:png|jpg|jpeg|webp|svg|gif))["']/gi;
    const foundImages = new Set();
    let m;
    while ((m = allAssetRegex.exec(html)) !== null) foundImages.add(m[1]);

    // Find JS script bundles
    const scriptRegex = /<script[^>]+src=["']([^"']+)["']/gi;
    const scriptBundles = [];
    while ((m = scriptRegex.exec(html)) !== null) {
      if (m[1].includes('.js') || m[1].includes('/assets/') || m[1].includes('/_next/')) {
        scriptBundles.push(m[1]);
      }
    }

    for (const scriptSrc of scriptBundles) {
      const scriptUrl = url.resolve(site.url, scriptSrc);
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

    console.log(`  Found ${foundImages.size} asset candidates`);

    let downloadCount = 0;
    for (const asset of foundImages) {
      if (asset.startsWith('data:') || asset.includes('google') || asset.includes('w3.org') || asset.includes('cloudflare')) continue;
      let fullUrl = asset;
      if (!asset.startsWith('http')) {
        fullUrl = url.resolve(site.url, asset);
      }
      let filename = path.basename(url.parse(fullUrl).pathname);
      if (!filename || filename.length < 3) filename = `asset_${downloadCount}.png`;

      const dest = path.join(site.destDir, filename);
      const ok = await downloadFile(fullUrl, dest);
      if (ok) {
        downloadCount++;
        console.log(`  ✓ [${downloadCount}] Downloaded: ${filename}`);
        if (!fs.existsSync(site.logoDest) && (filename.toLowerCase().includes('logo') || filename.toLowerCase().includes('favicon') || downloadCount === 1)) {
          fs.copyFileSync(dest, site.logoDest);
          console.log(`    ↳ Copied to logo: ${site.logoDest}`);
        }
      }
    }

    // Clean text summary
    const cleanText = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                          .replace(/<[^>]+>/g, ' ')
                          .replace(/\s+/g, ' ');
    fs.writeFileSync(`c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\${site.slug}_clean_text.txt`, cleanText, 'utf8');

    console.log(`✓ Completed ${site.slug}: ${downloadCount} images saved.`);
  } catch (err) {
    console.error(`Error with ${site.slug}:`, err.message);
  }
}

async function run() {
  for (const site of sites) {
    await processSite(site);
  }
  console.log('\nAll client sites successfully scraped & downloaded!');
}

run();
