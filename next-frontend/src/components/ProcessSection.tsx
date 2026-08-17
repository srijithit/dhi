"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Search, Compass, Rocket, TrendingUp } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "1",
      title: "DISCOVER",
      subtitle: "Free Consultation & Needs Analysis",
      desc: "We learn about your business, goals, and competition to build a tailored growth plan that truly fits your needs.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
      icon: Search
    },
    {
      num: "2",
      title: "STRATEGISE",
      subtitle: "Data-Backed Digital Strategy",
      desc: "Our team crafts a data-backed digital strategy aligned to your industry and target audience for maximum ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      icon: Compass
    },
    {
      num: "3",
      title: "EXECUTE",
      subtitle: "Precision Launch & Build",
      desc: "From development to campaigns — we build, launch, and manage with precision and full accountability.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      icon: Rocket
    },
    {
      num: "4",
      title: "GROW",
      subtitle: "Continuous Scaling & Optimization",
      desc: "We monitor, optimise, and scale — continuously improving your results month after month.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="py-24 md:py-36 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
      
      {/* Glow Blur Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-[#2196E8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            Seamless Journey
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-4 text-center">
            OUR PROCESS — SIMPLE, TRANSPARENT, <span className="text-[#2196E8]">RESULTS-DRIVEN</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-body text-center">
            Free Consultation → Tailored Growth Plan → Measurable Results
          </p>
        </div>

        {/* 2-Column Split Section matching Screenshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Step Selector List */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'bg-white dark:bg-[#0e1424] border-[#2196E8] shadow-lg scale-[1.01]'
                      : 'bg-white/60 dark:bg-[#0a0d16]/60 border-slate-200/60 dark:border-slate-850 opacity-70 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                    isActive
                      ? 'bg-[#2196E8] text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    {isActive ? <Check className="w-5 h-5" /> : step.num}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-header text-xl sm:text-2xl tracking-wide ${
                        isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {step.num}. {step.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Active Bottom Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeProcessBar"
                        className="h-1 bg-[#2196E8] rounded-full mt-3 w-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Prominent Hero Showcase Image matching Screenshot 2 */}
          <div className="lg:col-span-6 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800/80 group bg-slate-900"
              >
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Bottom Card Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2196E8] mb-1">
                    Step 0{activeStep + 1} Execution
                  </span>
                  <h4 className="font-header text-2xl sm:text-3xl text-white tracking-wide leading-tight mb-2">
                    {steps[activeStep].subtitle}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm font-normal line-clamp-2">
                    {steps[activeStep].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
