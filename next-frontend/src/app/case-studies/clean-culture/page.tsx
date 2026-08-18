"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Check, ArrowLeft } from 'lucide-react';

export default function CleanCulturePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [videoMuted, setVideoMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top">

        {/* Page Hero */}
        <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200 text-center">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <Link href="/case-studies" className="inline-flex items-center space-x-2 text-slate-500 hover:text-[#2196E8] text-sm font-medium transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to case studies</span>
            </Link>
            <span className="text-emerald-500 font-body text-xs font-bold tracking-widest block uppercase">
              Live app • E-commerce
            </span>
            <h1 className="font-body text-slate-900 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Clean <span className="text-emerald-500">culture</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-body">
              A flagship e-commerce app delivering fresh milk, tender coconut, organic vegetables, and pure drinking water — next-day doorstep delivery.
            </p>
          </div>
        </section>

        {/* App Showcase Section */}
        <section id="clean-culture-section" className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute right-0 top-1/3 pointer-events-none select-none opacity-[0.03] font-body text-[180px] font-extrabold tracking-widest text-emerald-500 uppercase hidden lg:block">
            Clean
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/clean_culture_logo.png"
                    alt="Clean Culture Logo"
                    className="w-16 h-16 rounded-2xl shadow-lg object-cover border-2 border-emerald-400"
                  />
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-body">
                      Clean culture mobile app
                    </h2>
                  </div>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal font-body">
                  Clean Culture is a flagship e-commerce application developed under DhiGrowth. It provides
                  fresh milk, tender coconut, pure drinking water, organic vegetables, and fresh fruits with
                  next-day doorstep delivery to customers. Designed with a minimal aesthetic and smart
                  subscription engine.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    { label: "Platform", value: "Android & iOS mobile app" },
                    { label: "Category", value: "E-commerce & grocery delivery" },
                    { label: "Status", value: "Live on Play Store & App Store" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <div>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider font-body">{item.label}: </span>
                        <span className="text-slate-700 text-sm font-medium font-body">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-body">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>App is live!</span>
                </div>
              </div>

              {/* Right Column: Interactive Phone Mockup */}
              <div className="lg:col-span-6 flex justify-center py-2">
                <div className="relative w-[300px] sm:w-[360px] group">
                  <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center filter drop-shadow-2xl">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {[
                        "/images/mockup_screen_1.png",
                        "/images/mockup_screen_2.png",
                        "/images/mockup_screen_3.png"
                      ].map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`Clean Culture App Screen ${idx + 1}`}
                          className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                            currentSlide === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5 bg-slate-900/90 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
                      {[0, 1, 2].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${
                            currentSlide === idx ? 'w-6 h-2 bg-emerald-400' : 'w-2 h-2 bg-white/40'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Chevron Controls */}
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
                      className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-500 text-white flex items-center justify-center backdrop-blur border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
                      className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-500 text-white flex items-center justify-center backdrop-blur border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Video Overview Section */}
        <section id="video-overview" className="w-full bg-slate-950 text-white py-20 border-b border-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Video Player */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/40 group">
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    loop
                    muted={videoMuted}
                    className="w-full h-[320px] sm:h-[380px] object-cover bg-black"
                  >
                    <source src="/videos/clean_culture_overview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={toggleVideoMute}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-emerald-500 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 cursor-pointer"
                  >
                    {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight font-body">
                    Experience clean culture delivery in action
                  </h3>
                  <img
                    src="/images/clean_culture_logo.png"
                    alt="Clean Culture Logo"
                    className="w-16 h-16 rounded-2xl border border-emerald-400 object-cover shadow-xl shrink-0"
                  />
                </div>
                <div className="space-y-4 pt-2">
                  {[
                    "Fresh tender coconut, milk, purified water & organic produce",
                    "Live status pipeline from pending to delivered",
                    "Daily, weekly, or monthly automated recurring orders"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-sm font-medium font-body">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* App is Live Section */}
        <section id="app-is-live-section" className="py-24 bg-[#05080C] text-white relative overflow-hidden w-full">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="cannon-particle-left w-3 h-3 bg-[#a786ff] rounded-sm" style={{ animationDelay: '0s' }} />
            <div className="cannon-particle-left w-2.5 h-4 bg-[#fd8bbc] rotate-45" style={{ animationDelay: '0.5s' }} />
            <div className="cannon-particle-left w-3 h-2 bg-[#eca184] -rotate-12" style={{ animationDelay: '1s' }} />
            <div className="cannon-particle-left w-3.5 h-3.5 rounded-full bg-[#f8deb1]" style={{ animationDelay: '1.5s' }} />
            <div className="cannon-particle-left w-2 h-4 bg-[#10b981] rotate-12" style={{ animationDelay: '2s' }} />
            <div className="cannon-particle-right w-3 h-3 bg-[#fd8bbc] rounded-sm" style={{ animationDelay: '0.2s' }} />
            <div className="cannon-particle-right w-3 h-4 bg-[#a786ff] -rotate-45" style={{ animationDelay: '0.7s' }} />
            <div className="cannon-particle-right w-2.5 h-2.5 rounded-full bg-[#10b981]" style={{ animationDelay: '1.2s' }} />
            <div className="cannon-particle-right w-3.5 h-2 bg-[#f8deb1]" style={{ animationDelay: '1.7s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-20 space-y-8">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-3 rounded-3xl bg-emerald-500/40 blur-2xl group-hover:bg-emerald-400/60 transition-all" />
                <img src="/images/clean_culture_logo.png" alt="Clean Culture Logo" className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-emerald-400/80 object-cover shadow-[0_0_40px_rgba(16,185,129,0.4)] transition hover:scale-105" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-body">
                Clean culture
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto font-body">
                Fresh milk, tender coconuts, protein meals, RO water, oils & more — delivered to your doorstep!
              </p>
            </div>
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-[#0A0F17] hover:bg-[#121B2B] border border-emerald-500/50 text-emerald-400 text-base font-bold shadow-[0_0_25px_rgba(16,185,129,0.25)] transition hover:scale-105">
              <span>App is live!</span>
              <span className="text-xl animate-bounce">🎉</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <a href="#" className="inline-flex items-center space-x-4 px-6 py-3.5 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-emerald-500/30 hover:border-emerald-400 text-white transition transform hover:-translate-y-1">
                <svg className="w-6 h-6 text-emerald-400 fill-current" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1L472.2 359c16.1-9.2 27.2-26.6 27.2-46.7 0-20.1-11.1-37.5-27.2-46.7zm-207.1 52.1L104.6 499l220.7-126.7-60.1-60.1-24.4 24.4z"/></svg>
                <div className="text-left font-body">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block leading-none font-bold">Get it on</span>
                  <span className="text-base font-extrabold text-white leading-tight">Google Play</span>
                </div>
              </a>
              <a href="#" className="inline-flex items-center space-x-4 px-6 py-3.5 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white transition transform hover:-translate-y-1">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.9-74.5-22.9-39.9 0-79.7 20.6-102.1 59.5-23 39.8-17.6 102.4 3.9 155.8 12.1 30.2 30 53.5 53 54.1 22.8.6 34.7-11.4 59.5-11.4 24.8 0 36.6 11.4 59.5 11.4 23.3-.6 41.2-21.2 53-38.2 15-21.4 22.4-44.4 22.7-45.6-1.1-.3-44.3-17.2-44.7-68.8zM245.5 81c22.4-24.6 37.5-58.8 31.3-93-29.4 1.2-65.4 19.6-86.5 44.6-18.8 22.4-35.3 56.8-29.3 89.8 32.5 1.2 65.7-18.4 84.5-41.4z"/></svg>
                <div className="text-left font-body">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block leading-none font-bold">Download on the</span>
                  <span className="text-base font-extrabold text-white leading-tight">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />

      <style>{`
        @keyframes sideCannonLeft {
          0% { transform: translate(0,0) rotate(0deg) scale(0.5); opacity:1; }
          50% { transform: translate(38vw,-150px) rotate(360deg) scale(1.2); opacity:0.95; }
          100% { transform: translate(65vw,280px) rotate(720deg) scale(0.3); opacity:0; }
        }
        @keyframes sideCannonRight {
          0% { transform: translate(0,0) rotate(0deg) scale(0.5); opacity:1; }
          50% { transform: translate(-38vw,-150px) rotate(-360deg) scale(1.2); opacity:0.95; }
          100% { transform: translate(-65vw,280px) rotate(-720deg) scale(0.3); opacity:0; }
        }
        .cannon-particle-left {
          position:absolute; left:0; top:50%; pointer-events:none;
          animation: sideCannonLeft 3.5s cubic-bezier(0.25,1,0.5,1) infinite;
        }
        .cannon-particle-right {
          position:absolute; right:0; top:50%; pointer-events:none;
          animation: sideCannonRight 3.5s cubic-bezier(0.25,1,0.5,1) infinite;
        }
      `}</style>
    </div>
  );
}
