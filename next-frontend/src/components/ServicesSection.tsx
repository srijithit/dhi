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
    <section id="services" className="py-32 md:py-40 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-y border-slate-200 dark:border-slate-900">
      
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4A72EB]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-6">
          <div>
            <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-numeric">
              Our End-to-End Capabilities
            </span>
            <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wide">
              13<span className="text-[#2196E8]">+</span> DIGITAL GROWTH SOLUTIONS
            </h2>
          </div>
          
          {/* Service Filters */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 sm:gap-2.5 items-center justify-start md:justify-end shrink-0">
            {['all', 'tech', 'ai', 'marketing', 'creative'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat as any)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap shrink-0 ${
                  filter === cat
                    ? 'bg-[#2196E8] text-white border-[#2196E8] shadow-sm shadow-[#2196E8]/20'
                    : 'bg-white dark:bg-[#0b0f19] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Services (13)' : cat}
              </button>
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
               <Link key={service.id} href={`/services/${service.id}`} className="flex w-full">
                 <motion.div 
                   variants={itemVariants}
                   className="bg-white dark:bg-[#0d111c] border border-slate-200/80 dark:border-slate-900/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2196E8] shadow-sm hover:shadow-md group w-full cursor-pointer"
                 >
                   <div>
                     <div className="flex items-center justify-between mb-4">
                       <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#2196E8] group-hover:scale-105 transition-transform duration-300">
                         <IconComponent className="w-5 h-5" />
                       </div>
                       {service.badge && (
                         <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-500 dark:text-[#a9c0f5]">
                           {service.badge}
                         </span>
                       )}
                     </div>

                     <h3 className="font-header text-xl text-slate-900 dark:text-white uppercase tracking-wide mb-2 group-hover:text-[#2196E8] transition-colors duration-300">
                       {service.name}
                     </h3>

                     <p className="text-slate-650 dark:text-slate-350 text-[13px] leading-relaxed mb-4">
                       {service.shortCopy}
                     </p>
                   </div>

                 </motion.div>
               </Link>
             );
          })}
        </motion.div>

        {/* View All Services Accordion Action */}
        {filteredServices.length > 6 && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="btn-primary !px-8 !py-3.5 bg-[#4A72EB] text-white font-bold rounded-xl uppercase tracking-wider font-body text-xs cursor-pointer hover:bg-[#2196E8] transition-all duration-300 hover:scale-102"
            >
              {showAll ? 'Show Less Services' : 'View All Services (13+)'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
