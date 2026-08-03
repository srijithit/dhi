import React from 'react';
import { Zap, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function Footer({ onSelectService, onOpenAudit }) {
  return (
    <footer className="bg-[#040509] border-t border-[#a9c0f5]/15 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-900">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2196E8] to-[#4A72EB] flex items-center justify-center text-white font-bold shadow-lg shadow-[#2196E8]/30">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="font-header text-3xl tracking-wider text-white">
                DHI<span className="text-[#2196E8]">GROWTH</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              DhiGrowth is Coimbatore's premier full-service digital agency offering website development, mobile apps, AI automation, SEO, Meta & Google Ads, and video production.
            </p>

            <div className="space-y-3 text-sm text-slate-300 font-medium">
              <a 
                href="https://www.google.com/maps/place/Dhigrowth+Business+Pvt+Ltd/@11.0485934,77.0421634,19z/data=!3m1!4b1!4m6!3m5!1s0x3ba85700608f4393:0x7a612ef883b16359!8m2!3d11.0485934!4d77.0428071!16s%2Fg%2F11njtdfg3_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 text-[#2196E8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Headquarters: Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2196E8] shrink-0" />
                <span>dhinesh@dhigrowth.com</span>
              </div>
              <a 
                href="https://api.whatsapp.com/send?phone=919361088012&text=Hi%20DhiGrowth%2C%20I%20want%20to%20grow%20my%20business%20in%20India%21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#2196E8] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 93610 88012</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-header text-xl text-white uppercase tracking-wide mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-[#2196E8] transition-colors">All 13 Services</a></li>
              <li><a href="#about" className="hover:text-[#2196E8] transition-colors">About DhiGrowth</a></li>
              <li><a href="#why-us" className="hover:text-[#2196E8] transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-[#2196E8] transition-colors">Our 4-Step Process</a></li>
              <li><a href="#industries" className="hover:text-[#2196E8] transition-colors">Industries Served</a></li>
              <li><a href="#testimonials" className="hover:text-[#2196E8] transition-colors">Client Testimonials</a></li>
            </ul>
          </div>

          {/* Services Column 1 */}
          <div>
            <h4 className="font-header text-xl text-white uppercase tracking-wide mb-4">
              Core Tech & AI
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => onSelectService(service)}
                    className="hover:text-[#2196E8] transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h4 className="font-header text-xl text-white uppercase tracking-wide mb-4">
              Marketing & Media
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(6, 13).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => onSelectService(service)}
                    className="hover:text-[#2196E8] transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} DhiGrowth Digital Agency. All rights reserved. Built with pride in Coimbatore, India.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
