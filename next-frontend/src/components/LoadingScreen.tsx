"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already seen the intro splash in this session
    const hasSeenSplash = sessionStorage.getItem('dhi_splash_seen');
    if (hasSeenSplash) {
      setLoading(false);
      return;
    }

    // Safety fallback timer (7.0s) in case onEnded is delayed by browser policy
    const timer = setTimeout(() => {
      handleComplete();
    }, 7000);

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
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#030712] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Edge-to-Edge Full Screen Video Animation */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src="/videos/rocket_left_fly_final.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleComplete}
              className="w-full h-full object-cover opacity-100"
            />

            {/* Glowing Brand Accent Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40 pointer-events-none" />

            {/* Skip Button */}
            <button
              onClick={handleComplete}
              className="absolute bottom-8 right-8 z-10 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer font-body"
            >
              Skip Intro →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
