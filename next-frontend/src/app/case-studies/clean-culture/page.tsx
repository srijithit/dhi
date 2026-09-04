"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import confetti from 'canvas-confetti';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Check,
  Zap,
  RefreshCw,
  MapPin,
  Clock,
  Layers,
  Tag,
  Heart,
  Warehouse,
  Receipt,
  Shield,
  Route,
  CalendarCheck,
  Coins,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Globe,
  Cpu,
  CheckCircle2,
  Smartphone,
  Server,
  Database,
  BarChart3,
  Users,
  Award,
  TrendingUp,
  Truck,
  FileText,
  Sliders,
  CreditCard,
  Lock,
  ChevronDown,
  ChevronUp,
  Headphones,
  Trophy,
  ExternalLink,
} from 'lucide-react';

// Challenges 4 cards data (Screenshot 1)
const challengeCards = [
  { title: 'High-Concurrency Traffic & Session Management' },
  { title: 'Real-Time Pincode & Serviceability Validation' },
  { title: 'Automated Subscription & Daily Delivery Engine' },
  { title: 'Multi-Cart & Zero-Latency Reordering Architecture' },
];

// Solution Carousel Data (Screenshot 2)
const solutionSlides = [
  {
    num: '01',
    tag: 'CATALOG & CART',
    watermark: 'HIGH CONVERSION STOREFRONT',
    title: 'Real–time multi–hub allocation',
    desc: 'Dynamic scheduling engine that validates stock across nearest farm hubs, ensuring freshness and automated cutoff routing.',
    img: '/images/cc_highlight_category.jpg',
  },
  {
    num: '02',
    tag: 'CHECKOUT CORE',
    watermark: 'CHECKOUT ARCHITECTURE',
    title: '1–click direct reorder',
    desc: 'Past purchase validation against live stock, instant reorder bundling, and automatic skip-to-payment step reducing drop-offs by 60%.',
    img: '/images/cc_neon_cart.jpg',
  },
  {
    num: '03',
    tag: 'SUBSCRIPTION CORE',
    watermark: 'RECURRING ENGINE',
    title: 'Automated recurring billing',
    desc: 'Smart wallet auto-debits and automated cutoff invoicing for scheduled subscription orders with 1-tap pause and resume.',
    img: '/images/cc_highlight_product.jpg',
  },
  {
    num: '04',
    tag: 'LOGISTICS ENGINE',
    watermark: 'GEOLOCATION DISPATCH',
    title: 'Hyperlocal geofencing pipeline',
    desc: 'GPS-guided driver delivery routing dispatching daily morning orders strictly by 7:00 AM straight to customer doorsteps.',
    img: '/images/cc_location_management_mockup.png',
  },
  {
    num: '05',
    tag: 'DATABASE ARCHITECTURE',
    watermark: 'REALTIME SYNC ENGINE',
    title: 'Single source of truth',
    desc: 'Strict transactional concurrency guards in PostgreSQL ensuring total inventory sync during high-volume peak morning hours.',
    img: '/images/cc_highlight_store.jpg',
  },
];

// Highlights 3 Cards (Screenshot 4)
const highlightItems = [
  {
    id: 0,
    icon: <Zap className="w-5 h-5 text-[#2196E8]" />,
    title: 'Direct-to-payment reorder',
    desc: 'A 1-click reorder system that validates past purchases against live inventory and fast-forwards the user directly to the payment step.',
    screen: '/images/cc_highlight_product.jpg',
  },
  {
    id: 1,
    icon: <MapPin className="w-5 h-5 text-[#2196E8]" />,
    title: 'Real-time delivery & COD validation',
    desc: 'Instant pincode serviceability checks that automatically calculate estimated delivery days and dynamically enable or disable Cash on Delivery (COD).',
    screen: '/images/cc_highlight_category.jpg',
  },
  {
    id: 2,
    icon: <Database className="w-5 h-5 text-[#2196E8]" />,
    title: 'Single source of truth',
    desc: 'Synchronized state management ensuring that the frontend UI and backend PostgreSQL database always reflect the exact same pricing and inventory data.',
    screen: '/images/cc_highlight_store.jpg',
  },
];

