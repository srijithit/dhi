import React, { useState } from 'react';
import { X, CheckCircle2, PhoneCall, ShieldCheck, FileText, Settings, Layers, Calendar } from 'lucide-react';

export default function ServiceModal({ service, onClose, onOpenAudit }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!service) return null;

  // Extract sections
  const overviewSec = service.sections?.find(s => !s.items && !s.features && !s.steps) || service.sections?.[0];
  const itemsSec = service.sections?.find(s => s.items);
  const featuresSec = service.sections?.find(s => s.features);
  const stepsSec = service.sections?.find(s => s.steps);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090d18] border border-[#a9c0f5]/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0d1322] to-[#141b2e] border-b border-slate-800 flex items-start justify-between relative">
          <div className="pr-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2196E8] bg-[#2196E8]/10 rounded-full mb-3 border border-[#2196E8]/30">
              {service.badge || "DhiGrowth Solution"}
            </span>
            <h2 className="font-header text-3xl sm:text-5xl text-white uppercase tracking-wide mb-2">
              {service.heroTitle || service.name}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-body">
              {service.heroSub || service.shortCopy}
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-[#070b13] px-6 sm:px-8">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-4 font-header text-lg uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'overview' 
                ? 'border-[#2196E8] text-white' 
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          
          {itemsSec && (
            <button 
              onClick={() => setActiveTab('offerings')}
              className={`py-4 px-4 font-header text-lg uppercase tracking-wider border-b-2 transition-all ${
                activeTab === 'offerings' 
                  ? 'border-[#2196E8] text-white' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Core Offerings
            </button>
          )}

          {(featuresSec || stepsSec) && (
            <button 
              onClick={() => setActiveTab('process')}
              className={`py-4 px-4 font-header text-lg uppercase tracking-wider border-b-2 transition-all ${
                activeTab === 'process' 
                  ? 'border-[#2196E8] text-white' 
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Methodology & Perks
            </button>
          )}
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-200 font-body">
          
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#0e1424] border border-[#a9c0f5]/10">
                <h3 className="font-header text-2xl text-white uppercase mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#2196E8]" />
                  Service Overview
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  {overviewSec?.content || "At DhiGrowth, we focus on delivering top-tier solutions that drive conversion, increase digital footprint, and scale operations."}
                </p>
              </div>

              {/* General Highlights list if no specific offerings */}
              {!itemsSec && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#090d18] border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2196E8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Strategic Optimization</h4>
                      <p className="text-xs text-slate-400 mt-1">Fully customized strategy aligned with Coimbatore local markets.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#090d18] border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2196E8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Expert Execution</h4>
                      <p className="text-xs text-slate-400 mt-1 font-body">Engineered using the latest tech tools & framework designs.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'offerings' && itemsSec && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-header text-2xl sm:text-3xl text-white uppercase tracking-wide flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#2196E8]" />
                {itemsSec.heading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {itemsSec.items.map((item, idx) => (
                  <div key={idx} className="glass-card p-5 border border-[#a9c0f5]/15 bg-[#0d1220]">
                    <h4 className="font-bold text-white text-lg mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2196E8]" />
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-8 animate-fadeIn">
              {featuresSec && (
                <div className="space-y-4">
                  <h3 className="font-header text-2xl text-white uppercase tracking-wide flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#2196E8]" />
                    {featuresSec.heading}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuresSec.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-[#0d1220] p-4 rounded-xl border border-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-[#2196E8] shrink-0 mt-0.5" />
                        <span className="text-slate-200 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {stepsSec && (
                <div className="space-y-4">
                  <h3 className="font-header text-2xl text-white uppercase tracking-wide flex items-center gap-2">
                    <Settings className="w-6 h-6 text-[#2196E8]" />
                    {stepsSec.heading}
                  </h3>
                  <div className="space-y-3">
                    {stepsSec.steps.map((st, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-[#0d1220] p-4 rounded-xl border border-slate-800">
                        <div className="w-8 h-8 rounded-lg bg-[#2196E8]/20 border border-[#2196E8]/40 flex items-center justify-center font-numeric font-bold text-[#2196E8] text-sm shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-slate-200 text-sm sm:text-base font-semibold">{st}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Consultation Lead Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2196E8]/20 to-[#4A72EB]/20 border border-[#2196E8]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-header text-2xl text-white uppercase mb-1">
                Let's discuss {service.name} for your brand
              </h4>
              <p className="text-sm text-slate-300">
                Contact our local growth strategists in Coimbatore for a custom quote.
              </p>
            </div>
            <button 
              onClick={() => { onClose(); onOpenAudit(); }}
              className="btn-primary shrink-0 !py-3 !px-6"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request Quote</span>
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#090d18] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">
            DhiGrowth Coimbatore — Verified Quality Service
          </span>
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors font-header text-base"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
