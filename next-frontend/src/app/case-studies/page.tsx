"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function CaseStudiesPage() {
  const col1 = [
    "Infinite Structure Business",
    "Nest Pilot Pg Management software",
    "Ruts N Rides Admin Software",
    "Squirlio Details",
    "Keystone",
    "Thoorigai",
    "Splendour Park"
  ];

  const col2 = [
    "Akirva",
    "Judah https",
    "Venture Pax",
    "Amaravati",
    "Vectra Mechnovation",
    "Giga Bull"
  ];

  const col3 = [
    { name: "Clean Culture", type: "live", slug: "clean-culture" },
    { name: "Ruts N Rides Website", type: "regular", slug: null },
    { name: "Befhue", type: "regular", slug: null },
    { name: "Sales App", type: "regular", slug: null },
    { name: "Sanika Restaurant", type: "regular", slug: null },
    { name: "Startten", type: "new", slug: "startten" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top bg-slate-50 dark:bg-[#070911]/30">

        {/* Centered Page Hero */}
        <section className="relative py-20 bg-slate-50 dark:bg-[#070911]/50 overflow-hidden bg-dot-matrix border-b border-slate-200/60 dark:border-slate-900 text-center">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2196E8]/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-[#2196E8] font-body text-xs font-bold tracking-widest block uppercase">
              Coimbatore digital agency
            </span>
            <h1 className="font-body text-slate-900 dark:text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Case studies &amp; <span className="text-[#2196E8]">success stories</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-body">
              See how we help businesses in Coimbatore and across India scale their traffic, leads, and sales through custom digital marketing campaigns.
            </p>
          </div>
        </section>

        {/* Projects Directory Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-12 shadow-xl relative z-10"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl text-slate-900 dark:text-white font-extrabold font-body">
                  Case studies &amp; success stories
                </h2>
                <p className="text-[#2196E8] text-sm font-semibold font-body">
                  Explore digital transformations and apps built by DhiGrowth
                </p>
              </div>
              <div className="border border-[#2196E8]/20 bg-[#2196E8]/5 text-[#2196E8] px-4 py-1.5 rounded-full text-xs font-bold font-body shrink-0 shadow-sm">
                19 Projects
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-8" />

            {/* Projects Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-x-12 sm:gap-y-4">

              {/* Column 1 */}
              <div className="space-y-4">
                {col1.map((project, idx) => (
                  <div
                    key={idx}
                    className="text-slate-800 dark:text-slate-300 hover:text-[#2196E8] text-[13.5px] font-medium transition-colors duration-200 py-1.5 block font-body"
                  >
                    {project}
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {col2.map((project, idx) => (
                  <div
                    key={idx}
                    className="text-slate-800 dark:text-slate-300 hover:text-[#2196E8] text-[13.5px] font-medium transition-colors duration-200 py-1.5 block font-body"
                  >
                    {project}
                  </div>
                ))}
              </div>

              {/* Column 3 — linked items */}
              <div className="space-y-4">
                {col3.map((project, idx) => {
                  if (project.type === "live") {
                    return (
                      <Link
                        key={idx}
                        href={project.slug ? `/case-studies/${project.slug}` : '#'}
                        className="border border-emerald-200 bg-emerald-50 text-emerald-800 font-semibold px-3 py-1.5 rounded-xl flex items-center justify-between text-[13.5px] transition-all hover:bg-emerald-100 hover:border-emerald-400 hover:shadow-md shadow-sm font-body"
                      >
                        <span>{project.name}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 ml-2" />
                      </Link>
                    );
                  } else if (project.type === "new") {
                    return (
                      <Link
                        key={idx}
                        href={project.slug ? `/case-studies/${project.slug}` : '#'}
                        className="border border-rose-200 bg-rose-50 text-rose-800 font-semibold px-3 py-1.5 rounded-xl flex items-center justify-between text-[13.5px] transition-all hover:bg-rose-100 hover:border-rose-400 hover:shadow-md shadow-sm font-body"
                      >
                        <span>{project.name}</span>
                        <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 ml-2" />
                      </Link>
                    );
                  } else {
                    return (
                      <div
                        key={idx}
                        className="text-slate-800 dark:text-slate-300 hover:text-[#2196E8] text-[13.5px] font-medium transition-colors duration-200 py-1.5 block font-body"
                      >
                        {project.name}
                      </div>
                    );
                  }
                })}
              </div>

            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
