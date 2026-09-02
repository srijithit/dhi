"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, FileText, ArrowRight, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';

interface AIChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit?: () => void;
}

interface ActionBtn {
  label: string;
  type: 'service' | 'form' | 'whatsapp' | 'explore';
  payload?: string;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  showServicesList?: boolean;
  actionButtons?: ActionBtn[];
}

interface PrioritizedService {
  name: string;
  query: string;
  icon: string;
  slug: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
}

const PRIORITIZED_SERVICES: PrioritizedService[] = [
  {
    name: "AI Automation",
    query: "Tell me about AI Automation",
    icon: "⚡",
    slug: "ai-automation",
    badge: "Top Priority",
    shortDesc: "Automate repetitive tasks and workflows using intelligent AI solutions.",
    fullDesc: "Our AI Automation eliminates repetitive manual tasks by creating self-running workflows, automated WhatsApp lead funnels, automated invoicing, and intelligent CRM integrations that reduce operational overhead by up to 60%.",
    keyBenefits: ["24/7 Automated Lead Qualification", "Document & Invoice Auto-Parsing", "Instant WhatsApp & Email Responses", "Zero Human Error in Operations"]
  },
  {
    name: "AI Business Growth",
    query: "Tell me about AI Business Growth",
    icon: "📈",
    slug: "business-growth-automation",
    badge: "High Growth",
    shortDesc: "Scale revenue, optimize customer pipelines & drive predictable growth.",
    fullDesc: "AI Business Growth Automation combines sales funnel automation, customer lifetime value optimization, predictive churn prevention, and automated multi-channel follow-ups to multiply your business revenue effortlessly.",
    keyBenefits: ["Predictive Sales Analytics", "Automated Omnichannel Retargeting", "Conversion Rate Optimization (CRO)", "Scalable Customer Acquisition"]
  },
  {
    name: "AI Development",
    query: "Tell me about AI Development",
    icon: "🤖",
    slug: "ai-development",
    badge: "Smart Tech",
    shortDesc: "Custom AI agents, LLM chatbots & tailored machine learning models.",
    fullDesc: "We build enterprise-grade AI products tailored to your industry in Coimbatore. From custom LLM fine-tuning and AI virtual assistants to predictive machine learning algorithms and computer vision quality inspection.",
    keyBenefits: ["Custom AI Virtual Assistants & Bots", "Predictive Analytics & Forecasting", "Computer Vision Quality Inspection", "Natural Language Processing (NLP)"]
  },
  {
    name: "App Development",
    query: "Tell me about App Development",
    icon: "📱",
    slug: "mobile-app-development",
    badge: "iOS & Android",
    shortDesc: "High-performance native & cross-platform mobile apps.",
    fullDesc: "We design and engineer lightning-fast iOS and Android applications with offline-first capabilities, real-time push notifications, biometrics, secure payment gateways, and intuitive user interfaces.",
    keyBenefits: ["Flutter & React Native Cross-Platform", "Native iOS (Swift) & Android (Kotlin)", "Offline Sync & Real-time Cloud", "App Store & Play Store Optimization"]
  },
  {
    name: "Website Development",
    query: "Tell me about Website Development",
    icon: "🌐",
    slug: "web-development",
    badge: "Next.js 16",
    shortDesc: "Fast, modern, high-converting Next.js & React web platforms.",
    fullDesc: "We craft ultra-fast, search-engine-ready, and conversion-focused websites using Next.js 16 (App Router), Tailwind CSS, Framer Motion, and scalable serverless backends with sub-second page speeds.",
    keyBenefits: ["100/100 Google Lighthouse Speed Score", "Mobile-First Responsive Architecture", "SEO & Meta-tags Built-in", "Custom CMS & Admin Dashboards"]
  },
  {
    name: "SEO (Search Engine Optimization)",
    query: "Tell me about SEO",
    icon: "🔍",
    slug: "seo-services",
    badge: "#1 Google Rank",
    shortDesc: "Rank #1 on Google Search and Google Maps Local 3-Pack.",
    fullDesc: "Dominate search engines in Coimbatore and nationwide. We conduct in-depth technical audits, high-intent keyword strategy, high-authority backlink building, and local Google Business Profile optimization to bring free organic leads.",
    keyBenefits: ["Google 3-Pack Local Map Optimization", "Technical Speed & Schema Markup", "High-Authority Backlink Acquisition", "Keyword Intent & Competitor Strategy"]
  },
  {
    name: "Performance Marketing",
    query: "Tell me about Performance Marketing",
    icon: "🚀",
    slug: "performance-marketing",
    badge: "High ROAS",
    shortDesc: "Data-driven Meta & Google Ads campaigns that generate guaranteed leads.",
    fullDesc: "Maximize your advertising ROI with AI-optimized bidding, high-converting ad copy, cinematic video creatives, and precise demographic targeting across Meta (Instagram/Facebook) and Google Ads.",
    keyBenefits: ["AI-Assisted Ad Budget Allocation", "Laser-Targeted Audience Segments", "A/B Creative Split-Testing", "Transparent Real-Time ROI Dashboard"]
  },
  {
    name: "Commercial Video Shooting",
    query: "Tell me about Video Production",
    icon: "🎬",
    slug: "commercial-video-shooting",
    badge: "4K Cinematic",
    shortDesc: "High-end corporate films, brand commercials & social reels.",
    fullDesc: "Tell your brand story with Hollywood-grade 4K cinematography, corporate documentaries, customer testimonial videos, product showcase reels, and drone aerial footage shot right here in Coimbatore.",
    keyBenefits: ["Cinema 4K Cameras & Studio Lighting", "Drone Aerial Cinematography", "Full Post-Production & Color Grading", "Viral Social Media Reel Formats"]
  }
];

