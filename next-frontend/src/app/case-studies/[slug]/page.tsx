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

  // Helper to capitalize words
  const capitalizeText = (text: string) => {
    if (!text) return '';
    return text.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
  };

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
        `${study.title} Engineered With Sub-Second Performance And Cloud Scale`,
        'End-To-End Automated Digital Workflow From Discovery To Completion',
        'Built With Modern Responsive UX And Componentized Design System',
      ];

  // Colors list for highlights grid (Blue & White Theme)
  const highlightColors = [
    { name: 'blue', bg: 'bg-blue-50', text: 'text-[#2196E8]', icon: <RefreshCw className="w-6 h-6" /> },
    { name: 'sky', bg: 'bg-sky-50', text: 'text-sky-600', icon: <MapPin className="w-6 h-6" /> },
    { name: 'emerald', bg: 'bg-emerald-50', text: 'text-emerald-600', icon: <Route className="w-6 h-6" /> },
    { name: 'indigo', bg: 'bg-indigo-50', text: 'text-indigo-600', icon: <Coins className="w-6 h-6" /> },
    { name: 'blue-dark', bg: 'bg-blue-50', text: 'text-[#4A72EB]', icon: <Shield className="w-6 h-6" /> },
    { name: 'cyan', bg: 'bg-cyan-50', text: 'text-cyan-600', icon: <MessageSquare className="w-6 h-6" /> },
  ];

  // Parse highlights into structured items
  const parsedHighlights = (study.highlights && study.highlights.length > 0 ? study.highlights : [
    "High-Performance Architecture — Optimized For Sub-Second Responses And Scalability.",
    "Intuitive User Journey — Frictionless Navigation From Discovery To Checkout.",
    "Automated Workflows — Intelligent Data Processing And Business Logic Integration.",
    "Enterprise Security — Protected APIs, Role-Based Controls, And Reliable SLAs.",
    "Multi-Device Experience — Seamless Responsive UX Tailored For Mobile And Desktop.",
    "24/7 Reliability And Monitoring — Continuous Performance Tracking And Cloud Uptime."
  ]).slice(0, 6).map((item, idx) => {
    const parts = item.split(/[:—–-]/);
    const title = parts[0]?.trim() || item;
    const desc = parts.length > 1 ? parts.slice(1).join('—').trim() : "Engineered For Optimal User Engagement And Scalable Performance.";
    const colorScheme = highlightColors[idx % highlightColors.length];
    return { title: capitalizeText(title), desc, ...colorScheme };
  });

  // Generate numbered breakdown sections
  const solutionItems = (study.solutionBullets && study.solutionBullets.length > 3
    ? study.solutionBullets.filter(b => b.length > 15 && !b.endsWith(':')).slice(0, 8)
    : [
        "Interactive User Experience And Dynamic Interface Flow",
        "Automated Logic Engine And Real-Time State Management",
        "Secure Payment Integration And Seamless Checkout System",
        "Granular Real-Time Tracking And Notification Pipeline",
        "Administrative Dashboard And Centralized Analytics",
        "Scalable Cloud Backend Architecture And Sub-Second API Response"
      ]
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body selection:bg-[#2196E8] selection:text-white">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top font-body bg-white">

        {/* ── HERO SECTION (BLUE & WHITE THEME) ── */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-slate-50/30 to-white border-b border-blue-100/60 overflow-hidden font-body">
          {/* Subtle Radial Blue Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#2196E8]/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

              {/* Left: Logo + title + narrative */}
              <div className="lg:col-span-6 space-y-5">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2196E8] text-sm font-semibold transition-colors mb-1 font-body"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back To Case Studies</span>
                </Link>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center text-white font-extrabold text-2xl shrink-0 border-2 overflow-hidden font-body bg-[#2196E8] border-[#2196E8]"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-body font-extrabold">{study.title.charAt(0)}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wide text-[#2196E8] block mb-1 font-body">
                      {capitalizeText(study.category)}
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-body">
                      {capitalizeText(study.title)} <span className="text-[#2196E8]">{isMobileApp ? 'Mobile App' : 'Platform'}</span>
                    </h1>
                  </div>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line font-body">
                  {study.about}
                </p>

                {/* Live Actions */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2 font-body">
                  {primaryLiveUrl && (
                    <a
                      href={primaryLiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer font-body bg-[#2196E8] hover:bg-blue-600"
                    >
                      <span>Visit Live Product</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 font-bold text-sm transition-colors font-body"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Phone / Showcase slideshow */}
              <div className="lg:col-span-6 flex justify-center py-2">
                <div className="relative w-[300px] sm:w-[380px] group">
                  <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center drop-shadow-2xl">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-950 p-2 shadow-2xl">
                      <img
                        src={study.image}
                        alt={`${study.title} Preview Screen`}
                        className="w-full h-full object-cover rounded-2xl transition-all duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
                      <div className="absolute bottom-4 left-4 right-4 text-white font-body">
                        <span className="text-[10px] font-bold tracking-wide text-slate-300 block mb-1">
                          Product Showcase
                        </span>
                        <p className="font-body text-lg font-bold leading-tight">
                          {capitalizeText(study.subtitle || study.title)}
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
        <div className="w-full overflow-hidden leading-none bg-slate-50 -mb-1">
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
        <section className="w-full bg-slate-950 text-white pb-16 sm:pb-24 border-b border-slate-800 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left: Showcase Media Box */}
              <div className="lg:col-span-7">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-2 group bg-slate-900 border-[#2196E8]/50"
                >
                  <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Floating brand pill inside preview */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 font-body">
                      <div>
                        <span className="text-xs font-bold tracking-wide text-slate-300 block mb-0.5">
                          High Performance Architecture
                        </span>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-white font-body">
                          {capitalizeText(study.title)} Live Interface
                        </h4>
                      </div>
                      <div
                        className="px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-lg tracking-wide font-body bg-[#2196E8]"
                      >
                        Live Study
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Feature bullet points */}
              <div className="lg:col-span-5 space-y-6 font-body">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight font-body">
                    Experience {capitalizeText(study.title)} In Action
                  </h3>
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 object-cover shadow-xl shrink-0 flex items-center justify-center font-extrabold text-2xl text-white overflow-hidden font-body bg-[#2196E8] border-[#2196E8]"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-body font-extrabold">{study.title.charAt(0)}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2 font-body">
                  {actionPoints.map((point, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm text-slate-200 font-body">
                      <Check
                        className="w-5 h-5 shrink-0 mt-0.5 text-[#2196E8]"
                      />
                      <span className="font-medium leading-relaxed">{capitalizeText(point)}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PLATFORM HIGHLIGHTS (CARD GRID) ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 border-b border-slate-200 overflow-hidden relative font-body">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[120px] pointer-events-none opacity-15 bg-[#2196E8]"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wide text-[#2196E8] block mb-2 font-body">
                Key Highlights
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                {capitalizeText(study.title)} Platform Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-body">
              {parsedHighlights.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all space-y-3 group hover:border-[#2196E8] font-body"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base font-body group-hover:text-[#2196E8] transition-colors">
                    {capitalizeText(c.title)}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-body">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REQUIREMENTS & FEATURE BREAKDOWN (ALTERNATING LEFT/RIGHT) ── */}
        <section className="py-16 bg-slate-50 border-t border-slate-200 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 font-body">
              <span className="text-xs font-bold tracking-wide text-[#2196E8] block mb-2 font-body">
                Engineering Deep Dive
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                {capitalizeText(study.title)} Capabilities &amp; Engineering
              </h2>
            </div>

            <div className="space-y-0 font-body">
              {/* Product Objective Banner */}
              <div className="w-full py-12 sm:py-16 border-b border-slate-200 font-body">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-700 max-h-[380px]"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6 font-body">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-body">
                      Product Objective
                    </h3>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                      {study.productExperience || study.about}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-body">
                      <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-start space-x-3 shadow-sm">
                        <div className="w-9 h-9 rounded-xl bg-[#2196E8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 font-body">Sub-Second Loading</h4>
                          <p className="text-xs text-slate-600 mt-0.5 font-body">Optimized For Instant Responsiveness And Sub-Second Asset Streaming.</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-start space-x-3 shadow-sm">
                        <div
                          className="w-9 h-9 rounded-xl text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm bg-[#4A72EB]"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 font-body">Smart Cloud Engine</h4>
                          <p className="text-xs text-slate-600 mt-0.5 font-body">Automated Workflow Synchronization And Enterprise-Grade SLA Reliability.</p>
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
                const desc = item.includes(':') ? item.split(':')[1] : `${study.title} Integrates Seamless User Workflows, Real-Time Validations, And Clean Interfaces Designed To Scale Operations Effortlessly.`;

                return (
                  <div
                    key={i}
                    className="w-full py-12 sm:py-16 lg:py-20 border-b border-slate-200 last:border-0 font-body"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {isLeft ? (
                        <>
                          <div className="lg:col-span-5 flex justify-center items-center">
                            <div className="w-full bg-gradient-to-br from-blue-500/10 via-slate-100/40 to-slate-200/50 rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-500 border border-slate-200 shadow-md font-body">
                              <div
                                className="w-16 h-16 rounded-2xl text-white flex items-center justify-center text-3xl mx-auto shadow-md font-body bg-[#2196E8]"
                              >
                                {i % 4 === 0 ? <Shield className="w-8 h-8" /> : i % 4 === 1 ? <Route className="w-8 h-8" /> : i % 4 === 2 ? <CalendarCheck className="w-8 h-8" /> : <Coins className="w-8 h-8" />}
                              </div>
                              <span className="text-sm font-extrabold tracking-wide block font-body text-[#2196E8]">
                                {capitalizeText(title)}
                              </span>
                              <p className="text-xs text-slate-600 font-body">
                                High-Precision Architecture And Frictionless User Experience
                              </p>
                              <div className="flex justify-center gap-2 pt-1 flex-wrap font-body">
                                <span className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-bold font-body">Fast</span>
                                <span className="px-3 py-1 bg-[#2196E8] text-white rounded-lg text-xs font-bold font-body">Automated</span>
                                <span className="px-3 py-1 bg-sky-600 text-white rounded-lg text-xs font-bold font-body">Secure</span>
                              </div>
                            </div>
                          </div>

                          <div className="lg:col-span-7 space-y-5 font-body">
                            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-body">
                              {num} {capitalizeText(title)}
                            </h3>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                              {desc}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-body">
                              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center space-x-3 shadow-sm">
                                <Layers className="w-4 h-4 text-[#2196E8]" />
                                <span className="font-semibold text-slate-800 text-sm font-body">Componentized UI Architecture</span>
                              </div>
                              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center space-x-3 shadow-sm">
                                <Cpu className="w-4 h-4 text-[#4A72EB]" />
                                <span className="font-semibold text-slate-800 text-sm font-body">Real-Time Cloud State Engine</span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1 font-body">
                            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-body">
                              {num} {capitalizeText(title)}
                            </h3>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                              {desc}
                            </p>

                            <div className="flex gap-3 pt-2 flex-wrap font-body">
                              <span className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl text-xs font-bold font-body shadow-sm">
                                Live Verified
                              </span>
                              <span className="px-4 py-2 bg-sky-50 border border-sky-200 text-sky-700 rounded-xl text-xs font-bold font-body shadow-sm">
                                99.9% Uptime
                              </span>
                              <span className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-xl text-xs font-bold font-body shadow-sm">
                                Cloud Scalable
                              </span>
                            </div>
                          </div>

                          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
                            <div className="w-full bg-gradient-to-br from-blue-500/10 via-slate-100/40 to-slate-200/50 rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-500 border border-slate-200 shadow-md font-body">
                              <div className="w-16 h-16 rounded-2xl bg-[#2196E8] text-white flex items-center justify-center text-3xl mx-auto shadow-md font-body">
                                <CheckCircle2 className="w-8 h-8" />
                              </div>
                              <span className="text-sm font-extrabold tracking-wide text-[#2196E8] block font-body">
                                Verified Output
                              </span>
                              <p className="text-xs text-slate-600 font-body">
                                Seamless User Flow And Automated Processing
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
        <section className="py-20 bg-[#05080C] text-white relative overflow-hidden w-full font-body">
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-25 bg-[#2196E8]"
            />
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-20 space-y-8 font-body">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl transition-all opacity-60 bg-[#2196E8]"
                />
                <div
                  className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2 object-cover shadow-2xl transition hover:scale-105 overflow-hidden flex items-center justify-center font-extrabold text-4xl text-white font-body bg-[#2196E8] border-[#2196E8]"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="font-body font-extrabold">{study.title.charAt(0)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 font-body">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-body">
                {capitalizeText(study.title)}
              </h2>
              <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-body">
                {capitalizeText(study.subtitle || study.about)}
              </p>
            </div>

            <div className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-[#0A0F17] hover:bg-[#121B2B] border border-blue-500/50 text-[#2196E8] text-lg sm:text-xl font-extrabold shadow-[0_0_35px_rgba(33,150,232,0.35)] cursor-pointer transition hover:scale-105 font-body">
              <span className="text-2xl animate-bounce">🎉</span>
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent tracking-wide font-body">
                {isMobileApp ? 'App Is Live!' : 'Platform Is Live!'}
              </span>
              <span className="text-2xl animate-bounce">🎉</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-4 font-body">
              {playstoreMatch && (
                <a
                  href={playstoreMatch[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-blue-500/40 hover:border-blue-400 text-white font-medium shadow-[0_0_25px_rgba(33,150,232,0.25)] transition transform hover:-translate-y-1 font-body"
                >
                  <svg className="w-7 h-7 text-[#2196E8] fill-current" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1L472.2 359c16.1-9.2 27.2-26.6 27.2-46.7 0-20.1-11.1-37.5-27.2-46.7zm-207.1 52.1L104.6 499l220.7-126.7-60.1-60.1-24.4 24.4z" />
                  </svg>
                  <div className="text-left font-body">
                    <span className="text-[10px] tracking-wide text-slate-400 block leading-none font-bold font-body">Get It On</span>
                    <span className="text-lg font-extrabold text-white leading-tight font-body">Google Play</span>
                  </div>
                </a>
              )}

              {appstoreMatch && (
                <a
                  href={appstoreMatch[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.1)] transition transform hover:-translate-y-1 font-body"
                >
                  <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.9-74.5-22.9-39.9 0-79.7 20.6-102.1 59.5-23 39.8-17.6 102.4 3.9 155.8 12.1 30.2 30 53.5 53 54.1 22.8.6 34.7-11.4 59.5-11.4 24.8 0 36.6 11.4 59.5 11.4 23.3-.6 41.2-21.2 53-38.2 15-21.4 22.4-44.4 22.7-45.6-1.1-.3-44.3-17.2-44.7-68.8zM245.5 81c22.4-24.6 37.5-58.8 31.3-93-29.4 1.2-65.4 19.6-86.5 44.6-18.8 22.4-35.3 56.8-29.3 89.8 32.5 1.2 65.7-18.4 84.5-41.4z" />
                  </svg>
                  <div className="text-left font-body">
                    <span className="text-[10px] tracking-wide text-slate-400 block leading-none font-bold font-body">Download On The</span>
                    <span className="text-lg font-extrabold text-white leading-tight font-body">App Store</span>
                  </div>
                </a>
              )}

              {primaryLiveUrl && !playstoreMatch && !appstoreMatch && (
                <a
                  href={primaryLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-[#2196E8]/40 hover:border-[#2196E8] text-white font-medium shadow-[0_0_25px_rgba(33,150,232,0.25)] transition transform hover:-translate-y-1 font-body"
                >
                  <Globe className="w-6 h-6 text-[#2196E8]" />
                  <div className="text-left font-body">
                    <span className="text-[10px] tracking-wide text-slate-400 block leading-none font-bold font-body">Visit Live Website</span>
                    <span className="text-lg font-extrabold text-white leading-tight font-body">Launch Platform</span>
                  </div>
                </a>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition transform hover:-translate-y-1 font-body"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span className="text-base font-bold font-body">Build Similar Platform</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SHOWCASE BANNER & PREV / NEXT NAVIGATION ── */}
        <section className="w-full bg-[#05080C] py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900 font-body">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-body">
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="group flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all w-full sm:w-auto font-body"
            >
              <ChevronLeft className="w-5 h-5 text-[#2196E8] group-hover:-translate-x-1 transition-transform" />
              <div className="text-left font-body">
                <span className="text-[11px] tracking-wide text-slate-400 block font-body">Previous Case Study</span>
                <span className="font-bold text-sm sm:text-base font-body">{capitalizeText(prevStudy.title)}</span>
              </div>
            </Link>

            <Link
              href="/case-studies"
              className="text-xs font-bold tracking-wide text-slate-400 hover:text-[#2196E8] transition-colors font-body"
            >
              View All Case Studies
            </Link>

            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group flex items-center justify-end gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all w-full sm:w-auto text-right font-body"
            >
              <div className="text-right font-body">
                <span className="text-[11px] tracking-wide text-slate-400 block font-body">Next Case Study</span>
                <span className="font-bold text-sm sm:text-base font-body">{capitalizeText(nextStudy.title)}</span>
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
