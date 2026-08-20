"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Volume2, VolumeX, Check, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const STARTTEN_RED = '#E61E2B';

const techStack = [
  { name: 'React', img: '/images/tech_react_official.png' },
  { name: 'Next.js', img: '/images/tech_nextjs_official.png' },
  { name: 'Tailwind CSS', img: '/images/tech_tailwind_official.png' },
  { name: 'Node.js', img: '/images/tech_nodejs_official.png' },
  { name: 'Express', img: '/images/tech_express_official.png' },
  { name: 'Redis', img: '/images/tech_redis_official.png' },
  { name: 'Admin console', img: '/images/tech_admin_console.png' },
];

const highlights = [
  { title: 'Multi-billion dollar market', desc: 'Tapping into the massive global prediction gaming market with a unique revenue model.' },
  { title: 'Automated daily draws', desc: 'Every 10 minutes a new contest runs — fully automated, no manual intervention needed.' },
  { title: 'Startup reinvestment', desc: '50% of profits flow back to fund emerging startups, creating a self-sustaining ecosystem.' },
  { title: 'Zero-cost franchising', desc: 'Partners can operate STARTTEN franchises with no upfront capital, sharing in every win.' },
  { title: 'Picosecond precision', desc: 'Winner selection uses picosecond-level timestamps for verifiable, tamper-proof fairness.' },
  { title: 'Transparent ledger', desc: 'Every transaction and payout is logged in a fully auditable, open ledger system.' },
];

