"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { submitToGoogleSheets } from '@/utils/googleSheets';

interface LeadPopupModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function LeadPopupModal({
  isOpen: controlledIsOpen,
  onClose
}: LeadPopupModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showModal = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    setInternalIsOpen(false);
    if (onClose) onClose();
  };

  if (!showModal) return null;

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

  const handleMessageKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === ' ' && (!formData.message || formData.message.length === 0)) {
      e.preventDefault();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    // Disallow leading spaces
    val = val.replace(/^\s+/, '');
    // Only accept character strings (letters, spaces between words, dots, hyphens, apostrophes)
    val = val.replace(/[^a-zA-Z\s.'-]/g, '');
    // Prevent double spaces
    val = val.replace(/\s{2,}/g, ' ');
    setFormData(prev => ({ ...prev, name: val }));
    if (errorMessage) setErrorMessage('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Disallow all spaces in email
    const val = e.target.value.replace(/\s+/g, '');
    setFormData(prev => ({ ...prev, email: val }));
    if (errorMessage) setErrorMessage('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\s+/g, '');
    // Only accept integer values (digits 0-9 and optional leading +)
    if (val.startsWith('+')) {
      val = '+' + val.slice(1).replace(/\D/g, '');
    } else {
      val = val.replace(/\D/g, '');
    }
    // Limit to max 16 digits
    if (val.length > 16) val = val.slice(0, 16);
    setFormData(prev => ({ ...prev, phone: val }));
    if (errorMessage) setErrorMessage('');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value.replace(/^\s+/, '');
    setFormData(prev => ({ ...prev, message: val }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    // 1. Name validation: must contain only characters and not be empty/spaces
    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage('Please enter a valid Name (minimum 2 letters, characters only).');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
      setErrorMessage('Name must only contain alphabetic character strings.');
      return;
    }

    // 2. Email validation: valid format, no spaces
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid Email Id (no spaces allowed).');
      return;
    }

    // 3. Phone validation: only integer digits, minimum 10 digits
    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone || digitsOnly.length < 10) {
      setErrorMessage('Please enter a valid Phone Number (minimum 10 integer digits, numbers only).');
      return;
    }

    // 4. Message validation: cannot be purely whitespace if entered
    if (formData.message && !trimmedMessage) {
      setErrorMessage('Message cannot consist solely of spaces.');
      return;
    }

    setIsSubmitting(true);

    const leadPayload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      company: 'N/A',
      service: 'AI & Digital Audit Consultation',
      message: trimmedMessage || 'Requested proposal from Lead Popup Modal.',
    };

    try {
      // Sync to Google Sheets and dispatch notification email in parallel
      await Promise.allSettled([
        submitToGoogleSheets(leadPayload),
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload),
        }),
      ]);

      setIsSubmitting(false);
      setIsSuccess(true);

      const msg = encodeURIComponent(`Hi DhiGrowth! I want to request a proposal.\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nPhone: ${trimmedPhone}\nMessage: ${trimmedMessage || 'I would like to discuss a project.'}`);
      
      // Direct WhatsApp Redirection
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=919361088012&text=${msg}`, '_blank');
      }, 800);

    } catch (err: any) {
      console.error('Lead submission failed:', err);
      setIsSubmitting(false);
      setIsSuccess(true);
      const msg = encodeURIComponent(`Hi DhiGrowth! I want to request a proposal.\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nPhone: ${trimmedPhone}\nMessage: ${trimmedMessage || 'I would like to discuss a project.'}`);
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
          onClick={handleClose}
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
            onClick={handleClose}
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
                onClick={handleClose}
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
                    onKeyDown={handleNameKeyDown}
                    onChange={handleNameChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#131927] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white transition-colors"
                  />
                </div>

                <div>
                  <input 
                    type="email" 
                    required
                    placeholder="Email Id *"
                    value={formData.email}
                    onKeyDown={handleEmailKeyDown}
                    onChange={handleEmailChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#131927] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white transition-colors"
                  />
                </div>

                <div>
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onKeyDown={handlePhoneKeyDown}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#131927] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white transition-colors"
                  />
                </div>

                <div>
                  <textarea 
                    rows={3}
                    placeholder="Enter Message / Requirements"
                    value={formData.message}
                    onKeyDown={handleMessageKeyDown}
                    onChange={handleMessageChange}
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
