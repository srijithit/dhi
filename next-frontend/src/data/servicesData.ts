export interface ServiceSectionItem {
  title?: string;
  desc: string;
}

export interface ServiceSection {
  heading: string;
  subheading?: string;
  intro?: string;
  content?: string;
  paragraphs?: string[];
  items?: ServiceSectionItem[];
  features?: string[];
  steps?: string[];
  outro?: string;
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
  hidden?: boolean;
  heroTitle: string;
  heroSub: string;
  industryHeading?: string;
  industrySub?: string;
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
    fullDescription: "Your website is your first impression. At DhiGrowth, we design and develop custom, fast-loading, mobile-responsive websites that not only look great but are built to convert visitors into customers. From business websites and landing pages to e-commerce platforms and web portals, every website we build is SEO optimised, secure, and scalable. Whether you are a startup looking for your first website or an established business ready for a revamp we deliver websites that work as hard as you do.",
    shortCopy: "Custom, responsive, SEO-ready websites built for speed and conversions.",
    category: "tech",
    iconName: "Globe",
    badge: "High Conversion",
    heroTitle: "Website Development Company in Coimbatore",
    heroSub: "DhiGrowth builds custom, fast-loading, and SEO-friendly websites that help businesses in Coimbatore grow online from stunning designs to powerful functionality.",
    industryHeading: "Website Development for Every Industry in Coimbatore",
    industrySub: "We have built websites for businesses across a wide range of industries in Coimbatore and India bringing deep domain understanding to every project we take on.",
    bottomCtaHeading: "Ready to Build a Website That Grows Your Business?",
    bottomCtaSub: "Get started with Coimbatore's most trusted website development company. Let our experts build you a website that looks great, ranks on Google, and converts visitors into customers.",
    sections: [
      {
        heading: "Why Coimbatore Businesses Trust DhiGrowth for Website Development",
        features: [
          "100% Custom Design — Every website we build is designed from scratch — no generic templates, no copy-paste layouts. Your website will be as unique as your brand.",
          "SEO-Optimised from Day One — We build every website with on-page SEO best practices baked in so your site is ready to rank on Google from the moment it goes live.",
          "Mobile-First Approach — Over 80% of users browse on mobile. We design and develop for mobile first, ensuring a flawless experience on every screen size.",
          "Speed-Optimised Performance — We write clean, efficient code and follow performance best practices so your website loads fast because every second of delay costs you customers.",
          "Secure & Scalable Architecture — Every website we build is secured with industry-standard protocols and built on a scalable foundation that grows as your business grows.",
          "Transparent Process & Timely Delivery — No surprises. No delays. We follow a clear project timeline with regular updates so you always know exactly where your project stands.",
          "Dedicated Post-Launch Support — Our relationship does not end at launch. We provide ongoing maintenance, updates, and support to keep your website running at peak performance."
        ]
      },
      {
        heading: "Leading Website Development Company in Coimbatore",
        paragraphs: [
          "DhiGrowth is a trusted website development company in Coimbatore with proven expertise in building custom websites for businesses across all industries. We blend creativity, technology, and strategy to deliver websites that not only look exceptional but perform powerfully in search engines and convert visitors into paying customers.",
          "From your first business website to a complete digital revamp we are the website development company in Coimbatore that businesses rely on for quality, speed, and results."
        ],
        content: "DhiGrowth is a trusted website development company in Coimbatore with proven expertise in building custom websites for businesses across all industries. We blend creativity, technology, and strategy to deliver websites that not only look exceptional but perform powerfully in search engines and convert visitors into paying customers.\n\nFrom your first business website to a complete digital revamp we are the website development company in Coimbatore that businesses rely on for quality, speed, and results."
      },
      {
        heading: "Our Website Development Company in Coimbatore",
        items: [
          { title: "Business Website", desc: "A professional, brand-aligned website that builds trust and credibility with your audience from the very first visit." },
          { title: "E-Commerce Website", desc: "A fully functional online store with seamless payment integration, product management, and a smooth buying experience that drives sales." },
          { title: "Landing Page Design", desc: "High-converting, focused landing pages built specifically for campaigns, promotions, and lead generation." },
          { title: "Web Portal Development", desc: "Custom portals for customers, vendors, partners, or internal teams built for functionality, security, and ease of use." },
          { title: "CMS Website Development", desc: "Easy to manage websites built on WordPress and other leading CMS platforms update your content anytime without technical knowledge." },
          { title: "Website Revamp & Redesign", desc: "Transform your outdated website into a modern, fast, and conversion-optimised digital experience that reflects your brand today." }
        ]
      },
      {
        heading: "How We Build Your Website",
        steps: [
          "1. Discovery & Planning — We start by understanding your business, target audience, competitors, and goals. This gives us a clear roadmap before a single line of code is written.",
          "2. Wireframe & Design — Our designers create detailed wireframes and visual mockups that reflect your brand identity getting your approval before moving to development.",
          "3. Development — Our developers build your website with clean, optimised, and secure code bringing the approved design to life with precision and attention to detail.",
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
    fullDescription: "In a mobile-first world, your business needs an app that performs flawlessly. DhiGrowth builds custom iOS, Android, and cross-platform mobile applications tailored to your business goals. From customer-facing apps and on-demand platforms to internal business tools and SaaS products we handle the full development lifecycle from ideation to deployment. Our apps are built for speed, security, and scalability so your users always get the best experience.",
    shortCopy: "iOS, Android & cross-platform apps designed for seamless user experiences.",
    category: "tech",
    iconName: "Smartphone",
    badge: "High Growth",
    heroTitle: "Mobile App Development Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Mobile App Development Company in Coimbatore, dedicated to building innovative, user-friendly, and scalable mobile applications for businesses across industries. Our team of experienced developers and designers combines technical expertise with creativity to deliver apps that drive growth and enhance digital presence.",
    bottomCtaHeading: "Transform Your Business with Mobile Apps",
    bottomCtaSub: "Mobile applications are no longer optional they are essential for growth. Partner with DHI Growth, your trusted Mobile App Development Company in Coimbatore, to create apps that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in Mobile Solutions: With years of experience, we specialise in creating apps that meet diverse business needs.",
          "Customised Development: Every project is tailored to your goals, ensuring unique and effective solutions.",
          "Cutting-Edge Technology: We leverage the latest frameworks and tools to deliver high-performance mobile applications.",
          "Client-Centric Approach: Transparent communication and collaboration are at the heart of our process."
        ]
      },
      {
        heading: "Understanding Mobile App Development",
        content: "Mobile applications are essential for businesses seeking to connect with customers, streamline operations, and expand their reach. As a trusted Mobile App Development Company in Coimbatore, we understand the local market and global trends, enabling us to deliver solutions that resonate with your audience."
      },
      {
        heading: "Our Development Process",
        intro: "Our structured approach ensures quality and efficiency:",
        steps: [
          "1. Requirement Analysis – Understanding your business objectives and user needs.",
          "2. UI/UX Design – Crafting intuitive and engaging interfaces.",
          "3. Development – Building robust apps using modern technologies.",
          "4. Testing – Ensuring functionality, security, and performance.",
          "5. Deployment & Support – Launching your app and providing ongoing maintenance."
        ],
        outro: "This process guarantees that our Mobile App Development Company in Coimbatore delivers reliable and impactful results."
      },
      {
        heading: "Mobile App Development in Coimbatore",
        intro: "We provide comprehensive Mobile App Development in Coimbatore, catering to startups, SMEs, and enterprises. Our services include:",
        items: [
          { title: "Native App Development", desc: "Native app development for iOS and Android." },
          { title: "Cross-Platform Solutions", desc: "Cross-platform solutions using frameworks like Flutter and React Native." },
          { title: "Enterprise Mobility Solutions", desc: "Enterprise mobility solutions to streamline workflows." },
          { title: "E-Commerce & Engagement Apps", desc: "E-commerce and customer engagement apps." }
        ],
        outro: "By offering tailored Mobile App Development in Coimbatore, we empower businesses to achieve digital transformation."
      },
      {
        heading: "Mobile App Development Services in Coimbatore",
        intro: "Our Mobile App Development Services in Coimbatore are designed to meet diverse requirements:",
        items: [
          { title: "Custom Mobile Applications", desc: "Custom mobile applications aligned with your brand." },
          { title: "System & API Integration", desc: "Integration with existing systems and APIs." },
          { title: "Scalable Solutions", desc: "Scalable solutions to support future growth." },
          { title: "Ongoing Support & Updates", desc: "Ongoing support and updates to keep your app relevant." }
        ],
        outro: "These services ensure that your business stays competitive in the digital era."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: As a Coimbatore-based company, we understand regional business dynamics.",
          "Global Standards: Our solutions meet international quality benchmarks.",
          "Innovation-Driven: Focus on creativity and innovation to deliver standout apps.",
          "Dedicated Support: Continuous assistance to ensure your app’s success."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, we follow the highest standards of development, guided by principles of expertise, authoritativeness, and trustworthiness. Our reputation as a reliable Mobile App Development Company in Coimbatore is built on delivering consistent results and fostering long-term client relationships."
      }
    ]
  },
  {
    id: "ai-development",
    name: "AI Development",
    headline: "AI Development Services in Coimbatore Smart Solutions for Modern Businesses",
    fullDescription: "Artificial intelligence is no longer the future, it is the present. DhiGrowth builds custom AI solutions that give your business a competitive edge. We develop intelligent chatbots, recommendation engines, predictive analytics tools, natural language processing systems, and machine learning models tailored to your industry. Whether you want to automate customer interactions, analyse large datasets, or build a smart product from scratch our AI development team in Coimbatore delivers solutions that are practical, powerful, and built to scale.",
    shortCopy: "Smart AI products — chatbots, recommendation engines & custom ML models.",
    category: "ai",
    iconName: "Cpu",
    badge: "Future Tech",
    heroTitle: "AI Development Company in Coimbatore",
    heroSub: "At DHI Growth, we are a trusted AI Development Company in Coimbatore, delivering innovative artificial intelligence solutions that empower businesses to thrive in the digital age. Our team of skilled engineers and data scientists specialise in building AI-driven applications tailored to diverse industries, ensuring measurable impact and sustainable growth.",
    bottomCtaHeading: "Transform Your Business with AI",
    bottomCtaSub: "Artificial intelligence is no longer optional—it is essential for growth. Partner with DHI Growth, your trusted AI Development Company in Coimbatore, to create AI applications that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in AI Solutions: Years of experience in developing AI applications across multiple domains.",
          "Customised Development: Solutions designed to meet your unique business challenges.",
          "Cutting-Edge Technology: Leveraging machine learning, natural language processing, and computer vision.",
          "Client-Centric Approach: Transparent communication and collaborative development."
        ],
        outro: "As a leading AI Development Company in Coimbatore, we combine technical excellence with strategic insight to deliver transformative results."
      },
      {
        heading: "Understanding AI Development",
        content: "Artificial intelligence is reshaping industries by automating processes, enhancing decision-making, and improving customer experiences. Our AI Development Company in Coimbatore helps businesses harness these technologies to stay competitive and future-ready."
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis – Understanding your business needs and objectives.",
          "2. Data Preparation – Collecting and cleaning datasets for accurate modelling.",
          "3. Model Development – Building AI models using advanced algorithms.",
          "4. Testing & Validation – Ensuring reliability, accuracy, and scalability.",
          "5. Deployment & Support – Seamless integration and ongoing maintenance."
        ],
        outro: "This structured process ensures that our AI Development Company in Coimbatore delivers solutions that are both robust and impactful."
      },
      {
        heading: "AI Development in Coimbatore",
        intro: "We provide comprehensive AI Development in Coimbatore, catering to startups, SMEs, and enterprises. Our services include:",
        items: [
          { title: "Predictive Analytics", desc: "Predictive analytics for smarter decision-making." },
          { title: "Chatbots & Virtual Assistants", desc: "Chatbots and virtual assistants for customer engagement." },
          { title: "Computer Vision Applications", desc: "Computer vision applications for manufacturing and retail." },
          { title: "Natural Language Processing", desc: "Natural language processing for text and speech analysis." }
        ],
        outro: "By offering tailored AI Development in Coimbatore, we empower businesses to embrace digital transformation."
      },
      {
        heading: "AI Development Agency in Coimbatore",
        content: "As a full-service AI Development Agency in Coimbatore, we deliver end-to-end solutions, from ideation to deployment. Our agency model ensures that clients receive strategic guidance, technical expertise, and ongoing support throughout their AI journey."
      },
      {
        heading: "AI Development Services in Coimbatore",
        intro: "Our AI Development Services in Coimbatore include:",
        items: [
          { title: "Custom AI Applications", desc: "Custom AI application development." },
          { title: "System Integration", desc: "Integration with existing systems." },
          { title: "Scalable Solutions", desc: "Scalable solutions for future growth." },
          { title: "Continuous Optimisation", desc: "Continuous monitoring and optimisation." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of artificial intelligence."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Solutions aligned with international benchmarks.",
          "Innovation-Driven: Focus on creativity and cutting-edge technology.",
          "Dedicated Support: Ongoing assistance to ensure long-term success."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable AI Development Company in Coimbatore is built on delivering consistent results and fostering long-term client relationships."
      }
    ]
  },
  {
    id: "ai-automation",
    name: "AI Automation",
    headline: "AI Automation Services in Coimbatore Work Smarter, Not Harder",
    fullDescription: "Manual tasks slow your business down. DhiGrowth's AI automation solutions eliminate repetitive processes and replace them with intelligent, self-running systems that save time, reduce errors, and cut operational costs. From automating customer support and lead follow-ups to inventory management and reporting workflows we design AI-powered automation pipelines that integrate seamlessly with your existing tools and platforms. Let your team focus on what truly matters while AI handles the rest.",
    shortCopy: "Automate repetitive tasks and workflows using intelligent AI solutions.",
    category: "ai",
    iconName: "Zap",
    badge: "Efficiency",
    heroTitle: "AI Automation Development Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading AI Automation Development Company in Coimbatore, specialising in building intelligent automation solutions that streamline operations, reduce costs, and enhance productivity. Our team of skilled engineers and data scientists combines technical expertise with innovation to deliver AI‑driven automation tailored to your business needs.",
    bottomCtaHeading: "Transform Your Business with AI Automation",
    bottomCtaSub: "Automation is no longer optional—it is essential for growth. Partner with DHI Growth, your trusted AI Automation Development Company in Coimbatore, to create intelligent automation solutions that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in AI Automation: Years of experience in designing and deploying automation solutions across industries.",
          "Customised Development: Tailored strategies to meet unique organisational challenges.",
          "Cutting‑Edge Technology: Leveraging machine learning, robotic process automation, and natural language processing.",
          "Client‑Centric Approach: Transparent communication and collaborative development."
        ],
        outro: "As a trusted AI Automation Development Company in Coimbatore, we deliver solutions that are reliable, scalable, and future‑ready."
      },
      {
        heading: "Understanding AI Automation",
        content: "Artificial intelligence is revolutionising how businesses operate. By automating repetitive tasks and enhancing decision‑making, AI enables organisations to focus on innovation and growth. Our AI Automation Development Company in Coimbatore helps businesses harness these technologies to remain competitive in a rapidly evolving digital landscape."
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis – Understanding your business workflows and automation goals.",
          "2. Data Preparation – Collecting and structuring datasets for accurate modelling.",
          "3. Model Development – Building AI automation models using advanced algorithms.",
          "4. Testing & Validation – Ensuring reliability, accuracy, and scalability.",
          "5. Deployment & Support – Seamless integration with ongoing maintenance."
        ],
        outro: "This structured process ensures that our AI Automation Development Company in Coimbatore delivers solutions that drive measurable impact."
      },
      {
        heading: "AI Automation Development in Coimbatore",
        intro: "We provide comprehensive AI Automation Development in Coimbatore, catering to startups, SMEs, and enterprises. Our services include:",
        items: [
          { title: "Intelligent Process Automation", desc: "Intelligent process automation for finance, HR, and operations." },
          { title: "AI‑Powered Chatbots", desc: "AI‑powered chatbots for customer service." },
          { title: "Predictive Analytics", desc: "Predictive analytics for smarter decision‑making." },
          { title: "Workflow Optimization", desc: "Workflow optimization using machine learning." }
        ],
        outro: "By offering tailored AI Automation Development in Coimbatore, we empower businesses to achieve digital transformation."
      },
      {
        heading: "AI Automation Development Agency in Coimbatore",
        content: "As a full‑service AI Automation Development Agency in Coimbatore, we deliver end‑to‑end solutions, from ideation to deployment. Our agency model ensures that clients receive strategic guidance, technical expertise, and ongoing support throughout their automation journey."
      },
      {
        heading: "AI Automation Development Services in Coimbatore",
        intro: "Our AI Automation Development Services in Coimbatore include:",
        items: [
          { title: "Custom AI Applications", desc: "Custom AI automation applications." },
          { title: "Enterprise Integration", desc: "Integration with existing enterprise systems." },
          { title: "Scalable Solutions", desc: "Scalable solutions to support future growth." },
          { title: "Continuous Optimisation", desc: "Continuous monitoring and optimisation." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of AI automation."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Solutions aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure long‑term success."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable AI Automation Development Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    headline: "WhatsApp Marketing Services in Coimbatore Reach Customers Where They Are",
    fullDescription: "With over 500 million users in India, WhatsApp is the most direct channel to your customers. DhiGrowth's WhatsApp marketing services help businesses in Coimbatore run targeted broadcast campaigns, automate customer conversations, send promotional messages, and drive sales all through the WhatsApp Business API. We create personalised, high-engagement campaigns that cut through the noise and deliver your message directly into the hands of your audience. Higher open rates. Better conversions. Real results.",
    shortCopy: "High-engagement campaigns via WhatsApp Business API to drive sales.",
    category: "marketing",
    iconName: "MessageSquare",
    badge: "98% Open Rate",
    heroTitle: "WhatsApp Marketing Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading WhatsApp Marketing Company in Coimbatore, helping businesses connect with customers through one of the most widely used messaging platforms in the world. Our team specialises in creating targeted campaigns that drive engagement, build trust, and deliver measurable results. With expertise in digital communication and customer engagement, we ensure your brand reaches the right audience at the right time.",
    bottomCtaHeading: "Transform Your Business with WhatsApp Marketing",
    bottomCtaSub: "WhatsApp is no longer just a messaging app it is a powerful business tool. Partner with DHI Growth, your trusted WhatsApp Marketing Company in Coimbatore, to create campaigns that elevate your brand and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in WhatsApp Marketing: Years of experience in designing and executing campaigns for diverse industries.",
          "Customised Strategies: Tailored solutions to meet your business objectives and customer needs.",
          "Cutting‑Edge Tools: Leveraging automation, analytics, and AI to optimise campaigns.",
          "Client‑Centric Approach: Transparent communication and collaborative planning."
        ],
        outro: "As a trusted WhatsApp Marketing Company in Coimbatore, we combine creativity with technology to deliver impactful campaigns."
      },
      {
        heading: "Understanding WhatsApp Marketing",
        content: "WhatsApp has become a powerful tool for businesses to engage customers directly. From personalized messages to automated notifications, it offers unmatched reach and convenience. Our WhatsApp Marketing Company in Coimbatore helps businesses harness this platform to build stronger relationships and increase conversions."
      },
      {
        heading: "Our Marketing Process",
        steps: [
          "1. Requirement Analysis – Understanding your business goals and customer base.",
          "2. Campaign Design – Crafting engaging content and interactive messaging flows.",
          "3. Automation Setup – Implementing chatbots and scheduled campaigns.",
          "4. Testing & Optimisation – Ensuring accuracy, compliance, and effectiveness.",
          "5. Reporting & Support – Providing insights and ongoing assistance."
        ],
        outro: "This structured process ensures that our WhatsApp Marketing Company in Coimbatore delivers campaigns that are both effective and measurable."
      },
      {
        heading: "WhatsApp Marketing in Coimbatore",
        intro: "We provide comprehensive WhatsApp Marketing in Coimbatore, catering to startups, SMEs, and enterprises. Our services include:",
        items: [
          { title: "Promotional Campaigns", desc: "Promotional campaigns to boost sales." },
          { title: "Customer Support Automation", desc: "Customer support automation for faster responses." },
          { title: "Transactional Notifications", desc: "Transactional notifications for seamless communication." },
          { title: "Interactive Campaigns", desc: "Interactive campaigns to increase engagement." }
        ],
        outro: "By offering tailored WhatsApp Marketing in Coimbatore, we empower businesses to strengthen their digital presence."
      },
      {
        heading: "WhatsApp Marketing Agency in Coimbatore",
        content: "As a full‑service WhatsApp Marketing Agency in Coimbatore, we deliver end‑to‑end solutions, from strategy to execution. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their WhatsApp marketing journey."
      },
      {
        heading: "WhatsApp Marketing Services in Coimbatore",
        intro: "Our WhatsApp Marketing Services in Coimbatore include:",
        items: [
          { title: "Bulk Messaging Campaigns", desc: "Bulk messaging campaigns." },
          { title: "CRM & ERP Integration", desc: "Integration with CRM and ERP systems." },
          { title: "AI‑Driven Chatbots", desc: "AI‑driven chatbots for customer engagement." },
          { title: "Analytics & Reporting", desc: "Analytics and reporting for performance tracking." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of WhatsApp as a marketing channel."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Campaigns aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure long‑term success."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable WhatsApp Marketing Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "business-automation",
    name: "Business Automation",
    headline: "Business Automation Services in Coimbatore Streamline Operations & Scale Faster",
    fullDescription: "Running a business involves hundreds of repetitive tasks that consume your team's time and energy. DhiGrowth's business automation services help you identify, digitise, and automate those processes from CRM workflows and invoice generation to HR management, sales pipelines, and customer onboarding. We integrate the right automation tools and custom-built systems to make your entire business run more efficiently. Less manual work. More growth.",
    shortCopy: "Streamline operations, reduce costs & boost efficiency with smart automation.",
    category: "ai",
    iconName: "Sliders",
    badge: "Cost Savings",
    heroTitle: "Business Automation Agency in Coimbatore",
    heroSub: "As a full-service Business Automation Agency in Coimbatore, DHI Growth provides end-to-end automation solutions designed to simplify business operations, improve productivity, and reduce repetitive manual tasks. From strategy and process analysis to implementation and ongoing support, our team helps businesses adopt smart automation solutions that support sustainable growth.",
    bottomCtaHeading: "Transform Your Business with DHI Growth",
    bottomCtaSub: "Business automation is becoming essential for companies looking to improve efficiency and stay competitive. Partner with DHI Growth, your trusted provider of Business Automation Services in Coimbatore, and discover how automation and AI-powered solutions can reduce repetitive work, improve productivity, and create better opportunities for business growth.",
    sections: [
      {
        heading: "Business Automation Services in Coimbatore",
        intro: "Our Business Automation Services in Coimbatore include:",
        items: [
          { title: "Process Automation", desc: "Business process automation and workflow optimization." },
          { title: "AI Solutions", desc: "AI-powered business automation solutions." },
          { title: "CRM & Sales", desc: "CRM and sales process automation." },
          { title: "Lead & Communication", desc: "Lead management and customer communication automation." },
          { title: "Marketing & Email", desc: "Marketing and email automation." },
          { title: "Data Entry & Routine Tasks", desc: "Data entry and repetitive task automation." },
          { title: "Reporting & Analytics", desc: "Automated reporting and business analytics." },
          { title: "Tools Integration", desc: "Integration of business tools and software." }
        ],
        outro: "These solutions help businesses save time, minimize manual errors, improve operational efficiency, and allow teams to focus on more important business activities."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Strong understanding of the business environment and requirements of companies in Coimbatore.",
          "Smart Automation: We identify repetitive processes and implement suitable automation solutions.",
          "AI-Driven Approach: Leverage AI and modern technologies to improve productivity and business operations.",
          "Scalable Solutions: Automation systems can be designed to grow along with your business.",
          "Dedicated Support: Ongoing technical assistance and optimization to ensure your automation continues to deliver value."
        ]
      },
      {
        heading: "Commitment to Quality and Innovation",
        paragraphs: [
          "Our approach to Business Automation in Coimbatore focuses on creating practical, reliable, and scalable solutions. We analyze existing business processes, identify areas where automation can make a difference, and implement technology that improves efficiency without unnecessarily complicating your operations.",
          "Whether you are looking to automate sales, marketing, customer support, internal workflows, reporting, or repetitive administrative tasks, our team can help you build a more efficient and connected business environment."
        ]
      }
    ]
  },
  {
    id: "business-development",
    name: "Business Development",
    headline: "Business Development Services in Coimbatore Strategy, Growth & Execution",
    fullDescription: "Growth does not happen by accident. DhiGrowth's business development services help companies in Coimbatore identify new market opportunities, build strategic partnerships, develop revenue-generating plans, and execute with precision. We work closely with founders and business leaders to understand their goals and craft customized growth strategies covering market research, competitor analysis, sales funnel development, and expansion planning. Whether you are entering a new market or scaling an existing one, we are the partner you need.",
    shortCopy: "Strategic consulting and execution to expand your market presence.",
    category: "strategy",
    iconName: "TrendingUp",
    badge: "Strategic",
    heroTitle: "Business Development in Coimbatore",
    heroSub: "At DHI Growth, we specialise in Business Development in Coimbatore, helping organisations expand their reach, strengthen customer relationships, and achieve sustainable growth. Our team of experts combines strategic insight with practical solutions to deliver measurable results. Whether you are a start‑up, SME, or established enterprise, we provide tailored strategies that align with your goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with DHI Growth",
    bottomCtaSub: "Business development is no longer optional it is essential for growth. Partner with DHI Growth, your trusted provider of Business Development in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in Business Development: Years of experience across diverse industries.",
          "Customised Strategies: Solutions designed to meet your unique objectives.",
          "Cutting‑Edge Tools: Leveraging digital platforms, automation, and analytics.",
          "Client‑Centric Approach: Transparent communication and collaborative execution."
        ],
        outro: "As a trusted provider of Business Development in Coimbatore, we deliver strategies that are reliable, scalable, and future‑ready."
      },
      {
        heading: "Understanding Business Development",
        content: "Business development involves identifying opportunities, building partnerships, and creating strategies that drive growth. Our Business Development in Coimbatore services help organisations enhance market presence, improve customer engagement, and increase revenue. From lead generation to strategic partnerships, we cover every aspect of growth."
      },
      {
        heading: "Our Development Process",
        steps: [
          "1. Requirement Analysis – Understanding your business goals and challenges.",
          "2. Strategy Design – Crafting tailored business development plans.",
          "3. Implementation – Executing strategies across sales, marketing, and partnerships.",
          "4. Monitoring & Optimisation – Tracking performance and refining approaches.",
          "5. Support & Growth – Providing ongoing guidance and expansion strategies."
        ],
        outro: "This structured process ensures that our Business Development in Coimbatore solutions deliver measurable impact."
      },
      {
        heading: "Business Development Agency in Coimbatore",
        content: "As a full‑service Business Development Agency in Coimbatore, we provide end‑to‑end solutions, from strategy to execution. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their business development journey."
      },
      {
        heading: "Business Development Services in Coimbatore",
        intro: "Our Business Development Services in Coimbatore include:",
        items: [
          { title: "Market Research", desc: "Market research and opportunity analysis." },
          { title: "Lead Generation", desc: "Lead generation and customer acquisition." },
          { title: "Strategic Partnerships", desc: "Strategic partnerships and alliances." },
          { title: "Sales Enablement", desc: "Sales enablement and performance optimization." }
        ],
        outro: "These services are designed to help businesses unlock their full potential and achieve long‑term success."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Strategies aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "Our reputation as a reliable provider of Business Development in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "seo",
    name: "SEO",
    headline: "SEO Services in Coimbatore Rank Higher, Get Found, Grow Faster",
    fullDescription: "When your customers search for your services online, you need to be at the top. DhiGrowth offers comprehensive SEO services in Coimbatore covering technical SEO, on-page optimisation, content strategy, local SEO, and high-quality link building. We audit your website, identify ranking opportunities, and execute a proven strategy to improve your visibility on Google and drive consistent organic traffic. Our SEO approach is transparent, white-hat, and focused entirely on long-term results that compound over time.",
    shortCopy: "Rank higher on Google with technical SEO, content strategy & link building.",
    category: "marketing",
    iconName: "Search",
    badge: "Organic Reach",
    heroTitle: "SEO Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading SEO Company in Coimbatore, dedicated to helping businesses improve their online visibility, attract qualified leads, and achieve sustainable growth. Our team of SEO specialists combines technical expertise with creative strategies to deliver measurable results. Whether you are a start‑up, SME, or established enterprise, we provide tailored solutions that align with your business goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with SEO",
    bottomCtaSub: "SEO is no longer optional it is essential for growth. Partner with DHI Growth, your trusted SEO Company in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in SEO: Years of experience in optimising websites across industries.",
          "Customised Strategies: Solutions designed to meet your unique objectives.",
          "Cutting‑Edge Tools: Leveraging analytics, keyword research, and technical SEO.",
          "Client‑Centric Approach: Transparent communication and collaborative execution."
        ],
        outro: "As a trusted SEO Company in Coimbatore, we deliver strategies that are reliable, scalable, and future‑ready."
      },
      {
        heading: "Understanding SEO",
        content: "Search Engine Optimisation (SEO) is the process of improving your website’s visibility on search engines. Our SEO Company in Coimbatore helps businesses enhance their digital presence, attract organic traffic, and increase conversions. From keyword optimization to link building, we cover every aspect of SEO."
      },
      {
        heading: "Our SEO Process",
        steps: [
          "1. Website Audit – Analysing your site’s performance and identifying opportunities.",
          "2. Keyword Research – Targeting relevant terms to attract qualified traffic.",
          "3. On‑Page Optimisation – Enhancing content, meta tags, and site structure.",
          "4. Off‑Page SEO – Building authority through backlinks and outreach.",
          "5. Monitoring & Reporting – Tracking progress and refining strategies."
        ],
        outro: "This structured process ensures that our SEO Company in Coimbatore delivers measurable impact."
      },
      {
        heading: "SEO in Coimbatore",
        intro: "We provide comprehensive SEO in Coimbatore, catering to businesses of all sizes. Our services include:",
        items: [
          { title: "Local SEO", desc: "Local SEO to target customers in Coimbatore." },
          { title: "E‑commerce SEO", desc: "E‑commerce SEO to boost online sales." },
          { title: "Technical SEO", desc: "Technical SEO to improve site performance." },
          { title: "Content Optimization", desc: "Content optimization for better engagement." }
        ],
        outro: "By offering tailored SEO in Coimbatore, we empower businesses to strengthen their digital presence."
      },
      {
        heading: "SEO Agency in Coimbatore",
        content: "As a full‑service SEO Agency in Coimbatore, we provide end‑to‑end solutions, from strategy to execution. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their SEO journey."
      },
      {
        heading: "SEO Services in Coimbatore",
        intro: "Our SEO Services in Coimbatore include:",
        items: [
          { title: "On‑Page & Off‑Page", desc: "On‑page and off‑page optimization." },
          { title: "Local SEO", desc: "Local SEO for regional visibility." },
          { title: "Link Building", desc: "Link building and authority development." },
          { title: "Analytics & Reporting", desc: "Analytics and reporting for performance tracking." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of search engine optimization."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Strategies aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable SEO Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    headline: "Digital Marketing Services in Coimbatore Full-Funnel Growth for Your Business",
    fullDescription: "Digital marketing is more than running ads or posting on social media it is a connected strategy that attracts, engages, and converts your ideal customers at every stage of their journey. DhiGrowth provides end-to-end digital marketing services in Coimbatore including SEO, paid advertising, content marketing, email marketing, and conversion rate optimization. We build integrated campaigns backed by data, creativity, and a deep understanding of your market delivering measurable ROI on every rupee spent.",
    shortCopy: "Full-funnel digital campaigns that attract, engage and convert customers.",
    category: "marketing",
    iconName: "BarChart3",
    badge: "Full Funnel",
    heroTitle: "Digital Marketing Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Digital Marketing Company in Coimbatore, dedicated to helping businesses build a strong online presence, attract qualified leads, and achieve sustainable growth. Our team of digital marketing specialists combines creativity with technical expertise to deliver strategies that drive measurable results. Whether you are a start‑up, SME, or established enterprise, we provide tailored solutions that align with your business goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with Digital Marketing",
    bottomCtaSub: "Digital marketing is no longer optional it is essential for growth. Partner with DHI Growth, your trusted Digital Marketing Company in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in Digital Marketing: Years of experience across diverse industries.",
          "Customised Strategies: Solutions designed to meet your unique objectives.",
          "Cutting‑Edge Tools: Leveraging SEO, PPC, social media, and content marketing.",
          "Client‑Centric Approach: Transparent communication and collaborative execution."
        ],
        outro: "As a trusted Digital Marketing Company in Coimbatore, we deliver strategies that are reliable, scalable, and future‑ready."
      },
      {
        heading: "Understanding Digital Marketing",
        content: "Digital marketing is the backbone of modern business growth. It involves promoting products and services through online channels to reach a wider audience. Our Digital Marketing Company in Coimbatore helps businesses enhance visibility, engage customers, and increase conversions through data‑driven strategies."
      },
      {
        heading: "Our Digital Marketing Process",
        steps: [
          "1. Market Research – Analysing your industry, competitors, and audience.",
          "2. Strategy Design – Crafting tailored digital marketing plans.",
          "3. Implementation – Executing campaigns across multiple channels.",
          "4. Monitoring & Optimisation – Tracking performance and refining approaches.",
          "5. Reporting & Support – Providing insights and ongoing guidance."
        ],
        outro: "This structured process ensures that our Digital Marketing Company in Coimbatore delivers measurable impact."
      },
      {
        heading: "Digital Marketing in Coimbatore",
        intro: "We provide comprehensive Digital Marketing in Coimbatore, catering to businesses of all sizes. Our services include:",
        items: [
          { title: "SEO", desc: "Search Engine Optimisation (SEO) to boost visibility." },
          { title: "PPC Advertising", desc: "Pay‑Per‑Click (PPC) advertising for targeted reach." },
          { title: "Social Media Marketing", desc: "Social media marketing to engage audiences." },
          { title: "Content Marketing", desc: "Content marketing to build authority and trust." }
        ],
        outro: "By offering tailored Digital Marketing in Coimbatore, we empower businesses to strengthen their digital presence."
      },
      {
        heading: "Digital Marketing Agency in Coimbatore",
        content: "As a full‑service Digital Marketing Agency in Coimbatore, we provide end‑to‑end solutions, from strategy to execution. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their digital marketing journey."
      },
      {
        heading: "Digital Marketing Services in Coimbatore",
        intro: "Our Digital Marketing Services in Coimbatore include:",
        items: [
          { title: "SEO & Content Optimisation", desc: "SEO and content optimisation." },
          { title: "Social Media Campaigns", desc: "Social media campaigns across platforms." },
          { title: "PPC & Display Advertising", desc: "PPC and display advertising." },
          { title: "Analytics & Tracking", desc: "Analytics and performance tracking." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of digital marketing."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Strategies aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable Digital Marketing Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    headline: "Social Media Marketing in Coimbatore Build Your Brand. Grow Your Audience.",
    fullDescription: "Social media is where your customers spend their time and DhiGrowth makes sure your brand shows up powerfully. We manage your presence across Instagram, Facebook, LinkedIn, and YouTube with a strategic mix of content creation, community management, and audience growth tactics. From eye-catching creatives and engaging captions to story campaigns and influencer collaborations our social media marketing team in Coimbatore builds brands that people follow, trust, and buy from.",
    shortCopy: "Build your brand and community across Instagram, Facebook & LinkedIn.",
    category: "marketing",
    iconName: "Share2",
    badge: "Brand Voice",
    heroTitle: "Social Media Marketing Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Social Media Marketing Company in Coimbatore, helping businesses build strong digital identities and connect with audiences across platforms. Our team of social media specialists combines creativity, analytics, and strategy to deliver campaigns that drive engagement, brand awareness, and measurable growth. Whether you are a start‑up, SME, or established enterprise, we provide tailored solutions that align with your goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with Social Media Marketing",
    bottomCtaSub: "Social media is no longer optional—it is essential for growth. Partner with DHI Growth, your trusted Social Media Marketing Company in Coimbatore, to create strategies that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in Social Media Marketing: Years of experience across diverse industries.",
          "Customised Strategies: Solutions designed to meet your unique objectives.",
          "Cutting‑Edge Tools: Leveraging analytics, automation, and creative content.",
          "Client‑Centric Approach: Transparent communication and collaborative execution."
        ],
        outro: "As a trusted Social Media Marketing Company in Coimbatore, we deliver strategies that are reliable, scalable, and future‑ready."
      },
      {
        heading: "Understanding Social Media Marketing",
        content: "Social media is one of the most powerful tools for modern businesses. It enables brands to engage directly with customers, build trust, and expand reach. Our Social Media Marketing Company in Coimbatore helps businesses harness platforms like Facebook, Instagram, LinkedIn, and Twitter to strengthen their digital presence and achieve long‑term success."
      },
      {
        heading: "Our Marketing Process",
        steps: [
          "1. Market Research – Analysing your industry, competitors, and audience.",
          "2. Strategy Design – Crafting tailored social media marketing plans.",
          "3. Content Creation – Developing engaging posts, videos, and campaigns.",
          "4. Implementation – Executing campaigns across multiple platforms.",
          "5. Monitoring & Optimisation – Tracking performance and refining approaches."
        ],
        outro: "This structured process ensures that our Social Media Marketing Company in Coimbatore delivers measurable impact."
      },
      {
        heading: "Social Media Marketing in Coimbatore",
        intro: "We provide comprehensive Social Media Marketing in Coimbatore, catering to businesses of all sizes. Our services include:",
        items: [
          { title: "Brand Awareness", desc: "Brand awareness campaigns." },
          { title: "Targeted Lead Generation", desc: "Lead generation through targeted ads." },
          { title: "Interactive Engagement", desc: "Customer engagement via interactive content." },
          { title: "Analytics & Reporting", desc: "Analytics and reporting for performance tracking." }
        ],
        outro: "By offering tailored Social Media Marketing in Coimbatore, we empower businesses to strengthen their digital presence."
      },
      {
        heading: "Social Media Marketing Agency in Coimbatore",
        content: "As a full‑service Social Media Marketing Agency in Coimbatore, we provide end‑to‑end solutions, from strategy to execution. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their social media journey."
      },
      {
        heading: "Social Media Marketing Services in Coimbatore",
        intro: "Our Social Media Marketing Services in Coimbatore include:",
        items: [
          { title: "Content Creation & Scheduling", desc: "Content creation and scheduling." },
          { title: "Paid Advertising Campaigns", desc: "Paid advertising campaigns." },
          { title: "Influencer Collaborations", desc: "Influencer collaborations." },
          { title: "Performance Optimization", desc: "Analytics and performance optimization." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of social media marketing."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Strategies aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable Social Media Marketing Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "meta-google-ads",
    name: "Meta & Google Ads",
    headline: "Meta Ads & Google Ads Management in Coimbatore Targeted Ads That Deliver Real ROI",
    fullDescription: "Stop wasting money on ads that do not convert. DhiGrowth's paid advertising specialists in Coimbatore design and manage high-performing Meta Ads (Facebook & Instagram) and Google Ads campaigns that target the right audience at the right time with the right message. We handle everything from campaign strategy, audience research, and creative design to A/B testing, budget optimisation, and detailed performance reporting. Our goal is simple: maximise your return on every rupee you invest in advertising.",
    shortCopy: "Targeted paid advertising to maximise ROAS across Google and Meta platforms.",
    category: "marketing",
    iconName: "Target",
    badge: "ROI Focused",
    heroTitle: "Google Ads Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Google Ads Company in Coimbatore, helping businesses maximise their online visibility and drive targeted traffic through effective advertising campaigns. Our team of certified Google Ads specialists combines technical expertise with creative strategies to deliver measurable results. Whether you are a start‑up, SME, or established enterprise, we provide tailored solutions that align with your business goals and market opportunities.",
    bottomCtaHeading: "Transform Your Business with Google Ads",
    bottomCtaSub: "Google Ads is no longer optional it is essential for growth. Partner with DHI Growth, your trusted Google Ads Company in Coimbatore, to create campaigns that elevate your business and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in Google Ads: Years of experience in managing campaigns across industries.",
          "Customised Strategies: Solutions designed to meet your unique objectives.",
          "Cutting‑Edge Tools: Leveraging analytics, keyword research, and bid optimisation.",
          "Client‑Centric Approach: Transparent communication and collaborative execution."
        ],
        outro: "As a trusted Google Ads Company in Coimbatore, we deliver campaigns that are reliable, scalable, and future‑ready."
      },
      {
        heading: "Understanding Google Ads",
        content: "Google Ads is one of the most powerful platforms for online advertising. It enables businesses to reach potential customers at the exact moment they are searching for products or services. Our Google Ads Company in Coimbatore helps businesses harness this platform to increase visibility, generate leads, and boost conversions."
      },
      {
        heading: "Our Google Ads Process",
        steps: [
          "1. Campaign Audit – Analysing your current performance and identifying opportunities.",
          "2. Keyword Research – Targeting relevant terms to attract qualified traffic.",
          "3. Ad Creation – Crafting compelling ad copy and visuals.",
          "4. Bid Management – Optimising budgets for maximum ROI.",
          "5. Monitoring & Reporting – Tracking progress and refining strategies."
        ],
        outro: "This structured process ensures that our Google Ads Company in Coimbatore delivers measurable impact."
      },
      {
        heading: "Google Ads in Coimbatore",
        intro: "We provide comprehensive Google Ads in Coimbatore, catering to businesses of all sizes. Our services include:",
        items: [
          { title: "Search Campaigns", desc: "Search campaigns to capture high‑intent traffic." },
          { title: "Display Campaigns", desc: "Display campaigns for brand awareness." },
          { title: "Shopping Ads", desc: "Shopping ads to boost e‑commerce sales." },
          { title: "Remarketing Campaigns", desc: "Remarketing campaigns to re‑engage potential customers." }
        ],
        outro: "By offering tailored Google Ads in Coimbatore, we empower businesses to strengthen their digital presence."
      },
      {
        heading: "Google Ads Agency in Coimbatore",
        content: "As a full‑service Google Ads Agency in Coimbatore, we provide end‑to‑end solutions, from strategy to execution. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their advertising journey."
      },
      {
        heading: "Google Ads Services in Coimbatore",
        intro: "Our Google Ads Services in Coimbatore include:",
        items: [
          { title: "Campaign Setup & Optimisation", desc: "Campaign setup and optimisation." },
          { title: "Conversion Tracking & Analytics", desc: "Conversion tracking and analytics." },
          { title: "A/B Testing", desc: "A/B testing for ad performance." },
          { title: "Ongoing Support & Reporting", desc: "Ongoing support and reporting." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of Google Ads."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Campaigns aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable Google Ads Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "ads-shooting",
    name: "Ads Shooting",
    headline: "Ad Film & Commercial Shooting Services in Coimbatore",
    fullDescription: "Great advertising starts with great visuals. DhiGrowth offers professional ad film and commercial shooting services in Coimbatore for brands that want to make a powerful impact on screen. Our creative team handles everything from concept development and scriptwriting to location scouting, direction, and production delivering camera-ready ad content for television, YouTube, Instagram, and digital platforms. Whether it is a 15 second reel ad or a full brand film, we bring your vision to life with cinematic quality and a clear marketing objective.",
    shortCopy: "Professional ad film production — creative concepts to camera-ready content.",
    category: "creative",
    iconName: "Video",
    badge: "Cinema Quality",
    heroTitle: "Ads Shooting Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Ads Shooting Company in Coimbatore, specialising in creating high‑quality advertisements that captivate audiences and strengthen brand identity. Our team of creative directors, cinematographers, and marketing strategists work together to deliver ads that are visually compelling, strategically aligned, and results‑driven. Whether you are a start‑up, SME, or established enterprise, we provide tailored ad shooting solutions that elevate your brand presence.",
    bottomCtaHeading: "Transform Your Business with Ads Shooting",
    bottomCtaSub: "Advertising is no longer optional it is essential for growth. Partner with DHI Growth, your trusted Ads Shooting Company in Coimbatore, to create campaigns that elevate your brand and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in Ad Production: Years of experience in producing ads across industries.",
          "Customised Strategies: Solutions designed to meet your unique objectives.",
          "Cutting‑Edge Equipment: Leveraging modern cameras, lighting, and editing tools.",
          "Client‑Centric Approach: Transparent communication and collaborative execution."
        ],
        outro: "As a trusted Ads Shooting Company in Coimbatore, we deliver campaigns that are reliable, creative, and future‑ready."
      },
      {
        heading: "Understanding Ads Shooting",
        content: "Ads shooting is more than just filming. it is about storytelling, creativity, and connecting with audiences. Our Ads Shooting Company in Coimbatore helps businesses craft advertisements that resonate with customers, build trust, and drive conversions. From concept development to final editing, we ensure every detail is handled with precision."
      },
      {
        heading: "Our Ads Shooting Process",
        steps: [
          "1. Concept Development – Understanding your brand and campaign goals.",
          "2. Scriptwriting – Crafting engaging narratives tailored to your audience.",
          "3. Pre‑Production – Planning shoots, locations, and logistics.",
          "4. Production – Filming with professional equipment and skilled crews.",
          "5. Post‑Production – Editing, sound design, and visual effects."
        ],
        outro: "This structured process ensures that our Ads Shooting Company in Coimbatore delivers advertisements that are both impactful and memorable."
      },
      {
        heading: "Ads Shooting in Coimbatore",
        intro: "We provide comprehensive Ads Shooting in Coimbatore, catering to businesses of all sizes. Our services include:",
        items: [
          { title: "Television Commercials", desc: "Television commercials." },
          { title: "Digital & Social Ads", desc: "Digital and social media ads." },
          { title: "Corporate Promotional Videos", desc: "Corporate promotional videos." },
          { title: "Product Launch Campaigns", desc: "Product launch campaigns." }
        ],
        outro: "By offering tailored Ads Shooting in Coimbatore, we empower businesses to strengthen their marketing efforts."
      },
      {
        heading: "Ads Shooting Agency in Coimbatore",
        content: "As a full‑service Ads Shooting Agency in Coimbatore, we provide end‑to‑end solutions, from creative ideation to final delivery. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their advertising journey."
      },
      {
        heading: "Ads Shooting Services in Coimbatore",
        intro: "Our Ads Shooting Services in Coimbatore include:",
        items: [
          { title: "Creative Direction & Scriptwriting", desc: "Creative direction and scriptwriting." },
          { title: "Filming & Cinematography", desc: "Professional filming and cinematography." },
          { title: "Editing & Post‑Production", desc: "Editing, sound, and post‑production." },
          { title: "Cross-Platform Integration", desc: "Campaign integration across platforms." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of advertising."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Campaigns aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable Ads Shooting Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  },
  {
    id: "video-editing",
    name: "Video Editing",
    headline: "Professional Video Editing Services in Coimbatore Content That Captivates",
    fullDescription: "Raw footage is just the beginning. DhiGrowth's video editing team in Coimbatore transforms your raw clips into polished, high-impact video content that captures attention and drives engagement. We edit reels, YouTube videos, brand films, ad creatives, product demos, testimonial videos, and social media content with professional colour grading, motion graphics, subtitles, and sound design. Fast turnaround. Consistent quality. Content your audience will actually watch and share.",
    shortCopy: "High-quality video editing for reels, ads, brand videos & social content.",
    category: "creative",
    iconName: "Film",
    badge: "Post Production",
    heroTitle: "Video Editing Company in Coimbatore",
    heroSub: "At DHI Growth, we are a leading Video Editing Company in Coimbatore, specialising in creating professional, engaging, and visually compelling videos that help businesses communicate effectively. Our team of editors, designers, and creative strategists work together to deliver content that resonates with audiences and strengthens brand identity. Whether you are a start‑up, SME, or established enterprise, we provide tailored video editing solutions that elevate your digital presence.",
    bottomCtaHeading: "Transform Your Business with Video Editing",
    bottomCtaSub: "Video content is no longer optional it is essential for growth. Partner with DHI Growth, your trusted Video Editing Company in Coimbatore, to create videos that elevate your brand and connect you with your audience.",
    sections: [
      {
        heading: "Why Choose DHI Growth?",
        features: [
          "Expertise in Video Editing: Years of experience across diverse industries.",
          "Customised Solutions: Editing styles tailored to your brand and objectives.",
          "Cutting‑Edge Tools: Leveraging advanced editing software and creative techniques.",
          "Client‑Centric Approach: Transparent communication and collaborative execution."
        ],
        outro: "As a trusted Video Editing Company in Coimbatore, we deliver videos that are reliable, creative, and future‑ready."
      },
      {
        heading: "Understanding Video Editing",
        content: "Video editing is more than just cutting and merging clips it is about storytelling, creativity, and connecting with audiences. Our Video Editing Company in Coimbatore helps businesses craft videos that engage customers, build trust, and drive conversions. From corporate films to social media content, we ensure every project is handled with precision."
      },
      {
        heading: "Our Video Editing Process",
        steps: [
          "1. Concept Development – Understanding your brand and campaign goals.",
          "2. Content Organisation – Structuring footage for clarity and impact.",
          "3. Editing & Effects – Applying transitions, colour correction, and sound design.",
          "4. Review & Feedback – Collaborating with clients to refine output.",
          "5. Final Delivery – Providing polished videos ready for distribution."
        ],
        outro: "This structured process ensures that our Video Editing Company in Coimbatore delivers content that is both impactful and memorable."
      },
      {
        heading: "Video Editing in Coimbatore",
        intro: "We provide comprehensive Video Editing in Coimbatore, catering to businesses of all sizes. Our services include:",
        items: [
          { title: "Corporate Promotional Videos", desc: "Corporate promotional videos." },
          { title: "Social Media Content Editing", desc: "Social media content editing." },
          { title: "Product Launch Campaigns", desc: "Product launch campaigns." },
          { title: "Event Highlights & Documentaries", desc: "Event highlights and documentaries." }
        ],
        outro: "By offering tailored Video Editing in Coimbatore, we empower businesses to strengthen their marketing efforts."
      },
      {
        heading: "Video Editing Agency in Coimbatore",
        content: "As a full‑service Video Editing Agency in Coimbatore, we provide end‑to‑end solutions, from creative ideation to final delivery. Our agency model ensures that clients receive expert guidance, technical support, and creative input throughout their video production journey."
      },
      {
        heading: "Video Editing Services in Coimbatore",
        intro: "Our Video Editing Services in Coimbatore include:",
        items: [
          { title: "Trimming & Sequencing", desc: "Professional trimming and sequencing." },
          { title: "Colour Grading & Correction", desc: "Colour grading and correction." },
          { title: "Sound & Music Integration", desc: "Sound editing and background music integration." },
          { title: "Motion Graphics & VFX", desc: "Motion graphics and visual effects." }
        ],
        outro: "These services are designed to help businesses unlock the full potential of video content."
      },
      {
        heading: "Benefits of Partnering with Us",
        features: [
          "Local Expertise: Deep understanding of Coimbatore’s business ecosystem.",
          "Global Standards: Editing aligned with international benchmarks.",
          "Innovation‑Driven: Focus on creativity and cutting‑edge technology.",
          "Dedicated Support: Ongoing assistance to ensure sustainable growth."
        ]
      },
      {
        heading: "Commitment to Quality and Trust",
        content: "At DHI Growth, Our reputation as a reliable Video Editing Company in Coimbatore is built on delivering consistent results and fostering long‑term client relationships."
      }
    ]
  }
];