export default function CleanCulturePage() {
  const [currentCoverSlide, setCurrentCoverSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const [solutionIdx, setSolutionIdx] = useState(1); // default 02: 1-click direct reorder
  const [expandedProductExp, setExpandedProductExp] = useState<{ [key: number]: boolean }>({});
  const [highlightIdx, setHighlightIdx] = useState(0);
  const [isHighlightHovered, setIsHighlightHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance cover banner
  useEffect(() => {
    const timer = setInterval(() => setCurrentCoverSlide((p) => (p + 1) % 3), 4500);
    return () => clearInterval(timer);
  }, []);

  // Auto-play for Highlights 3D Phone carousel (pauses on hover)
  useEffect(() => {
    if (isHighlightHovered) return;
    const timer = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHighlightHovered]);

  const [solutionDirection, setSolutionDirection] = useState(1);
  const [solutionInView, setSolutionInView] = useState(false);
  const [solutionIsHovered, setSolutionIsHovered] = useState(false);
  const solutionSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: solutionScrollProgress } = useScroll({
    target: solutionSectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(solutionScrollProgress, "change", (latest) => {
    const total = solutionSlides.length;
    if (total <= 1) return;
    const targetIdx = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    if (targetIdx !== solutionIdx) {
      setSolutionDirection(targetIdx > solutionIdx ? 1 : -1);
      setSolutionIdx(targetIdx);
    }
  });

  const paginateSolution = (newDirection: number) => {
    setSolutionDirection(newDirection);
    setSolutionIdx((prev) => {
      let next = prev + newDirection;
      if (next < 0) return solutionSlides.length - 1;
      if (next >= solutionSlides.length) return 0;
      return next;
    });
  };

  const handleNextSolution = () => paginateSolution(1);
  const handlePrevSolution = () => paginateSolution(-1);

  // Touch / Drag Swipe Handlers for Overview & Highlights Carousels
  const [touchStartXOverview, setTouchStartXOverview] = useState<number | null>(null);
  const [touchStartXHighlight, setTouchStartXHighlight] = useState<number | null>(null);

  const handleTouchStartOverview = (clientX: number) => {
    setTouchStartXOverview(clientX);
  };

  const handleTouchEndOverview = (clientX: number) => {
    if (touchStartXOverview === null) return;
    const diff = touchStartXOverview - clientX;
    if (diff > 35) {
      setCurrentCoverSlide((prev) => (prev === 2 ? 0 : prev + 1));
    } else if (diff < -35) {
      setCurrentCoverSlide((prev) => (prev === 0 ? 2 : prev - 1));
    }
    setTouchStartXOverview(null);
  };

  const handleTouchStartHighlight = (clientX: number) => {
    setTouchStartXHighlight(clientX);
  };

  const handleTouchEndHighlight = (clientX: number) => {
    if (touchStartXHighlight === null) return;
    const diff = touchStartXHighlight - clientX;
    if (diff > 35) {
      setHighlightIdx((prev) => (prev + 1) % 3);
    } else if (diff < -35) {
      setHighlightIdx((prev) => (prev - 1 + 3) % 3);
    }
    setTouchStartXHighlight(null);
  };

  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const confettiInstanceRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize Confetti Canvas & IntersectionObserver for auto trigger on scroll into view
  useEffect(() => {
    if (confettiCanvasRef.current && typeof confetti !== 'undefined') {
      confettiInstanceRef.current = confetti.create(confettiCanvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }

    const section = document.getElementById('app-is-live-section');
    if (section && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerSideCannons();
            } else {
              stopSideCannons();
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(section);
      return () => {
        observer.disconnect();
        stopSideCannons();
      };
    }
  }, []);

  const stopSideCannons = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (confettiInstanceRef.current && typeof confettiInstanceRef.current.reset === 'function') {
      confettiInstanceRef.current.reset();
    }
  };

  // Side Cannons Confetti Burst Trigger Function
  const triggerSideCannons = () => {
    if (!confettiInstanceRef.current && confettiCanvasRef.current && typeof confetti !== 'undefined') {
      confettiInstanceRef.current = confetti.create(confettiCanvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }
    const fire = confettiInstanceRef.current || confetti;
    if (typeof fire !== 'function') return;
    const end = Date.now() + 3.5 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1", "#10b981", "#38bdf8", "#facc15"];

    const frame = () => {
      if (Date.now() > end) {
        stopSideCannons();
        return;
      }
      // Left Side Cannon Burst
      fire({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 55,
        origin: { x: 0, y: 0.6 },
        colors: colors,
      });
      // Right Side Cannon Burst
      fire({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 55,
        origin: { x: 1, y: 0.6 },
        colors: colors,
      });
      animationFrameRef.current = requestAnimationFrame(frame);
    };
    frame();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
        setVideoPlaying(false);
      } else {
        videoRef.current.play().catch((err) => {
          console.warn("Video playback failed:", err);
          setVideoPlaying(false);
        });
        setVideoPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const toggleProductExp = (idx: number) => {
    setExpandedProductExp((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Product Experience 4 Cards Data (Screenshot 3)
  const productExpCards = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#2196E8]" />,
      title: 'Visually Rich UI & Micro-Animations',
      shortDesc: 'Clean Culture delivers a visually rich, premium, and highly responsive shopping experience designed to simplify daily essential ordering.',
      fullDesc: 'Clean Culture delivers a visually rich, premium, and responsive shopping experience with 60fps micro-interactions, smooth category carousels, instant image caching, and haptic feedback that makes browsing effortless.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#2196E8]" />,
      title: 'Real-Time Stock Indicators',
      shortDesc: 'Clear real-time stock indicators keep inventory dynamic and accurately updated across all local fulfillment centers.',
      fullDesc: 'Clear real-time stock indicators keep inventory dynamic and accurately updated across all local fulfillment centers, preventing out-of-stock disappointments with live buffer quantity tracking.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#2196E8]" />,
      title: 'Intuitive Stepper Checkout',
      shortDesc: 'An intuitive multi-step checkout process keeps users informed, guided, and in total control of delivery schedules.',
      fullDesc: 'An intuitive multi-step checkout process keeps users informed, guided, and in control with clear address confirmation, delivery window selection (e.g. 6:00 AM - 7:00 AM), and instant payment verification.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#2196E8]" />,
      title: 'Frictionless Reorder System',
      shortDesc: 'Customers can easily manage complex carts with varied weights or use 1-click direct-to-payment reordering.',
      fullDesc: 'Customers can easily manage complex carts with varied weights or use 1-click direct-to-payment reordering, automatically repopulating last week’s daily essentials in a single tap.',
    },
  ];

  // Scope 6 Cards (Screenshot 5)
  const scopeCards = [
    {
      num: '01',
      tag: 'STOREFRONT & CATALOG',
      title: 'Product Discovery Pages',
      desc: 'Rich product listings featuring multi-weight selectors (100g, 250g, 500g packs), real-time stock availability badges, and fast search filters engineered for instant conversion.',
    },
    {
      num: '02',
      tag: 'CHECKOUT CORE',
      title: 'Dynamic Cart Engine',
      desc: 'High-performance cart management supporting multi-item weight calculations, real-time total updates, discount coupon application, and instant weight package bundling.',
    },
    {
      num: '03',
      tag: 'SECURITY & PROFILES',
      title: 'User Authentication',
      desc: 'Frictionless onboarding experience powered by secure OTP phone verification, Google One-Tap Sign-In, saved sessions persistence, and unified account profile settings.',
    },
    {
      num: '04',
      tag: 'LOGISTICS & COD',
      title: 'Address Book & Serviceability',
      desc: 'Instant pincode validation engine that checks delivery serviceability in real-time, calculates estimated delivery days, and dynamically enables or disables Cash on Delivery (COD).',
    },
    {
      num: '05',
      tag: 'ORDER LIFECYCLE',
      title: 'Order Tracking & History',
      desc: 'Comprehensive order management dashboard providing real-time status updates, past invoice downloads, itemized receipts, and a 1-click repeat reorder pipeline.',
    },
    {
      num: '06',
      tag: 'GATEWAY INTEGRATION',
      title: 'Secure Multi-Step Checkout',
      desc: 'Bank-grade checkout pipeline integrated with Razorpay payment gateway, supporting UPI, credit/debit cards, net banking, automated stock hold, and instant order confirmation.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body selection:bg-[#2196E8] selection:text-white">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top font-body bg-white">

        {/* ── TOP PANORAMIC COVER HERO BANNER ── */}
        <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-slate-950 flex items-center justify-center font-body group">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
              alt="Clean Culture Cover Banner"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
            <div className="absolute inset-0 bg-[#2196E8]/10 mix-blend-overlay" />
          </div>

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
                  const el = document.getElementById('challenges');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-[#0A0F17]/90 hover:bg-[#121B2B] border border-[#2196E8]/50 hover:border-[#2196E8] text-white text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(33,150,232,0.35)] transition-all transform hover:scale-105 cursor-pointer font-body backdrop-blur-md"
              >
                <img src="/images/clean_culture_logo.png" alt="Clean Culture" className="w-6 h-6 rounded-full object-cover border border-emerald-400" />
                <span>Jump to Clean Culture Case Study ↓</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-6 h-2 rounded-full bg-[#2196E8] transition-all" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </section>
          {/* ── 01 OVERVIEW / ABOUT US (MATCHING USER SCREENSHOT) ── */}
        <section id="overview" className="relative pt-12 pb-6 sm:pt-16 sm:pb-8 bg-white overflow-hidden font-body">
          {/* Subtle Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <span className="text-[7rem] sm:text-[11rem] font-black text-slate-100/70 tracking-[0.2em] uppercase whitespace-nowrap">
              CLEAN CULTURE
            </span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Column: About us Text */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center space-x-3.5">
                  <img
                    src="/images/clean_culture_logo.png"
                    alt="Clean Culture Logo"
                    className="w-12 h-12 rounded-xl shadow-md object-cover border-2 border-emerald-400"
                  />
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-body">
                    About us
                  </h2>
                </div>
                
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    Clean Culture is a modern daily essentials delivery platform designed to simplify everyday household purchases. Customers can order fresh milk, tender coconuts, protein meals, RO water, oils, and other essentials.
                  </p>
                  <p>
                    The platform supports both one-time orders and flexible product subscriptions. It connects customers, vendors, products, payments, orders, and deliveries in one seamless ecosystem. Our goal was to create a convenient, reliable, and predictable daily delivery experience.
                  </p>
                </div>
              </div>

              {/* Right Column: 3D iPhone Slideshow with Dark Pill Pagination, Hover Nav Arrows & Motion Drag Swipe */}
              <div className="lg:col-span-6 flex justify-center py-2">
                <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square group">
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -35 || info.velocity.x < -250) {
                        setCurrentCoverSlide((prev) => (prev === 2 ? 0 : prev + 1));
                      } else if (info.offset.x > 35 || info.velocity.x > 250) {
                        setCurrentCoverSlide((prev) => (prev === 0 ? 2 : prev - 1));
                      }
                    }}
                    className="relative w-full h-full aspect-square rounded-3xl overflow-hidden flex items-center justify-center drop-shadow-2xl cursor-grab active:cursor-grabbing select-none bg-slate-100 border border-slate-200"
                  >
                    {['/images/cc_overview_slide1.png', '/images/cc_overview_slide2.png', '/images/cc_overview_slide3.png'].map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Clean Culture App Screen ${idx + 1}`}
                        draggable={false}
                        className={`absolute inset-0 w-full h-full aspect-square object-cover rounded-3xl transition-all duration-700 pointer-events-none select-none ${
                          currentCoverSlide === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'
                        }`}
                      />
                    ))}

                    {/* Left & Right Slider Arrow Buttons (Visible on Hover) */}
                    <button
                      onClick={() => setCurrentCoverSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                      title="Previous Slide"
                      className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E293B]/90 hover:bg-[#2196E8] text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => setCurrentCoverSlide((prev) => (prev === 2 ? 0 : prev + 1))}
                      title="Next Slide"
                      className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E293B]/90 hover:bg-[#2196E8] text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dark Pill Pagination */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 bg-slate-900/90 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
                      {[0, 1, 2].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentCoverSlide(idx)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${
                            currentCoverSlide === idx ? 'w-5 h-2 bg-emerald-400' : 'w-2 h-2 bg-slate-500'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEAMLESS CURVED BLEND DIVIDER (WHITE TO DARK) ── */}
        <div className="w-full overflow-hidden leading-none bg-white -mb-px relative z-10">
          <svg className="relative block w-full h-6 sm:h-10 text-[#070B14]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── 1. CHALLENGES (EXACT MATCH SCREENSHOT 1) ── */}
        <section id="challenges" className="w-full bg-[#070B14] text-white pt-8 pb-6 sm:pt-12 sm:pb-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-body inline-block relative">
                Challenges
                <span className="block w-14 h-1 bg-[#2196E8] rounded-full mx-auto mt-2" />
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Custom Video Player */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-[#0B1324] group">
                  <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-950 flex items-center justify-center overflow-hidden">
                    <video
                      ref={videoRef}
                      loop
                      muted={videoMuted}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/clean_culture_overview.mp4" type="video/mp4" />
                    </video>

                    {/* Bottom Video Controls Bar */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6 z-20 flex flex-col gap-2">
                      <div className="w-full bg-slate-700/80 h-1.5 rounded-full overflow-hidden flex cursor-pointer">
                        <div className="bg-[#2196E8] w-2/3 h-full rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                        <div className="flex items-center gap-3">
                          <button onClick={togglePlay} className="hover:text-white transition cursor-pointer">
                            {videoPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                          </button>
                          <span>0:00 / 0:05</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={toggleMute} className="hover:text-white transition cursor-pointer">
                            {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>
                          <button onClick={toggleFullscreen} className="hover:text-white transition cursor-pointer">
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 6 Challenge Cards */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  Managing subscription-first daily delivery operations required addressing critical concurrency, live calculation, and routing complexities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {challengeCards.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#0C1527]/90 border border-slate-800/90 flex items-center space-x-3.5 shadow-sm hover:border-[#2196E8]/40 transition group"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition leading-snug">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEAMLESS BOTTOM CURVED BLEND (DARK TO WHITE) ── */}
        <div className="w-full overflow-hidden leading-none bg-[#070B14] -mb-px relative z-10">
          <svg className="relative block w-full h-6 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── 2. SOLUTION (SCROLL-DRIVEN CARD STACKING ANIMATION) ── */}
        <section
          id="solution-overview"
          ref={solutionSectionRef}
          className="relative w-full bg-white text-slate-900 border-b border-slate-200/80 min-h-[220vh] sm:min-h-[260vh]"
        >
          {/* Sticky Pin Container for Card Stacking */}
          <div className="sticky top-16 sm:top-20 w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-6 lg:py-8 overflow-hidden">
            {/* Ambient Background Arc */}
            <div className="rounded-full border-solid border-[rgba(74,114,232,0.06)] border-[40px] lg:border-[80px] w-[500px] h-[500px] lg:w-[950px] lg:h-[950px] absolute left-[50%] lg:left-[-400px] bottom-[-200px] lg:bottom-auto lg:top-[50%] -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
              
              {/* LEFT COLUMN: TITLE, OVERVIEW & ARROW CONTROLS (STRICTLY LEFT ALIGNED) */}
              <div className="flex flex-col gap-6 lg:gap-8 items-start text-left w-full lg:w-[380px] xl:w-[440px] shrink-0 z-20 mt-2 lg:-mt-2">
                
                {/* Section Heading & Overview */}
                <div className="text-left w-full">
                  <h2 className="text-slate-900 font-sans text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] leading-tight font-extrabold tracking-tight text-left">
                    Solution
                  </h2>
                  <div className="w-16 h-1.5 bg-[#4A72E8] rounded-full mt-3 mx-0" />
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mt-4 max-w-[390px] mx-0 text-left">
                    To address high-concurrency delivery challenges, our team architected isolated checkout sessions, a centralized calculation engine, and strict stock validation with realistic visual interfaces.
                  </p>
                </div>

                {/* Arrow Navigation Controls */}
                <div className="flex flex-row gap-4 items-center justify-start">
                  <button
                    id="solutionPrevBtn"
                    onClick={handlePrevSolution}
                    aria-label="Previous solution item"
                    className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 hover:bg-[#4A72E8] text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    id="solutionNextBtn"
                    onClick={handleNextSolution}
                    aria-label="Next solution item"
                    className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 hover:bg-[#4A72E8] text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Solution Dots Indicator */}
                <div id="solutionDots" className="flex items-center justify-start gap-2 pt-1">
                  {solutionSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to solution slide ${idx + 1}`}
                      onClick={() => {
                        setSolutionDirection(idx > solutionIdx ? 1 : -1);
                        setSolutionIdx(idx);
                      }}
                      className={
                        idx === solutionIdx
                          ? 'w-7 h-2.5 rounded-full bg-[#4A72E8] transition-all duration-300 cursor-pointer shadow-sm'
                          : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-300 cursor-pointer'
                      }
                    />
                  ))}
                </div>

              </div>

              {/* RIGHT COLUMN: SCROLL-DRIVEN CARD STACKING STAGE */}
              <div className="relative flex items-center justify-center w-full lg:flex-1 xl:w-[540px] xl:flex-none h-[480px] sm:h-[460px] lg:h-[440px]">
                <div id="solutionCardStage" className="relative w-full h-full flex items-center justify-center">
                  {solutionSlides.map((card, idx) => {
                    const offset = idx - solutionIdx;
                    const isCurrent = offset === 0;
                    const isPast = offset < 0;
                    const isFuture = offset > 0;

                    const yVal = isCurrent ? 0 : isPast ? offset * 14 : 90;
                    const scaleVal = isCurrent ? 1 : isPast ? 1 + offset * 0.04 : 0.94;
                    const opacityVal = isCurrent ? 1 : isPast ? Math.max(0.15, 1 + offset * 0.35) : 0;
                    const zIndexVal = isCurrent ? 30 : isPast ? 20 + idx : 5;

                    return (
                      <motion.div
                        key={idx}
                        animate={{
                          y: yVal,
                          scale: scaleVal,
                          opacity: opacityVal,
                          zIndex: zIndexVal,
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        className={`solution-card-item absolute inset-0 flex flex-col lg:flex-row items-center justify-center w-full h-full select-none ${
                          isCurrent ? 'pointer-events-auto cursor-grab active:cursor-grabbing' : 'pointer-events-none'
                        }`}
                        drag={isCurrent ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.25}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -50) {
                            handleNextSolution();
                          } else if (info.offset.x > 50) {
                            handlePrevSolution();
                          }
                        }}
                      >
                        {/* Connector (Step tag & Era line indicator) */}
                        <div className={`hidden lg:flex items-center translate-y-10 mr-4 xl:mr-[18px] shrink-0 order-2 lg:order-1 transition-opacity duration-300 ${isCurrent ? 'opacity-100' : 'opacity-0'}`}>
                          <span className="text-[#4A72E8] font-bold text-[11px] tracking-wider uppercase font-sans">
                            {card.tag}
                          </span>
                          <div className="border-t border-slate-300 w-[30px] xl:w-[60px] h-0 mx-2.5" />
                          <div className="bg-[#4A72E8] rounded-full w-3 h-3 shrink-0 shadow-sm" />
                        </div>

                        {/* Content Card Body: Main Image Alone */}
                        <div className="w-full max-w-[320px] sm:max-w-[360px] xl:max-w-[400px] aspect-square order-1 lg:order-2 bg-white rounded-3xl p-3 sm:p-3.5 shadow-2xl border border-slate-200/90 overflow-hidden flex items-center justify-center">
                          <img
                            src={card.img}
                            alt={card.title}
                            draggable={false}
                            className="w-full h-full aspect-square object-cover rounded-2xl shadow-sm transition-transform duration-700 hover:scale-105 select-none pointer-events-none"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. PRODUCT EXPERIENCE (EXACT MATCH SCREENSHOT 3) ── */}
        <section id="product-experience" className="py-20 sm:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body inline-block relative">
                Product experience
                <span className="block w-14 h-1.5 bg-[#2196E8] rounded-full mx-auto mt-2" />
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
                Clean Culture delivers a visually rich, premium, and highly responsive shopping experience designed to simplify daily essential ordering.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Coconut & Milk Bottles Photo */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-white group p-3 flex items-center justify-center">
                  <img
                    src="/images/cc_image.png"
                    alt="Clean Culture Fresh Coconuts & Milk"
                    className="w-full h-full aspect-square object-cover rounded-2xl drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Column: 4 Cards (2x2 Grid) with Bright Blue Borders */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {productExpCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border-2 border-[#2196E8] p-6 shadow-xs hover:shadow-lg transition-all duration-300 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        {card.icon}
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-base font-body leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {card.fullDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. HIGHLIGHTS (EXACT MATCH SCREENSHOT 4) ── */}
        <section id="highlights" className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body inline-block relative">
                Highlights
                <span className="block w-14 h-1.5 bg-[#2196E8] rounded-full mx-auto mt-2" />
              </h2>
            </div>

            {/* 3D Perspective Phone Showcase with Motion Drag & Touch Swipe */}
            {/* Showcase Card: Portrait on Mobile, 16:9 on Desktop - Live Browser Preview */}
            <div className="relative max-w-sm sm:max-w-4xl mx-auto mb-8 px-4 sm:px-12">
              <div
                className="relative w-full aspect-[9/16] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-white shadow-2xl border-2 border-[#2196E8] transition-all duration-500 z-20 flex items-center justify-center overflow-hidden"
              >
                {/* Real Website Preview - Permanent Mini Browser Mockup */}
                <div className="absolute inset-0 z-30 bg-slate-950 flex flex-col rounded-xl sm:rounded-2xl overflow-hidden pointer-events-auto">
                  {/* Mini Browser Header */}
                  <div className="bg-slate-900/95 px-4 py-2.5 flex items-center justify-between border-b border-white/10 shrink-0 select-none">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                    </div>
                    
                    <div className="flex items-center space-x-2 bg-slate-800/90 text-slate-300 text-xs font-mono px-3 py-1 rounded-md border border-white/10 max-w-[200px] sm:max-w-[300px] truncate">
                      <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{highlightIdx === 0 ? "cleanculture.in" : `cleanculture.in / ${highlightItems[highlightIdx]?.title}`}</span>
                    </div>

                    <a
                      href="http://cleanculture.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Website in New Tab"
                      className="text-slate-400 hover:text-white transition p-1 hover:bg-white/10 rounded flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Window Content: Live Iframe for card 0, else screen image */}
                  <div className="relative w-full flex-1 bg-white overflow-hidden flex items-center justify-center">
                    {highlightIdx === 0 ? (
                      <iframe
                        src="http://cleanculture.in/"
                        title="Clean Culture Live Website Preview"
                        className="w-full h-full border-0 pointer-events-auto"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      />
                    ) : (
                      <img
                        src={highlightItems[highlightIdx]?.screen || highlightItems[0]?.screen}
                        alt={highlightItems[highlightIdx]?.title || "Active Screen"}
                        draggable={false}
                        className="w-full h-full object-cover select-none"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setHighlightIdx((prev) => (prev - 1 + 3) % 3)}
                aria-label="Previous highlight screen"
                className="absolute -left-2 sm:left-0 md:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0A0F17] hover:bg-[#2196E8] text-white flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 border border-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setHighlightIdx((prev) => (prev + 1) % 3)}
                aria-label="Next highlight screen"
                className="absolute -right-2 sm:right-0 md:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0A0F17] hover:bg-[#2196E8] text-white flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 border border-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setHighlightIdx(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      highlightIdx === i ? 'w-6 h-2 bg-[#2196E8]' : 'w-2 h-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 3 Highlight Cards Below */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {highlightItems.map((item) => {
                const isActive = highlightIdx === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setHighlightIdx(item.id)}
                    className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer space-y-3 ${
                      isActive
                        ? 'border-2 border-[#2196E8] bg-white shadow-lg -translate-y-1'
                        : 'border border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base font-body leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. TECHNOLOGY STACK (SCROLL IN X AXIS) ── */}
        <section id="tech-stack" className="py-8 sm:py-10 bg-white border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-6 space-y-1.5">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-body">
                Technology stack
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">
                Built with modern, scalable, high-performance web and backend technologies.
              </p>
            </div>
          </div>

          {/* Infinite X-Axis Scrolling Single Row (One Layer) */}
          <div className="w-full overflow-hidden relative py-2 marquee-container">
            {/* Left and Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Single Row - Smooth Marquee Left with Decreased Scroll Speed */}
            <div className="flex w-max space-x-4 animate-marquee-left">
              {[...Array(4)].map((_, rep) => (
                <div key={rep} className="flex space-x-4 shrink-0">
                  {[
                    {
                      name: 'Next.js',
                      icon: (
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.665 21.978C16.71 23.275 14.417 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.125-1.077 6.012-2.924 8.27L9.957 6.785H7.714v10.43h1.714v-7.85l9.237 12.613zm-.951-1.393L8.857 7.935v7.71h1.714v-5.28l7.143 10.22z"/>
                        </svg>
                      ),
                      bg: 'bg-black text-white'
                    },
                    {
                      name: 'Tailwind CSS',
                      icon: (
                        <svg className="w-5 h-5 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
                        </svg>
                      ),
                      bg: 'bg-cyan-50'
                    },
                    {
                      name: 'TypeScript',
                      icon: (
                        <svg className="w-5 h-5 shrink-0 rounded" viewBox="0 0 24 24">
                          <rect width="24" height="24" rx="4" fill="#3178C6" />
                          <path d="M11.75 14.4c0 2.25-1.4 3.6-3.8 3.6-1.5 0-2.65-.5-3.3-1.15l1-1.85c.55.45 1.3.8 2.15.8 1.15 0 1.85-.6 1.85-1.45 0-.85-.65-1.3-1.9-1.8-1.75-.7-2.7-1.5-2.7-3.05 0-2 1.55-3.35 3.6-3.35 1.3 0 2.25.4 2.85.85l-.95 1.85c-.5-.35-1.1-.65-1.85-.65-.9 0-1.55.5-1.55 1.25 0 .75.5 1.15 1.7 1.65 1.8.75 2.9 1.65 2.9 3.25zm8.25-6.2v1.9h-2.8v7.7h-2.35v-7.7H12v-1.9h8z" fill="#FFFFFF"/>
                        </svg>
                      ),
                      bg: 'bg-transparent'
                    },
                    {
                      name: 'Node.js',
                      icon: (
                        <svg className="w-5 h-5 text-[#539E43] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 1.6l9.6 5.5v11L12 23.6 2.4 18.1V7.1L12 1.6zm0 2.3L4.4 8.3v7.4L12 20.1l7.6-4.4V8.3L12 3.9zm-.1 3.5c1.9 0 3.4.6 3.4 2.4v5.6c0 1.9-1.5 2.4-3.4 2.4s-3.4-.6-3.4-2.4V9.8c0-1.8 1.5-2.4 3.4-2.4zm0 2c-1 0-1.4.3-1.4 1v4.4c0 .7.4 1 1.4 1s1.4-.3 1.4-1v-4.4c0-.7-.4-1-1.4-1z"/>
                        </svg>
                      ),
                      bg: 'bg-emerald-50'
                    },
                    {
                      name: 'Express',
                      icon: (
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <rect width="24" height="24" rx="4" fill="#18181B" />
                          <path d="M6 8h4.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H8v3H6V8zm2 3.5h2.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8v1zm5.5-3.5h2l1.8 3.2L19 8h2l-2.8 4.6L21 17h-2l-1.9-3.4L15.2 17h-2l2.9-4.5L13.5 8z" fill="#FAFAFA" />
                        </svg>
                      ),
                      bg: 'bg-transparent'
                    },
                    {
                      name: 'PostgreSQL',
                      icon: (
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="4" fill="#336791" />
                          <path d="M12 4.5c-3.8 0-6.8 2.5-6.8 5.6 0 1.9 1.1 3.5 2.8 4.5v3.4l2.8-1.5c.4.1.8.1 1.2.1 3.8 0 6.8-2.5 6.8-5.6s-3-6.5-6.8-6.5zm0 1.8c2.8 0 5 1.8 5 4.1 0 2.3-2.2 4.1-5 4.1-.4 0-.8 0-1.2-.1l-.4-.1-1.6.8v-1.6l-.4-.3c-1-1-1.4-1.9-1.4-2.9 0-2.3 2.2-4.1 5-4.1z" fill="#FFFFFF"/>
                        </svg>
                      ),
                      bg: 'bg-transparent'
                    },
                    {
                      name: 'Flutter',
                      icon: (
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#02569B">
                          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.314 11.235L8.528 17.02l5.786 5.786h7.37l-9.37-9.37 3.585-3.586h-1.585z"/>
                        </svg>
                      ),
                      bg: 'bg-blue-50'
                    },
                    {
                      name: 'React',
                      icon: (
                        <svg className="w-5 h-5 text-[#61DAFB] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
                          <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)"/>
                          <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)"/>
                          <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)"/>
                        </svg>
                      ),
                      bg: 'bg-slate-900'
                    },
                    {
                      name: 'Redis',
                      icon: (
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#DC382D">
                          <path d="M12 2L2 6.5v11L12 22l10-4.5v-11L12 2zm0 2.2l7.5 3.4-7.5 3.4-7.5-3.4L12 4.2zM3.8 8.7l7.2 3.2v7.7l-7.2-3.2V8.7zm9.2 10.9v-7.7l7.2-3.2v7.7l-7.2 3.2z"/>
                        </svg>
                      ),
                      bg: 'bg-red-50'
                    },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-center space-x-3 shrink-0 select-none hover:border-[#2196E8] hover:shadow-md transition cursor-pointer group"
                    >
                      <div className={`w-8 h-8 rounded-xl ${tech.bg} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                        {tech.icon}
                      </div>
                      <span className="font-bold text-slate-800 text-sm whitespace-nowrap group-hover:text-[#2196E8] transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. SCOPE ── */}
        <section id="scope" className="py-10 sm:py-14 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                Scope
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                Explore the core operational scope of the Clean Culture platform — engineered for performance, reliability, and continuous scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {scopeCards.map((sc, idx) => (
                <div
                  key={idx}
                  className="scope-animated-card relative z-10 cursor-pointer"
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#2196E8] font-mono">{sc.num}</span>
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2196E8] text-[10px] font-extrabold tracking-wider uppercase font-mono">
                        {sc.tag}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg font-body">{sc.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{sc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. RESULTS & CLIENT TESTIMONIAL (EXACT MATCH NEW SCREENSHOT 1) ── */}
        <section id="results" className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-white border-b border-slate-200 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header: Results */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                Results
              </h2>
            </div>

            {/* 4 Stat Cards Row (Matching Screenshot 1) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-7 text-center space-y-1.5 shadow-sm hover:shadow-md transition">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2196E8] block tracking-tight">8,640+</span>
                <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-widest block">CONTESTS / MONTH</span>
              </div>
              <div className="bg-white border border-slate-200/90 rounded-3xl p-7 text-center space-y-1.5 shadow-sm hover:shadow-md transition">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 block tracking-tight">100%</span>
                <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-widest block">VERIFIABLE LEDGER</span>
              </div>
              <div className="bg-white border border-slate-200/90 rounded-3xl p-7 text-center space-y-1.5 shadow-sm hover:shadow-md transition">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-500 block tracking-tight">50%</span>
                <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-widest block">PUBLIC PROFIT SHARE</span>
              </div>
              <div className="bg-white border border-slate-200/90 rounded-3xl p-7 text-center space-y-1.5 shadow-sm hover:shadow-md transition">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-600 block tracking-tight">90%</span>
                <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-widest block">STARTUP REINVESTMENT</span>
              </div>
            </div>

            {/* Large White Client Testimonial Card (Matching Screenshot 1) */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Side: Client Name, Tagline & Quote */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-1 h-5 bg-[#2196E8] rounded-full" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2196E8]">
                      WHAT OUR CLIENTS SAY
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase font-body">
                      DhineshKumar
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mt-0.5 font-mono">
                      CLEAN CULTURE
                    </span>
                  </div>

                  <div className="pt-1 space-y-2">
                    <span className="text-xs sm:text-sm font-bold text-[#2196E8] block">
                      Client Success Stories
                    </span>
                    <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug">
                      &ldquo;We didn&apos;t just build an e-commerce app. We built a system that turns everyday purchases into an automated habit.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal pt-1">
                      We helped our client turn their vision into a successful digital solution — delivering strong business results and generating lakhs in value and profit.
                    </p>
                  </div>

                  <div className="pt-3">
                    <div className="inline-block px-5 py-2 rounded-full bg-blue-50/80 border border-blue-200 text-[#2196E8] text-xs font-bold shadow-xs">
                      Happy Client. Successful Project. Real Results.
                    </div>
                  </div>
                </div>

                {/* Right Side: Clean Culture Video Player */}
                <div className="lg:col-span-5 flex justify-center items-center">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 group bg-slate-950 max-h-[300px]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover max-h-[300px]"
                    >
                      <source src="/videos/clean_culture_overview.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── SEAMLESS CURVED BLEND DIVIDER (WHITE TO DARK APP CTA) ── */}
        <div className="w-full overflow-hidden leading-none bg-white -mb-px relative z-10">
          <svg className="relative block w-full h-6 sm:h-10 text-[#05080C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── 8. PRE-FOOTER: CLEAN CULTURE "APP IS LIVE!" FULL-BLEED SHOWCASE WITH CONFETTI SIDE CANNONS ── */}
        <section
          id="app-is-live-section"
          className="py-8 sm:py-10 bg-[#05080C] text-white relative overflow-hidden w-full m-0 p-0 border-none font-body"
        >
          {/* Confetti Canvas Embedded inside Section Only */}
          <canvas ref={confettiCanvasRef} id="confetti-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-10" />

          {/* Ambient Glow Backdrop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          </div>

          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-20 space-y-8 py-8">
            {/* 1. Ambient Green Glow Backdrop behind App Logo */}
            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={triggerSideCannons}>
                {/* Animated Glow Blur Aura */}
                <div className="absolute -inset-3 rounded-3xl bg-emerald-500/40 blur-2xl group-hover:bg-emerald-400/60 transition-all" />
                {/* Logo with Radial Shadow & Scale Effect */}
                <img
                  src="/images/clean_culture_logo.png"
                  alt="Clean Culture Logo"
                  className="relative w-32 h-32 rounded-3xl border-2 border-emerald-400/80 object-cover shadow-[0_0_50px_rgba(16,185,129,0.5)] transform transition hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-body">
                Clean Culture
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
                Fresh milk, tender coconuts, protein meals, RO water, oils &amp; more — delivered to your doorstep!
              </p>
            </div>

            {/* 2. "App is Live!" Pill Badge with Bouncing Emoji & Scale Hover */}
            <div className="pt-1 flex justify-center">
              <div
                onClick={triggerSideCannons}
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-[#0A0F17] hover:bg-[#121B2B] border border-emerald-500/50 text-emerald-400 text-lg sm:text-xl font-extrabold shadow-[0_0_35px_rgba(16,185,129,0.35)] cursor-pointer transform transition hover:scale-105 select-none"
              >
                <span className="text-2xl animate-bounce">🎉</span>
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  App is Live!
                </span>
                <span className="text-2xl animate-bounce">🎉</span>
              </div>
            </div>

            {/* 3. Download & Web Launch Buttons Lift Animation */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {/* Official Google Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.dhigrowth.cleanculture&hl=en_IN"
                target="_blank"
                rel="noreferrer"
                onClick={triggerSideCannons}
                className="inline-flex items-center space-x-3.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-emerald-500/40 hover:border-emerald-400 text-white font-medium shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 drop-shadow-md" viewBox="0 0 512 512">
                  <path d="M54.7 7.2c-7.3 4-12.7 11.8-12.7 21.6v454.4c0 9.8 5.4 17.6 12.7 21.6l245.9-248.8z" fill="#00E5FF"/>
                  <path d="M368.7 194.5l-68.7 68.7-245.3-256c3.2-1.7 6.9-2.7 10.9-2.7 5.6 0 11.2 1.8 15.9 4.7z" fill="#00E676"/>
                  <path d="M429.3 234.3l-60.6-39.8-68.7 68.7 68.7 68.7 60.9-39.9c10.4-6.8 16.4-17.7 16.4-28.8 0-11.2-6-22.1-16.7-28.9z" fill="#FFD600"/>
                  <path d="M81.5 507.5c-4.7 2.9-10.3 4.5-15.9 4.5-4 0-7.7-1-10.9-2.7l245.3-256 68.7 68.7z" fill="#FF3D00"/>
                </svg>
                <div className="text-left font-body">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block leading-none">GET IT ON</span>
                  <span className="text-lg sm:text-xl font-extrabold text-white leading-tight">Google Play</span>
                </div>
              </a>

              {/* Official Apple App Store Button */}
              <a
                href="https://apps.apple.com/us/app/clean-culture/id6767485341"
                target="_blank"
                rel="noreferrer"
                onClick={triggerSideCannons}
                className="inline-flex items-center space-x-3.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 fill-white drop-shadow-md" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.78-8.08-12.28-15-4.5-6.91-8.16-14.78-10.98-23.6-2.83-8.83-4.25-17.43-4.25-25.82 0-12.98 3.31-23.75 9.94-32.32 6.63-8.56 15.1-12.9 25.4-13.01 4.58 0 9.77 1.25 15.58 3.75 5.8 2.5 9.74 3.79 11.81 3.86 1.74 0 5.85-1.39 12.33-4.18 6.47-2.79 11.96-3.99 16.46-3.6 12.18.98 21.6 5.56 28.28 13.73-10.88 6.64-16.22 15.74-16.01 27.29.22 9.03 3.65 16.59 10.3 22.68 6.64 6.09 14.54 9.53 23.68 10.33-2.17 6.42-4.8 12.82-7.87 19.21zM119.22 31.75c0-7.39 2.61-14.35 7.82-20.89 5.22-6.53 11.75-10.45 19.6-11.75.22 1.09.33 2.18.33 3.26 0 7.39-2.72 14.46-8.16 21.2-5.44 6.74-12.07 10.66-19.89 11.76-.11-1.09-.17-2.18-.17-3.26z"/>
                </svg>
                <div className="text-left font-body">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block leading-none">DOWNLOAD ON THE</span>
                  <span className="text-lg sm:text-xl font-extrabold text-white leading-tight">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── 9. BOTTOM TRUST BAR / TICKER (SCROLL ANIMATION AUTO PLAY WITH HOVER PAUSE) ── */}
        <section className="w-full bg-white border-y border-slate-200 py-4 overflow-hidden relative select-none marquee-container cursor-pointer">
          {/* Left and Right Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee Loop with Hover Pause */}
          <div className="flex w-max space-x-12 animate-marquee-left">
            {[...Array(4)].map((_, rep) => (
              <div key={rep} className="flex items-center space-x-12 shrink-0">
                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">End–to–end digital solutions</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">From idea to launch • Complete solutions under one roof</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">Quality–driven development</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">Modern &amp; reliable solutions • Built for performance and scalability</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">On–time delivery</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">Efficient project execution • Delivered with clarity and commitment</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">Client success</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">Turning ideas into successful products • Focused on value, results &amp; long-term growth</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 50s linear infinite;
        }
        .animate-marquee-left-fast {
          animation: marqueeLeft 38s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-left-fast,
        .animate-marquee-left:hover,
        .animate-marquee-left-fast:hover {
          animation-play-state: paused !important;
        }
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
        @keyframes borderGlowRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animated-solution-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .animated-solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px -5px rgba(59, 130, 246, 0.4);
        }
        .animated-solution-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 26px;
          padding: 2px;
          background: conic-gradient(from 0deg at 50% 50%, #2196E8, #60a5fa, transparent 60%, #2196E8);
          animation: borderGlowRotate 2.8s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 20;
        }
        @keyframes floatAmbient1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-14px) translateX(8px) rotate(8deg); }
        }
        @keyframes floatAmbient2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(16px) translateX(-10px) rotate(-10deg); }
        }
        @keyframes floatAmbient3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-10px) translateX(-8px) rotate(6deg); }
        }
        @keyframes floatAmbient4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(12px) translateX(10px) rotate(-8deg); }
        }
        .animate-float-1 { animation: floatAmbient1 4s ease-in-out infinite; }
        .animate-float-2 { animation: floatAmbient2 4.5s ease-in-out infinite; }
        .animate-float-3 { animation: floatAmbient3 3.8s ease-in-out infinite; }
        .animate-float-4 { animation: floatAmbient4 4.2s ease-in-out infinite; }

        @keyframes scopeBorderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .scope-animated-card {
          position: relative;
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 1.75rem;
          overflow: hidden;
          box-shadow: 0 4px 20px -2px rgba(33, 150, 232, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }
        .scope-animated-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px -4px rgba(33, 150, 232, 0.25);
        }
        .scope-animated-card::before {
          content: '';
          position: absolute;
          top: -65%;
          left: -65%;
          width: 230%;
          height: 230%;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 55%,
            #93c5fd 70%,
            #2196E8 85%,
            #0284c7 95%,
            transparent 100%
          );
          animation: scopeBorderRotate 3.5s linear infinite;
          z-index: -2;
        }
        .scope-animated-card::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: #ffffff;
          border-radius: calc(1.25rem - 2px);
          z-index: -1;
          border: 1px solid rgba(226, 232, 240, 0.85);
        }
      `}</style>
    </div>
  );
}
