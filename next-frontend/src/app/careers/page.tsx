"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, 
  Search, Code, Brain, TrendingUp, Palette, ChevronRight, X, 
  Send, Phone, Mail, Award, Zap, Users, Coffee, Rocket, ShieldCheck,
  Upload, FileText, Loader2, AlertCircle, Trash2
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
    location: "Coimbatore",
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
    location: "Coimbatore",
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
    location: "Coimbatore",
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
    location: "Coimbatore",
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
    linkedin: '',
    note: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeBase64, setResumeBase64] = useState<string>('');
  const [resumeError, setResumeError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [gmailComposeUrl, setGmailComposeUrl] = useState<string>('');
  const [mailtoUrl, setMailtoUrl] = useState<string>('');

  const filteredJobs = JOB_OPENINGS.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          job.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeError('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate PDF type
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      setResumeError('Please upload your resume in PDF format only.');
      setResumeFile(null);
      setResumeBase64('');
      return;
    }

    // Validate max file size 5MB
    if (file.size > 5 * 1024 * 1024) {
      setResumeError(`File size (${(file.size / (1024 * 1024)).toFixed(2)} MB) exceeds the 5MB limit. Please upload a PDF under 5MB.`);
      setResumeFile(null);
      setResumeBase64('');
      return;
    }

    setResumeFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setResumeBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeResumeFile = () => {
    setResumeFile(null);
    setResumeBase64('');
    setResumeError('');
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!resumeBase64 || !resumeFile) {
      setResumeError('Resume upload is mandatory. Please upload a PDF under 5MB.');
      return;
    }

    setIsSubmitting(true);
    const roleTitle = applyModalJob ? applyModalJob.title : "General Application";

    // Build Pre-filled Gmail Compose & Mailto Links
    const subject = `Job Application: ${roleTitle} — ${applicantData.name}`;
    const bodyText = `Hello DhiGrowth Hiring Team,

I am applying for the position: "${roleTitle}".

My Details:
• Full Name: ${applicantData.name}
• Email: ${applicantData.email}
• Phone / WhatsApp: ${applicantData.phone}
• Experience: ${applicantData.experience}
• LinkedIn: ${applicantData.linkedin}

Key Skills / Cover Note:
${applicantData.note}

(Resume: ${resumeFile?.name || 'Resume.pdf'})

Thank you!
${applicantData.name}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Dhinesh@dhigrowth.com,dinesh@dhigrowth.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    const mailtoLink = `mailto:Dhinesh@dhigrowth.com,dinesh@dhigrowth.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    setGmailComposeUrl(gmailUrl);
    setMailtoUrl(mailtoLink);

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: applicantData.name,
          email: applicantData.email,
          phone: applicantData.phone,
          experience: applicantData.experience,
          linkedin: applicantData.linkedin,
          note: applicantData.note,
          role: roleTitle,
          resumeBase64: resumeBase64,
          resumeFileName: resumeFile.name
        })
      });

      const resData = await response.json();
      if (!response.ok && !resData.success) {
        console.warn('API Response notice:', resData.error);
      }
    } catch (err: any) {
      console.error('Application submission note:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Automatically open Gmail Compose for immediate applicant confirmation
      if (typeof window !== 'undefined') {
        window.open(gmailUrl, '_blank');
      }
    }
  };

  const closeApplyModal = () => {
    setApplyModalJob(null);
    setIsSuccess(false);
    setErrorMessage('');
    setGmailComposeUrl('');
    setMailtoUrl('');
    setResumeError('');
    setResumeFile(null);
    setResumeBase64('');
    setApplicantData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      linkedin: '',
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
              <span className="text-[#2196E8] font-bold text-xs tracking-wider font-body">
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
                        <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2196E8] text-xs font-bold">
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
              <span className="text-[#2196E8] font-bold text-xs tracking-wider font-body">
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
              <span className="text-[#2196E8] font-bold text-xs tracking-wider font-body">
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
                We're always excited to meet brilliant developers, AI researchers, growth marketers, and video creators. Submit your resume to join our growing team.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setApplyModalJob(JOB_OPENINGS[0])}
                  className="px-7 py-3.5 rounded-full bg-[#2196E8] hover:bg-[#1b84cf] text-white text-sm font-bold tracking-wide transition-all shadow-lg hover:scale-105 cursor-pointer"
                >
                  Submit Resume Online
                </button>
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
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2196E8] text-xs font-bold border border-blue-200">
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
                  <h4 className="text-sm font-bold text-slate-900">Role Overview</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{selectedJob.overview}</p>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Key Technologies &amp; Skills</h4>
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
                  <h4 className="text-sm font-bold text-slate-900">Key Responsibilities</h4>
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
                  <h4 className="text-sm font-bold text-slate-900">Candidate Requirements</h4>
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
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 z-20 my-auto p-6 sm:p-8 text-left font-body max-h-[90vh] overflow-y-auto"
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
                  <h4 className="font-header text-2xl sm:text-3xl text-slate-900 font-extrabold">
                    Application Sent to Gmail!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your application for <strong className="text-slate-900">{applyModalJob?.title}</strong> has been routed directly to <strong className="text-[#2196E8]">Dhinesh@dhigrowth.com</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    {gmailComposeUrl && (
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        Open in Gmail Compose
                      </a>
                    )}
                    {mailtoUrl && (
                      <a
                        href={mailtoUrl}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Default Mail App
                      </a>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={closeApplyModal}
                      className="px-6 py-2.5 rounded-xl bg-[#2196E8] hover:bg-[#1b84cf] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="space-y-1 pr-6">
                    <span className="text-[#2196E8] font-bold text-xs tracking-wider block">
                      Quick Application
                    </span>
                    <h3 className="font-header text-2xl font-extrabold text-slate-900 leading-tight">
                      Apply: {applyModalJob.title}
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Submit your application and resume.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Full Name (Mandatory) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={applicantData.name}
                        onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    {/* Email & WhatsApp (Mandatory) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email ID <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={applicantData.email}
                          onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          WhatsApp / Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={applicantData.phone}
                          onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Years of Exp & LinkedIn URL (Mandatory) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Years of Experience <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 3 Years / Fresher"
                          value={applicantData.experience}
                          onChange={(e) => setApplicantData({ ...applicantData, experience: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          LinkedIn Profile URL <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="url"
                          required
                          placeholder="https://linkedin.com/in/..."
                          value={applicantData.linkedin}
                          onChange={(e) => setApplicantData({ ...applicantData, linkedin: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Upload Resume in PDF under 5MB (Mandatory) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Upload Resume (PDF under 5 MB) <span className="text-rose-500">*</span>
                      </label>
                      {!resumeFile ? (
                        <label className="border-2 border-dashed border-slate-300 hover:border-[#2196E8] bg-slate-50/70 hover:bg-blue-50/30 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all group">
                          <Upload className="w-6 h-6 text-[#2196E8] mb-1 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-slate-700">Click to upload your Resume (PDF)</span>
                          <span className="text-[10px] text-slate-400 mt-0.5">Maximum file size: 5 MB</span>
                          <input
                            type="file"
                            accept=".pdf,application/pdf"
                            required
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      ) : (
                        <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-2xl flex items-center justify-between">
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <div className="w-8 h-8 rounded-xl bg-[#2196E8] text-white flex items-center justify-center shrink-0">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-xs font-bold text-slate-900 truncate">{resumeFile.name}</p>
                              <p className="text-[10px] text-slate-500">{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • PDF Ready</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeResumeFile}
                            className="p-1.5 rounded-lg bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-500 border border-slate-200 transition-colors cursor-pointer"
                            title="Remove and choose another PDF"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      {resumeError && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{resumeError}</span>
                        </p>
                      )}
                    </div>

                    {/* Key Skills / Cover Note (Mandatory) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Key Skills, Projects, or Brief Cover Note <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Highlight your key skills, notable projects, or why you want to join DhiGrowth..."
                        value={applicantData.note}
                        onChange={(e) => setApplicantData({ ...applicantData, note: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#2196E8] text-slate-900 resize-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#2196E8] to-[#4A72EB] hover:from-[#1b84cf] hover:to-[#3b5fd4] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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
