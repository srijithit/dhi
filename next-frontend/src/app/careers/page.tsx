"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, 
  Search, Code, Brain, TrendingUp, Palette, ChevronRight, X, 
  Send, Phone, Mail, Award, Zap, Users, Coffee, Rocket, ShieldCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

interface JobPosition {
  id: string;
  title: string;
  category: 'tech' | 'ai' | 'marketing' | 'creative';
  categoryLabel: string;
  type: string;
  experience: string;
  location: string;
  overview: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
}

const JOB_OPENINGS: JobPosition[] = [
  {
    id: "senior-fullstack-dev",
    title: "Senior Full Stack Developer",
    category: "tech",
    categoryLabel: "Engineering",
    type: "Full-time",
    experience: "3 - 5 Years",
    location: "Coimbatore / Hybrid",
    overview: "We are seeking a seasoned Full Stack Engineer proficient in Next.js, React, Node.js, and TypeScript to architect high-performance web applications and enterprise portals.",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    responsibilities: [
      "Architect and implement responsive, high-speed web apps using Next.js Turbopack and React 19.",
      "Design scalable REST and GraphQL APIs with serverless Node.js backend pipelines.",
      "Optimize frontend performance, Core Web Vitals, and SEO-friendly SSR/SSG rendering.",
      "Collaborate with UI/UX designers and product managers to translate Figma concepts into production code."
    ],
    requirements: [
      "3+ years of professional full-stack development experience.",
      "Deep expertise in React, TypeScript, modern CSS frameworks, and database architecture.",
      "Experience with cloud deployment on Vercel, AWS, or GCP.",
      "Solid understanding of software design patterns and version control (Git)."
    ]
  },
  {
    id: "ai-ml-engineer",
    title: "AI / Machine Learning Engineer",
    category: "ai",
    categoryLabel: "AI & Data",
    type: "Full-time",
    experience: "2 - 4 Years",
    location: "Coimbatore / Hybrid",
    overview: "Join our core AI team to build real-time computer vision inspection systems, custom LLM agents, RAG workflows, and enterprise predictive models for industrial clients.",
    skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "LangChain", "FastAPI"],
    responsibilities: [
      "Develop and train custom deep learning models for object detection and automated optical inspection.",
      "Build production-grade retrieval-augmented generation (RAG) pipelines and multi-agent AI assistants.",
      "Deploy inference microservices using FastAPI, Docker, and edge computing acceleration (CUDA/TensorRT).",
      "Optimize neural network latency for sub-millisecond edge processing on conveyor systems."
    ],
    requirements: [
      "Bachelor's or Master's in Computer Science, Data Science, or related quantitative field.",
      "Hands-on experience deploying computer vision (YOLO, CNNs) or generative AI models.",
      "Strong proficiency in Python, PyTorch, OpenCV, and cloud GPU environments.",
      "Familiarity with vector databases (Pinecone, Chroma, Qdrant) and prompt engineering."
    ]
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer (React Native / Flutter)",
    category: "tech",
    categoryLabel: "Engineering",
    type: "Full-time",
    experience: "2 - 4 Years",
    location: "Coimbatore / Hybrid",
    overview: "Build fluid, cross-platform mobile apps for iOS and Android that power seamless digital commerce, real estate discovery, and enterprise operations.",
    skills: ["React Native", "Flutter", "TypeScript", "iOS/Android APIs", "Redux"],
    responsibilities: [
      "Build native-feeling iOS and Android applications using React Native or Flutter.",
      "Integrate complex device features including push notifications, geolocation, and camera inputs.",
      "Publish and maintain apps on Apple App Store and Google Play Store.",
      "Ensure ultra-smooth 60fps UI animations and offline-first data caching."
    ],
    requirements: [
      "Proven track record of published apps on App Store / Play Store.",
      "Strong proficiency in React Native or Flutter with state management (Zustand, Redux, or Bloc).",
      "Experience with REST APIs and third-party SDK integrations."
    ]
  },
  {
    id: "performance-marketing-lead",
    title: "Performance Marketing Lead",
    category: "marketing",
    categoryLabel: "Growth & Ads",
    type: "Full-time",
    experience: "2 - 5 Years",
    location: "Coimbatore",
    overview: "Lead high-ROI advertising campaigns across Meta Ads, Google Search, YouTube, and LinkedIn for Coimbatore and national brands, managing multi-lakh monthly ad spends.",
    skills: ["Meta Ads", "Google Ads", "Conversion Tracking", "A/B Testing", "Analytics"],
    responsibilities: [
      "Plan, launch, and optimize high-converting paid ad funnels across Meta and Google.",
      "Analyze pixel events, server-side CAPI tracking, and GA4 metrics to maximize ROAS.",
      "Collaborate with copywriters and video creators to test ad angles and hook concepts.",
      "Deliver transparent, data-driven monthly reports and budget recommendations to clients."
    ],
    requirements: [
      "Proven experience managing successful paid ad budgets with demonstrable ROAS metrics.",
      "Deep understanding of Google Ads (Search, Display, Performance Max) and Meta Ads Manager.",
      "Strong analytical skills with Google Analytics 4 and Tag Manager certification."
    ]
  },
  {
    id: "senior-seo-strategist",
    title: "Senior SEO & Search Growth Strategist",
    category: "marketing",
    categoryLabel: "Growth & Ads",
    type: "Full-time",
    experience: "2 - 4 Years",
    location: "Coimbatore",
    overview: "Dominate local and national search engines. You will lead technical SEO, keyword strategy, schema architecture, and high-authority link acquisitions for client platforms.",
    skills: ["Technical SEO", "Schema Markup", "Ahrefs/SEMrush", "Google Search Console", "Content Strategy"],
    responsibilities: [
      "Conduct in-depth technical SEO audits, site speed assessments, and crawl error fixes.",
      "Build and execute localized Google Map Pack ranking strategies for Coimbatore businesses.",
      "Formulate high-intent keyword maps and content roadmaps to capture organic search traffic.",
      "Monitor ranking algorithms and implement structured schema for Google Rich Snippets."
    ],
    requirements: [
      "Demonstrable portfolio of ranking competitive commercial keywords on Google Page 1.",
      "Advanced knowledge of Google Search Console, Screaming Frog, Ahrefs, and Core Web Vitals.",
      "Understanding of HTML/CSS and CMS structures for technical on-page implementation."
    ]
  },
  {
    id: "ui-ux-product-designer",
    title: "Senior UI/UX & Interaction Designer",
    category: "creative",
    categoryLabel: "Design & Media",
    type: "Full-time",
    experience: "2 - 4 Years",
    location: "Coimbatore / Hybrid",
    overview: "Design world-class web and mobile interfaces that combine bold modern aesthetics, glassmorphism, micro-interactions, and conversion-focused user journeys.",
    skills: ["Figma", "Design Systems", "Prototyping", "UI/UX Research", "Motion Design"],
    responsibilities: [
      "Create high-fidelity wireframes, user flows, and interactive prototypes in Figma.",
      "Maintain scalable design systems and typography hierarchies for web and mobile.",
      "Conduct user research and heat map analyses to continuously optimize user engagement.",
      "Work closely with frontend engineers to ensure pixel-perfect design implementation."
    ],
    requirements: [
      "Exceptional Figma portfolio demonstrating modern visual aesthetics and clean typography.",
      "Strong grasp of design systems, responsive grids, and interactive micro-animations.",
      "Passionate about cutting-edge tech UI, dark mode themes, and conversion design."
    ]
  },
  {
    id: "video-editor-creator",
    title: "Commercial Video Editor & Motion Artist",
    category: "creative",
    categoryLabel: "Design & Media",
    type: "Full-time",
    experience: "1 - 3 Years",
    location: "Coimbatore",
    overview: "Produce viral social reels, commercial brand shoots, and high-impact ad creatives for clients ranging from automotive to lifestyle brands.",
    skills: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Sound Design", "Social Reels"],
    responsibilities: [
      "Edit high-energy commercial videos, brand reels, and product showcases.",
      "Create motion graphics, typography animations, and visual effects in After Effects.",
      "Participate in on-site client video shoots and commercial camera setups.",
      "Format and optimize video creatives for Instagram Reels, YouTube Shorts, and Meta Ads."
    ],
    requirements: [
      "Proficiency in Premiere Pro, After Effects, and DaVinci Resolve.",
      "Strong sense of pacing, modern audio transitions, and typography overlay.",
      "Link to active video portfolio / showreel is required."
    ]
  },
  {
    id: "business-development-executive",
    title: "Business Development & Client Strategist",
    category: "marketing",
    categoryLabel: "Growth & Ads",
    type: "Full-time",
    experience: "1 - 3 Years",
    location: "Coimbatore",
    overview: "Connect with Coimbatore business owners, SMEs, and enterprise leaders to understand their growth challenges and present tailored DhiGrowth digital packages.",
    skills: ["B2B Sales", "Client Consulting", "Proposal Creation", "CRM", "Negotiation"],
    responsibilities: [
      "Identify prospective clients in Coimbatore across real estate, retail, healthcare, and manufacturing.",
      "Conduct discovery calls to assess technical requirements and growth opportunities.",
      "Prepare custom digital growth proposals and present ROI-driven solution pitches.",
      "Manage client relationships and ensure seamless onboarding with the delivery team."
    ],
    requirements: [
      "Prior B2B sales or client consulting experience in a digital agency or tech firm.",
      "Excellent communication and presentation skills in English and Tamil.",
      "Proactive, goal-oriented mindset with strong closing skills."
    ]
  }
];

