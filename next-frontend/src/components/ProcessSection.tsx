"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, TrendingUp } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We learn about your business, goals, and competition to build a tailored growth plan.",
      icon: Search
    },
    {
      num: "02",
      title: "Strategise",
      desc: "Our team crafts a data-backed digital strategy aligned to your industry and target audience.",
      icon: Compass
    },
    {
      num: "03",
      title: "Execute",
      desc: "From development to campaigns — we build, launch, and manage with precision.",
      icon: Rocket
    },
    {
      num: "04",
      title: "Grow",
      desc: "We monitor, optimise, and scale — continuously improving your results month after month.",
      icon: TrendingUp
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-[#2196E8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            How We Deliver Results
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wide mb-6 text-center">
            OUR PROCESS — SIMPLE, TRANSPARENT, <span className="text-[#2196E8]">RESULTS-DRIVEN</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-body text-center">
            A battle-tested 4-step framework designed to eliminate guesswork and turn digital investments into business growth.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Horizontal line for desktop connecting timeline dots */}
          <div className="hidden lg:block absolute left-12 right-12 top-[60px] h-[3px] border-t-2 border-dashed border-[#A9C0F5]/50 z-0 pointer-events-none" />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 font-body"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, idx) => {
              const IconComponent = step.icon;

              return (
                <motion.div 
                  key={idx}
                  variants={cardVariants}
                  className="premium-glass-card shine-effect p-8 rounded-2xl flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <span className="font-numeric text-4xl font-bold text-[#2196E8]/70 group-hover:text-[#2196E8] transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#2196E8]/10 border border-[#2196E8]/20 flex items-center justify-center text-[#2196E8] group-hover:scale-110 transition-transform duration-300 bg-white dark:bg-[#0d111c]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-header text-2xl text-slate-900 dark:text-white uppercase tracking-wide mb-3 group-hover:text-[#2196E8] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-605 dark:text-slate-350 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
