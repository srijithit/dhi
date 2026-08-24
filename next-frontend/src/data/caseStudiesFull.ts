export interface CaseStudyDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  brandColor: string;
  tl: string;
  about: string;
  challenges: string;
  solutions: string;
  solutionBullets: string[];
  productExperience: string;
  highlights: string[];
  techStack: string[];
  scope: string;
  results: string[];
  link: string;
  image: string;
}

export const detailedCaseStudies: CaseStudyDetail[] = [
  {
    "slug": "akirva",
    "title": "Akirva",
    "subtitle": "Smart Auto Booking & Local Mobility Platform",
    "category": "App dev",
    "brandColor": "#10b981",
    "tl": "Ragul",
    "about": "Akirva is a hyperlocal mobility platform designed to make everyday auto travel faster, simpler, and more accessible.\n\nBuilt for the Coimbatore market, Akirva connects passengers with auto-rickshaw drivers through a seamless digital booking experience — bringing the convenience of on-demand mobility directly to users' smartphones.\n\nFrom discovering nearby rides to booking a trip and completing the journey, Akirva brings the essential elements of urban auto transportation into one connected platform.\n\nThe platform was successfully launched in Coimbatore and is now available to users through both the Google Play Store and Apple App Store.",
    "challenges": "Building a real-time mobility platform involves much more than creating a booking interface.\n\nThe system needs to coordinate passengers, driver-partners, locations, ride requests, and trip status while maintaining a smooth experience for everyone involved.\n\nKey challenges included:\n\nCreating a simple booking experience for everyday users\nConnecting passengers with available driver-partners\nHandling location-based ride discovery\nManaging real-time booking and trip status\nDesigning separate experiences for passengers and driver-partners\nBuilding reliable ride workflows from booking to completion\nMaintaining a smooth experience under changing network conditions\nCreating a scalable foundation for future geographical expansion\nSuccessfully preparing the application for production and app-store deployment",
    "solutions": "We developed Akirva as a complete digital mobility ecosystem, connecting passengers and driver-partners through a unified platform.\n\nOur solution focused on making the complete ride lifecycle simple and reliable:\n\nRequest → Match → Confirm → Ride → Complete\n\nThe platform includes:\n\nPassenger mobile application\nDriver-partner mobile application\nLocation-based ride discovery\nAuto booking workflow\nDriver availability management\nRide request and acceptance flow\nTrip status management\nUser and driver profiles\nRide history\nNotifications and communication\nBackend APIs for real-time operations\nScalable architecture for future expansion\n\nThe objective was to make booking an auto feel as natural as ordering any everyday service through a smartphone.",
    "solutionBullets": [
      "We developed Akirva as a complete digital mobility ecosystem, connecting passengers and driver-partners through a unified platform.",
      "Our solution focused on making the complete ride lifecycle simple and reliable:",
      "Request → Match → Confirm → Ride → Complete",
      "The platform includes:",
      "Passenger mobile application",
      "Driver-partner mobile application",
      "Location-based ride discovery",
      "Auto booking workflow",
      "Driver availability management",
      "Ride request and acceptance flow",
      "Trip status management",
      "User and driver profiles",
      "Ride history",
      "Notifications and communication",
      "Backend APIs for real-time operations",
      "Scalable architecture for future expansion",
      "The objective was to make booking an auto feel as natural as ordering any everyday service through a smartphone."
    ],
    "productExperience": "Akirva is built around speed and simplicity.\n\nPassengers can use the application to initiate a ride, connect with an available driver-partner, and track the progress of their journey through a structured digital experience.\n\nFor driver-partners, the platform provides a dedicated workflow to manage availability, receive ride requests, accept trips, and complete journeys.\n\nThe two-sided experience is connected through a central backend, ensuring that booking information and ride status remain synchronised across the ecosystem.\n\nThe result is a mobility experience that replaces traditional uncertainty with a clear, connected, and technology-driven ride journey.",
    "highlights": [
      "Hyperlocal Mobility Platform — Built specifically to address everyday auto transportation needs.",
      "Two-Sided Ecosystem — Dedicated experiences for passengers and driver-partners.",
      "On-Demand Booking — Request and connect with available auto drivers digitally.",
      "Location-Based Experience — Designed around real-world passenger and driver locations.",
      "Real-Time Ride Workflow — From ride request through acceptance and completion.",
      "Driver Availability Management — Helps driver-partners manage incoming ride opportunities.",
      "Simple User Experience — Designed for fast adoption and everyday use.",
      "Production-Ready Mobile Apps — Successfully developed and prepared for public release.",
      "App Store Presence — Available on both Google Play Store and Apple App Store.",
      "Coimbatore Launch — Successfully launched and established in the Coimbatore market.",
      "Scalable Architecture — Built with the potential to expand into additional locations and mobility services."
    ],
    "techStack": [
      "Mobile Frontend: Flutter, Dart, Provider (ChangeNotifier & Selector architecture), Dio HTTP Client, Flutter Secure Storage. • Web Admin Frontend: React 19, TypeScript, Vite, Redux Toolkit (RTK), Tailwind CSS. • Backend Architecture: Node.js (ESM), Express.js 5.x, Prisma ORM 6.x, Joi & Zod validation layers. • Databases & Caching: PostgreSQL on AWS RDS with PostGIS spatial extension, Redis with ioredis and @socket.io/redis-adapter. • Real-Time & Communications: Socket.IO, Firebase Admin SDK (Cloud Messaging & Remote Config), AWS SNS (SMS OTP). • Storage, Email & Payments: AWS S3 (Cloud Storage), Resend & AWS SES (Transactional Emails), Razorpay (Payment Gateway & Webhook verification)."
    ],
    "scope": "Our scope covered the complete product development lifecycle, including:\n\nProduct architecture\nUI/UX design\nPassenger mobile application\nDriver-partner mobile application\nBackend development\nUser registration and authentication\nDriver-partner onboarding\nLocation-based services\nAuto booking system\nRide request management\nDriver acceptance workflow\nTrip lifecycle management\nRide history\nNotification system\nUser and driver profiles\nAPI development and integration\nDatabase architecture\nPerformance optimisation\nProduction deployment\nGoogle Play Store deployment\nApple App Store deployment\nLaunch support",
    "results": [
      "Akirva successfully moved from concept to a fully operational mobility platform launched in Coimbatore.",
      "The platform established a digital connection between passengers and auto driver-partners, providing a structured and convenient alternative to traditional ride booking.",
      "Most importantly, the project successfully crossed the gap between development and real-world deployment — with the applications successfully published on both the Google Play Store and Apple App Store.",
      "Akirva now provides a technology foundation that can evolve beyond its initial Coimbatore launch, with the potential to support new locations, larger driver networks, and additional mobility experiences.",
      "We didn't just build an auto-booking app.",
      "We built a complete mobility ecosystem — from the first ride request to the final destination."
    ],
    "link": "Playstore: https://play.google.com/store/apps/details?id=com.akirva.user.akirva_user   Appstore: Not Launched",
    "image": "/images/case-studies/akirva/hero.png"
  },
  {
    "slug": "clean-culture",
    "title": "Clean Culture",
    "subtitle": "Subscription Commerce & Daily Essentials Delivery Platform",
    "category": "Ecosystem",
    "brandColor": "#2196E8",
    "tl": "Ragul",
    "about": "Clean Culture is a modern daily essentials delivery platform built to make recurring household purchases simpler, more convenient, and more predictable.\n\nThe platform brings fresh tender coconuts, milk, protein meals, cloud kitchen food, mineral RO water, oils, and other everyday essentials into one seamless ordering experience. Customers can place one-time orders or subscribe to products based on their preferred delivery schedule.\n\nOur objective was to build more than a conventional e-commerce application.\n\nWe created a complete commerce and delivery ecosystem that connects customers, products, subscriptions, orders, payments, vendors, and deliveries through a unified digital platform.",
    "challenges": "Daily essentials are fundamentally different from conventional e-commerce.\n\nCustomers don't always want to place the same order every day. They want the flexibility to schedule, modify, pause, resume, or repeat deliveries based on their lifestyle.\n\nThe key challenges included:\n\nCreating a frictionless shopping experience for everyday products\nSupporting both one-time and recurring purchases\nDesigning flexible subscription schedules\nManaging different delivery dates and recurring orders\nAllowing customers to modify subscriptions before cutoff times\nSupporting real-time delivery tracking\nIntegrating secure online payments and Cash on Delivery\nManaging products and fulfilment across the delivery ecosystem\nCreating a reliable architecture for scheduled order generation\nProviding a consistent experience across mobile platforms\n\nThe challenge wasn't simply to build an online store.\n\nIt was to build an automated system that understands when customers need their products.",
    "solutions": "We designed Clean Culture as a subscription-first commerce and delivery platform, connecting the entire order lifecycle from product discovery to doorstep delivery.\n\nThe solution includes:\n\nProduct discovery and category browsing\nOne-time ordering\nSubscription-based ordering\nDaily recurring deliveries\nWeekly and custom delivery schedules\nMonthly date-based subscriptions\nSubscription pause and resume controls\nSubscription modification before cutoff time\nReal-time order tracking\nSecure online payments\nCash on Delivery\nOrder management\nDelivery scheduling\nCustomer notifications\nVendor and delivery operations\nScalable backend APIs and infrastructure\n\nThe core customer journey was designed around:\n\nDiscover → Order → Schedule → Deliver → Repeat",
    "solutionBullets": [
      "We designed Clean Culture as a subscription-first commerce and delivery platform, connecting the entire order lifecycle from product discovery to doorstep delivery.",
      "The solution includes:",
      "Product discovery and category browsing",
      "One-time ordering",
      "Subscription-based ordering",
      "Daily recurring deliveries",
      "Weekly and custom delivery schedules",
      "Monthly date-based subscriptions",
      "Subscription pause and resume controls",
      "Subscription modification before cutoff time",
      "Real-time order tracking",
      "Secure online payments",
      "Cash on Delivery",
      "Order management",
      "Delivery scheduling",
      "Customer notifications",
      "Vendor and delivery operations",
      "Scalable backend APIs and infrastructure",
      "The core customer journey was designed around:",
      "Discover → Order → Schedule → Deliver → Repeat"
    ],
    "productExperience": "Clean Culture was designed around a simple idea:\n\nYour daily essentials should arrive without you having to think about them.\n\nCustomers can browse products, place an immediate order, or create a recurring subscription based on their requirements. The platform supports daily, weekly, custom, and monthly delivery schedules, giving customers control over how and when their essentials arrive.\n\nThe subscription experience is particularly important. Customers can pause, resume, modify, or request additional deliveries for upcoming subscription dates, creating flexibility around real-life changes rather than forcing users into rigid recurring orders.\n\nOn the fulfilment side, the platform connects ordering and delivery operations so that scheduled orders can move through the system efficiently.\n\nThe result is a commerce experience that shifts the customer mindset from:\n\n\"I need to order this again.\"\n\nto:\n\n\"It's already scheduled.\"",
    "highlights": [
      "Subscription-First Commerce — Built specifically for recurring daily-essentials purchasing.",
      "Flexible Delivery Scheduling — Supports daily, weekly, custom, and monthly schedules.",
      "One-Time & Recurring Orders — Customers can choose between immediate purchases and subscriptions.",
      "Smart Subscription Management — Pause, resume, modify, and manage upcoming deliveries with flexibility.",
      "Additional Delivery Requests — Customers can request extra deliveries for upcoming subscription dates.",
      "Real-Time Order Tracking — Customers can follow their delivery journey.",
      "Multiple Payment Options — Supports secure online payments and Cash on Delivery.",
      "Everyday Essentials Marketplace — Brings products such as coconuts, milk, protein meals, food, RO water, oils, and other essentials together in one platform.",
      "Connected Delivery Ecosystem — Designed to connect customers, vendors, orders, subscriptions, and delivery operations.",
      "Mobile-First Experience — Built for convenient everyday ordering from smartphones.",
      "Production-Ready Applications — Successfully launched across both iOS and Android platforms."
    ],
    "techStack": [
      "Mobile Frontend: Flutter, Dart, Provider (ChangeNotifier & Selector architecture), Dio HTTP Client, Flutter Secure Storage. • Web Admin Frontend: React 19, TypeScript, Vite, Redux Toolkit (RTK), Tailwind CSS. • Backend Architecture: Node.js (ESM), Express.js 5.x, Prisma ORM 6.x, Joi & Zod validation layers. • Databases & Caching: PostgreSQL on AWS RDS with PostGIS spatial extension, Redis with ioredis and @socket.io/redis-adapter. • Real-Time & Communications: Socket.IO, Firebase Admin SDK (Cloud Messaging & Remote Config), AWS SNS (SMS OTP). • Storage, Email & Payments: AWS S3 (Cloud Storage), Resend & AWS SES (Transactional Emails), Razorpay (Payment Gateway & Webhook verification)."
    ],
    "scope": "Our scope covered the complete digital product development lifecycle, including:\n\nProduct architecture\nUI/UX design\nCustomer mobile application\nVendor management experience\nDelivery operations experience\nBackend development\nProduct catalogue\nCategory management\nOne-time ordering\nSubscription management\nRecurring order engine\nCustom delivery scheduling\nOrder management\nDelivery tracking\nPayment integration\nCash on Delivery workflow\nCustomer notifications\nSubscription modification workflows\nAPI development and integration\nDatabase architecture\nPerformance optimisation\nProduction deployment\nApp Store deployment\nGoogle Play Store deployment\nPost-launch improvements and optimisation",
    "results": [
      "Clean Culture successfully evolved from an e-commerce concept into a complete subscription-driven daily essentials delivery platform.",
      "The platform gives customers the flexibility to purchase products when they need them or automate recurring deliveries around their lifestyle. Its subscription system supports daily, weekly, custom, and monthly schedules while allowing customers to pause, resume, modify, or add upcoming deliveries when required.",
      "The application has been successfully launched on both the Apple App Store and Google Play Store, making the platform available as a production-ready mobile experience.",
      "The project demonstrates how we transformed a traditional recurring-purchase problem into a technology-driven commerce and fulfilment ecosystem.",
      "We didn't just build an e-commerce app.",
      "We built a system that turns everyday purchases into an automated habit."
    ],
    "link": "Website:\nClean Culture Website: http://cleanculture.in/\n\niOS App:\nDownload on the Apple App Store: https://apps.apple.com/us/app/clean-culture/id6767485341\n\nAndroid App:\nGet it on Google Play: https://play.google.com/store/apps/details?id=com.dhigrowth.cleanculture&hl=en_IN",
    "image": "/images/cc_overview_slide1.png"
  },
  {
    "slug": "nestpilot",
    "title": "NestPilot",
    "subtitle": "PG & Hostel Management SaaS Platform",
    "category": "SaaS Platform",
    "brandColor": "#3b82f6",
    "tl": "pranitha",
    "about": "Managing a PG or hostel shouldn't mean managing spreadsheets, paper registers, WhatsApp messages, rent calculations, and scattered tenant records.\n\nNestPilot was built to change that.\n\nNestPilot is a cloud-based PG and hostel management platform that brings tenant onboarding, room allocation, rent collection, expense tracking, documentation, and business analytics into one unified system.\n\nOur goal was to transform a traditionally manual operation into a smart, automated, and data-driven management experience — helping PG owners spend less time managing operations and more time growing their business.",
    "challenges": "PG and hostel management involves hundreds of small operational tasks every month. When these processes are handled manually, even a small mistake can result in payment leakage, inaccurate occupancy data, or hours of administrative work.\n\nThe key challenges we addressed included:\n\nManaging tenant information across scattered records\nTracking room and bed availability manually\nCalculating and collecting monthly rent\nFollowing up on pending payments\nManaging tenant KYC and documentation\nTracking operational expenses\nGenerating receipts manually\nUnderstanding real-time occupancy and profitability\nManaging multiple properties from different locations\nFinding historical tenant and payment records quickly\n\nThe challenge wasn't simply to digitise paperwork.\n\nIt was to rethink how an entire PG business operates.",
    "solutions": "We designed NestPilot as a complete operational automation platform rather than another basic property management dashboard.\n\nThe platform brings the complete PG management lifecycle into one connected system:\n\nTenant → Room → Rent → Expenses → Reports → Business Insights\n\nKey solutions include:\n\nDigital tenant onboarding and KYC management\nReal-time room and bed management\nAutomated rent calculations and payment tracking\nWhatsApp rent reminders and digital receipts\nTariff and billing cycle management\nMaintenance request tracking\nExpense categorisation and monitoring\nReal-time occupancy visibility\nP&L and financial reporting\nAdvanced search and filtering\nMulti-property and multi-city management\nCentralised management through a unified dashboard\n\nThis allows owners to replace fragmented manual processes with a single source of truth for their entire PG operation.",
    "solutionBullets": [
      "We designed NestPilot as a complete operational automation platform rather than another basic property management dashboard.",
      "The platform brings the complete PG management lifecycle into one connected system:",
      "Tenant → Room → Rent → Expenses → Reports → Business Insights",
      "Key solutions include:",
      "Digital tenant onboarding and KYC management",
      "Real-time room and bed management",
      "Automated rent calculations and payment tracking",
      "WhatsApp rent reminders and digital receipts",
      "Tariff and billing cycle management",
      "Maintenance request tracking",
      "Expense categorisation and monitoring",
      "Real-time occupancy visibility",
      "P&L and financial reporting",
      "Advanced search and filtering",
      "Multi-property and multi-city management",
      "Centralised management through a unified dashboard",
      "This allows owners to replace fragmented manual processes with a single source of truth for their entire PG operation."
    ],
    "productExperience": "NestPilot was designed around one principle:\n\nMake PG management feel as simple as running a dashboard.\n\nThe product takes a complex operational workflow and breaks it into simple, actionable modules.\n\nA PG owner can create tariff plans, add rooms, register tenants, allocate rooms, track payments, record expenses, and monitor business performance through a structured workflow.\n\nThe dashboard provides a high-level view of the business while detailed modules allow owners to drill down into individual tenants, rooms, payments, and expenses.\n\nThe experience is built to answer the questions that matter most to a PG owner:\n\nHow many beds are occupied?\nWho has pending rent?\nWhere is my money going?\nHow profitable is my property?\nWhat needs my attention today?\n\nInstead of searching through registers and spreadsheets, the information is available in seconds.",
    "highlights": [
      "Complete PG Management — Tenant, room, rent, expenses, and reporting in one platform.",
      "Digital Tenant Lifecycle — Manage tenants from onboarding through exit.",
      "Real-Time Room Visibility — Quickly identify occupied, vacant, and available beds.",
      "Automated Rent Management — Reduce manual calculations and payment tracking.",
      "WhatsApp Automation — Send rent reminders and generate digital receipts directly through WhatsApp.",
      "Financial Intelligence — Real-time income, expense, and P&L visibility.",
      "KYC & Documentation — Keep tenant information and identity documents organised digitally.",
      "Multi-Property Management — Manage multiple PG properties and branches through a unified system.",
      "Fast Information Retrieval — Search and filters make historical records accessible within seconds.",
      "Operational Automation — Reduce repetitive administrative work and manual processes.",
      "Scalable SaaS Architecture — Built as a foundation for growing PG businesses across multiple locations."
    ],
    "techStack": [
      "React.js, node.js"
    ],
    "scope": "Our scope covered the design and development of the complete NestPilot digital product, including:\n\nProduct strategy and workflow architecture\nUI/UX design\nSaaS dashboard development\nFrontend development\nBackend development\nTenant management system\nKYC and documentation management\nRoom & bed management\nTariff and billing management\nRent collection and payment tracking\nWhatsApp notification and receipt workflows\nExpense management\nMaintenance request management\nDashboard and analytics\nP&L reporting\nSearch and filtering\nMulti-property management\nResponsive application experience\nAPI and backend integrations\nPerformance optimisation\nScalable product architecture",
    "results": [
      "NestPilot transforms PG management from a manual, fragmented process into a connected digital operation.",
      "The platform gives owners real-time visibility into their properties, tenants, payments, vacancies, expenses, and financial performance — all from one place.",
      "According to the current product positioning, NestPilot targets a 70% reduction in administrative time, aims to eliminate billing calculation errors, and enables records to be found in seconds.",
      "More importantly, the platform creates a foundation for PG owners to scale from managing a single property to operating multiple properties across cities without multiplying their administrative workload.",
      "We didn't just build property management software.",
      "We built an operating system for the modern PG business."
    ],
    "link": "https://nestpilot.in/",
    "image": "/images/cc_highlight_category.jpg"
  },
  {
    "slug": "judah",
    "title": "Judah",
    "subtitle": "Judah",
    "category": "Food Delivery",
    "brandColor": "#f97316",
    "tl": "sathish",
    "about": "Comprehensive Food Delivery Ecosystem: Judah is a multi-platform on-demand food ordering and logistics platform connecting consumers, local restaurants, and delivery fleets. • Core Problem Solved: Eliminates operational bottlenecks in hyperlocal food commerce through automated nearby driver dispatch, dynamic detour-indexed pricing, and real-time order lifecycle synchronization. • Multi-Stakeholder Target Audience: Serves four distinct personas — end consumers ordering meals, restaurant merchants managing menus and fulfillment, freelance delivery agents accepting tasks, and platform administrators managing logistics and finances. • Primary Business Objective: Delivers transparent meal delivery with granular variant pricing, schedule-based food availability, and reliable settlement ledgers for vendors and drivers. • Key Platform Capabilities: Features real-time GPS rider tracking, PostGIS-powered geospatial vendor discovery, automated timeout-driven agent queuing, and multi-tier variant cart management.",
    "challenges": "• Automated Driver Dispatch & Timeout Management: Managing sequential delivery request broadcasting to nearby online agents without concurrency deadlocks or unassigned stranded orders. • Geospatial Proximity & Dynamic Distance Pricing: Calculating accurate delivery pricing from aerial GPS coordinates while compensating for real-world road detour factors and restaurant delivery radiuses. • Granular Menu Availability Logic: Handling complex item availability rules across multi-tier variants, meal slots (morning/afternoon/night), custom weekday time windows, and vendor operational hours. • Multi-App State Synchronization: Maintaining consistent, low-latency state across four independent client applications (Customer, Vendor, Driver, and Admin) during rapid order status transitions. • Secure Financial & Payment Lifecycle: Implementing tamper-proof payment verification using HMAC webhook signatures, dynamic remote secrets, and automated vendor/driver payout ledger calculations",
    "solutions": "Queue-Based Agent Assignment Engine: Built an automated Node-Cron and Redis/Socket.IO dispatch engine that enforces 60-second acceptance windows before promoting the next queued nearby driver. • PostGIS Spatial & Pricing Calculations: Utilized PostgreSQL ST_DistanceSphere spatial queries combined with a centralized pricing engine applying detour multipliers, platform commissions, package fees, and GST. • Dual-Layer Availability Engine: Created a hybrid availability validation layer supporting specific FoodItemTimeWindow rules and scheduled midnight availability resets. • Distributed Real-Time Layer: Deployed Socket.IO with a Redis adapter to broadcast live driver coordinates and order events across micro-rooms. • Dual Validation & Verification: Implemented strict schema validation using Zod and Joi across Express routes with HMAC SHA-256 Razorpay webhook verification and automated ledger record creation.",
    "solutionBullets": [
      "Queue-Based Agent Assignment Engine: Built an automated Node-Cron and Redis/Socket.IO dispatch engine that enforces 60-second acceptance windows before promoting the next queued nearby driver. • PostGIS Spatial & Pricing Calculations: Utilized PostgreSQL ST_DistanceSphere spatial queries combined with a centralized pricing engine applying detour multipliers, platform commissions, package fees, and GST. • Dual-Layer Availability Engine: Created a hybrid availability validation layer supporting specific FoodItemTimeWindow rules and scheduled midnight availability resets. • Distributed Real-Time Layer: Deployed Socket.IO with a Redis adapter to broadcast live driver coordinates and order events across micro-rooms. • Dual Validation & Verification: Implemented strict schema validation using Zod and Joi across Express routes with HMAC SHA-256 Razorpay webhook verification and automated ledger record creation."
    ],
    "productExperience": "Customer Mobile Journey: Intuitive Flutter customer app featuring dietary filtering (Veg/Non-Veg/Healthy), variant selection sheets, promotional coupon redemption, and live map-based delivery tracking. • Merchant Store & Order Console: Real-time incoming order sound chimes, one-tap accept/ready transitions, variant master management, and granular time window scheduling. • Delivery Partner Operations: Streamlined driver app with KYC onboarding, 60-second priority order alerts, turn-by-turn navigation coordinates, and secure delivery PIN verification. • Administrative Oversight: Comprehensive web dashboard built with React 19 and Redux Toolkit offering live fleet monitoring, vendor KYC approval queues, price parameter configuration, and settlement auditing. • Resilient Feedback & Notifications: Automated transactional push notifications via Firebase Cloud Messaging (FCM), SMS notifications via AWS SNS, and email receipts via Resend/AWS SES.",
    "highlights": [
      "Intelligent Multi-Tier Priority Dispatch: Automated sequential driver matching with real-time fallback re-allocation when requests expire or drivers go offline. • Dynamic Detour & Markup Pricing Engine: Configurable pricing architecture supporting dynamic platform commission markups, distance-tiered delivery fees, and automated tax calculations. • Comprehensive 4-Tier Ecosystem: Seamless end-to-end integration across three specialized Flutter mobile applications and an administrative TypeScript web portal. • High-Performance Spatial Queries: Native PostGIS integration for sub-second radius filtering and distance computation directly within PostgreSQL. • Robust Cloud & Media Infrastructure: AWS S3 image optimization via Sharp, Redis connection clustering, and Remote Config-driven key management."
    ],
    "techStack": [
      "Mobile Frontend: Flutter, Dart, Provider (ChangeNotifier & Selector architecture), Dio HTTP Client, Flutter Secure Storage. • Web Admin Frontend: React 19, TypeScript, Vite, Redux Toolkit (RTK), Tailwind CSS. • Backend Architecture: Node.js (ESM), Express.js 5.x, Prisma ORM 6.x, Joi & Zod validation layers. • Databases & Caching: PostgreSQL on AWS RDS with PostGIS spatial extension, Redis with ioredis and @socket.io/redis-adapter. • Real-Time & Communications: Socket.IO, Firebase Admin SDK (Cloud Messaging & Remote Config), AWS SNS (SMS OTP). • Storage, Email & Payments: AWS S3 (Cloud Storage), Resend & AWS SES (Transactional Emails), Razorpay (Payment Gateway & Webhook verification)."
    ],
    "scope": "Native Android and iOS customer applications, Android delivery agent app, Android restaurant vendor app, and responsive desktop web admin console. • Functional Scope: Complete food discovery, variant-level carting, checkout, online payment processing, order dispatching, live GPS tracking, ratings, and financial ledgers. • Architectural Scope: Over 30 Prisma relational database models, 40+ REST API route modules, and multi-room WebSocket channels for real-time tracking. • User & Role Scope: Support for four core user roles: Customers, Restaurant Vendors, Delivery Drivers, and Platform Administrators. • Integration Scope: End-to-end integrations with Razorpay, Firebase Cloud Messaging, AWS S3, AWS SNS, Resend, and OpenStreetMap/Leaflet services",
    "results": [
      "Successfully engineered and integrated all 4 ecosystem components (Customer App, Vendor App, Delivery Agent App, Admin Web Dashboard). • Extensive Backend Architecture: Delivered 40+ modular REST API feature route modules and 30+ relational database entities managing the full ordering lifecycle. • Low-Latency Dispatch Engine: Validated automated queue-based agent assignment executing on 10-second polling cycles with 60-second expiration timeouts. • Deployment Pipelines: Configured staging (juda-staging-api.dhigrowth.com) and production (juda-api.dhigrowth.com) environments with AWS RDS and S3 integration. • Business Growth & Revenue Metrics: Business result requires confirmation"
    ],
    "link": "https://play.google.com/store/apps/details?id=com.judah.fooddelivery&hl=en_IN • Apple App Store URL: https://apps.apple.com/in/app/judah-delivery/id6758565796 • Production API Endpoint: https://juda-api.dhigrowth.com/api/v1 • Staging API Endpoint: https://juda-staging-api.dhigrowth.com/api/v1",
    "image": "/images/cc_highlight_store.jpg"
  },
  {
    "slug": "ruts-n-rides",
    "title": "Ruts N Rides",
    "subtitle": "Motorsports Training & Rider Experience Platform",
    "category": "Sports Tech",
    "brandColor": "#e11d48",
    "tl": "gokilavani",
    "about": "Ruts N Rides is a purpose-built rider ecosystem created for motorcycle enthusiasts who want to learn, train, practice, and experience riding beyond the road.\n\nThe platform brings together professional motorcycle training programs, memberships, riding experiences, accommodation, a moto café, service facilities, and a growing rider community under one digital experience.\n\nOur objective was to transform the complete Ruts N Rides experience into a modern digital platform where riders can discover programs, understand training options, explore the facility, and take the next step toward booking their experience.\n\nInstead of building a conventional sports website, we created a digital experience that captures the energy, adventure, and community behind the Ruts N Rides brand.",
    "challenges": "Ruts N Rides offers multiple experiences for riders, from beginner training to more advanced dirt-riding programs and custom training. Communicating all of this while keeping the experience simple and exciting was the core challenge.\n\nThe key challenges included:\n\nPresenting multiple training programs clearly\nHelping riders identify the right training experience\nCommunicating memberships and their benefits\nShowcasing the complete rider ecosystem beyond training\nPresenting accommodation, café, and service facilities\nCreating a strong visual identity around motorsports\nBuilding trust through trainer profiles and rider testimonials\nCreating clear paths toward joining or booking programs\nMaking the experience engaging without compromising usability\nDesigning a responsive platform for mobile-first riders",
    "solutions": "We approached Ruts N Rides as a digital experience platform for the entire rider journey, rather than a simple training-centre website.\n\nThe solution focused on connecting discovery, training, membership, and community through one structured experience.\n\nWe implemented:\n\nTraining program discovery\nMembership presentation\nProgram-specific information\nStrong visual storytelling\nRider ecosystem showcase\nTrainer and team profiles\nCustomer testimonials\nFacility and experience presentation\nClear booking and enquiry CTAs\nContact and location experience\nResponsive web design\nScalable application architecture\n\nThe experience was structured around:\n\nDiscover → Choose → Train → Experience → Belong",
    "solutionBullets": [
      "We approached Ruts N Rides as a digital experience platform for the entire rider journey, rather than a simple training-centre website.",
      "The solution focused on connecting discovery, training, membership, and community through one structured experience.",
      "We implemented:",
      "Training program discovery",
      "Membership presentation",
      "Program-specific information",
      "Strong visual storytelling",
      "Rider ecosystem showcase",
      "Trainer and team profiles",
      "Customer testimonials",
      "Facility and experience presentation",
      "Clear booking and enquiry CTAs",
      "Contact and location experience",
      "Responsive web design",
      "Scalable application architecture",
      "The experience was structured around:",
      "Discover → Choose → Train → Experience → Belong"
    ],
    "productExperience": "The Ruts N Rides website is designed to make visitors feel the experience before they arrive at the track.\n\nThe journey begins with the brand's core promise of turning amateurs into athletes, followed by training programs and membership opportunities. Riders can explore options such as Ruts Foundation, Ruts Dirt Training, and Custom Training.\n\nThe platform then expands the experience beyond training by introducing the broader rider ecosystem — including the Moto Café, accommodation, service station, and campfire experiences.\n\nTrainer profiles and rider testimonials add another layer of credibility, allowing potential customers to understand the people and community behind the experience.\n\nThe result is a website that doesn't simply explain what Ruts N Rides offers.\n\nIt makes visitors want to ride.",
    "highlights": [
      "Complete Rider Ecosystem — Goes beyond training to include accommodation, café, service, and community experiences.",
      "Training Program Discovery — Makes different riding programs easy to explore and understand.",
      "Membership Experience — Presents annual membership and its associated benefits clearly.",
      "Adventure-Focused UX — Visual storytelling communicates the energy and excitement of motorsports.",
      "Trainer Showcase — Introduces the people behind the training and builds credibility.",
      "Social Proof — Rider testimonials communicate real experiences and strengthen trust.",
      "Conversion-Focused Journey — Clear CTAs guide riders toward starting training, joining, or getting in touch.",
      "Facility Experience — Presents the location as more than a track — as a destination for riders.",
      "Community Positioning — The platform helps establish Ruts N Rides as a rider-focused community rather than simply a training provider.",
      "Responsive Experience — Designed for riders browsing primarily from mobile devices.",
      "Scalable Architecture — Built to support additional programs, events, memberships, and digital experiences."
    ],
    "techStack": [
      "React.js, node.js"
    ],
    "scope": "Our scope covered the complete digital experience for Ruts N Rides, including:\n\nProduct and experience architecture\nUI/UX implementation\nFrontend development\nBackend development\nTraining program presentation\nMembership experience\nProgram discovery\nTrainer profiles\nRider testimonials\nFacility and experience showcase\nAccommodation presentation\nMoto Café presentation\nService facility presentation\nBooking and enquiry journeys\nContact and location functionality\nResponsive web development\nAPI and backend integration\nPerformance optimisation\nCross-device compatibility\nScalable application architecture\nDeployment support",
    "results": [
      "The new Ruts N Rides platform transformed the brand's digital presence into a complete digital destination for motorcycle enthusiasts.",
      "Instead of presenting training as a standalone service, the platform communicates the larger Ruts N Rides ecosystem — combining training, memberships, facilities, hospitality, services, and community into one cohesive experience.",
      "The website now gives potential riders a clear path from discovering the brand to understanding its programs, exploring the experience, building confidence through testimonials, and taking action.",
      "More importantly, the platform captures something that traditional sports websites often miss:",
      "the emotion behind the experience.",
      "We didn't just build a website for a motorcycle training academy.",
      "We built a digital experience that makes riders want to get on the bike and start their journey."
    ],
    "link": "https://rutsnrides.com/",
    "image": "/images/case-studies/ruts-n-rides/showcase_1.png"
  },
  {
    "slug": "ruts-n-rides-admin",
    "title": "Ruts N Rides",
    "subtitle": "Training, Booking & Operations Management System",
    "category": "Operations SaaS",
    "brandColor": "#8b5cf6",
    "tl": "gokilavani",
    "about": "Behind every successful training centre is a complex set of daily operations — bookings, clients, trainers, attendance, payments, invoices, expenses, leads, and reporting.\n\nRuts N Rides needed a centralised system to bring all of these operations together.\n\nWe designed and developed a custom internal management platform that gives the Ruts N Rides team complete visibility and control over their day-to-day operations.\n\nFrom the first customer enquiry to booking, training attendance, payment collection, invoicing, and financial reporting, the entire operational workflow is managed through one unified system.\n\nOne platform. One source of truth. Complete operational visibility.",
    "challenges": "Before centralising operations, managing a training business with multiple programs, trainers, clients, bookings, and financial transactions can quickly become complex.\n\nThe key challenges included:\n\nManaging client information across different records\nCoordinating multiple bookings and training programs\nManaging trainer schedules and availability\nTracking client attendance\nTracking trainer attendance\nMonitoring pending payments and outstanding dues\nGenerating and managing invoices\nRecording operational expenses\nMaintaining complete client training history\nManaging leads and marketing communication\nGenerating useful operational and financial reports\nMaintaining accountability across internal activities\nReducing dependency on manual spreadsheets and disconnected processes\n\nThe challenge wasn't simply to digitise individual tasks.\n\nIt was to connect the entire business operation into one intelligent workflow.",
    "solutions": "We developed a centralised Ruts N Rides Management System that connects every major operational function through a single dashboard.\n\nThe platform brings together:\n\nBookings → Clients → Training → Attendance → Payments → Finance → Marketing → Reports\n\nKey solutions include:\n\nCentralised client management\nBooking and calendar management\nTraining program management\nTrainer management\nClient attendance tracking\nTrainer attendance tracking\nClient training history\nInvoice management\nPayment tracking\nExpense management\nFinancial reporting\nLead management\nBulk messaging\nNewsletter management\nActivity logs\nAdministrative settings\nReal-time operational dashboard\n\nThe system was designed to give the management team the right information at the right time, without having to search across multiple tools.",
    "solutionBullets": [
      "We developed a centralised Ruts N Rides Management System that connects every major operational function through a single dashboard.",
      "The platform brings together:",
      "Bookings → Clients → Training → Attendance → Payments → Finance → Marketing → Reports",
      "Key solutions include:",
      "Centralised client management",
      "Booking and calendar management",
      "Training program management",
      "Trainer management",
      "Client attendance tracking",
      "Trainer attendance tracking",
      "Client training history",
      "Invoice management",
      "Payment tracking",
      "Expense management",
      "Financial reporting",
      "Lead management",
      "Bulk messaging",
      "Newsletter management",
      "Activity logs",
      "Administrative settings",
      "Real-time operational dashboard",
      "The system was designed to give the management team the right information at the right time, without having to search across multiple tools."
    ],
    "productExperience": "The product experience starts with a centralised operational dashboard.\n\nManagement can immediately see critical business information such as total clients, monthly revenue, pending dues, expenses, and net financial position, providing a quick snapshot of the organisation's current status.\n\nFrom there, each operational area has its own dedicated workflow.\n\nThe Calendar and Bookings modules provide visibility into upcoming training activities. The Clients module centralises customer information, while Programs & Trainers allows the team to manage training offerings and the trainers responsible for delivering them.\n\nAttendance is managed digitally for both clients and trainers, while Client History creates a complete record of an individual's training journey.\n\nThe finance modules bring payments, invoices, expenses, and reports together, giving management better visibility into cash flow and outstanding balances.\n\nThe platform also extends beyond daily operations through Leads, Bulk Messaging, Newsletter, and Activity Logs, connecting customer acquisition, communication, and internal accountability.\n\nThe result is an internal system that acts as the operating backbone of Ruts N Rides.",
    "highlights": [
      "Centralised Operations Dashboard — Provides management with an instant overview of business performance.",
      "Complete Booking Management — Manage bookings and scheduled training activities from one place.",
      "Calendar-Based Operations — Provides a structured view of upcoming programs and sessions.",
      "Client Management — Maintain centralised customer records and information.",
      "Program & Trainer Management — Manage training programs and assigned trainers efficiently.",
      "Digital Attendance — Track both client and trainer attendance digitally.",
      "Client Training History — Maintain a complete record of a client's training journey.",
      "Invoice Management — Generate and manage customer invoices within the system.",
      "Payment Tracking — Monitor paid amounts, pending payments, and outstanding dues.",
      "Expense Management — Record and track operational expenses.",
      "Financial Reporting — Provide management with actionable financial visibility.",
      "Lead Management — Capture and organise prospective customer information.",
      "Bulk Communication — Support communication with customers and leads at scale.",
      "Activity Logs — Maintain visibility into important administrative activities.",
      "Role-Based Operational Structure — Organises different areas of the business into dedicated workflows.",
      "Scalable Architecture — Built to support the organisation as its operations grow."
    ],
    "techStack": [
      "Frontend: React.js\nBackend: Node.js"
    ],
    "scope": "Our scope covered the complete design and development of the internal management platform, including:\n\nOperations\nDashboard\nCalendar management\nClient management\nBooking management\nInvoice management\nTraining Management\nPrograms & Trainers\nClient attendance\nTrainer attendance\nClient training history\nTraining workflow management\nFinance\nPayment management\nExpense management\nFinancial reports\nPending dues tracking\nRevenue monitoring\nMarketing\nLead management\nBulk messaging\nNewsletter management\nAdministration\nSystem settings\nActivity logs\nAdministrative controls\nUser access and operational management\nTechnical Development\nUI/UX implementation\nFrontend development\nBackend development\nDatabase architecture\nAPI development\nBusiness workflow implementation\nDashboard and analytics\nResponsive application experience\nPerformance optimisation\nSecurity and access management\nDeployment and production support",
    "results": [
      "The Ruts N Rides Management System transformed a collection of operational tasks into a single, connected business management platform.",
      "The team can now manage clients, bookings, training programs, attendance, payments, invoices, expenses, leads, and reports from one centralised system.",
      "Management also gains immediate visibility into key business indicators such as revenue, outstanding payments, expenses, and operational activity, making it easier to identify what needs attention.",
      "More importantly, the system creates a structured digital record of every important interaction — from a customer's first booking to their training history and payment status.",
      "The result is less manual administration, better operational visibility, and a more organised way of running the training centre.",
      "We didn't just build an internal dashboard.",
      "We built the operating system behind Ruts N Rides."
    ],
    "link": "Public Website:\nhttps://rutsnrides.com/",
    "image": "/images/cc_highlight_category.jpg"
  },
  {
    "slug": "verdurepax",
    "title": "VerdurePax",
    "subtitle": "Gardening & Plant Lifestyle E-Commerce Platform",
    "category": "E-Commerce",
    "brandColor": "#16a34a",
    "tl": "mathan",
    "about": "VerdurePax is a modern gardening and plant lifestyle brand built around the idea of making green spaces more beautiful, functional, and accessible.\n\nThe platform brings together a wide range of gardening essentials — from premium plant stands, pots, plants, seeds, and fertilizers to soil products, gardening tools, grow bags, and terrace gardening solutions.\n\nOur goal was to transform this diverse product catalogue into a visually engaging, easy-to-navigate e-commerce experience that makes discovering and purchasing gardening products simple.\n\nThe result is a digital storefront where gardening meets lifestyle, design, and convenience.",
    "challenges": "VerdurePax operates across multiple gardening categories, each with different product types, use cases, and customer needs.\n\nThe key challenges included:\n\nOrganising a diverse gardening catalogue into intuitive categories\nMaking a large number of products easy to discover\nCreating a visually appealing experience for a lifestyle-oriented brand\nPresenting premium plant stands and décor products effectively\nMaking product information easy to understand\nCreating a frictionless shopping journey\nSupporting customers across India with a clear delivery experience\nBuilding trust through returns, support, and product quality messaging\nCreating a responsive experience across mobile and desktop devices\nBuilding a scalable foundation for a growing product catalogue",
    "solutions": "We approached VerdurePax as a complete D2C e-commerce experience, combining product discovery, visual storytelling, and conversion-focused shopping journeys.\n\nOur solution included:\n\nStructured product categories\nDedicated collections for stands, plants, seeds, pots, and plant care\nVisually rich product discovery\nPremium product showcase sections\nClear product information and pricing\nShopping and add-to-cart functionality\nCOD availability\nShipping and return information\nCustomer support touchpoints\nTestimonials and social proof\nTerrace gardening and landscaping presentation\nResponsive web experience\nScalable e-commerce architecture\n\nThe customer journey was designed around:\n\nDiscover → Explore → Choose → Purchase → Grow",
    "solutionBullets": [
      "We approached VerdurePax as a complete D2C e-commerce experience, combining product discovery, visual storytelling, and conversion-focused shopping journeys.",
      "Our solution included:",
      "Structured product categories",
      "Dedicated collections for stands, plants, seeds, pots, and plant care",
      "Visually rich product discovery",
      "Premium product showcase sections",
      "Clear product information and pricing",
      "Shopping and add-to-cart functionality",
      "COD availability",
      "Shipping and return information",
      "Customer support touchpoints",
      "Testimonials and social proof",
      "Terrace gardening and landscaping presentation",
      "Responsive web experience",
      "Scalable e-commerce architecture",
      "The customer journey was designed around:",
      "Discover → Explore → Choose → Purchase → Grow"
    ],
    "productExperience": "VerdurePax was designed to feel less like a traditional online catalogue and more like a digital gardening destination.\n\nThe homepage introduces customers to the brand through curated product collections and visually driven inspiration. Customers can then explore dedicated categories such as stands, plants, seeds, pots, and plant care products.\n\nThe experience places particular emphasis on plant stands and décor, allowing customers to discover different styles ranging from modern metal stands to marble-finish and multi-tier designs.\n\nThe platform also reinforces the purchasing experience with features such as COD, pan-India delivery, returns, customer support, and quality-focused messaging, helping reduce friction between product discovery and purchase.\n\nThe result is a shopping experience designed to make customers think beyond simply buying a product — and start imagining how that product will transform their space.",
    "highlights": [
      "D2C E-Commerce Experience — Built around direct-to-consumer gardening and lifestyle shopping.",
      "Multi-Category Marketplace — Plants, stands, pots, seeds, fertilizers, soil products, tools, and more are organised within one platform.",
      "Premium Product Showcase — Strong visual presentation for decorative and premium plant stands.",
      "Lifestyle-Focused UX — Products are presented in the context of homes, balconies, patios, and living spaces.",
      "Smart Product Discovery — Structured categories help customers find relevant gardening products quickly.",
      "Conversion-Focused Shopping — Product pages and purchase actions are designed to move customers smoothly toward checkout.",
      "Customer Confidence — Delivery, returns, support, and quality messaging help reinforce trust.",
      "Pan-India Shopping Experience — Built to support customers across India.",
      "Responsive Design — Optimised for mobile, tablet, and desktop users.",
      "Scalable Catalogue Architecture — Designed to accommodate an expanding range of gardening products.",
      "Content + Commerce — Combines product selling with gardening inspiration and lifestyle storytelling."
    ],
    "techStack": [
      "Next.js, node.js"
    ],
    "scope": "Our scope covered the complete digital e-commerce experience, including:\n\nE-commerce strategy and architecture\nUI/UX implementation\nFrontend development\nBackend development\nProduct catalogue architecture\nCategory and collection management\nProduct discovery experience\nProduct detail pages\nShopping cart experience\nCheckout journey\nOrder management\nPayment and COD workflows\nShipping and delivery experience\nReturns and customer support flows\nTestimonials and trust-building sections\nResponsive web development\nAPI and backend integration\nPerformance optimisation\nScalable application architecture\nDeployment support",
    "results": [
      "VerdurePax was transformed into a modern digital commerce destination for gardening and plant lifestyle products.",
      "The platform brings a diverse product ecosystem together under one cohesive shopping experience, allowing customers to discover everything from decorative plant stands and pots to plants, seeds, fertilizers, and gardening essentials.",
      "The result is more than a conventional e-commerce website. It combines product discovery, visual inspiration, trust, and commerce into one digital experience — helping VerdurePax turn its passion for gardening into a scalable online business.",
      "We didn't just build an online gardening store.",
      "We built a digital space where customers can discover products, imagine their perfect green space, and bring it to life."
    ],
    "link": "https://www.verdurepax.com/",
    "image": "/images/case-studies/verdurepax/showcase_3.jpeg"
  },
  {
    "slug": "befhue",
    "title": "BEFHUE",
    "subtitle": "Creative Agency Digital Experience & Brand Platform",
    "category": "Creative Agency",
    "brandColor": "#ec4899",
    "tl": "gokilavani",
    "about": "BEFHUE is a creative and digital growth company that brings together branding, design, video production, digital marketing, UI/UX, and technology to help businesses build stronger digital identities.\n\nThe challenge was to translate that wide range of creative and technology capabilities into a single digital experience that feels as creative as the work BEFHUE delivers.\n\nWe designed and developed a modern, visually driven website that combines brand storytelling, service discovery, portfolio presentation, and lead generation into one cohesive platform.\n\nThe result is a digital presence designed not just to showcase what BEFHUE does, but to communicate why businesses should trust them with their brand.",
    "challenges": "BEFHUE operates across multiple creative and digital disciplines. Presenting such a broad service portfolio without making the website feel crowded was one of the primary challenges.\n\nThe key challenges included:\n\nCommunicating multiple services through one cohesive brand experience\nBalancing creativity with professional business communication\nMaking a broad service portfolio easy to explore\nCreating an engaging way to showcase creative work\nEstablishing credibility with potential clients\nCommunicating the company's strategic approach rather than only its creative capabilities\nCreating strong enquiry and conversion journeys\nMaintaining a visually rich experience without compromising usability\nBuilding a responsive and scalable digital platform",
    "solutions": "We approached BEFHUE as a digital brand experience, not a conventional agency website.\n\nThe solution focused on bringing the company's creative personality and business positioning together through:\n\nA visually engaging hero experience\nClear service architecture\nStrategic presentation of branding, design, marketing, and production capabilities\nPortfolio and project discovery\nStrong brand messaging\nClient testimonial sections\nStrategic calls-to-action\nStructured contact and enquiry journeys\nResponsive layouts across devices\nPerformance-focused implementation\nScalable frontend and backend architecture\n\nThe user journey was designed around:\n\nDiscover → Explore → Experience → Trust → Connect",
    "solutionBullets": [
      "We approached BEFHUE as a digital brand experience, not a conventional agency website.",
      "The solution focused on bringing the company's creative personality and business positioning together through:",
      "A visually engaging hero experience",
      "Clear service architecture",
      "Strategic presentation of branding, design, marketing, and production capabilities",
      "Portfolio and project discovery",
      "Strong brand messaging",
      "Client testimonial sections",
      "Strategic calls-to-action",
      "Structured contact and enquiry journeys",
      "Responsive layouts across devices",
      "Performance-focused implementation",
      "Scalable frontend and backend architecture",
      "The user journey was designed around:",
      "Discover → Explore → Experience → Trust → Connect"
    ],
    "productExperience": "The BEFHUE website is built around visual storytelling.\n\nInstead of immediately overwhelming visitors with a long list of services, the experience establishes the brand first and then gradually introduces its capabilities, philosophy, vision, work, and client experiences.\n\nThe platform allows visitors to explore areas including brand identity, UI/UX, web development, digital marketing, SEO/SEM, video production, motion graphics, and social media marketing.\n\nThe experience also uses client feedback and portfolio-led storytelling to strengthen credibility and demonstrate the breadth of BEFHUE's work.\n\nThe result is a website that feels like an interactive portfolio, brand presentation, and business development tool combined into one experience.",
    "highlights": [
      "Creative-First Digital Experience — Designed to reflect BEFHUE's creative DNA from the first interaction.",
      "Multi-Service Architecture — Organises branding, design, development, marketing, and production services into a clear structure.",
      "Visual Storytelling — Uses strong visual sections to communicate capabilities and brand personality.",
      "Portfolio-Focused Experience — Makes creative work a central part of the customer journey.",
      "Trust-Building Content — Client testimonials and company positioning help strengthen credibility.",
      "Conversion-Focused UX — Strategic CTAs encourage visitors to start a conversation.",
      "Integrated Brand Positioning — Communicates BEFHUE as more than a marketing agency, presenting it as a creative and technology partner.",
      "Responsive Design — Optimised for desktop, tablet, and mobile experiences.",
      "Scalable Architecture — Built to accommodate new services, projects, content, and future business growth.",
      "Performance & SEO Mindset — Structured around modern web development principles and user experience."
    ],
    "techStack": [
      "Next.js, node.js"
    ],
    "scope": "Our scope covered the complete digital experience for BEFHUE, including:\n\nDigital product strategy\nUI/UX implementation\nBrand experience development\nFrontend development\nBackend development\nService architecture\nPortfolio/project presentation\nClient testimonial experience\nLead-generation journeys\nContact and enquiry functionality\nResponsive web development\nAPI and backend integration\nPerformance optimisation\nCross-device compatibility\nScalable application architecture\nDeployment support",
    "results": [
      "The new BEFHUE platform transformed the company's online presence into a creative, professional, and conversion-oriented digital experience.",
      "The website brings BEFHUE's diverse capabilities together under one cohesive digital identity, allowing potential customers to understand the company's services, experience its creative approach, explore its work, and initiate a conversation.",
      "More importantly, the platform positions the website as an active part of the business — not simply an online brochure, but a digital showcase, credibility builder, and lead-generation channel.",
      "The final experience successfully bridges the gap between creativity and business growth.",
      "We didn't just build a website for a creative agency.",
      "We built a digital experience that feels like the agency itself."
    ],
    "link": "https://befhue.com/",
    "image": "/images/case-studies/befhue/showcase_3.webp"
  },
  {
    "slug": "squirlio",
    "title": "Squirlio",
    "subtitle": "Squirlio",
    "category": "App Platform",
    "brandColor": "#6366f1",
    "tl": "akila",
    "about": "Squirlio is a premium e-commerce platform dedicated to offering healthy, nutrient-rich snacks. Built with a focus on a seamless user experience, the platform enables customers to discover, customize, and purchase high-quality snacks effortlessly. It features an intuitive storefront, robust cart management, and a streamlined direct-to-payment checkout process.",
    "challenges": "Complex Session Management: Designing a checkout architecture that supports both a standard multi-step shopping cart and a lightning-fast \"Reorder\" flow without the two data states colliding or overwriting each other.\r\nReal-Time Inventory Integrity: Ensuring strict inventory validation across complex product variants (e.g., different weights) so users are never allowed to purchase out-of-stock or discontinued items.\r\nDynamic Pricing & Shipping: Calculating accurate cart totals, GST, coupon discounts, and dynamic shipping rates based on real-time pincode serviceability without causing UI latency.",
    "solutions": "Isolated Checkout Sessions: Implemented a temporary, detached session architecture for Reorders. This allows returning customers to bypass the cart and jump directly to payment while keeping their normal active shopping cart completely untouched.\r\nCentralized Calculation Engine: Developed a robust backend checkout service that acts as the single source of truth for pricing, automatically fast-forwarding valid sessions to the Razorpay payment gateway.\r\nStrict \"All-or-Nothing\" Validation: Enforced server-side stock checks before checkout initialization. If a product in a reorder is unavailable, the system gracefully halts the process and notifies the user rather than processing a partial order.",
    "solutionBullets": [
      "Isolated Checkout Sessions: Implemented a temporary, detached session architecture for Reorders. This allows returning customers to bypass the cart and jump directly to payment while keeping their normal active shopping cart completely untouched.",
      "Centralized Calculation Engine: Developed a robust backend checkout service that acts as the single source of truth for pricing, automatically fast-forwarding valid sessions to the Razorpay payment gateway.",
      "Strict \"All-or-Nothing\" Validation: Enforced server-side stock checks before checkout initialization. If a product in a reorder is unavailable, the system gracefully halts the process and notifies the user rather than processing a partial order."
    ],
    "productExperience": "Squirlio delivers a visually rich, premium, and highly responsive shopping experience. The UI features dynamic micro-animations, clear real-time stock indicators, and an intuitive \"stepper\" checkout that keeps users informed at every stage. Customers can easily manage complex carts with varied product weights, or use the \"Reorder\" feature to complete repeat purchases in a matter of seconds with minimal friction.",
    "highlights": [
      "Direct-to-Payment Reorder: A 1-click reorder system that validates past purchases against live inventory and fast-forwards the user directly to the payment step.",
      "Real-time Delivery & COD Validation: Instant pincode serviceability checks that automatically calculate estimated delivery days and dynamically enable or disable Cash on Delivery (COD).",
      "Single Source of Truth: Synchronized state management ensuring that the frontend UI and backend PostgreSQL database always reflect the exact same pricing and inventory data."
    ],
    "techStack": [
      "Frontend: Next.js,Tailwind CSS, TypeScript, Context API\nBackend: Node.js, Express, TypeScript, Sequelize ORM\nDatabase: PostgreSQL\nIntegrations: Razorpay API (Online Payments)"
    ],
    "scope": "The project encompassed the end-to-end development of the customer-facing storefront and backend logic. This included product discovery pages, dynamic cart management, user authentication, address book management, order history tracking, and a highly secure multi-step checkout pipeline.",
    "results": [
      "A highly scalable, performant, and secure e-commerce application that reduces cart abandonment through fast-tracked checkout options. The platform provides a flawless, bug-free user journey from product discovery to payment, ensuring a premium brand experience that aligns perfectly with Squirlio's healthy snacking mission."
    ],
    "link": "",
    "image": "/images/case-studies/squirlio/banner_1.jpeg"
  },
  {
    "slug": "amaravathy-coir",
    "title": "Amaravathy Coir",
    "subtitle": "Sustainable Coir Manufacturing & Export Platform",
    "category": "Manufacturing",
    "brandColor": "#ca8a04",
    "tl": "mathan",
    "about": "Amaravathy Coir Producer Company Limited is a Tamil Nadu-based coir enterprise focused on producing sustainable coir fibre, yarn-dyed products, and premium coir solutions for domestic and international markets. The company combines natural materials with modern manufacturing processes to deliver durable and eco-friendly products.\n\nWe transformed this industrial capability into a modern digital experience designed to communicate quality, sustainability, manufacturing strength, and global readiness.\n\nThe objective was to create a website that would not only showcase products, but also establish Amaravathy Coir as a credible and reliable partner for distributors, exporters, and industry buyers.",
    "challenges": "The biggest challenge was translating a technically driven manufacturing business into a digital experience that could be understood quickly by both domestic and international audiences.\n\nThe key challenges included:\n\nCommunicating a complex manufacturing business in a simple way\nPresenting multiple coir products without overwhelming visitors\nEstablishing credibility with international buyers\nHighlighting manufacturing capabilities and production scale\nCommunicating sustainability as a core business value\nBuilding trust around quality and export readiness\nCreating clear enquiry paths for bulk and customised requirements\nMaking the website accessible across desktop, tablet, and mobile devices",
    "solutions": "We approached the project as a B2B digital sales and credibility platform, rather than a conventional manufacturing website.\n\nThe solution focused on presenting Amaravathy Coir's capabilities through a clear, structured, and visually engaging experience.\n\nWe implemented:\n\nA strong manufacturing-focused homepage\nStructured product discovery and presentation\nClear communication of production capabilities\nDedicated sustainability messaging\nManufacturing and infrastructure highlights\nExport-focused business positioning\nClear quotation and enquiry CTAs\nFAQ-driven customer information\nResponsive design across devices\nScalable frontend and backend architecture\n\nThe experience was structured around a simple buyer journey:\n\nDiscover → Understand → Evaluate → Enquire",
    "solutionBullets": [
      "We approached the project as a B2B digital sales and credibility platform, rather than a conventional manufacturing website.",
      "The solution focused on presenting Amaravathy Coir's capabilities through a clear, structured, and visually engaging experience.",
      "We implemented:",
      "A strong manufacturing-focused homepage",
      "Structured product discovery and presentation",
      "Clear communication of production capabilities",
      "Dedicated sustainability messaging",
      "Manufacturing and infrastructure highlights",
      "Export-focused business positioning",
      "Clear quotation and enquiry CTAs",
      "FAQ-driven customer information",
      "Responsive design across devices",
      "Scalable frontend and backend architecture",
      "The experience was structured around a simple buyer journey:",
      "Discover → Understand → Evaluate → Enquire"
    ],
    "productExperience": "The Amaravathy Coir website is designed to give potential buyers a clear understanding of the company before they ever make an enquiry.\n\nThe experience introduces the brand and its manufacturing capabilities, followed by product discovery, production highlights, sustainability practices, and important information for potential buyers.\n\nThe website communicates the company's capabilities through measurable business information — including matting capacity, dyeing capacity, production capability, and export readiness.\n\nA major part of the experience is sustainability. The platform highlights Amaravathy Coir's advanced Effluent Treatment Plant and Zero Liquid Discharge approach, where wastewater from the dyeing process is treated, recycled, and reused.\n\nThis helps transform sustainability from a marketing statement into a visible part of the company's manufacturing story.",
    "highlights": [
      "B2B-Focused Digital Experience — Designed for distributors, exporters, industry partners, and bulk buyers.",
      "Manufacturing Capability Showcase — Production capabilities are presented through clear, measurable highlights.",
      "Global Positioning — The platform communicates the company's readiness to serve domestic and international markets.",
      "Sustainability Storytelling — Environmental responsibility is integrated directly into the digital experience.",
      "Product Discovery — Coir products are presented through a structured and visually engaging interface.",
      "Trust-Building Content — Manufacturing capabilities, processes, FAQs, and company information strengthen buyer confidence.",
      "Conversion-Focused Enquiries — Clear \"Get Quote\" and enquiry touchpoints guide potential buyers toward business conversations.",
      "Responsive Experience — Optimised for desktop, tablet, and mobile users.",
      "Scalable Architecture — Built to support future products, capabilities, and digital enhancements."
    ],
    "techStack": [
      "Next.js, node.js"
    ],
    "scope": "Our scope covered the complete digital transformation of Amaravathy Coir's online presence, including:\n\nUI/UX implementation\nCorporate website development\nFrontend development\nBackend development\nProduct presentation\nManufacturing capability showcase\nSustainability content experience\nExport-focused information architecture\nBusiness enquiry and quotation journey\nFAQ implementation\nResponsive web development\nAPI and backend integration\nPerformance optimisation\nCross-device compatibility\nScalable application architecture\nDeployment support",
    "results": [
      "The new Amaravathy Coir platform transformed the company's digital presence into a professional B2B experience built around manufacturing strength, sustainability, and global business opportunities.",
      "Instead of simply listing products, the website tells the complete story — what Amaravathy Coir produces, how it manufactures, what makes its process sustainable, and why international buyers can consider the company as a reliable supply partner.",
      "The result is a digital platform that works as more than a corporate website. It functions as a digital sales and credibility layer, helping potential buyers understand the company and move confidently toward an enquiry.",
      "We didn't just build a website for a manufacturer.",
      "We built a digital gateway connecting sustainable Indian manufacturing with global markets."
    ],
    "link": "https://amaravathycoir.com/",
    "image": "/images/case-studies/amaravathy/hero.png"
  },
  {
    "slug": "sales-app",
    "title": "Sales App",
    "subtitle": "Sales App",
    "category": "Enterprise App",
    "brandColor": "#0284c7",
    "tl": "jayaraj",
    "about": "LeadNova CRM is a mobile-based customer relationship management application designed to help sales teams manage leads, follow-ups, activities, and the complete sales pipeline efficiently. It provides a centralized platform for tracking customer interactions, monitoring sales performance, and managing leads from initial contact through successful deal closure.",
    "challenges": "The main challenge was to design a simple and efficient CRM system for managing leads, follow-ups, sales activities, and pipeline stages. Another challenge was ensuring accurate real-time data, secure authentication, and a user-friendly experience across all application modules.",
    "solutions": "LeadNova CRM provides a centralized system to manage leads, follow-ups, activities, and sales pipeline stages efficiently.\nIt improves productivity through real-time dashboard insights, automated reminders, secure authentication, and simple navigation",
    "solutionBullets": [
      "LeadNova CRM provides a centralized system to manage leads, follow-ups, activities, and sales pipeline stages efficiently.",
      "It improves productivity through real-time dashboard insights, automated reminders, secure authentication, and simple navigation"
    ],
    "productExperience": "LeadNova CRM provides a simple and user-friendly experience that helps sales teams manage leads, follow-ups, and customer activities from a single mobile application.\nThe clear dashboard, quick actions, and organized workflow make it easy for users to monitor sales progress and complete daily tasks efficiently.",
    "highlights": [
      "Centralized lead and customer management.",
      "Real-time sales pipeline and performance tracking.",
      "Smart search, filters, and follow-up reminders.",
      "Quick communication and activity tracking.",
      "Simple, user-friendly mobile experience."
    ],
    "techStack": [
      "Frontend: Flutter, Dart\nBackend: REST API\nAuthentication: JWT Authentication, Flutter Secure Storage\nDatabase: Backend database\nCharts: Conversion Area Chart\nCommunication: Phone Dialer, WhatsApp, Email Integration"
    ],
    "scope": "LeadNova CRM covers the complete sales management process, including lead creation, pipeline tracking, follow-up management, activity monitoring, notifications, and sales performance analysis.",
    "results": [
      "LeadNova CRM provides a centralized platform for efficient lead management, follow-up tracking, and sales pipeline monitoring.",
      "It improves team productivity by providing real-time insights, organized customer activities, and easy access to essential sales operations."
    ],
    "link": "APP",
    "image": "/images/cc_highlight_product.jpg"
  },
  {
    "slug": "keystone",
    "title": "Keystone",
    "subtitle": "Corporate Digital Transformation Platform",
    "category": "Enterprise Digital",
    "brandColor": "#059669",
    "tl": "sanjai",
    "about": "KIIPL needed a strong digital presence that could communicate its business identity, capabilities, and professional approach to customers and stakeholders.\n\nWe designed and developed a modern corporate website that transforms the company's offline presence into a structured, professional, and engaging digital experience.\n\nThe objective was to create more than an informational website — it was to build a digital platform that establishes credibility, communicates value clearly, and creates a strong first impression.",
    "challenges": "For a corporate organisation, the website needs to balance professionalism with simplicity. Visitors should be able to understand the organisation quickly while still having access to detailed information when required.\n\nThe key challenges included:\n\nEstablishing a strong and credible digital identity\nPresenting business information in a structured manner\nMaking important information easy to discover\nCreating a modern experience without compromising professionalism\nDesigning an intuitive navigation structure\nBuilding trust with potential customers and business stakeholders\nEnsuring the experience works seamlessly across devices\nCreating a scalable technical foundation for future growth",
    "solutions": "We approached KIIPL as a digital brand experience, rather than simply a corporate website.\n\nOur solution focused on clarity, credibility, and usability.\n\nWe implemented:\n\nA modern corporate website architecture\nStructured content and information hierarchy\nClean and professional UI/UX\nIntuitive navigation and user journeys\nStrategic calls-to-action\nResponsive layouts across devices\nOptimised frontend performance\nScalable backend architecture\nA flexible foundation for future enhancements\n\nThe experience was designed around a simple journey:\n\nDiscover → Understand → Trust → Connect",
    "solutionBullets": [
      "We approached KIIPL as a digital brand experience, rather than simply a corporate website.",
      "Our solution focused on clarity, credibility, and usability.",
      "We implemented:",
      "A modern corporate website architecture",
      "Structured content and information hierarchy",
      "Clean and professional UI/UX",
      "Intuitive navigation and user journeys",
      "Strategic calls-to-action",
      "Responsive layouts across devices",
      "Optimised frontend performance",
      "Scalable backend architecture",
      "A flexible foundation for future enhancements",
      "The experience was designed around a simple journey:",
      "Discover → Understand → Trust → Connect"
    ],
    "productExperience": "The KIIPL website provides visitors with a clear and organised way to understand the organisation and its digital presence.\n\nThe interface combines a professional corporate aesthetic with modern web experiences, allowing visitors to navigate naturally through the platform and access relevant information without unnecessary complexity.\n\nThe design gives every section a clear purpose — from establishing the brand identity to communicating important business information and guiding users toward meaningful interactions.\n\nThe result is a website that feels credible, modern, and business-ready.",
    "highlights": [
      "Professional Corporate Experience — Designed to establish credibility from the first interaction.",
      "Clear Information Architecture — Organised content makes important information easier to find.",
      "Modern UI/UX — A clean visual system creates a contemporary digital presence.",
      "Strong Brand Presentation — The website reflects the organisation's professional positioning.",
      "Intuitive Navigation — Users can move through the platform naturally.",
      "Conversion-Focused Structure — Strategic interaction points encourage users to connect with the business.",
      "Responsive Experience — Optimised for desktop, tablet, and mobile users.",
      "Scalable Architecture — Built to support future content, features, and business requirements."
    ],
    "techStack": [
      ""
    ],
    "scope": "Our scope covered the complete digital development of the KIIPL website, including:\n\nUI/UX implementation\nCorporate website development\nFrontend development\nBackend development\nInformation architecture\nContent structure and presentation\nResponsive web development\nUser journey optimisation\nAPI and backend integration\nPerformance optimisation\nCross-device compatibility\nScalable application architecture\nDeployment support",
    "results": [
      "The new KIIPL website provides the organisation with a modern, credible, and scalable digital presence.",
      "The platform makes the organisation easier to understand online while creating a more professional experience for customers, stakeholders, and visitors.",
      "By combining structured information, modern design, responsive development, and a scalable technical foundation, we transformed the website into more than an online presence — it became a digital representation of the organisation and its professional identity.",
      "We didn't just build a corporate website.",
      "We built a digital experience designed to create trust."
    ],
    "link": "https://kiipl.co.in/",
    "image": "/images/case-studies/keystone/hero.png"
  },
  {
    "slug": "vectra-mechnovations",
    "title": "Vectra Mechnovations",
    "subtitle": "Industrial Engineering & Manufacturing Website",
    "category": "Industrial Engineering",
    "brandColor": "#475569",
    "tl": "sanjai",
    "about": "Vectra Mechnovations needed a digital presence that could communicate its technical expertise, engineering capabilities, and professional approach to potential customers.\n\nWe designed and developed a modern, business-focused website that transforms complex industrial capabilities into a clear, structured, and credible digital experience.\n\nThe objective was simple — build a platform that doesn't just tell visitors what Vectra Mechnovations does, but gives them confidence in why they should choose them.",
    "challenges": "Industrial and engineering businesses often have a unique challenge: their expertise can be highly technical, while their digital communication needs to remain simple and accessible.\n\nThe key challenges were:\n\nPresenting technical capabilities in an easy-to-understand format\nEstablishing a strong and professional digital identity\nCommunicating the company's engineering expertise effectively\nStructuring information for quick discovery\nBuilding credibility with potential B2B customers\nCreating a modern website that reflects the company's technical capabilities\nEnsuring a seamless experience across desktop and mobile devices\nCreating a scalable foundation for future business growth",
    "solutions": "We approached the project as more than a conventional corporate website.\n\nWe created a digital business platform focused on credibility, clarity, and conversion.\n\nOur solution included:\n\nA modern corporate website architecture\nClear presentation of the company's capabilities\nStructured service and business information\nStrong visual hierarchy for technical content\nStrategic calls-to-action for customer enquiries\nProfessional layouts designed for B2B audiences\nResponsive experience across devices\nScalable frontend and backend architecture\nPerformance-focused implementation\n\nThe website was designed around a simple business journey:\n\nUnderstand → Trust → Explore → Connect",
    "solutionBullets": [
      "We approached the project as more than a conventional corporate website.",
      "We created a digital business platform focused on credibility, clarity, and conversion.",
      "Our solution included:",
      "A modern corporate website architecture",
      "Clear presentation of the company's capabilities",
      "Structured service and business information",
      "Strong visual hierarchy for technical content",
      "Strategic calls-to-action for customer enquiries",
      "Professional layouts designed for B2B audiences",
      "Responsive experience across devices",
      "Scalable frontend and backend architecture",
      "Performance-focused implementation",
      "The website was designed around a simple business journey:",
      "Understand → Trust → Explore → Connect"
    ],
    "productExperience": "The Vectra Mechnovations website is designed to make a technically driven business easier to understand online.\n\nVisitors can quickly understand the company's positioning, explore its capabilities, and find the information they need without navigating through unnecessary complexity.\n\nThe interface combines industrial professionalism with modern digital design, creating an experience that feels technically credible while remaining easy to navigate.\n\nEvery section has a purpose — whether it is communicating expertise, strengthening credibility, presenting capabilities, or encouraging potential customers to initiate a conversation.",
    "highlights": [
      "Professional B2B Experience — Designed specifically for a technical and business-oriented audience.",
      "Engineering-Focused Presentation — Complex capabilities are structured into clear and accessible digital content.",
      "Strong Brand Positioning — The visual language communicates professionalism, precision, and technical expertise.",
      "Conversion-Oriented UX — Strategic CTAs help transform website visitors into potential enquiries.",
      "Clear Information Architecture — Important company and capability information is easy to discover.",
      "Responsive Design — Optimised for desktop, tablet, and mobile experiences.",
      "Modern Visual System — A clean interface creates a strong first impression for prospective customers.",
      "Scalable Architecture — Developed with flexibility for future content, features, and business expansion."
    ],
    "techStack": [
      ""
    ],
    "scope": "Our scope covered the complete digital development of the Vectra Mechnovations platform, including:\n\nUI/UX implementation\nCorporate website development\nFrontend development\nBackend development\nInformation architecture\nService/capability presentation\nBusiness enquiry journey\nResponsive web development\nAPI and backend integration\nPerformance optimisation\nCross-device compatibility\nScalable application architecture\nDeployment support",
    "results": [
      "The new Vectra Mechnovations website provides the company with a stronger, more professional digital identity and a structured platform to communicate its engineering capabilities.",
      "The website turns technical expertise into an accessible digital experience — helping prospective customers understand the business, evaluate its capabilities, and take the next step.",
      "More than a corporate website, the platform now acts as a digital sales and credibility layer for the business, supporting Vectra Mechnovations as it continues to build its presence and reach new customers.",
      "We didn't just build their website.",
      "We built a digital representation of their engineering capabilities."
    ],
    "link": "",
    "image": "/images/cc_highlight_store.jpg"
  },
  {
    "slug": "sanikas-restaurant",
    "title": "Sanika’s Indian Cuisine",
    "subtitle": "Restaurant & Online Ordering Experience",
    "category": "Hospitality & Ordering",
    "brandColor": "#ea580c",
    "tl": "sanjai",
    "about": "Sanika’s Indian Cuisine brings the rich flavours of Indian cooking to Mt. Juliet, Tennessee, combining traditional recipes with a modern culinary approach. The restaurant offers an extensive menu covering everything from authentic Indian favourites and biryanis to tandoor specialities, dosas, Indo-Chinese dishes, desserts, and beverages.\n\nOur goal was to create a digital experience that captures the warmth and richness of the restaurant while making it effortless for customers to discover the menu, explore signature dishes, place orders, and connect with the restaurant.\n\nThe result is a modern restaurant platform that turns the online experience into an extension of the dining experience.",
    "challenges": "Sanika’s has a diverse menu and a strong culinary identity. The challenge was to communicate that variety without overwhelming customers.\n\nThe key challenges included:\n\nPresenting a large and diverse menu in an easy-to-navigate format\nCreating a digital experience that reflects the restaurant’s authentic Indian identity\nMaking signature dishes visually and contextually engaging\nConnecting customers quickly to online ordering\nBuilding trust through customer reviews and restaurant information\nMaking essential information such as location, contact details, hours, and ordering options easily accessible\nDelivering a consistent experience across desktop and mobile devices",
    "solutions": "We designed and developed a customer-focused restaurant experience where food discovery and ordering take centre stage.\n\nOur solution included:\n\nA visually engaging restaurant homepage\nStructured menu categories for faster discovery\nDedicated presentation of signature and popular dishes\nClear food descriptions to help customers make decisions\nProminent online ordering touchpoints\nCustomer review sections to build social proof\nRestaurant location and contact information\nFAQ section for common customer questions\nResponsive design across devices\nA scalable React.js and Node.js architecture\n\nThe experience was designed around a simple customer journey:\n\nDiscover → Explore → Decide → Order",
    "solutionBullets": [
      "We designed and developed a customer-focused restaurant experience where food discovery and ordering take centre stage.",
      "Our solution included:",
      "A visually engaging restaurant homepage",
      "Structured menu categories for faster discovery",
      "Dedicated presentation of signature and popular dishes",
      "Clear food descriptions to help customers make decisions",
      "Prominent online ordering touchpoints",
      "Customer review sections to build social proof",
      "Restaurant location and contact information",
      "FAQ section for common customer questions",
      "Responsive design across devices",
      "A scalable React.js and Node.js architecture",
      "The experience was designed around a simple customer journey:",
      "Discover → Explore → Decide → Order"
    ],
    "productExperience": "The website was designed to make customers feel connected to the restaurant even before they walk through the door.\n\nThe experience begins with Sanika’s culinary identity and moves naturally into its signature dishes and extensive menu. Customers can explore categories such as soups, starters, entrees, chef’s specials, naan, dosa, tandoor, kebab, biryani, Indo-Chinese, desserts, and more.\n\nInstead of presenting the menu as a static list, the platform focuses on food discovery and decision-making — giving customers enough information to understand what they are ordering while keeping the path to online ordering clear.\n\nThe result is a digital experience that feels like a virtual front door to the restaurant.",
    "highlights": [
      "Highlights",
      "Immersive Restaurant Experience — Designed to communicate Sanika’s warmth, authenticity, and culinary identity.",
      "Extensive Menu Experience — Organised a broad selection of dishes into intuitive categories.",
      "Signature Dish Showcase — Gives high-value dishes greater visibility and helps customers discover what the restaurant is known for.",
      "Online Ordering Integration — Creates a direct path from browsing to ordering.",
      "Food-Focused UX — Descriptions and structured presentation help customers make faster decisions.",
      "Social Proof — Customer reviews reinforce trust and credibility.",
      "Mobile-Responsive Experience — Built for customers browsing from phones, tablets, and desktops.",
      "Customer Information Hub — Location, contact details, ordering hours, FAQs, and other important information are easily accessible.",
      "Scalable Architecture — Developed with future improvements and integrations in mind."
    ],
    "techStack": [
      "Frontend: React.js\nBackend: Node.js"
    ],
    "scope": "Our scope covered the complete digital experience for Sanika’s Indian Cuisine, including:\n\nUI/UX implementation\nFrontend development\nBackend development\nRestaurant website development\nMenu architecture and presentation\nFood category organisation\nSignature dish showcase\nOnline ordering journey\nCustomer review integration\nContact and location experience\nFAQ section\nResponsive web development\nAPI and backend integration\nPerformance and usability optimisation\nScalable application architecture",
    "results": [
      "The new Sanika’s digital platform gives the restaurant a stronger online presence and a more engaging way to connect with customers.",
      "Instead of functioning as a traditional restaurant website, the platform acts as a digital customer experience layer — helping visitors discover the restaurant, explore its extensive menu, build confidence through reviews, and move seamlessly toward ordering.",
      "The result is a modern, scalable, and conversion-focused restaurant experience that brings Sanika’s culinary identity to the digital world.",
      "We didn't just build a restaurant website.",
      "We built a digital experience that makes people hungry."
    ],
    "link": "https://sanikasrestaurant.com/",
    "image": "/images/case-studies/sanikas-restaurant/hero.png"
  },
  {
    "slug": "thoorigai",
    "title": "Thoorigai",
    "subtitle": "Event Booking & Management Platform",
    "category": "Event Platform",
    "brandColor": "#9333ea",
    "tl": "sanjai",
    "about": "Thoorigai is a modern digital platform designed to simplify the way users discover and book events.\n\nThe platform brings event discovery and booking into one streamlined digital experience, helping users explore available events, understand event details, and take action with minimal friction.\n\nOur objective was to transform the traditional event discovery process into a simple, engaging, and technology-driven experience that can support both customers and the growing needs of the event ecosystem.",
    "challenges": "The event industry involves multiple touchpoints — discovering an event, understanding the details, evaluating the experience, and finally making a booking.\n\nThoorigai needed a platform that could bring these interactions together while maintaining a smooth and intuitive user experience.\n\nKey challenges included:\n\nCreating an intuitive event discovery experience\nPresenting event information clearly and attractively\nReducing friction throughout the booking journey\nDesigning a platform that could support multiple events and categories\nMaintaining a consistent experience across different devices\nBuilding a scalable technical foundation for future expansion",
    "solutions": "We designed and developed Thoorigai as a modern event-focused digital platform, combining a clean interface with a structured booking experience.\n\nOur solution focused on:\n\nIntuitive event discovery and browsing\nStructured presentation of event information\nClear navigation and user journeys\nStreamlined booking interactions\nResponsive web experience across devices\nScalable frontend and backend architecture\nA flexible foundation for future event-related features and integrations\n\nThe platform was designed with one central objective:\n\nMake discovering and booking an event feel simple.",
    "solutionBullets": [
      "We designed and developed Thoorigai as a modern event-focused digital platform, combining a clean interface with a structured booking experience.",
      "Our solution focused on:",
      "Intuitive event discovery and browsing",
      "Structured presentation of event information",
      "Clear navigation and user journeys",
      "Streamlined booking interactions",
      "Responsive web experience across devices",
      "Scalable frontend and backend architecture",
      "A flexible foundation for future event-related features and integrations",
      "The platform was designed with one central objective:",
      "Make discovering and booking an event feel simple."
    ],
    "productExperience": "Thoorigai is built around the complete customer journey — from discovering an event to taking the next step toward booking.\n\nThe interface keeps important event information accessible while maintaining a visually engaging experience. Users can navigate through the platform naturally without being overwhelmed by unnecessary complexity.\n\nEvery interaction is designed to reduce friction and move users closer to their desired action.\n\nThis creates an experience that feels less like browsing a traditional website and more like using a purpose-built event discovery platform.",
    "highlights": [
      "Event-Centric Experience — Designed specifically around event discovery and booking.",
      "Simple Navigation — Users can move through the platform with minimal effort.",
      "Conversion-Focused Journey — Clear actions guide users from discovery toward booking.",
      "Responsive Design — Optimised for a consistent experience across devices.",
      "Scalable Architecture — Built to accommodate future platform growth.",
      "Clean & Modern Interface — A contemporary UI keeps the experience engaging without unnecessary complexity.",
      "Structured Event Information — Important details are presented in a user-friendly manner.",
      "Future-Ready Platform — The architecture provides a strong foundation for additional features and integrations."
    ],
    "techStack": [
      "Frontend: React.js\nBackend: Node.js"
    ],
    "scope": "Our scope covered the development of the complete digital platform experience, including:\n\nUI/UX implementation\nFrontend development\nBackend development\nEvent discovery experience\nEvent information architecture\nBooking journey\nResponsive web development\nUser interaction flows\nAPI and backend integration\nPerformance and usability optimisation\nScalable application architecture\nDeployment support",
    "results": [
      "Thoorigai was transformed into a purpose-built digital platform for discovering and booking events, giving the business a strong technology foundation for its next stage of growth.",
      "The platform delivers a smoother customer journey, a more professional digital presence, and a scalable architecture capable of evolving alongside the business.",
      "Rather than simply building an event website, we created a digital experience designed around how users discover, evaluate, and book events."
    ],
    "link": "https://www.thoorigai.net/",
    "image": "/images/case-studies/thoorigai/hero.png"
  },
  {
    "slug": "gigabull",
    "title": "Gigabull",
    "subtitle": "Premium Leather Products E-commerce Platform",
    "category": "E-Commerce",
    "brandColor": "#b45309",
    "tl": "dinesh",
    "about": "Gigabull is a modern e-commerce platform created for a leather products brand serving customers and international buyers with high-quality leather goods at competitive prices. The website presents the brand’s product range through a clean, professional, and conversion-focused digital storefront.\n\nThe platform enables users to discover products, explore detailed specifications, and make confident purchasing decisions through an intuitive browsing experience. With its premium visual presentation and structured product catalogue, Gigabull reflects the brand’s focus on quality, reliability, and global standards.",
    "challenges": "Establishing a premium online identity for a leather products brand.\n\nPresenting a diverse product catalogue in a clear and organised manner.\n\nCommunicating product quality, design, functionality, and craftsmanship effectively.\n\nCreating a smooth browsing experience across desktop, tablet, and mobile devices.\n\nMaking product information easy to understand for both domestic and international customers.\n\nDesigning a scalable foundation for future products, categories, and e-commerce growth.",
    "solutions": "We developed a responsive and user-focused e-commerce website that combines premium aesthetics with practical functionality.\n\nCreated a structured product catalogue for easy browsing and discovery.\n\nDesigned detailed product pages with clear descriptions, specifications, imagery, and purchasing information.\n\nBuilt a clean interface that highlights the quality and craftsmanship of each leather product.\n\nImplemented responsive layouts for a consistent experience across all screen sizes.\n\nOrganised the website architecture to support product expansion and future business requirements.\n\nUsed modern frontend and backend technologies to deliver a stable, maintainable, and scalable platform.\n\nFocused on clear navigation and streamlined user journeys to reduce friction during product exploration.",
    "solutionBullets": [
      "We developed a responsive and user-focused e-commerce website that combines premium aesthetics with practical functionality.",
      "Created a structured product catalogue for easy browsing and discovery.",
      "Designed detailed product pages with clear descriptions, specifications, imagery, and purchasing information.",
      "Built a clean interface that highlights the quality and craftsmanship of each leather product.",
      "Implemented responsive layouts for a consistent experience across all screen sizes.",
      "Organised the website architecture to support product expansion and future business requirements.",
      "Used modern frontend and backend technologies to deliver a stable, maintainable, and scalable platform.",
      "Focused on clear navigation and streamlined user journeys to reduce friction during product exploration."
    ],
    "productExperience": "The Gigabull website provides a refined product discovery experience designed around customer confidence. Visitors can browse the collection, explore individual products, review important details, and understand the value of each item before making a purchase decision.\n\nThe interface balances visual appeal with usability. Product information is presented in a structured format, while intuitive navigation helps users move naturally from the catalogue to individual product pages. The responsive experience ensures that the brand remains accessible and engaging across devices.",
    "highlights": [
      "Premium and professional visual identity.",
      "Responsive design for mobile, tablet, and desktop.",
      "Organised product catalogue and category structure.",
      "Detailed product presentation.",
      "User-friendly navigation and browsing experience.",
      "Scalable architecture for future catalogue expansion.",
      "Designed for domestic and international customer reach.",
      "Focused on product discovery, trust, and conversion.",
      "Built with modern web technologies for performance and maintainability."
    ],
    "techStack": [
      "Frontend: React.js\n\nBackend: Node.js"
    ],
    "scope": "UI/UX design implementation.\n\nResponsive website development.\n\nE-commerce product catalogue development.\n\nProduct listing and detail page development.\n\nFrontend and backend integration.\n\nWebsite structure and navigation.\n\nCross-device compatibility.\n\nScalable architecture planning.\n\nQuality assurance and deployment support.",
    "results": [
      "The Gigabull website established a polished digital presence for the leather products brand and transformed its product range into an accessible online shopping experience. The platform makes it easier for customers to discover products, understand their features, and engage with the brand through a consistent and professional interface.",
      "By combining a premium design language with a scalable technical foundation, the website is prepared to support future product additions, category expansion, and broader customer acquisition initiatives."
    ],
    "link": "https://www.gigabull.in/",
    "image": "/images/case-studies/gigabull/hero.png"
  },
  {
    "slug": "startten",
    "title": "STARTTEN",
    "subtitle": "Time Auction & Reward Platform",
    "category": "Fintech & Reward",
    "brandColor": "#dc2626",
    "tl": "mathan",
    "about": "STARTTEN is a next-generation digital platform built around an engaging time-based auction experience, designed to turn traditional auction mechanics into a fast, interactive, and accessible digital experience.\n\nThe platform brings together competition, timing, rewards, and user engagement into a simple product journey — creating an experience where every second can influence the outcome.\n\nOur objective was to transform a unique auction concept into a scalable, intuitive, and high-engagement digital product that users can understand and interact with effortlessly.",
    "challenges": "Building a time-based auction platform comes with a different set of product challenges compared with a traditional website.\n\nThe experience needs to be fast, intuitive, and highly engaging while clearly communicating how the auction mechanism works.\n\nKey challenges included:\n\nSimplifying a unique time-auction concept for first-time users\nDesigning an experience that encourages continuous user engagement\nCreating clear and intuitive user journeys\nPresenting auction information without overwhelming users\nBuilding an architecture capable of handling dynamic user interactions\nDesigning a responsive experience across different devices\nCreating a scalable foundation for future product variants and features",
    "solutions": "We approached STARTTEN as a digital product experience rather than a conventional website.\n\nThe solution focused on making the auction mechanism simple to understand while keeping the experience engaging.\n\nWe implemented:\n\nA clear product onboarding and discovery experience\nIntuitive auction-related user journeys\nStructured presentation of rewards and key information\nEngagement-focused UI patterns\nClear calls-to-action\nResponsive web experience\nScalable frontend and backend architecture\nPerformance-focused implementation\nA flexible foundation for future product variants\n\nThe core experience was designed around:\n\nDiscover → Participate → Compete → Win",
    "solutionBullets": [
      "We approached STARTTEN as a digital product experience rather than a conventional website.",
      "The solution focused on making the auction mechanism simple to understand while keeping the experience engaging.",
      "We implemented:",
      "A clear product onboarding and discovery experience",
      "Intuitive auction-related user journeys",
      "Structured presentation of rewards and key information",
      "Engagement-focused UI patterns",
      "Clear calls-to-action",
      "Responsive web experience",
      "Scalable frontend and backend architecture",
      "Performance-focused implementation",
      "A flexible foundation for future product variants",
      "The core experience was designed around:",
      "Discover → Participate → Compete → Win"
    ],
    "productExperience": "The STARTTEN experience is built around speed, curiosity, and participation.\n\nInstead of presenting users with a complex auction interface, the product focuses on reducing the learning curve and making the core concept easy to understand.\n\nUsers are introduced to the concept, understand the opportunity, and can move naturally toward participation.\n\nThe product experience combines simple interactions with a high-energy digital environment, creating a platform that is designed to keep users engaged throughout the journey.\n\nThe result is an experience where the product mechanics become part of the excitement.",
    "highlights": [
      "Unique Time-Auction Concept — Transformed an unconventional auction model into a simple digital experience.",
      "Engagement-Driven UX — Designed around participation, curiosity, and repeat interaction.",
      "Simple User Journey — Reduced complexity around understanding and participating in auctions.",
      "Reward-Focused Experience — Keeps the potential outcome visible and engaging.",
      "Fast & Interactive Product Experience — Designed for a dynamic consumer-facing platform.",
      "Responsive Design — Optimised for users across desktop and mobile devices.",
      "Scalable Architecture — Built with future product expansion and new variants in mind.",
      "Modern Digital Interface — Created a contemporary experience suited to a technology-driven consumer product."
    ],
    "techStack": [
      ""
    ],
    "scope": "Our scope covered the complete digital product development experience, including:\n\nProduct UI/UX implementation\nFrontend development\nBackend development\nAuction experience\nUser interaction flows\nReward and information presentation\nResponsive web development\nAPI and backend integration\nPerformance optimisation\nCross-device compatibility\nScalable application architecture\nFuture-ready product structure\nDeployment support",
    "results": [
      "STARTTEN was transformed from an innovative auction concept into a modern, engaging digital product experience.",
      "The platform provides users with a simpler way to understand and participate in a time-based auction model while giving the business a scalable technology foundation for future growth.",
      "The architecture and product experience were designed with expansion in mind, allowing STARTTEN to introduce new variants and experiences as the platform evolves.",
      "The result is a product that combines technology, competition, timing, and engagement into one memorable digital experience.",
      "We didn't just build an auction platform.",
      "We built an experience where every second matters."
    ],
    "link": "https://startten.com/",
    "image": "/images/case-studies/startten/showcase_1.png"
  },
  {
    "slug": "splendour-park",
    "title": "Splendour Park",
    "subtitle": "Splendour Park",
    "category": "Internal System",
    "brandColor": "#0891b2",
    "tl": "sathish",
    "about": "Splendour Park is a multi-branch ERP system built for end-to-end management of bulk trading desks, retail counters, wholesale billing, and warehouse inventory. • Core Problem Solved: Eliminates inventory reconciliation errors, unrecorded logistics costs, batch stock conflicts, and manual supplier/customer ledger tracking across distributed branches. • Target Users: Branch managers, billing desk operators, warehouse stock controllers, and finance/accounting administrators. • Primary Capabilities: Real-time inward purchase recording with freight/courier charge tracking, multi-rate GST tax invoicing (inclusive/exclusive pricing), automated stock ledger movements, supplier/customer dual-entry running balance ledgers, and PDF/CSV reporting. • Multi-Branch Architecture: Supports isolated branch operations with centralized database consolidation on PostgreSQL RDS.",
    "challenges": "Recording gross product purchases without voucher-level freight/courier charges led to inaccurate supplier ledger balances and distorted item cost valuations. • Dual-Entry Ledger Synchronization: Ensuring inward purchases, customer tax invoices, and payment receipts automatically update running balance ledgers and stock inventory movements atomically in real time. • Batch Conflicts & Stock Negative Balances: Preventing overselling and out-of-sequence stock deductions across concurrent billing terminals and multi-branch operations. • Windows DLL Engine Locking: Operating live TypeScript development servers while running schema migrations (prisma generate) caused Windows EPERM file-lock collisions on the query engine binary. • Cross-Platform PDF & Excel Document Generation: Formatting compliant GST invoices and multi-page running-balance account statements across desktop, web, and mobile environments.",
    "solutions": "Integrated courierCharge and totalAmount in BulkPurchase database models and controllers (bulkPurchaseController.ts), adding explicit LR number, transporter, and remarks fields in BulkSupplierScreen. • Transactional Stock & Ledger Pipelines: Implemented Prisma $transaction operations in Express.js endpoints to guarantee simultaneous creation of purchase/invoice records and chronological BulkStockLedger (IN/OUT) movements. • Running Balance Ledger Calculation: Developed backend aggregation algorithms in bulkSupplierController.ts and bulkCustomerController.ts to compute real-time debit/credit summaries and running balances. • Decoupled Build & Generation Scripts: Separated TypeScript compilation (tsc) from Prisma generator locks to ensure clean production builds while dev daemons run. • Native PDF & CSV Engine: Utilized Flutter pdf and printing packages alongside UTF-8 BOM CSV writers in BulkLedgerExportButton to generate audit-ready tabular statements.",
    "solutionBullets": [
      "Integrated courierCharge and totalAmount in BulkPurchase database models and controllers (bulkPurchaseController.ts), adding explicit LR number, transporter, and remarks fields in BulkSupplierScreen. • Transactional Stock & Ledger Pipelines: Implemented Prisma $transaction operations in Express.js endpoints to guarantee simultaneous creation of purchase/invoice records and chronological BulkStockLedger (IN/OUT) movements. • Running Balance Ledger Calculation: Developed backend aggregation algorithms in bulkSupplierController.ts and bulkCustomerController.ts to compute real-time debit/credit summaries and running balances. • Decoupled Build & Generation Scripts: Separated TypeScript compilation (tsc) from Prisma generator locks to ensure clean production builds while dev daemons run. • Native PDF & CSV Engine: Utilized Flutter pdf and printing packages alongside UTF-8 BOM CSV writers in BulkLedgerExportButton to generate audit-ready tabular statements."
    ],
    "productExperience": "BulkSupplierScreen offers a dual-tab interface for instant inward purchase entry and comprehensive supplier directory/ledger inspection. • Live Calculation & Grand Total Breakdown: Dynamic reactive recalculation of item quantities, rates, subtotal, courier/freight charges, and grand total as line items are modified. • Supplier Ledger History: Real-time transaction tables displaying date, voucher numbers, item summaries, freight breakdown badges, remarks/LR references, and color-coded debit/credit balances. • Wholesale & Retail Billing Flow: Interactive customer search, GST type toggling (Within State CGST+SGST vs Inter-State IGST), tax-inclusive pricing switch, and 1-click Save & Print workflows. • Error Prevention & Form Validation: SnackBar feedback, branch boundary checks, dropdown item verification, and minimum line-item validation guards.",
    "highlights": [
      "Creating a purchase voucher automatically increases supplier credit and writes corresponding IN transactions to the branch stock ledger. • Freight & Courier Expense Isolation: Freight charges are captured at the voucher level without polluting product unit prices, preserving true inventory valuation. • Dual-Format Ledger Exporting: One-click generation of print-ready PDF statements with Unicode typography and Microsoft Excel-compatible CSV files. • Multi-Branch Isolation: Strict branch-scoped data partitioning across products, customers, suppliers, inventory stock balances, and user permissions. • OpenSpec Spec-Driven Governance: All features and schema modifications are designed, tracked, and verified through structured OpenSpec proposals, delta specifications, and task checklists."
    ],
    "techStack": [
      "Flutter 3.x (Dart), Provider (State Management), Material 3 Design System, Intl (Currency & Date Formatting). • Backend API: Node.js, Express.js (v5.x), TypeScript (v5.9), tsx runtime daemon. • Database & ORM: PostgreSQL RDS (AWS us-east-1), Prisma ORM (v6.19) with automated migrations and relation mapping. • Validation & Security: Zod schema validation, JWT (JSON Web Tokens), bcrypt password hashing, CORS. • Export & Printing: pdf, printing, path_provider, exceljs (Excel/CSV report generation)."
    ],
    "scope": "Complete ERP billing, inward stock receipt, and accounting ledger application for bulk and wholesale trade. • Functional Scope: Product catalogue, supplier directory, customer management, inward purchase orders, wholesale tax invoicing, payment vouchers, and stock movement ledgers. • Technical Scope: RESTful API backend service, relational PostgreSQL database schema with 20+ models, and responsive cross-platform Flutter client. • Role Scope: Role-based access control supporting SUPER_ADMIN, ADMIN, and standard desk USER permissions across designated branches. • Platform Scope: Cross-platform Flutter desktop (Windows, macOS, Linux) and responsive tablet/mobile workflows.",
    "results": [
      "Database Models: 20+ Prisma schema models supporting full ERP workflows (Purchases, Invoices, Ledgers, Customers, Suppliers, Branches, Users). • Type Safety & Build Status: 100% clean TypeScript build (tsc) and zero compilation errors in Flutter static analysis (flutter analyze). • Automated Ledger Reconciliation: Eliminated manual calculation of supplier balances by computing real-time net payables from purchase vouchers and payment receipts. • Structured Freight Auditing: Complete transparency over inward courier charges and transporter LR references across all purchase records and exports. • Business Impact Metrics: Business result requires confirmation."
    ],
    "link": "Internal Application",
    "image": "/images/cc_highlight_category.jpg"
  },
  {
    "slug": "infragen",
    "title": "infragen",
    "subtitle": "infragen",
    "category": "Real Estate & Infra",
    "brandColor": "#2563eb",
    "tl": "srimathi",
    "about": "Vizhi Infragen Realtors LLP is a trusted real estate and property management company based in Coimbatore. The website was designed to showcase their wide range of property services, local expertise, and trust-driven approach. The goal was to create a modern digital presence that connects customers with the right property solutions.",
    "challenges": "The main challenge was presenting extensive real estate services and business information without making the website feel overwhelming. The design also needed to build trust, highlight Coimbatore's key locations, and serve different audiences including buyers, investors, property owners, and NRI clients.",
    "solutions": "We created a clean, premium, and spacious website with a strong orange-based visual identity and clear content hierarchy.\nThe experience is structured to help users discover the brand, understand its services, build trust, and take action.\nThe design focuses on presenting Vizhi Infragen's extensive real estate information in a simple and engaging way.\n\nKey Solution Points:\n\nClear hero messaging that immediately communicates the company's positioning.\nDedicated About, Services, and Service Detail experiences.\nStructured service cards for easy exploration.\nLocation-focused sections highlighting Coimbatore's major growth corridors.\nTrust and experience sections to establish credibility.\nFAQ sections addressing common customer concerns.\nStrong call-to-action sections encouraging users to connect with the company.",
    "solutionBullets": [
      "We created a clean, premium, and spacious website with a strong orange-based visual identity and clear content hierarchy.",
      "The experience is structured to help users discover the brand, understand its services, build trust, and take action.",
      "The design focuses on presenting Vizhi Infragen's extensive real estate information in a simple and engaging way.",
      "Key Solution Points:",
      "Clear hero messaging that immediately communicates the company's positioning.",
      "Dedicated About, Services, and Service Detail experiences.",
      "Structured service cards for easy exploration.",
      "Location-focused sections highlighting Coimbatore's major growth corridors.",
      "Trust and experience sections to establish credibility.",
      "FAQ sections addressing common customer concerns.",
      "Strong call-to-action sections encouraging users to connect with the company."
    ],
    "productExperience": "The website provides a smooth journey from discovering the company to exploring services and contacting the team. Dedicated Home, About, Contact , Services, and Service Detail pages make information easy to access. The responsive interface ensures a consistent experience across desktop, tablet, and mobile.",
    "highlights": [
      "Trust-centric and professional design",
      "Easy service-focused navigation",
      "Bright, premium, and spacious UI",
      "Fully responsive interface",
      "Clear and structured information architecture",
      "Strong call-to-action sections",
      "FAQ for quick customer support",
      "Consistent branding and visual language",
      "Scalable frontend structure"
    ],
    "techStack": [
      "Framework: Next.js\nStyling: Tailwind CSS\nDevelopment: Frontend\nDesign Approach: Responsive & Component-Based UI"
    ],
    "scope": "Frontend Development\n\nThe development scope focused on transforming the approved visual direction and business requirements into a functional responsive website.\n\nPages Developed\n\nHome Page\nCompany introduction, services, areas served, trust factors, FAQs, and contact CTA.\n\nAbout Page\nCompany story, vision, mission, values, expertise, and trust-focused content.\n\nServices Page\nComplete overview of Vizhi Infragen's real estate and property management services.\n\nService Detail Pages\nDedicated pages explaining individual services, their benefits, process, and enquiry opportunities.",
    "results": [
      "Key Outcomes",
      "Stronger Brand Presence",
      "A professional website experience helps position Vizhi Infragen as an established real estate and property management company.",
      "Improved Information Accessibility",
      "Customers can quickly discover services, locations, company information, and frequently asked questions.",
      "Better Service Discoverability",
      "Individual services are clearly organized, making it easier for users to find the solution relevant to their property needs.",
      "Trust-Focused Experience",
      "Company experience, transparent processes, local expertise, and customer-first values are consistently communicated throughout the website.",
      "Responsive Digital Experience",
      "The frontend is designed to provide a consistent experience across desktop, tablet, and mobile devices.",
      "Scalable Frontend Foundation",
      "The component-based frontend structure provides a foundation for future additions such as property listings, enquiry systems, project showcases, and other business integrations."
    ],
    "link": "https://dhigrowth07.github.io/infragen-fe/",
    "image": "/images/case-studies/infragen/showcase_3.jpg"
  },
  {
    "slug": "bad-biscuit-detection",
    "title": "Bad Biscuit Detection and Rejection",
    "subtitle": "Bad Biscuit Detection and Rejection",
    "category": "AI & Computer Vision",
    "brandColor": "#d97706",
    "tl": "Dinesh",
    "about": "https://www.techasoft.com/bad-biscuit-detection-and-rejection-case-study",
    "challenges": "",
    "solutions": "",
    "solutionBullets": [
      ""
    ],
    "productExperience": "",
    "highlights": [
      ""
    ],
    "techStack": [
      ""
    ],
    "scope": "",
    "results": [
      ""
    ],
    "link": "",
    "image": "/images/cc_highlight_product.jpg"
  },
  {
    "slug": "fabric-defect-detection",
    "title": "Fabric Defect detection",
    "subtitle": "Fabric Defect detection",
    "category": "AI & Computer Vision",
    "brandColor": "#7c3aed",
    "tl": "Dinesh",
    "about": "https://www.techasoft.com/fabric-defect-detection-case-study",
    "challenges": "",
    "solutions": "",
    "solutionBullets": [
      ""
    ],
    "productExperience": "",
    "highlights": [
      ""
    ],
    "techStack": [
      ""
    ],
    "scope": "",
    "results": [
      ""
    ],
    "link": "",
    "image": "/images/cc_highlight_category.jpg"
  },
  {
    "slug": "dhigrowth-ai-chatbot",
    "title": "Dhigrowth",
    "subtitle": "Ai Chatbot",
    "category": "AI Automation",
    "brandColor": "#0284c7",
    "tl": "Dinesh",
    "about": "https://www.techasoft.com/techasoft-ai-chatbot-case-study",
    "challenges": "",
    "solutions": "",
    "solutionBullets": [
      ""
    ],
    "productExperience": "",
    "highlights": [
      ""
    ],
    "techStack": [
      ""
    ],
    "scope": "",
    "results": [
      ""
    ],
    "link": "",
    "image": "/images/cc_highlight_store.jpg"
  },
  {
    "slug": "ai-invoice-processing",
    "title": "Ai Invoice Processing",
    "subtitle": "Ai Invoice Processing",
    "category": "AI & Document Intelligence",
    "brandColor": "#059669",
    "tl": "Dinesh",
    "about": "https://www.techasoft.com/ai-invoice-processing-case-study",
    "challenges": "",
    "solutions": "",
    "solutionBullets": [
      ""
    ],
    "productExperience": "",
    "highlights": [
      ""
    ],
    "techStack": [
      ""
    ],
    "scope": "",
    "results": [
      ""
    ],
    "link": "",
    "image": "/images/case-studies/ai-invoice-processing/showcase_3.png"
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return detailedCaseStudies.find((study) => study.slug === slug);
}
