"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import InteractiveCapabilities from '@/components/InteractiveCapabilities';
import LeadPopupModal from '@/components/LeadPopupModal';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleOpenAudit = () => {
    setIsLeadModalOpen(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      
      <Navbar onOpenAudit={handleOpenAudit} />

      <main className="subpage-padding-top">
        
        {/* Page Hero */}
        <section className="relative py-24 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-white overflow-hidden bg-dot-matrix border-b border-slate-200 dark:border-slate-800">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2196E8]/5 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-body text-xs font-bold tracking-widest block">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wider leading-none">
              Who We Are &amp; <span className="text-[#2196E8]">Our Purpose</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-body">
              We combine cutting-edge technology, creative designs, and performance marketing to guide local businesses towards global standards.
            </p>
          </div>
        </section>

        {/* Section 1: About DhiGrowth (Intro) */}
        <section className="py-28 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <motion.span 
              className="text-[#2196E8] font-bold text-xs tracking-widest block font-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Company Profile
            </motion.span>
            <motion.h2 
              className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wider leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              About DhiGrowth
            </motion.h2>
            <motion.div 
              className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-normal space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                DhiGrowth is a full-service digital agency headquartered in Coimbatore, India. We help startups, SMEs, and enterprises build a powerful digital presence and grow their business through smart technology and data-driven marketing.
              </p>
              <p>
                From building high-performance websites and mobile applications to deploying AI automation, running paid ad campaigns, and creating compelling video content, we are the one-stop partner for every digital need your business has. We are not just a service provider. We are your growth partner invested in your success, committed to measurable outcomes, and driven by a passion for innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: 3D Coverflow Interactive Capabilities */}
        <InteractiveCapabilities />

        {/* Section 3: Our Story */}
        <section className="py-28 bg-slate-50 dark:bg-[#080b11] border-b border-slate-200 dark:border-slate-900 transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div 
                className="lg:col-span-6 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span className="text-[#2196E8] font-bold text-xs tracking-widest block font-body">
                  How We Started
                </span>
                <h2 className="font-header text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-wider leading-none">
                  Our Story
                </h2>
                <div className="text-slate-650 dark:text-slate-350 text-base leading-relaxed space-y-4 font-normal">
                  <p>
                    DhiGrowth was founded in Coimbatore with one simple observation: most local businesses had great products and services but struggled to reach the right audience in the digital world.
                  </p>
                  <p>
                    We started as a small team of passionate developers, designers, marketers, and strategists who believed that technology and creativity combined could transform any business. We began by helping Coimbatore businesses with their websites and social media, and the results spoke for themselves.
                  </p>
                  <p>
                    Today, DhiGrowth has grown into a comprehensive digital agency offering 13+ services from AI development and business automation to video production and performance marketing. Our journey is fuelled by every client who trusted us with their growth.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-6 relative flex justify-center w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800/80 group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                    alt="DhiGrowth Team Story" 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                    <p className="text-xs font-bold tracking-widest text-[#2196E8] mb-1 font-body">The DhiGrowth Ethos</p>
                    <blockquote className="text-white italic font-body text-sm sm:text-base leading-relaxed">
                      "Deep local roots coupled with global technical benchmarks form the core foundation of our service delivery framework."
                    </blockquote>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 4: Side-by-Side OUR VISION & OUR MISSION Cards */}
        <section className="py-28 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-6xl mx-auto px-6 font-body">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* OUR VISION Card */}
              <motion.div 
                className="bg-white dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  {/* Top Hero Image */}
                  <div className="w-full h-60 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-slate-200/60 dark:border-slate-800/60 bg-slate-100 dark:bg-slate-900">
                    <img 
                      src="/images/vision-dart.png" 
                      alt="Our Vision" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h2 className="font-header text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-wider leading-none mb-4">
                    Our Vision
                  </h2>

                  <div className="text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                    <p>
                      To be the most trusted digital growth partner for businesses in Coimbatore and across India empowering every brand to thrive in the digital age.
                    </p>
                    <p>
                      We envision a future where every business in Coimbatore, regardless of size or industry, has access to world-class digital tools, AI-powered solutions, and marketing expertise. DhiGrowth is building that future, one client at a time.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* OUR MISSION Card */}
              <motion.div 
                className="bg-white dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div>
                  {/* Top Hero Image */}
                  <div className="w-full h-60 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-slate-200/60 dark:border-slate-800/60 bg-slate-100 dark:bg-slate-900">
                    <img 
                      src="/images/mission-board.png" 
                      alt="Our Mission" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h2 className="font-header text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-wider leading-none mb-4">
                    Our Mission
                  </h2>

                  <div className="text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                    <p>
                      To deliver innovative, result-oriented digital solutions that help businesses grow faster, operate smarter, and connect deeper with their customers.
                    </p>
                    <p>
                      We build with purpose, market with data, and grow with integrity because your success is the only metric that matters to us.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />

      </main>

      {/* Footer */}
      <Footer onOpenAudit={handleOpenAudit} />

      {/* WhatsApp Quick chat floating widget */}
      <FloatingWhatsApp />

      {/* Lead Proposal Popup Modal */}
      <LeadPopupModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
      />

    </div>
  );
}
