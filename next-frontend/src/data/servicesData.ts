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
    heroSub: "DhiGrowth builds custom, fast-loading, and SEO-friendly websites that help businesses in Coimbatore grow online, from stunning designs to powerful functionality.",
    bottomCtaHeading: "Ready to Build a Website That Grows Your Business?",
    bottomCtaSub: "Get started with Coimbatore's most trusted website development company. Let our experts build you a website that looks great, ranks on Google, and converts visitors into customers.",
    sections: [
      {
        heading: "Leading Website Development Company in Coimbatore",
        content: "DhiGrowth is a trusted website development company in Coimbatore with proven expertise in building custom websites for businesses across all industries. We blend creativity, technology, and strategy to deliver websites that not only look exceptional but perform powerfully in search engines and convert visitors into paying customers."
      },
      {
        heading: "Our Website Development Services in Coimbatore",
        items: [
          { title: "Business Website", desc: "A professional, brand-aligned website that builds trust and credibility with your audience from the very first visit." },
          { title: "E-Commerce Website", desc: "A fully functional online store with seamless payment integration, product management, and a smooth buying experience that drives sales." },
          { title: "Landing Page Design", desc: "High-converting, focused landing pages built specifically for campaigns, promotions, and lead generation." },
          { title: "Web Portal Development", desc: "Custom portals for customers, vendors, partners, or internal teams built for functionality, security, and ease of use." },
          { title: "CMS Website Development", desc: "Easy to manage websites built on WordPress and other leading CMS platforms, update your content anytime without technical knowledge." },
          { title: "Website Revamp & Redesign", desc: "Transform your outdated website into a modern, fast, and conversion-optimised digital experience that reflects your brand today." }
        ]
      },
      {
        heading: "Why Coimbatore Businesses Trust DhiGrowth for Website Development",
        features: [
          "100% Custom Design — Every website we build is designed from scratch, no generic templates, no copy-paste layouts. Your website will be as unique as your brand.",
          "SEO-Optimised from Day One — We build every website with on-page SEO best practices baked in so your site is ready to rank on Google from the moment it goes live.",
          "Mobile-First Approach — Over 80% of users browse on mobile. We design and develop for mobile first, ensuring a flawless experience on every screen size.",
          "Speed-Optimised Performance — We write clean, efficient code and follow performance best practices so your website loads fast because every second of delay costs you customers.",
          "Secure & Scalable Architecture — Every website we build is secured with industry-standard protocols and built on a scalable foundation that grows as your business grows.",
          "Transparent Process & Timely Delivery — No surprises. No delays. We follow a clear project timeline with regular updates so you always know exactly where your project stands.",
          "Dedicated Post-Launch Support — Our relationship does not end at launch. We provide ongoing maintenance, updates, and support to keep your website running at peak performance."
        ]
      },
      {
        heading: "How We Build Your Website",
        steps: [
          "1. Discovery & Planning — We start by understanding your business, target audience, competitors, and goals. This gives us a clear roadmap before a single line of code is written.",
          "2. Wireframe & Design — Our designers create detailed wireframes and visual mockups that reflect your brand identity, getting your approval before moving to development.",
          "3. Development — Our developers build your website with clean, optimised, and secure code, bringing the approved design to life with precision and attention to detail.",
          "4. Content Integration — We integrate all your content text, images, videos, and other media ensuring everything is properly structured and SEO-optimised.",
          "5. Testing & Quality Check — We rigorously test your website across all devices, screen sizes, and browsers to ensure it performs flawlessly before going live.",
          "6. Launch — Your website goes live with full SEO setup, speed optimisation, Google Analytics integration, and Search Console configuration.",
          "7. Support & Maintenance — Post-launch, we provide dedicated support and regular maintenance to keep your website secure, updated, and always performing at its best."
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
    heroTitle: "Mobile App Development Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Mobile App Development Company in Coimbatore, dedicated to building innovative, user-friendly, and scalable mobile applications for businesses across industries. Our team of experienced developers and designers combines technical expertise with creativity to deliver apps that drive growth and enhance digital presence.",
    bottomCtaHeading: "Transform Your Business with Mobile Apps",
    bottomCtaSub: "Mobile applications are no longer optional, they are essential for growth. Partner with DHI Growth, your trusted Mobile App Development Company in Coimbatore, to create apps that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding Mobile App Development",
        content: "Mobile applications are essential for businesses seeking to connect with customers, streamline operations, and expand their reach. As a trusted Mobile App Development Company in Coimbatore, we understand the local market and global trends, enabling us to deliver solutions that resonate with your audience."
      },
      {
        heading: "Our Mobile App Development Services in Coimbatore",
        items: [
          { title: "Native App Development", desc: "Native app development for iOS and Android optimized for speed, security, and platform-specific capabilities." },
          { title: "Cross-Platform Solutions", desc: "Cross-platform solutions using frameworks like Flutter and React Native with single codebase efficiency." },
          { title: "Enterprise Mobility Solutions", desc: "Enterprise mobility solutions to streamline internal workflows and automate operations." },
          { title: "E-Commerce & Customer Apps", desc: "E-commerce and customer engagement apps that drive retention and repeat transactions." },
          { title: "API & System Integration", desc: "Seamless integration with existing enterprise systems, CRM, ERP, and payment gateways." },
          { title: "Ongoing Support & Scalability", desc: "Scalable architecture and ongoing support to keep your app relevant and competitive in the digital era." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Mobile App Development?",
        features: [
          "Expertise in Mobile Solutions — With years of experience, we specialise in creating apps that meet diverse business needs.",
          "Customised Development — Every project is tailored to your goals, ensuring unique and effective solutions.",
          "Cutting-Edge Technology — We leverage the latest frameworks and tools to deliver high-performance mobile applications.",
          "Client-Centric Approach — Transparent communication and collaboration are at the heart of our process.",
          "Local Expertise & Global Standards — As a Coimbatore-based company, our solutions meet international quality benchmarks.",
          "Dedicated Support — Continuous assistance, monitoring, and updates to ensure your app's long-term success."
        ]
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis — Understanding your business objectives and user needs.",
          "2. UI/UX Design — Crafting intuitive and engaging interfaces.",
          "3. Development — Building robust apps using modern technologies.",
          "4. Testing — Ensuring functionality, security, and performance.",
          "5. Deployment & Support — Launching your app and providing ongoing maintenance."
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
    heroSub: "At DHI Growth, we are a trusted AI Development Company in Coimbatore, delivering innovative artificial intelligence solutions that empower businesses to thrive in the digital age. Our team of skilled engineers and data scientists specialise in building AI-driven applications tailored to diverse industries, ensuring measurable impact and sustainable growth.",
    bottomCtaHeading: "Transform Your Business with AI",
    bottomCtaSub: "Artificial intelligence is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted AI Development Company in Coimbatore, to create AI applications that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding AI Development",
        content: "Artificial intelligence is reshaping industries by automating processes, enhancing decision-making, and improving customer experiences. Our AI Development Company in Coimbatore helps businesses harness these technologies to stay competitive and future-ready."
      },
      {
        heading: "AI Development Services in Coimbatore",
        items: [
          { title: "Predictive Analytics", desc: "Predictive analytics and custom ML models for smarter decision-making, trend forecasting, and risk analysis." },
          { title: "Chatbots & Virtual Assistants", desc: "Intelligent conversational chatbots and virtual assistants for seamless 24/7 customer engagement." },
          { title: "Computer Vision Applications", desc: "Computer vision applications for automated quality inspection, manufacturing, and retail surveillance." },
          { title: "Natural Language Processing", desc: "NLP solutions for automated text extraction, sentiment analysis, speech recognition, and document processing." },
          { title: "Custom AI Application Development", desc: "End-to-end custom AI products tailored to your industry goals, from ideation to full deployment." },
          { title: "System Integration & Optimization", desc: "Seamless integration with existing enterprise systems, with continuous monitoring and scalability." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for AI Development?",
        features: [
          "Expertise in AI Solutions — Years of experience in developing AI applications across multiple domains.",
          "Customised Development — Solutions designed to meet your unique business challenges.",
          "Cutting-Edge Technology — Leveraging machine learning, natural language processing, and computer vision.",
          "Client-Centric Approach — Transparent communication, collaborative development, and measurable impact.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Continuous assistance and monitoring to ensure long-term success."
        ]
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis — Understanding your business needs and objectives.",
          "2. Data Preparation — Collecting and cleaning datasets for accurate modelling.",
          "3. Model Development — Building AI models using advanced algorithms.",
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
    heroSub: "At DHI Growth, we are a leading AI Automation Development Company in Coimbatore, specialising in building intelligent automation solutions that streamline operations, reduce costs, and enhance productivity. Our team of skilled engineers and data scientists combines technical expertise with innovation to deliver AI-driven automation tailored to your business needs.",
    bottomCtaHeading: "Transform Your Business with AI Automation",
    bottomCtaSub: "Automation is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted AI Automation Development Company in Coimbatore, to create intelligent automation solutions that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding AI Automation",
        content: "Artificial intelligence is revolutionising how businesses operate. By automating repetitive tasks and enhancing decision-making, AI enables organisations to focus on innovation and growth. Our AI Automation Development Company in Coimbatore helps businesses harness these technologies to remain competitive in a rapidly evolving digital landscape."
      },
      {
        heading: "AI Automation Development Services in Coimbatore",
        items: [
          { title: "Intelligent Process Automation", desc: "Intelligent process automation for finance, HR, invoice processing, and operational workflows." },
          { title: "AI-Powered Chatbots", desc: "Self-running conversational AI agents for 24/7 customer service and instant lead qualification." },
          { title: "Predictive Analytics Workflows", desc: "Predictive analytics pipelines for smarter inventory forecasting and business decisions." },
          { title: "Workflow Optimization", desc: "Automated task synchronization and process optimization using machine learning." },
          { title: "Enterprise System Integration", desc: "Connecting existing enterprise ERPs, CRMs, and databases into cohesive automated pipelines." },
          { title: "Continuous Monitoring & Scalability", desc: "Proactive monitoring and ongoing optimization to ensure automation pipelines run reliably." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for AI Automation?",
        features: [
          "Expertise in AI Automation — Years of experience in designing and deploying automation solutions across industries.",
          "Customised Development — Tailored strategies to meet unique organisational challenges.",
          "Cutting-Edge Technology — Leveraging machine learning, robotic process automation, and natural language processing.",
          "Client-Centric Approach — Transparent communication and collaborative development.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance to ensure long-term automation success."
        ]
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis — Understanding your business workflows and automation goals.",
          "2. Data Preparation — Collecting and structuring datasets for accurate modelling.",
          "3. Model Development — Building AI automation models using advanced algorithms.",
          "4. Testing & Validation — Ensuring reliability, accuracy, and scalability.",
          "5. Deployment & Support — Seamless integration with ongoing maintenance."
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
    heroSub: "At DHI Growth, we are a leading WhatsApp Marketing Company in Coimbatore, helping businesses connect with customers through one of the most widely used messaging platforms in the world. Our team specialises in creating targeted campaigns that drive engagement, build trust, and deliver measurable results. With expertise in digital communication and customer engagement, we ensure your brand reaches the right audience at the right time.",
    bottomCtaHeading: "Transform Your Business with WhatsApp Marketing",
    bottomCtaSub: "WhatsApp is no longer just a messaging app, it is a powerful business tool. Partner with DHI Growth, your trusted WhatsApp Marketing Company in Coimbatore, to create campaigns that elevate your brand and connect you with your audience.",
    sections: [
      {
        heading: "Understanding WhatsApp Marketing",
        content: "WhatsApp has become a powerful tool for businesses to engage customers directly. From personalized messages to automated notifications, it offers unmatched reach and convenience. Our WhatsApp Marketing Company in Coimbatore helps businesses harness this platform to build stronger relationships and increase conversions."
      },
      {
        heading: "WhatsApp Marketing Services in Coimbatore",
        items: [
          { title: "Promotional & Bulk Campaigns", desc: "Send rich media promotional broadcasts and product updates to targeted customer segments with high deliverability." },
          { title: "Customer Support Automation", desc: "Implement AI chatbots and self-service menus for instantaneous 24/7 customer inquiry resolution." },
          { title: "Transactional Notifications", desc: "Seamless automated order confirmations, booking updates, invoice delivery, and shipping alerts." },
          { title: "CRM & ERP Integration", desc: "Connect WhatsApp Business API directly into your sales pipelines, ERPs, and customer databases." },
          { title: "Interactive Engagement Campaigns", desc: "Create two-way interactive flows, quizzes, and lead capture funnels directly inside WhatsApp." },
          { title: "Analytics & Performance Tracking", desc: "Deep tracking of delivery rates, read rates, click-throughs, and customer conversion metrics." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for WhatsApp Marketing?",
        features: [
          "Expertise in WhatsApp Marketing — Years of experience in designing and executing campaigns for diverse industries.",
          "Customised Strategies — Tailored solutions to meet your business objectives and customer needs.",
          "Cutting-Edge Tools — Leveraging automation, analytics, and AI to optimise campaigns.",
          "Client-Centric Approach — Transparent communication and collaborative planning.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance, monitoring, and updates to ensure long-term success."
        ]
      },
      {
        heading: "Our Marketing Process",
        steps: [
          "1. Requirement Analysis — Understanding your business goals and customer base.",
          "2. Campaign Design — Crafting engaging content and interactive messaging flows.",
          "3. Automation Setup — Implementing chatbots and scheduled campaigns.",
          "4. Testing & Optimisation — Ensuring accuracy, compliance, and effectiveness.",
          "5. Reporting & Support — Providing insights and ongoing assistance."
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
    heroSub: "Streamline Operations, Eliminate Bottlenecks, and Scale Your Enterprise Faster.",
    bottomCtaHeading: "Ready to Automate Your Business Operations?",
    bottomCtaSub: "Eliminate repetitive tasks and save hundreds of hours every month. Partner with DHI Growth to build intelligent automation pipelines.",
    sections: [
      {
        heading: "Streamline Operations & Scale Faster",
        content: "Running a business involves hundreds of repetitive tasks that consume your team's time and energy. DhiGrowth's business automation services help you identify, digitise, and automate those processes from CRM workflows and invoice generation to HR management, sales pipelines, and customer onboarding. We integrate the right automation tools and custom-built systems to make your entire business run more efficiently. Less manual work. More growth."
      },
      {
        heading: "Core Business Automation Solutions",
        items: [
          { title: "CRM & Sales Pipeline Automation", desc: "Automatically assign leads, send follow-ups, and track deal stages across your sales team." },
          { title: "Billing & Invoice Automation", desc: "Generate and send automated invoices, payment reminders, and financial reconciliations." },
          { title: "HR & Employee Onboarding", desc: "Digitize document collection, attendance tracking, and internal team approvals." },
          { title: "Custom Enterprise Workflows", desc: "Build tailored automation connectors between your legacy tools and modern cloud apps." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Business Automation?",
        features: [
          "End-to-End Workflow Mapping — Deep audit of manual bottlenecks before building automations.",
          "Custom System Integrations — Connecting your legacy tools, databases, and modern cloud apps seamlessly.",
          "Enterprise Reliability — Secure, robust automation pipelines built for zero downtime.",
          "Dedicated Maintenance & Optimization — Proactive monitoring and updates as your operations scale."
        ]
      },
      {
        heading: "Our Automation Build Process",
        steps: [
          "1. Process Discovery & Audit — Identify manual bottlenecks and workflow friction.",
          "2. Architecture & Blueprint — Design customized logic and data integration flows.",
          "3. Development & Scripting — Build secure automation connectors and triggers.",
          "4. Quality & Stress Testing — Validate end-to-end data accuracy under peak loads.",
          "5. Deployment & Staff Onboarding — Launch pipelines and train your team for maximum efficiency."
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
    heroTitle: "Business Development in Coimbatore",
    heroSub: "At DHI Growth, we specialise in Business Development in Coimbatore, helping organisations expand their reach, strengthen customer relationships, and achieve sustainable growth. Our team of experts combines strategic insight with practical solutions to deliver measurable results. Whether you are a start-up, SME, or established enterprise, we provide tailored strategies that align with your goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with DHI Growth",
    bottomCtaSub: "Business development is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted provider of Business Development in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding Business Development",
        content: "Business development involves identifying opportunities, building partnerships, and creating strategies that drive growth. Our Business Development in Coimbatore services help organisations enhance market presence, improve customer engagement, and increase revenue. From lead generation to strategic partnerships, we cover every aspect of growth."
      },
      {
        heading: "Business Development Services in Coimbatore",
        items: [
          { title: "Market Research & Opportunity Analysis", desc: "Deep market intelligence, competitor benchmarking, and identification of untapped revenue streams." },
          { title: "Lead Generation & Customer Acquisition", desc: "Scalable outreach systems to consistently generate qualified B2B and B2C prospect pipelines." },
          { title: "Strategic Partnerships & Alliances", desc: "Forging synergistic commercial partnerships that accelerate your brand's reach and distribution." },
          { title: "Sales Enablement & Optimization", desc: "Optimizing pitch decks, deal closing frameworks, and CRM pipelines for maximum conversion rates." },
          { title: "Expansion & Growth Roadmaps", desc: "Actionable strategic milestones to enter new geographical territories or industry verticals." },
          { title: "Ongoing Growth Advisory", desc: "Continuous executive guidance, KPI tracking, and operational refinement for sustainable scaling." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Business Development?",
        features: [
          "Expertise in Business Development — Years of experience across diverse industries.",
          "Customised Strategies — Solutions designed to meet your unique objectives.",
          "Cutting-Edge Tools — Leveraging digital platforms, automation, and analytics.",
          "Client-Centric Approach — Transparent communication and collaborative execution.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis — Understanding your business goals and challenges.",
          "2. Strategy Design — Crafting tailored business development plans.",
          "3. Implementation — Executing strategies across sales, marketing, and partnerships.",
          "4. Monitoring & Optimisation — Tracking performance and refining approaches.",
          "5. Support & Growth — Providing ongoing guidance and expansion strategies."
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
    heroSub: "At DHI Growth, we are a leading SEO Company in Coimbatore, dedicated to helping businesses improve their online visibility, attract qualified leads, and achieve sustainable growth. Our team of SEO specialists combines technical expertise with creative strategies to deliver measurable results. Whether you are a start-up, SME, or established enterprise, we provide tailored solutions that align with your business goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with SEO",
    bottomCtaSub: "SEO is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted SEO Company in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding SEO",
        content: "Search Engine Optimisation (SEO) is the process of improving your website's visibility on search engines. Our SEO Company in Coimbatore helps businesses enhance their digital presence, attract organic traffic, and increase conversions. From keyword optimization to link building, we cover every aspect of SEO."
      },
      {
        heading: "SEO Services in Coimbatore",
        items: [
          { title: "Local SEO in Coimbatore", desc: "Target customers in Coimbatore with hyper-local Google Maps rankings, local citations, and geo-targeted optimization." },
          { title: "E-Commerce SEO", desc: "Boost online store sales with optimized product catalogs, structured schema markup, and high-converting category pages." },
          { title: "Technical SEO", desc: "Improve site performance, crawlability, indexing efficiency, Core Web Vitals, and mobile responsiveness." },
          { title: "Content & On-Page Optimization", desc: "Enhance keyword relevance, meta tags, heading structures, and create engaging content that matches search intent." },
          { title: "Link Building & Authority Development", desc: "Build sustainable domain authority with high-quality, contextual backlinks and authoritative outreach." },
          { title: "Analytics & Performance Tracking", desc: "Detailed tracking of keyword rankings, organic impressions, user traffic, and conversion ROI." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for SEO?",
        features: [
          "Expertise in SEO — Years of experience in optimising websites across diverse industries.",
          "Customised Strategies — Solutions designed to meet your unique objectives and commercial keywords.",
          "Cutting-Edge Tools — Leveraging analytics, keyword research, and advanced technical SEO audits.",
          "Client-Centric Approach — Transparent communication, ethical white-hat practices, and collaborative execution.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance and strategy refinement to ensure sustainable growth."
        ]
      },
      {
        heading: "Our SEO Process",
        steps: [
          "1. Website Audit — Analysing your site’s performance and identifying opportunities.",
          "2. Keyword Research — Targeting relevant terms to attract qualified traffic.",
          "3. On-Page Optimisation — Enhancing content, meta tags, and site structure.",
          "4. Off-Page SEO — Building authority through backlinks and outreach.",
          "5. Monitoring & Reporting — Tracking progress and refining strategies."
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
    heroSub: "At DHI Growth, we are a leading Digital Marketing Company in Coimbatore, dedicated to helping businesses build a strong online presence, attract qualified leads, and achieve sustainable growth. Our team of digital marketing specialists combines creativity with technical expertise to deliver strategies that drive measurable results. Whether you are a start-up, SME, or established enterprise, we provide tailored solutions that align with your business goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with Digital Marketing",
    bottomCtaSub: "Digital marketing is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted Digital Marketing Company in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding Digital Marketing",
        content: "Digital marketing is the backbone of modern business growth. It involves promoting products and services through online channels to reach a wider audience. Our Digital Marketing Company in Coimbatore helps businesses enhance visibility, engage customers, and increase conversions through data-driven strategies."
      },
      {
        heading: "Digital Marketing Services in Coimbatore",
        items: [
          { title: "Search Engine Optimisation (SEO)", desc: "SEO and high-value content optimization to improve search rankings and build long-term organic authority." },
          { title: "Pay-Per-Click (PPC) Advertising", desc: "Targeted PPC and display advertising campaigns across Google and social platforms for fast, high-intent reach." },
          { title: "Social Media Marketing", desc: "Engaging social media campaigns across platforms to nurture communities and drive brand loyalty." },
          { title: "Content Marketing", desc: "Strategic content creation that builds authority, educates customers, and drives inbound conversions." },
          { title: "Analytics & Performance Tracking", desc: "Transparent tracking and attribution dashboards to monitor CAC, conversion rates, and total ROI." },
          { title: "Conversion Rate Optimization", desc: "Data-driven experiments and landing page enhancements that turn clicks into paying customers." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Digital Marketing?",
        features: [
          "Expertise in Digital Marketing — Years of experience across diverse industries.",
          "Customised Strategies — Solutions designed to meet your unique objectives.",
          "Cutting-Edge Tools — Leveraging SEO, PPC, social media, and content marketing.",
          "Client-Centric Approach — Transparent communication and collaborative execution.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Our Digital Marketing Process",
        steps: [
          "1. Market Research — Analysing your industry, competitors, and audience.",
          "2. Strategy Design — Crafting tailored digital marketing plans.",
          "3. Implementation — Executing campaigns across multiple channels.",
          "4. Monitoring & Optimisation — Tracking performance and refining approaches.",
          "5. Reporting & Support — Providing insights and ongoing guidance."
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
    heroSub: "At DHI Growth, we are a leading Social Media Marketing Company in Coimbatore, helping businesses build strong digital identities and connect with audiences across platforms. Our team of social media specialists combines creativity, analytics, and strategy to deliver campaigns that drive engagement, brand awareness, and measurable growth. Whether you are a start-up, SME, or established enterprise, we provide tailored solutions that align with your goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with Social Media Marketing",
    bottomCtaSub: "Social media is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted Social Media Marketing Company in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding Social Media Marketing",
        content: "Social media is one of the most powerful tools for modern businesses. It enables brands to engage directly with customers, build trust, and expand reach. Our Social Media Marketing Company in Coimbatore helps businesses harness platforms like Facebook, Instagram, LinkedIn, and Twitter to strengthen their digital presence and achieve long-term success."
      },
      {
        heading: "Social Media Marketing Services in Coimbatore",
        items: [
          { title: "Brand Awareness Campaigns", desc: "Build a strong, recognizable digital identity with engaging content and storytelling across platforms." },
          { title: "Lead Generation via Targeted Ads", desc: "Run laser-focused social ad campaigns designed to capture qualified leads and drive conversions." },
          { title: "Customer Engagement & Community", desc: "Foster loyal customer communities through interactive stories, polls, and responsive messaging." },
          { title: "Content Creation & Scheduling", desc: "Develop high-impact posts, reels, carousel designs, and cohesive editorial calendars." },
          { title: "Influencer Collaborations", desc: "Partner with relevant regional and industry influencers to expand your brand's credibility and reach." },
          { title: "Analytics & Performance Optimization", desc: "Continuous performance tracking and audience insights to optimize engagement and ROI." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Social Media Marketing?",
        features: [
          "Expertise in Social Media Marketing — Years of experience across diverse industries.",
          "Customised Strategies — Solutions designed to meet your unique objectives.",
          "Cutting-Edge Tools — Leveraging analytics, automation, and creative content.",
          "Client-Centric Approach — Transparent communication and collaborative execution.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Our Marketing Process",
        steps: [
          "1. Market Research — Analysing your industry, competitors, and audience.",
          "2. Strategy Design — Crafting tailored social media marketing plans.",
          "3. Content Creation — Developing engaging posts, videos, and campaigns.",
          "4. Implementation — Executing campaigns across multiple platforms.",
          "5. Monitoring & Optimisation — Tracking performance and refining approaches."
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
    heroTitle: "Google Ads Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Google Ads Company in Coimbatore, helping businesses maximise their online visibility and drive targeted traffic through effective advertising campaigns. Our team of certified Google Ads specialists combines technical expertise with creative strategies to deliver measurable results. Whether you are a start-up, SME, or established enterprise, we provide tailored solutions that align with your business goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with Google Ads",
    bottomCtaSub: "Google Ads is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted Google Ads Company in Coimbatore, to create campaigns that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Understanding Google Ads",
        content: "Google Ads is one of the most powerful platforms for online advertising. It enables businesses to reach potential customers at the exact moment they are searching for products or services. Our Google Ads Company in Coimbatore helps businesses harness this platform to increase visibility, generate leads, and boost conversions."
      },
      {
        heading: "Google Ads Services in Coimbatore",
        items: [
          { title: "Search Campaigns", desc: "Capture high-intent traffic the exact moment customers search for your products or services on Google." },
          { title: "Display & YouTube Campaigns", desc: "Build widespread brand awareness and visual recall across millions of websites and video placements." },
          { title: "Shopping Ads", desc: "Direct product listing ads with pricing and images designed to boost e-commerce sales with low CPA." },
          { title: "Remarketing Campaigns", desc: "Re-engage past website visitors and cart abandoners with targeted messages to drive conversions." },
          { title: "Conversion Tracking & Analytics", desc: "Full-funnel attribution setup with Google Analytics 4, Google Tag Manager, and server-side tracking." },
          { title: "A/B Testing & Bid Management", desc: "Continuous copy and creative testing paired with Smart Bidding optimization for maximum ROAS." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Google Ads?",
        features: [
          "Expertise in Google Ads — Years of experience in managing campaigns across industries.",
          "Customised Strategies — Solutions designed to meet your unique objectives.",
          "Cutting-Edge Tools — Leveraging analytics, keyword research, and bid optimisation.",
          "Client-Centric Approach — Transparent communication and collaborative execution.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Our Google Ads Process",
        steps: [
          "1. Campaign Audit — Analysing your current performance and identifying opportunities.",
          "2. Keyword Research — Targeting relevant terms to attract qualified traffic.",
          "3. Ad Creation — Crafting compelling ad copy and visuals.",
          "4. Bid Management — Optimising budgets for maximum ROI.",
          "5. Monitoring & Reporting — Tracking progress and refining strategies."
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
    heroTitle: "Ads Shooting Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Ads Shooting Company in Coimbatore, specialising in creating high-quality advertisements that captivate audiences and strengthen brand identity. Our team of creative directors, cinematographers, and marketing strategists work together to deliver ads that are visually compelling, strategically aligned, and results-driven. Whether you are a start-up, SME, or established enterprise, we provide tailored ad shooting solutions that elevate your brand presence.",
    bottomCtaHeading: "Transform Your Business with Ads Shooting",
    bottomCtaSub: "Advertising is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted Ads Shooting Company in Coimbatore, to create campaigns that elevate your brand and connect you with your audience.",
    sections: [
      {
        heading: "Understanding Ads Shooting",
        content: "Ads shooting is more than just filming. It is about storytelling, creativity, and connecting with audiences. Our Ads Shooting Company in Coimbatore helps businesses craft advertisements that resonate with customers, build trust, and drive conversions. From concept development to final editing, we ensure every detail is handled with precision."
      },
      {
        heading: "Ads Shooting Services in Coimbatore",
        items: [
          { title: "Television Commercials", desc: "Broadcast-quality cinematic commercials for regional and national television campaigns." },
          { title: "Digital & Social Media Ads", desc: "High-hook, fast-paced vertical and horizontal video ad creatives optimized for Instagram and YouTube." },
          { title: "Corporate Promotional Videos", desc: "Professional brand films and corporate documentaries that showcase your facility and team culture." },
          { title: "Product Launch Campaigns", desc: "Dynamic product showcase films highlighting key features, craftsmanship, and benefits." },
          { title: "Creative Direction & Scriptwriting", desc: "Strategic storyboarding, compelling dialogue, and end-to-end directorial vision." },
          { title: "Professional Cinematography & Lighting", desc: "Modern 4K/6K cinema camera packages, pro lighting, and experienced production crews." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Ads Shooting?",
        features: [
          "Expertise in Ad Production — Years of experience in producing ads across industries.",
          "Customised Strategies — Solutions designed to meet your unique objectives.",
          "Cutting-Edge Equipment — Leveraging modern cameras, lighting, and editing tools.",
          "Client-Centric Approach — Transparent communication and collaborative execution.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Our Ads Shooting Process",
        steps: [
          "1. Concept Development — Understanding your brand and campaign goals.",
          "2. Scriptwriting — Crafting engaging narratives tailored to your audience.",
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
    heroTitle: "Video Editing Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Video Editing Company in Coimbatore, specialising in creating professional, engaging, and visually compelling videos that help businesses communicate effectively. Our team of editors, designers, and creative strategists work together to deliver content that resonates with audiences and strengthens brand identity. Whether you are a start-up, SME, or established enterprise, we provide tailored video editing solutions that elevate your digital presence.",
    bottomCtaHeading: "Transform Your Business with Video Editing",
    bottomCtaSub: "Video content is no longer optional, it is essential for growth. Partner with DHI Growth, your trusted Video Editing Company in Coimbatore, to create videos that elevate your brand and connect you with your audience.",
    sections: [
      {
        heading: "Understanding Video Editing",
        content: "Video editing is more than just cutting and merging clips, it is about storytelling, creativity, and connecting with audiences. Our Video Editing Company in Coimbatore helps businesses craft videos that engage customers, build trust, and drive conversions. From corporate films to social media content, we ensure every project is handled with precision."
      },
      {
        heading: "Video Editing Services in Coimbatore",
        items: [
          { title: "Corporate Promotional Videos", desc: "Polished brand films and corporate documentaries that showcase your facility and team culture." },
          { title: "Social Media Content Editing", desc: "Fast-paced, hook-driven reels, shorts, and TikTok edits optimized for maximum retention and reach." },
          { title: "Product Launch Campaigns", desc: "Dynamic product showcase edits highlighting key features, craftsmanship, and benefits." },
          { title: "Event Highlights & Documentaries", desc: "Story-led event recaps, milestone documentaries, and conference highlights." },
          { title: "Colour Grading & Correction", desc: "Cinematic color treatments and palette matching that elevate visual aesthetics and brand feel." },
          { title: "Sound Editing & Motion Graphics", desc: "Crystal-clear audio, sound design, background scores, motion graphics, and visual effects." }
        ]
      },
      {
        heading: "Why Choose DHI Growth for Video Editing?",
        features: [
          "Expertise in Video Editing — Years of experience across diverse industries.",
          "Customised Solutions — Editing styles tailored to your brand and objectives.",
          "Cutting-Edge Tools — Leveraging advanced editing software and creative techniques.",
          "Client-Centric Approach — Transparent communication and collaborative execution.",
          "Local Expertise & Global Standards — Deep understanding of Coimbatore's business ecosystem with international benchmarks.",
          "Dedicated Support — Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Our Video Editing Process",
        steps: [
          "1. Concept Development — Understanding your brand and campaign goals.",
          "2. Content Organisation — Structuring footage for clarity and impact.",
          "3. Editing & Effects — Applying transitions, colour correction, and sound design.",
          "4. Review & Feedback — Collaborating with clients to refine output.",
          "5. Final Delivery — Providing polished videos ready for distribution."
        ]
      }
    ]
  }
];
