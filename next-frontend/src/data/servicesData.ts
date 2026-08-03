export interface ServiceSectionItem {
  title: string;
  desc: string;
}

export interface ServiceSection {
  heading: string;
  content?: string;
  items?: ServiceSectionItem[];
  features?: string[];
  steps?: string[];
}

export interface Service {
  id: string;
  name: string;
  shortCopy: string;
  category: 'tech' | 'ai' | 'marketing' | 'creative' | 'strategy';
  iconName: string;
  badge?: string;
  heroTitle: string;
  heroSub: string;
  sections: ServiceSection[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  text: string;
  rating: number;
  avatarUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  logoLetter?: string;
}

export interface Industry {
  title: string;
  icon: string;
  desc: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "website-development",
    name: "Website Development",
    shortCopy: "Custom, responsive, SEO-ready websites built for speed and conversions.",
    category: "tech",
    iconName: "Globe",
    badge: "Most Popular",
    heroTitle: "Website Development Company in Coimbatore",
    heroSub: "DhiGrowth builds custom, fast-loading, and SEO-friendly websites that help businesses in Coimbatore grow online — from stunning designs to powerful functionality.",
    sections: [
      {
        heading: "Leading Website Development Company in Coimbatore",
        content: "DhiGrowth is a trusted website development company in Coimbatore with proven expertise in building custom websites for businesses across all industries. We blend creativity, technology, and strategy to deliver websites that not only look exceptional but perform powerfully in search engines and convert visitors into paying customers. From your first business website to a complete digital revamp, we are the website development company in Coimbatore that businesses rely on for quality, speed, and results."
      },
      {
        heading: "Our Website Development Services",
        items: [
          { title: "Business Website", desc: "A professional, brand-aligned website that builds trust and credibility with your audience from the very first visit." },
          { title: "E-Commerce Website", desc: "A fully functional online store with seamless payment integration, product management, and a smooth buying experience that drives sales." },
          { title: "Landing Page Design", desc: "High-converting, focused landing pages built specifically for campaigns, promotions, and lead generation." },
          { title: "Web Portal Development", desc: "Custom portals for customers, vendors, partners, or internal teams built for functionality, security, and ease of use." },
          { title: "CMS Website Development", desc: "Easy to manage websites built on WordPress, Shopify, and modern headless CMS platforms — update content without coding." },
          { title: "Website Revamp & Redesign", desc: "Transform your outdated website into a modern, fast, and conversion-optimised digital experience that reflects your brand today." }
        ]
      },
      {
        heading: "Why Coimbatore Businesses Trust DhiGrowth for Website Development",
        features: [
          "100% Custom Design — Every website is designed from scratch, no generic templates.",
          "SEO-Optimised from Day One — Built with on-page SEO best practices to rank on Google immediately.",
          "Mobile-First Approach — Over 80% browse on mobile. Flawless experience on every screen.",
          "Speed-Optimised Performance — Clean code ensuring split-second load times.",
          "Secure & Scalable Architecture — SSL, DDoS protection, and modern cloud deployment.",
          "Transparent Process & Timely Delivery — Regular updates and clear project milestones.",
          "Dedicated Post-Launch Support — Maintenance, security updates, and performance tuning."
        ]
      },
      {
        heading: "How We Build Your Website",
        steps: [
          "1. Discovery & Planning — Deep dive into goals, audience, and market context.",
          "2. Wireframe & Design — Crafting UI mockups for your approval before coding.",
          "3. Development — Clean, secure code bringing designs to life.",
          "4. Content Integration — SEO-optimised text, media, and metadata setup.",
          "5. Testing & Quality Check — Cross-device, speed, and security audits.",
          "6. Launch & SEO Setup — Going live with Google Analytics and Search Console.",
          "7. Support & Maintenance — Ongoing updates and performance monitoring."
        ]
      }
    ]
  },
  {
    id: "app-development",
    name: "Application Development",
    shortCopy: "iOS, Android & cross-platform apps designed for seamless user experiences.",
    category: "tech",
    iconName: "Smartphone",
    badge: "High Growth",
    heroTitle: "Mobile App Development Company in Coimbatore",
    heroSub: "At DHI Growth, we build innovative, user-friendly, and scalable mobile applications for startups, SMEs, and enterprises across industries.",
    sections: [
      {
        heading: "Mobile App Development in Coimbatore",
        content: "In a mobile-first world, your business needs an app that performs flawlessly. DhiGrowth builds custom iOS, Android, and cross-platform mobile applications tailored to your business goals. From customer-facing apps and on-demand platforms to internal enterprise tools and SaaS products — we handle the full development lifecycle from ideation to App Store launch."
      },
      {
        heading: "Our App Development Offerings",
        items: [
          { title: "Native iOS & Android Apps", desc: "High-performance native applications optimized specifically for Swift/Apple and Kotlin/Android ecosystems." },
          { title: "Cross-Platform Apps", desc: "Cost-effective multi-platform apps built using React Native and Flutter with single codebase efficiency." },
          { title: "Enterprise Mobility Solutions", desc: "Streamlined internal business apps for workflow management, field operations, and CRM integration." },
          { title: "E-Commerce & Service Apps", desc: "Engaging shopping apps with push notifications, in-app checkout, and loyalty systems." }
        ]
      },
      {
        heading: "Our Structured Mobile App Process",
        steps: [
          "1. Requirement Analysis — Define architecture, user stories, and technical requirements.",
          "2. UI/UX Design — Crafting intuitive screens and interactive prototypes.",
          "3. Agile Development — Sprint-based development with frequent progress demos.",
          "4. Quality Assurance — End-to-end testing for speed, battery performance, and security.",
          "5. Deployment & Maintenance — App Store & Play Store publishing plus continuous updates."
        ]
      }
    ]
  },
  {
    id: "ai-development",
    name: "AI Development",
    shortCopy: "Smart AI products — chatbots, recommendation engines & custom ML models.",
    category: "ai",
    iconName: "Cpu",
    badge: "Future Tech",
    heroTitle: "AI Development Company in Coimbatore",
    heroSub: "At DHI Growth, we deliver innovative artificial intelligence solutions that empower businesses to automate, predict, and innovate in the digital age.",
    sections: [
      {
        heading: "Smart Solutions for Modern Businesses",
        content: "Artificial intelligence is no longer the future — it is the present. DhiGrowth builds custom AI solutions that give your business a competitive edge. We develop intelligent chatbots, recommendation engines, predictive analytics tools, natural language processing (NLP) systems, and machine learning models tailored to your industry."
      },
      {
        heading: "AI Services & Capabilities",
        items: [
          { title: "Predictive Analytics", desc: "Forecast market trends, demand, and customer behavior using custom ML models." },
          { title: "Conversational Chatbots", desc: "24/7 AI virtual assistants powered by LLMs to automate support and drive sales." },
          { title: "Computer Vision", desc: "Automated quality inspection, facial recognition, and visual document analysis for manufacturing and retail." },
          { title: "Natural Language Processing", desc: "Extract insights from customer feedback, emails, and unstructured text automatically." }
        ]
      }
    ]
  },
  {
    id: "ai-automation",
    name: "AI Automation",
    shortCopy: "Automate repetitive tasks and workflows using intelligent AI solutions.",
    category: "ai",
    iconName: "Zap",
    badge: "Efficiency",
    heroTitle: "AI Automation Development Company in Coimbatore",
    heroSub: "Work Smarter, Not Harder. Eliminate manual bottlenecks with self-running AI workflows.",
    sections: [
      {
        heading: "Work Smarter, Not Harder",
        content: "Manual tasks slow your business down. DhiGrowth's AI automation solutions eliminate repetitive processes and replace them with intelligent, self-running systems that save time, reduce errors, and cut operational costs."
      },
      {
        heading: "Key Automation Use Cases",
        items: [
          { title: "Lead Qualification & Follow-up", desc: "Instant AI engagement with new incoming leads across web, ads, and WhatsApp." },
          { title: "Document & Invoice Processing", desc: "Automated data extraction from PDFs, receipts, and invoices directly into your accounting tools." },
          { title: "Customer Support Pipelines", desc: "Resolve 80%+ of customer inquiries instantly without human intervention." },
          { title: "Inventory & Workflow Automation", desc: "Predictive restock alerts and seamless cross-platform task sync." }
        ]
      }
    ]
  },
  {
    id: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    shortCopy: "High-engagement campaigns via WhatsApp Business API to drive sales.",
    category: "marketing",
    iconName: "MessageSquare",
    badge: "98% Open Rate",
    heroTitle: "WhatsApp Marketing Company in Coimbatore",
    heroSub: "Reach Customers Where They Are — Directly in India's #1 Messaging App with Official WhatsApp API.",
    sections: [
      {
        heading: "Direct, High-Converting Customer Engagement",
        content: "With over 500 million active users in India, WhatsApp is the most direct channel to your customers. DhiGrowth's WhatsApp marketing services help businesses in Coimbatore run targeted broadcast campaigns, automate customer conversations, send order updates, and drive sales all through the Official WhatsApp Business API."
      },
      {
        heading: "WhatsApp API Capabilities",
        items: [
          { title: "Broadcast Campaigns", desc: "Send rich media broadcasts with CTA buttons to targeted customer segments." },
          { title: "AI WhatsApp Chatbots", desc: "Automate sales inquiries, product catalogs, and bookings inside WhatsApp." },
          { title: "CRM & E-Commerce Integration", desc: "Trigger automated abandoned cart reminders, invoice notifications, and shipping alerts." },
          { title: "Analytics & Opt-in Management", desc: "Real-time delivery, read, and conversion tracking with full policy compliance." }
        ]
      }
    ]
  },
  {
    id: "business-automation",
    name: "Business Automation",
    shortCopy: "Streamline operations, reduce costs & boost efficiency with smart automation.",
    category: "ai",
    iconName: "Sliders",
    badge: "Cost Savings",
    heroTitle: "Business Automation Services in Coimbatore",
    heroSub: "Streamline Operations, Eliminate Bottlenecks, and Scale Your Enterprise Faster.",
    sections: [
      {
        heading: "Operational Excellence Through Digitization",
        content: "Running a business involves hundreds of repetitive tasks that consume your team's time. DhiGrowth's business automation services help you identify, digitise, and automate those processes — from CRM workflows and invoice generation to HR management, sales pipelines, and customer onboarding."
      }
    ]
  },
  {
    id: "business-development",
    name: "Business Development",
    shortCopy: "Strategic consulting and execution to expand your market presence.",
    category: "strategy",
    iconName: "TrendingUp",
    badge: "Strategic",
    heroTitle: "Business Development in Coimbatore",
    heroSub: "Strategy, Growth & Execution to Expand Your Reach and Revenue.",
    sections: [
      {
        heading: "Growth Does Not Happen By Accident",
        content: "DhiGrowth's business development services help companies in Coimbatore identify new market opportunities, build strategic partnerships, develop revenue-generating plans, and execute with precision. We work closely with founders and business leaders to craft customized growth roadmaps."
      }
    ]
  },
  {
    id: "seo",
    name: "SEO",
    shortCopy: "Rank higher on Google with technical SEO, content strategy & link building.",
    category: "marketing",
    iconName: "Search",
    badge: "Organic Reach",
    heroTitle: "SEO Company in Coimbatore",
    heroSub: "Rank Higher, Get Found, and Outpace Competitors on Google Search.",
    sections: [
      {
        heading: "Dominate Google Search Results",
        content: "When your potential customers search for your products or services online, you need to be at the very top. DhiGrowth offers comprehensive SEO services in Coimbatore covering technical SEO, on-page optimisation, content strategy, local SEO, and high-quality link building."
      },
      {
        heading: "Comprehensive SEO Strategy",
        items: [
          { title: "Local SEO & GMB Optimisation", desc: "Dominate Coimbatore local search map packs for high-intent nearby customers." },
          { title: "Technical SEO Audits", desc: "Fix indexing issues, site speed, mobile usability, and schema markup." },
          { title: "High-Intent Keyword Targeting", desc: "Capture customers ready to buy with targeted transactional keyword research." },
          { title: "White-Hat Link Building", desc: "Build domain authority with high-quality contextual backlinks." }
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    shortCopy: "Full-funnel digital campaigns that attract, engage and convert customers.",
    category: "marketing",
    iconName: "Target",
    badge: "Full Funnel",
    heroTitle: "Digital Marketing Company in Coimbatore",
    heroSub: "Data-Driven Full-Funnel Campaigns That Deliver Measurable ROI on Every Rupee.",
    sections: [
      {
        heading: "Integrated Performance Marketing",
        content: "Digital marketing is more than running ads or posting on social media — it is a connected strategy that attracts, engages, and converts your ideal customers at every stage of their journey. DhiGrowth provides end-to-end digital marketing services backed by data and creative execution."
      }
    ]
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    shortCopy: "Build your brand and community across Instagram, Facebook & LinkedIn.",
    category: "marketing",
    iconName: "Share2",
    badge: "Brand Building",
    heroTitle: "Social Media Marketing in Coimbatore",
    heroSub: "Build Your Brand. Engage Your Audience. Turn Followers Into Brand Advocates.",
    sections: [
      {
        heading: "Powerful Brand Presence Across Platforms",
        content: "Social media is where your customers spend hours every day. We manage your presence across Instagram, Facebook, LinkedIn, and YouTube with a strategic mix of high-converting visual creatives, reels, community management, and growth tactics."
      }
    ]
  },
  {
    id: "meta-google-ads",
    name: "Meta & Google Ads",
    shortCopy: "Targeted paid advertising to maximise ROAS across Google and Meta platforms.",
    category: "marketing",
    iconName: "BarChart3",
    badge: "High ROAS",
    heroTitle: "Meta Ads & Google Ads Management in Coimbatore",
    heroSub: "Stop Wasting Money on Ads That Don't Convert. Maximize Your Return on Ad Spend.",
    sections: [
      {
        heading: "Targeted Paid Ads That Deliver Real ROI",
        content: "DhiGrowth's paid advertising specialists design and manage high-performing Meta Ads (Facebook & Instagram) and Google Ads campaigns (Search, Display, Shopping, YouTube) that target the right audience at the right time with precision ad copy."
      }
    ]
  },
  {
    id: "ads-shooting",
    name: "Ads Shooting",
    shortCopy: "Professional ad film production — creative concepts to camera-ready content.",
    category: "creative",
    iconName: "Video",
    badge: "Cinematic",
    heroTitle: "Ad Film & Commercial Shooting Services in Coimbatore",
    heroSub: "Cinematic Storytelling & Professional Commercial Production Built for Impact.",
    sections: [
      {
        heading: "Camera-Ready Content for TV & Digital",
        content: "Great advertising starts with captivating visuals. DhiGrowth offers professional ad film and commercial shooting services in Coimbatore — handling concept development, scriptwriting, location scouting, direction, and 4K camera production."
      }
    ]
  },
  {
    id: "video-editing",
    name: "Video Editing",
    shortCopy: "High-quality video editing for reels, ads, brand videos & social content.",
    category: "creative",
    iconName: "Film",
    badge: "Viral Content",
    heroTitle: "Professional Video Editing Services in Coimbatore",
    heroSub: "High-Impact Video Editing for Reels, Ads, Brand Films & YouTube.",
    sections: [
      {
        heading: "Content That Captivates & Converts",
        content: "Raw footage is just the beginning. DhiGrowth's video editing team transforms raw clips into polished, high-impact videos with professional color grading, motion graphics, subtitles, sound design, and viral pacing."
      }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Karthik Raja",
    role: "Managing Director",
    company: "Veda Tex & Fabrics",
    location: "Coimbatore",
    text: "DhiGrowth transformed our traditional textile business into a digital powerhouse. Their custom website and targeted Google Ads campaign increased our wholesale inquiry volume by 320% within 4 months. Best digital agency in Coimbatore!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/karthik-raja-vedatex",
    websiteUrl: "https://vedatexfabrics.com",
    logoLetter: "V"
  },
  {
    id: 2,
    name: "Dr. Ananya Sundaram",
    role: "Founder",
    company: "Aura Dental Speciality Hospital",
    location: "Coimbatore",
    text: "We needed local patient inquiries and high search rankings in Coimbatore. DhiGrowth's SEO and WhatsApp marketing integration automated our appointment booking pipeline completely. Exceptional quality and transparent reporting.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/dr-ananya-sundaram",
    websiteUrl: "https://auradentalcoimbatore.com",
    logoLetter: "A"
  },
  {
    id: 3,
    name: "Santhosh Kumar",
    role: "Co-Founder",
    company: "NexGen Precision Engineering",
    location: "Peelamedu, Coimbatore",
    text: "The AI automation system built by DhiGrowth automated our entire lead qualification and quotation workflow. Tasks that took 3 hours now run in seconds. Their tech capability is truly world-class.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/santhosh-kumar-nexgen",
    websiteUrl: "https://nexgenprecision.com",
    logoLetter: "N"
  },
  {
    id: 4,
    name: "Priya Varma",
    role: "Marketing Head",
    company: "Covai Organic Foods",
    location: "Coimbatore",
    text: "Their ad films and Meta ad campaigns gave our organic brand massive visibility across South India. Return on ad spend (ROAS) reached 5.4x consistently! Highly recommended growth partner.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/priya-varma-covai",
    websiteUrl: "https://covaiorganicfoods.com",
    logoLetter: "C"
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  { title: "Retail & E-Commerce", icon: "ShoppingBag", desc: "Online stores, inventory sync & conversion checkout optimization." },
  { title: "Healthcare & Clinics", icon: "Activity", desc: "Patient booking portals, local SEO & trust-building campaigns." },
  { title: "Education & Institutions", icon: "GraduationCap", desc: "Admission funnel campaigns, student portals & institutional branding." },
  { title: "Manufacturing & Textile", icon: "Factory", desc: "B2B lead generation, export catalog websites & AI process automation." },
  { title: "Real Estate & Construction", icon: "Building", desc: "Project landing pages, virtual tour videos & high-intent lead ads." },
  { title: "Hospitality & Restaurants", icon: "Utensils", desc: "Menu digitization, WhatsApp reservation bots & social media reels." },
  { title: "Logistics & Transportation", icon: "Truck", desc: "Fleet tracking portals, automated booking flows & client dashboards." },
  { title: "Professional Services", icon: "Briefcase", desc: "Authority branding, LinkedIn campaigns & client portal websites." },
  { title: "Startups & Tech", icon: "Rocket", desc: "SaaS landing pages, mobile apps & scalable AI product development." },
  { title: "Non-Profit & Govt", icon: "Globe", desc: "Community awareness campaigns, donation portals & public engagement." }
];
