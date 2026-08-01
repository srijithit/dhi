import "./globals.css";
import { Bebas_Neue, Zen_Dots, Inter } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen-dots',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "DhiGrowth — Digital Agency in Coimbatore | Web, AI & Marketing",
  description: "DhiGrowth is Coimbatore's top digital agency offering website development, AI solutions, SEO, Meta & Google Ads, social media, and business automation services.",
  keywords: "Digital Agency Coimbatore, Website Development Coimbatore, Mobile App Development Coimbatore, AI Development Coimbatore, WhatsApp Marketing, SEO Coimbatore, Google Ads",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${zenDots.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-white dark:bg-[#000000] text-slate-900 dark:text-white font-body antialiased selection:bg-[#2196E8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
