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
  headline?: string;
  fullDescription?: string;
  shortCopy: string;
  category: 'tech' | 'ai' | 'marketing' | 'creative' | 'strategy';
  iconName: string;
  badge?: string;
  heroTitle: string;
  heroSub: string;
  bottomCtaHeading?: string;
  bottomCtaSub?: string;
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
    headline: "Professional Website Development Services in Coimbatore",
    fullDescription: "Your website is your first impression. At DhiGrowth, we design and develop custom, fast-loading, mobile-responsive websites that not only look great but are built to convert visitors into customers. From business websites and landing pages to e-commerce platforms and web portals, every website we build is SEO optimised, secure, and scalable. Whether you are a startup looking for your first website or an established business ready for a revamp, we deliver websites that work as hard as you do.",
    shortCopy: "Custom, responsive, SEO-ready websites built for speed and conversions.",
    category: "tech",
    iconName: "Globe",
    badge: "High Conversion",
    heroTitle: "Website Development Company in Coimbatore",
    heroSub: "DhiGrowth builds custom, fast-loading, SEO-friendly websites that help businesses grow online — from stunning design to powerful functionality.",
    bottomCtaHeading: "Ready to build a website that grows your business?",
    bottomCtaSub: "Get started with a trusted website development team in Coimbatore. Let our experts build you a site that looks great, ranks on Google, and converts visitors into customers.",
    sections: [
      {
        heading: "Overview",
        content: "DhiGrowth is a trusted website development company with proven expertise in building custom websites for businesses across every industry in Coimbatore and beyond. We blend creativity, technology, and strategy to deliver websites that look exceptional, perform powerfully in search engines, and convert visitors into paying customers — whether it's your first business website or a complete digital revamp."
      },
      {
        heading: "What We Build",
        items: [
          { title: "Business Website", desc: "A professional, brand-aligned site that builds trust and credibility with your audience from the very first visit." },
          { title: "E-Commerce Website", desc: "A fully functional online store with seamless payment integration, product management, and a smooth buying experience." },
          { title: "Landing Page Design", desc: "High-converting, focused landing pages built specifically for campaigns, promotions, and lead generation." },
          { title: "Web Portal Development", desc: "Custom portals for customers, vendors, partners, or internal teams built for functionality and ease of use." },
          { title: "CMS Website Development", desc: "Easy-to-manage websites built on WordPress and other leading CMS platforms, update content anytime." },
          { title: "Website Revamp & Redesign", desc: "Transform your outdated website into a modern, fast, and conversion-optimised digital experience." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "100% Custom Design — Every website is designed from scratch, no generic templates, no copy-paste layouts. Your site is as unique as your brand.",
          "SEO-Optimised from Day One — Built with on-page SEO best practices so it's ready to rank on search engines from the moment it goes live.",
          "Mobile-First — Over 80% of users browse on mobile; we design and develop for mobile first, ensuring a flawless experience on every screen.",
          "Speed-Optimised — Clean, efficient code and performance best practices because every second of delay costs you customers.",
          "Secure & Scalable — Secured with industry-standard protocols on a foundation that grows seamlessly with your business.",
          "Transparent Timelines — Clear project milestones with regular updates, so you always know where your project stands.",
          "Post-Launch Support — Ongoing maintenance, security updates, and performance monitoring to keep your site at its peak."
        ]
      },
      {
        heading: "How We Build Your Website",
        steps: [
          "1. Discovery & Planning — Understanding your business, audience, competitors, and goals to build a clear roadmap.",
          "2. Wireframe & Design — Wireframes and visual mockups reflecting your brand identity, approved before development.",
          "3. Development — Clean, optimised, and secure code bringing the approved design to life with precision.",
          "4. Content Integration — Text, images, and video, properly structured and SEO-optimised.",
          "5. Testing & QA — Rigorous testing across all devices, screen sizes, and modern browsers.",
          "6. Launch — Live with full SEO setup, speed optimisation, and analytics configured.",
          "7. Support & Maintenance — Ongoing care to keep your site secure and performing at its best."
        ]
      }
    ]
  },
  {
    id: "app-development",
    name: "Application Development",
    headline: "Mobile & Web Application Development in Coimbatore",
    fullDescription: "In a mobile-first world, your business needs an app that performs flawlessly. DhiGrowth builds custom iOS, Android, and cross-platform mobile applications tailored to your business goals. From customer-facing apps and on-demand platforms to internal business tools and SaaS products, we handle the full development lifecycle from ideation to deployment. Our apps are built for speed, security, and scalability so your users always get the best experience.",
    shortCopy: "iOS, Android & cross-platform apps designed for seamless user experiences.",
    category: "tech",
    iconName: "Smartphone",
    badge: "High Growth",
    heroTitle: "Mobile & App Development Company in Coimbatore",
    heroSub: "Custom iOS, Android, and cross-platform apps built for speed, security, and scale.",
    bottomCtaHeading: "Ready to bring your app idea to life?",
    bottomCtaSub: "Partner with a trusted app development team in Coimbatore to build something that connects with your audience and elevates your brand.",
    sections: [
      {
        heading: "Overview",
        content: "Mobile applications are essential for businesses looking to connect with customers, streamline operations, and expand their reach. As a trusted app development company based in Coimbatore, we combine local market understanding with global development standards to deliver apps that perform."
      },
      {
        heading: "What We Build",
        items: [
          { title: "Native Apps", desc: "iOS and Android apps built for performance and platform-specific experience." },
          { title: "Cross-Platform Apps", desc: "Flutter and React Native builds that ship faster without sacrificing quality." },
          { title: "Enterprise Mobility Solutions", desc: "Internal tools that streamline workflows and operations." },
          { title: "E-Commerce & Engagement Apps", desc: "Shopping, loyalty, and customer-facing experiences that drive retention." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Expertise in Mobile Solutions — Years of experience across diverse business needs.",
          "Customised Development — Every project tailored to your specific goals.",
          "Cutting-Edge Technology — Latest frameworks and tools for high-performance apps.",
          "Client-Centric Process — Transparent communication at every stage."
        ]
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis — Understanding your business objectives and user needs.",
          "2. UI/UX Design — Crafting intuitive, engaging interfaces.",
          "3. Development — Building robust apps with modern technologies.",
          "4. Testing — Verifying functionality, security, and performance.",
          "5. Deployment & Support — Launching your app with ongoing maintenance."
        ]
      }
    ]
  },
  {
    id: "ai-development",
    name: "AI Development",
    headline: "AI Development Services in Coimbatore: Smart Solutions for Modern Businesses",
    fullDescription: "Artificial intelligence is no longer the future, it is the present. DhiGrowth builds custom AI solutions that give your business a competitive edge. We develop intelligent chatbots, recommendation engines, predictive analytics tools, natural language processing systems, and machine learning models tailored to your industry. Whether you want to automate customer interactions, analyse large datasets, or build a smart product from scratch, our AI development team in Coimbatore delivers solutions that are practical, powerful, and built to scale.",
    shortCopy: "Smart AI products: chatbots, recommendation engines & custom ML models.",
    category: "ai",
    iconName: "Cpu",
    badge: "Future Tech",
    heroTitle: "AI Development Company in Coimbatore",
    heroSub: "Smart AI products — chatbots, recommendation engines, and custom ML models.",
    bottomCtaHeading: "Ready to put AI to work for your business?",
    bottomCtaSub: "Partner with a trusted AI development team in Coimbatore to build solutions that are practical, powerful, and built to scale.",
    sections: [
      {
        heading: "Overview",
        content: "Artificial intelligence is reshaping industries by automating processes, enhancing decision-making, and improving customer experiences. As an AI development company based in Coimbatore, we help businesses harness these technologies to stay competitive and future-ready."
      },
      {
        heading: "What We Build",
        items: [
          { title: "Predictive Analytics", desc: "Smarter decision-making powered by your data." },
          { title: "Chatbots & Virtual Assistants", desc: "Automated, always-on customer engagement." },
          { title: "Computer Vision Applications", desc: "For manufacturing, retail, and quality control." },
          { title: "Natural Language Processing", desc: "Text and speech analysis tailored to your use case." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Deep AI Expertise — Experience across multiple domains and industries.",
          "Custom-Built Solutions — Designed around your specific business challenges.",
          "Modern Tooling — Machine learning, NLP, and computer vision done right.",
          "Transparent Collaboration — Clear communication throughout the build."
        ]
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis — Understanding your business needs and objectives.",
          "2. Data Preparation — Collecting and cleaning datasets for accurate modelling.",
          "3. Model Development — Building AI models using proven algorithms.",
          "4. Testing & Validation — Ensuring reliability, accuracy, and scalability.",
          "5. Deployment & Support — Seamless integration and ongoing maintenance."
        ]
      }
    ]
  },
  {
    id: "ai-automation",
    name: "AI Automation Development",
    headline: "AI Automation Services in Coimbatore: Work Smarter, Not Harder",
    fullDescription: "Manual tasks slow your business down. DhiGrowth's AI automation solutions eliminate repetitive processes and replace them with intelligent, self-running systems that save time, reduce errors, and cut operational costs. From automating customer support and lead follow-ups to inventory management and reporting workflows, we design AI-powered automation pipelines that integrate seamlessly with your existing tools and platforms. Let your team focus on what truly matters while AI handles the rest.",
    shortCopy: "Automate repetitive tasks and workflows using intelligent AI solutions.",
    category: "ai",
    iconName: "Zap",
    badge: "Efficiency",
    heroTitle: "AI Automation Development Company in Coimbatore",
    heroSub: "Automate repetitive tasks and workflows with intelligent, self-running systems.",
    bottomCtaHeading: "Ready to work smarter, not harder?",
    bottomCtaSub: "Partner with a trusted AI automation team in Coimbatore to build systems that free up your team for what actually matters.",
    sections: [
      {
        heading: "Overview",
        content: "Manual tasks slow businesses down. As an AI automation company based in Coimbatore, we replace repetitive processes with intelligent systems that save time, reduce errors, and cut operational costs — integrating seamlessly with the tools you already use."
      },
      {
        heading: "What We Automate",
        items: [
          { title: "Process Automation", desc: "Finance, HR, and operations workflows." },
          { title: "AI-Powered Chatbots", desc: "Automated customer service that scales." },
          { title: "Predictive Analytics", desc: "Smarter, faster decision-making." },
          { title: "Workflow Optimisation", desc: "Machine learning applied to your existing pipelines." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Proven Automation Expertise — Years designing and deploying solutions across industries.",
          "Tailored Strategies — Built around your organisation's specific challenges.",
          "Modern Technology — Machine learning, RPA, and NLP working together.",
          "Collaborative Process — Transparent communication from scoping to launch."
        ]
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis — Understanding your workflows and automation goals.",
          "2. Data Preparation — Structuring datasets for accurate modelling.",
          "3. Model Development — Building automation models with advanced algorithms.",
          "4. Testing & Validation — Confirming reliability, accuracy, and scale.",
          "5. Deployment & Support — Integration with ongoing maintenance."
        ]
      }
    ]
  },
  {
    id: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    headline: "WhatsApp Marketing Services in Coimbatore: Reach Customers Where They Are",
    fullDescription: "With over 500 million users in India, WhatsApp is the most direct channel to your customers. DhiGrowth's WhatsApp marketing services help businesses in Coimbatore run targeted broadcast campaigns, automate customer conversations, send promotional messages, and drive sales all through the WhatsApp Business API. We create personalised, high-engagement campaigns that cut through the noise and deliver your message directly into the hands of your audience. Higher open rates. Better conversions. Real results.",
    shortCopy: "High-engagement campaigns via WhatsApp Business API to drive sales.",
    category: "marketing",
    iconName: "MessageSquare",
    badge: "98% Open Rate",
    heroTitle: "WhatsApp Marketing Company in Coimbatore",
    heroSub: "High-engagement campaigns via WhatsApp Business API that drive real sales.",
    bottomCtaHeading: "Ready to turn WhatsApp into a sales channel?",
    bottomCtaSub: "Partner with a trusted WhatsApp marketing team in Coimbatore to launch campaigns that convert.",
    sections: [
      {
        heading: "Overview",
        content: "With hundreds of millions of users in India, WhatsApp is one of the most direct channels to reach customers. As a WhatsApp marketing company based in Coimbatore, we build personalised, high-engagement campaigns that cut through the noise and land directly in your audience's hands."
      },
      {
        heading: "What We Offer",
        items: [
          { title: "Promotional Campaigns", desc: "Targeted broadcasts that boost sales." },
          { title: "Customer Support Automation", desc: "Faster responses without added headcount." },
          { title: "Transactional Notifications", desc: "Seamless order and service updates." },
          { title: "Interactive Campaigns", desc: "Two-way messaging that drives real engagement." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Proven Campaign Expertise — Experience designing campaigns across industries.",
          "Custom Strategy — Solutions built around your specific customer base.",
          "Automation & Analytics — AI-driven tools that optimise performance continuously.",
          "Transparent Planning — Collaborative, open communication throughout."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Requirement Analysis — Understanding your goals and customer base.",
          "2. Campaign Design — Crafting engaging content and messaging flows.",
          "3. Automation Setup — Implementing chatbots and scheduled campaigns.",
          "4. Testing & Optimisation — Ensuring accuracy, compliance, and effectiveness.",
          "5. Reporting & Support — Ongoing insight and assistance."
        ]
      }
    ]
  },
  {
    id: "business-automation",
    name: "Business Automation",
    headline: "Business Automation Services in Coimbatore: Streamline Operations & Scale Faster",
    fullDescription: "Running a business involves hundreds of repetitive tasks that consume your team's time and energy. DhiGrowth's business automation services help you identify, digitise, and automate those processes from CRM workflows and invoice generation to HR management, sales pipelines, and customer onboarding. We integrate the right automation tools and custom-built systems to make your entire business run more efficiently. Less manual work. More growth.",
    shortCopy: "Streamline operations, reduce costs & boost efficiency with smart automation.",
    category: "ai",
    iconName: "Sliders",
    badge: "Cost Savings",
    heroTitle: "Business Automation Services in Coimbatore",
    heroSub: "Streamline operations, reduce costs, and scale faster with smart automation.",
    bottomCtaHeading: "Ready to spend less time on busywork?",
    bottomCtaSub: "Partner with a trusted automation team in Coimbatore and get hours back every week.",
    sections: [
      {
        heading: "Overview",
        content: "Running a business involves hundreds of repetitive tasks that eat into your team's time and energy. Based in Coimbatore, we help identify, digitise, and automate those processes — from CRM workflows to invoicing, HR, and customer onboarding — so your business runs more efficiently."
      },
      {
        heading: "What We Automate",
        items: [
          { title: "CRM & Sales Pipelines", desc: "Automated follow-ups and lead tracking." },
          { title: "Invoice & Billing Generation", desc: "Fewer manual errors, faster turnaround." },
          { title: "HR Management", desc: "Onboarding, leave tracking, and routine HR tasks." },
          { title: "Customer Onboarding", desc: "Smooth, consistent experiences at scale." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Practical Automation Experience — Solutions proven across industries.",
          "Custom-Fit Systems — Built around how your business actually operates.",
          "Right-Tool Integration — We pick the tools that fit, not the trendiest ones.",
          "Ongoing Optimisation — We keep refining after launch, not just at handoff."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Requirement Analysis — Understanding your business goals and challenges.",
          "2. Strategy Design — Mapping which processes to automate first.",
          "3. Implementation — Building and integrating the automation.",
          "4. Monitoring & Optimisation — Tracking performance and refining.",
          "5. Support & Growth — Ongoing guidance as your needs evolve."
        ]
      }
    ]
  },
  {
    id: "business-development",
    name: "Business Development",
    headline: "Business Development Services in Coimbatore: Strategy, Growth & Execution",
    fullDescription: "Growth does not happen by accident. DhiGrowth's business development services help companies in Coimbatore identify new market opportunities, build strategic partnerships, develop revenue-generating plans, and execute with precision. We work closely with founders and business leaders to understand their goals and craft customized growth strategies covering market research, competitor analysis, sales funnel development, and expansion planning. Whether you are entering a new market or scaling an existing one, we are the partner you need.",
    shortCopy: "Strategic consulting and execution to expand your market presence.",
    category: "strategy",
    iconName: "TrendingUp",
    badge: "Strategic",
    heroTitle: "Business Development Services in Coimbatore",
    heroSub: "Strategic consulting and execution to expand your market presence.",
    bottomCtaHeading: "Ready to expand your market presence?",
    bottomCtaSub: "Partner with a trusted business development team in Coimbatore to build strategies that stick.",
    sections: [
      {
        heading: "Overview",
        content: "Growth doesn't happen by accident. Based in Coimbatore, we help companies identify new market opportunities, build strategic partnerships, and execute revenue-generating plans with precision — working closely with founders to craft strategies tailored to their goals."
      },
      {
        heading: "What We Offer",
        items: [
          { title: "Market Research", desc: "Understanding opportunity and competitive landscape." },
          { title: "Lead Generation", desc: "Building a consistent pipeline of qualified prospects." },
          { title: "Strategic Partnerships", desc: "Alliances that open new revenue channels." },
          { title: "Sales Enablement", desc: "Tools and processes that help your team close more." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Cross-Industry Experience — Strategies proven across sectors.",
          "Tailored Plans — No generic playbooks — built around your goals.",
          "Data-Backed Execution — Digital platforms and analytics inform every decision.",
          "Hands-On Collaboration — We work alongside your team, not around it."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Requirement Analysis — Understanding your goals and challenges.",
          "2. Strategy Design — Building a tailored development plan.",
          "3. Implementation — Executing across sales, marketing, and partnerships.",
          "4. Monitoring & Optimisation — Tracking results and refining the approach.",
          "5. Support & Growth — Ongoing guidance as you scale."
        ]
      }
    ]
  },
  {
    id: "seo",
    name: "SEO",
    headline: "SEO Services in Coimbatore: Rank Higher, Get Found, Grow Faster",
    fullDescription: "When your customers search for your services online, you need to be at the top. DhiGrowth offers comprehensive SEO services in Coimbatore covering technical SEO, on-page optimisation, content strategy, local SEO, and high-quality link building. We audit your website, identify ranking opportunities, and execute a proven strategy to improve your visibility on Google and drive consistent organic traffic. Our SEO approach is transparent, white-hat, and focused entirely on long-term results that compound over time.",
    shortCopy: "Rank higher on Google with technical SEO, content strategy & link building.",
    category: "marketing",
    iconName: "Search",
    badge: "Organic Reach",
    heroTitle: "SEO Company in Coimbatore",
    heroSub: "Rank higher on Google with technical SEO, content strategy, and link building.",
    bottomCtaHeading: "Ready to rank higher and get found?",
    bottomCtaSub: "Partner with a trusted SEO team in Coimbatore for strategies built on long-term results.",
    sections: [
      {
        heading: "Overview",
        content: "When customers search for your services online, you need to be at the top of the results. Based in Coimbatore, we offer technical SEO, on-page optimisation, content strategy, and link building — backed by transparent, white-hat methods focused on long-term, compounding results."
      },
      {
        heading: "What's Included",
        items: [
          { title: "Local SEO", desc: "Getting found by customers searching nearby." },
          { title: "E-Commerce SEO", desc: "Optimised product and category pages that convert." },
          { title: "Technical SEO", desc: "Site speed, crawlability, and structure fixes." },
          { title: "Content Optimisation", desc: "Better rankings through better content." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Proven SEO Track Record — Experience optimising sites across industries.",
          "Custom Strategy — No cookie-cutter checklists.",
          "Data-Driven Approach — Analytics and keyword research guide every move.",
          "Fully Transparent — Regular reporting, no black-box tactics."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Website Audit — Analysing performance and finding opportunities.",
          "2. Keyword Research — Targeting terms that attract qualified traffic.",
          "3. On-Page Optimisation — Improving content, meta tags, and structure.",
          "4. Off-Page SEO — Building authority through backlinks and outreach.",
          "5. Monitoring & Reporting — Tracking progress, refining strategy."
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    headline: "Digital Marketing Services in Coimbatore: Full-Funnel Growth for Your Business",
    fullDescription: "Digital marketing is more than running ads or posting on social media, it is a connected strategy that attracts, engages, and converts your ideal customers at every stage of their journey. DhiGrowth provides end-to-end digital marketing services in Coimbatore including SEO, paid advertising, content marketing, email marketing, and conversion rate optimization. We build integrated campaigns backed by data, creativity, and a deep understanding of your market delivering measurable ROI on every rupee spent.",
    shortCopy: "Full-funnel digital campaigns that attract, engage and convert customers.",
    category: "marketing",
    iconName: "BarChart3",
    badge: "Full Funnel",
    heroTitle: "Digital Marketing Company in Coimbatore",
    heroSub: "Full-funnel campaigns that attract, engage, and convert customers.",
    bottomCtaHeading: "Ready for full-funnel growth?",
    bottomCtaSub: "Partner with a trusted digital marketing team in Coimbatore to drive measurable ROI.",
    sections: [
      {
        heading: "Overview",
        content: "Digital marketing is more than running ads or posting on social media — it's a connected strategy that moves your ideal customers through every stage of their journey. Based in Coimbatore, we build integrated campaigns backed by data, creativity, and a deep understanding of your market."
      },
      {
        heading: "What's Included",
        items: [
          { title: "SEO", desc: "Boosting organic visibility and traffic." },
          { title: "PPC Advertising", desc: "Targeted reach across search and display." },
          { title: "Social Media Marketing", desc: "Engaging your audience where they spend time." },
          { title: "Content Marketing", desc: "Building authority and long-term trust." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Cross-Channel Expertise — Experience across SEO, PPC, social, and content.",
          "Custom Strategy — Plans built for your industry and audience.",
          "Data-Driven Campaigns — Every decision backed by performance data.",
          "Transparent Execution — Clear reporting, no guesswork."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Market Research — Analysing industry, competitors, and audience.",
          "2. Strategy Design — Building a tailored marketing plan.",
          "3. Implementation — Executing campaigns across channels.",
          "4. Monitoring & Optimisation — Tracking performance, refining approach.",
          "5. Reporting & Support — Ongoing insight and guidance."
        ]
      }
    ]
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    headline: "Social Media Marketing in Coimbatore: Build Your Brand. Grow Your Audience.",
    fullDescription: "Social media is where your customers spend their time and DhiGrowth makes sure your brand shows up powerfully. We manage your presence across Instagram, Facebook, LinkedIn, and YouTube with a strategic mix of content creation, community management, and audience growth tactics. From eye-catching creatives and engaging captions to story campaigns and influencer collaborations, our social media marketing team in Coimbatore builds brands that people follow, trust, and buy from.",
    shortCopy: "Build your brand and community across Instagram, Facebook & LinkedIn.",
    category: "marketing",
    iconName: "Share2",
    badge: "Brand Voice",
    heroTitle: "Social Media Marketing Company in Coimbatore",
    heroSub: "Build your brand and community across Instagram, Facebook, and LinkedIn.",
    bottomCtaHeading: "Ready to build a brand people follow?",
    bottomCtaSub: "Partner with a trusted social media team in Coimbatore that builds real engagement.",
    sections: [
      {
        heading: "Overview",
        content: "Social media is where your customers spend their time, and your brand needs to show up powerfully there. Based in Coimbatore, we manage presence across platforms with a strategic mix of content creation, community management, and audience growth tactics."
      },
      {
        heading: "What's Included",
        items: [
          { title: "Brand Awareness Campaigns", desc: "Getting your brand in front of the right people." },
          { title: "Lead Generation Ads", desc: "Targeted campaigns that convert followers to customers." },
          { title: "Content Creation", desc: "Posts, videos, and campaigns people actually engage with." },
          { title: "Analytics & Reporting", desc: "Clear visibility into what's working." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Platform Expertise — Deep experience across Instagram, Facebook, LinkedIn, YouTube.",
          "Custom Content Strategy — Built around your brand voice and audience.",
          "Creative + Analytics — Strong creative backed by real performance data.",
          "Collaborative Process — Transparent planning and execution."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Market Research — Analysing industry, competitors, and audience.",
          "2. Strategy Design — Crafting a tailored social media plan.",
          "3. Content Creation — Developing engaging posts, videos, and campaigns.",
          "4. Implementation — Executing across platforms.",
          "5. Monitoring & Optimisation — Tracking performance, refining approach."
        ]
      }
    ]
  },
  {
    id: "meta-google-ads",
    name: "Meta Ads & Google Ads",
    headline: "Google Ads Company in Coimbatore: Targeted Ads That Deliver Real ROI",
    fullDescription: "Stop wasting money on ads that do not convert. DhiGrowth's paid advertising specialists in Coimbatore design and manage high-performing Meta Ads (Facebook & Instagram) and Google Ads campaigns that target the right audience at the right time with the right message. We handle everything from campaign strategy, audience research, and creative design to A/B testing, budget optimisation, and detailed performance reporting. Our goal is simple: maximise your return on every rupee you invest in advertising.",
    shortCopy: "Targeted paid advertising to maximise ROAS across Google and Meta platforms.",
    category: "marketing",
    iconName: "Target",
    badge: "ROI Focused",
    heroTitle: "Meta & Google Ads Management in Coimbatore",
    heroSub: "Targeted paid advertising that maximises ROAS across Google and Meta.",
    bottomCtaHeading: "Ready to maximise your ad spend?",
    bottomCtaSub: "Partner with a trusted paid ads team in Coimbatore to get more from every rupee.",
    sections: [
      {
        heading: "Overview",
        content: "Stop wasting budget on ads that don't convert. Based in Coimbatore, we design and manage high-performing Meta and Google Ads campaigns that target the right audience with the right message at the right time — handling everything from strategy to creative to reporting."
      },
      {
        heading: "What's Included",
        items: [
          { title: "Search Campaigns", desc: "Capturing high-intent traffic on Google." },
          { title: "Display & Remarketing", desc: "Staying top-of-mind with potential customers." },
          { title: "Shopping Ads", desc: "Driving e-commerce sales directly from search." },
          { title: "Meta Ads", desc: "Facebook and Instagram campaigns built for conversion." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Certified Ads Specialists — Experience managing campaigns across industries.",
          "Custom Strategy — Built around your specific goals and budget.",
          "Rigorous Testing — A/B testing and bid optimisation for maximum ROI.",
          "Transparent Reporting — Clear performance data, always."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Campaign Audit — Analysing current performance and opportunities.",
          "2. Keyword Research — Targeting terms that attract qualified traffic.",
          "3. Ad Creation — Crafting compelling copy and visuals.",
          "4. Bid Management — Optimising budgets for maximum return.",
          "5. Monitoring & Reporting — Tracking progress and refining."
        ]
      }
    ]
  },
  {
    id: "ads-shooting",
    name: "Ads Shooting",
    headline: "Ads Shooting Company in Coimbatore: Visuals That Captivate",
    fullDescription: "Great advertising starts with great visuals. DhiGrowth offers professional ad film and commercial shooting services in Coimbatore for brands that want to make a powerful impact on screen. Our creative team handles everything from concept development and scriptwriting to location scouting, direction, and production delivering camera-ready ad content for television, YouTube, Instagram, and digital platforms. Whether it is a 15 second reel ad or a full brand film, we bring your vision to life with cinematic quality and a clear marketing objective.",
    shortCopy: "Professional ad film production: creative concepts to camera-ready content.",
    category: "creative",
    iconName: "Video",
    badge: "Cinema Quality",
    heroTitle: "Ad Film & Commercial Shooting Services in Coimbatore",
    heroSub: "Professional ad film production — creative concepts to camera-ready content.",
    bottomCtaHeading: "Ready to bring your vision to screen?",
    bottomCtaSub: "Partner with a trusted ad production team in Coimbatore for cinematic quality with a clear objective.",
    sections: [
      {
        heading: "Overview",
        content: "Great advertising starts with great visuals. Based in Coimbatore, we handle everything from concept development and scriptwriting to location scouting, direction, and production — delivering camera-ready ad content for television, YouTube, Instagram, and digital platforms."
      },
      {
        heading: "What's Included",
        items: [
          { title: "Television Commercials", desc: "Broadcast-ready ad films." },
          { title: "Digital & Social Ads", desc: "Content built for scroll-stopping platforms." },
          { title: "Corporate Promotional Videos", desc: "Polished brand storytelling." },
          { title: "Product Launch Campaigns", desc: "Visuals that make launches land." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Creative + Technical Expertise — Directors, cinematographers, and strategists working together.",
          "Tailored Concepts — Every shoot built around your brand and campaign goals.",
          "Modern Equipment — Cameras, lighting, and editing tools that deliver quality.",
          "Collaborative Process — Clear communication from concept to delivery."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Concept Development — Understanding your brand and campaign goals.",
          "2. Scriptwriting — Crafting narratives tailored to your audience.",
          "3. Pre-Production — Planning shoots, locations, and logistics.",
          "4. Production — Filming with professional equipment and skilled crews.",
          "5. Post-Production — Editing, sound design, and visual effects."
        ]
      }
    ]
  },
  {
    id: "video-editing",
    name: "Video Editing",
    headline: "Video Editing Company in Coimbatore: Content That Captivates",
    fullDescription: "Raw footage is just the beginning. DhiGrowth's video editing team in Coimbatore transforms your raw clips into polished, high-impact video content that captures attention and drives engagement. We edit reels, YouTube videos, brand films, ad creatives, product demos, testimonial videos, and social media content with professional colour grading, motion graphics, subtitles, and sound design. Fast turnaround. Consistent quality. Content your audience will actually watch and share.",
    shortCopy: "High-quality video editing for reels, ads, brand videos & social content.",
    category: "creative",
    iconName: "Film",
    badge: "Post Production",
    heroTitle: "Video Editing Services in Coimbatore",
    heroSub: "High-quality video editing for reels, ads, brand videos, and social content.",
    bottomCtaHeading: "Ready for content your audience will actually watch?",
    bottomCtaSub: "Partner with a trusted video editing team in Coimbatore for fast, consistent, high-quality work.",
    sections: [
      {
        heading: "Overview",
        content: "Raw footage is just the beginning. Based in Coimbatore, we transform raw clips into polished, high-impact video content — reels, YouTube videos, brand films, ad creatives, and testimonials — with professional colour grading, motion graphics, subtitles, and sound design."
      },
      {
        heading: "What's Included",
        items: [
          { title: "Corporate Promotional Videos", desc: "Polished storytelling for your brand." },
          { title: "Social Media Content", desc: "Edits built for how people actually watch." },
          { title: "Product Launch Campaigns", desc: "Visuals that build launch momentum." },
          { title: "Event Highlights & Documentaries", desc: "Long-form content, well told." }
        ]
      },
      {
        heading: "Why Businesses Trust Us",
        features: [
          "Skilled Editing Team — Editors, designers, and strategists working together.",
          "Custom Editing Style — Tailored to your brand and objectives.",
          "Modern Tools — Advanced software and creative techniques.",
          "Fast Turnaround — Consistent quality without long delays."
        ]
      },
      {
        heading: "Our Process",
        steps: [
          "1. Concept Development — Understanding your brand and campaign goals.",
          "2. Content Organisation — Structuring footage for clarity and impact.",
          "3. Editing & Effects — Transitions, colour correction, sound design.",
          "4. Review & Feedback — Collaborating with you to refine the output.",
          "5. Final Delivery — Polished videos ready for distribution."
        ]
      }
    ]
  }
];
