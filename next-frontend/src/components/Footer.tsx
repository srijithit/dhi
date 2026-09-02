"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Zap, MapPin, Mail, Phone, Award, ShieldCheck, Globe, Star } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import LeadPopupModal from './LeadPopupModal';

interface FooterProps {
  onSelectService?: (service: any) => void;
  onOpenAudit?: () => void;
}

export default function Footer({ onSelectService, onOpenAudit }: FooterProps) {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (service: any) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      window.location.href = `/services/${service.id}`;
    }
  };

  const handleAuditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      setIsLeadModalOpen(true);
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
    <>
    <footer className="bg-slate-100 dark:bg-[#030508] border-t-2 border-slate-200 dark:border-slate-900 rounded-t-[48px] md:rounded-t-[80px] pt-12 pb-0 mt-6 md:mt-10 text-slate-650 dark:text-slate-400 font-body transition-colors duration-300 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        
        {/* Animated main columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-6 border-b border-slate-200 dark:border-slate-900"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <Link href="/" onClick={handleLinkClick('/')} className="flex items-center group">
              <img 
                src="/logo.png" 
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
                <span className="underline decoration-dotted decoration-slate-400 group-hover:decoration-current">Door No. 119, First Floor, Kovai Thirunagar, Kalapatti Main Road, Nehru Nagar West, Coimbatore, Tamil Nadu</span>
              </a>
              <a 
                href="mailto:dinesh@dhigrowth.com"
                className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#2196E8] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">dinesh@dhigrowth.com</span>
              </a>
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

            {/* Social Icons - Instagram & LinkedIn */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <a href="https://instagram.com/dhigrowth" target="_blank" rel="noopener noreferrer" className="hover:text-[#2196E8] transition-colors p-2 bg-slate-200/60 dark:bg-slate-900 rounded-xl border border-slate-300/60 dark:border-slate-800" aria-label="Instagram">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/dhigrowth/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-[#2196E8] transition-colors p-2 bg-slate-200/60 dark:bg-slate-900 rounded-xl border border-slate-300/60 dark:border-slate-800" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 0 0 1.3-1.37A1.32 1.32 0 0 0 6.5 5.6a1.37 1.37 0 0 0-1.3 1.37A1.32 1.32 0 0 0 6.5 8.37m1.4 10.13V10.13h-2.8v8.37h2.8z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-header text-xl text-slate-900 dark:text-white tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" onClick={handleLinkClick('/')} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455 block">Home</Link></li>
              <li><Link href="/services" onClick={handleLinkClick('/services')} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455 block">Services</Link></li>
              <li><Link href="/about" onClick={handleLinkClick('/about')} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455 block">About Us</Link></li>
              <li><Link href="/case-studies" onClick={handleLinkClick('/case-studies')} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455 block">Case Study</Link></li>
              <li><Link href="/careers" onClick={handleLinkClick('/careers')} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455 block">Careers &amp; Jobs</Link></li>
              <li><Link href="/contact" onClick={handleLinkClick('/contact')} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455 block">Contact &amp; Support</Link></li>
              <li>
                <Link 
                  href="/audit" 
                  onClick={handleAuditClick}
                  className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-455 block"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Tech & AI Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-header text-xl text-slate-900 dark:text-white tracking-wide mb-4">
              Tech &amp; AI
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.filter(s => !s.hidden && (s.category === 'tech' || s.category === 'ai')).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    onClick={handleLinkClick(`/services/${service.id}`)}
                    className="hover:text-[#2196E8] transition-colors text-left text-slate-600 dark:text-slate-455 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing & Media Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-header text-xl text-slate-900 dark:text-white tracking-wide mb-4">
              Marketing &amp; Media
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.filter(s => !s.hidden && (s.category === 'marketing' || s.category === 'creative' || s.category === 'strategy')).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    onClick={handleLinkClick(`/services/${service.id}`)}
                    className="hover:text-[#2196E8] transition-colors text-left text-slate-600 dark:text-slate-455 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>



      </div>

      {/* Full-width blue branding copyright bar (Animate when scrolled into view) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-4 bg-[#4A72EB] text-white py-6 relative overflow-hidden"
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
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center justify-between gap-4 text-[10px] sm:text-xs font-bold tracking-wider font-body">
          <p>© {new Date().getFullYear()} DhiGrowth. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
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

            <a 
              href="https://www.linkedin.com/company/dhigrowth/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-slate-200 transition-colors p-1"
              aria-label="LinkedIn"
            >
              <motion.svg 
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 0 0 1.3-1.37A1.32 1.32 0 0 0 6.5 5.6a1.37 1.37 0 0 0-1.3 1.37A1.32 1.32 0 0 0 6.5 8.37m1.4 10.13V10.13h-2.8v8.37h2.8z"/>
              </motion.svg>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
    <LeadPopupModal 
      isOpen={isLeadModalOpen} 
      onClose={() => setIsLeadModalOpen(false)} 
    />
    </>
  );
}
