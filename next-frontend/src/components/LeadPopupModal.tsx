"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

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
      // Optional background notification
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'AI & Digital Audit Consultation',
          message: formData.message || 'Requested proposal from Lead Popup Modal.'
        })
      }).catch((err) => console.warn('Background sync note:', err));

      setIsSubmitting(false);
      setIsSuccess(true);

      const msg = encodeURIComponent(`Hi DhiGrowth! I want to request a proposal.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message || 'I would like to discuss a project.'}`);
      
      // Direct WhatsApp Redirection
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=919361088012&text=${msg}`, '_blank');
      }, 800);

    } catch (err: any) {
      console.error('Lead submission failed:', err);
      setIsSubmitting(false);
      setIsSuccess(true);
      const msg = encodeURIComponent(`Hi DhiGrowth! I want to request a proposal.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message || 'I would like to discuss a project.'}`);
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=919361088012&text=${msg}`, '_blank');
      }, 500);
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
          className="relative w-full max-w-lg bg-white dark:bg-[#0d111c] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10 my-auto p-6 sm:p-8 font-body text-left"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="my-auto text-center space-y-4 py-8 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-header text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Proposal Request Received!
              </h4>
              <p className="text-slate-600 dark:text-slate-350 text-sm max-w-md mx-auto leading-relaxed">
                Redirecting to WhatsApp for instant confirmation and consultation...
              </p>
              <button
                onClick={onClose}
                className="btn-primary !py-2.5 !px-6 text-xs !rounded-xl mt-4 cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/30 text-[#2196E8] text-[11px] font-bold tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Consultation</span>
                </div>
                <h3 className="font-header text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-wide leading-tight">
                  We'll craft an intelligent proposal.
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  Tell us what you need and we will shape an AI-powered estimate around your project.
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
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white font-bold text-sm tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 font-body"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Connecting to WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
