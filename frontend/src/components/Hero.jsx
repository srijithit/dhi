import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenAudit, onExploreServices }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#05070c] bg-dot-matrix">
      
      {/* Background Watermark Text from Design Guide */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="watermark-text text-[15vw] leading-none uppercase font-bold tracking-widest opacity-30">
          DHI GROWTH
        </span>
      </div>

      {/* Radial Blue Glow Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2196E8]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#4A72EB]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1322] border border-[#2196E8]/30 mb-8 backdrop-blur-md shadow-lg shadow-[#2196E8]/10">
          <Sparkles className="w-4 h-4 text-[#2196E8] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 uppercase">
            Coimbatore's #1 Full-Service Digital Agency
          </span>
        </div>

        {/* Hero Main Headline (Matching Bebas Neue Style from mockup) */}
        <div className="max-w-4xl">
          <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase text-white leading-[0.95] mb-6">
            WE DON'T JUST MARKET. <br className="hidden sm:block" />
            WE DRIVE <span className="text-gradient-blue underline decoration-[#2196E8]/40 underline-offset-8">REAL GROWTH.</span>
          </h1>

          {/* Subheadline (60–80 words) */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
            <strong className="text-white font-semibold">DhiGrowth</strong> is a full-service digital agency in Coimbatore helping businesses scale faster with cutting-edge website development, mobile app development, AI automation, and result-driven digital marketing. From Meta Ads and Google Ads to WhatsApp marketing, SEO, and video production — we build everything your business needs to grow online.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button 
              onClick={onOpenAudit}
              className="btn-primary group"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="#services"
              className="btn-secondary"
            >
              <span>Explore Our Services</span>
            </a>
          </div>
        </div>

        {/* Credibility Stats Bar in Zen Dots Numeric Font */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#a9c0f5]/15">
          
          <div className="glass-card p-5 sm:p-6 border-l-4 border-l-[#2196E8] hover:border-[#2196E8]">
            <div className="font-numeric text-3xl sm:text-4xl font-bold text-white mb-1 flex items-center gap-1">
              <span>100</span><span className="text-[#2196E8]">+</span>
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">
              Projects Delivered
            </div>
          </div>

          <div className="glass-card p-5 sm:p-6 border-l-4 border-l-[#4A72EB] hover:border-[#4A72EB]">
            <div className="font-numeric text-3xl sm:text-4xl font-bold text-white mb-1 flex items-center gap-1">
              <span>50</span><span className="text-[#4A72EB]">+</span>
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">
              Clients in Coimbatore
            </div>
          </div>

          <div className="glass-card p-5 sm:p-6 border-l-4 border-l-[#A9C0F5] hover:border-[#A9C0F5]">
            <div className="font-numeric text-3xl sm:text-4xl font-bold text-white mb-1 flex items-center gap-1">
              <span>5</span><span className="text-[#A9C0F5]">+</span>
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">
              Years of Expertise
            </div>
          </div>

          <div className="glass-card p-5 sm:p-6 border-l-4 border-l-[#2196E8] hover:border-[#2196E8]">
            <div className="font-numeric text-3xl sm:text-4xl font-bold text-white mb-1 flex items-center gap-1">
              <span>13</span><span className="text-[#2196E8]">+</span>
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">
              Services Offered
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
