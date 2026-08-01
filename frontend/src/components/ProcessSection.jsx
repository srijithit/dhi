import React from 'react';
import { Search, Compass, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We learn about your business, goals, and competition to build a tailored growth plan.",
      icon: Search
    },
    {
      num: "02",
      title: "Strategise",
      desc: "Our team crafts a data-backed digital strategy aligned to your industry and target audience.",
      icon: Compass
    },
    {
      num: "03",
      title: "Execute",
      desc: "From development to campaigns — we build, launch, and manage with precision.",
      icon: Rocket
    },
    {
      num: "04",
      title: "Grow",
      desc: "We monitor, optimise, and scale — continuously improving your results month after month.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#05070c] relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-[#2196E8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2">
            How We Deliver Results
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-white uppercase tracking-wide mb-6">
            OUR PROCESS — SIMPLE, TRANSPARENT, <span className="text-[#2196E8]">RESULTS-DRIVEN</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A battle-tested 4-step framework designed to eliminate guesswork and turn digital investments into business growth.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <div 
                key={idx}
                className="glass-card p-8 border border-[#a9c0f5]/15 hover:border-[#2196E8] relative flex flex-col justify-between group"
              >
                {/* Step Number in Zen Dots Font */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-numeric text-4xl font-bold text-[#2196E8] opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="font-header text-2xl text-white uppercase tracking-wide mb-3 group-hover:text-[#2196E8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting Indicator for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#a9c0f5]/40">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
