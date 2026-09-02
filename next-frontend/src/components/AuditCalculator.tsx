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
  const [formError, setFormError] = useState('');

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && (!formData.name || formData.name.length === 0 || formData.name.endsWith(' '))) {
      e.preventDefault();
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const handleBusinessKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && (!formData.businessName || formData.businessName.length === 0 || formData.businessName.endsWith(' '))) {
      e.preventDefault();
    }
  };

  const handleGoalsKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === ' ' && (!formData.goals || formData.goals.length === 0)) {
      e.preventDefault();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/^\s+/, '').replace(/[^a-zA-Z\s.'-]/g, '').replace(/\s{2,}/g, ' ');
    setFormData(prev => ({ ...prev, name: val }));
    if (formError) setFormError('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\s+/g, '');
    if (val.startsWith('+')) {
      val = '+' + val.slice(1).replace(/\D/g, '');
    } else {
      val = val.replace(/\D/g, '');
    }
    if (val.length > 16) val = val.slice(0, 16);
    setFormData(prev => ({ ...prev, phone: val }));
    if (formError) setFormError('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\s+/g, '');
    setFormData(prev => ({ ...prev, email: val }));
    if (formError) setFormError('');
  };

  const handleBusinessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/^\s+/, '').replace(/\s{2,}/g, ' ');
    setFormData(prev => ({ ...prev, businessName: val }));
    if (formError) setFormError('');
  };

  const handleGoalsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value.replace(/^\s+/, '');
    setFormData(prev => ({ ...prev, goals: val }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedBusiness = formData.businessName.trim();
    const trimmedGoals = formData.goals.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setFormError('Please enter a valid Name (minimum 2 letters, characters only).');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
      setFormError('Name must only contain character strings.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone || digitsOnly.length < 10) {
      setFormError('Please enter a valid WhatsApp Number (minimum 10 integer digits, numbers only).');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setFormError('Please enter a valid Email Address (no spaces).');
      return;
    }

    if (!trimmedBusiness) {
      setFormError('Company / Business Name cannot be empty or just spaces.');
      return;
    }

    if (!trimmedGoals) {
      setFormError('Goals / Requirements cannot be empty or just spaces.');
      return;
    }

    const message = `Name: ${trimmedName}\nPhone: ${trimmedPhone}\nEmail: ${trimmedEmail}\nCompany: ${trimmedBusiness}\nService: ${formData.service}\nGoals: ${trimmedGoals}`;
    window.location.href = `https://api.whatsapp.com/send?phone=919361088012&text=${encodeURIComponent(message)}`;
  };

  if (onlyForm) {
    return (
      <div className="bg-white dark:bg-[#090d18] p-4 sm:p-10 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl min-h-[520px] flex flex-col justify-between max-w-3xl mx-auto w-full">
        <div className="space-y-6 animate-fadeIn font-body text-left">
          <h3 className="font-header text-2xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-wide mb-2 leading-tight">
            Request Free Audit &amp; Roadmap
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6 font-body leading-relaxed">
            Receive a detailed technical breakdown of your website, Google ranking opportunities, and competitor ad strategies.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-5 text-slate-900 dark:text-white">
            {formError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
                {formError}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5 font-body">Your Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Anand Kumar"
                value={formData.name}
                onKeyDown={handleNameKeyDown}
                onChange={handleNameChange}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5 font-body">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 93610 88012"
                  value={formData.phone}
                  onKeyDown={handlePhoneKeyDown}
                  onChange={handlePhoneChange}
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5 font-body">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. hello@company.com"
                  value={formData.email}
                  onKeyDown={handleEmailKeyDown}
                  onChange={handleEmailChange}
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5 font-body">Company / Business Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. My Brand Pvt Ltd"
                value={formData.businessName}
                onKeyDown={handleBusinessKeyDown}
                onChange={handleBusinessChange}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5 font-body">Required Service *</label>
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
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5 font-body">Goals / Requirements *</label>
              <textarea 
                required
                rows={4}
                placeholder="e.g. Build an iOS/Android e-commerce app with WhatsApp integrations."
                value={formData.goals}
                onKeyDown={handleGoalsKeyDown}
                onChange={handleGoalsChange}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-2xl text-base focus:outline-none focus:border-[#2196E8] resize-none font-body"
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary w-full !py-4.5 mt-4 flex items-center justify-center gap-3 cursor-pointer !rounded-2xl shadow-xl font-bold text-base min-h-[56px] capitalize"
            >
              <span>Submit &amp; Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#070b13] p-4 sm:p-10 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300 min-h-[460px] flex flex-col justify-between">
      
      {/* Glow background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2196E8]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Inputs */}
          <div className="lg:col-span-7">
            {auditState === 'form' && (
              <div className="space-y-3 animate-fadeIn text-left">
                <h3 className="font-header text-xl sm:text-2xl lg:text-3xl text-slate-900 dark:text-white tracking-wide mb-1 leading-tight capitalize">
                  Request Free Audit &amp; Roadmap
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs mb-3 leading-relaxed">
                  Receive a detailed technical breakdown of your website, Google ranking opportunities, and competitor ad strategies.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-3 text-slate-900 dark:text-white">
                  {formError && (
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold capitalize text-slate-700 dark:text-slate-200 mb-0.5">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onKeyDown={handleNameKeyDown}
                      onChange={handleNameChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2196E8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold capitalize text-slate-700 dark:text-slate-200 mb-0.5">WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. +91 93610 88012"
                        value={formData.phone}
                        onKeyDown={handlePhoneKeyDown}
                        onChange={handlePhoneChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2196E8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold capitalize text-slate-700 dark:text-slate-200 mb-0.5">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. hello@company.com"
                        value={formData.email}
                        onKeyDown={handleEmailKeyDown}
                        onChange={handleEmailChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2196E8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold capitalize text-slate-700 dark:text-slate-200 mb-0.5">Company / Business Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. My Brand Pvt Ltd"
                      value={formData.businessName}
                      onKeyDown={handleBusinessKeyDown}
                      onChange={handleBusinessChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2196E8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold capitalize text-slate-700 dark:text-slate-200 mb-0.5">Required Service *</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2196E8]"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Application Development">Application Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Search Engine Optimization">Search Engine Optimization</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold capitalize text-slate-700 dark:text-slate-200 mb-0.5">Goals / Requirements *</label>
                    <textarea 
                      required
                      rows={2.5}
                      placeholder="e.g. Build an iOS/Android e-commerce app with WhatsApp integrations."
                      value={formData.goals}
                      onKeyDown={handleGoalsKeyDown}
                      onChange={handleGoalsChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#121726] border border-slate-250 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2196E8] resize-none font-body"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full !py-3 sm:!py-3.5 mt-2 flex items-center justify-center gap-2.5 cursor-pointer !rounded-xl shadow-lg font-bold text-sm sm:text-base min-h-[48px] capitalize"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            )}

            {auditState === 'scanning' && (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-6 animate-pulse">
                <div className="w-16 h-16 rounded-full border-4 border-t-[#2196E8] border-slate-200 dark:border-slate-800 animate-spin" />
                <div>
                  <h4 className="font-header text-2xl text-slate-900 dark:text-white tracking-wide">
                    Analyzing {formData.businessName || "Your Business"}
                  </h4>
                  <p className="text-xs text-[#2196E8] font-body mt-1 tracking-widest font-bold">
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
                    <h3 className="font-header text-3xl text-slate-900 dark:text-white tracking-wide">
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
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider block font-body">
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
                      onClick={() => {
                        if (onOpenWhatsApp) {
                          onOpenWhatsApp(budget, estimatedReach, estimatedLeads);
                        } else {
                          const message = `Name: ${formData.name || 'Website Visitor'}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.businessName || 'N/A'}\nService: ${formData.service}\nBudget: Rs.${budget}\nEst. Reach: ${estimatedReach}\nEst. Leads: ${estimatedLeads}`;
                          window.location.href = `https://api.whatsapp.com/send?phone=919361088012&text=${encodeURIComponent(message)}`;
                        }
                      }}
                      className="btn-primary w-full !py-3 flex items-center justify-center gap-2 cursor-pointer !rounded-2xl shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Claim Free Audit</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
  );
}