const QUICK_SUGGESTIONS = [
  "✨ Services Priority List",
  "⚡ AI Automation",
  "📈 AI Business Growth",
  "🤖 AI Development",
  "📱 App Development",
  "🌐 Website Development",
  "🔍 SEO Services",
  "📋 Open Inquiry Form"
];

export default function AIChatBotModal({ isOpen, onClose, onOpenAudit }: AIChatBotModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "👋 Welcome to **DhiGrowth**! I'm your AI Growth Assistant. How can I help your business scale today?\n\nHere are our **core prioritized digital services** in Coimbatore — click any service to learn more or open our direct project form:",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showServicesList: true,
      actionButtons: [
        { label: "📋 Open Inquiry Form", type: "form" },
        { label: "💬 Chat on WhatsApp", type: "whatsapp" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleOpenForm = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      const el = document.getElementById('audit') || document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/contact';
      }
    }
  };

  const handleWhatsAppDirect = (serviceName?: string) => {
    const text = serviceName 
      ? `Hi DhiGrowth! I'm interested in learning more about your ${serviceName} solutions.`
      : "Hi DhiGrowth! I'd like to discuss digital growth and AI solutions for my business.";
    window.open(`https://api.whatsapp.com/send?phone=919361088012&text=${encodeURIComponent(text)}`, '_blank');
  };

  // Dynamic response generator based on user input and service priority
  const generateAIResponse = (userQuery: string): { text: string; showServicesList?: boolean; actionButtons?: ActionBtn[] } => {
    const query = userQuery.toLowerCase();

    // Direct form request
    if (query.includes('form') || query.includes('inquiry') || query.includes('book') || query.includes('audit') || query.includes('consultation')) {
      return {
        text: "🎯 **Ready to scale with DhiGrowth?**\n\nYou can fill out our **Quick Inquiry Form** right now to receive a customized growth roadmap and free cost estimate within 24 hours!",
        actionButtons: [
          { label: "📋 Open Inquiry Form Now", type: "form" },
          { label: "💬 WhatsApp Us Directly", type: "whatsapp" }
        ]
      };
    }

    // Specific Service Matches
    const matchedService = PRIORITIZED_SERVICES.find(s => 
      query.includes(s.slug) || 
      query.includes(s.name.toLowerCase()) || 
      (s.name === "SEO (Search Engine Optimization)" && query.includes("seo")) ||
      (s.name === "AI Business Growth" && (query.includes("growth") || query.includes("bussiness") || query.includes("business growth"))) ||
      (s.name === "AI Automation" && query.includes("automation")) ||
      (s.name === "AI Development" && (query.includes("ai development") || query.includes("smart tech"))) ||
      (s.name === "App Development" && (query.includes("app") || query.includes("mobile"))) ||
      (s.name === "Website Development" && (query.includes("website") || query.includes("web development"))) ||
      (s.name === "Performance Marketing" && (query.includes("marketing") || query.includes("ads") || query.includes("meta"))) ||
      (s.name === "Commercial Video Shooting" && (query.includes("video") || query.includes("shooting") || query.includes("production")))
    );

    if (matchedService) {
      const benefitsText = matchedService.keyBenefits.map(b => `• ✅ **${b}**`).join('\n');
      return {
        text: `${matchedService.icon} **${matchedService.name}** [${matchedService.badge}]\n\n${matchedService.fullDesc}\n\n**Key Capabilities & Deliverables:**\n${benefitsText}\n\nWould you like a custom proposal or quotation for **${matchedService.name}**?`,
        actionButtons: [
          { label: `📋 Open Form for ${matchedService.name}`, type: "form" },
          { label: "💬 Discuss on WhatsApp", type: "whatsapp", payload: matchedService.name },
          { label: "✨ View Other Services", type: "explore" }
        ]
      };
    }

    // General services overview query
    if (query.includes('service') || query.includes('priority') || query.includes('offer') || query.includes('what do you do') || query.includes('list')) {
      return {
        text: "Here are our **prioritized growth solutions** tailored for modern businesses in Coimbatore & globally. Click on any service below to get instant details or submit your project inquiry form:",
        showServicesList: true,
        actionButtons: [
          { label: "📋 Open Project Inquiry Form", type: "form" },
          { label: "💬 Quick WhatsApp Chat", type: "whatsapp" }
        ]
      };
    }

    // Pricing query
    if (query.includes('cost') || query.includes('price') || query.includes('pricing') || query.includes('budget') || query.includes('rate')) {
      return {
        text: "💡 **Transparent & Tailored Pricing:**\n\nOur pricing is customized to your exact requirements and business size (Startup, SME, or Enterprise) to maximize your ROI.\n\nSubmit your project requirements via our **Inquiry Form** for an exact breakdown and free consultation.",
        actionButtons: [
          { label: "📋 Open Cost Estimation Form", type: "form" },
          { label: "💬 Talk to Our Strategy Team", type: "whatsapp" }
        ]
      };
    }

    // Default friendly assistant fallback
    return {
      text: `Thank you for connecting with **DhiGrowth**!\n\nWe specialize in **AI Automation**, **AI Business Growth**, **AI Development**, **Mobile App Development**, **Website Development**, and **SEO Ranking**.\n\nChoose an option below or open our quick form:`,
      showServicesList: true,
      actionButtons: [
        { label: "📋 Fill Project Inquiry Form", type: "form" },
        { label: "💬 WhatsApp Us Now", type: "whatsapp" }
      ]
    };
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
      const aiReply = generateAIResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showServicesList: aiReply.showServicesList,
        actionButtons: aiReply.actionButtons
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div 
            key="dhi-ai-chat-panel"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 font-body w-full h-full sm:max-w-4xl sm:h-[88vh] bg-white dark:bg-[#090d18] sm:rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col"
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-[#2196E8] via-[#3b82f6] to-[#4A72EB] px-6 py-4 text-white flex items-center justify-between relative shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-header text-xl tracking-wide font-bold leading-tight">
                    DhiGrowth AI Assistant
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-blue-100 font-medium mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • Priority Services & AI Solutions</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
                aria-label="Close AI Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Scrolling Body */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto space-y-4 bg-slate-50/60 dark:bg-[#060911]">
              <div className="max-w-3xl mx-auto space-y-4">
                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`flex gap-3 max-w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.sender === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-[#2196E8] text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div 
                        className={`p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                          msg.sender === 'user' 
                            ? 'bg-gradient-to-r from-[#2196E8] to-[#4A72EB] text-white rounded-tr-none font-medium max-w-[85%]' 
                            : 'bg-white dark:bg-[#0f1524] text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/80 dark:border-slate-800 w-full'
                        }`}
                      >
                        {msg.text}

                        {/* Interactive Priority Services List (Click-to-tell) */}
                        {msg.showServicesList && (
                          <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 space-y-2.5">
                            <div className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#2196E8]" />
                              <span>Click any service to tell about:</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {PRIORITIZED_SERVICES.map((svc, index) => (
                                <button
                                  key={svc.slug}
                                  onClick={() => handleSendMessage(svc.query)}
                                  className="w-full text-left p-3 rounded-2xl bg-slate-50 dark:bg-[#131929] hover:bg-[#2196E8]/10 hover:border-[#2196E8]/40 border border-slate-200/70 dark:border-slate-800 transition-all flex items-center justify-between group cursor-pointer"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <span className="text-lg">{svc.icon}</span>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-[#2196E8] transition-colors">
                                          {index + 1}. {svc.name}
                                        </span>
                                        <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/80 text-[#2196E8] font-bold">
                                          {svc.badge}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                        {svc.shortDesc}
                                      </p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2196E8] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons (Form, WhatsApp, Explore) */}
                        {msg.actionButtons && msg.actionButtons.length > 0 && (
                          <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-2.5">
                            {msg.actionButtons.map((btn, bIdx) => {
                              if (btn.type === 'form') {
                                return (
                                  <button
                                    key={bIdx}
                                    onClick={handleOpenForm}
                                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                    <span>{btn.label}</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </button>
                                );
                              }

                              if (btn.type === 'whatsapp') {
                                return (
                                  <button
                                    key={bIdx}
                                    onClick={() => handleWhatsAppDirect(btn.payload)}
                                    className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>{btn.label}</span>
                                  </button>
                                );
                              }

                              return (
                                <button
                                  key={bIdx}
                                  onClick={() => handleSendMessage("Show All Services")}
                                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                                >
                                  <Sparkles className="w-3.5 h-3.5 text-[#2196E8]" />
                                  <span>{btn.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        <div 
                          className={`text-[9px] mt-2.5 text-right font-mono ${
                            msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                          }`}
                        >
                          {msg.timestamp}
                        </div>
                      </div>

                      {msg.sender === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <div className="flex gap-3 items-center text-slate-400 text-xs font-medium pl-1">
                    <div className="w-7 h-7 rounded-full bg-[#2196E8] text-white flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-1.5 bg-white dark:bg-[#0f1524] px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2196E8] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2196E8] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2196E8] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2.5 bg-slate-100/90 dark:bg-[#0b0f19] border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <div className="max-w-3xl mx-auto w-full flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2196E8] shrink-0" />
                {QUICK_SUGGESTIONS.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (sug === "📋 Open Inquiry Form") {
                        handleOpenForm();
                      } else {
                        handleSendMessage(sug);
                      }
                    }}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border shrink-0 transition-all cursor-pointer whitespace-nowrap ${
                      sug === "📋 Open Inquiry Form"
                        ? "bg-[#2196E8] text-white border-[#2196E8] shadow-sm hover:bg-[#1b84cf]"
                        : "text-slate-700 dark:text-slate-300 bg-white dark:bg-[#131a2c] hover:bg-[#2196E8] hover:text-white dark:hover:bg-[#2196E8] dark:hover:text-white border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Input Form */}
            <div className="p-4 sm:p-5 bg-white dark:bg-[#0d111c] border-t border-slate-200 dark:border-slate-800">
              <div className="max-w-3xl mx-auto w-full">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                  className="flex items-center gap-2.5 relative"
                >
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      placeholder="Ask about AI Automation, App/Web Dev..."
                      value={inputValue}
                      onKeyDown={(e) => {
                        if (e.key === ' ' && (e.currentTarget.selectionStart === 0 || e.currentTarget.value.length === 0)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) => {
                        let val = e.target.value.replace(/^\s+/, '');
                        setInputValue(val);
                      }}
                      className="w-full pl-4 pr-10 py-3 rounded-2xl bg-slate-100 dark:bg-[#131928] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#2196E8] transition-colors placeholder:text-slate-400"
                    />
                    <button
                      type="button"
                      onClick={handleOpenForm}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2196E8] transition-colors cursor-pointer"
                      title="Open Project Inquiry Form"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="flex items-center justify-between text-xs text-slate-400 mt-2 px-1 font-mono">
                  <span>Press Enter to send</span>
                  <button 
                    onClick={handleOpenForm}
                    className="text-[#2196E8] hover:underline font-bold font-body cursor-pointer flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Open Lead Form</span>
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
