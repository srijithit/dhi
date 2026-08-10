"use client";
import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Calculator, ArrowRight, Sparkles, RefreshCw, AlertTriangle } from 'lucide-react';

interface AuditCalculatorProps {
  onOpenWhatsApp: (budget: number, reach: number, leads: number) => void;
  onlyForm?: boolean;
}

export default function AuditCalculator({ onOpenWhatsApp, onlyForm = false }: AuditCalculatorProps) {
  const [budget, setBudget] = useState(25000);
  const [auditState, setAuditState] = useState<'form' | 'scanning' | 'results'>('form');
  const [scanStep, setScanStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: 'Application Development',
    goals: ''
  });

  const scanSteps = [
    "Connecting to business servers...",
    "Auditing HTML semantic hierarchy & tags...",
    "Measuring page load speed and latency...",
    "Scanning competitor search terms overlap...",
    "Generating growth recommendation roadmap..."
  ];

  useEffect(() => {
    if (auditState === 'scanning') {
      const interval = setInterval(() => {
        setScanStep((prev) => {
          if (prev < scanSteps.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setAuditState('results');
            return 0;
          }
        });
      }, 900);
      return () => clearInterval(interval);
    }
  }, [auditState]);

  const estimatedReach = Math.round(budget * 2.8);
  const estimatedLeads = Math.round(budget * 0.008);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Company:* ${formData.businessName}\n*Service:* ${formData.service}\n*Goals:* ${formData.goals}`;
    window.location.href = `https://api.whatsapp.com/send?phone=919361088012&text=${encodeURIComponent(message)}`;
  };

  if (onlyForm) {
    return (
      <div className="bg-white dark:bg-[#090d18] p-5 sm:p-10 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl min-h-[520px] flex flex-col justify-between max-w-3xl mx-auto w-full">
        <div className="space-y-6 animate-fadeIn font-body text-left">
          <h3 className="font-header text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white uppercase tracking-wide mb-2 leading-tight">
            Request Free Audit &amp; Roadmap
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6 font-body leading-relaxed">
            Receive a detailed technical breakdown of your website, Google ranking opportunities, and competitor ad strategies.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-5 text-slate-900 dark:text-white">
            <div>
              <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1.5">Your Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Anand Kumar"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1.5">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 93610 88012"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1.5">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. hello@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1.5">Company / Business Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. My Brand Pvt Ltd"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1.5">Required Service *</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
              >
                <option value="Website Development">Website Development</option>
                <option value="Application Development">Application Development</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Search Engine Optimization">Search Engine Optimization</option>
                <option value="Performance Marketing">Performance Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1.5">Goals / Requirements *</label>
              <textarea 
                required
                rows={4}
                placeholder="e.g. Build an iOS/Android e-commerce app with WhatsApp integrations."
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8] resize-none font-body"
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary w-full !py-4.5 sm:!py-5 mt-4 flex items-center justify-center gap-3 cursor-pointer !rounded-2xl sm:!rounded-3xl shadow-xl font-bold text-base sm:text-lg min-h-[58px]"
            >
              <span>Submit to WhatsApp</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <section id="free-audit-form" className="py-20 sm:py-32 md:py-40 bg-white dark:bg-[#000000] relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#2196E8]/5 to-[#4A72EB]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Banner Card */}
        <div className="glass-card p-8 sm:p-14 border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-gradient-to-br dark:from-[#0d1322] dark:to-[#12182b] relative overflow-hidden shadow-xl dark:shadow-2xl animate-fadeIn">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/30 text-xs font-semibold uppercase text-[#2196E8] mb-6 font-body">
                <Sparkles className="w-4 h-4" />
                <span>Zero Cost • High Value</span>
              </div>

              <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wide mb-6 leading-none">
                READY TO GROW YOUR BUSINESS <br />
                <span className="text-[#2196E8]">IN COIMBATORE?</span>
              </h2>

              <p className="text-slate-650 dark:text-slate-355 text-base sm:text-lg leading-relaxed mb-8 font-body max-w-xl">
                Talk to our digital growth experts today. Get a free audit of your website, ads, or social media — and a custom roadmap to scale your business faster.
              </p>

              {/* Calculator Box */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#090d18] border border-slate-200 dark:border-slate-800 mb-8 space-y-4 shadow-sm w-full max-w-xl text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-2 font-body">
                    <Calculator className="w-4 h-4 text-[#2196E8]" />
                    Growth Budget Calculator (₹/Month)
                  </span>
                  <span className="font-numeric font-bold text-[#2196E8] text-lg">
                    ₹{budget.toLocaleString('en-IN')}
                  </span>
                </div>

                <input 
                  type="range" 
                  min="10000" 
                  max="200000" 
                  step="5000" 
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2196E8]"
                />

                <div className="grid grid-cols-2 gap-4 pt-2 text-center font-body">
                  <div className="bg-slate-50 dark:bg-[#121829] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Est. Monthly Reach</span>
                    <span className="font-numeric font-bold text-slate-900 dark:text-white text-xl">
                      {estimatedReach.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="bg-slate-50 dark:bg-[#121829] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Est. Qualified Leads</span>
                    <span className="font-numeric font-bold text-[#2196E8] text-xl">
                      {estimatedLeads}+ /mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full max-w-xl">
                <button 
                  onClick={() => onOpenWhatsApp(budget, estimatedReach, estimatedLeads)}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-8 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider font-body text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WHATSAPP US NOW</span>
                </button>
              </div>

            </div>

            {/* Right Card Form */}
            <div className="lg:col-span-5 bg-white dark:bg-[#090d18] p-5 sm:p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl min-h-[520px] flex flex-col justify-between max-w-full sm:max-w-xl mx-auto w-full">
              
              {auditState === 'form' && (
                <div className="space-y-5 animate-fadeIn font-body text-left">
                  <h3 className="font-header text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-wide mb-2 leading-tight">
                    Request Free Audit &amp; Roadmap
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                    Receive a detailed technical breakdown of your website, Google ranking opportunities, and competitor ad strategies.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-slate-900 dark:text-white">
                    <div>
                      <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1">WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="e.g. +91 93610 88012"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="e.g. hello@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1">Company / Business Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. My Brand Pvt Ltd"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1">Required Service *</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Application Development">Application Development</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Search Engine Optimization">Search Engine Optimization</option>
                        <option value="Performance Marketing">Performance Marketing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase text-slate-700 dark:text-slate-200 mb-1">Goals / Requirements *</label>
                      <textarea 
                        required
                        rows={3}
                        placeholder="e.g. Build an iOS/Android e-commerce app with WhatsApp integrations."
                        value={formData.goals}
                        onChange={(e) => setFormData({...formData, goals: e.target.value})}
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8] resize-none font-body"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full !py-4.5 sm:!py-5 mt-4 flex items-center justify-center gap-3 cursor-pointer !rounded-2xl sm:!rounded-3xl shadow-xl font-bold text-base sm:text-lg min-h-[58px]"
                    >
                      <span>Submit to WhatsApp</span>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </form>
                </div>
              )}

              {auditState === 'scanning' && (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-6 animate-pulse">
                  <div className="w-16 h-16 rounded-full border-4 border-t-[#2196E8] border-slate-200 dark:border-slate-800 animate-spin" />
                  <div>
                    <h4 className="font-header text-2xl text-slate-900 dark:text-white uppercase tracking-wide">
                      Analyzing {formData.businessName || "Your Business"}
                    </h4>
                    <p className="text-xs text-[#2196E8] font-numeric mt-1 uppercase tracking-widest">
                      Step {scanStep + 1} of 5
                    </p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm italic font-body max-w-xs transition-all duration-300">
                    "{scanSteps[scanStep]}"
                  </p>
                </div>
              )}

              {auditState === 'results' && (
                <div className="space-y-6 animate-fadeIn font-body text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="font-header text-3xl text-slate-900 dark:text-white uppercase tracking-wide">
                      Your Audit Report
                    </h3>
                    <button 
                      onClick={() => setAuditState('form')}
                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#2196E8] flex items-center gap-1 font-body cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Re-scan
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-550 dark:bg-[#0d1222] border border-slate-200 dark:border-slate-800/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Overall Digital Score</span>
                      <span className="font-numeric text-2xl font-bold text-amber-400">62/100</span>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>SEO Optimization</span>
                          <span className="text-slate-900 dark:text-white font-semibold">58%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-400 h-full rounded-full" style={{ width: '58%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Page Load Speed</span>
                          <span className="text-slate-900 dark:text-white font-semibold">45%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full rounded-full" style={{ width: '45%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Mobile Usability</span>
                          <span className="text-slate-900 dark:text-white font-semibold">78%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: '78%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider block">
                      Critical Action Recommendations:
                    </span>
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-slate-650 dark:text-slate-350 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Slow page load speeds are causing an estimated 32% drop in ad conversion rates.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-650 dark:text-slate-350 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Missing Schema markup and Local keywords for Coimbatore search index optimization.</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                    <button 
                      onClick={() => onOpenWhatsApp(budget, estimatedReach, estimatedLeads)}
                      className="btn-primary w-full !py-3 flex items-center justify-center gap-2 cursor-pointer !rounded-2xl shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>CLAIM FREE AUDIT</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
