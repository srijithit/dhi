"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Paperclip, Sparkles, MessageSquare, ArrowRight, User } from 'lucide-react';

interface AIChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit?: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

const QUICK_SUGGESTIONS = [
  "What services do you offer?",
  "How much does Website Development cost?",
  "Tell me about AI Workflows & Automation",
  "How to book a Free Digital Audit?"
];

export default function AIChatBotModal({ isOpen, onClose, onOpenAudit }: AIChatBotModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "👋 Hello! I'm your DhiGrowth AI assistant. I'm here to help you with any questions about our 13+ digital growth services (Web, Mobile Apps, AI Workflows, Performance Marketing, SEO, Video Production) in Coimbatore. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  // Knowledge base match engine for instant accurate DhiGrowth answers
  const generateAIResponse = (userQuery: string): string => {
    const query = userQuery.toLowerCase();

    if (query.includes('service') || query.includes('what do you do') || query.includes('offer')) {
      return "DhiGrowth offers 13+ core digital growth services under one roof:\n\n1. 🌐 Website Development (Next.js, React)\n2. 📱 Mobile App Development (iOS & Android)\n3. 🤖 AI Workflows & Chatbot Integration\n4. 🚀 Performance Marketing & Meta/Google Ads\n5. 🔍 Local SEO & Google Map Pack Ranking\n6. 🎬 Commercial Video Shooting & Production\n\nWould you like more details on any specific service?";
    }

    if (query.includes('cost') || query.includes('price') || query.includes('pricing') || query.includes('rate') || query.includes('website')) {
      return "Our pricing is tailored based on your business scope and feature requirements. We offer flexible packages for Startups, SMEs, and Enterprises in Coimbatore.\n\nWe also provide a 100% Free Digital Performance Audit to estimate your exact ROI & project timeline. Would you like to claim your free audit proposal now?";
    }

    if (query.includes('ai') || query.includes('automation') || query.includes('workflow') || query.includes('bot')) {
      return "Our AI Development team builds custom AI agents, automated WhatsApp lead funnels, CRM integrations, and machine learning models that run 24/7 to reduce your manual operational overhead by up to 60%.";
    }

    if (query.includes('audit') || query.includes('book') || query.includes('consultation') || query.includes('free')) {
      return "You can claim a Free Digital Performance Audit & Growth Roadmap! We will analyze your website speed, technical SEO, and competitor ad pipelines during a 30-min strategy call.\n\nClick 'Claim Free Audit' or contact us on WhatsApp (+91 93610 88012).";
    }

    if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('address') || query.includes('location') || query.includes('coimbatore')) {
      return "Here are our official DhiGrowth contact details:\n\n📍 Address: Door No. 119, First Floor, Kovai Thirunagar, Kalapatti Main Road, Nehru Nagar West, Coimbatore, Tamil Nadu 641004\n📞 Phone/WhatsApp: +91 93610 88012\n✉️ Email: dinesh@dhigrowth.com";
    }

    return "Thank you for reaching out! DhiGrowth is Coimbatore's premier digital growth partner. We specialize in custom web development, mobile apps, AI automation, and ROI-driven marketing.\n\nWould you like us to prepare a custom proposal for your business?";
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Simulate natural AI thinking response
    setTimeout(() => {
      const aiReplyText = generateAIResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-body">
        
        {/* Dark Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
        />

        {/* AI Chat Window Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#090d18] rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10 flex flex-col h-[640px] max-h-[90vh] my-auto"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#2196E8] via-[#3b82f6] to-[#4A72EB] p-5 text-white flex items-center justify-between relative shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-header text-xl tracking-wide font-bold leading-tight">
                  DhiGrowth AI Assistant
                </h3>
                <div className="flex items-center gap-2 text-xs text-blue-100 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Online • Ask me anything about our services!</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close AI Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Scrolling Body */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-[#060911]">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-[#2196E8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div 
                  className={`max-w-[82%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-[#2196E8] to-[#4A72EB] text-white rounded-tr-none shadow-md font-medium' 
                      : 'bg-white dark:bg-[#0f1524] text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/80 dark:border-slate-800 shadow-sm'
                  }`}
                >
                  {msg.text}
                  <div 
                    className={`text-[9px] mt-1.5 text-right font-mono ${
                      msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-slate-400 text-xs font-medium pl-2">
                <div className="w-7 h-7 rounded-full bg-[#2196E8] text-white flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1 bg-white dark:bg-[#0f1524] px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2196E8] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2196E8] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2196E8] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2.5 bg-slate-100/70 dark:bg-[#0b0f19] border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <Sparkles className="w-3.5 h-3.5 text-[#2196E8] shrink-0" />
            {QUICK_SUGGESTIONS.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sug)}
                className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-[#131a2c] hover:bg-[#2196E8] hover:text-white dark:hover:bg-[#2196E8] dark:hover:text-white px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 shrink-0 transition-colors cursor-pointer"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Footer Input Form */}
          <div className="p-4 bg-white dark:bg-[#0d111c] border-t border-slate-200 dark:border-slate-800">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="flex items-center gap-2 relative"
            >
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Type your message here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-full bg-slate-100 dark:bg-[#131928] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#2196E8] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage("Book Free Digital Audit")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2196E8] transition-colors cursor-pointer"
                  title="Attach File / Request Audit"
                >
                  <Paperclip className="w-4 h-4" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#2196E8] to-[#4A72EB] text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="text-[10px] text-center text-slate-400 mt-2 font-mono">
              Press Enter to send • AI responses tailored for DhiGrowth
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
