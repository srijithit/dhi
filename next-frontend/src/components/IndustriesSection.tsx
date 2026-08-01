"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Activity, GraduationCap, Factory, Building, Utensils, Rocket } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenAudit?: () => void;
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Textile: Factory,
  Manufacturing: Factory,
  Retail: ShoppingBag,
  Healthcare: Activity,
  Education: GraduationCap,
  Hospitality: Utensils,
  "Real Estate": Building,
  "Tech Startups": Rocket
};

export default function IndustriesSection({ onOpenAudit }: IndustriesSectionProps) {
  const industries = [
    "Textile",
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Education",
    "Hospitality",
    "Real Estate",
    "Tech Startups"
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
        staggerChildren: 0.08
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="industries" className="py-28 md:py-36 bg-white dark:bg-[#000000] relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            Custom Industry Solutions
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wide mb-6 text-center">
            INDUSTRIES WE <span className="text-[#2196E8]">SERVE IN COIMBATORE</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg text-center">
            We work with businesses across Coimbatore and India — from textile and manufacturing to retail, healthcare, education, hospitality, real estate, and technology startups.
          </p>
        </div>

        {/* Tag-Pill Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((ind) => {
            const IconComponent = ICON_MAP[ind] || Rocket;

            return (
              <motion.button 
                key={ind}
                variants={pillVariants}
                onClick={handlePillClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0d111c] text-slate-800 dark:text-slate-200 font-semibold text-sm hover:border-[#2196E8] hover:text-[#2196E8] shadow-sm hover:shadow-md cursor-pointer transition-all duration-200"
              >
                <IconComponent className="w-5 h-5 text-[#2196E8]" />
                <span>{ind}</span>
              </motion.button>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
