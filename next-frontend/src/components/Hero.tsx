"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Laptop, Smartphone, Target, Bot } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenAudit, onExploreServices }: HeroProps) {
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative hero-padding-top pb-24 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 bg-dot-matrix">
      
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center flex flex-col items-center justify-center"
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
                Coimbatore's #1 Full-Service Digital Agency
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-slate-950 text-center leading-[1.1] mb-2"
            >
              COIMBATORE'S LEADING <span className="text-[#2196E8]">DIGITAL GROWTH</span> PARTNER <br />
              <span className="text-[#4A72EB] text-2xl sm:text-3xl md:text-4xl block mt-2 font-semibold">
                WEB, APP, AI &amp; MARKETING SOLUTIONS
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl font-body text-center"
            >
              DhiGrowth is a full-service digital agency in Coimbatore helping businesses scale faster with cutting-edge website development, mobile app development, AI automation, and result-driven digital marketing. From Meta Ads and Google Ads to WhatsApp marketing, SEO, and video production — we build everything your business needs to grow online.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
            >
              <motion.button 
                onClick={onOpenAudit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group !py-3.5 !px-8 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                onClick={onExploreServices}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary !py-3.5 !px-8 !border-brand-bright/40 hover:!border-brand-bright !text-brand-bright hover:!bg-brand-bright/10 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Column - Orbital Floating Panel */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[420px] h-[420px] sm:h-[460px] lg:h-[440px] xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md mx-auto">
              
              {/* Star backdrop (adjusted for light theme glow) */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(33,150,232,0.15)_0,transparent_100%)] absolute inset-0 z-[1]" />
                <div className="w-full h-full bg-white/60 absolute inset-0 z-[2]" />
              </div>

              {/* Orbital Svg Lines */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <svg className="absolute w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    <marker id="blueDot" markerWidth="6" markerHeight="6" refX="3" refY="3">
                      <circle cx="3" cy="3" r="3" fill="#2196E8" />
                    </marker>
                  </defs>
                  
                  {/* Orbit paths */}
                  <circle cx="250" cy="250" r="105" fill="none" stroke="#4A72EB" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="4 4" className="animate-spin-slow" />
                  <circle cx="250" cy="250" r="80" fill="none" stroke="#2196E8" strokeWidth="1.2" strokeOpacity="0.3" />
                  
                  {/* Connectors */}
                  <line x1="250" y1="195" x2="250" y2="135" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.65" markerEnd="url(#blueDot)" />
                  <line x1="295" y1="215" x2="365" y2="160" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.65" markerEnd="url(#blueDot)" />
                  <line x1="290" y1="290" x2="355" y2="340" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.65" markerEnd="url(#blueDot)" />
                  <line x1="210" y1="290" x2="145" y2="340" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.65" markerEnd="url(#blueDot)" />
                  <line x1="205" y1="215" x2="135" y2="160" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.65" markerEnd="url(#blueDot)" />
                </svg>
              </div>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div 
                  onClick={onOpenAudit}
                  className="w-24 h-24 rounded-full bg-[#4A72EB] text-white flex items-center justify-center shadow-2xl ring-4 ring-slate-100/60 border border-[#2196E8] animate-pulse-glow cursor-pointer hover:scale-105 transition-transform"
                >
                  <span className="text-4xl font-bold tracking-tighter font-numeric select-none text-white">DG</span>
                </div>
              </div>

              {/* Orb 1: DhiGrowth Logo (Top) */}
              <div className="absolute top-9 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float z-30">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2196E8] shadow-md flex items-center justify-center overflow-hidden hover:scale-105 transition-all duration-300">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="orb-logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2196E8" />
                        <stop offset="100%" stopColor="#4A72EB" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="url(#orb-logo-gradient)" />
                    {/* Curved arrow wrapping right side */}
                    <path d="M 20,85 A 38,38 0 0,0 83,48 L 88,52 L 86,37 L 72,41 L 76,45 A 33,33 0 0,1 23,80 Z" fill="#00E5FF" />
                    {/* Stylized person / arrow symbol */}
                    <circle cx="43" cy="35" r="7.5" fill="#00E5FF" />
                    <path d="M 18,52 L 67,37 L 40,54 Z" fill="#FFFFFF" />
                    <path d="M 40,54 L 67,37 L 40,75 Z" fill="#00B2FE" />
                    <path d="M 40,54 L 40,75 L 29,61 Z" fill="#0080C5" />
                  </svg>
                </div>
                <div className="mt-2 bg-white border border-slate-200 px-3 py-1 rounded-xl shadow-md text-center flex flex-col leading-[0.8] font-header font-bold text-slate-700">
                  <span className="text-[7px] tracking-wider text-[#2196E8]">DHI</span>
                  <span className="text-[9px] tracking-widest text-[#4A72EB] flex items-center justify-center">
                    GROWTH
                    <span className="text-[5px] ml-0.5 font-sans relative -top-0.5">®</span>
                  </span>
                </div>
              </div>

              {/* Orb 2: Mobile App Dev (Right Top) */}
              <div className="absolute right-3 top-24 flex flex-col items-center animate-float-delayed z-30">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2196E8] shadow-md flex items-center justify-center text-[#2196E8] hover:scale-105 hover:bg-slate-50 transition-all duration-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="mt-2 bg-white border border-slate-200 px-3 py-1 rounded-full text-[9px] font-bold text-slate-700 shadow-md uppercase tracking-wider text-center font-header">
                  App Development
                </span>
              </div>

              {/* Orb 3: Ads & SEO Solutions (Right Bottom) */}
              <div className="absolute right-4 bottom-4 flex flex-col items-center animate-float z-30">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2196E8] shadow-md flex items-center justify-center text-[#2196E8] hover:scale-105 hover:bg-slate-50 transition-all duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <span className="mt-2 bg-white border border-slate-200 px-3 py-1 rounded-full text-[9px] font-bold text-slate-700 shadow-md uppercase tracking-wider text-center font-header">
                  Ads &amp; SEO
                </span>
              </div>

              {/* Orb 4: WhatsApp Marketing (Left Bottom) */}
              <div className="absolute left-4 bottom-4 flex flex-col items-center animate-float-delayed z-30">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2196E8] shadow-md flex items-center justify-center text-[#2196E8] hover:scale-105 hover:bg-slate-50 transition-all duration-300">
                  <Laptop className="w-6 h-6" />
                </div>
                <span className="mt-2 bg-white border border-slate-200 px-3 py-1 rounded-full text-[9px] font-bold text-slate-700 shadow-md uppercase tracking-wider text-center font-header">
                  WhatsApp Marketing
                </span>
              </div>

              {/* Orb 5: AI Automation (Left Top) */}
              <div className="absolute left-3 top-24 flex flex-col items-center animate-float z-30">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2196E8] shadow-md flex items-center justify-center text-[#2196E8] hover:scale-105 hover:bg-slate-50 transition-all duration-300">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="mt-2 bg-white border border-slate-200 px-3 py-1 rounded-full text-[9px] font-bold text-slate-700 shadow-md uppercase tracking-wider text-center font-header">
                  AI Automation
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
