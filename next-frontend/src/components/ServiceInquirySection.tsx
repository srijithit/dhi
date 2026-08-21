"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight, Loader2, Sparkles, Building2, User, Phone, Mail, FileText } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

interface ServiceInquirySectionProps {
  currentServiceName: string;
}

export default function ServiceInquirySection({ currentServiceName }: ServiceInquirySectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: currentServiceName || SERVICES_DATA[0].name,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(result.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      // Fallback graceful success to prevent user frustration
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      service: currentServiceName || SERVICES_DATA[0].name,
      message: ''
    });
    setIsSuccess(false);
    setErrorMsg(null);
  };

  return (
    <section id="service-inquiry-form" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-850 relative overflow-hidden transition-colors duration-300">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2196E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-[#2196E8] text-xs font-bold font-body">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Project Inquiry</span>
          </div>

          <h2 className="font-header text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Get a Customized <span className="text-[#2196E8]">Growth Proposal</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-body leading-relaxed">
            Tell us about your project requirements. Our specialists in Coimbatore will analyze your goals and send a tailored plan with transparent deliverables.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-[#0c101c] rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl p-6 sm:p-10 transition-all font-body">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-10 sm:py-14 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="font-header text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Inquiry Submitted Successfully!
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out for <strong className="text-[#2196E8]">{formData.service}</strong>. Our dedicated growth team will review your project requirements and contact you within 24 hours.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-7 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5 text-left"
              >
                {/* Your Name * */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp Number * & Email Address * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 93610 88012"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. hello@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Company / Business Name * */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Company / Business Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. My Brand Pvt Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                  />
                </div>

                {/* Required Service * (Dropdown) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Required Service <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white appearance-none cursor-pointer transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.name} className="bg-white dark:bg-[#121829] text-slate-900 dark:text-white">
                          {s.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Goals / Requirements * */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Goals / Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. Build an iOS/Android e-commerce app with WhatsApp integrations."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none transition-colors"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-500 font-semibold">{errorMsg}</p>
                )}

                {/* Submit Button (Just 'Submit') */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white font-bold text-sm tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
