import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ServiceModal from './components/ServiceModal';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AuditCalculator from './components/AuditCalculator';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenAudit = () => {
    const el = document.getElementById('free-audit-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello DhiGrowth! I would like to book a free consultation for my business.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-[#2196E8] selection:text-white font-sans">
      
      {/* Top Fixed Header Navbar */}
      <Navbar 
        onOpenAudit={handleOpenAudit}
        onOpenServiceModal={(service) => setSelectedService(service)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero 
          onOpenAudit={handleOpenAudit}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: About / Value Proposition */}
        <AboutSection />

        {/* Section 3: Services (13 Cards) */}
        <ServicesSection 
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 5: Process / How We Work */}
        <ProcessSection />

        {/* Section 6: Industries We Serve */}
        <IndustriesSection 
          onOpenAudit={handleOpenAudit}
        />

        {/* Section 7: Client Testimonials */}
        <TestimonialsSection />

        {/* Section 8: CTA / Audit Calculator Form Banner */}
        <AuditCalculator 
          onOpenWhatsApp={handleWhatsAppClick}
        />
      </main>

      {/* Footer */}
      <Footer 
        onSelectService={(service) => setSelectedService(service)}
        onOpenAudit={handleOpenAudit}
      />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Deep-Dive Service Details Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenAudit={handleOpenAudit}
        />
      )}

    </div>
  );
}
