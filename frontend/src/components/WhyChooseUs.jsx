import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      number: "01",
      category: "Integrated Agency",
      title: "One agency, every solution",
      desc: "From branding and web architecture to performance ad funnels — we handle everything under one roof.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
    },
    {
      number: "02",
      category: "Future Ready",
      title: "AI-powered innovation",
      desc: "We integrate custom AI automations into your workflow before competitors even consider it.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80"
    },
    {
      number: "03",
      category: "Transparent Data",
      title: "Transparent reporting",
      desc: "Live dashboards and granular monthly ROAS reports — you always know where every rupee goes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80"
    },
    {
      number: "04",
      category: "Local Insight",
      title: "Market-focused strategy",
      desc: "We understand the local market, culture, and high-intent buyer psychology better than any remote agency.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&auto=format&fit=crop&q=80"
    },
    {
      number: "05",
      category: "Accountability",
      title: "End-to-end ownership",
      desc: "From initial roadmap to rapid execution and continuous optimization — we own the entire growth journey.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80"
    }
  ];

  const N = differentiators.length;
  const extendedList = [
    ...differentiators,
    ...differentiators,
    ...differentiators,
    ...differentiators,
    ...differentiators,
  ];

  const [virtualIndex, setVirtualIndex] = useState(2 * N);
  const [isInstant, setIsInstant] = useState(false);
  const [cardStep, setCardStep] = useState(364);
  const [isPaused, setIsPaused] = useState(false);

  const activeDot = ((virtualIndex % N) + N) % N;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIsInstant(false);
      setVirtualIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (isInstant) {
      const raf = requestAnimationFrame(() => {
        setIsInstant(false);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isInstant]);

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
  const touchStartX = React.useRef(null);
  const touchEndX = React.useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
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

  const handleTransitionEnd = () => {
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

  const goToSlide = (targetDotIdx) => {
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
      className="py-16 md:py-24 bg-[#080c16] text-white relative overflow-hidden transition-colors border-t border-slate-800/80 font-body"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 font-body">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Title & CTA */}
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
              <a 
                href="#about" 
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#2196E8] hover:bg-[#1b80c9] text-white text-sm font-bold transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
              >
                <span>Explore Our Edge</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Carousel Viewport with Touch & Mouse Swipe */}
          <div className="lg:col-span-7 space-y-6 relative">
            <div 
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative overflow-hidden py-3 cursor-grab active:cursor-grabbing select-none touch-pan-y"
            >
              <div 
                className={`flex gap-5 sm:gap-6 ${isInstant ? '' : 'transition-transform duration-500 ease-out'}`}
                style={{ transform: `translateX(-${virtualIndex * cardStep}px)` }}
                onTransitionEnd={handleTransitionEnd}
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
                        isActive ? 'ring-2 ring-[#2196E8] shadow-blue-500/25 scale-[1.01]' : 'opacity-90 hover:opacity-100 hover:scale-[1.005]'
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
                          <span>{diff.number} • {diff.category}</span>
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
              </div>
            </div>

            {/* Bottom Dots & Arrows */}
            <div className="flex items-center justify-between pt-2 px-1">
              <div className="flex items-center gap-2">
                {differentiators.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => goToSlide(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeDot === dotIdx ? 'w-8 bg-[#2196E8]' : 'w-2.5 bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-[#2196E8] hover:border-[#2196E8] text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-[#2196E8] hover:border-[#2196E8] text-white flex items-center justify-center transition-all cursor-pointer"
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
