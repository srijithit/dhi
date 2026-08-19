"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Target,
  ShieldCheck,
  Zap,
  Globe,
  Share2,
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

  // Find next and previous case studies
  const currentIndex = detailedCaseStudies.findIndex((s) => s.slug === resolvedParams.slug);
  const nextStudy = detailedCaseStudies[(currentIndex + 1) % detailedCaseStudies.length];
  const prevStudy = detailedCaseStudies[(currentIndex - 1 + detailedCaseStudies.length) % detailedCaseStudies.length];

  // Extract clean link URL if it contains https
  const urlMatch = study.link.match(/https?:\/\/[^\s]+/);
  const primaryLiveUrl = urlMatch ? urlMatch[0] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white font-body selection:bg-[#2196E8] selection:text-white transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      <main className="pt-[80px] pb-24 font-body">
        
        {/* ── HERO SECTION ── */}
        <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-slate-50/80 dark:bg-[#070911]/60 border-b border-slate-200/80 dark:border-slate-800/80">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20 dark:opacity-25"
            style={{ backgroundColor: study.brandColor }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#2196E8] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to case studies</span>
              </Link>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-semibold hidden sm:inline-block">
                  Led by {study.tl || 'DhiGrowth Team'}
                </span>
                <div
                  className="px-3.5 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-sm"
                  style={{ backgroundColor: study.brandColor }}
                >
                  {study.category}
                </div>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2196E8] block">
                    Featured case study
                  </span>
                  <h1 className="font-header text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight">
                    {study.title}
                  </h1>
                  {study.subtitle && study.subtitle !== study.title && (
                    <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                      {study.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-body">
                  {study.about}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {primaryLiveUrl && (
                    <a
                      href={primaryLiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm shadow-lg hover:opacity-90 transition-all cursor-pointer"
                      style={{ backgroundColor: study.brandColor }}
                    >
                      <span>Visit live product</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 font-bold text-sm transition-colors"
                  >
                    <span>Request similar project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Featured Hero Visual */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f19] p-3 shadow-2xl">
                  <div className="relative h-72 sm:h-96 w-full rounded-[24px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        Architecture &amp; UX
                      </span>
                      <p className="font-header text-lg sm:text-xl font-bold leading-tight">
                        Built for speed, scale &amp; reliability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── KEY METRICS / HIGHLIGHTS ── */}
        <section className="py-12 bg-white dark:bg-[#000000] border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2196E8]">
                  <Zap className="w-4 h-4" />
                  <span>Performance</span>
                </div>
                <div className="font-header text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  &lt; 0.8s
                </div>
                <p className="text-xs text-slate-500 font-medium">Sub-second response</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Reliability</span>
                </div>
                <div className="font-header text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  99.9%
                </div>
                <p className="text-xs text-slate-500 font-medium">Uptime &amp; cloud SLA</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-500">
                  <Layers className="w-4 h-4" />
                  <span>Frontend UI</span>
                </div>
                <div className="font-header text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  100%
                </div>
                <p className="text-xs text-slate-500 font-medium">Responsive &amp; componentized</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>Scalability</span>
                </div>
                <div className="font-header text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Multi-Tier
                </div>
                <p className="text-xs text-slate-500 font-medium">Cloud architecture</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGE & SOLUTIONS ── */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* The Challenge */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>The challenge</span>
              </div>
              <h2 className="font-header text-2xl sm:text-4xl text-slate-900 dark:text-white">
                Overcoming operational friction &amp; complexity
              </h2>
              <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  {study.challenges || 'Managing complex workflows, disparate data formats, and multi-user interactions required an intuitive, frictionless digital experience without sacrificing precision or performance.'}
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our solution</span>
              </div>
              <h2 className="font-header text-2xl sm:text-4xl text-slate-900 dark:text-white">
                Engineered for clarity, automation &amp; conversion
              </h2>

              <div className="space-y-3.5">
                {study.solutionBullets && study.solutionBullets.length > 0 ? (
                  study.solutionBullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-4 shadow-sm hover:border-[#2196E8] transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {study.solutions}
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* ── HIGHLIGHTS & PRODUCT EXPERIENCE ── */}
        {(study.productExperience || (study.highlights && study.highlights.length > 0)) && (
          <section className="py-16 bg-slate-50/70 dark:bg-[#070911]/50 border-y border-slate-200/80 dark:border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2196E8] block">
                  Product experience
                </span>
                <h2 className="font-header text-2xl sm:text-4xl text-slate-900 dark:text-white">
                  Key features &amp; architectural highlights
                </h2>
                {study.productExperience && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {study.productExperience}
                  </p>
                )}
              </div>

              {study.highlights && study.highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {study.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 hover:border-[#2196E8] hover:shadow-xl transition-all duration-300 space-y-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#2196E8]/10 text-[#2196E8] flex items-center justify-center font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <h3 className="font-header text-lg font-bold text-slate-900 dark:text-white">
                        {highlight.split(/[:—–-]/)[0]}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {highlight.includes(':') ? highlight.split(':')[1] : highlight}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── TECHNOLOGY STACK & SCOPE ── */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technology stack</span>
              </div>
              <h2 className="font-header text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Modern tools &amp; frameworks
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {study.techStack && study.techStack.length > 0 ? (
                  study.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold font-body shadow-sm"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold font-body"
                    >
                      {tech}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Scope / Modules Delivered */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Deliverables &amp; scope</span>
              </div>
              <h2 className="font-header text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Scope of engineering &amp; design
              </h2>
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line shadow-sm">
                {study.scope || 'Comprehensive UI/UX design, component library architecture, responsive client interface, secure API integrations, and continuous deployment workflows.'}
              </div>
            </div>

          </div>
        </section>

        {/* ── RESULTS & OUTCOMES ── */}
        {study.results && study.results.length > 0 && (
          <section className="py-16 bg-slate-50/80 dark:bg-[#070911]/60 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 block">
                  Business impact
                </span>
                <h2 className="font-header text-2xl sm:text-4xl text-slate-900 dark:text-white">
                  Measurable outcomes &amp; value delivered
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
