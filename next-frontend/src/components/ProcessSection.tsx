"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      num: 1,
      title: "1. Discover",
      desc: "We learn about your business, goals, and competition to build a tailored growth plan.",
      image: "/images/process/step_1_discover.png"
    },
    {
      num: 2,
      title: "2. Strategise",
      desc: "Our team crafts a data-backed strategy aligned to your industry and audience.",
      image: "/images/process/step_2_strategise.png"
    },
    {
      num: 3,
      title: "3. Execute",
      desc: "From development to campaigns — we build, launch, and manage with precision.",
      image: "/images/process/step_3_execute.png"
    },
    {
      num: 4,
      title: "4. Grow",
      desc: "We monitor, optimise, and scale — continuously improving your results month after month.",
      image: "/images/process/step_4_grow.png"
    }
  ];

  // Auto-next step switcher interval (2.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, steps.length]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section 
      id="process" 
      className="scroll-mt-24 py-10 md:py-14 bg-white dark:bg-[#04060c] relative overflow-hidden transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-900 font-body"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1360px] h-64 bg-[#2196E8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-6 w-full">
          <span className="text-[#2196E8] font-bold text-xs tracking-widest block mb-2 font-body text-center">
            Seamless Journey
          </span>
          <h2 className="font-header text-2xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-wide mb-2.5 text-center leading-tight">
            Our Process: Simple, Transparent, <span className="text-[#2196E8]">Results-Driven</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-body text-center">
            Free consultation → Tailored growth plan → Measurable results
          </p>
        </div>

        {/* 2-Column Responsive Split Section matching 80% zoom proportion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column (5 Cols): Clean Interactive Step List */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isCompleted = idx < activeStep;

              return (
                <div
                  key={step.num}
                  onClick={() => handleStepClick(idx)}
                  className={`group p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                    isActive
                      ? 'opacity-100 bg-slate-50/90 dark:bg-[#0c111d]/70 border border-slate-200/90 dark:border-slate-800 shadow-md'
                      : isCompleted
                      ? 'opacity-65 hover:opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  {/* Step Indicator Circle */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#2196E8] text-white shadow-md shadow-[#2196E8]/30 scale-105'
                      : isCompleted
                      ? 'bg-slate-200 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 border border-slate-200/60 dark:border-slate-800/60'
                  }`}>
                    {isActive || isCompleted ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      step.num
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className={`font-header text-lg sm:text-xl tracking-wide transition-colors ${
                      isActive
                        ? 'text-slate-900 dark:text-white font-bold'
                        : 'text-slate-500 dark:text-slate-400 font-semibold'
                    }`}>
                      {step.title}
                    </h3>

                    <p className={`text-xs leading-relaxed mt-0.5 transition-colors ${
                      isActive
                        ? 'text-slate-700 dark:text-slate-200 font-normal'
                        : 'text-slate-500 dark:text-slate-500 font-normal'
                    }`}>
                      {step.desc}
                    </p>

                    {/* Active Blue Indicator Line */}
                    {isActive && (
                      <div className="relative h-[2.5px] bg-slate-200 dark:bg-slate-800 rounded-full mt-2.5 w-full max-w-[240px] overflow-hidden">
                        <motion.div
                          key={`progress-${activeStep}-${isPaused}`}
                          initial={{ width: "0%" }}
                          animate={{ width: isPaused ? "100%" : "100%" }}
                          transition={{ duration: isPaused ? 0.3 : 4.2, ease: "linear" }}
                          className="h-full bg-[#2196E8] rounded-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Showcase Image Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[650px] aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0c111d] flex items-center justify-center p-2 sm:p-3 group"
              >
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-contain rounded-[18px] sm:rounded-[26px] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
