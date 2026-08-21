import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ServiceInquirySection from '@/components/ServiceInquirySection';
import { SERVICES_DATA } from '@/data/servicesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic SEO metadata from the services data
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find(s => s.id === slug || (slug === 'business-automation' && s.id === 'business-growth-automation'));
  if (!service) {
    return {
      title: "Service Not Found | DhiGrowth",
      description: "Service details not found."
    };
  }

  return {
    title: `${service.name} Company in Coimbatore | DhiGrowth`,
    description: service.heroSub || `${service.name} services offered by DhiGrowth, Coimbatore's top digital agency.`,
    keywords: `${service.name} Coimbatore, ${service.name} Agency, Coimbatore ${service.name}`
  };
}

// Generate static params for all 13 services for static site export/generation
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.id,
  }));
}

const SERVICE_IMAGE_MAP: Record<string, string> = {
  "website-development": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  "app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
  "ai-development": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
  "ai-automation": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
  "whatsapp-marketing": "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=80",
  "business-growth-automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  "business-automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  "business-development": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
  "seo": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
  "digital-marketing": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
  "social-media-marketing": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
  "meta-google-ads": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=80",
  "ads-shooting": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",
  "video-editing": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80"
};

const SERVICE_QUOTE_MAP: Record<string, string> = {
  "website-development": "Sub-second load times, dynamic caching architectures, and optimized search ranking indices for Coimbatore brands.",
  "app-development": "Seamless cross-platform integrations, push notification campaigns, and offline data caches tailored to user demands.",
  "ai-development": "Deploying custom neural networks, recommendation algorithms, and advanced deep learning structures.",
  "ai-automation": "Automating client inquiry pipelines, visual analytics boards, and machine learning models for backend scaling.",
  "whatsapp-marketing": "Automated broadcast funnels, direct API communication sequences, and prefilled lead generation forms.",
  "business-growth-automation": "Streamlining workflow automation, ERP integrations, CRM pipelines, and backend cloud processing.",
  "business-automation": "Streamlining workflow automation, ERP integrations, CRM pipelines, and backend cloud processing.",
  "business-development": "Strategic commercial targets, client validation cycles, and local growth roadmaps.",
  "seo": "Ranking on key commercial terms across Coimbatore, maximizing organic traffic value and customer trust.",
  "digital-marketing": "Multi-channel paid campaigns, custom attribution models, and conversion optimization funnels.",
  "social-media-marketing": "Engaging community loops, viral narrative concepts, and creative layouts to boost organic reach.",
  "meta-google-ads": "High-intent paid ad scaling with sub-second funnel metrics, driving down acquisition costs systematically.",
  "ads-shooting": "Cinematic commercial shoots, targeted script designs, and professional camera assets.",
  "video-editing": "Creative post-production timelines, sound engineering, and visual color grading."
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find(s => s.id === slug || (slug === 'business-automation' && s.id === 'business-growth-automation'));

  if (!service) {
    notFound();
  }

  // Parse sections
  const introSection = service.sections.find(s => s.content) || service.sections[0];
  const offeringsSection = service.sections.find(s => s.items);
  const customFeaturesSection = service.sections.find(s => s.features);
  const customStepsSection = service.sections.find(s => s.steps);

  // Fallbacks for layout consistency across all 13 services
  const defaultFeatures = [
    "100% Custom Solution — Designed and coded from scratch for your brand.",
    "Coimbatore Local Expertise — Alignment with local consumer trends and market hubs.",
    "AI-Powered Operations — Automate lead capturing and backend operations.",
    "SEO Optimized — Built with performance and on-page ranking standards.",
    "Speed-Optimised Performance — Clean architecture ensuring sub-second loading.",
    "Dedicated Support — Reliable post-launch maintenance and upgrades.",
    "Full Ownership — Complete transparency and intellectual property rights."
  ];

  const defaultSteps = [
    "1. Discovery & Planning — Analyze requirements, competitors, and growth opportunities.",
    "2. Wireframing & Design — Mockups and interactive design reviews.",
    "3. Core Development — Clean, responsive, and secure development.",
    "4. SEO & Content Integration — Set transactional keywords and optimize metadata.",
    "5. Quality Assurance — Rigorous speed, safety, and compatibility testing.",
    "6. Deployment & Launch — Go-live configuration with Google analytics tools.",
    "7. Ongoing Maintenance — Monthly updates, monitoring, and regular optimization."
  ];

  const features = customFeaturesSection ? customFeaturesSection.features : defaultFeatures;
  const steps = customStepsSection ? customStepsSection.steps : defaultSteps;

  const industries = [
    "Textile", "Manufacturing", "Retail", "Healthcare", 
    "Education", "Hospitality", "Real Estate", "Tech Startups"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white selection:bg-[#2196E8] selection:text-white font-body transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      <main className="subpage-padding-top">
        
        {/* Service Hero (Dark Header Pattern) */}
        <section className="relative py-24 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-white overflow-hidden bg-dot-matrix border-b border-slate-200 dark:border-slate-800">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2196E8]/5 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-6">
            <span className="text-[#2196E8] font-body text-xs font-bold tracking-widest block">
              Coimbatore Digital Agency
            </span>
            <h1 className="font-header text-5xl sm:text-7xl lg:text-8xl tracking-wider leading-none">
              {service.heroTitle || service.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {service.heroSub}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="#service-inquiry-form"
                className="btn-primary w-full sm:w-auto px-8 py-3.5 bg-brand text-white font-bold rounded-lg hover:bg-brand-bright transition-colors tracking-wider text-sm font-body shadow-lg hover:scale-105 cursor-pointer"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* Intro Section (Light BG) */}
        <section className="py-24 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-[#2196E8] font-bold text-xs tracking-widest block font-body">
                  Core Expertise
                </span>
                <h2 className="font-header text-4xl sm:text-5xl tracking-wider text-[#4A72EB] leading-none">
                  Leading {service.name} Company in Coimbatore
                </h2>
                <p className="text-slate-700 dark:text-slate-350 text-base sm:text-lg leading-relaxed font-body">
                  {introSection?.content || ""}
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800/80 group">
                  <img 
                    src={SERVICE_IMAGE_MAP[service.id] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"} 
                    alt={service.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
                    <p className="text-xs font-bold tracking-widest text-[#2196E8] mb-1 font-body">The DhiGrowth Commitment</p>
                    <blockquote className="text-white italic font-body text-xs sm:text-sm leading-relaxed">
                      "{SERVICE_QUOTE_MAP[service.id] || "We build custom, fast, and high-converting systems for your brand in Coimbatore."}"
                    </blockquote>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sub-services breakdown grid */}
        {offeringsSection && offeringsSection.items && (
          <section className="py-24 bg-slate-50 dark:bg-[#080b11] border-y border-slate-200 dark:border-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#2196E8] font-bold text-xs tracking-widest block font-body">
                  Core Offerings
                </span>
                <h2 className="font-header text-4xl sm:text-5xl tracking-wider text-slate-900 dark:text-white">
                  Our {service.name} Sub-Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offeringsSection.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="glass-card p-8 bg-white dark:bg-[#0d111c] border border-slate-200 dark:border-slate-900 hover:border-[#2196E8] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-header text-2xl text-slate-900 dark:text-white tracking-wider mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* Why Coimbatore Businesses Trust DhiGrowth */}
        <section className="py-24 bg-white dark:bg-[#000000] transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="text-[#2196E8] font-bold text-xs tracking-widest block font-body">
                Our Guarantee
              </span>
              <h2 className="font-header text-4xl sm:text-5xl tracking-wider text-slate-900 dark:text-white">
                Why Coimbatore Businesses Trust DhiGrowth
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features?.map((feature, idx) => {
                const parts = feature.split(" — ");
                const title = parts[0] || "";
                const description = parts[1] || "";

                return (
                  <div 
                    key={idx}
                    className="glass-card p-6 bg-slate-50/50 dark:bg-[#0d111c]/60 border border-slate-200 dark:border-slate-900/60 rounded-2xl flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#2196E8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-body font-bold text-slate-900 dark:text-white text-base">
                        {title}
                      </h4>
                      <p className="text-slate-650 dark:text-slate-350 text-sm mt-1 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* How We Build (Steps) */}
        <section className="py-24 bg-slate-50 dark:bg-[#080b11] border-t border-slate-200 dark:border-slate-900 transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="text-[#2196E8] font-bold text-xs tracking-widest block font-body">
                Methodology
              </span>
              <h2 className="font-header text-4xl sm:text-5xl tracking-wider text-slate-900 dark:text-white">
                How We Build
              </h2>
            </div>

            <div className="space-y-6">
              {steps?.map((step, idx) => {
                // Split step number vs description
                const textContent = step.replace(/^\d+\.\s*/, ""); // remove 1. or 2.
                const titleText = textContent.split(" — ")[0] || "";
                const descText = textContent.split(" — ")[1] || "";

                return (
                  <div 
                    key={idx}
                    className="glass-card p-6 bg-white dark:bg-[#0d111c] border border-slate-205 dark:border-slate-800 rounded-2xl flex items-start gap-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2196E8]/10 text-[#2196E8] font-numeric font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-slate-900 dark:text-white text-base">
                        {titleText}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-350 text-sm mt-1 leading-relaxed">
                        {descText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* For Every Industry Tag Grid */}
        <section className="py-24 bg-white dark:bg-[#000000] transition-colors border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="text-[#2196E8] font-bold text-xs tracking-widest block font-body">
              Versatility
            </span>
            <h2 className="font-header text-4xl sm:text-5xl tracking-wider text-slate-900 dark:text-white">
              For Every Industry
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              We apply our {service.name} framework to all key industries in Coimbatore to capture transaction intent and automate operations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span 
                  key={ind}
                  className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d111c] text-slate-700 dark:text-slate-300 font-semibold text-xs tracking-wider font-body"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Service Inquiry & Consultation Form */}
        <ServiceInquirySection currentServiceName={service.name} />

        {/* Bottom CTA Banner */}
        <CTABanner />

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
