"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, X, TrendingUp, MessageSquare, ShieldCheck, Cpu, Smartphone, Globe, Target } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreServices: () => void;
}

import TechAnimation from '@/components/TechAnimation';

export default function Hero({ onOpenAudit, onExploreServices }: HeroProps) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Animation presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 bg-dot-matrix">
      
      {/* Background outline watermark */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="watermark-text text-[13vw] leading-none uppercase font-bold tracking-widest opacity-20 block">
          DHI GROWTH
        </span>
      </div>

      {/* Pulsing blue glow filters */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2196E8]/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#4A72EB]/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Decorative dot-grid pattern top-right */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left flex flex-col items-start justify-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/20 mb-2 backdrop-blur-md shadow-md shadow-[#2196E8]/5"
            >
              <Sparkles className="w-4 h-4 text-[#2196E8] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#2196E8] lowercase font-body">
                coimbatore's premier digital growth agency
              </span>
            </motion.div>
 
            <motion.h1 
              variants={fadeInUp}
              className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide lowercase text-slate-955 text-left leading-[1.05] mb-2"
            >
              coimbatore's leading <span className="text-[#2196E8]">digital growth</span> partner <br />
              <span className="text-[#4A72EB] text-2xl sm:text-3xl md:text-4xl block mt-2 font-semibold">
                web, app, ai &amp; performance marketing
              </span>
            </motion.h1>
 
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed font-body text-left max-w-2xl"
            >
              we help businesses grow through websites, apps, ai automation and performance marketing.
            </motion.p>
 
            <motion.div 
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto"
            >
              <motion.button 
                onClick={onOpenAudit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group !py-3.5 !px-8 cursor-pointer w-full sm:w-auto !rounded-2xl shadow-md hover:shadow-lg"
              >
                <span>Claim Free Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
 

              <motion.button
                onClick={() => setShowVideoModal(true)}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-start gap-2 px-2 py-1 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-[#2196E8] transition-colors cursor-pointer shrink-0"
              >
                <span className="w-10 h-10 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] transition-transform">
                  <Play className="w-4 h-4 fill-[#2196E8]" />
                </span>
                <span>Watch Video (45s)</span>
              </motion.button>
            </motion.div>
 
          </motion.div>

          {/* Right Column - Tech Animation */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center items-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TechAnimation />
          </motion.div>
        </div>

      </div>

      {/* Video Modal Trigger Popup */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white hover:text-[#2196E8] p-2 rounded-full z-10 transition-colors"
              aria-label="Close Video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-video w-full bg-black">
              <video 
                src="/videos/intro.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
