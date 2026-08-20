"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Always play video unmuted with sound
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        // Fallback: If browser blocks initial unmuted autoplay, play muted and unmute on first interaction
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();

          const unmuteOnInteraction = () => {
            if (videoRef.current) {
              videoRef.current.muted = false;
            }
            window.removeEventListener('click', unmuteOnInteraction);
            window.removeEventListener('touchstart', unmuteOnInteraction);
          };

          window.addEventListener('click', unmuteOnInteraction);
          window.addEventListener('touchstart', unmuteOnInteraction);
        }
      });
    }

    // Safety fallback timer (12s)
    const timer = setTimeout(() => {
      handleComplete();
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem('dhi_splash_seen', 'true');
    setLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="splash-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden select-none"
        >
          {/* Full Screen Intro Video Container */}
          <div className="relative w-full h-full flex items-center justify-center bg-[#05070c] px-4 sm:px-6 md:px-0">
            {/* Ambient blurred backdrop video to fill portrait/mobile screens seamlessly */}
            <video
              src="/intro_loading.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 pointer-events-none scale-110"
              aria-hidden="true"
            />

            {/* Video Wrapper: Glass Border on Mobile, Seamless Fullscreen with No Border on Desktop */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-none md:w-full md:h-full flex items-center justify-center rounded-2xl sm:rounded-3xl md:rounded-none border border-white/20 md:border-0 bg-white/10 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-1.5 sm:p-2 md:p-0 shadow-2xl md:shadow-none overflow-hidden transition-all duration-300">
              <video
                ref={videoRef}
                src="/intro_loading.mp4"
                autoPlay
                playsInline
                preload="auto"
                onEnded={handleComplete}
                className="w-full h-auto max-h-[75vh] md:max-h-none md:h-full object-contain md:object-cover rounded-[14px] sm:rounded-[20px] md:rounded-none pointer-events-none"
              />
            </div>

            {/* Skip Intro Button */}
            <button
              onClick={handleComplete}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer font-body shadow-2xl"
            >
              <span>Skip Intro</span>
              <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
