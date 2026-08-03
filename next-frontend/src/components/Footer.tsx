"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, MapPin, Mail, Phone, Award, ShieldCheck, Globe, Star } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  onSelectService?: (service: any) => void;
  onOpenAudit?: () => void;
}

export default function Footer({ onSelectService, onOpenAudit }: FooterProps) {
  const handleServiceClick = (service: any) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      window.location.href = `/services/${service.id}`;
    }
  };

  const handleAuditClick = (e: React.MouseEvent) => {
    if (onOpenAudit) {
      e.preventDefault();
      onOpenAudit();
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#030508] border-t-2 border-slate-200 dark:border-slate-900 rounded-t-[48px] md:rounded-t-[80px] pt-24 pb-0 mt-16 md:mt-28 text-slate-650 dark:text-slate-400 font-body transition-colors duration-300 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        
        {/* Animated main columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200 dark:border-slate-900"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.webp" 
                alt="DhiGrowth Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02] dark:brightness-110"
              />
            </Link>

            <p className="text-sm leading-relaxed max-w-sm text-slate-650 dark:text-slate-400">
              DhiGrowth is Coimbatore's premier digital agency offering website development, mobile apps, AI automation, SEO, Meta & Google Ads, and video production.
            </p>

            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-350 font-medium">
              <a 
                href="https://www.google.com/maps/place/Dhigrowth+Business+Pvt+Ltd/@11.0485934,77.0421634,19z/data=!3m1!4b1!4m6!3m5!1s0x3ba85700608f4393:0x7a612ef883b16359!8m2!3d11.0485934!4d77.0428071!16s%2Fg%2F11njtdfg3_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 text-[#2196E8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-dotted decoration-slate-400 group-hover:decoration-current">Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2196E8] shrink-0" />
                <span>dhinesh@dhigrowth.com</span>
              </div>
              <a 
                href="https://api.whatsapp.com/send?phone=919361088012&text=Hi%20DhiGrowth%2C%20I%20want%20to%20grow%20my%20business%20in%20India%21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#2196E8] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 93610 88012</span>
              </a>
            </div>

            {/* Social Icons - Keep Only Instagram */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <a href="https://instagram.com/dhigrowth" target="_blank" rel="noopener noreferrer" className="hover:text-[#2196E8] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-header text-xl text-slate-900 dark:text-white uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455">Contact &amp; Support</Link></li>
              <li><a href="#free-audit-form" onClick={handleAuditClick} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455">Get Free Audit</a></li>
            </ul>
          </motion.div>

          {/* Tech & AI Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-header text-xl text-slate-900 dark:text-white uppercase tracking-wide mb-4">
              Tech &amp; AI
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="hover:text-[#2196E8] transition-colors text-left text-slate-600 dark:text-slate-455 cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing & Media Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-header text-xl text-slate-900 dark:text-white uppercase tracking-wide mb-4">
              Marketing &amp; Media
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(6, 13).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="hover:text-[#2196E8] transition-colors text-left text-slate-600 dark:text-slate-455 cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Accredited Partners & Trust Badges Section */}
        <div className="py-8 border-b border-slate-200 dark:border-slate-900 flex flex-wrap items-center justify-center lg:justify-between gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          
          <div className="flex items-center gap-2 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-2 bg-white/60 dark:bg-[#0a0d16] text-slate-800 dark:text-slate-200 shadow-sm text-xs font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block animate-pulse shrink-0" />
            <span className="font-header text-sm tracking-wide font-bold">Google Partner</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-2 bg-white/60 dark:bg-[#0a0d16] text-slate-800 dark:text-slate-200 shadow-sm text-xs font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block animate-pulse shrink-0" />
            <span className="font-header text-sm tracking-wide font-bold">Meta Partner</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-2 bg-white/60 dark:bg-[#0a0d16] text-slate-800 dark:text-slate-200 shadow-sm text-xs font-semibold">
            <div className="flex text-amber-400 gap-0.5 shrink-0">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="font-header text-sm tracking-wide font-bold">Clutch 4.9★</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-2 bg-white/60 dark:bg-[#0a0d16] text-slate-800 dark:text-slate-200 shadow-sm text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="font-header text-sm tracking-wide font-bold">GoodFirms Verified</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-2 bg-white/60 dark:bg-[#0a0d16] text-slate-800 dark:text-slate-200 shadow-sm text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span className="font-header text-sm tracking-wide font-bold">Startup India Registered</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-2 bg-white/60 dark:bg-[#0a0d16] text-slate-800 dark:text-slate-200 shadow-sm text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-brand shrink-0" />
            <span className="font-header text-sm tracking-wide font-bold">MSME Certified</span>
          </div>

        </div>

      </div>

      {/* Full-width blue branding copyright bar (Animate when scrolled into view) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-16 bg-[#4A72EB] text-white py-8 relative overflow-hidden"
      >
        {/* Animating center watermark background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <motion.span 
            animate={{ 
              x: [-15, 15, -15],
              scale: [0.97, 1.03, 0.97]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="font-header text-[6vw] text-white/[0.07] uppercase font-bold tracking-widest leading-none block"
          >
            DHI GROWTH
          </motion.span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center justify-between gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-body">
          <p>© {new Date().getFullYear()} DHI GROWTH. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center">
            <a 
              href="https://instagram.com/dhigrowth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-slate-200 transition-colors p-1"
              aria-label="Instagram"
            >
              <motion.svg 
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="w-5 h-5 stroke-current fill-none" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </motion.svg>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
