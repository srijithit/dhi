"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Pause, Maximize2, X, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenAudit }: HeroProps) {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
    <section className="relative pt-20 pb-6 md:pt-24 md:pb-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 bg-dot-matrix">
      
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="lg:col-span-6 space-y-5 text-left flex flex-col items-start justify-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/20 mb-1 backdrop-blur-md shadow-md shadow-[#2196E8]/5"
            >
              <Sparkles className="w-4 h-4 text-[#2196E8] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs sm:text-xs md:text-sm font-semibold tracking-wide text-[#2196E8] font-body">
                Coimbatore's Premier Digital Growth Agency
              </span>
            </motion.div>
 
            <motion.h1 
              variants={fadeInUp}
              className="font-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-slate-900 dark:text-white text-left leading-[1.08] mb-1"
            >
              Coimbatore's Leading <span className="text-[#2196E8]">Digital Growth</span> Partner <br />
              <span className="text-[#4A72EB] text-xl sm:text-2xl md:text-3xl block mt-2 font-semibold">
                Web, App, AI &amp; Performance Marketing
              </span>
            </motion.h1>
 
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed font-body text-left max-w-xl"
            >
              We help businesses grow through high-performance websites, mobile apps, AI automation, and performance marketing.
            </motion.p>
 
            <motion.div 
              variants={fadeInUp}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto"
            >
              <motion.button 
                onClick={onOpenAudit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group !py-3 !px-7 cursor-pointer w-full sm:w-auto !rounded-xl shadow-md hover:shadow-lg text-sm"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
 
          </motion.div>

          {/* Right Column - Portrait Video Showcase Player matching 90% zoom proportion */}
          <motion.div 
            className="lg:col-span-6 relative flex justify-center items-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] mx-auto rounded-[32px] overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-slate-950 shadow-2xl group transition-all duration-300 hover:border-[#2196E8]/60">
              
              {/* Top floating pill badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider font-body">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Showcase • 45s</span>
              </div>

              {/* Top Right Expand Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-[#2196E8] text-white border border-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-105"
                title="Expand Full Screen Video"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Embedded Portrait Video Container (9:16 Aspect Ratio) */}
              <div className="relative aspect-[9/16] w-full bg-slate-950 overflow-hidden">
                <video 
                  ref={videoRef}
                  src="/videos/intro.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />

                {/* Bottom Video Controls Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-center justify-between z-20">
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-xs font-bold transition-all cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 text-[#2196E8]" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 text-[#2196E8] fill-[#2196E8]" />
                        <span>Play Video</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                    title={isMuted ? "Unmute Sound" : "Mute Sound"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-slate-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Portrait Video Modal Trigger Popup */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-slate-950 rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white hover:text-[#2196E8] p-2.5 rounded-full z-20 transition-colors cursor-pointer"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-full bg-black">
              <video 
                src="/videos/intro.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
