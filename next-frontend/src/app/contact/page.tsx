"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import EmailModal from '@/components/EmailModal';
import { 
  MapPin, Mail, Phone, Clock, Sparkles, Send, 
  CheckCircle2, ArrowRight, Loader2, FileText, Building2, MessageSquare 
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToGoogleSheets } from '@/utils/googleSheets';

export default function ContactPage() {
  const [isApplyMode, setIsApplyMode] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: SERVICES_DATA[0].name,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('apply') === 'true') {
        setIsApplyMode(true);
      }
      const serviceParam = params.get('service');
      if (serviceParam) {
        const found = SERVICES_DATA.find(s => s.id === serviceParam || s.name.toLowerCase() === serviceParam.toLowerCase());
        if (found) {
          setFormData(prev => ({ ...prev, service: found.name }));
        }
      }
    }
  }, []);

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

  const handleCompanyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && (!formData.company || formData.company.length === 0 || formData.company.endsWith(' '))) {
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
    if (errorMsg) setErrorMsg(null);
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
    if (errorMsg) setErrorMsg(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\s+/g, '');
    setFormData(prev => ({ ...prev, email: val }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/^\s+/, '').replace(/\s{2,}/g, ' ');
    setFormData(prev => ({ ...prev, company: val }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value.replace(/^\s+/, '');
    setFormData(prev => ({ ...prev, message: val }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedCompany = formData.company.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Please enter a valid Name (minimum 2 letters, characters only).');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
      setErrorMsg('Name must only contain character strings.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone || digitsOnly.length < 10) {
      setErrorMsg('Please enter a valid WhatsApp Number (minimum 10 integer digits, numbers only).');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid Email Address (no spaces).');
      return;
    }

    if (!trimmedCompany) {
      setErrorMsg('Company / Business Name cannot be empty or just spaces.');
      return;
    }

    if (!trimmedMessage) {
      setErrorMsg('Goals / Requirements cannot be empty or just spaces.');
      return;
    }

    setIsSubmitting(true);

    const msg = encodeURIComponent(
      `Hi DhiGrowth! I want to submit a project consultation inquiry.\nName: ${trimmedName}\nPhone: ${trimmedPhone}\nEmail: ${trimmedEmail}\nCompany: ${trimmedCompany}\nService: ${formData.service}\nGoals: ${trimmedMessage}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919361088012&text=${msg}`;
    setSubmittedWhatsappUrl(whatsappUrl);

    try {
      const leadPayload = {
        name: trimmedName,
        phone: trimmedPhone,
        email: trimmedEmail,
        company: trimmedCompany,
        service: formData.service,
        message: trimmedMessage,
      };

      await Promise.allSettled([
        submitToGoogleSheets(leadPayload),
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload),
        }),
      ]);

      setIsSuccess(true);

      setTimeout(() => {
        const win = window.open(whatsappUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      }, 700);
    } catch (err: any) {
      console.error('Contact inquiry error:', err);
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 500);
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
      service: SERVICES_DATA[0].name,
      message: ''
    });
    setSubmittedWhatsappUrl('');
    setIsSuccess(false);
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      
      <Navbar />

      <main className="subpage-padding-top">
        
        {/* Page Hero */}
        <section className="relative py-20 sm:py-24 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-white overflow-hidden bg-dot-matrix border-b border-slate-200 dark:border-slate-800">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2196E8]/5 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-4">
            <span className="text-[#2196E8] font-body text-xs font-bold tracking-widest block">
              Get in Touch
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wider leading-none">
              Contact &amp; <span className="text-[#2196E8]">Consultation</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-body">
              Have a project in mind, want a digital performance audit, or looking to scale with AI? Fill out the consultation form below or connect with our Coimbatore team directly.
            </p>
          </div>
        </section>

        {/* Form & Office Information Section */}
        <section className="py-16 sm:py-24 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {isApplyMode && (
              <div className="p-6 mb-10 rounded-2xl bg-[#2196E8]/10 border border-[#2196E8]/20 text-[#2196E8] text-sm font-semibold flex items-center gap-2 max-w-5xl mx-auto">
                <Sparkles className="w-5 h-5 shrink-0" />
                <span>Recruitment Notice: Email your resume to dinesh@dhigrowth.com with the subject line 'Application: [Job Title]'.</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Column: Interactive Form */}
              <div className="lg:col-span-7">
                <div className="bg-slate-50/70 dark:bg-[#0c101c] rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl p-6 sm:p-10 font-body transition-all">
                  
                  <div className="space-y-2 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-[#2196E8] text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Project Consultation Request</span>
                    </div>
                    <h2 className="font-header text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      Send Us Your Requirements
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                      Submit your project goals and our growth team will get back to you with a tailored roadmap within 24 hours.
                    </p>
                  </div>

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
                          Thank you for reaching out for <strong className="text-[#2196E8]">{formData.service}</strong>. Redirecting you to WhatsApp for instant confirmation...
                        </p>

                        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                          {submittedWhatsappUrl && (
                            <a
                              href={submittedWhatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2 shadow-md"
                            >
                              <MessageSquare className="w-4 h-4" />
                              <span>Open WhatsApp Directly</span>
                            </a>
                          )}
                          <button
                            onClick={handleReset}
                            className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs tracking-wider transition-colors cursor-pointer"
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
                          <input
                            type="text"
                            required
                            placeholder="e.g. Anand Kumar"
                            value={formData.name}
                            onKeyDown={handleNameKeyDown}
                            onChange={handleNameChange}
                            className="w-full px-4 py-3 bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors shadow-sm"
                          />
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
                              onKeyDown={handlePhoneKeyDown}
                              onChange={handlePhoneChange}
                              className="w-full px-4 py-3 bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors shadow-sm"
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
                              onKeyDown={handleEmailKeyDown}
                              onChange={handleEmailChange}
                              className="w-full px-4 py-3 bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors shadow-sm"
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
                            onKeyDown={handleCompanyKeyDown}
                            onChange={handleCompanyChange}
                            className="w-full px-4 py-3 bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors shadow-sm"
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
                              className="w-full px-4 py-3 bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white appearance-none cursor-pointer transition-colors shadow-sm"
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
                            onKeyDown={handleMessageKeyDown}
                            onChange={handleMessageChange}
                            className="w-full px-4 py-3 bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none transition-colors shadow-sm"
                          />
                        </div>

                        {errorMsg && (
                          <p className="text-xs text-rose-500 font-semibold">{errorMsg}</p>
                        )}

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white font-bold text-sm tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Connecting to WhatsApp...</span>
                              </>
                            ) : (
                              <>
                                <span>Submit &amp; Chat on WhatsApp</span>
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

              {/* Right Column: Office Location & Contact Details */}
              <div className="lg:col-span-5 space-y-5 font-body">
                
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/20 text-[#2196E8] text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Headquarters</span>
                  </div>
                  <h3 className="font-header text-2xl font-bold text-slate-900 dark:text-white">
                    DhiGrowth Coimbatore
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Visit our office for in-person product consulting, software architecture reviews, or performance marketing strategies.
                  </p>
                </div>

                <a 
                  href="https://www.google.com/maps/place/Dhigrowth+Business+Pvt+Ltd/@11.0485934,77.0421634,19z/data=!3m1!4b1!4m6!3m5!1s0x3ba85700608f4393:0x7a612ef883b16359!8m2!3d11.0485934!4d77.0428071!16s%2Fg%2F11njtdfg3_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#2196E8] transition-colors group"
                >
                  <MapPin className="w-6 h-6 text-[#2196E8] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-[#2196E8] transition-colors">Office Address</h4>
                    <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm mt-1 leading-relaxed">
                      Door No. 119, First Floor, Kovai Thirunagar, Kalapatti Main Road, Nehru Nagar West, Coimbatore, Tamil Nadu
                    </p>
                    <span className="text-xs text-[#2196E8] font-bold mt-2 inline-block">Get Directions on Google Maps →</span>
                  </div>
                </a>

                <a 
                  href="https://api.whatsapp.com/send?phone=919361088012&text=Hi%20DhiGrowth%2C%20I%20want%20to%20grow%20my%20business%20in%20India%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#2196E8] transition-colors group"
                >
                  <Phone className="w-6 h-6 text-[#2196E8] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-[#2196E8] transition-colors">Call / WhatsApp</h4>
                    <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm mt-1">
                      +91 93610 88012
                    </p>
                  </div>
                </a>

                <button 
                  onClick={() => setIsEmailModalOpen(true)}
                  className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#2196E8] transition-colors group text-left cursor-pointer w-full"
                >
                  <Mail className="w-6 h-6 text-[#2196E8] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-[#2196E8] transition-colors">Direct Email</h4>
                    <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm mt-1 group-hover:underline">
                      dinesh@dhigrowth.com — Click to Send Email →
                    </p>
                  </div>
                </button>

                <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-sm">
                  <Clock className="w-6 h-6 text-[#2196E8] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Working Hours</h4>
                    <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm mt-1">
                      Monday - Saturday: 9:30 AM - 6:30 PM
                    </p>
                  </div>
                </div>

                <a 
                  href="https://www.linkedin.com/company/dhigrowth/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#2196E8] transition-colors group"
                >
                  <div className="w-6 h-6 text-[#2196E8] shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 0 0 1.3-1.37A1.32 1.32 0 0 0 6.5 5.6a1.37 1.37 0 0 0-1.3 1.37A1.32 1.32 0 0 0 6.5 8.37m1.4 10.13V10.13h-2.8v8.37h2.8z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-[#2196E8] transition-colors">Official LinkedIn</h4>
                    <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm mt-1">
                      Follow DhiGrowth on LinkedIn for company updates →
                    </p>
                  </div>
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}

