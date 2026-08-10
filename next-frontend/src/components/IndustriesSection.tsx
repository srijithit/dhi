"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Activity, GraduationCap, Factory, Building, Utensils, Rocket, Briefcase, Truck, ArrowRight } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenAudit?: () => void;
}

export default function IndustriesSection({ onOpenAudit }: IndustriesSectionProps) {
  
  const topIndustries = [
    {
      title: "Retail & E-Commerce",
      icon: ShoppingBag,
      desc: "Online stores, inventory synchronization, payment gateways, and checkout conversions.",
      color: "text-[#2196E8] bg-[#2196E8]/10 border-[#2196E8]/20",
      illustration: (
        <svg className="w-full h-16 text-[#2196E8]" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="45" height="30" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="30" r="3" fill="currentColor" />
          <circle cx="40" cy="30" r="3" fill="currentColor" />
          <path d="M 22 25 L 33 25" stroke="currentColor" strokeWidth="1.5" />
          {/* Shopping basket */}
          <path d="M 65 15 L 85 15 L 80 32 L 70 32 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 70 15 L 75 7 L 80 15" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    },
    {
      title: "Healthcare & Clinics",
      icon: Activity,
      desc: "Patient appointment bookings, automated WhatsApp notifications, and local SEO ranking.",
      color: "text-[#4A72EB] bg-[#4A72EB]/10 border-[#4A72EB]/20",
      illustration: (
        <svg className="w-full h-16 text-[#4A72EB]" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Medical cross */}
          <rect x="70" y="8" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 78 11 L 78 21 M 73 16 L 83 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Heart rate monitor wave */}
          <path d="M 5 20 H 20 L 25 5 L 30 35 L 35 15 L 40 20 H 55" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Manufacturing & Textile",
      icon: Factory,
      desc: "B2B export catalog websites, global supplier lead generation, and workflow automation.",
      color: "text-[#4A72EB] bg-[#4A72EB]/10 border-[#4A72EB]/20",
      illustration: (
        <svg className="w-full h-16 text-[#4A72EB]" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cogs */}
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="42" cy="27" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <circle cx="42" cy="27" r="2" fill="currentColor" />
          {/* Factory outline */}
          <path d="M 65 32 V 15 L 72 20 L 79 15 L 86 20 L 93 12 V 32 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
          <rect x="70" y="25" width="4" height="7" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Education & Institutions",
      icon: GraduationCap,
      desc: "Student inquiry registration forms, admission campaigns, and e-learning portals.",
      color: "text-[#2196E8] bg-[#2196E8]/10 border-[#2196E8]/20",
      illustration: (
        <svg className="w-full h-16 text-[#2196E8]" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Graduation cap */}
          <path d="M 10 20 L 30 10 L 50 20 L 30 30 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 20 25 V 32 Q 30 37 40 32 V 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M 45 20 V 30 L 48 30" stroke="currentColor" strokeWidth="1.5" />
          {/* Certificate scroll */}
          <rect x="68" y="10" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <line x1="73" y1="15" x2="85" y2="15" stroke="currentColor" strokeWidth="1.2" />
          <line x1="73" y1="20" x2="81" y2="20" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 80 25 L 85 22 L 90 25" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    }
  ];

  const secondaryIndustries = [
    { title: "Real Estate & Construction", icon: Building },
    { title: "Hospitality & Restaurants", icon: Utensils },
    { title: "Logistics & Transport", icon: Truck },
    { title: "Professional Services", icon: Briefcase },
    { title: "Tech Startups & SaaS", icon: Rocket }
  ];

  const handlePillClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      const el = document.getElementById('free-audit-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/contact';
      }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="industries" className="py-32 md:py-40 bg-white dark:bg-[#000000] relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            Custom Industry Solutions
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-6 text-center">
            Industries We <span className="text-[#2196E8]">Serve In Coimbatore</span>
          </h2>
          <p className="text-slate-650 dark:text-slate-300 text-base sm:text-lg text-center">
            We work with businesses across Coimbatore and India — from B2B manufacturing and local healthcare to e-commerce, real estate, and education.
          </p>
        </div>

        {/* Top 4 prominent industry cards with custom illustrations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {topIndustries.map((ind, idx) => {
            const IconComponent = ind.icon;

            return (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="bg-slate-50/50 dark:bg-[#0b0e17] border border-slate-200/80 dark:border-slate-850 rounded-3xl p-6 flex flex-col justify-between hover:border-[#2196E8] shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${ind.color} border flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="font-header text-2xl text-slate-900 dark:text-white tracking-wide mb-3">
                    {ind.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                {/* SVG Illustration Container */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-center bg-white dark:bg-[#07090f]/60 rounded-2xl p-2 border border-slate-200/50 dark:border-slate-900/60 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                  {ind.illustration}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary industries list */}
        <div className="pt-8 border-t border-slate-150 dark:border-slate-900 max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider block mb-6">
            Other Industries We Grow
          </span>
          <div className="flex flex-wrap justify-center gap-3.5">
            {secondaryIndustries.map((ind, idx) => {
              const IconComponent = ind.icon;

              return (
                <button 
                  key={idx}
                  onClick={handlePillClick}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d111c]/60 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-[#2196E8] hover:text-[#2196E8] shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <IconComponent className="w-4 h-4 text-[#2196E8]/85" />
                  <span>{ind.title}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
