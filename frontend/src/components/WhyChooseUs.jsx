import React from 'react';
import { Layers, Bot, Eye, MapPin, CheckCircle, ShieldAlert } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Layers,
      title: "One Agency, Every Solution",
      desc: "From logo to landing page to lead generation — we handle it all under one roof. No juggling multiple freelancers or fragmented agency partners."
    },
    {
      icon: Bot,
      title: "AI-Powered Edge",
      desc: "We integrate AI into your business operations and marketing pipelines before your competitors even consider it, cutting costs and automating sales."
    },
    {
      icon: Eye,
      title: "Transparent Reporting",
      desc: "Real-time performance dashboards and detailed monthly reports — you always know where every rupee goes and what return it produces."
    },
    {
      icon: MapPin,
      title: "Coimbatore-Focused Strategy",
      desc: "We understand the local Coimbatore market, culture, and audience better than any remote agency, delivering strategies with high local resonance."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Ownership",
      desc: "From initial discovery and strategy to execution, continuous monitoring, and optimization — we take total ownership of your growth journey."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#070a12] relative overflow-hidden border-t border-[#a9c0f5]/10">
      
      {/* Visual Accent Light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#2196E8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2">
            The DhiGrowth Advantage
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-white uppercase tracking-wide mb-6">
            WHY COIMBATORE BUSINESSES <span className="text-[#2196E8]">CHOOSE US</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don't sell vanity metrics. We build scalable technology, run high-converting ad campaigns, and deliver tangible ROI.
          </p>
        </div>

        {/* 5 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const IconComponent = diff.icon;

            return (
              <div 
                key={idx}
                className={`glass-card p-8 border border-[#a9c0f5]/15 hover:border-[#2196E8] relative group ${
                  idx === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="font-header text-2xl text-white uppercase tracking-wide mb-3 group-hover:text-[#2196E8] transition-colors">
                  {diff.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
