"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { caseStudies, CaseStudy } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      <main className="pt-[80px] pb-24 font-body">
        {/* Hero Section */}
        <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-slate-50/70 dark:bg-[#070911]/50 border-b border-slate-200/60 dark:border-slate-800/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#2196E8]/10 dark:bg-[#2196E8]/15 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2196E8]/10 dark:bg-[#2196E8]/20 border border-[#2196E8]/30 text-[#2196E8] text-xs font-semibold tracking-wider font-body"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto"
            >
              Case studies and <span className="text-[#2196E8] whitespace-nowrap">success stories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-body"
            >
              Explore how DhiGrowth helps businesses leverage artificial intelligence and modern digital solutions to solve complex challenges and achieve remarkable growth.
            </motion.p>
          </div>
        </section>

        {/* Case Studies Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center mb-12 sm:mb-14">
            <span className="text-xs font-bold tracking-wide text-[#2196E8] block font-body">
              Our work
            </span>
            <h2 className="font-body text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured case studies
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
            {caseStudies.map((study) => {
                const cardContent = (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-[32px] overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.03] hover:border-[#2196E8] hover:shadow-[0_20px_40px_-10px_rgba(33,150,232,0.25)] relative h-full cursor-pointer"
                    onClick={() => {
                      if (!study.slug) {
                        setActiveModalStudy(study);
                      }
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-64 overflow-hidden p-2.5">
                      <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="object-cover w-full h-full group-hover:scale-108 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
                      </div>

                      {/* Tag Badge */}
                      <div className="absolute top-6 left-6 bg-black/65 backdrop-blur-md text-white font-semibold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border border-white/20 tracking-wide shadow-sm font-body">
                        {study.category}
                      </div>

                      {study.slug && (
                        <div className="absolute top-6 right-6 bg-emerald-500/90 text-white font-semibold text-[10px] px-3 py-1 rounded-full border border-emerald-400/30 tracking-wide shadow-sm font-body">
                          Live study
                        </div>
                      )}
                    </div>

                    {/* Card Details */}
                    <div className="p-6 sm:p-7 flex flex-col gap-3 flex-grow">
                      <h3 className="font-body text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#2196E8] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-[15px] line-clamp-4 leading-relaxed font-body">
                        {study.description}
                      </p>

                      {/* Bottom Link in Sentence Case */}
                      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2196E8] group-hover:text-blue-500 transition-colors font-body">
                          <span>Read case study</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                        </span>
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

        {/* Detailed Modal for Non-Slugs / Quick Overview */}
        <AnimatePresence>
          {activeModalStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-body">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between">
                  <span className="bg-[#2196E8]/10 text-[#2196E8] border border-[#2196E8]/20 px-3.5 py-1 rounded-full text-xs font-semibold font-body">
                    {activeModalStudy.category}
                  </span>
                  <button
                    onClick={() => setActiveModalStudy(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                {/* Modal Image */}
                <div className="w-full h-64 rounded-2xl overflow-hidden relative">
                  <img
                    src={activeModalStudy.image}
                    alt={activeModalStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="space-y-3">
                  <h3 className="font-body text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {activeModalStudy.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                    {activeModalStudy.description}
                  </p>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto flex-1 bg-[#2196E8] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl text-center text-sm shadow-md shadow-[#2196E8]/25 transition-colors font-body"
                  >
                    Discuss similar project
                  </Link>
                  <button
                    onClick={() => setActiveModalStudy(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 text-sm font-semibold transition-colors cursor-pointer font-body"
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