const PERKS = [
  {
    icon: Rocket,
    title: "High-Impact Projects",
    desc: "Work on real-world AI pipelines, high-traffic web applications, and multi-lakh ad campaigns for growing brands."
  },
  {
    icon: Brain,
    title: "Cutting-Edge Tech Stack",
    desc: "Work with modern frameworks — Next.js 16, React 19, PyTorch, OpenCV, Tailwind CSS, and cloud LLMs."
  },
  {
    icon: Award,
    title: "Accelerated Career Growth",
    desc: "Fast promotion tracks, transparent performance appraisals, and direct mentorship from industry leaders."
  },
  {
    icon: Coffee,
    title: "Vibrant Work Culture",
    desc: "Collaborative, ego-free environment with flexible hours, regular team outings, and state-of-the-art workstations."
  },
  {
    icon: Zap,
    title: "Performance Bonuses",
    desc: "Competitive base compensation with performance incentives and project delivery milestone rewards."
  },
  {
    icon: ShieldCheck,
    title: "Learning & Certifications",
    desc: "Sponsorship for premium engineering courses, AI workshops, and digital marketing certifications."
  }
];

const HIRING_STEPS = [
  {
    step: "01",
    title: "Application Review",
    desc: "Submit your details or WhatsApp us. Our talent team reviews your profile within 48 hours."
  },
  {
    step: "02",
    title: "Technical Assessment",
    desc: "A practical, real-world assignment or portfolio walkthrough relevant to your exact role."
  },
  {
    step: "03",
    title: "Strategy & Culture Chat",
    desc: "Meet our tech leads and leadership team to align on vision, goals, and mutual fit."
  },
  {
    step: "04",
    title: "Offer & Welcome",
    desc: "Receive your competitive offer letter and kickstart your growth journey at DhiGrowth!"
  }
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tech' | 'ai' | 'marketing' | 'creative'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  // Application Modal state
  const [applyModalJob, setApplyModalJob] = useState<JobPosition | null>(null);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredJobs = JOB_OPENINGS.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          job.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp Message
    const roleTitle = applyModalJob ? applyModalJob.title : "General Application";
    const msg = encodeURIComponent(
      `Hello DhiGrowth Careers Team! I would like to apply for the ${roleTitle} position.\n\nName: ${applicantData.name}\nEmail: ${applicantData.email}\nPhone: ${applicantData.phone}\nExperience: ${applicantData.experience || 'Not specified'}\nPortfolio/LinkedIn: ${applicantData.portfolio || 'Provided in conversation'}\nNote: ${applicantData.note || 'Looking forward to discussing opportunities.'}`
    );

    // Optional background sync
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: applicantData.name,
        email: applicantData.email,
        phone: applicantData.phone,
        service: `Career Application: ${roleTitle}`,
        message: `Portfolio: ${applicantData.portfolio} | Experience: ${applicantData.experience} | Note: ${applicantData.note}`
      })
    }).catch(err => console.warn('Background application log:', err));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=919361088012&text=${msg}`, '_blank');
    }, 800);
  };

  const closeApplyModal = () => {
    setApplyModalJob(null);
    setIsSuccess(false);
    setApplicantData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      portfolio: '',
      note: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#2196E8] selection:text-white font-body">
      <CustomCursor />
      <Navbar />

      <main className="pt-[80px]">
        {/* ── 1. HERO SECTION (BLUE & WHITE THEME MATCHING CASE STUDIES) ── */}
        <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/30 to-white border-b border-blue-100/60">
          {/* Subtle Radial Blue Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#2196E8]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2196E8]/10 border border-[#2196E8]/25 text-[#2196E8] text-xs font-bold tracking-wide font-body shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Careers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight"
            >
              Shape The <span className="text-[#2196E8] whitespace-nowrap">Future Of Tech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-body"
            >
              Join A Forward-Thinking Team In Coimbatore Building High-Performance Web Apps, AI Vision Pipelines, And Scalable Digital Solutions.
            </motion.p>
          </div>
        </section>


        {/* ── 2. OPEN JOB POSITIONS SECTION ── */}
        <section id="openings" className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <span className="text-[#2196E8] font-bold text-xs tracking-widest uppercase font-body">
                Current Openings
              </span>
              <h2 className="font-header text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Explore Available Roles
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                Find your next career leap at DhiGrowth. We offer competitive compensation, mentorship, and impactful work.
              </p>
            </div>

            {/* Filter Pills & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { id: 'all', label: 'All Roles' },
                  { id: 'tech', label: 'Tech & Engineering' },
                  { id: 'ai', label: 'AI & Data' },
                  { id: 'marketing', label: 'Marketing & SEO' },
                  { id: 'creative', label: 'Design & Media' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                      selectedCategory === cat.id
                        ? 'bg-[#2196E8] text-white border-[#2196E8] shadow-md shadow-[#2196E8]/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Keyword Search */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search role, skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-full text-xs focus:outline-none focus:border-[#2196E8] text-slate-900 transition-colors shadow-sm"
                />
              </div>

            </div>

            {/* Job Openings Grid */}
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
                <Briefcase className="w-10 h-10 text-slate-400 mx-auto" />
                <h4 className="text-lg font-bold text-slate-800">No positions found</h4>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Try adjusting your search query or filter, or submit an open application below.
                </p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="text-xs font-bold text-[#2196E8] hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#2196E8]/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Top Decorative accent */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2196E8] to-[#4A72EB] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2196E8] text-xs font-bold tracking-wider uppercase">
                          {job.categoryLabel}
                        </span>
                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="font-header text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-[#2196E8] transition-colors leading-snug">
                        {job.title}
                      </h3>

                      {/* Location & Experience */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#2196E8]" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#2196E8]" />
                          {job.experience}
                        </span>
                      </div>

                      {/* Short Overview */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {job.overview}
                      </p>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {job.skills.slice(0, 4).map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-500 text-[11px] font-semibold">
                            +{job.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors text-center cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => setApplyModalJob(job)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-[#2196E8] hover:bg-[#1b84cf] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </div>
        </section>


        {/* ── 3. WHY WORK AT DHIGROWTH (PERKS & CULTURE) ── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col items-center text-center space-y-3 mb-16">
              <span className="text-[#2196E8] font-bold text-xs tracking-widest uppercase font-body">
                Culture &amp; Benefits
              </span>
              <h2 className="font-header text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Why Build Your Career At DhiGrowth?
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                We foster a high-performance, supportive culture where your code, campaigns, and designs create direct commercial impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PERKS.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#2196E8]/50 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#2196E8] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2196E8] transition-colors">
                      {perk.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ── 4. HIRING PROCESS ── */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col items-center text-center space-y-3 mb-16">
              <span className="text-[#2196E8] font-bold text-xs tracking-widest uppercase font-body">
                How We Hire
              </span>
              <h2 className="font-header text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                4-Step Simple Process
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                No endless interview loops. We value your time with a fast, transparent hiring timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HIRING_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between"
                >
                  <span className="text-3xl font-extrabold text-[#2196E8]/25 font-mono mb-4 block">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ── 5. OPEN APPLICATION CTA ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#0b0f19] to-[#070b14] text-white border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-6">
              
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#2196E8]/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2196E8]/20 border border-[#2196E8]/40 text-[#2196E8] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>General Application</span>
              </div>

              <h2 className="font-header text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Don't See Your Exact Role?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                We're always excited to meet brilliant developers, AI researchers, growth marketers, and video creators. Email your resume or chat directly with our founder.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setApplyModalJob(JOB_OPENINGS[0])}
                  className="px-7 py-3.5 rounded-full bg-[#2196E8] hover:bg-[#1b84cf] text-white text-sm font-bold tracking-wide transition-all shadow-lg hover:scale-105 cursor-pointer"
                >
                  Submit Resume Online
                </button>
                <a
                  href="mailto:dinesh@dhigrowth.com?subject=Application:%20General%20Careers%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold tracking-wide transition-all hover:scale-105 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: dinesh@dhigrowth.com</span>
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ── JOB DETAILS MODAL ── */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 z-20 my-auto p-6 sm:p-10 max-h-[85vh] overflow-y-auto text-left font-body"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2196E8] text-xs font-bold uppercase border border-blue-200">
                      {selectedJob.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full font-semibold">
                      {selectedJob.type}
                    </span>
                  </div>
                  <h3 className="font-header text-2xl sm:text-4xl font-extrabold text-slate-900">
                    {selectedJob.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#2196E8]" /> {selectedJob.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#2196E8]" /> {selectedJob.experience}</span>
                  </div>
                </div>

                {/* Overview */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Role Overview</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{selectedJob.overview}</p>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Key Technologies &amp; Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#2196E8] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Candidate Requirements</h4>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const jobToApply = selectedJob;
                      setSelectedJob(null);
                      setApplyModalJob(jobToApply);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#2196E8] hover:bg-[#1b84cf] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ── APPLICATION MODAL ── */}
      <AnimatePresence>
        {applyModalJob && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeApplyModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 z-20 my-auto p-6 sm:p-8 text-left font-body"
            >
              <button
                onClick={closeApplyModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-header text-2xl sm:text-3xl text-slate-900">
                    Application Submitted!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Redirecting to WhatsApp to start your direct conversation with our talent team...
                  </p>
                  <button
                    onClick={closeApplyModal}
                    className="px-6 py-2.5 rounded-xl bg-[#2196E8] text-white text-xs font-bold cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="space-y-1 pr-6">
                    <span className="text-[#2196E8] font-bold text-xs tracking-wider uppercase block">
                      Quick Application
                    </span>
                    <h3 className="font-header text-2xl font-extrabold text-slate-900 leading-tight">
                      Apply: {applyModalJob.title}
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Fill out your details to connect directly with the hiring manager on WhatsApp.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={applicantData.name}
                        onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="email"
                        required
                        placeholder="Email ID *"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp Number *"
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Years of Exp (e.g. 3 Yrs)"
                        value={applicantData.experience}
                        onChange={(e) => setApplicantData({ ...applicantData, experience: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900"
                      />
                      <input
                        type="url"
                        placeholder="Portfolio / LinkedIn URL"
                        value={applicantData.portfolio}
                        onChange={(e) => setApplicantData({ ...applicantData, portfolio: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Key Skills, Projects, or Brief Cover Note"
                        value={applicantData.note}
                        onChange={(e) => setApplicantData({ ...applicantData, note: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white font-bold text-sm tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    <span>Submit &amp; Connect on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
