import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bright: '#2196E8',   // Primary Blue (Bright) — CTAs, links, highlights
          DEFAULT: '#4A72EB',  // Primary Blue (Brand) — primary buttons, accents
          light: '#A9C0F5',    // Secondary Blue (Light) — subtle backgrounds, tags
        },
        ink: {
          900: '#000000',      // Neutral Dark — hero backgrounds, headers
          700: '#333333',      // Neutral Gray — body text on light bg
        },
      },
      fontFamily: {
        display: ['var(--font-bebas-neue)', '"Bebas Neue"', 'sans-serif'],   // Display/H1/H2/H3
        numeric: ['var(--font-zen-dots)', '"Zen Dots"', 'sans-serif'],     // Stats, counters
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],             // Body copy, buttons, captions
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
        '48': '192px',
        '64': '256px',
        '80': '320px',
        '96': '384px',
        '112': '448px',
        '128': '512px',
        '144': '576px',
        '160': '640px',
      },
    },
  },
  plugins: [],
};

export default config;
