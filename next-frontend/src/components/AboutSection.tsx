"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, TrendingUp, Compass } from 'lucide-react';

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const pillars = [
    {
      icon: Cpu,
      title: "Technology-First",
      desc: "From custom websites to AI-powered automation, we build future-ready digital products.",
      colorClass: "border-l-[#2196E8] hover:border-[#2196E8] text-[#2196E8]",
      bgClass: "bg-[#2196E8]/5 border-[#2196E8]/20"
    },
    {
      icon: TrendingUp,
      title: "Marketing That Converts",
      desc: "Data-driven SEO, paid ads, and social media strategies that bring real ROI.",
      colorClass: "border-l-[#4A72EB] hover:border-[#4A72EB] text-[#4A72EB]",
      bgClass: "bg-[#4A72EB]/5 border-[#4A72EB]/20"
    },
    {
      icon: Compass,
      title: "Coimbatore Roots, Global Standards",
      desc: "Local expertise with world-class execution for businesses of all sizes.",
      colorClass: "border-l-[#A9C0F5] hover:border-l-[#A9C0F5] hover:border-[#A9C0F5] text-[#A9C0F5]",
      bgClass: "bg-[#A9C0F5]/5 border-[#A9C0F5]/20"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white dark:bg-[#000000] relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2196E8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-[#2196E8] font-bold text-xs tracking-widest block mb-2 font-body">
            Who We Are
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-6">
            Coimbatore's Premier <span className="text-[#2196E8]">Digital Growth</span> Partner
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-body">
            We are DhiGrowth — a Coimbatore-based digital agency that combines technology, creativity, and strategy to deliver measurable business results. Whether you are a startup, SME, or enterprise, our end-to-end digital solutions are built to accelerate your growth.
          </p>
        </motion.div>

        {/* Value Pillars */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 font-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className={`premium-glass-card shine-effect p-8 border-l-4 ${pillar.colorClass} group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.bgClass} border flex items-center justify-center ${pillar.colorClass.split(' ')[2]} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-header text-2xl text-slate-900 dark:text-white tracking-wide mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
