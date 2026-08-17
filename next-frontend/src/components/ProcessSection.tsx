"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1); // Default to Step 2 (STRATEGISE) matching reference screenshot

  const steps = [
    {
      num: 1,
      title: "DISCOVER",
      desc: "We learn about your business, goals, and competition to build a tailored growth plan that truly fits your needs.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80"
    },
    {
      num: 2,
      title: "STRATEGISE",
      desc: "Our team crafts a data-backed digital strategy aligned to your industry and target audience for maximum ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80"
    },
    {
      num: 3,
      title: "EXECUTE",
      desc: "From development to campaigns — we build, launch, and manage with precision and full accountability.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80"
    },
    {
      num: 4,
      title: "GROW",
      desc: "We monitor, optimise, and scale — continuously improving your results month after month.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white dark:bg-[#04060c] relative overflow-hidden transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-900 font-body">
      
      {/* Decorative Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1360px] h-64 bg-[#2196E8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 font-body">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-14 w-full">
          <span className="text-[#2196E8] font-semibold text-xs uppercase tracking-widest block mb-2 font-body text-center">
            Seamless Journey
          </span>
          <h2 className="font-header text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-wide mb-3 text-center">
            OUR PROCESS — SIMPLE, TRANSPARENT, <span className="text-[#2196E8]">RESULTS-DRIVEN</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-body text-center">
            Free Consultation → Tailored Growth Plan → Measurable Results
          </p>
        </div>

        {/* 2-Column Split Section Matching Reference Site Viewport Ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 Cols): Clean Interactive Step List */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isCompleted = idx < activeStep;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'opacity-100'
                      : isCompleted
                      ? 'opacity-65 hover:opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  {/* Step Indicator Circle */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/30 scale-105'
                      : isCompleted
                      ? 'bg-slate-200 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 border border-slate-200/60 dark:border-slate-800/60'
                  }`}>
                    {isActive || isCompleted ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      step.num
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className={`font-header text-xl sm:text-2xl tracking-wide transition-colors ${
                      isActive
                        ? 'text-slate-900 dark:text-white font-bold'
                        : 'text-slate-500 dark:text-slate-400 font-semibold'
                    }`}>
                      {step.num}. {step.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mt-1 transition-colors ${
                      isActive
                        ? 'text-slate-700 dark:text-slate-200 font-normal'
                        : 'text-slate-500 dark:text-slate-500 font-normal'
                    }`}>
                      {step.desc}
                    </p>

                    {/* Active Blue Indicator Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeProcessBar"
                        className="h-[3px] bg-[#2196E8] rounded-full mt-3 w-full max-w-[280px]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Large Showcase Image Card matching reference site size */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[650px] h-[340px] sm:h-[440px] lg:h-[480px] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-900 group"
              >
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
