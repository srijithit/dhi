const https = require('https');
const fs = require('fs');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHtml(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function getJudahIcon() {
  try {
    const playUrl = 'https://play.google.com/store/apps/details?id=com.judah.fooddelivery&hl=en_IN';
    console.log('Fetching Google Play Store...');
    const html = await fetchHtml(playUrl);
    
    // Look for image urls
    const imgMatches = [...html.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+/g)].map(m => m[0]);
    console.log('Found Play Store image URLs:', imgMatches.slice(0, 5));

    if (imgMatches.length > 0) {
      const iconUrl = imgMatches[0] + '=w512-h512';
      console.log('Downloading icon from:', iconUrl);
      const dest = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\judah.png';
      
      const file = fs.createWriteStream(dest);
      https.get(iconUrl, response => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('✓ Successfully downloaded Judah official icon to logos/judah.png');
        });
      });
      return;
    }
  } catch (err) {
    console.error('Play Store fetch error:', err.message);
  }

  try {
    const appleUrl = 'https://apps.apple.com/in/app/judah-delivery/id6758565796';
    console.log('Fetching Apple App Store...');
    const html = await fetchHtml(appleUrl);
    const appleImgMatches = [...html.matchAll(/https:\/\/is[0-9]-ssl\.mzstatic\.com\/image\/thumb\/[^\s"'>]+/g)].map(m => m[0]);
    console.log('Found Apple image URLs:', appleImgMatches.slice(0, 5));
    if (appleImgMatches.length > 0) {
      const iconUrl = appleImgMatches[0].replace(/\/[0-9]+x[0-9]+[a-z]*\./, '/512x512bb.');
      console.log('Downloading Apple icon:', iconUrl);
      const dest = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\logos\\judah.png';
      const file = fs.createWriteStream(dest);
      https.get(iconUrl, response => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('✓ Successfully downloaded Judah Apple icon to logos/judah.png');
        });
      });
    }
  } catch (err) {
    console.error('Apple fetch error:', err.message);
  }
}

getJudahIcon();
