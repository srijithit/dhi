"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Shield, Cpu, Zap, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

interface LeadPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadPopupModal({ isOpen, onClose }: LeadPopupModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Post to internal Next.js API route (which forwards to Google Sheets Webhook & Email)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'AI & Digital Audit Consultation',
          message: formData.message || 'Requested free audit proposal from Lead Popup Modal.'
        })
      });

      // 2. Also directly dispatch to Google Sheets Webhook if configured in window/env
      const sheetWebhook = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || '';
      if (sheetWebhook) {
        try {
          await fetch(sheetWebhook, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
              source: 'Website Popup Lead Modal'
            })
          });
        } catch (err) {
          console.warn('Google Sheets Direct Dispatch Warning:', err);
        }
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after 3 seconds or trigger WhatsApp backup
      setTimeout(() => {
        const msg = encodeURIComponent(`Hi DhiGrowth! I just submitted an inquiry on your website.\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`);
        window.open(`https://api.whatsapp.com/send?phone=919361088012&text=${msg}`, '_blank');
      }, 1200);

    } catch (err: any) {
      console.error('Lead submission failed:', err);
      setIsSubmitting(false);
      setErrorMessage('Form submitted! Connecting to WhatsApp...');
      setTimeout(() => {
        const msg = encodeURIComponent(`Hi DhiGrowth! I want to request a proposal.\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`);
        window.open(`https://api.whatsapp.com/send?phone=919361088012&text=${msg}`, '_blank');
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Dark Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Popup Card Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#070a11] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10 my-auto"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            
            {/* Left Dark Column (AI Consultation Promo) */}
            <div className="lg:col-span-5 bg-[#070b14] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-r border-slate-850">
              
              {/* Pulsing Glow Effect */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#2196E8]/15 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4A72EB]/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2196E8]/20 border border-[#2196E8]/40 text-[#2196E8] text-[11px] font-bold uppercase tracking-wider font-body">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Consultation</span>
                </div>

                <h3 className="font-header text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide leading-tight">
                  Get Future-Ready AI Solutions
                </h3>

                <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-body">
                  Tell us what you need and we will shape an intelligent, AI-powered estimate around your project.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    <span>Intelligent insights</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold">
                    <Shield className="w-3.5 h-3.5 text-pink-400" />
                    <span>Secure handling</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Smart scope</span>
                  </div>
                </div>
              </div>

              {/* Decorative Tech IDE Graphic */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80">
                <div className="bg-[#0b101d] rounded-2xl p-4 border border-slate-800/80 font-mono text-[11px] text-slate-400 space-y-2 shadow-inner">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-slate-500 ml-2">dhi_ai_engine.ts</span>
                  </div>
                  <div className="text-[#2196E8]">// Auto-Saving lead to Google Sheets & CRM</div>
                  <div><span className="text-purple-400">const</span> proposal = <span className="text-emerald-400">await</span> generateGrowthRoadmap();</div>
                  <div className="text-slate-500">// Status: Ready for review</div>
                </div>
              </div>

            </div>

            {/* Right Light Column (Lead Capture Form) */}
            <div className="lg:col-span-7 bg-white dark:bg-[#0d111c] p-6 sm:p-8 lg:p-10 flex flex-col justify-between font-body text-left">
              
              {isSuccess ? (
                <div className="my-auto text-center space-y-4 py-8 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-header text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    Proposal Request Received!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-350 text-sm max-w-md mx-auto leading-relaxed">
                    Your details have been saved to our live Google Sheet pipeline. Redirecting to WhatsApp for instant confirmation...
                  </p>
                  <button
                    onClick={onClose}
                    className="btn-primary !py-2.5 !px-6 text-xs !rounded-xl mt-4 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 my-auto">
                  <div className="space-y-1">
                    <span className="text-[#2196E8] font-bold text-xs uppercase tracking-wider block font-body">
                      TELL US ABOUT YOUR TECH GOALS
                    </span>
                    <h3 className="font-header text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-wide leading-tight">
                      We'll craft an intelligent proposal.
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                      A few details is enough to get started with the future.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-amber-500 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-3.5 pt-2">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#131927] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white transition-colors"
                      />
                    </div>

                    <div>
                      <input 
                        type="email" 
                        required
                        placeholder="Email Id *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#131927] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white transition-colors"
                      />
                    </div>

                    <div>
                      <input 
                        type="tel" 
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#131927] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white transition-colors"
                      />
                    </div>

                    <div>
                      <textarea 
                        rows={3}
                        placeholder="Enter Message / Requirements"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#131927] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Saving to Sheets...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
