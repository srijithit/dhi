"use client";

import React, { use, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Volume2,
  VolumeX,
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
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { detailedCaseStudies } from '@/data/caseStudiesFull';

export default function DynamicCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const study = detailedCaseStudies.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Find next and previous case studies for navigation
  const currentIndex = detailedCaseStudies.findIndex((s) => s.slug === resolvedParams.slug);
  const nextStudy = detailedCaseStudies[(currentIndex + 1) % detailedCaseStudies.length];
  const prevStudy = detailedCaseStudies[(currentIndex - 1 + detailedCaseStudies.length) % detailedCaseStudies.length];

  // Auto-advance slideshow if multiple images
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % 3), 4500);
    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  // Extract URLs from link field
  const playstoreMatch = study.link.match(/https:\/\/play\.google\.com[^\s]+/);
  const appstoreMatch = study.link.match(/https:\/\/apps\.apple\.com[^\s]+/);
  const generalUrlMatch = study.link.match(/https?:\/\/[^\s]+/);
  const primaryLiveUrl = generalUrlMatch ? generalUrlMatch[0] : null;

  const isMobileApp = study.category.toLowerCase().includes('app') || study.category.toLowerCase().includes('ecosystem') || !!playstoreMatch || !!appstoreMatch;

  // Derive highlight points for the experience section
  const actionPoints = study.results && study.results.length >= 3
    ? study.results.slice(0, 3)
    : study.solutionBullets && study.solutionBullets.length >= 3
    ? study.solutionBullets.slice(0, 3)
    : [
        `${study.title} engineered with sub-second performance & cloud scale`,
        'End-to-end automated digital workflow from discovery to completion',
        'Built with modern responsive UX & componentized design system',
      ];

  // Colors list for highlights grid
  const highlightColors = [
    { name: 'emerald', bg: 'bg-emerald-100 dark:bg-emerald-950/40', text: 'text-emerald-600 dark:text-emerald-400', icon: <RefreshCw className="w-6 h-6" /> },
    { name: 'blue', bg: 'bg-blue-100 dark:bg-blue-950/40', text: 'text-[#2196E8] dark:text-[#2196E8]', icon: <MapPin className="w-6 h-6" /> },
    { name: 'sky', bg: 'bg-sky-100 dark:bg-sky-950/40', text: 'text-sky-600 dark:text-sky-400', icon: <Route className="w-6 h-6" /> },
    { name: 'violet', bg: 'bg-violet-100 dark:bg-violet-950/40', text: 'text-violet-600 dark:text-violet-400', icon: <Coins className="w-6 h-6" /> },
    { name: 'amber', bg: 'bg-amber-100 dark:bg-amber-950/40', text: 'text-amber-600 dark:text-amber-400', icon: <Shield className="w-6 h-6" /> },
    { name: 'cyan', bg: 'bg-cyan-100 dark:bg-cyan-950/40', text: 'text-cyan-600 dark:text-cyan-400', icon: <MessageSquare className="w-6 h-6" /> },
  ];

  // Parse highlights into structured items
  const parsedHighlights = (study.highlights && study.highlights.length > 0 ? study.highlights : [
    "High-Performance Architecture — Optimized for sub-second responses and scalability.",
    "Intuitive User Journey — Frictionless navigation from discovery to checkout.",
    "Automated Workflows — Intelligent data processing and business logic integration.",
    "Enterprise Security — Protected APIs, role-based controls, and reliable SLAs.",
    "Multi-Device Experience — Seamless responsive UX tailored for mobile and desktop.",
    "24/7 Reliability & Monitoring — Continuous performance tracking and cloud uptime."
  ]).slice(0, 6).map((item, idx) => {
    const parts = item.split(/[:—–-]/);
    const title = parts[0]?.trim() || item;
    const desc = parts.length > 1 ? parts.slice(1).join('—').trim() : "Engineered for optimal user engagement and scalable performance.";
    const colorScheme = highlightColors[idx % highlightColors.length];
    return { title, desc, ...colorScheme };
  });

  // Generate numbered breakdown sections
  const solutionItems = (study.solutionBullets && study.solutionBullets.length > 3
    ? study.solutionBullets.filter(b => b.length > 15 && !b.endsWith(':')).slice(0, 8)
    : [
        "Interactive User Experience & Dynamic Interface Flow",
        "Automated Logic Engine & Real-Time State Management",
        "Secure Payment Integration & Seamless Checkout System",
        "Granular Real-Time Tracking & Notification Pipeline",
        "Administrative Dashboard & Centralized Analytics",
        "Scalable Cloud Backend Architecture & Sub-Second API Response"
      ]
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white font-body selection:bg-[#2196E8] selection:text-white transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top">

        {/* ── HERO SECTION ── */}
        <section className="relative py-16 sm:py-24 bg-white dark:bg-[#000000] border-b border-slate-100 dark:border-slate-800/80 overflow-hidden">
          {/* Background Watermark */}
          <div className="absolute right-0 top-1/3 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05] text-[140px] lg:text-[180px] font-extrabold tracking-widest text-[#2196E8] uppercase hidden lg:block font-body leading-none truncate max-w-full">
            {study.title}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

              {/* Left: Logo + title + narrative */}
              <div className="lg:col-span-6 space-y-5">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#2196E8] text-sm font-medium transition-colors mb-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to case studies</span>
                </Link>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center text-white font-extrabold text-2xl shrink-0 border-2 overflow-hidden"
                    style={{ backgroundColor: study.brandColor, borderColor: study.brandColor }}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-header uppercase">{study.title.charAt(0)}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2196E8] block mb-1">
                      {study.category} • Led by {study.tl || 'DhiGrowth Team'}
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-body">
                      {study.title} {isMobileApp ? 'App' : 'Platform'}
                    </h1>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line">
                  {study.about}
                </p>

                {/* Live Actions */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  {primaryLiveUrl && (
                    <a
                      href={primaryLiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
                      style={{ backgroundColor: study.brandColor }}
                    >
                      <span>Visit live product</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 font-bold text-sm transition-colors"
                  >
                    <span>Request similar project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Phone / Showcase slideshow */}
              <div className="lg:col-span-6 flex justify-center py-2">
                <div className="relative w-[300px] sm:w-[380px] group">
                  <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center drop-shadow-2xl">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-950 p-2 shadow-2xl">
                      <img
                        src={study.image}
                        alt={`${study.title} Preview Screen`}
                        className="w-full h-full object-cover rounded-2xl transition-all duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                          Product Showcase
                        </span>
                        <p className="font-header text-lg font-bold leading-tight">
                          {study.subtitle || study.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ARC DIVIDER ── */}
        <div className="w-full overflow-hidden leading-none bg-slate-50 dark:bg-[#070911] -mb-1">
          <svg
            className="relative block w-full h-12 sm:h-20 text-slate-950"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── VIDEO / EXPERIENCE OVERVIEW (DARK SECTION) ── */}
        <section className="w-full bg-slate-950 text-white pb-16 sm:pb-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left: Showcase Media Box */}
              <div className="lg:col-span-7">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-2 group bg-slate-900"
                  style={{ borderColor: study.brandColor }}
                >
                  <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Floating brand pill inside preview */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-0.5">
                          High Performance Architecture
                        </span>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-white font-body">
                          {study.title} Live Interface
                        </h4>
                      </div>
                      <div
                        className="px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-lg uppercase tracking-wider"
                        style={{ backgroundColor: study.brandColor }}
                      >
                        Live
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Feature bullet points */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight font-body">
                    Experience {study.title} in action
                  </h3>
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 object-cover shadow-xl shrink-0 flex items-center justify-center font-extrabold text-2xl text-white overflow-hidden"
                    style={{ backgroundColor: study.brandColor, borderColor: study.brandColor }}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-header">{study.title.charAt(0)}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {actionPoints.map((point, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm text-slate-200">
                      <Check
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: study.brandColor }}
                      />
                      <span className="font-medium leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PLATFORM HIGHLIGHTS (CARD GRID) ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#000000] dark:via-[#070911] dark:to-[#0b0f19] border-b border-slate-200 dark:border-slate-800 overflow-hidden relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[120px] pointer-events-none opacity-20"
            style={{ backgroundColor: study.brandColor }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-body">
                {study.title} platform highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {parsedHighlights.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#0b0f19] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg transition-all space-y-3 group hover:border-[#2196E8]"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base font-body">
                    {c.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REQUIREMENTS & FEATURE BREAKDOWN (ALTERNATING LEFT/RIGHT) ── */}
        <section className="py-16 bg-slate-50 dark:bg-[#070911] border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-body">
                {study.title} capabilities &amp; engineering
              </h2>
            </div>

            <div className="space-y-0">
              {/* Product Objective Banner */}
              <div className="w-full py-12 sm:py-16 border-b border-slate-200/80 dark:border-slate-800">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-[#0b0f19] p-3">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-700 max-h-[380px]"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-body">
                      Product objective
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                      {study.productExperience || study.about}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100/80 dark:border-emerald-900/40 flex items-start space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Sub-second loading</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Optimized for instant responsiveness and sub-second asset streaming.</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100/80 dark:border-blue-900/40 flex items-start space-x-3">
                        <div
                          className="w-9 h-9 rounded-xl text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                          style={{ backgroundColor: study.brandColor }}
                        >
                          <RefreshCw className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Smart cloud engine</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Automated workflow synchronization and enterprise-grade SLA reliability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternating Numbered Feature Sections */}
              {solutionItems.map((item, i) => {
                const isLeft = i % 2 === 0;
                const num = `${i + 4}.`;
                const title = item.includes(':') ? item.split(':')[0] : item;
                const desc = item.includes(':') ? item.split(':')[1] : `${study.title} integrates seamless user workflows, real-time validations, and clean interfaces designed to scale operations effortlessly.`;

                return (
                  <div
                    key={i}
                    className="w-full py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 dark:border-slate-800 last:border-0"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {isLeft ? (
                        <>
                          <div className="lg:col-span-5 flex justify-center items-center">
                            <div className="w-full bg-gradient-to-br from-blue-500/10 via-slate-100/40 to-slate-200/50 dark:from-[#0b0f19] dark:to-[#121927] rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-500 border border-slate-200 dark:border-slate-800 shadow-md">
                              <div
                                className="w-16 h-16 rounded-2xl text-white flex items-center justify-center text-3xl mx-auto shadow-md"
                                style={{ backgroundColor: study.brandColor }}
                              >
                                {i % 4 === 0 ? <Shield className="w-8 h-8" /> : i % 4 === 1 ? <Route className="w-8 h-8" /> : i % 4 === 2 ? <CalendarCheck className="w-8 h-8" /> : <Coins className="w-8 h-8" />}
                              </div>
                              <span className="text-sm font-extrabold uppercase tracking-wider block" style={{ color: study.brandColor }}>
                                {title}
                              </span>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                High-precision architecture &amp; frictionless user experience
                              </p>
                              <div className="flex justify-center gap-2 pt-1 flex-wrap">
                                <span className="px-3 py-1 bg-slate-900 dark:bg-slate-800 text-white rounded-lg text-xs font-bold">Fast</span>
                                <span className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold">Automated</span>
                                <span className="px-3 py-1 bg-sky-600 text-white rounded-lg text-xs font-bold">Secure</span>
                              </div>
                            </div>
                          </div>

                          <div className="lg:col-span-7 space-y-5">
                            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-body">
                              {num} {title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                              {desc}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center space-x-3">
                                <Layers className="w-4 h-4 text-[#2196E8]" />
                                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Componentized UI Architecture</span>
                              </div>
                              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center space-x-3">
                                <Cpu className="w-4 h-4 text-emerald-500" />
                                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Real-Time Cloud State Engine</span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
                            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-body">
                              {num} {title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                              {desc}
                            </p>

                            <div className="flex gap-3 pt-2 flex-wrap">
                              <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-bold">
                                Live Verified
                              </span>
                              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 rounded-xl text-xs font-bold">
                                99.9% Uptime
                              </span>
                              <span className="px-4 py-2 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-400 rounded-xl text-xs font-bold">
                                Cloud Scalable
                              </span>
                            </div>
                          </div>

                          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
                            <div className="w-full bg-gradient-to-br from-emerald-500/10 via-slate-100/40 to-slate-200/50 dark:from-[#0b0f19] dark:to-[#121927] rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-500 border border-slate-200 dark:border-slate-800 shadow-md">
                              <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-3xl mx-auto shadow-md">
                                <CheckCircle2 className="w-8 h-8" />
                              </div>
                              <span className="text-sm font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                                Verified Output
                              </span>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Seamless user flow and automated processing
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── APP / PLATFORM IS LIVE (CELEBRATORY CANNON SECTION) ── */}
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
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-25"
              style={{ backgroundColor: study.brandColor }}
            />
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-20 space-y-8">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl transition-all opacity-60"
                  style={{ backgroundColor: study.brandColor }}
                />
                <div
                  className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2 object-cover shadow-2xl transition hover:scale-105 overflow-hidden flex items-center justify-center font-extrabold text-4xl text-white"
                  style={{ backgroundColor: study.brandColor, borderColor: study.brandColor }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="font-header">{study.title.charAt(0)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-body">
                {study.title}
              </h2>
              <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
                {study.subtitle || study.about}
              </p>
            </div>

            <div className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-[#0A0F17] hover:bg-[#121B2B] border border-emerald-500/50 text-emerald-400 text-lg sm:text-xl font-extrabold shadow-[0_0_35px_rgba(16,185,129,0.35)] cursor-pointer transition hover:scale-105">
              <span className="text-2xl animate-bounce">🎉</span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent tracking-wide">
                {isMobileApp ? 'App is live!' : 'Platform is live!'}
              </span>
              <span className="text-2xl animate-bounce">🎉</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              {playstoreMatch && (
                <a
                  href={playstoreMatch[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-emerald-500/40 hover:border-emerald-400 text-white font-medium shadow-[0_0_25px_rgba(16,185,129,0.25)] transition transform hover:-translate-y-1"
                >
                  <svg className="w-7 h-7 text-emerald-400 fill-current" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1L472.2 359c16.1-9.2 27.2-26.6 27.2-46.7 0-20.1-11.1-37.5-27.2-46.7zm-207.1 52.1L104.6 499l220.7-126.7-60.1-60.1-24.4 24.4z" />
                  </svg>
                  <div className="text-left font-body">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block leading-none font-bold">GET IT ON</span>
                    <span className="text-lg font-extrabold text-white leading-tight">Google Play</span>
                  </div>
                </a>
              )}

              {appstoreMatch && (
                <a
                  href={appstoreMatch[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.1)] transition transform hover:-translate-y-1"
                >
                  <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.9-74.5-22.9-39.9 0-79.7 20.6-102.1 59.5-23 39.8-17.6 102.4 3.9 155.8 12.1 30.2 30 53.5 53 54.1 22.8.6 34.7-11.4 59.5-11.4 24.8 0 36.6 11.4 59.5 11.4 23.3-.6 41.2-21.2 53-38.2 15-21.4 22.4-44.4 22.7-45.6-1.1-.3-44.3-17.2-44.7-68.8zM245.5 81c22.4-24.6 37.5-58.8 31.3-93-29.4 1.2-65.4 19.6-86.5 44.6-18.8 22.4-35.3 56.8-29.3 89.8 32.5 1.2 65.7-18.4 84.5-41.4z" />
                  </svg>
                  <div className="text-left font-body">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block leading-none font-bold">DOWNLOAD ON THE</span>
                    <span className="text-lg font-extrabold text-white leading-tight">App Store</span>
                  </div>
                </a>
              )}

              {primaryLiveUrl && !playstoreMatch && !appstoreMatch && (
                <a
                  href={primaryLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-[#2196E8]/40 hover:border-[#2196E8] text-white font-medium shadow-[0_0_25px_rgba(33,150,232,0.25)] transition transform hover:-translate-y-1"
                >
                  <Globe className="w-6 h-6 text-[#2196E8]" />
                  <div className="text-left font-body">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block leading-none font-bold">VISIT LIVE WEBSITE</span>
                    <span className="text-lg font-extrabold text-white leading-tight">Launch Platform</span>
                  </div>
                </a>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition transform hover:-translate-y-1"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span className="text-base font-bold">Build Similar Platform</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SHOWCASE BANNER & PREV / NEXT NAVIGATION ── */}
        <section className="w-full bg-[#05080C] py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="group flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all w-full sm:w-auto"
            >
              <ChevronLeft className="w-5 h-5 text-[#2196E8] group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Previous case study</span>
                <span className="font-bold text-sm sm:text-base">{prevStudy.title}</span>
              </div>
            </Link>

            <Link
              href="/case-studies"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#2196E8] transition-colors"
            >
              View all case studies
            </Link>

            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group flex items-center justify-end gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all w-full sm:w-auto text-right"
            >
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Next case study</span>
                <span className="font-bold text-sm sm:text-base">{nextStudy.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#2196E8] group-hover:translate-x-1 transition-transform" />
            </Link>
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
