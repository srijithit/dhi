export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  featured?: boolean;
  underConstruction?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    "id": "akirva",
    "title": "Akirva",
    "category": "App dev",
    "description": "Akirva is a hyperlocal mobility platform designed to make everyday auto travel faster, simpler, and more accessible.",
    "image": "/images/case-studies/akirva/showcase_1.png",
    "slug": "akirva",
    "featured": true
  },
  {
    "id": "clean-culture",
    "title": "Clean Culture",
    "category": "Ecosystem",
    "description": "Clean Culture is a modern daily essentials delivery platform built to make recurring household purchases simpler, more convenient, and more predictable.",
    "image": "/images/cc_overview_slide1.png",
    "slug": "clean-culture",
    "featured": true
  },
  {
    "id": "nestpilot",
    "title": "NestPilot",
    "category": "SaaS Platform",
    "description": "Managing a PG or hostel shouldn't mean managing spreadsheets, paper registers, WhatsApp messages, rent calculations, and scattered tenant records.",
    "image": "/images/case-studies/nestpilot/showcase_1.png",
    "slug": "nestpilot",
    "featured": false
  },
  {
    "id": "judah",
    "title": "Judah",
    "category": "Food Delivery",
    "description": "Comprehensive Food Delivery Ecosystem: Judah is a multi-platform on-demand food ordering and logistics platform connecting consumers, local restaurants, and delivery fleets.",
    "image": "/images/case-studies/judah/showcase_1.png",
    "slug": "judah",
    "featured": false
  },
  {
    "id": "ruts-n-rides",
    "title": "Ruts N Rides",
    "category": "Sports Tech",
    "description": "Ruts N Rides is a purpose-built rider ecosystem created for motorcycle enthusiasts who want to learn, train, practice, and experience riding beyond the road.",
    "image": "/images/case-studies/ruts-n-rides/showcase_1.png",
    "slug": "ruts-n-rides",
    "featured": false
  },
  {
    "id": "ruts-n-rides-admin",
    "title": "Ruts N Rides",
    "category": "Operations SaaS",
    "description": "Behind every successful training centre is a complex set of daily operations — bookings, clients, trainers, attendance, payments, invoices, expenses, leads, and reporting.",
    "image": "/images/case-studies/ruts-n-rides/showcase_1.png",
    "slug": "ruts-n-rides-admin",
    "featured": false
  },
  {
    "id": "verdurepax",
    "title": "VerdurePax",
    "category": "E-Commerce",
    "description": "VerdurePax is a modern gardening and plant lifestyle brand built around the idea of making green spaces more beautiful, functional, and accessible.",
    "image": "/images/case-studies/verdurepax/showcase_1.png",
    "slug": "verdurepax",
    "featured": false
  },
  {
    "id": "befhue",
    "title": "BEFHUE",
    "category": "Creative Agency",
    "description": "BEFHUE is a creative and digital growth company that brings together branding, design, video production, digital marketing, UI/UX, and technology to help businesses build stronger digital identities.",
    "image": "/images/case-studies/befhue/showcase_3.webp",
    "slug": "befhue",
    "featured": false
  },
  {
    "id": "squirlio",
    "title": "Squirlio",
    "category": "App Platform",
    "description": "Squirlio is a premium e-commerce platform dedicated to offering healthy, nutrient-rich snacks.",
    "image": "/images/case-studies/squirlio/banner_1.jpeg",
    "slug": "squirlio",
    "featured": false
  },
  {
    "id": "amaravathy-coir",
    "title": "Amaravathy Coir",
    "category": "Manufacturing",
    "description": "Amaravathy Coir Producer Company Limited is a Tamil Nadu-based coir enterprise focused on producing sustainable coir fibre, yarn-dyed products, and premium coir solutions for domestic and international markets.",
    "image": "/images/case-studies/amaravathy/hero.png",
    "slug": "amaravathy-coir",
    "featured": false
  },
  {
    "id": "sales-app",
    "title": "Sales CRM App",
    "category": "Enterprise App",
    "description": "LeadNova CRM is a mobile-based customer relationship management application designed to help sales teams manage leads, follow-ups, activities, and the complete sales pipeline efficiently.",
    "image": "/images/under_construction_banner.png",
    "slug": "sales-app",
    "featured": false,
    "underConstruction": true
  },
  {
    "id": "keystone",
    "title": "Keystone",
    "category": "Enterprise Digital",
    "description": "KIIPL needed a strong digital presence that could communicate its business identity, capabilities, and professional approach to customers and stakeholders.",
    "image": "/images/case-studies/kiipl/hero.png",
    "slug": "keystone",
    "featured": false
  },
  {
    "id": "vectra-mechnovations",
    "title": "Vectra Mechnovations",
    "category": "Industrial Engineering",
    "description": "Vectra Mechnovations needed a digital presence that could communicate its technical expertise, engineering capabilities, and professional approach to potential customers.",
    "image": "/images/under_construction_banner.png",
    "slug": "vectra-mechnovations",
    "featured": false,
    "underConstruction": true
  },
  {
    "id": "sanikas-restaurant",
    "title": "Sanika’s Indian Cuisine",
    "category": "Hospitality & Ordering",
    "description": "Sanika’s Indian Cuisine brings the rich flavours of Indian cooking to Mt.",
    "image": "/images/case-studies/sanikas-restaurant/hero.png",
    "slug": "sanikas-restaurant",
    "featured": false
  },
  {
    "id": "thoorigai",
    "title": "Thoorigai",
    "category": "Event Platform",
    "description": "Thoorigai is a modern digital platform designed to simplify the way users discover and book events.",
    "image": "/images/case-studies/thoorigai/hero.png",
    "slug": "thoorigai",
    "featured": false
  },
  {
    "id": "gigabull",
    "title": "Gigabull",
    "category": "E-Commerce",
    "description": "Gigabull is a modern e-commerce platform created for a leather products brand serving customers and international buyers with high-quality leather goods at competitive prices.",
    "image": "/images/case-studies/gigabull/hero.png",
    "slug": "gigabull",
    "featured": false
  },
  {
    "id": "startten",
    "title": "STARTTEN",
    "category": "Fintech & Reward",
    "description": "STARTTEN is a next-generation digital platform built around an engaging time-based auction experience, designed to turn traditional auction mechanics into a fast, interactive, and accessible digital experience.",
    "image": "/images/case-studies/startten/showcase_1.png",
    "slug": "startten",
    "featured": false
  },
  {
    "id": "splendour-park",
    "title": "Splendour Park ERP",
    "category": "Internal System",
    "description": "Splendour Park is a multi-branch ERP system built for end-to-end management of bulk trading desks, retail counters, wholesale billing, and warehouse inventory.",
    "image": "/images/under_construction_banner.png",
    "slug": "splendour-park",
    "featured": false,
    "underConstruction": true
  },
  {
    "id": "infragen",
    "title": "infragen",
    "category": "Real Estate & Infra",
    "description": "Vizhi Infragen Realtors LLP is a trusted real estate and property management company based in Coimbatore.",
    "image": "/images/case-studies/infragen/showcase_3.jpg",
    "slug": "infragen",
    "featured": true
  },
  {
    "id": "bad-biscuit-detection",
    "title": "Biscuit Defect AI",
    "category": "AI & Computer Vision",
    "description": "Real-time industrial automated high-speed visual inspection and defect rejection system for biscuit manufacturing lines.",
    "image": "/images/under_construction_banner.png",
    "slug": "bad-biscuit-detection",
    "featured": false,
    "underConstruction": true
  },
  {
    "id": "fabric-defect-detection",
    "title": "Fabric Defect AI",
    "category": "AI & Computer Vision",
    "description": "Automated textile vision inspection system detecting fabric flaws, weave imperfections, and color variations in high-speed spinning mills.",
    "image": "/images/under_construction_banner.png",
    "slug": "fabric-defect-detection",
    "featured": false,
    "underConstruction": true
  },
  {
    "id": "dhigrowth-ai-chatbot",
    "title": "AI Chatbot Assistant",
    "category": "AI Automation",
    "description": "Next-generation RAG conversational AI assistant for 24/7 lead qualification, booking management, and customer support automation.",
    "image": "/images/under_construction_banner.png",
    "slug": "dhigrowth-ai-chatbot",
    "featured": false,
    "underConstruction": true
  },
  {
    "id": "ai-invoice-processing",
    "title": "AI Invoice Processing",
    "category": "AI & Document Intelligence",
    "description": "Intelligent OCR and multi-format document parser extracting line items, tax totals, and ledger entries directly into accounting databases.",
    "image": "/images/under_construction_banner.png",
    "slug": "ai-invoice-processing",
    "featured": false,
    "underConstruction": true
  },
  {
    "id": "vasantabhavan",
    "title": "Vasantabhavan",
    "category": "F&B Hospitality",
    "description": "Namma Veedu Vasanta Bhavan (VB World) is a legendary South Indian vegetarian restaurant chain serving over 50,000+ meals daily across 25+ global branches with modern online ordering, banquet reservations, and catering services.",
    "image": "/images/case-studies/vasantabhavan/webBanner-1782291959297-578527377.webp",
    "slug": "vasantabhavan",
    "featured": true
  },
  {
    "id": "infinite-structure",
    "title": "Infinite Structure",
    "category": "Civil & Industrial Infra",
    "description": "Infinite Structure is an engineering and architectural leader specializing in deployable kinetic engineering, precision industrial roofing, PEB structures, and heavy civil construction.",
    "image": "/images/case-studies/infinite-structure/0240.webp",
    "slug": "infinite-structure",
    "featured": true
  }
];
