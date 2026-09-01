import React from 'react';
import { 
  ShoppingBag, Activity, GraduationCap, Factory, Building, 
  Utensils, Truck, Briefcase, Rocket, Globe, ArrowUpRight 
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/servicesData';

const ICON_MAP = {
  ShoppingBag,
  Activity,
  GraduationCap,
  Factory,
  Building,
  Utensils,
  Truck,
  Briefcase,
  Rocket,
  Globe
};

export default function IndustriesSection({ onOpenAudit }) {
  return (
    <section id="industries" className="py-24 bg-[#070a12] relative overflow-hidden border-t border-[#a9c0f5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2">
            Tailored Industry Solutions
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-white uppercase tracking-wide mb-6">
            INDUSTRIES WE <span className="text-[#2196E8]">SERVE IN COIMBATORE</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg text-center max-w-3xl">
            We work with businesses across Coimbatore and India from textile and manufacturing to retail, healthcare, education, hospitality, real estate, and technology startups.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const IconComponent = ICON_MAP[ind.icon] || Globe;

            return (
              <div 
                key={idx}
                onClick={onOpenAudit}
                className="glass-card p-6 border border-[#a9c0f5]/15 hover:border-[#2196E8] cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-header text-xl text-white uppercase tracking-wide mb-2 group-hover:text-[#2196E8] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-semibold uppercase text-[#a9c0f5] group-hover:text-[#2196E8]">
                  <span>Get Strategy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
