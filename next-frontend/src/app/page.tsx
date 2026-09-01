"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LoadingScreen from '@/components/LoadingScreen';
import LeadPopupModal from '@/components/LeadPopupModal';

export default function Home() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleOpenAudit = () => {
    setIsLeadModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <LoadingScreen />
      
      {/* Local Business & Review JSON-LD Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://dhigrowth.com/#localbusiness",
                "name": "Dhigrowth Business Pvt Ltd",
                "image": "https://dhigrowth.com/icon.svg",
                "telephone": "+91 93610 88012",
                "email": "dinesh@dhigrowth.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Door No. 119, First Floor, Kovai Thirunagar, Kalapatti Main Road, Nehru Nagar West",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "641004",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.0485934,
                  "longitude": 77.0428071
                },
                "hasMap": "https://www.google.com/maps/place/Dhigrowth+Business+Pvt+Ltd/@11.0485934,77.0421634,19z/data=!3m1!4b1!4m6!3m5!1s0x3ba85700608f4393:0x7a612ef883b16359!8m2!3d11.0485934!4d77.0428071!16s%2Fg%2F11njtdfg3_",
                "url": "https://dhigrowth.com",
                "priceRange": "$$",
                "areaServed": ["Coimbatore", "Tamil Nadu", "India"],
                "sameAs": [
                  "https://linkedin.com/company/dhigrowth"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "142",
                  "bestRating": "5"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://dhigrowth.com/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://dhigrowth.com"
                  }
                ]
              }
            ]
          })
        }}
      />

      <Navbar onOpenAudit={handleOpenAudit} />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenAudit={handleOpenAudit}
          onExploreServices={handleExploreServices}
        />

        {/* 1. Trusted Client Logos Section */}
        <ClientLogos />

        {/* Stats Strip */}
        <StatsBar />

        {/* About Section */}
        <AboutSection />

        {/* Services Grid Section */}
        <ServicesSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Process Timeline Section */}
        <ProcessSection />

        {/* Industries Pill Grid Section */}
        <IndustriesSection onOpenAudit={handleOpenAudit} />

        {/* Testimonials Grid Section */}
        <TestimonialsSection />

        {/* Ready to Grow CTA Banner */}
        <CTABanner onOpenAudit={handleOpenAudit} />
      </main>

      {/* Footer */}
      <Footer onOpenAudit={handleOpenAudit} />

      {/* WhatsApp Quick chat floating widget */}
      <FloatingWhatsApp />

      {/* Lead Proposal Popup Modal */}
      <LeadPopupModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
      />

    </div>
  );
}

// Sub-Component: Trusted Brands Logos
function ClientLogos() {
  const logos = [
    { src: "/images/case-studies/logos/infragen.png", alt: "Infragen Realtors", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/akirva.webp", alt: "Akirva Mobility", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/clean_culture.png", alt: "Clean Culture", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/nestpilot.png", alt: "NestPilot PG SaaS", className: "h-7 md:h-9" },
    { src: "/images/case-studies/logos/judah.png", alt: "Judah Food Logistics", className: "h-8 md:h-10" },
    { src: "/images/client_ruts.svg", alt: "Ruts N Rides", className: "h-9 md:h-11" },
    { src: "/images/case-studies/logos/verdurepax.webp", alt: "VerdurePax Lifestyle", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/befhue.png", alt: "Befhue Creative Agency", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/squirlio.png", alt: "Squirlio Snacks", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/amaravathy.webp", alt: "Amaravathy Coir", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/keystone.png", alt: "Keystone Enterprise", className: "h-8 md:h-10" },
    { src: "/images/client_sanika.svg", alt: "Sanika's Indian Cuisine", className: "h-9 md:h-11" },
    { src: "/images/client_karisal.webp", alt: "Karisal", className: "h-10 md:h-12" },
    { src: "/images/client_thooriga.png", alt: "Thoorigai Events", className: "h-8 md:h-10" },
    { src: "/images/client_gigabull.webp", alt: "Gigabull Luxury", className: "h-8 md:h-10" },
    { src: "/images/case-studies/logos/startten.png", alt: "Startten Platform", className: "h-8 md:h-10" }
  ];

  // Duplicate the array 3 times to ensure smooth, seamless infinite ticker scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200/60 dark:bg-[#070910] dark:border-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <span className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 block font-body">
          Our Trusted Clients
        </span>
      </div>
      
      {/* Infinite Horizontal Scrolling Ticker Container */}
      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%_-_128px),_transparent_100%)]">
        <motion.div 
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-12 md:gap-16 shrink-0 py-2"
        >
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center shrink-0 px-2">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.className} w-auto max-w-[150px] object-contain select-none pointer-events-none opacity-85 hover:opacity-100 transition-opacity duration-300 dark:brightness-110`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
