"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenAudit?: () => void;
}

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { name: 'Case Studies', path: '/#testimonials' },
    { name: 'Careers', path: '/contact' },
  ];

  const handleApplyClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      const el = document.getElementById('free-audit-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/contact?apply=true';
      }
    }
  };

  // Home page hero is light, so when not scrolled on Home page, nav text must be dark.
  // Subpages (About, Services, Contact) still have dark heroes, so when not scrolled on those pages, nav text is white.
  const isHome = pathname === '/';
  const isTransparentHero = !scrolled && (pathname === '/' || pathname === '/about' || pathname.startsWith('/services') || pathname === '/contact');
  const isLightHeroBackground = !scrolled && isHome;

  const headerBgClass = scrolled 
    ? 'backdrop-blur-md bg-white/80 border-b border-slate-200 py-3 shadow-sm' 
    : 'bg-transparent py-6';

  const logoTextClass = isLightHeroBackground 
    ? 'text-slate-900' 
    : isTransparentHero 
      ? 'text-white' 
      : 'text-slate-900';

  const navLinkTextClass = (isActive: boolean) => {
    if (isActive) return 'text-[#2196E8]';
    return isLightHeroBackground
      ? 'text-slate-600 hover:text-black'
      : isTransparentHero 
        ? 'text-slate-300 hover:text-white' 
        : 'text-slate-600 hover:text-black';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-10 h-10 group-hover:scale-105 transition-transform shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-gradient-nav" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2196E8" />
                <stop offset="100%" stopColor="#4A72EB" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#logo-gradient-nav)" />
            {/* Curved arrow wrapping right side */}
            <path d="M 20,85 A 38,38 0 0,0 83,48 L 88,52 L 86,37 L 72,41 L 76,45 A 33,33 0 0,1 23,80 Z" fill="#00E5FF" />
            {/* Stylized person / arrow symbol */}
            <circle cx="43" cy="35" r="7.5" fill="#00E5FF" />
            <path d="M 18,52 L 67,37 L 40,54 Z" fill="#FFFFFF" />
            <path d="M 40,54 L 67,37 L 40,75 Z" fill="#00B2FE" />
            <path d="M 40,54 L 40,75 L 29,61 Z" fill="#0080C5" />
          </svg>
          <div className="flex flex-col leading-[0.85] font-header text-left">
            <span className="text-lg tracking-wider text-[#2196E8] uppercase font-bold">DHI</span>
            <span className="text-2xl tracking-widest text-[#4A72EB] uppercase font-bold flex items-center">
              GROWTH
              <span className="text-[10px] ml-0.5 font-sans align-top relative -top-1.5">®</span>
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-semibold">
          {navLinks.map((link) => {
            const isLinkHome = link.path === '/';
            const isActive = isLinkHome ? pathname === '/' : pathname === link.path;

            return (
              <Link 
                key={link.name} 
                href={link.path} 
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
            className="btn-primary !py-2.5 !px-5 !text-sm text-white font-bold rounded-lg hover:bg-brand-bright transition-colors uppercase tracking-wider font-body bg-[#4A72EB]"
          >
            Apply to Join
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 hover:text-[#2196E8] transition-colors ${
              isLightHeroBackground ? 'text-slate-900' : isTransparentHero ? 'text-white' : 'text-slate-900'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn absolute left-0 right-0 top-[100%] shadow-lg">
          <nav className="flex flex-col space-y-4 font-body">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-600 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-200">
            <button 
              onClick={() => { setMobileMenuOpen(false); handleApplyClick(); }}
              className="btn-primary w-full text-center py-3 uppercase tracking-wider text-sm font-semibold font-body"
            >
              Apply to Join
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
