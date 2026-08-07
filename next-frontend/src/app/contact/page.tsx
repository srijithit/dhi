"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AuditCalculator from '@/components/AuditCalculator';
import { MapPin, Mail, Phone, Clock, Sparkles } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ContactPage() {
  const [isApplyMode, setIsApplyMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('apply') === 'true') {
        setIsApplyMode(true);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      
      <Navbar />

      <main className="subpage-padding-top">
        
        {/* Page Hero */}
        <section className="relative py-24 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-white overflow-hidden bg-dot-matrix border-b border-slate-200 dark:border-slate-800">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2196E8]/5 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-body text-xs font-semibold uppercase tracking-widest block">
              Get in Touch
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wider uppercase leading-none">
              CONTACT &amp; <span className="text-[#2196E8]">CONSULTATION</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-body">
              Have a project in mind, want a digital performance audit, or looking to join the DhiGrowth team? Connect with us today.
            </p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-24 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-5xl mx-auto space-y-10">
              
              {isApplyMode && (
                <div className="p-6 mb-6 rounded-2xl bg-[#2196E8]/10 border border-[#2196E8]/20 text-[#2196E8] text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 shrink-0" />
                  <span>Recruitment Notice: Email your resume to dhinesh@dhigrowth.com with the subject line 'Application: [Job Title]'.</span>
                </div>
              )}

              {/* Details Column */}
              <div className="space-y-10">
                
                <div className="space-y-4 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/20 text-[#2196E8] text-xs font-bold uppercase tracking-wider font-body">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Office Location</span>
                  </div>
                  <h2 className="font-header text-4xl sm:text-5xl uppercase tracking-wider text-slate-900 dark:text-white leading-none">
                    DhiGrowth Coimbatore
                  </h2>
                  <p className="text-slate-600 dark:text-slate-355 text-sm leading-relaxed max-w-md mx-auto font-body">
                    Visit our office or get in touch for custom website designs, AI automations, and search result domination campaigns.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body">
                  <a 
                    href="https://www.google.com/maps/place/Dhigrowth+Business+Pvt+Ltd/@11.0485934,77.0421634,19z/data=!3m1!4b1!4m6!3m5!1s0x3ba85700608f4393:0x7a612ef883b16359!8m2!3d11.0485934!4d77.0428071!16s%2Fg%2F11njtdfg3_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#0d111c] border border-slate-205 dark:border-slate-800 shadow-sm hover:border-[#2196E8] transition-colors group"
                  >
                    <MapPin className="w-6 h-6 text-[#2196E8] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-[#2196E8] transition-colors">Office Address</h4>
                      <p className="text-slate-600 dark:text-slate-350 text-sm mt-1 leading-relaxed">
                        Door No. 119, First Floor, Kovai Thirunagar, Kalapatti Main Road, Nehru Nagar West, Coimbatore, Tamil Nadu
                      </p>
                      <span className="text-xs text-[#2196E8] font-bold mt-2 inline-block">Get Directions on Google Maps →</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#0d111c] border border-slate-205 dark:border-slate-800 shadow-sm">
                    <Mail className="w-6 h-6 text-[#2196E8] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">General Inquiries</h4>
                      <p className="text-slate-600 dark:text-slate-350 text-sm mt-1">
                        dhinesh@dhigrowth.com
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://api.whatsapp.com/send?phone=919361088012&text=Hi%20DhiGrowth%2C%20I%20want%20to%20grow%20my%20business%20in%20India%21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#0d111c] border border-slate-205 dark:border-slate-800 shadow-sm hover:border-[#2196E8] transition-colors group"
                  >
                    <Phone className="w-6 h-6 text-[#2196E8] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-[#2196E8] transition-colors">Call / WhatsApp</h4>
                      <p className="text-slate-600 dark:text-slate-350 text-sm mt-1">
                        +91 93610 88012
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#0d111c] border border-slate-205 dark:border-slate-800 shadow-sm">
                    <Clock className="w-6 h-6 text-[#2196E8] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Working Hours</h4>
                      <p className="text-slate-600 dark:text-slate-350 text-sm mt-1">
                        Monday - Saturday: 9:30 AM - 6:30 PM
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
