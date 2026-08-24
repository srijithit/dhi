const fs = require('fs');
const path = require('path');
const https = require('https');

const htmlPath = 'C:\\Users\\SRIXX\\.gemini\\antigravity-ide\\brain\\a309ae3a-2c1c-4892-81e2-b47b2482f8b3\\.system_generated\\steps\\1710\\content.md';
const html = fs.readFileSync(htmlPath, 'utf8');

// Extract all image tags
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}

// Extract all links
const linkRegex = /<link[^>]+href=["']([^"']+)["'][^>]*>/gi;
const links = [];
while ((match = linkRegex.exec(html)) !== null) {
  links.push(match[1]);
}

console.log('Images found:', images);
console.log('Links found:', links.filter(l => l.includes('.png') || l.includes('.svg') || l.includes('.jpg') || l.includes('.webp') || l.includes('.ico')));

// Let's create a directory for nestpilot assets
const outputDir = 'c:\\Users\\SRIXX\\.gemini\\antigravity\\scratch\\dhi\\next-frontend\\public\\images\\case-studies\\nestpilot';
fs.mkdirSync(outputDir, { recursive: true });
