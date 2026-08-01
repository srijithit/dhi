import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Building2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/servicesData';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIdx];

  return (
    <section id="testimonials" className="py-24 bg-[#05070c] relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#2196E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2">
            Social Proof & Proven ROI
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-white uppercase tracking-wide mb-6">
            WHAT OUR CLIENTS IN COIMBATORE <span className="text-[#2196E8]">SAY ABOUT DHIGROWTH</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real outcomes, transparent partnerships, and compounding digital growth across Coimbatore's leading brands.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 border border-[#a9c0f5]/20 relative shadow-2xl">
          <Quote className="w-16 h-16 text-[#2196E8]/20 absolute top-6 right-8 pointer-events-none" />

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-6 text-amber-400">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <p className="text-xl sm:text-2xl text-slate-100 italic leading-relaxed mb-8">
            "{current.text}"
          </p>

          {/* Client Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <div>
              <h4 className="font-header text-2xl text-white uppercase tracking-wide">
                {current.name}
              </h4>
              <p className="text-sm text-slate-300 font-medium">
                {current.role} — <span className="text-[#2196E8]">{current.company}</span>
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1322] border border-[#a9c0f5]/20 text-xs font-semibold text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#2196E8]" />
              <span>{current.location}</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-[#0d1220] border border-slate-800 hover:border-[#2196E8] text-white flex items-center justify-center transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeIdx 
                    ? 'w-8 bg-[#2196E8]' 
                    : 'bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-[#0d1220] border border-slate-800 hover:border-[#2196E8] text-white flex items-center justify-center transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
