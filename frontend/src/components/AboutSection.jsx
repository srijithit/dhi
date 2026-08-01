import React, { useState } from 'react';
import { Cpu, TrendingUp, Compass, Target, Eye, BookOpen, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-24 bg-[#070a12] relative overflow-hidden border-t border-[#a9c0f5]/10">
      
      {/* Background Accent Light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2196E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2196E8] font-semibold text-sm uppercase tracking-widest block mb-2">
            Who We Are
          </span>
          <h2 className="font-header text-4xl sm:text-6xl text-white uppercase tracking-wide mb-6">
            COIMBATORE'S PREMIER <span className="text-[#2196E8]">DIGITAL GROWTH</span> PARTNER
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We are DhiGrowth — a Coimbatore-based digital agency that combines technology, creativity, and strategy to deliver measurable business results. Whether you are a startup, SME, or enterprise, our end-to-end digital solutions are built to accelerate your growth.
          </p>
        </div>

        {/* 3 Value Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="glass-card p-8 relative group border border-[#a9c0f5]/15 hover:border-[#2196E8]">
            <div className="w-14 h-14 rounded-2xl bg-[#2196E8]/10 border border-[#2196E8]/30 flex items-center justify-center text-[#2196E8] mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7 text-[#2196E8]" />
            </div>
            <h3 className="font-header text-2xl text-white uppercase tracking-wide mb-3">
              Technology-First
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              From custom websites to AI-powered automation, we build future-ready digital products using cutting-edge frameworks and scalable infrastructure.
            </p>
          </div>

          <div className="glass-card p-8 relative group border border-[#a9c0f5]/15 hover:border-[#4A72EB]">
            <div className="w-14 h-14 rounded-2xl bg-[#4A72EB]/10 border border-[#4A72EB]/30 flex items-center justify-center text-[#4A72EB] mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-[#4A72EB]" />
            </div>
            <h3 className="font-header text-2xl text-white uppercase tracking-wide mb-3">
              Marketing That Converts
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Data-driven SEO, paid ads, and social media strategies designed to maximize ROAS and bring continuous qualified leads to your sales funnel.
            </p>
          </div>

          <div className="glass-card p-8 relative group border border-[#a9c0f5]/15 hover:border-[#A9C0F5]">
            <div className="w-14 h-14 rounded-2xl bg-[#A9C0F5]/10 border border-[#A9C0F5]/30 flex items-center justify-center text-[#A9C0F5] mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7 text-[#A9C0F5]" />
            </div>
            <h3 className="font-header text-2xl text-white uppercase tracking-wide mb-3">
              Coimbatore Roots, Global Standards
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Deep understanding of the local South Indian market combined with world-class technical execution for businesses of all scales.
            </p>
          </div>

        </div>

        {/* Vision / Mission / Our Story Tabs */}
        <div className="glass-card p-8 sm:p-12 border border-[#a9c0f5]/20">
          <div className="flex flex-wrap gap-4 border-b border-slate-800 pb-6 mb-8">
            <button 
              onClick={() => setActiveTab('story')}
              className={`px-6 py-3 rounded-xl font-header text-xl tracking-wider uppercase transition-all ${
                activeTab === 'story'
                  ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/30'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Our Story</span>
              </div>
            </button>

            <button 
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-xl font-header text-xl tracking-wider uppercase transition-all ${
                activeTab === 'vision'
                  ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/30'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>Our Vision</span>
              </div>
            </button>

            <button 
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-3 rounded-xl font-header text-xl tracking-wider uppercase transition-all ${
                activeTab === 'mission'
                  ? 'bg-[#2196E8] text-white shadow-lg shadow-[#2196E8]/30'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Our Mission</span>
              </div>
            </button>
          </div>

          <div className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {activeTab === 'story' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="font-header text-3xl text-white uppercase tracking-wide">
                  Building Coimbatore's Digital Future
                </h4>
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
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="font-header text-3xl text-white uppercase tracking-wide">
                  Our Vision for Business Growth
                </h4>
                <p>
                  To be the most trusted digital growth partner for businesses in Coimbatore and across India — empowering every brand to thrive in the digital age.
                </p>
                <p>
                  We envision a future where every business in Coimbatore, regardless of size or industry, has access to world-class digital tools, AI-powered solutions, and marketing expertise. DhiGrowth is building that future, one client at a time.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="font-header text-3xl text-white uppercase tracking-wide">
                  Our Mission & Commitment
                </h4>
                <p>
                  To deliver innovative, result-oriented digital solutions that help businesses grow faster, operate smarter, and connect deeper with their customers.
                </p>
                <p>
                  We build with purpose, market with data, and grow with integrity because your success is the only metric that matters to us.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
