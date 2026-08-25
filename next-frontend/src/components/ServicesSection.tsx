"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Cpu, Zap, MessageSquare, Sliders, TrendingUp, 
  Search, Target, Share2, BarChart3, Video, Film, ArrowUpRight 
} from 'lucide-react';
import { SERVICES_DATA, Service } from '../data/servicesData';

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

export default function ServicesSection() {
  const [filter, setFilter] = useState<'all' | 'tech' | 'ai' | 'marketing' | 'creative'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredServices = SERVICES_DATA.filter(service => {
    if (filter === 'all') return true;
    return service.category === filter;
  });

  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  const containerVariants = {
    hidden: opacity => ({ opacity: 0 }),
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const handleFilterChange = (cat: any) => {
    setFilter(cat);
    setShowAll(false); // Reset showAll when filter changes
  };

  return (
    <section id="services" className="py-10 md:py-14 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-y border-slate-200 dark:border-slate-900">
      
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4A72EB]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-6">
          <div>
            <span className="text-[#2196E8] font-bold text-xs tracking-widest block mb-2 font-body">
              Our End-to-End Capabilities
            </span>
            <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide">
              13<span className="text-[#2196E8]">+</span> Digital Growth Solutions
            </h2>
          </div>
          
          {/* Service Filters */}
          <div className="flex flex-nowrap gap-2 sm:gap-2.5 items-center justify-start md:justify-end shrink-0 overflow-x-auto no-scrollbar scroll-smooth max-w-full pb-1 md:pb-0 font-body">
            {[
              { id: 'all', label: 'All Services (13)' },
              { id: 'tech', label: 'Tech' },
              { id: 'ai', label: 'AI' },
              { id: 'marketing', label: 'Marketing' },
              { id: 'creative', label: 'Creative' }
            ].map((cat) => (
              <motion.button
                key={cat.id}
                layout
                onClick={() => handleFilterChange(cat.id as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 border whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#2196E8] text-white border-[#2196E8] shadow-sm shadow-[#2196E8]/20'
                    : 'bg-white dark:bg-[#0b0f19] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Services Grid (Simplified layout, reduced visual noise) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-body"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          key={filter + (showAll ? '-all' : '-sliced')}
        >
          {visibleServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;

            return (
              <div 
                key={service.id} 
                className="w-full h-[370px] flip-card group cursor-pointer"
              >
                <div className="flip-card-inner">
                  
                  {/* FRONT OF CARD */}
                  <div className="flip-card-front bg-white dark:bg-[#0d111c] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#2196E8]/10 flex items-center justify-center text-[#2196E8] group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {service.badge && (
                          <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#2196E8]/15 text-[#2196E8]">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-header text-xl text-slate-900 dark:text-white tracking-wide mb-2 group-hover:text-[#2196E8] transition-colors duration-300">
                        {service.name}
                      </h3>

                      {service.headline && (
                        <p className="text-xs font-semibold text-[#2196E8] mb-2 line-clamp-1">
                          {service.headline}
                        </p>
                      )}

                      <p className="text-slate-650 dark:text-slate-350 text-[13px] leading-relaxed line-clamp-3">
                        {service.shortCopy}
                      </p>
                    </div>
                  </div>

                  {/* BACK OF CARD (Entire Card Clickable Link) */}
                  <Link 
                    href={`/services/${service.id}`}
                    className="flip-card-back bg-white dark:bg-[#0b0f19] border-2 border-[#2196E8] rounded-2xl p-6 flex flex-col justify-between shadow-2xl overflow-hidden relative cursor-pointer group/back"
                  >
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#2196E8]/15 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#2196E8]/10 text-[#2196E8]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="font-header text-base text-slate-900 dark:text-white tracking-wide group-hover/back:text-[#2196E8] transition-colors">
                          {service.name}
                        </h4>
                      </div>
                      <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#2196E8]/15 text-[#2196E8]">
                        Details
                      </span>
                    </div>

                    <div className="relative z-10 my-auto py-2 overflow-y-auto max-h-[175px] no-scrollbar">
                      <p className="text-slate-700 dark:text-slate-200 text-xs leading-relaxed font-body">
                        {service.fullDescription || service.shortCopy}
                      </p>
                    </div>

                    <div className="relative z-10 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#2196E8] group-hover/back:bg-brand-bright text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm group-hover/back:shadow group-hover/back:scale-102">
                        <span>Explore Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/back:translate-x-0.5 group-hover/back:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            );
          })}
        </motion.div>

        {/* View All Services Accordion Action */}
        {filteredServices.length > 6 && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="btn-primary !px-8 !py-3.5 bg-[#4A72EB] text-white font-bold rounded-xl tracking-wider font-body text-xs cursor-pointer hover:bg-[#2196E8] transition-all duration-300 hover:scale-102"
            >
              {showAll ? 'Show Less Services' : 'View All Services (13+)'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
