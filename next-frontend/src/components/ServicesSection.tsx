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

  const filteredServices = SERVICES_DATA.filter(service => {
    if (filter === 'all') return true;
    return service.category === filter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-y border-slate-200 dark:border-slate-900">
      
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4A72EB]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-numeric">
              Our End-to-End Capabilities
            </span>
            <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wide">
              13<span className="text-[#2196E8]">+</span> DIGITAL GROWTH SOLUTIONS
            </h2>
          </div>
          
          {/* Service Filters */}
          <div className="flex flex-wrap gap-2.5 max-w-xl">
            {['all', 'tech', 'ai', 'marketing', 'creative'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-[#2196E8] text-white border-[#2196E8] shadow-md shadow-[#2196E8]/20'
                    : 'bg-white dark:bg-[#0b0f19] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Services (13)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 font-body"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;

            return (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="premium-glass-card shine-effect rounded-2xl p-8 flex flex-col justify-between group"
              >
                {/* Visual glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2196E8]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#2196E8]/10 border border-[#2196E8]/30 text-[#2196E8]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-header text-2xl text-slate-900 dark:text-white uppercase tracking-wide mb-3 group-hover:text-[#2196E8] transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
                    {service.shortCopy}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#a9c0f5] group-hover:text-[#2196E8] transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
