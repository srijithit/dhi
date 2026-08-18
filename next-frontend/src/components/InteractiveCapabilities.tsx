"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code, TrendingUp, Cpu } from 'lucide-react';

export default function InteractiveCapabilities() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const capabilities = [
    {
      id: 1,
      badge: "01 • TECH & DEV",
      title: "High-Performance Engineering",
      image: "/images/natural_tech.png",
      desc: "Custom web applications, mobile apps, and enterprise cloud software engineered for sub-second speed, 99.9% uptime, and frictionless user experiences.",
      icon: Code
    },
    {
      id: 2,
      badge: "02 • MARKETING",
      title: "Data-Driven Growth & ROAS",
      image: "/images/natural_marketing.png",
      desc: "Targeted Meta & Google Ad campaigns, search engine optimization (SEO), and high-converting funnel architectures designed to maximize customer acquisition.",
      icon: TrendingUp
    },
    {
      id: 3,
      badge: "03 • AUTOMATION",
      title: "AI Workflows & Business Systems",
      image: "/images/natural_ai.png",
      desc: "Automated WhatsApp marketing pipelines, CRM integrations, and custom AI agents that eliminate manual overhead and turn lead inquiries into sales.",
      icon: Cpu
    }
  ];

  // Auto-next coverflow rotation timer (4.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, capabilities.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % capabilities.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section 
      className="py-10 md:py-14 bg-slate-50 dark:bg-[#070911] border-y border-slate-200 dark:border-slate-850 overflow-hidden select-none transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6 font-body">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <span className="text-[#2196E8] font-semibold text-xs uppercase tracking-widest block font-numeric">
            Core Competencies
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wider leading-none">
            Interactive Growth Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Drag or swipe the 3D coverflow cards below to explore our core execution capabilities live.
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative flex flex-col items-center justify-center min-h-[420px] mb-12">
          
          {/* Navigation Arrow Left */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white dark:bg-[#111625] border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-slate-700 dark:text-white hover:text-[#2196E8] hover:border-[#2196E8] transition-all cursor-pointer"
            aria-label="Previous capability"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Stack */}
          <div className="relative w-full max-w-[850px] h-[360px] flex items-center justify-center">
            {capabilities.map((item, idx) => {
              const offset = idx - activeIndex;
              const isCenter = offset === 0;

              // Calculate 3D coverflow positioning
              let xOffset = offset * 240;
              let scale = isCenter ? 1.05 : 0.88;
              let opacity = isCenter ? 1 : 0.65;
              let zIndex = isCenter ? 20 : 10 - Math.abs(offset);
              let rotateY = offset * -15;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 8000);
                  }}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    opacity: opacity,
                    rotateY: rotateY,
                    zIndex: zIndex
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-[280px] sm:w-[340px] h-[340px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0c111d] cursor-pointer group"
                  style={{ perspective: 1000 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                    <span className="inline-block w-fit px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-2 font-mono">
                      {item.badge}
                    </span>
                    <h3 className="font-header text-xl sm:text-2xl text-white tracking-wide leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrow Right */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white dark:bg-[#111625] border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-slate-700 dark:text-white hover:text-[#2196E8] hover:border-[#2196E8] transition-all cursor-pointer"
            aria-label="Next capability"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dynamic Detail Box below Coverflow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto bg-white dark:bg-[#0c111f] border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2196E8]/10 text-[#2196E8] mb-4">
              {React.createElement(capabilities[activeIndex].icon, { className: "w-6 h-6" })}
            </div>
            <h4 className="font-header text-2xl text-slate-900 dark:text-white mb-2">
              {capabilities[activeIndex].title}
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {capabilities[activeIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
