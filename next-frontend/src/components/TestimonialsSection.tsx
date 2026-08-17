"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialsSectionProps {
  showAll?: boolean;
}

export default function TestimonialsSection({ showAll = false }: TestimonialsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      category: "03. AI AUTOMATION SOLUTIONS",
      quote: "The AI automation system DhiGrowth built for us saves 40+ hours of manual work every week. Best investment we've made for our business this year.",
      author: "Arun Venkatesh",
      role: "Director, All Healthcare"
    },
    {
      id: 2,
      category: "01. WEBSITE & APP DEVELOPMENT",
      quote: "DhiGrowth rebuilt our brand portal and custom web app with sub-second page speed. Our online inbound inquiries doubled within 30 days of launch.",
      author: "Karthik Raja",
      role: "Founder, Karisal Industries"
    },
    {
      id: 3,
      category: "02. PERFORMANCE MARKETING & SEO",
      quote: "Their targeted Meta & Google ad campaigns brought down our cost per acquisition by 45%. Outstanding transparency and weekly ROI reporting.",
      author: "Priya Sundaram",
      role: "Head of Marketing, Sanika's Group"
    }
  ];

  const displayList = showAll ? testimonials : testimonials;

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % displayList.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + displayList.length) % displayList.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 dark:bg-[#070911] relative overflow-hidden transition-colors border-t border-slate-200/80 dark:border-slate-900 font-body">
      
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 font-body">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <span className="text-[#2196E8] font-bold text-xs uppercase tracking-widest block font-numeric">
            SOCIAL PROOF
          </span>
          <h2 className="font-header text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-wide leading-tight uppercase">
            WHAT OUR CLIENTS IN COIMBATORE SAY ABOUT DHIGROWTH
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Trust is built through transparency and results, and that is exactly how DhiGrowth operates. When you scale your business with us, you receive:
          </p>
        </div>

        {/* Testimonial Box Card matching reference site */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl relative min-h-[300px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Category Pill */}
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#2196E8]/10 text-[#2196E8] border border-[#2196E8]/20 text-xs font-bold font-mono tracking-wider">
                {displayList[activeIdx].category}
              </span>

              {/* Quote */}
              <blockquote className="text-slate-800 dark:text-slate-100 text-lg sm:text-2xl font-body leading-relaxed italic">
                "{displayList[activeIdx].quote}"
              </blockquote>

              {/* Rating & Author */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-header text-xl text-slate-900 dark:text-white">
                    {displayList[activeIdx].author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {displayList[activeIdx].role}
                  </p>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-200/60 dark:border-slate-850">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {displayList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIdx === idx
                      ? 'bg-[#2196E8] w-8'
                      : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-[#2196E8] hover:border-[#2196E8] transition-all cursor-pointer bg-slate-50 dark:bg-[#111625]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-[#2196E8] hover:border-[#2196E8] transition-all cursor-pointer bg-slate-50 dark:bg-[#111625]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
