"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent("Hello DhiGrowth team! I'm interested in digital growth solutions for my business in Coimbatore.");
    window.open(`https://wa.me/919361088012?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="WhatsApp Us Now"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/50 flex items-center justify-center group hover:scale-110 transition-all duration-300 border-2 border-white/20 cursor-pointer"
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-500 group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#090d18] border border-emerald-500/40 text-emerald-400 text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body">
        WhatsApp Us Now
      </span>
    </button>
  );
}
