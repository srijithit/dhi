"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Bot, Eye, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Layers,
      title: "One Agency, Every Solution",
      desc: "From logo to landing page to lead generation — we handle it all under one roof."
    },
    {
      icon: Bot,
      title: "AI-Powered Edge",
      desc: "We integrate AI into your business before your competitors even consider it."
    },
    {
      icon: Eye,
      title: "Transparent Reporting",
      desc: "Real-time dashboards and monthly reports — you always know where your money goes."
    },
    {
      icon: MapPin,
      title: "Coimbatore-Focused Strategy",
      desc: "We understand the local market, culture, and audience better than any remote agency."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Ownership",
      desc: "From strategy to execution to optimisation — we own the entire journey."
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Strategic Support",
      desc: "Direct communication with senior specialists to ensure quick turnaround and zero friction."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white dark:bg-[#000000] relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Decorative Blur Background elements */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#2196E8]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            The DhiGrowth Advantage
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-4 text-center">
            Why Coimbatore Businesses <span className="text-[#2196E8]">Choose DhiGrowth</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg text-center">
            We build scalable technology, run high-converting ad campaigns, and deliver tangible business revenue.
          </p>
        </div>

        {/* Equal-Sized Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {differentiators.map((diff, idx) => {
            const IconComponent = diff.icon;

            return (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="glass-card h-full min-h-[220px] flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-850 hover:border-[#2196E8] bg-slate-50/50 dark:bg-[#0d111c]/60 hover:bg-white dark:hover:bg-[#141b2d] shadow-sm hover:shadow-xl relative group transition-all duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#2196E8]/10 border border-[#2196E8]/20 flex items-center justify-center text-[#2196E8] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-header text-2xl text-slate-900 dark:text-white tracking-wide mb-3 group-hover:text-[#2196E8] transition-colors duration-300">
                    {diff.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
