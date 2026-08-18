"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AuditCalculator from '@/components/AuditCalculator';

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      
      <Navbar />

      <main className="subpage-padding-top">
        
        {/* Page Hero */}
        <section className="relative py-24 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-white overflow-hidden bg-dot-matrix border-b border-slate-200 dark:border-slate-800">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2196E8]/5 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-body text-xs font-bold tracking-widest block">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wider leading-none">
              Free Digital &amp; <span className="text-[#2196E8]">Roadmap Audit</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-body">
              Get a detailed technical breakdown of your website performance, SEO keyword rankings, and competitor advertising strategies.
            </p>
          </div>
        </section>

        {/* Audit Calculator & Form Block */}
        <div className="bg-white dark:bg-[#000000]">
          <AuditCalculator onOpenWhatsApp={(budget, reach, leads) => {
            const message = encodeURIComponent(`*Name:* (Audit Calculator Submission)\n*Budget:* ₹${budget.toLocaleString('en-IN')}\n*Est. Reach:* ${reach.toLocaleString('en-IN')}\n*Est. Leads:* ${leads}+/mo.`);
            window.location.href = `https://api.whatsapp.com/send?phone=919361088012&text=${message}`;
          }} />
        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
