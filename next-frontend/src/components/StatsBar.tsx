"use client";
import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';

export default function StatsBar() {
  const stats = [
    { target: 100, suffix: "+", label: "Projects Delivered", sublabel: "Successfully Completed" },
    { target: 50, suffix: "+", label: "Clients in Coimbatore", sublabel: "Local Business Partners" },
    { target: 5, suffix: "+", label: "Years of Expertise", sublabel: "Proven Track Record" },
    { target: 13, suffix: "+", label: "Services Offered", sublabel: "Full Stack Growth" },
  ];

  return (
    <section className="bg-slate-50 dark:bg-[#080b11] border-y border-slate-200 dark:border-slate-800/80 py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 hover:border-brand/40 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              <div className="font-numeric text-3xl sm:text-4xl font-bold text-brand-bright dark:text-brand-bright mb-2 flex items-center justify-center">
                <AnimatedCounter value={stat.target} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-wider text-slate-800 dark:text-white font-body">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 font-body mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
