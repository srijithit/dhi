"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { caseStudies, CaseStudy } from '@/data/caseStudies';

const CASE_STUDY_LOGOS: Record<string, string> = {
  'clean-culture': '/images/case-studies/logos/clean_culture.png',
  'infragen': '/images/case-studies/logos/infragen.png',
  'verdurepax': '/images/case-studies/logos/verdurepax.png',
  'befhue': '/images/case-studies/logos/befhue.png',
  'squirlio': '/images/case-studies/logos/squirlio.png',
  'ruts-n-rides': '/images/case-studies/logos/ruts-n-rides.png',
  'ruts-n-rides-admin': '/images/case-studies/logos/ruts-n-rides.png',
  'nestpilot': '/images/case-studies/logos/nestpilot.png',
  'amaravathy-coir': '/images/case-studies/logos/amaravathy.png',
  'amaravathy': '/images/case-studies/logos/amaravathy.png',
  'keystone': '/images/case-studies/logos/kiipl.png',
  'kiipl': '/images/case-studies/logos/kiipl.png',
  'gigabull': '/images/case-studies/logos/gigabull.png',
  'sanikas-restaurant': '/images/case-studies/logos/sanikas.png',
  'akirva': '/images/case-studies/logos/akirva.png',
  'judah': '/images/case-studies/logos/judah.png',
  'startten': '/images/case-studies/logos/startten.png',
  'thoorigai': '/images/case-studies/logos/thoorigai.png',
  'sales-app': '/images/case-studies/logos/clean_culture.png',
  'vectra-mechnovations': '/images/case-studies/logos/kiipl.png',
  'splendour-park': '/images/case-studies/logos/startten.ico',
  'bad-biscuit-detection': '/images/case-studies/logos/infragen.png',
  'fabric-defect-detection': '/images/case-studies/logos/infragen.png',
  'dhigrowth-ai-chatbot': '/images/case-studies/logos/clean_culture.png',
  'ai-invoice-processing': '/images/case-studies/logos/infragen.png',
};

export default function CaseStudiesPage() {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  // Helper to ensure proper capitalization of headings & tags
  const capitalizeText = (text: string) => {
    if (!text) return '';
    return text.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#2196E8] selection:text-white font-body">
      <CustomCursor />
      <Navbar />

      <main className="pt-[80px] pb-24 font-body bg-white">
        
        {/* ── HERO SECTION (MATCHING SERVICES HERO THEME & FONT) ── */}
        <section className="relative py-24 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-white overflow-hidden bg-dot-matrix border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2196E8]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-bold text-sm tracking-widest block font-body">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wide leading-none text-slate-900 dark:text-white">
              Case Studies &amp; <span className="text-[#2196E8]">Success Stories</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-350 text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
              Explore how DhiGrowth helps businesses scale with high-performance web apps, AI automation, and result-driven digital marketing.
            </p>
          </div>
        </section>

        {/* ── CASE STUDIES GRID SECTION ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          
          {/* Section Header */}
          <div className="flex flex-col items-center gap-2 text-center mb-12 sm:mb-14">
            <span className="text-xs font-bold tracking-wide text-[#2196E8] block font-body">
              Our Portfolio
            </span>
            <h2 className="font-body text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
            {caseStudies.map((study) => {
              const brandLogo = CASE_STUDY_LOGOS[study.slug || study.id];

              const cardContent = (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-slate-200/90 rounded-[28px] overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-[#2196E8] hover:shadow-[0_20px_45px_-10px_rgba(33,150,232,0.22)] relative h-full cursor-pointer shadow-sm"
                  onClick={() => {
                    if (!study.slug) {
                      setActiveModalStudy(study);
                    }
                  }}
                >
                  {/* Image Container with Brand Logo Presentation */}
                  <div className="relative w-full h-64 overflow-hidden p-2.5">
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center border border-slate-800/80 shadow-inner">
                      {study.image && !study.image.includes('placeholder') && (
                        <img
                          src={study.image}
                          alt={study.title}
                          className="absolute inset-0 object-cover w-full h-full opacity-35 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 blur-[0.5px] group-hover:blur-0 select-none"
                          loading="lazy"
                        />
                      )}
                      
                      {/* Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />

                      {/* Brand Official Logo Centered in High-Gloss Glass Emblem */}
                      {brandLogo ? (
                        <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-2xl border border-white/70 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                          <img
                            src={brandLogo}
                            alt={`${study.title} Logo`}
                            className="max-w-full max-h-full object-contain drop-shadow-sm select-none"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="relative z-10 text-xl font-extrabold text-white font-body tracking-wider uppercase px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                          {study.title}
                        </div>
                      )}
                    </div>

                    {/* Tag Badge (Capitalized Blue Pill) */}
                    <div className="absolute top-5 left-5 bg-slate-900/90 backdrop-blur-md text-white font-bold text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full border border-white/20 tracking-wide shadow-md font-body z-20">
                      {capitalizeText(study.category)}
                    </div>

                    {study.underConstruction ? (
                      <div className="absolute top-5 right-5 bg-amber-500 text-white font-bold text-[10px] px-3 py-1 rounded-full border border-amber-400/40 tracking-wide shadow-md font-body flex items-center gap-1.5 z-20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>Under Construction</span>
                      </div>
                    ) : study.slug ? (
                      <div className="absolute top-5 right-5 bg-emerald-500 text-white font-bold text-[10px] px-3 py-1 rounded-full border border-emerald-400/40 tracking-wide shadow-md font-body flex items-center gap-1.5 z-20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>Live Study</span>
                      </div>
                    ) : null}
                  </div>

                  {/* Card Details */}
                  <div className="p-6 sm:p-7 flex flex-col gap-3 flex-grow bg-white">
                    <h3 className="font-body text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#2196E8] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-[15px] line-clamp-4 leading-relaxed font-body">
                      {study.description}
                    </p>

                    {/* Bottom Link */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      {study.underConstruction ? (
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 group-hover:text-amber-700 transition-colors font-body">
                          <span>Case Study Under Construction</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2196E8] group-hover:text-blue-600 transition-colors font-body">
                          <span>Read Case Study</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );

              if (study.slug) {
                return (
                  <Link
                    key={study.id}
                    href={`/case-studies/${study.slug}`}
                    className="h-full block focus:outline-none"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div key={study.id} className="h-full block">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── MODAL (BLUE & WHITE THEME) ── */}
        <AnimatePresence>
          {activeModalStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm font-body">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between">
                  <span className="bg-[#2196E8]/10 text-[#2196E8] border border-[#2196E8]/20 px-4 py-1 rounded-full text-xs font-bold font-body">
                    {capitalizeText(activeModalStudy.category)}
                  </span>
                  <button
                    onClick={() => setActiveModalStudy(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer text-lg font-bold"
                  >
                    &times;
                  </button>
                </div>

                {/* Modal Image */}
                <div className="w-full h-64 rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner">
                  <img
                    src={activeModalStudy.image}
                    alt={activeModalStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="space-y-3">
                  <h3 className="font-body text-2xl sm:text-3xl font-bold text-slate-900">
                    {activeModalStudy.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                    {activeModalStudy.description}
                  </p>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto flex-1 bg-[#2196E8] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-center text-sm shadow-md shadow-[#2196E8]/25 transition-colors font-body"
                  >
                    Discuss Similar Project
                  </Link>
                  <button
                    onClick={() => setActiveModalStudy(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-bold transition-colors cursor-pointer font-body"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
