"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/servicesData';

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // We render the first 3 testimonials in a grid as requested
  const displayTestimonials = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section id="testimonials" className="py-28 md:py-36 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
      
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#2196E8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            Social Proof &amp; Proven ROI
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wide mb-6 text-center">
            WHAT OUR CLIENTS IN COIMBATORE <span className="text-[#2196E8]">SAY ABOUT DHIGROWTH</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg text-center">
            Real outcomes, transparent partnerships, and compounding digital growth across Coimbatore's leading brands.
          </p>
        </div>

        {/* Testimonials Grid (Dark cards with blue quote icon) */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayTestimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={cardVariants}
              className="bg-[#0b0d16] text-white p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between relative shadow-xl hover:border-[#2196E8] transition-all duration-350 hover:-translate-y-1.5 group"
            >
              {/* Blue Quote Icon */}
              <Quote className="w-10 h-10 text-[#2196E8] absolute top-6 right-8 opacity-40 group-hover:scale-110 transition-transform duration-300" />

              <div>
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-450 text-amber-450" />
                  ))}
                </div>

                <p className="text-slate-200 italic leading-relaxed mb-8 text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-header text-xl text-white uppercase tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {testimonial.role} — <span className="text-[#2196E8]">{testimonial.company}</span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-350 shrink-0">
                  <MapPin className="w-3 h-3 text-[#2196E8]" />
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
