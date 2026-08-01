"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CustomCursor from '@/components/CustomCursor';
import AuditCalculator from '@/components/AuditCalculator';

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleOpenAudit = () => {
    const el = document.getElementById('free-audit-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      <Navbar onOpenAudit={handleOpenAudit} />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenAudit={handleOpenAudit}
          onExploreServices={handleExploreServices}
        />

        {/* Stats Strip */}
        <StatsBar />

        {/* About Section */}
        <AboutSection />

        {/* Services Grid Section */}
        <ServicesSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Process Timeline Section */}
        <ProcessSection />

        {/* Industries Pill Grid Section */}
        <IndustriesSection onOpenAudit={handleOpenAudit} />

        {/* Testimonials Grid Section */}
        <TestimonialsSection />

        {/* Interactive Audit & Budget Calculator Section */}
        <AuditCalculator onOpenWhatsApp={() => {
          const msg = encodeURIComponent("Hello DhiGrowth! I would like to book a free consultation for my business.");
          window.open(`https://wa.me/919361088012?text=${msg}`, '_blank');
        }} />

        {/* Ready to Grow CTA Banner */}
        <CTABanner onOpenAudit={handleOpenAudit} />
      </main>

      {/* Footer */}
      <Footer onOpenAudit={handleOpenAudit} />

      {/* WhatsApp Quick chat floating widget */}
      <FloatingWhatsApp />

    </div>
  );
}
