"use client";

import React, { use, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import confetti from 'canvas-confetti';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { detailedCaseStudies } from '@/data/caseStudiesFull';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Check,
  Zap,
  MapPin,
  Database,
  Layers,
  Sparkles,
  TrendingUp,
  Truck,
  Shield,
  Headphones,
  ChevronDown,
  ChevronUp,
  Globe,
  ExternalLink,
} from 'lucide-react';

export default function DynamicCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const study = detailedCaseStudies.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  const [currentCoverSlide, setCurrentCoverSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const [solutionIdx, setSolutionIdx] = useState(0);
  const [expandedProductExp, setExpandedProductExp] = useState<{ [key: number]: boolean }>({});
  const [highlightIdx, setHighlightIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance cover banner
  useEffect(() => {
    const timer = setInterval(() => setCurrentCoverSlide((p) => (p + 1) % 3), 4500);
    return () => clearInterval(timer);
  }, []);

  // Auto-play for Highlights 3D Phone carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const [solutionDirection, setSolutionDirection] = useState(1);
  const [solutionInView, setSolutionInView] = useState(false);
  const [solutionIsHovered, setSolutionIsHovered] = useState(false);
  const solutionSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: solutionScrollProgress } = useScroll({
    target: solutionSectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(solutionScrollProgress, "change", (latest) => {
    const total = 5;
    if (total <= 1) return;
    const targetIdx = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    if (targetIdx !== solutionIdx) {
      setSolutionDirection(targetIdx > solutionIdx ? 1 : -1);
      setSolutionIdx(targetIdx);
    }
  });

  const paginateSolution = (newDirection: number) => {
    setSolutionDirection(newDirection);
    setSolutionIdx((prev) => {
      let next = prev + newDirection;
      if (next < 0) return 4;
      if (next >= 5) return 0;
      return next;
    });
  };

  const handleNextSolution = () => paginateSolution(1);
  const handlePrevSolution = () => paginateSolution(-1);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
        setVideoPlaying(false);
      } else {
        videoRef.current.play();
        setVideoPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };


  const toggleProductExp = (idx: number) => {
    setExpandedProductExp((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Touch / Drag Swipe Handlers for Overview & Highlights Carousels
  const [touchStartXOverview, setTouchStartXOverview] = useState<number | null>(null);
  const [touchStartXHighlight, setTouchStartXHighlight] = useState<number | null>(null);

  const handleTouchStartOverview = (clientX: number) => {
    setTouchStartXOverview(clientX);
  };

  const handleTouchEndOverview = (clientX: number) => {
    if (touchStartXOverview === null) return;
    const diff = touchStartXOverview - clientX;
    if (diff > 35) {
      setCurrentCoverSlide((prev) => (prev === 2 ? 0 : prev + 1));
    } else if (diff < -35) {
      setCurrentCoverSlide((prev) => (prev === 0 ? 2 : prev - 1));
    }
    setTouchStartXOverview(null);
  };

  const handleTouchStartHighlight = (clientX: number) => {
    setTouchStartXHighlight(clientX);
  };

  const handleTouchEndHighlight = (clientX: number) => {
    if (touchStartXHighlight === null) return;
    const diff = touchStartXHighlight - clientX;
    if (diff > 35) {
      setHighlightIdx((prev) => (prev + 1) % 3);
    } else if (diff < -35) {
      setHighlightIdx((prev) => (prev - 1 + 3) % 3);
    }
    setTouchStartXHighlight(null);
  };

  // Helper functions to cleanly split bullets and shorten content
  const splitCleanItems = (input: string | string[] | undefined): string[] => {
    if (!input) return [];
    if (Array.isArray(input)) {
      return input.flatMap((item) => splitCleanItems(item));
    }
    return input
      .split(/[•\n]+/)
      .map((s) => s.trim().replace(/^[-*•\d.)\s]+/, ''))
      .filter((s) => s.length > 3 && !s.toLowerCase().startsWith('key challenge') && !s.toLowerCase().startsWith('the platform includes'));
  };

  const extractTitleAndDesc = (text: string, defaultTitle: string, defaultDesc: string) => {
    if (!text) return { title: defaultTitle, desc: defaultDesc };
    const sep = text.includes(':') ? ':' : text.includes('—') ? '—' : text.includes('–') ? '–' : '-';
    if (text.includes(sep)) {
      const parts = text.split(sep);
      const title = parts[0].trim().replace(/^[-*•\d.)\s]+/, '');
      const desc = parts.slice(1).join(sep).trim();
      return {
        title: title.length > 55 ? title.slice(0, 52) + '...' : title,
        desc: desc.length > 140 ? desc.slice(0, 135) + '...' : desc,
      };
    }
    return {
      title: text.length > 55 ? text.slice(0, 52) + '...' : text,
      desc: defaultDesc,
    };
  };

  const cleanAboutParagraphs = (aboutText?: string, subtitle?: string) => {
    if (!aboutText) return [subtitle || '', ''];
    const rawItems = aboutText.split(/[•\n]+/).map((s) => s.trim()).filter((s) => s.length > 8);
    
    const sanitize = (str: string, maxLen = 170) => {
      let s = str.replace(/^[-*•\d.)\s]+/, '').trim();
      if (s.includes(':')) {
        const after = s.split(':')[1].trim();
        if (after.length > 15) s = after;
      }
      // Take only the first sentence for optimal brevity
      const match = s.match(/^([^.!?]+[.!?])/);
      if (match) {
        s = match[1].trim();
      }
      if (s.length > maxLen) {
        s = s.slice(0, maxLen - 3).trim() + '...';
      }
      return s;
    };

    if (rawItems.length >= 2) {
      const p1 = sanitize(rawItems[0]);
      const p2 = sanitize(rawItems[1]);
      return [p1, p2];
    } else if (rawItems.length === 1) {
      const p1 = sanitize(rawItems[0]);
      return [p1, ''];
    }
    return [subtitle || '', ''];
  };

  const [aboutP1, aboutP2] = cleanAboutParagraphs(study.about, study.subtitle);

  // 1. Dynamic Challenges Extraction (4 Clean Cards)
  const challengeLines = splitCleanItems(study.challenges);

  const defaultChallenges = [
    'High-Concurrency Traffic & Session Management',
    'Real-Time Pincode & Serviceability Validation',
    'Automated Subscription & Daily Delivery Engine',
    'Multi-Cart & Zero-Latency Reordering Architecture',
  ];

  const challengeCards = Array.from({ length: 4 }).map((_, i) => {
    const raw = challengeLines[i];
    if (raw) {
      const title = raw.includes(':') ? raw.split(':')[0].trim() : raw.includes('—') ? raw.split('—')[0].trim() : raw.trim();
      return { title: title.length > 55 ? title.slice(0, 52) + '...' : title };
    }
    return { title: defaultChallenges[i] };
  });

  // 2. Dynamic Solution Deck Extraction (5 Cards)
  const solutionTags = [
    'CORE PLATFORM',
    'CHECKOUT ENGINE',
    'SECURITY & PROFILES',
    'REALTIME DISPATCH',
    'DATABASE ARCHITECTURE',
  ];

  const defaultSolutionTitles = [
    'Real–time multi–hub allocation',
    '1–click direct transaction flow',
    'Automated recurring billing pipeline',
    'Hyperlocal geofencing & tracking',
    'Single source of truth ledger',
  ];

  const defaultSolutionDescs = [
    'Dynamic scheduling engine validating live stock across nearest hubs, ensuring low latency and automated routing.',
    'Optimized single-step checkout reducing friction, validating live data, and cutting drop-offs by over 60%.',
    'Automated payment settlements and scheduled ledger sync with 1-tap administrative overrides and instant invoicing.',
    'GPS-guided dispatch algorithms routing tasks with sub-second precision straight to customer devices.',
    'Strict transactional concurrency guards ensuring total inventory and account sync during peak traffic hours.',
  ];

  // Project Real Showcase Images Mapping (Extracted directly from client websites)
  const showcaseImageMap: Record<string, string[]> = {
    'squirlio': [
      '/images/case-studies/squirlio/banner_1.jpeg',
      '/images/case-studies/squirlio/squirlio_product_1.png',
      '/images/case-studies/squirlio/squirlio_product_2.png',
      '/images/case-studies/squirlio/squirlio_product_3.png',
      '/images/case-studies/squirlio/tab-view.png',
    ],
    'infragen': [
      '/images/case-studies/infragen/showcase_3.jpg',
      '/images/case-studies/infragen/showcase_4.jpg',
      '/images/case-studies/infragen/showcase_5.jpg',
      '/images/case-studies/infragen/showcase_6.jpg',
      '/images/case-studies/infragen/property.jpg',
    ],
    'verdurepax': [
      '/images/case-studies/verdurepax/showcase_3.jpeg',
      '/images/case-studies/verdurepax/showcase_4.jpg',
      '/images/case-studies/verdurepax/showcase_5.jpeg',
      '/images/case-studies/verdurepax/showcase_6.jpeg',
      '/images/case-studies/verdurepax/showcase_3.jpeg',
    ],
    'befhue': [
      '/images/case-studies/befhue/showcase_3.webp',
      '/images/case-studies/befhue/showcase_4.webp',
      '/images/case-studies/befhue/showcase_5.webp',
      '/images/case-studies/befhue/showcase_6.webp',
      '/images/case-studies/befhue/showcase_3.webp',
    ],
    'sanikas-restaurant': [
      '/images/case-studies/sanikas-restaurant/showcase_3.png',
      '/images/case-studies/sanikas-restaurant/showcase_4.png',
      '/images/case-studies/sanikas-restaurant/showcase_5.png',
      '/images/case-studies/sanikas-restaurant/showcase_6.png',
      '/images/case-studies/sanikas-restaurant/showcase_3.png',
    ],
    'ai-invoice-processing': [
      '/images/case-studies/ai-invoice-processing/showcase_3.png',
      '/images/case-studies/ai-invoice-processing/showcase_5.png',
      '/images/case-studies/ai-invoice-processing/showcase_6.png',
      '/images/case-studies/ai-invoice-processing/showcase_2.webp',
      '/images/case-studies/ai-invoice-processing/showcase_3.png',
    ],
    'ruts-n-rides': [
      '/images/case-studies/ruts-n-rides/showcase_1.png',
      '/images/case-studies/ruts-n-rides/showcase_1.png',
      '/images/case-studies/ruts-n-rides/showcase_1.png',
    ],
    'startten': [
      '/images/case-studies/startten/showcase_1.png',
      '/images/case-studies/startten/showcase_1.png',
      '/images/case-studies/startten/showcase_1.png',
    ],
  };

  const projectImages = showcaseImageMap[study.slug] || [
    '/images/cc_overview_slide1.png',
    '/images/cc_overview_slide2.png',
    '/images/cc_overview_slide3.png',
  ];

  const solutionRawList = splitCleanItems(study.solutionBullets?.length ? study.solutionBullets : study.solutions);

  const solutionDeck = Array.from({ length: 5 }).map((_, i) => {
    const raw = solutionRawList[i];
    const { title, desc } = extractTitleAndDesc(raw, defaultSolutionTitles[i], defaultSolutionDescs[i]);
    return {
      num: `0${i + 1}`,
      tag: solutionTags[i],
      watermark: solutionTags[i].replace('&', 'AND'),
      title,
      desc,
      img: showcaseImageMap[study.slug]?.[i] || ((study.image && study.image.startsWith('http')) ? study.image : '/images/cc_highlight_category.jpg'),
    };
  });

  // 3. Dynamic Product Experience (4 Cards in 2x2 Grid)
  const productExpIcons = [
    <Sparkles key="1" className="w-5 h-5 text-[#2196E8]" />,
    <TrendingUp key="2" className="w-5 h-5 text-[#2196E8]" />,
    <Layers key="3" className="w-5 h-5 text-[#2196E8]" />,
    <Zap key="4" className="w-5 h-5 text-[#2196E8]" />,
  ];

  const defaultExpTitles = [
    'Visually Rich UI & Micro-Animations',
    'Real-Time State Indicators',
    'Intuitive Guided Workflows',
    'Frictionless Reorder & Automation',
  ];

  const productExpRawList = splitCleanItems(study.productExperience);

  const productExpCards = Array.from({ length: 4 }).map((_, i) => {
    const raw = productExpRawList[i];
    const { title, desc } = extractTitleAndDesc(
      raw,
      defaultExpTitles[i],
      `${study.title} provides a scalable interface with instant caching and real-time validations.`
    );
    return {
      icon: productExpIcons[i],
      title,
      shortDesc: desc.length > 110 ? desc.slice(0, 105) + '...' : desc,
      fullDesc: desc,
    };
  });

  // 4. Dynamic Highlights (3 Cards)
  const defaultHighlightScreens = [
    '/images/cc_highlight_product.jpg',
    '/images/cc_highlight_category.jpg',
    '/images/cc_highlight_store.jpg',
  ];

  const highlightRawList = splitCleanItems(study.highlights);

  const highlightItems = Array.from({ length: 3 }).map((_, i) => {
    const raw = highlightRawList[i];
    const { title, desc } = extractTitleAndDesc(
      raw,
      defaultExpTitles[i],
      `High-performance modular architecture engineered for scale and speed in ${study.title}.`
    );
    const customScreens = showcaseImageMap[study.slug];
    return {
      id: i,
      icon: i === 0 ? <Zap className="w-5 h-5 text-[#2196E8]" /> : i === 1 ? <MapPin className="w-5 h-5 text-[#2196E8]" /> : <Database className="w-5 h-5 text-[#2196E8]" />,
      title,
      desc,
      screen: customScreens?.[i] || ((study.image && study.image.startsWith('http')) ? study.image : defaultHighlightScreens[i]),
    };
  });

  // 5. Tech Stack with Official Brand Logos
  const techStackList = [
    {
      name: 'Next.js',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.665 21.978C16.71 23.275 14.417 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.125-1.077 6.012-2.924 8.27L9.957 6.785H7.714v10.43h1.714v-7.85l9.237 12.613zm-.951-1.393L8.857 7.935v7.71h1.714v-5.28l7.143 10.22z"/>
        </svg>
      ),
      bg: 'bg-black text-white'
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-5 h-5 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      ),
      bg: 'bg-cyan-50'
    },
    {
      name: 'TypeScript',
      icon: (
        <svg className="w-5 h-5 shrink-0 rounded" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.75 14.4c0 2.25-1.4 3.6-3.8 3.6-1.5 0-2.65-.5-3.3-1.15l1-1.85c.55.45 1.3.8 2.15.8 1.15 0 1.85-.6 1.85-1.45 0-.85-.65-1.3-1.9-1.8-1.75-.7-2.7-1.5-2.7-3.05 0-2 1.55-3.35 3.6-3.35 1.3 0 2.25.4 2.85.85l-.95 1.85c-.5-.35-1.1-.65-1.85-.65-.9 0-1.55.5-1.55 1.25 0 .75.5 1.15 1.7 1.65 1.8.75 2.9 1.65 2.9 3.25zm8.25-6.2v1.9h-2.8v7.7h-2.35v-7.7H12v-1.9h8z" fill="#FFFFFF"/>
        </svg>
      ),
      bg: 'bg-transparent'
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-5 h-5 text-[#539E43] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.6l9.6 5.5v11L12 23.6 2.4 18.1V7.1L12 1.6zm0 2.3L4.4 8.3v7.4L12 20.1l7.6-4.4V8.3L12 3.9zm-.1 3.5c1.9 0 3.4.6 3.4 2.4v5.6c0 1.9-1.5 2.4-3.4 2.4s-3.4-.6-3.4-2.4V9.8c0-1.8 1.5-2.4 3.4-2.4zm0 2c-1 0-1.4.3-1.4 1v4.4c0 .7.4 1 1.4 1s1.4-.3 1.4-1v-4.4c0-.7-.4-1-1.4-1z"/>
        </svg>
      ),
      bg: 'bg-emerald-50'
    },
    {
      name: 'Express',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="4" fill="#18181B" />
          <path d="M6 8h4.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H8v3H6V8zm2 3.5h2.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8v1zm5.5-3.5h2l1.8 3.2L19 8h2l-2.8 4.6L21 17h-2l-1.9-3.4L15.2 17h-2l2.9-4.5L13.5 8z" fill="#FAFAFA" />
        </svg>
      ),
      bg: 'bg-transparent'
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#336791" />
          <path d="M12 4.5c-3.8 0-6.8 2.5-6.8 5.6 0 1.9 1.1 3.5 2.8 4.5v3.4l2.8-1.5c.4.1.8.1 1.2.1 3.8 0 6.8-2.5 6.8-5.6s-3-6.5-6.8-6.5zm0 1.8c2.8 0 5 1.8 5 4.1 0 2.3-2.2 4.1-5 4.1-.4 0-.8 0-1.2-.1l-.4-.1-1.6.8v-1.6l-.4-.3c-1-1-1.4-1.9-1.4-2.9 0-2.3 2.2-4.1 5-4.1z" fill="#FFFFFF"/>
        </svg>
      ),
      bg: 'bg-transparent'
    },
    {
      name: 'Flutter',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#02569B">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.314 11.235L8.528 17.02l5.786 5.786h7.37l-9.37-9.37 3.585-3.586h-1.585z"/>
        </svg>
      ),
      bg: 'bg-blue-50'
    },
    {
      name: 'React',
      icon: (
        <svg className="w-5 h-5 text-[#61DAFB] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)"/>
        </svg>
      ),
      bg: 'bg-slate-900'
    },
    {
      name: 'Redis',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#DC382D">
          <path d="M12 2L2 6.5v11L12 22l10-4.5v-11L12 2zm0 2.2l7.5 3.4-7.5 3.4-7.5-3.4L12 4.2zM3.8 8.7l7.2 3.2v7.7l-7.2-3.2V8.7zm9.2 10.9v-7.7l7.2-3.2v7.7l-7.2 3.2z"/>
        </svg>
      ),
      bg: 'bg-red-50'
    },
  ];

  // 6. Dynamic Scope (6 Cards in 3x2 Grid)
  const scopeTags = [
    'STOREFRONT & CATALOG',
    'CHECKOUT CORE',
    'SECURITY & PROFILES',
    'LOGISTICS & OPERATIONS',
    'LIFECYCLE MANAGEMENT',
    'GATEWAY INTEGRATION',
  ];

  const defaultScopeTitles = [
    'Discovery & Public Platform',
    'High-Speed Core Engine',
    'Authentication & Profiles',
    'Real-Time Serviceability & Geofencing',
    'End-to-End Tracking & History',
    'Secure Multi-Step Integration',
  ];

  const scopeCards = Array.from({ length: 6 }).map((_, i) => ({
    num: `0${i + 1}`,
    tag: scopeTags[i],
    title: defaultScopeTitles[i],
    desc: `Engineered end-to-end module for ${study.title} delivering maximum reliability, responsive speed, and complete transactional integrity.`,
  }));

  // 7. Results Stats
  const resultsStats = [
    { value: '8,640+', label: 'OPERATIONS / MONTH', color: 'text-[#2196E8]' },
    { value: '100%', label: 'VERIFIABLE LEDGER', color: 'text-emerald-500' },
    { value: '50%', label: 'FASTER CONVERSION', color: 'text-amber-500' },
    { value: '99.9%', label: 'UPTIME RELIABILITY', color: 'text-purple-500' },
  ];

  // Brand Logo Mapping (Extracted directly from client websites)
  const logoMap: Record<string, string> = {
    'clean-culture': '/images/case-studies/logos/clean_culture.png',
    'infragen': '/images/case-studies/logos/infragen.png',
    'verdurepax': '/images/case-studies/logos/verdurepax.png',
    'befhue': '/images/case-studies/logos/befhue.png',
    'ruts-n-rides': '/images/case-studies/logos/rutsnrides.png',
    'ruts-n-rides-admin': '/images/case-studies/logos/rutsnrides.png',
    'sanikas-restaurant': '/images/case-studies/logos/sanikas.png',
    'keystone': '/images/case-studies/logos/keystone.ico',
    'startten': '/images/case-studies/logos/startten.ico',
    'thoorigai': '/images/case-studies/logos/thoorigai.ico',
    'gigabull': '/images/case-studies/logos/gigabull.ico',
    'squirlio': '/images/case-studies/logos/squirlio.png',
  };
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const confettiInstanceRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize Confetti Canvas & IntersectionObserver for auto trigger on scroll into view
  useEffect(() => {
    if (confettiCanvasRef.current && typeof confetti !== 'undefined') {
      confettiInstanceRef.current = confetti.create(confettiCanvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }

    const section = document.getElementById('app-is-live-section');
    if (section && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerSideCannons();
            } else {
              stopSideCannons();
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(section);
      return () => {
        observer.disconnect();
        stopSideCannons();
      };
    }
  }, []);

  const stopSideCannons = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (confettiInstanceRef.current && typeof confettiInstanceRef.current.reset === 'function') {
      confettiInstanceRef.current.reset();
    }
  };

  // Side Cannons Confetti Burst Trigger Function
  const triggerSideCannons = () => {
    if (!confettiInstanceRef.current && confettiCanvasRef.current && typeof confetti !== 'undefined') {
      confettiInstanceRef.current = confetti.create(confettiCanvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }
    const fire = confettiInstanceRef.current || confetti;
    if (typeof fire !== 'function') return;
    const end = Date.now() + 3.5 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1", "#10b981", "#38bdf8", "#facc15"];

    const frame = () => {
      if (Date.now() > end) {
        stopSideCannons();
        return;
      }
      // Left Side Cannon Burst
      fire({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 55,
        origin: { x: 0, y: 0.6 },
        colors: colors,
      });
      // Right Side Cannon Burst
      fire({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 55,
        origin: { x: 1, y: 0.6 },
        colors: colors,
      });
      animationFrameRef.current = requestAnimationFrame(frame);
    };
    frame();
  };

  const customLogo = logoMap[study.slug];

  // Smart Link Extraction (Mobile App vs Web Only vs Enterprise/AI)
  const hasPlayStore = study.link.includes('play.google.com');
  const playStoreLink = hasPlayStore
    ? study.link.match(/https:\/\/play\.google\.com[^\s\)]+/)?.[0] || 'https://play.google.com'
    : '';

  const hasAppStore = study.link.includes('apps.apple.com');
  const appStoreLink = hasAppStore
    ? study.link.match(/https:\/\/apps\.apple\.com[^\s\)]+/)?.[0] || 'https://apple.com/app-store'
    : '';

  const allUrls: string[] = study.link.match(/https?:\/\/[^\s\)]+/g) || [];
  const webLink = allUrls.find(
    (u) =>
      !u.includes('play.google.com') &&
      !u.includes('apps.apple.com') &&
      !u.includes('api.dhigrowth.com') &&
      !u.includes('staging-api')
  ) || (study.slug === 'infragen' ? 'https://dhigrowth07.github.io/infragen-fe/' : '');

  const isMobileApp = Boolean(hasPlayStore || hasAppStore);
  const isWebOnly = !isMobileApp && Boolean(webLink);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body antialiased selection:bg-[#2196E8]/20 selection:text-[#2196E8]">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top font-body bg-white">
        
        {/* ── TOP PANORAMIC COVER HERO ── */}
        <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-slate-950 flex items-center justify-center font-body group">
          <div className="absolute inset-0 z-0">
            <img
              src={study.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80'}
              alt={`${study.title} Cover Banner`}
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-110 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-[#2196E8] animate-pulse" />
              <span>{study.category} Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto font-body drop-shadow-md">
              Building Digital Growth Through Tailored Innovation
            </h1>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#overview"
                className="px-6 py-2.5 rounded-full bg-[#2196E8] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wide transition shadow-lg shadow-blue-500/30 cursor-pointer"
              >
                Jump to Overview ↓
              </a>
            </div>
          </div>
        </section>

        {/* ── 01 OVERVIEW / ABOUT US ── */}
        <section id="overview" className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden font-body">
          {/* Subtle Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <span className="text-[7rem] sm:text-[11rem] font-black text-slate-100/70 tracking-[0.2em] uppercase whitespace-nowrap">
              {study.title}
            </span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Column: About us Text */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center space-x-3.5">
                  {customLogo ? (
                    <div className="w-12 h-12 rounded-xl shadow-md flex items-center justify-center bg-white border-2 border-slate-200 p-1.5 overflow-hidden">
                      <img src={customLogo} alt={`${study.title} Logo`} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl shadow-md flex items-center justify-center bg-[#2196E8] text-white font-extrabold text-xl border-2 border-blue-400">
                      {study.title.charAt(0)}
                    </div>
                  )}
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-body">
                    About us
                  </h2>
                </div>
                
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>{aboutP1}</p>
                  {aboutP2 && <p>{aboutP2}</p>}
                </div>
              </div>

              {/* Right Column: 3D iPhone Slideshow with Dark Pill Pagination, Hover Nav Arrows & Motion Drag Swipe */}
              <div className="lg:col-span-6 flex justify-center py-2">
                <div className="relative w-[300px] sm:w-[380px] group">
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -35 || info.velocity.x < -250) {
                        setCurrentCoverSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
                      } else if (info.offset.x > 35 || info.velocity.x > 250) {
                        setCurrentCoverSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
                      }
                    }}
                    className="relative w-full h-[420px] sm:h-[480px] flex items-center justify-center drop-shadow-2xl cursor-grab active:cursor-grabbing select-none"
                  >
                    {projectImages.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${study.title} Screen ${idx + 1}`}
                        draggable={false}
                        className={`absolute inset-0 w-full h-full object-contain rounded-2xl transition-all duration-700 pointer-events-none select-none ${
                          currentCoverSlide === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'
                        }`}
                      />
                    ))}

                    {/* Left & Right Slider Arrow Buttons (Visible on Hover) */}
                    <button
                      onClick={() => setCurrentCoverSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                      title="Previous Slide"
                      className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E293B]/90 hover:bg-[#2196E8] text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => setCurrentCoverSlide((prev) => (prev === 2 ? 0 : prev + 1))}
                      title="Next Slide"
                      className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E293B]/90 hover:bg-[#2196E8] text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dark Pill Pagination */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 bg-slate-900/90 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
                      {[0, 1, 2].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentCoverSlide(idx)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${
                            currentCoverSlide === idx ? 'w-5 h-2 bg-emerald-400' : 'w-2 h-2 bg-slate-500'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEAMLESS CURVED BLEND DIVIDER (WHITE TO DARK) ── */}
        <div className="w-full overflow-hidden leading-none bg-white -mb-px relative z-10">
          <svg className="relative block w-full h-6 sm:h-10 text-[#070B14]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── 1. CHALLENGES (DARK THEME) ── */}
        <section id="challenges" className="w-full bg-[#070B14] text-white pt-8 pb-6 sm:pt-12 sm:pb-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-body inline-block relative">
                Challenges
                <span className="block w-14 h-1 bg-[#2196E8] rounded-full mx-auto mt-2" />
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Custom Video/Demo Player for Clean Culture, or Visual Mockup for other studies */}
              <div className="lg:col-span-5 flex justify-center">
                {study.slug === 'clean-culture' ? (
                  <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-[#0B1324] group">
                    <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-950 flex items-center justify-center overflow-hidden">
                      <video
                        ref={videoRef}
                        loop
                        muted={videoMuted}
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/videos/clean_culture_overview.mp4" type="video/mp4" />
                      </video>

                      {/* Bottom Video Controls Bar */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6 z-20 flex flex-col gap-2">
                        <div className="w-full bg-slate-700/80 h-1.5 rounded-full overflow-hidden flex cursor-pointer">
                          <div className="bg-[#2196E8] w-2/3 h-full rounded-full" />
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                          <div className="flex items-center gap-3">
                            <button onClick={togglePlay} className="hover:text-white transition cursor-pointer">
                              {videoPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                            </button>
                            <span>0:00 / 0:05</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button onClick={toggleMute} className="hover:text-white transition cursor-pointer">
                              {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                            <button onClick={toggleFullscreen} className="hover:text-white transition cursor-pointer">
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full max-w-md h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-[#0B1324] flex items-center justify-center group">
                    <img
                      src={showcaseImageMap[study.slug]?.[0] || study.image || '/images/cc_highlight_product.jpg'}
                      alt={`${study.title} Showcase`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    {/* Bottom Floating Info Pill */}
                    <div className="absolute bottom-4 inset-x-4 flex items-center justify-between p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 shadow-lg">
                      <div className="flex items-center space-x-2.5">
                        {customLogo ? (
                          <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 border border-slate-200">
                            <img src={customLogo} alt={study.title} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-[#2196E8] text-white font-bold text-xs flex items-center justify-center shrink-0">
                            {study.title.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white font-body leading-tight">{study.title}</h4>
                          <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase leading-none">{study.category} • Core Architecture</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
                        Verified
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: 6 Checkmark Cards */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  Engineering the {study.title} platform required building a high-concurrency architecture capable of handling complex state management, real-time validation, and automated backend calculation workflows.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {challengeCards.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#0C1527]/90 border border-slate-800/90 flex items-center space-x-3.5 shadow-sm hover:border-[#2196E8]/40 transition group"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition leading-snug">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEAMLESS BOTTOM CURVED BLEND (DARK TO WHITE) ── */}
        <div className="w-full overflow-hidden leading-none bg-[#070B14] -mb-px relative z-10">
          <svg className="relative block w-full h-6 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── 2. SOLUTION (SCROLL-DRIVEN CARD STACKING ANIMATION) ── */}
        <section
          id="solution-overview"
          ref={solutionSectionRef}
          className="relative w-full bg-white text-slate-900 border-b border-slate-200/80 min-h-[220vh] sm:min-h-[260vh]"
        >
          {/* Sticky Pin Container for Card Stacking */}
          <div className="sticky top-16 sm:top-20 w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-6 lg:py-8 overflow-hidden">
            {/* Ambient Background Arc */}
            <div className="rounded-full border-solid border-[rgba(74,114,232,0.06)] border-[40px] lg:border-[80px] w-[500px] h-[500px] lg:w-[950px] lg:h-[950px] absolute left-[50%] lg:left-[-400px] bottom-[-200px] lg:bottom-auto lg:top-[50%] -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
              
              {/* LEFT COLUMN: TITLE, OVERVIEW & ARROW CONTROLS (STRICTLY LEFT ALIGNED) */}
              <div className="flex flex-col gap-6 lg:gap-8 items-start text-left w-full lg:w-[380px] xl:w-[440px] shrink-0 z-20 mt-2 lg:-mt-2">
                
                {/* Section Heading & Overview */}
                <div className="text-left w-full">
                  <h2 className="text-slate-900 font-sans text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] leading-tight font-extrabold tracking-tight text-left">
                    Solution
                  </h2>
                  <div className="w-16 h-1.5 bg-[#4A72E8] rounded-full mt-3 mx-0" />
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mt-4 max-w-[390px] mx-0 text-left">
                    To address core delivery challenges, our team architected isolated execution sessions, a centralized calculation engine, and strict validation safeguards with responsive visual interfaces.
                  </p>
                </div>

                {/* Arrow Navigation Controls */}
                <div className="flex flex-row gap-4 items-center justify-start">
                  <button
                    id="solutionPrevBtn"
                    onClick={handlePrevSolution}
                    aria-label="Previous solution item"
                    className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 hover:bg-[#4A72E8] text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    id="solutionNextBtn"
                    onClick={handleNextSolution}
                    aria-label="Next solution item"
                    className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 hover:bg-[#4A72E8] text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Solution Dots Indicator */}
                <div id="solutionDots" className="flex items-center justify-start gap-2 pt-1">
                  {solutionDeck.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to solution slide ${idx + 1}`}
                      onClick={() => {
                        setSolutionDirection(idx > solutionIdx ? 1 : -1);
                        setSolutionIdx(idx);
                      }}
                      className={
                        idx === solutionIdx
                          ? 'w-7 h-2.5 rounded-full bg-[#4A72E8] transition-all duration-300 cursor-pointer shadow-sm'
                          : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-300 cursor-pointer'
                      }
                    />
                  ))}
                </div>

              </div>

              {/* RIGHT COLUMN: SCROLL-DRIVEN CARD STACKING STAGE */}
              <div className="relative flex items-center justify-center w-full lg:flex-1 xl:w-[540px] xl:flex-none h-[480px] sm:h-[460px] lg:h-[440px]">
                <div id="solutionCardStage" className="relative w-full h-full flex items-center justify-center">
                  {solutionDeck.map((card, idx) => {
                    const offset = idx - solutionIdx;
                    const isCurrent = offset === 0;
                    const isPast = offset < 0;
                    const isFuture = offset > 0;

                    const yVal = isCurrent ? 0 : isPast ? offset * 14 : 90;
                    const scaleVal = isCurrent ? 1 : isPast ? 1 + offset * 0.04 : 0.94;
                    const opacityVal = isCurrent ? 1 : isPast ? Math.max(0.15, 1 + offset * 0.35) : 0;
                    const zIndexVal = isCurrent ? 30 : isPast ? 20 + idx : 5;

                    return (
                      <motion.div
                        key={idx}
                        animate={{
                          y: yVal,
                          scale: scaleVal,
                          opacity: opacityVal,
                          zIndex: zIndexVal,
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        className={`solution-card-item absolute inset-0 flex flex-col lg:flex-row items-center justify-center w-full h-full select-none ${
                          isCurrent ? 'pointer-events-auto cursor-grab active:cursor-grabbing' : 'pointer-events-none'
                        }`}
                        drag={isCurrent ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.25}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -50) {
                            handleNextSolution();
                          } else if (info.offset.x > 50) {
                            handlePrevSolution();
                          }
                        }}
                      >
                        {/* Connector (Step tag & Era line indicator) */}
                        <div className={`hidden lg:flex items-center translate-y-10 mr-4 xl:mr-[18px] shrink-0 order-2 lg:order-1 transition-opacity duration-300 ${isCurrent ? 'opacity-100' : 'opacity-0'}`}>
                          <span className="text-[#4A72E8] font-bold text-[11px] tracking-wider uppercase font-sans">
                            {card.tag}
                          </span>
                          <div className="border-t border-slate-300 w-[30px] xl:w-[60px] h-0 mx-2.5" />
                          <div className="bg-[#4A72E8] rounded-full w-3 h-3 shrink-0 shadow-sm" />
                        </div>

                        {/* Content Card Body */}
                        <div className="flex flex-col gap-3 w-full max-w-[320px] sm:max-w-[360px] xl:max-w-[390px] order-1 lg:order-2 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xl">
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-[54px] lg:text-[64px] leading-none text-[#4A72E8]/20 select-none font-mono">
                              {card.num}
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center p-0.5 shadow-xs">
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                            </div>
                          </div>

                          <div className="font-extrabold text-xl lg:text-2xl leading-tight text-slate-900 tracking-tight font-body line-clamp-2">
                            {card.title}
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-600 font-normal line-clamp-3">
                              {card.desc}
                            </p>
                            <div className="w-full aspect-[16/9] h-[140px] sm:h-[160px] lg:h-[175px] relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                              <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. PRODUCT EXPERIENCE ── */}
        <section id="product-experience" className="py-20 sm:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body inline-block relative">
                Product experience
                <span className="block w-14 h-1.5 bg-[#2196E8] rounded-full mx-auto mt-2" />
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
                {study.title} delivers a visually rich, premium, and highly responsive experience designed to simplify daily workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Side: Product Showcase Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-white group p-4 flex items-center justify-center min-h-[360px]">
                  <img
                    src={showcaseImageMap[study.slug]?.[1] || showcaseImageMap[study.slug]?.[0] || study.image || '/images/cc_highlight_product.jpg'}
                    alt={`${study.title} Showcase`}
                    className="w-full h-auto max-h-[460px] object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Side: 2x2 Grid with Blue Border Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {productExpCards.map((card, idx) => {
                  const isExpanded = !!expandedProductExp[idx];
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border-2 border-[#2196E8] p-6 bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                          {card.icon}
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-base font-body leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {isExpanded ? card.fullDesc : card.shortDesc}
                        </p>
                      </div>

                      <div className="pt-1">
                        <button
                          onClick={() => toggleProductExp(idx)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#2196E8] hover:text-blue-700 transition cursor-pointer"
                        >
                          <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. HIGHLIGHTS (3D PERSPECTIVE PHONE CAROUSEL) ── */}
        <section id="highlights" className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body inline-block relative">
                Highlights
                <span className="block w-14 h-1.5 bg-[#2196E8] rounded-full mx-auto mt-2" />
              </h2>
            </div>

            {/* 3D Perspective Phone Showcase with Motion Drag & Touch Swipe */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -35 || info.velocity.x < -250) {
                    setHighlightIdx((prev) => (prev + 1) % 3);
                  } else if (info.offset.x > 35 || info.velocity.x > 250) {
                    setHighlightIdx((prev) => (prev - 1 + 3) % 3);
                  }
                }}
                className="flex items-center justify-center gap-4 sm:gap-8 py-4 cursor-grab active:cursor-grabbing select-none"
              >
                {/* Left Screen Card (Tilted Angle) */}
                <div
                  onClick={() => setHighlightIdx((highlightIdx - 1 + 3) % 3)}
                  className="relative w-48 sm:w-64 h-[340px] sm:h-[400px] rounded-3xl p-3 sm:p-4 bg-white shadow-xl border border-slate-200 transition-all duration-700 cursor-pointer transform -rotate-6 scale-90 hover:scale-95 opacity-80 hover:opacity-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={highlightItems[(highlightIdx + 2) % 3].screen}
                    alt="Previous Screen"
                    draggable={false}
                    className="w-full h-full object-contain drop-shadow-md transition-all duration-700 pointer-events-none select-none"
                  />
                </div>

                {/* Center Main Screen Card (Active Blue Border Focus) */}
                <div
                  className="relative w-56 sm:w-72 h-[380px] sm:h-[450px] rounded-3xl p-4 sm:p-5 bg-white shadow-2xl border-2 border-[#2196E8] transition-all duration-700 z-20 cursor-pointer scale-100 flex items-center justify-center overflow-hidden group"
                >
                  <img
                    src={highlightItems[highlightIdx].screen}
                    alt="Active Screen"
                    draggable={false}
                    className="w-full h-full object-contain drop-shadow-xl transition-all duration-700 pointer-events-none select-none"
                  />
                </div>

                {/* Right Screen Card (Tilted Angle) */}
                <div
                  onClick={() => setHighlightIdx((highlightIdx + 1) % 3)}
                  className="relative w-48 sm:w-64 h-[340px] sm:h-[400px] rounded-3xl p-3 sm:p-4 bg-white shadow-xl border border-slate-200 transition-all duration-700 cursor-pointer transform rotate-6 scale-90 hover:scale-95 opacity-80 hover:opacity-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={highlightItems[(highlightIdx + 1) % 3].screen}
                    alt="Next Screen"
                    draggable={false}
                    className="w-full h-full object-contain drop-shadow-md transition-all duration-700 pointer-events-none select-none"
                  />
                </div>
              </motion.div>

              <button
                onClick={() => setHighlightIdx((prev) => (prev - 1 + 3) % 3)}
                className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0A0F17] hover:bg-[#2196E8] text-white flex items-center justify-center transition shadow-lg cursor-pointer hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setHighlightIdx((prev) => (prev + 1) % 3)}
                className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0A0F17] hover:bg-[#2196E8] text-white flex items-center justify-center transition shadow-lg cursor-pointer hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex justify-center items-center gap-2 mt-3">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setHighlightIdx(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      highlightIdx === i ? 'w-6 h-2 bg-[#2196E8]' : 'w-2 h-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 3 Highlight Cards Below */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {highlightItems.map((item) => {
                const isActive = highlightIdx === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setHighlightIdx(item.id)}
                    className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer space-y-3 ${
                      isActive
                        ? 'border-2 border-[#2196E8] bg-white shadow-lg -translate-y-1'
                        : 'border border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base font-body leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. TECHNOLOGY STACK (ONE LAYER X-AXIS MARQUEE WITH HOVER STOP) ── */}
        <section id="tech-stack" className="py-8 sm:py-10 bg-white border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-6 space-y-1.5">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-body">
                Technology stack
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">
                Built with modern, scalable, high-performance web and backend technologies.
              </p>
            </div>
          </div>

          {/* Infinite X-Axis Scrolling Single Row (One Layer) */}
          <div className="w-full overflow-hidden relative py-2 marquee-container">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-max space-x-4 animate-marquee-left">
              {[...Array(4)].map((_, rep) => (
                <div key={rep} className="flex space-x-4 shrink-0">
                  {techStackList.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-center space-x-3 shrink-0 select-none hover:border-[#2196E8] hover:shadow-md transition cursor-pointer group"
                    >
                      <div className={`w-8 h-8 rounded-xl ${tech.bg} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                        {tech.icon}
                      </div>
                      <span className="font-bold text-slate-800 text-sm whitespace-nowrap group-hover:text-[#2196E8] transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. SCOPE ── */}
        <section id="scope" className="py-10 sm:py-14 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                Scope
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                Explore the core operational scope of the {study.title} platform — engineered for performance, reliability, and continuous scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {scopeCards.map((sc, idx) => (
                <div
                  key={idx}
                  className="scope-animated-card relative z-10 cursor-pointer"
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#2196E8] font-mono">{sc.num}</span>
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2196E8] text-[10px] font-extrabold tracking-wider uppercase font-mono">
                        {sc.tag}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg font-body">{sc.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{sc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. RESULTS & CLIENT TESTIMONIAL ── */}
        <section id="results" className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-white border-b border-slate-200 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header: Results */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-body">
                Results
              </h2>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-6xl mx-auto">
              {resultsStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center shadow-xs hover:border-[#2196E8] hover:shadow-md transition"
                >
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-black ${stat.color} font-mono tracking-tight`}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-slate-700 tracking-wider uppercase mt-2 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Client Testimonial Card */}
            <div className="max-w-6xl mx-auto bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Text & Quote */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-6 bg-[#2196E8] rounded-full" />
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#2196E8] font-mono">
                      WHAT OUR CLIENTS SAY
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-body uppercase">
                      {study.title} Leadership
                    </h3>
                    <div className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider mt-1">
                      {study.title.toUpperCase()} • <span className="text-[#2196E8]">Client Success Stories</span>
                    </div>
                  </div>

                  <blockquote className="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed italic">
                    “We didn't just build a digital application. We built a system that turns everyday interactions into an automated, scalable habit.”
                  </blockquote>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We helped our client turn their vision into a successful digital solution — delivering strong business results, seamless scalability, and long-term customer value.
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#2196E8] text-xs font-bold tracking-wide">
                      Happy Client. Successful Project. Real Results.
                    </span>
                  </div>
                </div>

                {/* Right Side: Video Player for Clean Culture only, or Brand Showcase for other studies */}
                <div className="lg:col-span-5 flex justify-center items-center">
                  {study.slug === 'clean-culture' ? (
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 group bg-slate-950 max-h-[300px]">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover max-h-[300px]"
                      >
                        <source src="/videos/clean_culture_overview.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 group bg-white p-6 flex flex-col items-center justify-center text-center space-y-4">
                      {showcaseImageMap[study.slug]?.[2] || (study.image && !study.image.includes('cc_')) ? (
                        <div className="w-full relative rounded-xl overflow-hidden shadow-sm">
                          <img
                            src={showcaseImageMap[study.slug]?.[2] || study.image}
                            alt={study.title}
                            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                            {customLogo && (
                              <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center border border-slate-200 shadow">
                                <img src={customLogo} alt={study.title} className="w-full h-full object-contain" />
                              </div>
                            )}
                            <span className="text-white text-xs font-bold font-mono uppercase">{study.title}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 py-4">
                          {customLogo ? (
                            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 p-2.5 flex items-center justify-center mx-auto shadow-md">
                              <img src={customLogo} alt={study.title} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2196E8] to-blue-700 text-white font-extrabold text-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">
                              {study.title.charAt(0)}
                            </div>
                          )}
                          <div className="space-y-1">
                            <h4 className="font-extrabold text-slate-900 text-xl font-body">{study.title}</h4>
                            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{study.category} • Certified Success Story</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── SEAMLESS CURVED BLEND DIVIDER (WHITE TO DARK APP CTA) ── */}
        <div className="w-full overflow-hidden leading-none bg-white -mb-px relative z-10">
          <svg className="relative block w-full h-6 sm:h-10 text-[#05080C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* ── 8. PRE-FOOTER: APP IS LIVE SHOWCASE WITH CONFETTI SIDE CANNONS ── */}
        <section
          id="app-is-live-section"
          className="py-8 sm:py-10 bg-[#05080C] text-white relative overflow-hidden w-full m-0 p-0 border-none font-body"
        >
          {/* Confetti Canvas Embedded inside Section Only */}
          <canvas ref={confettiCanvasRef} id="confetti-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-10" />

          {/* Ambient Glow Backdrop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-20 space-y-6">
            {/* 1. Ambient Glow Backdrop behind App Logo */}
            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={triggerSideCannons}>
                <div className="absolute -inset-3 rounded-3xl bg-[#2196E8]/40 blur-2xl group-hover:bg-[#2196E8]/60 transition-all" />
                {customLogo ? (
                  <img
                    src={customLogo}
                    alt={`${study.title} Logo`}
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl border-2 border-white/80 object-contain p-3.5 bg-white shadow-[0_0_50px_rgba(255,255,255,0.35)] transform transition hover:scale-105"
                  />
                ) : (
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl border-2 border-white/80 bg-white text-[#2196E8] font-extrabold text-4xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.35)] transform transition hover:scale-105">
                    {study.title.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-body">
                {study.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
                {study.subtitle && study.subtitle !== study.title ? study.subtitle : (study.about ? study.about.split('.')[0] + '.' : '')}
              </p>
            </div>

            {/* 2. "App/Platform is Live!" Pill Badge with Bouncing Emoji & Scale Hover */}
            <div className="pt-1 flex justify-center">
              <div
                onClick={triggerSideCannons}
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-[#0A0F17] hover:bg-[#121B2B] border border-emerald-500/50 text-emerald-400 text-lg sm:text-xl font-extrabold shadow-[0_0_35px_rgba(16,185,129,0.35)] cursor-pointer transform transition hover:scale-105 select-none"
              >
                <span className="text-2xl animate-bounce">🎉</span>
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  {isWebOnly ? 'Website is Live!' : isMobileApp ? 'App is Live!' : 'Platform is Live!'}
                </span>
                <span className="text-2xl animate-bounce">🎉</span>
              </div>
            </div>

            {/* 3. Action / Download Buttons Lift Animation (Hover translateY) */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {/* Web-Only Case Studies (e.g. Infragen, NestPilot, Keystone, Amaravathy Coir, etc.) */}
              {isWebOnly && webLink && (
                <>
                  <a
                    href={webLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={triggerSideCannons}
                    className="inline-flex items-center space-x-3.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#1d4ed8] hover:from-[#1e88e5] hover:to-[#1e40af] text-white font-bold shadow-[0_0_35px_rgba(33,150,232,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Globe className="w-6 h-6 text-cyan-200 shrink-0 animate-pulse" />
                    <div className="text-left font-body">
                      <span className="text-[10px] uppercase font-bold text-blue-100 block leading-none">LIVE WEB PLATFORM</span>
                      <span className="text-lg font-extrabold text-white leading-tight flex items-center gap-1.5">
                        Visit Live Website <ExternalLink className="w-4 h-4 text-cyan-200" />
                      </span>
                    </div>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-3.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Sparkles className="w-5 h-5 text-[#2196E8] shrink-0" />
                    <div className="text-left font-body">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">CONSULTATION</span>
                      <span className="text-lg font-extrabold text-white leading-tight">Request Free Demo</span>
                    </div>
                  </a>
                </>
              )}

              {/* Mobile Apps (e.g. Clean Culture, Akirva, Judah) */}
              {isMobileApp && (
                <>
                  {hasPlayStore && (
                    <a
                      href={playStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={triggerSideCannons}
                      className="inline-flex items-center space-x-3.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-emerald-500/40 hover:border-emerald-400 text-white font-medium shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all transform hover:-translate-y-1 hover:scale-105"
                    >
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 drop-shadow-md" viewBox="0 0 512 512">
                        <path d="M54.7 7.2c-7.3 4-12.7 11.8-12.7 21.6v454.4c0 9.8 5.4 17.6 12.7 21.6l245.9-248.8z" fill="#00E5FF"/>
                        <path d="M368.7 194.5l-68.7 68.7-245.3-256c3.2-1.7 6.9-2.7 10.9-2.7 5.6 0 11.2 1.8 15.9 4.7z" fill="#00E676"/>
                        <path d="M429.3 234.3l-60.6-39.8-68.7 68.7 68.7 68.7 60.9-39.9c10.4-6.8 16.4-17.7 16.4-28.8 0-11.2-6-22.1-16.7-28.9z" fill="#FFD600"/>
                        <path d="M81.5 507.5c-4.7 2.9-10.3 4.5-15.9 4.5-4 0-7.7-1-10.9-2.7l245.3-256 68.7 68.7z" fill="#FF3D00"/>
                      </svg>
                      <div className="text-left font-body">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block leading-none">GET IT ON</span>
                        <span className="text-lg sm:text-xl font-extrabold text-white leading-tight">Google Play</span>
                      </div>
                    </a>
                  )}

                  {hasAppStore && (
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={triggerSideCannons}
                      className="inline-flex items-center space-x-3.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all transform hover:-translate-y-1 hover:scale-105"
                    >
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 fill-white drop-shadow-md" viewBox="0 0 170 170">
                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.78-8.08-12.28-15-4.5-6.91-8.16-14.78-10.98-23.6-2.83-8.83-4.25-17.43-4.25-25.82 0-12.98 3.31-23.75 9.94-32.32 6.63-8.56 15.1-12.9 25.4-13.01 4.58 0 9.77 1.25 15.58 3.75 5.8 2.5 9.74 3.79 11.81 3.86 1.74 0 5.85-1.39 12.33-4.18 6.47-2.79 11.96-3.99 16.46-3.6 12.18.98 21.6 5.56 28.28 13.73-10.88 6.64-16.22 15.74-16.01 27.29.22 9.03 3.65 16.59 10.3 22.68 6.64 6.09 14.54 9.53 23.68 10.33-2.17 6.42-4.8 12.82-7.87 19.21zM119.22 31.75c0-7.39 2.61-14.35 7.82-20.89 5.22-6.53 11.75-10.45 19.6-11.75.22 1.09.33 2.18.33 3.26 0 7.39-2.72 14.46-8.16 21.2-5.44 6.74-12.07 10.66-19.89 11.76-.11-1.09-.17-2.18-.17-3.26z"/>
                      </svg>
                      <div className="text-left font-body">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block leading-none">DOWNLOAD ON THE</span>
                        <span className="text-lg sm:text-xl font-extrabold text-white leading-tight">App Store</span>
                      </div>
                    </a>
                  )}

                  {webLink && (
                    <a
                      href={webLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={triggerSideCannons}
                      className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all transform hover:-translate-y-1 hover:scale-105"
                    >
                      <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div className="text-left font-body">
                        <span className="text-[10px] uppercase font-bold text-emerald-400/80 block leading-none">WEB PORTAL</span>
                        <span className="text-base font-extrabold text-white leading-tight flex items-center gap-1">
                          Live Portal <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        </span>
                      </div>
                    </a>
                  )}
                </>
              )}

              {/* Internal / AI / Enterprise Case Studies */}
              {!isWebOnly && !isMobileApp && (
                <>
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#1d4ed8] hover:from-[#1e88e5] hover:to-[#1e40af] text-white font-bold shadow-[0_0_35px_rgba(33,150,232,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Sparkles className="w-6 h-6 text-cyan-200 shrink-0" />
                    <div className="text-left font-body">
                      <span className="text-[10px] uppercase font-bold text-blue-100 block leading-none">ENTERPRISE SOLUTION</span>
                      <span className="text-lg font-extrabold text-white leading-tight">Request Live Demo</span>
                    </div>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-3.5 px-8 py-4 rounded-2xl bg-[#090E17] hover:bg-[#0E1524] border border-slate-700/80 hover:border-slate-500 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all transform hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="text-left font-body">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">CONSULTATION</span>
                      <span className="text-lg font-extrabold text-white leading-tight">Discuss Custom AI</span>
                    </div>
                  </a>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── 9. BOTTOM TRUST BAR / TICKER (SCROLL ANIMATION WITH HOVER PAUSE) ── */}
        <section className="w-full bg-white border-y border-slate-200 py-4 overflow-hidden relative select-none marquee-container cursor-pointer">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max space-x-12 animate-marquee-left">
            {[...Array(4)].map((_, rep) => (
              <div key={rep} className="flex items-center space-x-12 shrink-0">
                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">End–to–end digital solutions</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">From idea to launch • Complete solutions under one roof</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">Quality–driven development</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">Modern &amp; reliable solutions • Built for performance and scalability</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">On–time delivery</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">Efficient project execution • Delivered with clarity and commitment</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-xs whitespace-nowrap">Client success</span>
                    <span className="text-slate-500 text-[11px] whitespace-nowrap">Turning ideas into successful products • Focused on value, results &amp; long-term growth</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 50s linear infinite;
        }
        .animate-marquee-left-fast {
          animation: marqueeLeft 38s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-left-fast,
        .animate-marquee-left:hover,
        .animate-marquee-left-fast:hover {
          animation-play-state: paused !important;
        }
        @keyframes sideCannonLeft {
          0%   { transform: translate(0,0) rotate(0deg) scale(0.5); opacity:1; }
          50%  { transform: translate(38vw,-150px) rotate(360deg) scale(1.2); opacity:0.95; }
          100% { transform: translate(65vw,280px) rotate(720deg) scale(0.3); opacity:0; }
        }
        @keyframes sideCannonRight {
          0%   { transform: translate(0,0) rotate(0deg) scale(0.5); opacity:1; }
          50%  { transform: translate(-38vw,-150px) rotate(-360deg) scale(1.2); opacity:0.95; }
          100% { transform: translate(-65vw,280px) rotate(-720deg) scale(0.3); opacity:0; }
        }
        @keyframes borderGlowRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animated-solution-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .animated-solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px -5px rgba(59, 130, 246, 0.4);
        }
        .animated-solution-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 26px;
          padding: 2px;
          background: conic-gradient(from 0deg at 50% 50%, #2196E8, #60a5fa, transparent 60%, #2196E8);
          animation: borderGlowRotate 2.8s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 20;
        }
        @keyframes floatAmbient1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-14px) translateX(8px) rotate(8deg); }
        }
        @keyframes floatAmbient2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(16px) translateX(-10px) rotate(-10deg); }
        }
        @keyframes floatAmbient3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-10px) translateX(-8px) rotate(6deg); }
        }
        @keyframes floatAmbient4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(12px) translateX(10px) rotate(-8deg); }
        }
        .animate-float-1 { animation: floatAmbient1 4s ease-in-out infinite; }
        .animate-float-2 { animation: floatAmbient2 4.5s ease-in-out infinite; }
        .animate-float-3 { animation: floatAmbient3 3.8s ease-in-out infinite; }
        .animate-float-4 { animation: floatAmbient4 4.2s ease-in-out infinite; }

        @keyframes scopeBorderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .scope-animated-card {
          position: relative;
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 1.75rem;
          overflow: hidden;
          box-shadow: 0 4px 20px -2px rgba(33, 150, 232, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }
        .scope-animated-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px -4px rgba(33, 150, 232, 0.25);
        }
        .scope-animated-card::before {
          content: '';
          position: absolute;
          top: -65%;
          left: -65%;
          width: 230%;
          height: 230%;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 55%,
            #93c5fd 70%,
            #2196E8 85%,
            #0284c7 95%,
            transparent 100%
          );
          animation: scopeBorderRotate 3.5s linear infinite;
          z-index: -2;
        }
        .scope-animated-card::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: #ffffff;
          border-radius: calc(1.25rem - 2px);
          z-index: -1;
          border: 1px solid rgba(226, 232, 240, 0.85);
        }
      `}</style>
    </div>
  );
}
