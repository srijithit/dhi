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
  "ai-automation": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
  "business-growth-automation": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  "business-automation": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  "ai-development": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
  "app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
  "website-development": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
  "seo": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
  "whatsapp-marketing": "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&auto=format&fit=crop&q=80",
  "performance-marketing": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=80",
  "digital-marketing": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
  "social-media-marketing": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
  "branding-design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80",
  "commercial-videography": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=80",
  "ads-shooting": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=80",
  "video-editing": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80",
  "business-development": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80"
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
            <span className="text-[#2196E8] font-bold text-sm tracking-widest block font-body">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wide leading-none">
              Explore Our <span className="text-[#2196E8]">13+ Core Services</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-body">
              From web applications and AI workflows to target-driven performance marketing and content production, DhiGrowth handles all your needs.
            </p>
          </div>
        </section>

        {/* Services Grid Section with 3D Card Flip */}
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
                  <div 
                    key={service.id} 
                    className="w-full h-[460px] flip-card group cursor-pointer"
                  >
                    <div className="flip-card-inner">
                      
                      {/* FRONT OF CARD */}
                      <div className="flip-card-front bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800/80 rounded-3xl flex flex-col justify-between shadow-sm group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        {/* Top Image */}
                        <div className="relative h-48 w-full overflow-hidden shrink-0">
                          <img 
                            src={SERVICE_IMAGE_MAP[service.id] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"} 
                            alt={service.name} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                          <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#090d18]/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 dark:border-slate-850 shadow-md">
                            <IconComponent className="w-5 h-5 text-[#2196E8]" />
                          </div>
                          {service.badge && (
                            <span className="absolute top-4 right-4 text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#2196E8] text-white shadow-md font-body">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        {/* Front Content */}
                        <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-3">
                          <div className="space-y-2">
                            <h3 className="font-header text-2xl text-slate-900 dark:text-white tracking-wider group-hover:text-[#2196E8] transition-colors duration-300">
                              {service.name}
                            </h3>

                            {service.headline && (
                              <h4 className="text-xs sm:text-sm font-semibold text-[#2196E8] leading-snug line-clamp-2">
                                {service.headline}
                              </h4>
                            )}

                            <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed line-clamp-2">
                              {service.shortCopy}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* BACK OF CARD (Flipped State - Entire Card Clickable Link) */}
                      <Link 
                        href={`/services/${service.id}`}
                        className="flip-card-back bg-white dark:bg-[#0b0f19] border-2 border-[#2196E8] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl overflow-hidden relative cursor-pointer group/back"
                      >
                        {/* Subtle background glow */}
                        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#2196E8]/15 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#4A72EB]/15 rounded-full blur-2xl pointer-events-none" />

                        {/* Top Header */}
                        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-[#2196E8]/10 text-[#2196E8]">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <h4 className="font-header text-lg text-slate-900 dark:text-white tracking-wide group-hover/back:text-[#2196E8] transition-colors">
                              {service.name}
                            </h4>
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#2196E8]/15 text-[#2196E8]">
                            Overview
                          </span>
                        </div>

                        {/* Full Description Body */}
                        <div className="relative z-10 my-auto py-2 overflow-y-auto max-h-[250px] no-scrollbar">
                          <p className="text-slate-700 dark:text-slate-200 text-[13.5px] leading-relaxed font-body">
                            {service.fullDescription || service.shortCopy}
                          </p>
                        </div>

                        {/* Bottom Action */}
                        <div className="relative z-10 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                          <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#2196E8] group-hover/back:bg-brand-bright text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-md group-hover/back:shadow-lg group-hover/back:scale-102">
                            <span>Explore Service</span>
                            <ArrowRight className="w-4 h-4 group-hover/back:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>

                    </div>
                  </div>
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
