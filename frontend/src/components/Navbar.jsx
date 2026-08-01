import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, ArrowRight, Zap } from 'lucide-react';

export default function Navbar({ onOpenAudit, onOpenServiceModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#05070c]/90 backdrop-blur-xl border-b border-[#a9c0f5]/15 py-3 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching design guide */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2196E8] to-[#4A72EB] flex items-center justify-center text-white font-bold shadow-lg shadow-[#2196E8]/30 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-header text-2xl sm:text-3xl tracking-wider text-white leading-none">
              DHI<span className="text-[#2196E8]">GROWTH</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-[#a9c0f5]/70 tracking-widest leading-none mt-1">
              Coimbatore Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-[#2196E8] transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-[#2196E8] transition-colors">About Us</a>
          <a href="#why-us" className="text-sm font-medium text-slate-300 hover:text-[#2196E8] transition-colors">Why Choose Us</a>
          <a href="#process" className="text-sm font-medium text-slate-300 hover:text-[#2196E8] transition-colors">Process</a>
          <a href="#industries" className="text-sm font-medium text-slate-300 hover:text-[#2196E8] transition-colors">Industries</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-[#2196E8] transition-colors">Testimonials</a>
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={onOpenAudit}
            className="btn-secondary !py-2.5 !px-5 !text-sm flex items-center gap-2 border-[#a9c0f5]/30 hover:border-[#2196E8]"
          >
            Apply To Join
          </button>
          <button 
            onClick={onOpenAudit}
            className="btn-primary !py-2.5 !px-5 !text-sm flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Get Free Consultation</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d16] border-b border-[#a9c0f5]/20 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#2196E8]"
            >
              Services (13+)
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#2196E8]"
            >
              About Us
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#2196E8]"
            >
              Why Choose Us
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#2196E8]"
            >
              Our 4-Step Process
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#2196E8]"
            >
              Client Reviews
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAudit(); }}
              className="btn-primary w-full text-center"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
