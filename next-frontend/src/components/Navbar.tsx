"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadPopupModal from '@/components/LeadPopupModal';

interface NavbarProps {
  onOpenAudit?: () => void;
}

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const pathname = usePathname();
  
  // Set theme to always use light theme
  const theme = 'light';

  useEffect(() => {
    // Set layout attribute and class list to light
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Case Study', path: '/case-studies', hasDropdown: true },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const col1 = [
    { name: "Infragen Realtors", slug: "infragen" },
    { name: "NestPilot PG SaaS", slug: "nestpilot" },
    { name: "Ruts N Rides Operations", slug: "ruts-n-rides-admin" },
    { name: "Squirlio Snacks", slug: "squirlio" },
    { name: "Keystone Enterprise", slug: "keystone" },
    { name: "Thoorigai Events", slug: "thoorigai" },
    { name: "Splendour Park ERP", slug: "splendour-park", underConstruction: true },
    { name: "AI Chatbot Assistant", slug: "dhigrowth-ai-chatbot", underConstruction: true }
  ];

  const col2 = [
    { name: "Akirva Mobility", slug: "akirva" },
    { name: "Judah Food Logistics", slug: "judah" },
    { name: "VerdurePax Lifestyle", slug: "verdurepax" },
    { name: "Amaravathy Coir", slug: "amaravathy-coir" },
    { name: "Gigabull Luxury", slug: "gigabull" },
    { name: "Vasantabhavan", slug: "vasantabhavan" },
    { name: "Vectra Mechnovations", slug: "vectra-mechnovations", underConstruction: true },
    { name: "Fabric Defect AI", slug: "fabric-defect-detection", underConstruction: true },
    { name: "AI Invoice Processing", slug: "ai-invoice-processing", underConstruction: true }
  ];

  const col3 = [
    { name: "Clean Culture", slug: "clean-culture" },
    { name: "Ruts N Rides", slug: "ruts-n-rides" },
    { name: "Befhue Creative Agency", slug: "befhue" },
    { name: "Sanika's Cuisine", slug: "sanikas-restaurant" },
    { name: "Startten Platform", slug: "startten" },
    { name: "Infinite Structure", slug: "infinite-structure" },
    { name: "Biscuit Defect AI", slug: "bad-biscuit-detection", underConstruction: true },
    { name: "Sales CRM App", slug: "sales-app", underConstruction: true }
  ];

  const handleApplyClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      setIsLeadModalOpen(true);
    }
  };

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // On mobile view, keep the navbar sticky with a solid/frosted white backdrop so it never hides or clashes with page content.
  // On desktop, keep transparent hero padding when unscrolled, and frosted backdrop when scrolled.
  const headerBgClass = scrolled 
    ? 'backdrop-blur-md bg-white/95 border-b border-slate-200 py-3 shadow-sm' 
    : 'backdrop-blur-md bg-white/95 border-b border-slate-200/80 py-3 shadow-sm md:bg-transparent md:border-transparent md:shadow-none md:py-6';

  const navLinkTextClass = (isActive: boolean) => {
    if (isActive) return 'text-[#2196E8]';
    return 'text-slate-700 hover:text-black';
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick('/')} className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="DhiGrowth Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02] dark:brightness-110"
          />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-body text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));

            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link 
                    href={link.path} 
                    onClick={handleLinkClick(link.path)}
                    className={`flex items-center gap-1.5 transition-colors py-2 ${navLinkTextClass(isActive)}`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#2196E8]' : ''}`} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-[-300px] top-[100%] mt-3 w-[880px] bg-white text-slate-900 border border-slate-150 rounded-[28px] shadow-2xl p-8 z-50"
                      >
                        {/* Header */}
                        <div className="flex justify-between items-center">
                          <div className="space-y-1 text-left">
                            <h4 className="text-lg text-slate-900 font-extrabold font-body">
                              Case studies &amp; success stories
                            </h4>
                            <p className="text-[#2196E8] text-xs font-semibold font-body">
                              Explore digital transformations and apps built by DhiGrowth
                            </p>
                          </div>
                          
                          {/* Badge */}
                          <Link 
                            href="/case-studies"
                            onClick={() => setDropdownOpen(false)}
                            className="border border-[#2196E8]/20 bg-[#2196E8]/5 hover:bg-[#2196E8]/10 text-[#2196E8] px-3.5 py-1 rounded-full text-xs font-bold font-body transition-colors"
                          >
                            {col1.length + col2.length + col3.length} Projects
                          </Link>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-slate-100 my-4" />

                        {/* Grid */}
                        <div className="grid grid-cols-3 gap-x-8 gap-y-3.5 text-left pt-2">
                          {/* Column 1 */}
                          <div className="space-y-2.5">
                            {col1.map((project, idx) => (
                              <Link
                                key={idx}
                                href={`/case-studies/${project.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="text-slate-800 hover:text-[#2196E8] text-[13.5px] font-medium transition-colors duration-200 py-1 flex items-center justify-between gap-2 font-body group"
                              >
                                <span className="truncate">{project.name}</span>
                                {project.underConstruction && (
                                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-300/80 px-1.5 py-0.5 rounded shrink-0">
                                    Under Construction
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>

                          {/* Column 2 */}
                          <div className="space-y-2.5">
                            {col2.map((project, idx) => (
                              <Link
                                key={idx}
                                href={`/case-studies/${project.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="text-slate-800 hover:text-[#2196E8] text-[13.5px] font-medium transition-colors duration-200 py-1 flex items-center justify-between gap-2 font-body group"
                              >
                                <span className="truncate">{project.name}</span>
                                {project.underConstruction && (
                                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-300/80 px-1.5 py-0.5 rounded shrink-0">
                                    Under Construction
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>

                          {/* Column 3 */}
                          <div className="space-y-2.5">
                            {col3.map((project, idx) => (
                              <Link
                                key={idx}
                                href={`/case-studies/${project.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="text-slate-800 hover:text-[#2196E8] text-[13.5px] font-medium transition-colors duration-200 py-1 flex items-center justify-between gap-2 font-body group"
                              >
                                <span className="truncate">{project.name}</span>
                                {project.underConstruction && (
                                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-300/80 px-1.5 py-0.5 rounded shrink-0">
                                    Under Construction
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link 
                key={link.name} 
                href={link.path} 
                onClick={handleLinkClick(link.path)}
                className={`transition-colors ${navLinkTextClass(isActive)}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Theme toggle removed) */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleApplyClick}
            className="btn-primary !py-3 !px-6 !text-sm text-white font-bold rounded-2xl hover:bg-brand-bright transition-all shadow-md hover:shadow-lg capitalize tracking-wider font-body bg-[#4A72EB] cursor-pointer"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-900 hover:text-[#2196E8] hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn absolute left-0 right-0 top-[100%] shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4 font-body">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="space-y-2">
                    <button 
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="text-base font-semibold text-slate-600 hover:text-black transition-colors flex items-center justify-between w-full cursor-pointer"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${mobileDropdownOpen ? 'rotate-180 text-[#2196E8]' : ''}`} />
                    </button>
                    
                    {mobileDropdownOpen && (
                      <div className="pl-4 border-l-2 border-slate-100 space-y-2.5 pt-1 animate-fadeIn">
                        <Link 
                          href="/case-studies" 
                          onClick={(e) => {
                            setMobileMenuOpen(false);
                            handleLinkClick('/case-studies')(e);
                          }}
                          className="text-sm font-bold text-[#2196E8] hover:underline block py-1"
                        >
                          View All {col1.length + col2.length + col3.length} Projects →
                        </Link>
                        
                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 pr-2">
                          {[...col1, ...col2, ...col3].map((p, idx) => (
                            <Link
                              key={idx}
                              href={`/case-studies/${p.slug}`}
                              onClick={(e) => {
                                setMobileMenuOpen(false);
                                handleLinkClick(`/case-studies/${p.slug}`)(e);
                              }}
                              className="hover:text-[#2196E8] py-1 block truncate font-medium"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(link.path)(e);
                  }}
                  className="text-base font-semibold text-slate-600 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-slate-200">
            <button 
              onClick={() => { setMobileMenuOpen(false); handleApplyClick(); }}
              className="btn-primary w-full text-center py-3 capitalize tracking-wider text-sm font-bold font-body rounded-2xl cursor-pointer"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>

    {/* Lead Consultation Modal when clicking 'Book a Call' */}
    <LeadPopupModal 
      isOpen={isLeadModalOpen} 
      onClose={() => setIsLeadModalOpen(false)} 
    />
    </>
  );
}
