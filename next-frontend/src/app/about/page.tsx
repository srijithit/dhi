"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      
      <Navbar />

      <main className="subpage-padding-top">
        
        {/* Page Hero */}
        <section className="relative py-24 bg-[#000000] text-white overflow-hidden bg-dot-matrix border-b border-slate-900">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2196E8]/10 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-body text-xs font-semibold uppercase tracking-widest block">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wider uppercase leading-none">
              WHO WE ARE &amp; <span className="text-brand-bright">OUR PURPOSE</span>
            </h1>
            <p className="text-slate-350 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              We combine cutting-edge technology, creative designs, and performance marketing to guide local businesses towards global standards.
            </p>
          </div>
        </section>

        {/* Section 1: About DhiGrowth (Intro) */}
        <section className="py-28 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <motion.span 
              className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block font-numeric"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Company Profile
            </motion.span>
            <motion.h2 
              className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wider leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              ABOUT DHIGROWTH
            </motion.h2>
            <motion.p 
              className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-normal"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              DhiGrowth is a full-service digital agency headquartered in Coimbatore, India. We help startups, SMEs, and enterprises build a powerful digital presence and grow their business through smart technology and data-driven marketing. From building high-performance websites and mobile applications to deploying AI automation, running paid ad campaigns, and creating compelling video content — we are the one-stop partner for every digital need your business has. We are not just a service provider. We are your growth partner invested in your success, committed to measurable outcomes, and driven by a passion for innovation.
            </motion.p>
          </div>
        </section>

        {/* Section 2: Our Story (Alternating block - Left Image / Text Right or Alternating blocks) */}
        <section className="py-28 bg-slate-50 dark:bg-[#080b11] border-y border-slate-200 dark:border-slate-900 transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div 
                className="lg:col-span-6 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span className="text-[#2196E8] font-semibold text-xs uppercase tracking-widest block font-numeric">
                  How We Started
                </span>
                <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wider leading-none">
                  OUR STORY
                </h2>
                <h3 className="font-body font-bold text-slate-800 dark:text-slate-200 text-lg">
                  Building Coimbatore's Digital Future
                </h3>
                <div className="text-slate-600 dark:text-slate-350 text-base leading-relaxed space-y-4">
                  <p>
                    DhiGrowth was founded in Coimbatore with one simple observation: most local businesses had great products and services but struggled to reach the right audience in the digital world.
                  </p>
                  <p>
                    We started as a passionate team of developers, designers, marketers, and strategists who believed that technology and creativity combined could transform any business. We began by helping Coimbatore businesses with their websites and social media, and the results spoke for themselves.
                  </p>
                  <p>
                    Today, DhiGrowth has grown into a comprehensive digital agency offering 13+ services from AI development and business automation to video production and performance marketing.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-6 flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Visual placeholder badge card */}
                <div className="w-full max-w-[420px] p-8 rounded-3xl bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                  <div className="h-1 bg-[#2196E8] w-20 rounded-full" />
                  <blockquote className="text-slate-700 dark:text-slate-300 italic font-body text-base">
                    "Deep local roots coupled with global technical benchmarks form the core foundation of our service delivery framework."
                  </blockquote>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500 font-numeric">
                    — The DhiGrowth Ethos
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 3: Our Vision (Alternating block) */}
        <section className="py-28 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div 
                className="lg:col-span-6 order-last lg:order-first flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full max-w-[420px] p-8 rounded-3xl bg-slate-50 dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                  <div className="h-1 bg-[#4A72EB] w-20 rounded-full" />
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-body">
                    Deploying custom APIs, recommendation algorithms, high-conversion landing pages, and AI automations to transform daily client revenue streams.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-6 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span className="text-[#2196E8] font-semibold text-xs uppercase tracking-widest block font-numeric">
                  Future Horizon
                </span>
                <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wider leading-none">
                  OUR VISION
                </h2>
                <h3 className="font-body font-bold text-slate-800 dark:text-slate-200 text-lg">
                  Our Vision for Business Growth
                </h3>
                <div className="text-slate-600 dark:text-slate-350 text-base leading-relaxed space-y-4">
                  <p>
                    To be the most trusted digital growth partner for businesses in Coimbatore and across India — empowering every brand to thrive in the digital age.
                  </p>
                  <p>
                    We envision a future where every business in Coimbatore, regardless of size or industry, has access to world-class digital tools, AI-powered solutions, and marketing expertise. DhiGrowth is building that future, one client at a time.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 4: Our Mission */}
        <section className="py-28 bg-slate-50 dark:bg-[#080b11] border-t border-slate-200 dark:border-slate-900 transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div 
                className="lg:col-span-6 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span className="text-[#2196E8] font-semibold text-xs uppercase tracking-widest block font-numeric">
                  Daily Execution
                </span>
                <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white uppercase tracking-wider leading-none">
                  OUR MISSION
                </h2>
                <h3 className="font-body font-bold text-slate-800 dark:text-slate-200 text-lg">
                  Our Mission &amp; Commitment
                </h3>
                <div className="text-slate-600 dark:text-slate-350 text-base leading-relaxed space-y-4">
                  <p>
                    To deliver innovative, result-oriented digital solutions that help businesses grow faster, operate smarter, and connect deeper with their customers.
                  </p>
                  <p>
                    We build with purpose, market with data, and grow with integrity because your success is the only metric that matters to us.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-6 flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full max-w-[420px] p-8 rounded-3xl bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                  <div className="h-1 bg-[#A9C0F5] w-20 rounded-full" />
                  <blockquote className="text-slate-700 dark:text-slate-300 italic font-body text-base">
                    "Data-backed choices, creative scripts, high performance infrastructure. That is our commitment to Coimbatore and global businesses."
                  </blockquote>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
