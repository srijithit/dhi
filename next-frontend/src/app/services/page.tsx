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
        <section className="relative py-24 bg-[#000000] text-white overflow-hidden bg-dot-matrix border-b border-slate-900">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2196E8]/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block font-body">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase leading-none">
              Explore Our <span className="text-brand-bright">13+ Core Services</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-body">
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
                    className="bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800/80 hover:border-[#2196E8] p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#2196E8]/10 border border-[#2196E8]/20 flex items-center justify-center text-[#2196E8] group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        {service.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/20 text-[#2196E8]">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-header text-3xl text-slate-900 dark:text-white uppercase tracking-wider mb-4 group-hover:text-[#2196E8] transition-colors duration-300">
                        {service.name}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-8">
                        {service.shortCopy}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
                      <Link 
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2196E8] hover:text-[#4A72EB] transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
