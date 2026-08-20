"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import {
  ArrowLeft, ChevronLeft, ChevronRight,
  Volume2, VolumeX, Check,
  Zap, RefreshCw, MapPin, Clock, Layers,
  Tag, Heart, Warehouse, Receipt,
  Shield, Route, CalendarCheck, Coins, MessageSquare
} from 'lucide-react';

export default function CleanCulturePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [videoMuted, setVideoMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(p => (p + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  const highlights = [
    { icon: <Zap className="w-5 h-5" />, color: 'bg-emerald-500', label: 'Sub-second loading', desc: 'Sub-second page loading speed optimized for instant user browsing.' },
    { icon: <RefreshCw className="w-5 h-5" />, color: 'bg-[#2196E8]', label: 'Subscription engine', desc: 'Automated recurring subscription engine for daily doorstep deliveries.' },
  ];

  const appSections = [
    {
      num: '4.',
      title: 'Location management',
      desc: 'Geofenced delivery zone validation ensures products are delivered strictly from local fulfillment hubs with GPS pinpoint placement.',
      side: 'left',
      image: '/images/cc_location_management_mockup.png',
      tags: [
        { label: 'Google Places API', sub: 'Address search', bg: 'bg-slate-100 border-slate-200', text: 'text-slate-900', sub_text: 'text-slate-500' },
        { label: '1-Tap pinpoint', sub: 'GPS geo-location', bg: 'bg-rose-50 border-rose-100', text: 'text-rose-600', sub_text: 'text-slate-500' },
        { label: 'Pincode serviceable', sub: 'Hub check', bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-600', sub_text: 'text-slate-500' },
      ],
    },
    {
      num: '5.',
      title: 'Home screen',
      desc: 'Dynamic home feed featuring current delivery location, expected delivery ETA (e.g. Tomorrow 6:00 AM), smart search bar, product categories, and promotional banners.',
      side: 'right',
      image: '/images/cc_home_screen_mockup.png',
      chips: [
        { icon: <Clock className="w-4 h-4 text-sky-600" />, label: 'Live delivery ETA counter' },
        { icon: <Layers className="w-4 h-4 text-sky-600" />, label: 'Category shortcuts (coconut, milk, water)' },
      ],
    },
    {
      num: '6.',
      title: 'Product listing',
      desc: 'Clean product grids displaying high-resolution images, original vs discounted prices, instant "Add to Cart" stepper, and wishlist favoriting.',
      side: 'left',
      image: '/images/mockup_screen_3.png',
      chips: [
        { icon: <Tag className="w-4 h-4 text-teal-600" />, label: 'Percentage discount badges' },
        { icon: <Heart className="w-4 h-4 text-teal-600" />, label: 'Quick wishlist toggle' },
      ],
    },
    {
      num: '7.',
      title: 'Product detail',
      desc: 'Comprehensive product breakdown offering volume choices (500ml, 1L, 5L), subscription plans (daily, alternate days, weekly), expandable accordion specs, and recommended items.',
      side: 'right',
      image: '/images/mockup_screen_2.png',
      badges: [
        { label: 'Buy once', cls: 'bg-amber-100 text-amber-900' },
        { label: 'Subscribe & save 15%', cls: 'bg-emerald-600 text-white shadow-sm' },
      ],
    },
    {
      num: '8.',
      title: 'Cart',
      desc: 'Multi-warehouse item grouping, smooth item increment/decrement buttons, transparent price summary breakdown (Subtotal, Delivery, Tax), and one-tap checkout.',
      side: 'left',
      image: '/images/mockup_screen_1.png',
      chips: [
        { icon: <Warehouse className="w-4 h-4 text-purple-600" />, label: 'Multi-warehouse automated routing' },
        { icon: <Receipt className="w-4 h-4 text-purple-600" />, label: 'Detailed bill breakdown view' },
      ],
    },
    {
      num: '9.',
      title: 'Checkout',
      desc: 'Seamless address confirmation and payment selection supporting UPI Apps (GPay, PhonePe, Paytm), DhiGrowth Clean Culture Wallet balance, and Cash on Delivery (COD).',
      side: 'right',
      visual: (
        <div className="w-full bg-gradient-to-br from-blue-500/10 via-blue-100/40 to-slate-100/50 rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 rounded-2xl bg-[#2196E8] text-white flex items-center justify-center text-3xl mx-auto shadow-md">
            <Shield className="w-8 h-8" />
          </div>
          <span className="text-sm font-extrabold uppercase tracking-wider text-[#2196E8] block">Secure payment gateways</span>
          <div className="flex justify-center gap-2 pt-1">
            <span className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold">UPI</span>
            <span className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold">Wallet</span>
            <span className="px-3 py-1.5 bg-amber-600 text-white rounded-lg text-xs font-bold">COD</span>
          </div>
        </div>
      ),
      payBadges: ['UPI 1-tap', 'Clean Culture wallet', 'Cash on delivery'],
    },
    {
      num: '10.',
      title: 'Order management',
      desc: 'Real-time order tracking status pipeline with live steps: Order placed → Confirmed → Packed → Out for delivery → Delivered. Includes 1-click reorder button.',
      side: 'left',
      visual: (
        <div className="w-full bg-gradient-to-br from-emerald-500/10 via-emerald-100/40 to-slate-100/50 rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-3xl mx-auto shadow-md">
            <Route className="w-8 h-8" />
          </div>
          <span className="text-sm font-extrabold uppercase tracking-wider text-emerald-600 block">Live delivery pipeline</span>
          <p className="text-xs text-slate-600">Step-by-step dispatch tracking & driver status</p>
        </div>
      ),
      progress: true,
    },
    {
      num: '11.',
      title: 'Subscription management',
      desc: 'Complete customer control over daily subscriptions: pause during vacation, resume with 1 tap, modify quantity, or edit calendar delivery schedule.',
      side: 'right',
      visual: (
        <div className="w-full bg-gradient-to-br from-violet-500/10 via-violet-100/40 to-slate-100/50 rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-3xl mx-auto shadow-md">
            <CalendarCheck className="w-8 h-8" />
          </div>
          <span className="text-sm font-extrabold uppercase tracking-wider text-violet-600 block">Automated calendar engine</span>
          <p className="text-xs text-slate-600">Daily, alternate, or custom weekday schedule setup</p>
        </div>
      ),
      subCard: true,
    },
    {
      num: '12.',
      title: 'Clean Culture wallet',
      desc: 'Integrated digital wallet balance for instant 1-tap checkout, automated subscription auto-debit, promotional cashbacks, and transparent transaction logs.',
      side: 'left',
      visual: (
        <div className="w-full bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-700 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center text-3xl mx-auto shadow-md">
            <Coins className="w-8 h-8" />
          </div>
          <span className="text-sm font-extrabold uppercase tracking-wider text-emerald-400 block">Prepaid wallet system</span>
          <p className="text-xs text-slate-400">Instant auto-debit for daily subscription orders</p>
        </div>
      ),
      walletCard: true,
    },
    {
      num: '13.',
      title: 'Support',
      desc: 'Instant searchable FAQ database, help categorizations (Delivery delay, Quality issue, Billing), and 24/7 direct WhatsApp Chat & Toll-Free Phone call support.',
      side: 'right',
      visual: (
        <div className="w-full bg-gradient-to-br from-cyan-500/10 via-cyan-100/40 to-slate-100/50 rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white flex items-center justify-center text-3xl mx-auto shadow-md">
            <MessageSquare className="w-8 h-8" />
          </div>
          <span className="text-sm font-extrabold uppercase tracking-wider text-cyan-600 block">24/7 WhatsApp & support desk</span>
          <p className="text-xs text-slate-600">Instant query resolution & live ticket assistance</p>
        </div>
      ),
      supportBtns: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body selection:bg-[#2196E8] selection:text-white">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top font-body bg-white">

        {/* ── TOP PANORAMIC COVER HERO BANNER ── */}
        <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-slate-950 flex items-center justify-center font-body group">
          {/* Background Image with Ambient Zoom & Fade */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
              alt="Clean Culture Cover Banner"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Atmospheric Dark & Brand Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
            <div className="absolute inset-0 bg-[#2196E8]/10 mix-blend-overlay" />
          </div>

          {/* Centered Overlay Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-body drop-shadow-lg">
              Building Digital Growth Through <br />
              <span className="text-[#2196E8] drop-shadow-[0_0_25px_rgba(33,150,232,0.6)]">Tailored Innovation</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-body drop-shadow-md font-medium">
              Discover how DhiGrowth transformed everyday organic grocery &amp; coconut subscriptions into a seamless, fast, minimal mobile application for <strong className="text-white font-bold">Clean Culture</strong>.
            </p>

            <div className="pt-2 flex justify-center">
              <button
                onClick={() => {
                  const el = document.getElementById('clean-culture-overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-[#0A0F17]/90 hover:bg-[#121B2B] border border-[#2196E8]/50 hover:border-[#2196E8] text-white text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(33,150,232,0.35)] transition-all transform hover:scale-105 cursor-pointer font-body backdrop-blur-md"
              >
                <img src="/images/clean_culture_logo.png" alt="Clean Culture" className="w-6 h-6 rounded-full object-cover border border-emerald-400" />
                <span>Jump to Clean Culture Case Study ↓</span>
              </button>
            </div>
          </div>

          {/* Left / Right Carousel Arrow Buttons */}
          <Link
            href="/case-studies/akirva"
            title="Previous Case Study"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#2196E8] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>

          <Link
            href="/case-studies/startten"
            title="Next Case Study"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#2196E8] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>

          {/* Bottom Carousel Pagination Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-6 h-2 rounded-full bg-[#2196E8] transition-all" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </section>

        {/* ── HERO OVERVIEW ── */}
        <section id="clean-culture-overview" className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden font-body">
          <div className="absolute right-0 top-1/3 pointer-events-none select-none opacity-[0.04] text-[160px] font-extrabold tracking-widest text-[#2196E8] uppercase hidden lg:block font-body leading-none">
            CLEAN CULTURE
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

              {/* Left: Logo + title */}
              <div className="lg:col-span-6 space-y-4">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2196E8] text-sm font-medium transition-colors mb-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to case studies
                </Link>
                <div className="flex items-center space-x-4">
                  <img src="/images/clean_culture_logo.png" alt="Clean Culture Logo"
                    className="w-16 h-16 rounded-2xl shadow-lg object-cover border-2 border-emerald-400" />
                  <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-body">
                      Clean culture mobile app
                    </h1>
                  </div>
                </div>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  Clean Culture is a flagship e-commerce application developed under DhiGrowth. It provides
                  fresh milk, tender coconut, pure drinking water, organic vegetables, and fresh fruits with
                  next-day doorstep delivery to customers. Designed with a minimal aesthetic and smart
                  subscription engine.
                </p>
              </div>

              {/* Right: Phone slideshow */}
              <div className="lg:col-span-6 flex justify-center py-2">
                <div className="relative w-[300px] sm:w-[380px] group">
                  <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center drop-shadow-2xl">
                    {['/images/mockup_screen_1.png', '/images/mockup_screen_2.png', '/images/mockup_screen_3.png'].map((src, idx) => (
                      <img key={idx} src={src} alt={`Clean Culture App Screen ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${currentSlide === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'}`} />
                    ))}

                    {/* Dots */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5 bg-slate-900/90 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
                      {[0, 1, 2].map(idx => (
                        <button key={idx} onClick={() => setCurrentSlide(idx)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${currentSlide === idx ? 'w-6 h-2 bg-emerald-400' : 'w-2 h-2 bg-white/40'}`} />
                      ))}
                    </div>

                    {/* Chevrons */}
                    <button onClick={() => setCurrentSlide(p => (p - 1 + 3) % 3)}
                      className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#2196E8] text-white flex items-center justify-center backdrop-blur border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg cursor-pointer">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={() => setCurrentSlide(p => (p + 1) % 3)}
                      className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#2196E8] text-white flex items-center justify-center backdrop-blur border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg cursor-pointer">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ARC DIVIDER ── */}
        <div className="w-full overflow-hidden leading-none bg-slate-50 -mb-1">
          <svg className="relative block w-full h-12 sm:h-20 text-slate-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── VIDEO OVERVIEW ── */}
        <section className="w-full bg-slate-950 text-white pb-16 sm:pb-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#2196E8]/40 group">
                  <video ref={videoRef} controls autoPlay loop muted={videoMuted}
                    className="w-full h-[360px] sm:h-[420px] object-cover bg-black">
                    <source src="/videos/clean_culture_overview.mp4" type="video/mp4" />
                  </video>
                  <button onClick={toggleMute}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-[#2196E8] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 cursor-pointer">
                    {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight font-body">
                    Experience clean culture delivery in action
                  </h3>
                  <img src="/images/clean_culture_logo.png" alt="Clean Culture Logo"
                    className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl border-2 border-emerald-400 object-cover shadow-xl shrink-0" />
                </div>
                <div className="space-y-4 pt-2">
                  {[
                    'Fresh tender coconut, milk, purified water & organic produce',
                    'Live status pipeline from pending to delivered',
                    'Daily, weekly, or monthly automated recurring orders',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm text-slate-200">
                      <Check className="w-5 h-5 text-[#2196E8] shrink-0 mt-0.5" />
                      <span className="font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PLATFORM HIGHLIGHTS (card grid) ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2196E8]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                Clean culture mobile platform highlights
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Subscription-first design', desc: 'Daily, alternate-day, or weekly delivery schedules with full customer control and pause/resume in one tap.', color: 'emerald', icon: <RefreshCw className="w-6 h-6" /> },
                { title: 'Hyperlocal delivery engine', desc: 'Geofenced delivery zones with GPS pinpoint placement, pincode serviceability check, and next-day 6AM slot.', color: 'blue', icon: <MapPin className="w-6 h-6" /> },
                { title: 'Real-time order tracking', desc: 'Live 5-step pipeline: Placed → Confirmed → Packed → Out for Delivery → Delivered with 1-click reorder.', color: 'sky', icon: <Route className="w-6 h-6" /> },
                { title: 'Integrated wallet', desc: 'Prepaid wallet with 1-tap checkout, subscription auto-debit, cashbacks, and full transaction history.', color: 'violet', icon: <Coins className="w-6 h-6" /> },
                { title: 'Multi-payment support', desc: "UPI (GPay, PhonePe, Paytm), Clean Culture Wallet balance, and Cash on Delivery — customer's choice.", color: 'amber', icon: <Shield className="w-6 h-6" /> },
                { title: '24/7 support desk', desc: 'Searchable FAQ, categorized help tickets, and direct WhatsApp Chat + Toll-Free phone support anytime.', color: 'cyan', icon: <MessageSquare className="w-6 h-6" /> },
              ].map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all space-y-3 group">
                  <div className={`w-12 h-12 rounded-xl bg-${c.color}-100 text-${c.color}-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base font-body">{c.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APP REQUIREMENTS ── */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                Clean culture user app requirements
              </h2>
            </div>

            <div className="space-y-0">
              {/* Product Objective */}
              <div className="w-full py-12 sm:py-16 border-b border-slate-200/80">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <img src="/images/cc_image.png" alt="Clean Culture Organic Coconuts & Milk"
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-body">Product objective</h3>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      To build a premium, fast, minimal subscription e-commerce mobile application focused on coconut-based products, fresh farm milk, daily essentials, subscription-based recurring delivery, and next-day ordering.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/80 flex items-start space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Sub-second loading</h4>
                          <p className="text-xs text-slate-600 mt-0.5">Sub-second page loading speed optimized for instant user browsing.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80 flex items-start space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-[#2196E8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <RefreshCw className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Subscription engine</h4>
                          <p className="text-xs text-slate-600 mt-0.5">Automated recurring subscription engine for daily doorstep deliveries.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sections 4-13 */}
              {appSections.map((sec, i) => {
                const isLeft = sec.side === 'left';
                const imageEl = sec.image ? (
                  <img src={sec.image} alt={sec.title}
                    className="w-full h-auto object-contain max-h-[460px] drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
                ) : sec.visual ? (
                  <div className="w-full max-w-sm mx-auto">{sec.visual}</div>
                ) : null;

                return (
                  <div key={i} className="w-full py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 last:border-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* Visual: left on even-numbered sections */}
                      {isLeft ? (
                        <>
                          <div className="lg:col-span-5 flex justify-center items-center">{imageEl}</div>
                          <div className="lg:col-span-7 space-y-5">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-body">{sec.num} {sec.title}</h3>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{sec.desc}</p>
                            {sec.tags && (
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm">
                                {sec.tags.map((t, j) => (
                                  <div key={j} className={`p-3.5 rounded-xl ${t.bg} border`}>
                                    <span className={`${t.sub_text} block`}>{t.sub}</span>
                                    <span className={`font-bold ${t.text}`}>{t.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {sec.chips && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                {sec.chips.map((c, j) => (
                                  <div key={j} className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/50 flex items-center space-x-3">
                                    {c.icon}
                                    <span className="font-semibold text-slate-800 text-sm">{c.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {sec.progress && (
                              <div className="space-y-3 pt-2">
                                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                                  <div className="bg-emerald-500 w-4/5 h-full" />
                                </div>
                                <span className="text-xs sm:text-sm text-emerald-600 font-bold block">Status: Out for delivery (7:00 AM)</span>
                              </div>
                            )}
                            {sec.walletCard && (
                              <div className="p-5 bg-slate-900 text-white rounded-2xl flex justify-between items-center max-w-md">
                                <div>
                                  <span className="text-xs text-slate-400 block uppercase font-mono">Wallet balance</span>
                                  <span className="text-2xl font-mono font-extrabold text-emerald-400">₹1,450.00</span>
                                </div>
                                <button className="px-5 py-2.5 bg-[#2196E8] text-white text-xs font-bold rounded-xl shadow-md">+ Add money</button>
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-body">{sec.num} {sec.title}</h3>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{sec.desc}</p>
                            {sec.chips && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                {sec.chips.map((c, j) => (
                                  <div key={j} className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/50 flex items-center space-x-3">
                                    {c.icon}
                                    <span className="font-semibold text-slate-800 text-sm">{c.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {sec.badges && (
                              <div className="flex gap-3 pt-2 flex-wrap">
                                {sec.badges.map((b, j) => (
                                  <span key={j} className={`px-4 py-2.5 rounded-xl text-sm font-bold ${b.cls}`}>{b.label}</span>
                                ))}
                              </div>
                            )}
                            {sec.payBadges && (
                              <div className="flex flex-wrap gap-3 text-sm font-bold pt-1">
                                {[
                                  { icon: '⚡', label: 'UPI 1-tap' },
                                  { icon: '👛', label: 'Clean Culture wallet' },
                                  { icon: '💵', label: 'Cash on delivery' },
                                ].map((b, j) => (
                                  <span key={j} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl flex items-center gap-1.5">{b.icon} {b.label}</span>
                                ))}
                              </div>
                            )}
                            {sec.subCard && (
                              <div className="p-4 bg-violet-50/80 rounded-xl border border-violet-100 flex items-center justify-between text-xs sm:text-sm">
                                <div>
                                  <span className="font-bold text-violet-900 block text-sm">Daily tender coconut (2 pcs)</span>
                                  <span className="text-violet-600 text-xs">Active • Next delivery tomorrow</span>
                                </div>
                                <button className="px-4 py-2 bg-violet-600 text-white rounded-xl text-xs font-bold shadow-sm">Pause</button>
                              </div>
                            )}
                            {sec.supportBtns && (
                              <div className="flex flex-wrap gap-3 text-sm pt-1">
                                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"
                                  className="px-5 py-3 bg-emerald-500 text-white rounded-xl font-bold flex items-center space-x-2 shadow-sm">
                                  <span>💬</span><span>Live WhatsApp support</span>
                                </a>
                                <a href="tel:+919999999999"
                                  className="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl font-bold flex items-center space-x-2">
                                  <span>📞</span><span>Call customer desk</span>
                                </a>
                              </div>
                            )}
                          </div>
                          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">{imageEl}</div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── APP IS LIVE ── */}
        <section className="py-20 bg-[#05080C] text-white relative overflow-hidden w-full">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {[
              { cls: 'cannon-particle-left w-3 h-3 bg-[#a786ff] rounded-sm', d: '0s' },
              { cls: 'cannon-particle-left w-2.5 h-4 bg-[#fd8bbc] rotate-45', d: '0.5s' },
              { cls: 'cannon-particle-left w-3 h-2 bg-[#eca184] -rotate-12', d: '1s' },
              { cls: 'cannon-particle-left w-3.5 h-3.5 rounded-full bg-[#f8deb1]', d: '1.5s' },
              { cls: 'cannon-particle-left w-2 h-4 bg-[#10b981] rotate-12', d: '2s' },
              { cls: 'cannon-particle-left w-3 h-3 bg-[#38bdf8] rotate-45', d: '2.5s' },
              { cls: 'cannon-particle-right w-3 h-3 bg-[#fd8bbc] rounded-sm', d: '0.2s' },
              { cls: 'cannon-particle-right w-3 h-4 bg-[#a786ff] -rotate-45', d: '0.7s' },
              { cls: 'cannon-particle-right w-2.5 h-2.5 rounded-full bg-[#10b981]', d: '1.2s' },
              { cls: 'cannon-particle-right w-3.5 h-2 bg-[#f8deb1] rotate-30', d: '1.7s' },
              { cls: 'cannon-particle-right w-3 h-3 bg-[#eca184] rotate-12', d: '2.2s' },
              { cls: 'cannon-particle-right w-2 h-4 bg-[#facc15] -rotate-12', d: '2.7s' },
            ].map((p, i) => (
              <div key={i} className={p.cls} style={{ animationDelay: p.d }} />
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-20 space-y-8">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-3 rounded-3xl bg-emerald-500/40 blur-2xl group-hover:bg-emerald-400/60 transition-all" />
                <img src="/images/clean_culture_logo.png" alt="Clean Culture Logo"
                  className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2 border-emerald-400/80 object-cover shadow-[0_0_50px_rgba(16,185,129,0.5)] transition hover:scale-105" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-body">Clean culture</h2>
              <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
                Fresh milk, tender coconuts, protein meals, RO water, oils & more — delivered to your doorstep!
              </p>
            </div>
            <div className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-[#0A0F17] hover:bg-[#121B2B] border border-emerald-500/50 text-emerald-400 text-lg sm:text-xl font-extrabold shadow-[0_0_35px_rgba(16,185,129,0.35)] cursor-pointer transition hover:scale-105">
              <span className="text-2xl animate-bounce">🎉</span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent tracking-wide">App is live!</span>
              <span className="text-2xl animate-bounce">🎉</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <a href="#" className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-emerald-500/40 hover:border-emerald-400 text-white font-medium shadow-[0_0_25px_rgba(16,185,129,0.25)] transition transform hover:-translate-y-1">
                <svg className="w-7 h-7 text-emerald-400 fill-current" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1L472.2 359c16.1-9.2 27.2-26.6 27.2-46.7 0-20.1-11.1-37.5-27.2-46.7zm-207.1 52.1L104.6 499l220.7-126.7-60.1-60.1-24.4 24.4z" /></svg>
                <div className="text-left font-body">
                  <span className="text-[10px] tracking-wide text-slate-400 block leading-none font-bold font-body">Get it on</span>
                  <span className="text-lg font-extrabold text-white leading-tight font-body">Google Play</span>
                </div>
              </a>
              <a href="#" className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.1)] transition transform hover:-translate-y-1">
                <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.9-74.5-22.9-39.9 0-79.7 20.6-102.1 59.5-23 39.8-17.6 102.4 3.9 155.8 12.1 30.2 30 53.5 53 54.1 22.8.6 34.7-11.4 59.5-11.4 24.8 0 36.6 11.4 59.5 11.4 23.3-.6 41.2-21.2 53-38.2 15-21.4 22.4-44.4 22.7-45.6-1.1-.3-44.3-17.2-44.7-68.8zM245.5 81c22.4-24.6 37.5-58.8 31.3-93-29.4 1.2-65.4 19.6-86.5 44.6-18.8 22.4-35.3 56.8-29.3 89.8 32.5 1.2 65.7-18.4 84.5-41.4z" /></svg>
                <div className="text-left font-body">
                  <span className="text-[10px] tracking-wide text-slate-400 block leading-none font-bold font-body">Download on the</span>
                  <span className="text-lg font-extrabold text-white leading-tight font-body">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── SHOWCASE BANNER ── */}
        <section className="w-full bg-[#05080C] py-8 flex justify-center items-center overflow-hidden">
          <div className="w-full">
            <img src="/images/cc_carousel_1.png" alt="Clean Culture Fresh Coconuts & Farm Milk"
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl shadow-2xl" />
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />

      <style>{`
        @keyframes sideCannonLeft {
          0%   { transform: translate(0,0) rotate(0deg) scale(0.5); opacity:1; }
          50%  { transform: translate(38vw,-150px) rotate(360deg) scale(1.2); opacity:0.95; }
          100% { transform: translate(65vw,280px) rotate(720deg) scale(0.3); opacity:0; }
        }
        @keyframes sideCannonRight {
          0%   { transform: translate(0,0) rotate(0deg) scale(0.5); opacity:1; }
          50%  { transform: translate(-38vw,-150px) rotate(-360deg) scale(1.2); opacity:0.95; }
          100% { transform: translate(-65vw,280px) rotate(-720deg) scale(0.3); opacity:0; }
        }
        .cannon-particle-left  { position:absolute; left:0; top:50%; pointer-events:none; animation: sideCannonLeft 3.5s cubic-bezier(0.25,1,0.5,1) infinite; }
        .cannon-particle-right { position:absolute; right:0; top:50%; pointer-events:none; animation: sideCannonRight 3.5s cubic-bezier(0.25,1,0.5,1) infinite; }
      `}</style>
    </div>
  );
}
