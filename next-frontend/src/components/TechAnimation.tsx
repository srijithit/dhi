"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Sparkles, Cpu, ShieldCheck, Activity, Layers, ArrowUpRight } from 'lucide-react';

export default function TechAnimation() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { title: "Organic Growth", value: "+342%", label: "Google Rank #1", color: "#2196E8" },
    { title: "Ad Campaign ROAS", value: "8.4X", label: "Meta & Google Ads", color: "#10B981" },
    { title: "Speed Score", value: "99/100", label: "Sub-Second Load", color: "#6366F1" },
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[460px] flex items-center justify-center select-none font-body">
      {/* Background Ambient Holographic Aura */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 bg-gradient-to-tr from-[#2196E8]/20 via-[#4A72EB]/20 to-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Main Glassmorphism Holographic Dashboard Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -6, scale: 1.01 }}
        className="relative z-10 w-full bg-white/80 dark:bg-[#090d18]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-7 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2196E8] to-[#4A72EB] flex items-center justify-center text-white shadow-md">
              <Cpu className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-[#090d18] animate-ping" />
            </div>
            <div>
              <h4 className="font-header text-lg text-slate-900 dark:text-white capitalize leading-tight">
                DhiGrowth AI Engine
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Live Optimization Active
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-semibold font-mono">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>99.9% ROAS</span>
          </div>
        </div>

        {/* Dynamic Metric Spotlight Bar */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {metrics.map((m, idx) => {
            const isActive = activeMetric === idx;
            return (
              <motion.div
                key={m.title}
                animate={{ scale: isActive ? 1.03 : 1 }}
                onClick={() => setActiveMetric(idx)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer text-left ${
                  isActive 
                    ? 'bg-[#2196E8]/10 border-[#2196E8]/40 shadow-sm' 
                    : 'bg-slate-50/60 dark:bg-[#111625]/60 border-slate-200/50 dark:border-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate font-medium">
                  {m.title}
                </span>
                <span className="font-numeric text-lg sm:text-xl font-bold text-slate-900 dark:text-white block mt-0.5" style={{ color: isActive ? m.color : undefined }}>
                  {m.value}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Live Animated Graph Canvas SVG */}
        <div className="relative h-32 w-full bg-slate-50/80 dark:bg-[#0c111f]/90 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-800/60 overflow-hidden mb-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span>GROWTH TRAJECTORY</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" /> +128% vs Last Month
            </span>
          </div>

          <svg className="w-full h-20 overflow-visible" viewBox="0 0 400 80" fill="none">
            <defs>
              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2196E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2196E8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Filled Area */}
            <path
              d="M 0,70 Q 100,20 200,45 T 400,10 L 400,80 L 0,80 Z"
              fill="url(#chartGlow)"
            />

            {/* Animated Stroke Line */}
            <motion.path
              d="M 0,70 Q 100,20 200,45 T 400,10"
              stroke="#2196E8"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Pulsing Nodes on Wave */}
            <circle cx="100" cy="30" r="4" fill="#2196E8" />
            <circle cx="200" cy="45" r="4" fill="#4A72EB" />
            <circle cx="350" cy="18" r="6" fill="#10B981" className="animate-ping" />
            <circle cx="350" cy="18" r="4" fill="#10B981" />
          </svg>
        </div>

        {/* Bottom Feature Badges */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold font-body">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#111625] border border-slate-200/50 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#2196E8]" />
            <span>Fast Code</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#111625] border border-slate-200/50 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>AI Ready</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#111625] border border-slate-200/50 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
            <span>10X Scaling</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Holographic Satellite Pill 1 (Top Left) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 shadow-xl"
      >
        <Sparkles className="w-4 h-4 text-[#2196E8]" />
        <span className="text-xs font-bold text-slate-800 dark:text-white capitalize">Custom Web &amp; Apps</span>
      </motion.div>

      {/* Floating Holographic Satellite Pill 2 (Bottom Right) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 shadow-xl"
      >
        <Layers className="w-4 h-4 text-emerald-500" />
        <span className="text-xs font-bold text-slate-800 dark:text-white capitalize">Automated Funnels</span>
      </motion.div>
    </div>
  );
}
