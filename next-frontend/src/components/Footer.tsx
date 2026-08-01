"use client";
import React from 'react';
import Link from 'next/link';
import { Zap, MapPin, Mail, Phone } from 'lucide-react';
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

  return (
    <footer className="bg-slate-100 dark:bg-[#030508] border-t border-slate-200 dark:border-slate-900 pt-16 pb-12 text-slate-600 dark:text-slate-400 font-body transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200 dark:border-slate-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <svg className="w-10 h-10 group-hover:scale-105 transition-transform shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logo-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2196E8" />
                    <stop offset="100%" stopColor="#4A72EB" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#logo-gradient-footer)" />
                {/* Curved arrow wrapping right side */}
                <path d="M 20,85 A 38,38 0 0,0 83,48 L 88,52 L 86,37 L 72,41 L 76,45 A 33,33 0 0,1 23,80 Z" fill="#00E5FF" />
                {/* Stylized person / arrow symbol */}
                <circle cx="43" cy="35" r="7.5" fill="#00E5FF" />
                <path d="M 18,52 L 67,37 L 40,54 Z" fill="#FFFFFF" />
                <path d="M 40,54 L 67,37 L 40,75 Z" fill="#00B2FE" />
                <path d="M 40,54 L 40,75 L 29,61 Z" fill="#0080C5" />
              </svg>
              <div className="flex flex-col leading-[0.95] font-header text-left">
                <span className="text-lg tracking-wider text-[#2196E8] uppercase font-bold">DHI</span>
                <span className="text-2xl tracking-widest text-[#4A72EB] uppercase font-bold flex items-center">
                  GROWTH
                  <span className="text-[10px] ml-0.5 font-sans align-top relative -top-1.5">®</span>
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm text-slate-600 dark:text-slate-400">
              DhiGrowth is Coimbatore's premier digital agency offering website development, mobile apps, AI automation, SEO, Meta & Google Ads, and video production.
            </p>

            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-350 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2196E8] shrink-0 mt-0.5" />
                <span>Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2196E8] shrink-0" />
                <span>hello@dhigrowth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2196E8] shrink-0" />
                <span>+91 93610 88012</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <a href="#" className="hover:text-[#2196E8] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="hover:text-[#2196E8] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-[#2196E8] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-[#2196E8] transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-header text-xl text-slate-900 dark:text-white uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-450">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-450">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-450">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-450">Contact & Support</Link></li>
              <li><a href="#free-audit-form" onClick={handleAuditClick} className="hover:text-[#2196E8] transition-colors text-slate-600 dark:text-slate-450">Get Free Audit</a></li>
            </ul>
          </div>

          {/* Tech & AI Services Column */}
          <div>
            <h4 className="font-header text-xl text-slate-900 dark:text-white uppercase tracking-wide mb-4">
              Tech &amp; AI
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="hover:text-[#2196E8] transition-colors text-left text-slate-600 dark:text-slate-450 cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing & Media Column */}
          <div>
            <h4 className="font-header text-xl text-slate-900 dark:text-white uppercase tracking-wide mb-4">
              Marketing &amp; Media
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(6, 13).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="hover:text-[#2196E8] transition-colors text-left text-slate-600 dark:text-slate-450 cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body">
          <p>© {new Date().getFullYear()} DhiGrowth Digital Agency. All rights reserved. Built with pride in Coimbatore, India.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-950 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-slate-950 dark:hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-slate-950 dark:hover:text-white">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
