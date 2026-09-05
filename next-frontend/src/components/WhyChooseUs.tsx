"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  const differentiators = [
    {
      badge: "01 • Integrated Agency",
      category: "Integrated Agency",
      number: "01",
      title: "One agency, every solution",
      desc: "From branding and web architecture to performance ad funnels — we handle everything under one roof.",
      image: "/images/why-us/edge_1_agency.jpg"
    },
    {
      badge: "02 • Future Ready",
      category: "Future Ready",
      number: "02",
      title: "AI-powered innovation",
      desc: "We integrate custom AI automations into your workflow before competitors even consider it.",
      image: "/images/why-us/edge_2_ai.jpg"
    },
    {
      badge: "03 • Transparent Data",
      category: "Transparent Data",
      number: "03",
      title: "Transparent reporting",
      desc: "Live dashboards and granular monthly ROAS reports — you always know where every rupee goes.",
      image: "/images/why-us/edge_3_reporting.jpg"
    },
    {
      badge: "04 • Local Insight",
      category: "Local Insight",
      number: "04",
      title: "Market-focused strategy",
      desc: "We understand the local market, culture, and high-intent buyer psychology better than any remote agency.",
      image: "/images/why-us/edge_4_market.jpg"
    },
    {
      badge: "05 • Accountability",
      category: "Accountability",
      number: "05",
      title: "End-to-end ownership",
      desc: "From initial roadmap to rapid execution and continuous optimization — we own the entire growth journey.",
      image: "/images/why-us/edge_5_ownership.jpg"
    }
  ];

  const N = differentiators.length;
  // Repeat list 5 times for infinite looping buffer
  const extendedList = [
    ...differentiators,
    ...differentiators,
    ...differentiators,
    ...differentiators,
    ...differentiators,
  ];

  // Start in the middle set (Set 2 = index 10)
  const [virtualIndex, setVirtualIndex] = useState(2 * N);
  const [isInstant, setIsInstant] = useState(false);
  const [cardStep, setCardStep] = useState(364);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active dot index (0 to 4)
  const activeDot = ((virtualIndex % N) + N) % N;

  // Auto-advance rotation timer (4.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsInstant(false);
      setVirtualIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Reset instant flag on next frame
  useEffect(() => {
    if (isInstant) {
      const raf = requestAnimationFrame(() => {
        setIsInstant(false);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isInstant]);

  // Card dimension step calculation
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setCardStep(300 + 20);
        } else if (window.innerWidth < 1024) {
          setCardStep(350 + 24);
        } else {
          setCardStep(370 + 24);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Seamless jump when reaching boundaries
  const handleAnimationComplete = () => {
    if (virtualIndex >= 3 * N) {
      setIsInstant(true);
      setVirtualIndex((prev) => prev - N);
    } else if (virtualIndex < 2 * N) {
      setIsInstant(true);
      setVirtualIndex((prev) => prev + N);
    }
  };

  const handleNext = () => {
    setIsInstant(false);
    setVirtualIndex((prev) => prev + 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 7000);
  };

  const handlePrev = () => {
    setIsInstant(false);
    setVirtualIndex((prev) => prev - 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 7000);
  };

  const goToSlide = (targetDotIdx: number) => {
    setIsInstant(false);
    let diff = targetDotIdx - activeDot;
    if (diff > 2) diff -= N;
    if (diff < -2) diff += N;
    setVirtualIndex((prev) => prev + diff);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 7000);
  };

  return (
    <section 
      id="why-us" 
      className="py-14 sm:py-20 md:py-24 bg-[#080c16] dark:bg-[#060911] text-white relative overflow-hidden transition-colors border-t border-slate-800/80 font-body"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Background Architectural Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c16] via-[#080c16]/95 to-[#080c16]/80" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 font-body">
        
        {/* 2-Column Split Section matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (5 Cols): Title + Subtitle + CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-[#2196E8]/30 text-[#2196E8] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 • Our Edge</span>
            </div>
            
            <h2 className="font-header text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] font-bold">
              Why Businesses <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#2196E8] bg-clip-text text-transparent">
                Choose DhiGrowth.
              </span>
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-body">
              We combine deep domain understanding with world-class tech, data-driven performance marketing, and AI automation to deliver unmatched digital growth for your brand.
            </p>

            <div className="pt-2">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#1b80c9] hover:from-[#1b80c9] hover:to-[#2196E8] text-white text-sm font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Edge</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (7 Cols): Smooth Swipe Carousel */}
          <div className="lg:col-span-7 space-y-6 relative">
            
            {/* Carousel Viewport with Touch & Mouse Swipe */}
            <div 
              ref={containerRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative overflow-hidden py-3 cursor-grab active:cursor-grabbing select-none touch-pan-y"
            >
              <motion.div 
                className="flex gap-5 sm:gap-6 select-none"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -35 || info.velocity.x < -180) {
                    handleNext();
                  } else if (info.offset.x > 35 || info.velocity.x > 180) {
                    handlePrev();
                  }
                }}
                animate={{ x: -virtualIndex * cardStep }}
                transition={isInstant ? { duration: 0 } : { ease: [0.25, 1, 0.5, 1], duration: 0.55 }}
                onAnimationComplete={handleAnimationComplete}
              >
                {extendedList.map((diff, idx) => {
                  const isActive = idx === virtualIndex;
                  return (
                    <div 
                      key={idx}
                      onClick={() => {
                        setIsInstant(false);
                        setVirtualIndex(idx);
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 7000);
                      }}
                      className={`relative w-[300px] sm:w-[350px] md:w-[370px] h-[460px] sm:h-[480px] md:h-[500px] shrink-0 rounded-[32px] overflow-hidden shadow-2xl group select-none cursor-pointer transition-all duration-300 flex flex-col bg-white border border-slate-200/80 ${
                        isActive 
                          ? 'ring-2 ring-[#2196E8] shadow-blue-500/25 scale-[1.01]' 
                          : 'opacity-90 hover:opacity-100 hover:scale-[1.005]'
                      }`}
                    >
                      {/* Top Half: High-resolution Image */}
                      <div className="relative w-full h-[230px] sm:h-[250px] md:h-[260px] overflow-hidden bg-slate-900 shrink-0">
                        <img 
                          src={diff.image} 
                          alt={diff.title}
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                        />
                      </div>

                      {/* Bottom Half: Solid White Content Card */}
                      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-start text-left bg-white text-slate-900 rounded-b-[32px]">
                        {/* Category Label */}
                        <div className="text-sm font-bold text-[#2196E8] tracking-tight mb-2 flex items-center gap-1.5">
                          <span>{diff.badge}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-header text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mb-2.5 tracking-tight">
                          {diff.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-sm sm:text-[14px] leading-relaxed font-body">
                          {diff.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Slider Bottom Navigation: Pagination Dots & Arrows */}
            <div className="flex items-center justify-between pt-2 px-1">
              
              {/* Pagination Dots (Matching Reference Video) */}
              <div className="flex items-center gap-2">
                {differentiators.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => goToSlide(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeDot === dotIdx 
                        ? 'w-8 bg-[#2196E8] shadow-sm shadow-blue-500/50' 
                        : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Circular Arrow Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-[#2196E8] hover:border-[#2196E8] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  aria-label="Previous card (reverse)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-[#2196E8] hover:border-[#2196E8] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  aria-label="Next card"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
