"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Bot, Eye, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      badge: "01 • INTEGRATED AGENCY",
      title: "One Agency, Every Solution",
      desc: "From logo to landing page to lead generation — we handle it all under one roof.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      icon: Layers
    },
    {
      badge: "02 • FUTURE READY",
      title: "AI-Powered Edge",
      desc: "We integrate AI into your business before your competitors even consider it.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
      icon: Bot
    },
    {
      badge: "03 • TRANSPARENT DATA",
      title: "Transparent Reporting",
      desc: "Real-time dashboards and monthly reports — you always know where your money goes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      icon: Eye
    },
    {
      badge: "04 • LOCAL EXPERTISE",
      title: "Coimbatore-Focused Strategy",
      desc: "We understand the local market, culture, and audience better than any remote agency.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=80",
      icon: MapPin
    },
    {
      badge: "05 • FULL ACCOUNTABILITY",
      title: "End-to-End Ownership",
      desc: "From strategy to execution to optimisation — we own the entire journey.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      icon: CheckCircle
    },
    {
      badge: "06 • DEDICATED SUPPORT",
      title: "Dedicated Strategic Support",
      desc: "Direct communication with senior specialists to ensure quick turnaround and zero friction.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
      icon: ShieldCheck
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

        {/* Equal-Sized Image Card Grid */}
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
                className="glass-card h-full flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-850 overflow-hidden hover:border-[#2196E8] bg-slate-50/50 dark:bg-[#0d111c]/60 hover:bg-white dark:hover:bg-[#141b2d] shadow-sm hover:shadow-xl relative group transition-all duration-300"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={diff.image}
                      alt={diff.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-white tracking-wider bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-mono">
                        {diff.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#2196E8]/10 border border-[#2196E8]/20 flex items-center justify-center text-[#2196E8] group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-header text-xl sm:text-2xl text-slate-900 dark:text-white tracking-wide group-hover:text-[#2196E8] transition-colors duration-300">
                        {diff.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
