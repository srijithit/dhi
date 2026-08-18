"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, SkipForward } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt unmuted playback; fallback to muted if browser blocks unmuted autoplay
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay with sound blocked by browser policy, enabling muted fallback:', err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
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

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
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
          {/* Full Screen Intro Video with Sound */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src="/intro_loading.mp4"
              autoPlay
              playsInline
              preload="auto"
              onEnded={handleComplete}
              className="w-full h-full object-cover opacity-100"
            />

            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer font-body shadow-xl"
              aria-label="Toggle Intro Sound"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-red-400" />
                  <span>Unmute Sound</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Sound On</span>
                </>
              )}
            </button>

            {/* Skip Intro Button */}
            <button
              onClick={handleComplete}
              className="absolute bottom-8 right-8 z-20 px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer font-body shadow-2xl"
            >
              <span>Skip Intro</span>
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
