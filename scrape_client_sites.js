const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const sites = [
  {
    name: 'amaravathy',
    url: 'https://amaravathycoir.com/',
    destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\amaravathy',
    logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\amaravathy.png'
  },
  {
    name: 'kiipl',
    url: 'https://kiipl.co.in/',
    destDir: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\kiipl',
    logoDest: 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\kiipl.png'
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
  console.log(`\n=== Processing ${site.name} (${site.url}) ===`);
  fs.mkdirSync(site.destDir, { recursive: true });
  fs.mkdirSync(path.dirname(site.logoDest), { recursive: true });

  try {
    const html = await fetchUrl(site.url);
    fs.writeFileSync(`c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\${site.name}_raw.html`, html, 'utf8');

    // Extract all image sources from <img>, style backgrounds, and <script> bundles
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;
    const allAssetRegex = /["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi;
    
    const foundImages = new Set();
    let m;
    while ((m = imgRegex.exec(html)) !== null) foundImages.add(m[1]);
    while ((m = bgRegex.exec(html)) !== null) foundImages.add(m[1]);
    while ((m = allAssetRegex.exec(html)) !== null) foundImages.add(m[1]);

    // Also look for JS script bundles if SPA
    const scriptRegex = /<script[^>]+src=["']([^"']+)["']/gi;
    const scriptBundles = [];
    while ((m = scriptRegex.exec(html)) !== null) {
      if (m[1].endsWith('.js') || m[1].includes('/assets/')) scriptBundles.push(m[1]);
    }

    for (const scriptSrc of scriptBundles) {
      const scriptUrl = url.resolve(site.url, scriptSrc);
      try {
        console.log(`Fetching script bundle: ${scriptUrl}`);
        const js = await fetchUrl(scriptUrl);
        while ((m = allAssetRegex.exec(js)) !== null) foundImages.add(m[1]);
      } catch (e) {
        console.warn('Could not fetch script:', scriptUrl);
      }
    }

    console.log(`Found ${foundImages.size} image assets for ${site.name}`);

    // Download found images
    let downloadCount = 0;
    for (const imgPath of foundImages) {
      if (imgPath.startsWith('data:') || imgPath.includes('google') || imgPath.includes('facebook') || imgPath.includes('cloudflare')) continue;
      const fullUrl = url.resolve(site.url, imgPath);
      let filename = path.basename(url.parse(fullUrl).pathname);
      if (!filename || filename.length < 3) filename = `asset_${downloadCount}.png`;

      const dest = path.join(site.destDir, filename);
      const ok = await downloadFile(fullUrl, dest);
      if (ok) {
        downloadCount++;
        console.log(`  ✓ [${downloadCount}] Downloaded: ${filename}`);
        if (!fs.existsSync(site.logoDest) && (filename.toLowerCase().includes('logo') || filename.toLowerCase().includes('favicon') || downloadCount === 1)) {
          fs.copyFileSync(dest, site.logoDest);
          console.log(`    ↳ Set as logo: ${site.logoDest}`);
        }
      }
    }

    // Extract clean text
    const cleanText = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                          .replace(/<[^>]+>/g, ' ')
                          .replace(/\s+/g, ' ');
    fs.writeFileSync(`c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\${site.name}_details.txt`, cleanText, 'utf8');
    console.log(`Wrote clean text details to ${site.name}_details.txt (${cleanText.length} characters)`);

  } catch (err) {
    console.error(`Error processing ${site.name}:`, err);
  }
}

async function run() {
  for (const site of sites) {
    await processSite(site);
  }
  console.log('\nAll sites processed successfully!');
}

run();
