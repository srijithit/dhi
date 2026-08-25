"use client";
import React from 'react';
import { PhoneCall, MessageCircle, TrendingUp } from 'lucide-react';

interface CTABannerProps {
  onOpenAudit?: () => void;
}

export default function CTABanner({ onOpenAudit }: CTABannerProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello DhiGrowth! I would like to book a free consultation for my business.");
    window.location.href = `https://api.whatsapp.com/send?phone=919361088012&text=${message}`;
  };

  const handleConsultationClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      const el = document.getElementById('free-audit-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/contact';
      }
    }
  };

  return (
    <section className="py-10 md:py-14 bg-[#000000] text-white relative overflow-hidden border-t border-slate-900">
      {/* Decorative dot matrix */}
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />
      
      {/* Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2196E8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#4A72EB]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
        
        {/* Trendline graphic */}
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/30 text-[#2196E8] mb-4 animate-float">
          <TrendingUp className="w-8 h-8" />
        </div>

        <h2 className="font-header text-5xl sm:text-7xl tracking-wider max-w-3xl mx-auto leading-none">
          Ready to Grow Your Business in <span className="text-[#2196E8]">Coimbatore?</span>
        </h2>

        <p className="font-body text-slate-350 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Talk to our digital growth experts today. Get a free audit of your website, ads, or social media and a custom roadmap to scale your business faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button 
            onClick={handleConsultationClick}
            className="w-full sm:w-[280px] h-[56px] px-6 bg-[#4A72EB] hover:bg-[#2196E8] text-white font-bold rounded-2xl border-2 border-transparent hover:shadow-lg transition-all duration-250 flex items-center justify-center gap-2 text-base tracking-wider shadow-md cursor-pointer text-center"
          >
            <PhoneCall className="w-5 h-5 shrink-0" />
            <span>Book a Free Consultation</span>
          </button>
          
          <button 
            onClick={handleWhatsAppClick}
            className="w-full sm:w-[280px] h-[56px] px-6 border-2 border-emerald-500 text-emerald-500 font-bold rounded-2xl hover:bg-emerald-500 hover:text-white transition-colors duration-250 flex items-center justify-center gap-2 text-base tracking-wider bg-transparent cursor-pointer text-center"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>WhatsApp Us Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
