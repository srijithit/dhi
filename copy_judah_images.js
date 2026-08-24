const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\SRIXX\\Downloads\\images';
const destDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\judah';
fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir);
console.log('Files in source:', files);

// Filter out duplicates (prefer the higher resolution ones)
const highResFiles = [
  '5UvAI8tHfoThp5Uwj0lLLJb66dJoHVQ9mCgVhn21QNodecYGTRen5QGRGOEqihyv8JwDtfrBdxaxAvqlEp11XQ_w1052-h592-rw.webp',
  'NWwJdndAFw8NuojRtapGE9X9_ThowyZ4Zug3WbosKwR4aEuR0kS9LH8J7nAheE_u2pA3ve9tl4rWh21iDuL6wnU_w1052-h592-rw.webp',
  'sEqkj5QjhN7LxIdHIM3YqZ9CQNC4IX8uwVDJByleRUJoq08SwXrPSkfoj0VL3osayBxXwHCE9THXHFZ-9W8WUQ_w1052-h592-rw.webp',
  'TN2OioRTvsT11nLBZH7HSI6Wfg_h5YLjLKDz3o98-j_zwh0zKvxe0f25qWbyVC0ia0UuSpcz8vzXBB4vahDo_w526-h296-rw.webp',
  'iutTJIVNOLEi9t1XQ-ml2v-sb9Xr7dDVnx0UFP_XuzaG_rxGHTXJ300aOBJIoWjvfbPfEi4d6QEzBf1PXQKMydM_w526-h296-rw.webp',
  'tSKSk9iyUDq4m4ZUGLVK1fd2uIPsPMSKE2upVfPaE2_9PJDsv_SBfshbBBdVqA5T05BFBVzFYL0oKBP50CBkGA4_w240-h480-rw.webp'
];

highResFiles.forEach((file, index) => {
  const srcPath = path.join(srcDir, file);
  if (fs.existsSync(srcPath)) {
    const destName = `showcase_${index + 1}.webp`;
    const destPngName = `showcase_${index + 1}.png`;
    fs.copyFileSync(srcPath, path.join(destDir, destName));
    fs.copyFileSync(srcPath, path.join(destDir, destPngName));
    fs.copyFileSync(srcPath, path.join(destDir, `screen_${index + 1}.webp`));
    console.log(`✓ Copied ${file} -> ${destName} & ${destPngName}`);
  }
});

// Also copy all source files with their original names just in case
files.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
});

console.log('✓ Successfully copied all Judah images to public/images/case-studies/judah/');
