"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [cardStep, setCardStep] = useState(344);

  const differentiators = [
    {
      badge: "01 • Integrated Agency",
      title: "One agency, every solution",
      desc: "From logo to landing page to lead generation — we handle it all under one roof.",
      image: "/images/natural_tech.png"
    },
    {
      badge: "02 • Future Ready",
      title: "AI-powered edge",
      desc: "We integrate AI into your business before your competitors even consider it.",
      image: "/images/natural_marketing.png"
    },
    {
      badge: "03 • Transparent Data",
      title: "Transparent reporting",
      desc: "Real-time dashboards and monthly reports — you always know where your money goes.",
      image: "/images/natural_ai.png"
    },
    {
      badge: "04 • Local Insight",
      title: "Market-focused strategy",
      desc: "We understand the local market, culture, and audience better than any remote agency.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=80"
    },
    {
      badge: "05 • Accountability",
      title: "End-to-end ownership",
      desc: "From strategy to execution to optimisation — we own the entire journey.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setCardStep(290 + 24);
        } else {
          setCardStep(320 + 24);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % differentiators.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + differentiators.length) % differentiators.length);
  };

  return (
    <section id="why-us" className="py-10 md:py-14 bg-[#0b0f19] text-white relative overflow-hidden transition-colors border-t border-slate-850 font-body">
      
      {/* Background Hero Architecture Glow Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/90 to-transparent" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 font-body">
        
        {/* 2-Column Split Section matching reference video (00:37) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (5 Cols): Text + Badge + CTA Button */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-slate-400 font-mono text-xs tracking-widest block">
              02 • Our Edge
            </span>
            
            <h2 className="font-header text-4xl sm:text-6xl text-white tracking-wide leading-none">
              Why Businesses Choose DhiGrowth.
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We combine deep domain understanding with world-class tech, data-driven performance marketing, and AI automation to deliver unmatched digital growth for your brand.
            </p>

            <div className="pt-2">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all hover:scale-105"
              >
                <span>Explore Our Edge</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (7 Cols): Horizontal Carousel Cards matching reference site */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Cards Carousel Container with Swipe / Drag gestures */}
            <div className="relative overflow-hidden py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y">
              <motion.div 
                className="flex gap-6 select-none"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -35 || info.velocity.x < -200) {
                    handleNext();
                  } else if (info.offset.x > 35 || info.velocity.x > 200) {
                    handlePrev();
                  }
                }}
                animate={{ x: -currentIdx * cardStep }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.45 }}
              >
                {differentiators.map((diff, idx) => (
                  <div 
                    key={idx}
                    className="w-[290px] sm:w-[320px] shrink-0 bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group select-none"
                  >
                    <div>
                      {/* Top Header Image */}
                      <div className="w-full h-44 relative overflow-hidden bg-slate-100">
                        <img 
                          src={diff.image} 
                          alt={diff.title}
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-3">
                        <span className="text-[11px] font-mono font-bold text-[#2196E8] tracking-wider block">
                          {diff.badge}
                        </span>
                        
                        <h3 className="font-header text-xl text-slate-900 tracking-wide leading-snug">
                          {diff.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {diff.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Slider Nav Controls matching reference video */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              {/* Progress Line */}
              <div className="flex-1 max-w-[200px] h-[3px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#2196E8] rounded-full"
                  animate={{ width: `${((currentIdx + 1) / differentiators.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Navigation Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-[#2196E8] hover:text-[#2196E8] transition-all cursor-pointer bg-white/5"
                  aria-label="Previous card"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-[#2196E8] hover:text-[#2196E8] transition-all cursor-pointer bg-white/5"
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
