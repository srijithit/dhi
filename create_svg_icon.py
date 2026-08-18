import os

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <!-- Background Circle Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF" />
      <stop offset="45%" stop-color="#2196E8" />
      <stop offset="100%" stop-color="#00D0FF" />
    </linearGradient>

    <!-- Upward Growth Swoosh Gradient -->
    <linearGradient id="swooshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00E5FF" />
      <stop offset="100%" stop-color="#00FFF0" />
    </linearGradient>

    <!-- Drop Shadow for Arrow -->
    <filter id="arrowShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="1" dy="3" stdDeviation="3" flood-color="#003399" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Base Circle -->
  <circle cx="256" cy="256" r="236" fill="url(#bgGrad)" />

  <!-- Top Cyan Dot -->
  <circle cx="270" cy="140" r="34" fill="#00F0FF" />

  <!-- White Rocket/Arrow Wings -->
  <g filter="url(#arrowShadow)">
    <!-- Main Left Wing -->
    <path 
      d="M 115 305 L 395 160 L 265 272 Z" 
      fill="#FFFFFF" 
    />
    <!-- Shaded Right Wing -->
    <path 
      d="M 395 160 L 325 385 L 265 272 Z" 
      fill="#E6F4FF" 
    />
  </g>

  <!-- Bottom-Right Outer Growth Swoosh with Arrowhead -->
  <path 
    d="M 190 468 C 340 480 460 380 472 235 C 476 195 466 150 452 135 C 448 152 442 185 435 220 C 418 340 315 430 190 468 Z" 
    fill="url(#swooshGrad)" 
  />
  <!-- Swoosh Arrowhead -->
  <path 
    d="M 452 135 L 485 210 L 430 198 Z" 
    fill="#00FFF0" 
  />
</svg>
'''

svg_paths = [
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\src\app\icon.svg",
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\public\icon.svg",
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\public\favicon.svg",
]

for p in svg_paths:
    with open(p, "w", encoding="utf-8") as f:
        f.write(svg_content.strip())
    print(f"Created vector SVG icon at {p}")
