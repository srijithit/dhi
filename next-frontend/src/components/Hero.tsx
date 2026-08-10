"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, X, TrendingUp, MessageSquare, ShieldCheck, Cpu, Smartphone, Globe, Target } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreServices: () => void;
}

function TechAnimation() {
  return (
    <div className="relative w-full max-w-[480px] h-[400px] flex items-center justify-center select-none overflow-visible">
      {/* Glow effects */}
      <div className="absolute w-72 h-72 bg-[#2196E8]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute w-48 h-48 bg-[#4A72EB]/5 rounded-full blur-[50px] pointer-events-none" />

      {/* Central Growth Nucleus */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          boxShadow: ["0 0 20px rgba(33, 150, 232, 0.2)", "0 0 40px rgba(33, 150, 232, 0.5)", "0 0 20px rgba(33, 150, 232, 0.2)"]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#2196E8] to-[#4A72EB] flex flex-col items-center justify-center text-white border-2 border-white/20 shadow-2xl"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#a8d3ff] mb-1">DHI</span>
        <span className="text-sm font-extrabold uppercase tracking-wide">GROWTH</span>
        {/* Pulsing ring */}
        <div className="absolute -inset-4 rounded-full border border-[#2196E8]/30 animate-ping opacity-45 pointer-events-none" style={{ animationDuration: '3s' }} />
      </motion.div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 480 400" fill="none">
        {/* Web link */}
        <motion.path 
          d="M 240 200 L 100 100" 
          stroke="#2196E8" 
          strokeWidth="1.5" 
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* App link */}
        <motion.path 
          d="M 240 200 L 380 100" 
          stroke="#2196E8" 
          strokeWidth="1.5" 
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* AI link */}
        <motion.path 
          d="M 240 200 L 380 300" 
          stroke="#2196E8" 
          strokeWidth="1.5" 
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* Ads link */}
        <motion.path 
          d="M 240 200 L 100 300" 
          stroke="#2196E8" 
          strokeWidth="1.5" 
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Orbiting Satellite Node 1: Web Development (Top-Left) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-[60px] left-[60px] flex flex-col items-center gap-1.5"
      >
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#2196E8] shadow-lg group hover:border-[#2196E8] hover:shadow-2xl hover:shadow-[#2196E8]/10 transition-all duration-300">
          <Globe className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">Web Dev</span>
      </motion.div>

      {/* Orbiting Satellite Node 2: Mobile App Development (Top-Right) */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[60px] right-[60px] flex flex-col items-center gap-1.5"
      >
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#2196E8] shadow-lg group hover:border-[#2196E8] hover:shadow-2xl hover:shadow-[#2196E8]/10 transition-all duration-300">
          <Smartphone className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">App Dev</span>
      </motion.div>

      {/* Orbiting Satellite Node 3: AI Development (Bottom-Right) */}
      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[60px] right-[60px] flex flex-col items-center gap-1.5"
      >
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#2196E8] shadow-lg group hover:border-[#2196E8] hover:shadow-2xl hover:shadow-[#2196E8]/10 transition-all duration-300">
          <Cpu className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">AI Tech</span>
      </motion.div>

      {/* Orbiting Satellite Node 4: Performance Marketing (Bottom-Left) */}
      <motion.div 
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[60px] left-[60px] flex flex-col items-center gap-1.5"
      >
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#2196E8] shadow-lg group hover:border-[#2196E8] hover:shadow-2xl hover:shadow-[#2196E8]/10 transition-all duration-300">
          <Target className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">Paid Ads</span>
      </motion.div>
    </div>
  );
}

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
    <section className="relative pt-36 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 bg-dot-matrix">
      
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
                <span>claim free audit</span>
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
                <span>watch video (45s)</span>
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
