"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SERVICES_DATA } from '@/data/servicesData';
import { 
  Globe, Smartphone, Cpu, Zap, MessageSquare, Sliders, TrendingUp, 
  Search, Target, Share2, BarChart3, Video, Film, ArrowRight 
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Globe,
  Smartphone,
  Cpu,
  Zap,
  MessageSquare,
  Sliders,
  TrendingUp,
  Search,
  Target,
  Share2,
  BarChart3,
  Video,
  Film
};

const SERVICE_IMAGE_MAP: Record<string, string> = {
  "website-development": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
  "app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
  "ai-development": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
  "ai-automation": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
  "whatsapp-marketing": "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&auto=format&fit=crop&q=80",
  "business-automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
  "business-development": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
  "seo": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
  "digital-marketing": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
  "social-media-marketing": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
  "meta-google-ads": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=80",
  "ads-shooting": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=80",
  "video-editing": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80"
};

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      
      <Navbar />

      <main className="subpage-padding-top">
        {/* Hero Section */}
        <section className="relative py-24 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-white overflow-hidden bg-dot-matrix border-b border-slate-200 dark:border-slate-800">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2196E8]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block font-body">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase leading-none">
              Explore Our <span className="text-[#2196E8]">13+ Core Services</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-body">
              From web applications and AI workflows to target-driven performance marketing and content production, DhiGrowth handles all your needs.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-24 bg-slate-50 dark:bg-[#080b11]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {SERVICES_DATA.map((service) => {
                const IconComponent = ICON_MAP[service.iconName] || Globe;

                return (
                  <motion.div 
                    key={service.id}
                    variants={cardVariants}
                    className="bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800/80 hover:border-[#2196E8] rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Top image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img 
                        src={SERVICE_IMAGE_MAP[service.id] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"} 
                        alt={service.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#090d18]/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 dark:border-slate-850 shadow-md">
                        <IconComponent className="w-5 h-5 text-[#2196E8]" />
                      </div>
                      {service.badge && (
                        <span className="absolute top-4 right-4 text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#2196E8] text-white shadow-md">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                      <div>
                        <h3 className="font-header text-2xl text-slate-900 dark:text-white uppercase tracking-wider group-hover:text-[#2196E8] transition-colors duration-300">
                          {service.name}
                        </h3>

                        <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed line-clamp-3">
                          {service.shortCopy}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
