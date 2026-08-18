"use client";
import React, { useState } from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import AIChatBotModal from './AIChatBotModal';

interface FloatingActionButtonsProps {
  onOpenAudit?: () => void;
}

export default function FloatingWhatsApp({ onOpenAudit }: FloatingActionButtonsProps) {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello DhiGrowth team! I'm interested in digital growth solutions for my business in Coimbatore.");
    window.location.href = `https://api.whatsapp.com/send?phone=919361088012&text=${message}`;
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* AI Assistant Chatbot Button */}
        <button
          onClick={() => setIsAIChatOpen(true)}
          aria-label="Ask DhiGrowth AI Assistant"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white shadow-xl shadow-[#2196E8]/30 flex items-center justify-center group hover:scale-110 transition-all duration-300 border-2 border-white/30 cursor-pointer relative"
        >
          <Bot className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Pulsing online badge indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />

          <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-[#090d18] border border-[#2196E8]/40 text-[#2196E8] text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body">
            🤖 Ask AI Assistant
          </span>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          aria-label="WhatsApp Us Now"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 flex items-center justify-center group hover:scale-110 transition-all duration-300 border-2 border-white/30 cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-emerald-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-[#090d18] border border-emerald-500/40 text-emerald-400 text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body">
            WhatsApp Us Now
          </span>
        </button>
      </div>

      {/* DhiGrowth AI Chatbot Modal */}
      <AIChatBotModal 
        isOpen={isAIChatOpen} 
        onClose={() => setIsAIChatOpen(false)}
        onOpenAudit={onOpenAudit}
      />
    </>
  );
}
