"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronDown, Globe, Calendar, User, ExternalLink, Activity, Target, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AuditCalculator from '@/components/AuditCalculator';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CustomCursor from '@/components/CustomCursor';

import LoadingScreen from '@/components/LoadingScreen';
import LeadPopupModal from '@/components/LeadPopupModal';

// Custom robust SVG LinkedIn icon to prevent Lucide React version mismatch errors
const LinkedInIcon = (props: any) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 0 0 1.3-1.37A1.32 1.32 0 0 0 6.5 5.6a1.37 1.37 0 0 0-1.3 1.37A1.32 1.32 0 0 0 6.5 8.37m1.4 10.13V10.13h-2.8v8.37h2.8z" />
  </svg>
);

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

      {/* Custom Mouse Cursor */}
      <CustomCursor />

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

        {/* 2. Metrics & Business Outcomes Section */}
        <MetricsSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Process Timeline Section */}
        <ProcessSection />

        {/* Industries Pill Grid Section */}
        <IndustriesSection onOpenAudit={handleOpenAudit} />

        {/* Testimonials Grid Section */}
        <TestimonialsSection />

        {/* 4. Blog & Insights Section */}
        <BlogSection />

        {/* 5. FAQ Accordion Section */}
        <FAQSection />

        {/* Interactive Audit & Budget Calculator Section */}
        <AuditCalculator onOpenWhatsApp={(budget, reach, leads) => {
          const msg = encodeURIComponent(`Hi DhiGrowth, I want to claim a free digital performance audit for my business! Selected Monthly Budget: ₹${budget.toLocaleString('en-IN')}, Est. Monthly Reach: ${reach.toLocaleString('en-IN')}, Est. Qualified Leads: ${leads}+/mo.`);
          window.location.href = `https://api.whatsapp.com/send?phone=919361088012&text=${msg}`;
        }} />

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
    { src: "/images/client_ruts.svg", alt: "Ruts N Rides", className: "h-10 md:h-12" },
    { src: "/images/client_sanika.svg", alt: "Sanika's Indian Cuisine", className: "h-10 md:h-12" },
    { src: "/images/client_karisal.webp", alt: "Karisal", className: "h-12 md:h-14" },
    { src: "/images/client_thooriga.png", alt: "Thoorigai", className: "h-10 md:h-12" },
    { src: "/images/client_gigabull.webp", alt: "Gigabull", className: "h-10 md:h-12" }
  ];

  // Duplicate the array 4 times to ensure continuous marquee scrolling space
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200/60 dark:bg-[#070910] dark:border-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider block font-body">
          Our Trusted Clients
        </span>
      </div>
      
      {/* Infinite Horizontal Scrolling Ticker Container */}
      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%_-_128px),_transparent_100%)]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-16 md:gap-24 shrink-0 py-2"
        >
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center shrink-0">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.className} w-auto object-contain select-none pointer-events-none opacity-90 hover:opacity-100 dark:brightness-110 transition-opacity duration-300`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Sub-Component: Case Study Numbers (Business Outcomes)
function MetricsSection() {
  const metrics = [
    {
      pct: "+430%",
      label: "Organic Traffic Growth",
      client: "Covai Organic Foods",
      desc: "Custom on-page Local SEO strategy resulted in high search listings and organic visitors in 6 months.",
      icon: Activity
    },
    {
      pct: "+220%",
      label: "Annual Revenue Growth",
      client: "Veda Tex & Fabrics",
      desc: "Integrated B2B e-commerce platform and optimized Google Ads pipeline maximized direct buyer orders.",
      icon: Target
    },
    {
      pct: "8x",
      label: "Qualified Inquiry Volume",
      client: "NexGen Precision",
      desc: "Deployed customized AI Lead qualification agents across WhatsApp and ads to filter B2B queries.",
      icon: Cpu
    }
  ];

  return (
    <section className="py-10 md:py-14 bg-white dark:bg-[#000000] relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-6 w-full">
          <span className="text-[#2196E8] font-bold text-xs tracking-widest block mb-2 text-center font-body">
            Proven Outcomes
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-6 text-center">
            Outcomes That Speak For <span className="text-[#2196E8]">Themselves</span>
          </h2>
          <p className="text-slate-605 dark:text-slate-300 text-base sm:text-lg text-center">
            We don't sell layouts, configurations, or traffic. We design digital engines that deliver real business outcomes.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/50 dark:bg-[#0b0e17] border border-slate-200/80 dark:border-slate-900 rounded-3xl p-8 flex flex-col justify-between hover:border-[#2196E8] transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-numeric text-4xl sm:text-5xl font-bold text-[#2196E8]">
                      {m.pct}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#2196E8]/10 border border-[#2196E8]/20 flex items-center justify-center text-[#2196E8]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="font-header text-2xl text-slate-900 dark:text-white tracking-wide mb-1">
                    {m.label}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider block mb-4 font-body">
                    Client: {m.client}
                  </span>
                  <p className="text-slate-600 dark:text-slate-355 text-sm leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex justify-end">
                  <a href="#free-audit-form" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2196E8] hover:text-[#4A72EB] uppercase tracking-wider transition-colors">
                    <span>See Roadmap</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



// Sub-Component: Blog & Insights
function BlogSection() {
  const articles = [
    {
      tag: "AI & Automation",
      title: "How Coimbatore Manufacturers are Automating Lead Qualification with AI Agents",
      date: "Aug 02, 2026",
      read: "5 Min Read",
      author: "Dhinesh"
    },
    {
      tag: "Search SEO",
      title: "The 2026 Guide to Local SEO: Ranking Your Business on Google Map Packs in Coimbatore",
      date: "Jul 28, 2026",
      read: "4 Min Read",
      author: "Arun Prasath"
    },
    {
      tag: "E-Commerce Development",
      title: "Why Traditional Textile Brands Need to Migrate to Custom Headless E-Commerce Platforms",
      date: "Jul 15, 2026",
      read: "7 Min Read",
      author: "Mathanraj Murugesan"
    }
  ];

  return (
    <section className="py-10 md:py-14 bg-slate-50 dark:bg-[#080b11] border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-6 w-full">
          <span className="text-[#2196E8] font-bold text-xs tracking-widest block mb-2 text-center font-body">
            Insights &amp; Strategy
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-6 text-center">
            Latest Insights <span className="text-[#2196E8]">&amp; Strategies</span>
          </h2>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg text-center">
            Actionable strategies to optimize your search rankings, automate workflows, and double your digital ROAS.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#0d111c] border border-slate-200/80 dark:border-slate-900/60 rounded-3xl p-6 flex flex-col justify-between hover:border-[#2196E8] shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <span className="text-[10px] font-bold text-[#2196E8] tracking-wider block mb-3 bg-[#2196E8]/10 px-3 py-1 rounded-full w-fit font-body">
                  {art.tag}
                </span>
                
                <h3 className="font-header text-2xl text-slate-900 dark:text-white tracking-wide mb-4 line-clamp-2 group-hover:text-[#2196E8] transition-colors duration-300">
                  {art.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between text-xs text-slate-450">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{art.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 shrink-0" />
                  <span>By {art.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-Component: FAQ Accordion
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What digital growth services does DhiGrowth offer in Coimbatore?",
      a: "DhiGrowth is a full-service digital agency offering custom website development (Next.js, WordPress), mobile app development (iOS, Android, cross-platform), AI integration and automation solutions, WhatsApp Business marketing campaigns, SEO, Google/Meta Ads management, and commercial ad film video production."
    },
    {
      q: "Do you build custom websites or use generic templates?",
      a: "We design and develop 100% custom-coded websites using modern frontend tech stacks like React, Next.js, and clean Tailwind CSS architectures. We do not use bloated pre-built page templates. This ensures your site loads instantly, performs optimally for SEO, and matches your brand identity exactly."
    },
    {
      q: "How can AI Automation benefit my business operational cost?",
      a: "By integrating AI automation, you can eliminate manual bottlenecks (e.g. lead follow-up delays, receipt/data extraction into CRMs, appointment bookings). AI agents run 24/7 in milliseconds for a fraction of manual overhead, allowing your team to focus on high-impact sales operations."
    },
    {
      q: "How do your performance ads and Google Ads generate ROI?",
      a: "We do not just measure 'clicks' or 'views'. We build structured funnels mapping search intent to customized landing pages, write conversion-centric ad copies, and deploy strict remarketing campaigns to maximize your Return on Ad Spend (ROAS) and generate real business revenue."
    },
    {
      q: "How does the free digital audit and consultation call work?",
      a: "When you request a free audit, our system connects and indexes metrics about your website speed, technical SEO issues, keyword rankings, and current active competitor ads. During our 30-minute advisory call, we walk you through a custom growth roadmap to fix gaps and accelerate conversions."
    }
  ];

  return (
    <section className="py-10 md:py-14 bg-white dark:bg-[#000000] relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-all">
      
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 w-full">
          <span className="text-[#2196E8] font-semibold text-sm tracking-widest block mb-2 text-center">
            Got Questions?
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide text-center">
            Frequently Asked <span className="text-[#2196E8]">Questions</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-[#0b0e17] border border-slate-200 dark:border-slate-850 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#2196E8]/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-850 dark:text-white text-base sm:text-lg focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2196E8] transition-transform duration-350 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-sm sm:text-base text-slate-605 dark:text-slate-355 leading-relaxed border-t border-slate-100 dark:border-slate-850/60 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
