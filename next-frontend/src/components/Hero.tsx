"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, X, TrendingUp, MessageSquare, ShieldCheck, Cpu, Smartphone, Globe } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreServices: () => void;
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
            className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/20 mb-2 backdrop-blur-md shadow-md shadow-[#2196E8]/5"
            >
              <Sparkles className="w-4 h-4 text-[#2196E8] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#2196E8] uppercase font-body">
                Coimbatore's Premier Digital Growth Agency
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-slate-955 text-center lg:text-left leading-[1.05] mb-2"
            >
              COIMBATORE'S LEADING <span className="text-[#2196E8]">DIGITAL GROWTH</span> PARTNER <br />
              <span className="text-[#4A72EB] text-2xl sm:text-3xl md:text-4xl block mt-2 font-semibold">
                WEB, APP, AI &amp; PERFORMANCE MARKETING
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed font-body text-center lg:text-left max-w-2xl"
            >
              We help businesses grow through Websites, Apps, AI Automation and Performance Marketing.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <motion.button 
                onClick={onOpenAudit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group !py-3.5 !px-8 cursor-pointer w-full sm:w-auto !rounded-2xl shadow-md hover:shadow-lg"
              >
                <span>CLAIM FREE AUDIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                onClick={onExploreServices}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary !py-3.5 !px-8 !border-brand-bright/40 hover:!border-brand-bright !text-brand-bright hover:!bg-brand-bright/10 cursor-pointer w-full sm:w-auto"
              >
                <span>See Our Work</span>
              </motion.button>

              <motion.button
                onClick={() => setShowVideoModal(true)}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-2 py-1 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-[#2196E8] transition-colors cursor-pointer shrink-0"
              >
                <span className="w-10 h-10 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] transition-transform">
                  <Play className="w-4 h-4 fill-[#2196E8]" />
                </span>
                <span>Watch Video (45s)</span>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Column - Premium Animated Dashboard Mockup */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center items-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Dashboard Container mimicking a premium SaaS screen */}
            <div className="relative w-full max-w-[480px] rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-2xl p-4 overflow-hidden select-none">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-[10px] font-semibold text-slate-400 ml-2 font-mono">dhigrowth-workspace</span>
                </div>
                <span className="text-[9px] font-bold text-[#2196E8] bg-[#2196E8]/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-body animate-pulse">
                  System Active
                </span>
              </div>

              {/* Grid content inside the Mockup Dashboard */}
              <div className="space-y-4 font-body">
                
                {/* Visual 1: Analytics & Conversion Growth */}
                <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#2196E8]/10 rounded-bl-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] font-bold text-[#A9C0F5] uppercase tracking-wider block">Conversion Campaign</span>
                      <h4 className="text-xl font-bold font-numeric text-white">+430% <span className="text-emerald-400 text-sm font-sans">▲</span></h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 block">ROI Multiplier</span>
                      <span className="text-xs font-bold text-brand-bright">8.4x ROAS</span>
                    </div>
                  </div>

                  {/* SVG Chart showing growth */}
                  <div className="h-16 w-full flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 300 60" fill="none">
                      <defs>
                        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2196E8" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2196E8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 55 Q 50 48 90 35 T 180 18 T 240 8 L 300 3" stroke="#2196E8" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 0 55 Q 50 48 90 35 T 180 18 T 240 8 L 300 3 L 300 60 L 0 60 Z" fill="url(#chart-grad)" />
                      {/* Animating glow pulse point */}
                      <circle cx="300" cy="3" r="4" fill="#00E5FF" className="animate-ping" />
                      <circle cx="300" cy="3" r="3" fill="#2196E8" />
                    </svg>
                  </div>
                </div>

                {/* Split grid for Web Mock & AI Bot */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Visual 2: Website / App Mock (Left) */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col justify-between shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Globe className="w-3.5 h-3.5 text-[#4A72EB]" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Web &amp; App Dev</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-11/12 bg-slate-200 rounded-full" />
                      <div className="h-2 w-7/12 bg-slate-200 rounded-full" />
                      <div className="h-2 w-9/12 bg-slate-200 rounded-full" />
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-2 text-[10px] font-bold text-[#4A72EB]">
                      <span>Next.js v16</span>
                      <span>100% Speed</span>
                    </div>
                  </div>

                  {/* Visual 3: AI Chat Autoreply (Right) */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col justify-between shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">AI Lead Automation</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-slate-200/70 p-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                        <div className="h-1.5 w-10 bg-slate-400 rounded-full mb-1" />
                        <div className="h-1 w-14 bg-slate-350 rounded-full" />
                      </div>
                      <div className="bg-emerald-500 text-white p-1.5 rounded-lg rounded-tr-none max-w-[85%] ml-auto text-right">
                        <div className="h-1.5 w-10 bg-emerald-250 rounded-full mb-1 ml-auto" />
                        <div className="h-1 w-12 bg-emerald-200 rounded-full ml-auto" />
                      </div>
                    </div>
                    <span className="text-[8px] font-bold text-slate-400 mt-2 block text-center uppercase tracking-wider">Response in 0.2s</span>
                  </div>

                </div>

                {/* Visual 4: Growth Outcomes Metric Bar */}
                <div className="bg-gradient-to-r from-[#2196E8]/10 to-[#4A72EB]/10 rounded-2xl p-3 border border-[#2196E8]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#2196E8] shrink-0" />
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-semibold block">Google &amp; Meta Partners</span>
                      <span className="text-xs font-bold text-slate-800">Verified Business Outcomes</span>
                    </div>
                  </div>
                  <div className="font-numeric text-xs font-bold text-[#4A72EB] bg-white px-2.5 py-1 rounded-lg border border-[#4A72EB]/20 shadow-sm shrink-0">
                    9.8/10 SCORE
                  </div>
                </div>

              </div>

            </div>
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
            <div className="relative aspect-video flex flex-col justify-center items-center text-center p-8 bg-slate-950">
              <div className="w-20 h-20 rounded-full bg-[#2196E8]/20 border-2 border-[#2196E8] flex items-center justify-center text-[#2196E8] mb-6 animate-pulse">
                <Play className="w-8 h-8 fill-[#2196E8]" />
              </div>
              <h3 className="font-header text-3xl sm:text-5xl text-white uppercase mb-3">
                DhiGrowth Digital Agency
              </h3>
              <p className="text-slate-400 font-body text-base max-w-lg mb-4">
                We combine website development, AI automation, and paid ad strategies in Coimbatore to scale your business. Watch our 45s introduction.
              </p>
              <div className="text-xs text-[#2196E8] font-mono tracking-widest uppercase py-1 px-3 border border-[#2196E8]/30 rounded-full bg-[#2196E8]/5">
                Corporate Showreel 2026
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
