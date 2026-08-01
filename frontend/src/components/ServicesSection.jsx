import React, { useState } from 'react';
import { 
  Globe, Smartphone, Cpu, Zap, MessageSquare, Sliders, TrendingUp, 
  Search, Target, Share2, BarChart3, Video, Film, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

const ICON_MAP = {
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

export default function ServicesSection({ onSelectService }) {
  const [filter, setFilter] = useState('all');

  const filteredServices = SERVICES_DATA.filter(service => {
    if (filter === 'all') return true;
    return service.category === filter;
  });

  return (
    <section id="services" className="py-24 bg-[#05070c] relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4A72EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2">
              Our End-to-End Capabilities
            </span>
            <h2 className="font-header text-4xl sm:text-6xl text-white uppercase tracking-wide">
              13<span className="text-[#2196E8]">+</span> DIGITAL GROWTH SOLUTIONS
            </h2>
          </div>
          <p className="text-slate-300 text-base max-w-md">
            Everything your business needs to build, automate, and scale online — delivered by Coimbatore's premier digital agency.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              filter === 'all' 
                ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/25' 
                : 'bg-[#0d1220] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            All Services (13)
          </button>
          <button 
            onClick={() => setFilter('tech')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              filter === 'tech' 
                ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/25' 
                : 'bg-[#0d1220] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Web & Application
          </button>
          <button 
            onClick={() => setFilter('ai')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              filter === 'ai' 
                ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/25' 
                : 'bg-[#0d1220] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            AI & Automation
          </button>
          <button 
            onClick={() => setFilter('marketing')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              filter === 'marketing' 
                ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/25' 
                : 'bg-[#0d1220] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Marketing & Ads
          </button>
          <button 
            onClick={() => setFilter('creative')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              filter === 'creative' 
                ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/25' 
                : 'bg-[#0d1220] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Media & Video Production
          </button>
        </div>

        {/* Services Grid (All 13 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;

            return (
              <div 
                key={service.id}
                onClick={() => onSelectService(service)}
                className="glass-card p-8 group cursor-pointer border border-[#a9c0f5]/15 hover:border-[#2196E8] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              >
                {/* Top Corner Glow on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2196E8]/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#2196E8]/10 border border-[#2196E8]/30 text-[#2196E8]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-header text-2xl text-white uppercase tracking-wide mb-3 group-hover:text-[#2196E8] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortCopy}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#a9c0f5] group-hover:text-[#2196E8] transition-colors">
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