export default function StarttenPage() {
  const [videoMuted, setVideoMuted] = React.useState(true);
  const [highlightIdx, setHighlightIdx] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top font-body bg-white">

        {/* ── TOP PANORAMIC COVER HERO BANNER ── */}
        <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-slate-950 flex items-center justify-center font-body group">
          {/* Background Image with Ambient Zoom & Fade */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80"
              alt="STARTTEN Cover Banner"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Atmospheric Dark & Brand Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
            <div className="absolute inset-0 bg-[#E61E2B]/10 mix-blend-overlay" />
          </div>

          {/* Centered Overlay Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-body drop-shadow-lg">
              Building digital growth through <br />
              <span className="text-[#E61E2B] drop-shadow-[0_0_25px_rgba(230,30,43,0.6)]">tailored innovation</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-body drop-shadow-md font-medium">
              Discover how DhiGrowth built an advanced picosecond-accurate time-based prediction &amp; 50/50 profit sharing platform for <strong className="text-white font-bold">STARTTEN</strong>.
            </p>

            <div className="pt-2 flex justify-center">
              <button
                onClick={() => {
                  const el = document.getElementById('startten-overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-[#0A0F17]/90 hover:bg-[#121B2B] border border-[#E61E2B]/50 hover:border-[#E61E2B] text-white text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(230,30,43,0.35)] transition-all transform hover:scale-105 cursor-pointer font-body backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-full bg-[#E61E2B] flex items-center justify-center text-white text-xs font-black">
                  S
                </div>
                <span>Jump to STARTTEN Case Study ↓</span>
              </button>
            </div>
          </div>

          {/* Left / Right Carousel Arrow Buttons */}
          <Link
            href="/case-studies/clean-culture"
            title="Previous Case Study"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#E61E2B] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>

          <Link
            href="/case-studies/ruts-n-rides"
            title="Next Case Study"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#E61E2B] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>

          {/* Bottom Carousel Pagination Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-6 h-2 rounded-full bg-[#E61E2B] transition-all" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </section>

        {/* ── HERO OVERVIEW ── */}
        <section id="startten-overview" className="relative bg-white py-16 sm:py-24 border-b border-slate-100 overflow-hidden font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

              {/* Left: Brand Visual */}
              <div className="lg:col-span-6 flex justify-center items-center">
                <div className="relative w-full max-w-md flex flex-col items-center justify-center gap-6">
                  {/* Official Logo */}
                  <img
                    src="/images/startten_StarrtenLogo-BLMQHKc8.svg"
                    alt="Startten Logo"
                    className="w-64 sm:w-80 h-auto object-contain drop-shadow-xl"
                  />
                  {/* Phone mockup from live site */}
                  <img
                    src="/images/startten_menphone1-LbOF3SZY.png"
                    alt="Startten App Preview"
                    className="w-40 sm:w-52 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>


              {/* Right: Content */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                <Link href="/case-studies" className="inline-flex items-center space-x-2 text-slate-500 hover:text-[#E61E2B] text-sm font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to case studies</span>
                </Link>

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#E61E2B] text-white text-xs sm:text-sm font-bold shadow-md">
                  <span>50% profit sharing model</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 font-body leading-none tracking-tight">
                  STARTTEN
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body max-w-lg">
                  An advanced time-based prediction platform built under DhiGrowth. Picosecond accuracy, transparent ledger tracking, and a unique 50/50 profit sharing model that connects visionary startups with strategic growth capital.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E61E2B] text-xs font-bold font-body">Prediction platform</span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-body">Fintech</span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-body">DhiGrowth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── METRICS ── */}
        <section id="metrics-counter" className="py-16 bg-[#E61E2B] border-b border-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: 'Profit model', value: '50%', sub: 'Formula 50/50 ✓ Payouts' },
                { label: 'Daily volume', value: '₹50K+', sub: 'Processed per contest cycle' },
                { label: 'Contests / month', value: '8,640+', sub: 'Fully automated draws' },
                { label: 'Payout speed', value: '<1s', sub: 'Instant bank wallet transfer' },
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-red-200 shadow-xl space-y-2 text-left transform transition hover:scale-105">
                  <div className="text-[#E61E2B] text-xs font-mono font-bold uppercase tracking-wider">{card.label}</div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-body tracking-tight whitespace-nowrap">
                    {card.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium pt-1 font-body">{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT US ── */}
        <section id="about-us" className="py-20 sm:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-5xl sm:text-7xl font-black text-[#E61E2B] font-body leading-tight tracking-tight">
                  About us
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium font-body">
                  STARTTEN is an advanced time-based prediction platform developed under DhiGrowth. Built with picosecond accuracy, transparent ledger tracking, and a unique 50/50 profit sharing model, STARTTEN connects visionary startups with strategic growth capital while providing players with fair, daily prediction contests.
                </p>
                <div className="space-y-4 pt-2">
                  {[
                    { icon: '🚀', title: 'Startup funding', desc: 'Your participation directly funds the next generation of startups.' },
                    { icon: '🏆', title: 'Fair competition', desc: 'Picosecond timestamps guarantee verifiable, unbiased winners every draw.' },
                    { icon: '💰', title: 'Instant rewards', desc: 'Winnings land directly in your bank wallet within seconds of each draw.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E61E2B] flex items-center justify-center font-bold text-lg flex-shrink-0 mt-0.5 border border-red-100">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 font-body text-sm">{item.title}</div>
                        <div className="text-slate-500 text-sm font-body leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md h-80 rounded-3xl bg-gradient-to-br from-red-50 via-rose-50 to-white flex items-center justify-center border border-red-100 shadow-xl">
                  <div className="text-center space-y-4 px-8">
                    <div className="text-7xl font-black text-[#E61E2B] font-body">50%</div>
                    <div className="text-slate-700 font-bold font-body text-lg">Profit sharing</div>
                    <div className="text-slate-400 text-sm font-body">Every win is split equally between the player and startup funding pool</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VIDEO OVERVIEW ── */}
        <section id="video-overview" className="w-full bg-slate-950 text-white py-20 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-red-600/40 group">
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    loop
                    muted={videoMuted}
                    className="w-full h-[360px] sm:h-[420px] object-cover bg-black"
                  >
                    <source src="/videos/startten_overview.mp4" type="video/mp4" />
                    {/* Fallback message */}
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-400 text-sm font-body">
                      Video overview coming soon
                    </div>
                  </video>
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-[#E61E2B] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all z-20 hover:scale-110 cursor-pointer"
                  >
                    {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-red-900/30 text-red-400 text-xs font-bold tracking-wider font-body border border-red-800/40">
                  Platform overview
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-body">
                  See STARTTEN in action — every 10 minutes a new winner
                </h3>
                <div className="space-y-4">
                  {[
                    "Login & register in under 30 seconds",
                    "Join any event with just ₹10 entry fee",
                    "10-minute draw engine picks winners by time precision",
                    "Instant payout directly to your bank wallet"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-[#E61E2B]/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
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

        {/* ── CHALLENGE ── */}
        <section id="challenge" className="py-20 sm:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-red-100 text-[#E61E2B] text-xs font-bold tracking-wider font-body">
              Challenge
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-4xl sm:text-6xl font-black text-[#E61E2B] leading-tight font-body">
                  Challenge
                </h2>
                <div className="space-y-5 text-slate-600 text-base leading-relaxed font-body">
                  <p><strong className="text-slate-900">01. Unrewarded time:</strong> Players spend hours without financial benefits, leading to wasted time and lost opportunities.</p>
                  <p><strong className="text-slate-900">02. Uncontrolled dopamine spikes:</strong> Traditional gaming models rely on unpredictable rewards, creating addiction-driven behaviors.</p>
                  <p><strong className="text-slate-900">03. Lack of transparency & fairness:</strong> Opaque algorithms make it difficult for players to trust the system or verify wins.</p>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm h-72 rounded-3xl bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center border border-red-100 shadow-lg">
                  <div className="text-center space-y-3 px-6">
                    <div className="text-4xl">⚠️</div>
                    <div className="text-slate-700 font-black font-body text-xl">3 core problems</div>
                    <div className="text-slate-400 text-sm font-body">Traditional gaming platforms fail their users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section id="solution" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-emerald-100 text-[#E61E2B] text-xs font-bold tracking-wider font-body">
              Solution
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-sm h-72 rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center border border-emerald-100 shadow-lg">
                  <div className="text-center space-y-3 px-6">
                    <div className="text-4xl">✅</div>
                    <div className="text-slate-700 font-black font-body text-xl">3 smart solutions</div>
                    <div className="text-slate-400 text-sm font-body">STARTTEN fixes what gaming platforms got wrong</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl sm:text-6xl font-black text-[#E61E2B] leading-tight font-body">
                  Solution
                </h2>
                <div className="space-y-5 text-slate-600 text-base leading-relaxed font-body">
                  <p><strong className="text-slate-900">01. Earn by beating time:</strong> STARTTEN rewards users for acting fast, winning 50% of the profit sharing instantly.</p>
                  <p><strong className="text-slate-900">02. Transparent & verified system:</strong> Built on picosecond technology, ensuring fairness with real-time leaderboards.</p>
                  <p><strong className="text-slate-900">03. Startup reinvestment loop:</strong> Every game entry contributes to a curated pool of startup investments, compounding returns for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCT EXPERIENCE ── */}
        <section id="product-experience" className="py-20 sm:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-purple-100 text-[#E61E2B] text-xs font-bold tracking-wider font-body">
              Product experience
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-4xl sm:text-6xl font-black text-[#E61E2B] leading-tight font-body">
                  Product experience
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-body">
                  A seamless 4-step contest experience designed for maximum engagement: login & register, join event (₹10 entry), 10-minute draw engine, and instant winner payout directly to bank wallet.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { step: '01', title: 'Login & register', icon: '👤' },
                    { step: '02', title: 'Join event (₹10)', icon: '🎟️' },
                    { step: '03', title: '10-min draw engine', icon: '⏱️' },
                    { step: '04', title: 'Instant payout', icon: '💸' },
                  ].map((s) => (
                    <div key={s.step} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-2xl">{s.icon}</div>
                      <div className="text-[#E61E2B] text-xs font-mono font-bold">Step {s.step}</div>
                      <div className="text-slate-800 text-sm font-bold font-body">{s.title}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm h-72 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center border border-purple-100 shadow-lg">
                  <div className="text-center space-y-3 px-6">
                    <div className="text-4xl">🎮</div>
                    <div className="text-slate-700 font-black font-body text-xl">4-step flow</div>
                    <div className="text-slate-400 text-sm font-body">Designed for maximum engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PLATFORM HIGHLIGHTS ── */}
        <section id="platform-highlights" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-sky-100 text-[#E61E2B] text-xs font-bold tracking-wider font-body">
              Platform highlights
            </div>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-black text-[#E61E2B] leading-tight font-body">
                Platform highlights
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-body">
                Discover the core pillars driving STARTTEN — from multi-billion dollar market opportunity to automated daily draws, startup reinvestment, and zero-cost franchise empowerment.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((h, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E61E2B] font-black text-sm font-body">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-slate-900 font-bold text-base font-body">{h.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-body">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section id="tech-stack" className="py-20 sm:py-28 bg-white border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-indigo-100 text-[#E61E2B] text-xs font-bold tracking-wider font-body">
              Technology stack architecture
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black text-[#E61E2B] leading-tight font-body">
                Technology stack architecture
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-body">
                Engineered with React, Next.js, Tailwind CSS, Node.js, Express, Redis, and a centralized administrative console for maximum speed, picosecond precision, and automated ledger operations.
              </p>
            </div>

            {/* Marquee */}
            <div className="py-8 relative overflow-hidden w-full">
              <div className="flex items-center gap-12 animate-marquee w-max">
                {[...techStack, ...techStack].map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-3 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="h-10 w-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-slate-400 font-black font-body text-sm sm:text-base group-hover:text-slate-700 transition-colors whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DEV SCOPE ── */}
        <section id="dev-scope" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-amber-100 text-[#E61E2B] text-xs font-bold tracking-wider font-body">
              Development scope
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black text-[#E61E2B] leading-tight font-body">
                Development scope
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900 font-body tracking-tight">Mr. B. Muthupandiyaraja</h3>
                <p className="text-xl sm:text-2xl font-black text-[#E61E2B] tracking-tight font-body">Founder & CEO — STARTTEN</p>
                <p className="text-slate-500 text-sm leading-relaxed font-body">Visionary behind the 50/50 profit sharing model, responsible for overall product strategy, investor relations, and franchise rollout.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900 font-body tracking-tight">G. Dinesh</h3>
                <p className="text-xl sm:text-2xl font-black text-[#2196E8] tracking-tight font-body">Lead developer — DhiGrowth</p>
                <p className="text-slate-500 text-sm leading-relaxed font-body">Architected the full-stack platform, picosecond draw engine, ledger system, and the centralized admin console powering every automated contest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section id="results" className="py-20 sm:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-emerald-100 text-[#E61E2B] text-xs font-bold tracking-wider font-body">
              Results
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#E61E2B] leading-tight font-body">Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { val: '8,640+', label: 'Contests / month', color: 'text-[#2196E8]' },
                { val: '100%', label: 'Verifiable ledger', color: 'text-emerald-600' },
                { val: '50%', label: 'Player payout share', color: 'text-[#E61E2B]' },
                { val: '<1s', label: 'Winner notification', color: 'text-amber-600' },
              ].map((r, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-2 hover:shadow-lg transition-shadow">
                  <div className={`text-4xl sm:text-5xl font-black font-body ${r.color}`}>{r.val}</div>
                  <div className="text-xs text-slate-500 uppercase font-mono font-bold pt-1 tracking-wider">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APP IS LIVE ── */}
        <section id="app-is-live-section" className="py-24 bg-[#05080C] text-white relative overflow-hidden w-full">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="cannon-particle-left w-3 h-3 bg-[#E61E2B] rounded-sm" style={{ animationDelay: '0s' }} />
            <div className="cannon-particle-left w-2.5 h-4 bg-[#fd8bbc] rotate-45" style={{ animationDelay: '0.5s' }} />
            <div className="cannon-particle-left w-3 h-2 bg-[#eca184] -rotate-12" style={{ animationDelay: '1s' }} />
            <div className="cannon-particle-left w-3.5 h-3.5 rounded-full bg-[#f8deb1]" style={{ animationDelay: '1.5s' }} />
            <div className="cannon-particle-right w-3 h-3 bg-[#fd8bbc] rounded-sm" style={{ animationDelay: '0.2s' }} />
            <div className="cannon-particle-right w-3 h-4 bg-[#a786ff] -rotate-45" style={{ animationDelay: '0.7s' }} />
            <div className="cannon-particle-right w-2.5 h-2.5 rounded-full bg-[#E61E2B]" style={{ animationDelay: '1.2s' }} />
            <div className="cannon-particle-right w-3.5 h-2 bg-[#f8deb1]" style={{ animationDelay: '1.7s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-20 space-y-8">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-3 rounded-3xl bg-[#E61E2B]/40 blur-2xl group-hover:bg-[#E61E2B]/60 transition-all" />
                <img
                  src="/images/startten_StarrtenLogo-BLMQHKc8.svg"
                  alt="Startten Logo"
                  className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-2xl transition hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-body">
                STARTTEN
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto font-body">
                Time-based prediction contests, 50/50 profit sharing, and instant bank payouts — play, win, and fund the future!
              </p>
            </div>
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-[#0A0F17] hover:bg-[#1a0508] border border-[#E61E2B]/50 text-[#E61E2B] text-base font-bold shadow-[0_0_25px_rgba(230,30,43,0.25)] transition hover:scale-105 font-body">
              <span>Platform is live!</span>
              <span className="text-xl animate-bounce">🎉</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <a href="#" className="inline-flex items-center space-x-4 px-6 py-3.5 rounded-2xl bg-[#090E17] hover:bg-[#100508] border border-[#E61E2B]/30 hover:border-[#E61E2B] text-white transition transform hover:-translate-y-1">
                <svg className="w-6 h-6 text-[#E61E2B] fill-current" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1L472.2 359c16.1-9.2 27.2-26.6 27.2-46.7 0-20.1-11.1-37.5-27.2-46.7zm-207.1 52.1L104.6 499l220.7-126.7-60.1-60.1-24.4 24.4z"/></svg>
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
