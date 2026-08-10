"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Globe } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/servicesData';

// Custom robust SVG LinkedIn icon to prevent Lucide React version mismatch errors
const LinkedInIcon = (props: any) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 0 0 1.3-1.37A1.32 1.32 0 0 0 6.5 5.6a1.37 1.37 0 0 0-1.3 1.37A1.32 1.32 0 0 0 6.5 8.37m1.4 10.13V10.13h-2.8v8.37h2.8z" />
  </svg>
);

interface TestimonialsSectionProps {
  showAll?: boolean;
}

export default function TestimonialsSection({ showAll = false }: TestimonialsSectionProps) {
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

  const displayTestimonials = showAll ? TESTIMONIALS_DATA : TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section id="testimonials" className="py-32 md:py-40 bg-slate-50 dark:bg-[#080b11] relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
      
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#2196E8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20 w-full">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2 font-body text-center">
            Social Proof &amp; Proven ROI
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wide mb-6 text-center">
            What Our Clients In Coimbatore <span className="text-[#2196E8]">Say About DhiGrowth</span>
          </h2>
          <p className="text-slate-655 dark:text-slate-300 text-base sm:text-lg text-center">
            Real outcomes, transparent partnerships, and compounding digital growth across Coimbatore's leading brands.
          </p>
        </div>

        {/* Testimonials Grid (Rich credentials cards) */}
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
              <Quote className="w-10 h-10 text-[#2196E8] absolute top-6 right-8 opacity-45 group-hover:scale-110 transition-transform duration-300" />

              <div>
                {/* Visual Rating stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-2">5.0 Star Rating</span>
                </div>

                <p className="text-slate-200 italic leading-relaxed mb-8 text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Authorrow with avatar, LinkedIn, Web link & local badge */}
              <div className="pt-6 border-t border-slate-850 flex flex-col gap-4">
                
                {/* Profile Avatar & Info */}
                <div className="flex items-center gap-3">
                  {testimonial.avatarUrl && (
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-800 shrink-0 group-hover:border-[#2196E8] transition-colors"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-header text-lg text-white uppercase tracking-wide truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium truncate">
                      {testimonial.role} — <span className="text-[#2196E8]">{testimonial.company}</span>
                    </p>
                  </div>
                </div>

                {/* Badges & Links Row */}
                <div className="flex items-center justify-between gap-3 text-slate-450 border-t border-slate-900 pt-3">
                  
                  {/* Trust link indicators */}
                  <div className="flex items-center gap-3">
                    {testimonial.linkedinUrl && (
                      <a 
                        href={testimonial.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-[#2196E8] transition-colors p-1 bg-slate-900 rounded-lg border border-slate-800/80" 
                        aria-label="LinkedIn profile"
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>
                    )}
                    {testimonial.websiteUrl && (
                      <a 
                        href={testimonial.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-[#2196E8] transition-colors p-1 bg-slate-900 rounded-lg border border-slate-800/80" 
                        aria-label="Company website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800/60 text-[9px] font-bold text-slate-400 shrink-0 uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-[#2196E8]" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
