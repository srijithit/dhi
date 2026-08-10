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
    <section id="process" className="py-32 md:py-40 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
      
      {/* Styles for animated SVG arrows */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flowDash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animated-arrow-flow {
          stroke-dasharray: 6 4;
          animation: flowDash 1.2s linear infinite;
        }
      `}} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-[#2196E8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            How We Deliver Results
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-6 text-center">
            Our Process — Simple, Transparent, <span className="text-[#2196E8]">Results-Driven</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-body text-center">
            A battle-tested 4-step framework designed to eliminate guesswork and turn digital investments into business growth.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Animated Flow Arrows between columns (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:flex absolute left-[22%] top-[54px] w-[6%] justify-center items-center z-20 pointer-events-none">
            <svg className="w-12 h-6 text-[#2196E8]" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 H52 L44 4 M52 10 L44 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animated-arrow-flow" />
            </svg>
          </div>
          <div className="hidden lg:flex absolute left-[47%] top-[54px] w-[6%] justify-center items-center z-20 pointer-events-none">
            <svg className="w-12 h-6 text-[#2196E8]" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 H52 L44 4 M52 10 L44 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animated-arrow-flow" />
            </svg>
          </div>
          <div className="hidden lg:flex absolute left-[72%] top-[54px] w-[6%] justify-center items-center z-20 pointer-events-none">
            <svg className="w-12 h-6 text-[#2196E8]" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 H52 L44 4 M52 10 L44 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animated-arrow-flow" />
            </svg>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 font-body"
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
                    <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
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
