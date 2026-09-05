"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitToGoogleSheets } from '@/utils/googleSheets';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function EmailModal({ isOpen, onClose, defaultService = '' }: EmailModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || 'Website Development',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && (!formData.name || formData.name.length === 0 || formData.name.endsWith(' '))) {
      e.preventDefault();
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    let val = e.target.value.replace(/^\s+/, '').replace(/[^a-zA-Z\s.'-]/g, '').replace(/\s{2,}/g, ' ');
    setFormData(prev => ({ ...prev, name: val }));
    if (errorMsg) setErrorMsg('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\s+/g, '');
    setFormData(prev => ({ ...prev, email: val }));
    if (errorMsg) setErrorMsg('');
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
    if (errorMsg) setErrorMsg('');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value.replace(/^\s+/, '');
    setFormData(prev => ({ ...prev, message: val }));
    if (errorMsg) setErrorMsg('');
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, service: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Please enter a valid Name (minimum 2 letters, characters only).');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
      setErrorMsg('Name must only contain character strings.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid Email Address (no spaces).');
      return;
    }

    if (trimmedPhone) {
      const digitsOnly = trimmedPhone.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        setErrorMsg('Please enter a valid Phone Number (minimum 10 integer digits, numbers only).');
        return;
      }
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      setErrorMsg('Message / Requirements cannot be empty or just spaces (minimum 5 characters).');
      return;
    }

    setLoading(true);

    try {
      const leadPayload = {
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
        company: 'N/A',
        service: formData.service,
        message: trimmedMessage,
      };

      // Direct client sync to Google Sheets
      submitToGoogleSheets(leadPayload).catch((err) => console.warn('Client sheet sync:', err));

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
          setFormData({ name: '', email: '', phone: '', service: 'Website Development', message: '' });
        }, 2500);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      // Fallback redirect via mailto with CC to team
      const mailtoUrl = `mailto:dhinesh@dhigrowth.com?cc=pranitha@dhigrowth.com,mathanraj@dhigrowth.com&subject=Inquiry%20from%20${encodeURIComponent(trimmedName)}&body=Name:%20${encodeURIComponent(trimmedName)}%0AEmail:%20${encodeURIComponent(trimmedEmail)}%0APhone:%20${encodeURIComponent(trimmedPhone)}%0AService:%20${encodeURIComponent(formData.service)}%0AMessage:%20${encodeURIComponent(trimmedMessage)}`;
      window.location.href = mailtoUrl;
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden font-body"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#2196E8]/10 border border-[#2196E8]/20 flex items-center justify-center text-[#2196E8]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-header text-2xl text-slate-900 dark:text-white capitalize">
                Send Email Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct to dinesh@dhigrowth.com
              </p>
            </div>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center space-y-3"
            >
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="font-header text-2xl text-slate-900 dark:text-white capitalize">
                Inquiry Sent Successfully!
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xs mx-auto">
                Thank you for reaching out. We will get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onKeyDown={handleNameKeyDown}
                  onChange={handleNameChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080b11] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#2196E8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onKeyDown={handleEmailKeyDown}
                    onChange={handleEmailChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080b11] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#2196E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onKeyDown={handlePhoneKeyDown}
                    onChange={handlePhoneChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080b11] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#2196E8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Required Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleServiceChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080b11] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#2196E8]"
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Application Development">Application Development</option>
                  <option value="AI Development & Automation">AI Development & Automation</option>
                  <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                  <option value="Performance Marketing (Ads)">Performance Marketing (Ads)</option>
                  <option value="Video Production">Video Production</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message / Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onKeyDown={handleMessageKeyDown}
                  onChange={handleMessageChange}
                  placeholder="Describe your project goals or custom requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080b11] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#2196E8] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#4A72EB] hover:bg-[#2196E8] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Mail...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Email Inquiry</span>
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <a
                  href={`mailto:dinesh@dhigrowth.com?subject=Direct%20Inquiry`}
                  className="text-xs text-slate-500 hover:text-[#2196E8] transition-colors underline"
                >
                  Or draft directly in your email app →
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
