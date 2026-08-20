import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

// This would typically come from a CMS or API
const serviceData: Record<string, any> = {
  "manpower-supply": {
    title: "Expert Manpower Supply Services in Saudi Arabia",
    image: "/images/manpower_supply_hero.jpg",
    overview: "Al Masoudi Contracting & Trading provides top-tier manpower supply solutions across Saudi Arabia, catering to construction, engineering, and industrial sectors. We specialize in providing highly skilled, semi-skilled, and unskilled labor tailored to your project's unique demands. Our rigorous screening and onboarding processes ensure that every worker is fully qualified, compliant with local safety regulations, and ready to drive your operations efficiently, minimizing downtime and maximizing productivity.",
    capabilities: [
      "Certified Skilled and Semi-skilled Labor Provision",
      "Technical, Engineering, and Supervisory Personnel",
      "Administrative and Site Support Staff",
      "Flexible Short-Term and Long-Term Contracting Terms"
    ],
    process: [
      { step: "Requirement Analysis", desc: "In-depth consultation to understand your specific staffing needs and project timelines." },
      { step: "Sourcing & Screening", desc: "Rigorous vetting, background checks, and skills evaluation of candidates." },
      { step: "Deployment", desc: "Seamless onboarding, site-specific safety orientations, and timely deployment." },
      { step: "Ongoing Management", desc: "Continuous performance monitoring, payroll management, and dedicated support." }
    ]
  },
  "equipment-rental": {
    title: "Heavy Equipment & Machinery Rental Services",
    image: "/images/equipment_rental_hero.jpg",
    overview: "Al Masoudi Contracting & Trading offers a comprehensive and modern fleet of heavy machinery and construction equipment for rent across Saudi Arabia. We provide flexible short-term and long-term rental agreements designed to keep your projects on schedule and within budget. All our equipment undergoes rigorous maintenance and safety inspections to guarantee optimal performance, reliability, and compliance with the highest industry standards.",
    capabilities: [
      "Extensive Fleet of Earthmoving Machinery (Excavators, Bulldozers)",
      "Lifting & Material Handling (Cranes, Forklifts, Telehandlers)",
      "Power Generation & Industrial Compressors",
      "24/7 On-Site Maintenance & Technical Support"
    ],
    process: [
      { step: "Consultation & Assessment", desc: "Expert advice to select the right machinery for your specific project requirements." },
      { step: "Flexible Contracting", desc: "Tailored rental agreements accommodating both short-term tasks and multi-year mega projects." },
      { step: "Rapid Logistics", desc: "Timely and safe transportation of equipment directly to your job site." },
      { step: "Continuous Support", desc: "Dedicated on-site servicing and rapid replacement protocols to prevent downtime." }
    ]
  },
  "industrial-support-services": {
    title: "Comprehensive Industrial Support Services",
    image: "/images/industrial_support_hero.jpg",
    overview: "Al Masoudi Contracting & Trading provides specialized end-to-end support for industrial and commercial facilities across Saudi Arabia. Our dedicated industrial support services are designed to ensure seamless facility operations, minimize costly downtime, and maintain strict health and safety compliance. We act as your reliable operational partner, allowing you to focus entirely on your core business activities.",
    capabilities: [
      "Preventative Facility Maintenance & Plant Management",
      "Specialized Industrial Cleaning & Waste Management",
      "Complete Logistical & Supply Chain Operational Support",
      "Rigorous Health, Safety, and Environmental (HSE) Compliance"
    ],
    process: [
      { step: "Site Audit & Assessment", desc: "Detailed evaluation of your facility's operational layout, maintenance history, and specific support requirements." },
      { step: "Strategic Service Planning", desc: "Development of a tailored, preventative support strategy aligned with your production schedules." },
      { step: "Proactive Execution", desc: "Deployment of certified technicians and specialists for consistent, uninterrupted operational support." },
      { step: "Continuous Optimization", desc: "Regular performance reviews and safety audits to guarantee service excellence and compliance." }
    ]
  },
  "trading-and-project-solutions": {
    title: "Global Trading and Project Solutions",
    image: "/images/trading_solutions_hero.jpg",
    overview: "Al Masoudi Contracting & Trading delivers robust, end-to-end supply chain management and procurement services. We specialize in sourcing and supplying premium construction materials, heavy-duty industrial equipment, and specialized products. With our extensive global network and advanced logistics infrastructure, we guarantee that all essential materials are delivered to your site on time and strictly according to project specifications.",
    capabilities: [
      "Bulk Supply of Building & Construction Materials",
      "Specialized Industrial Products & Heavy Machinery Procurement",
      "Global Vendor Management & Supply Chain Optimization",
      "End-to-End Logistics & Custom Clearance Handling"
    ],
    process: [
      { step: "Strategic Sourcing", desc: "Identifying and partnering with reliable, certified global and local manufacturers." },
      { step: "Competitive Procurement", desc: "Negotiating the best rates to ensure cost-effective delivery without compromising quality." },
      { step: "Advanced Logistics", desc: "Managing complex freight, warehousing, and just-in-time delivery to project sites." },
      { step: "Quality Assurance", desc: "Conducting rigorous inspections to verify that all materials meet strict international standards." }
    ]
  },
  "portacabin-and-av-solutions": {
    title: "Premium Portacabin & Audio-Visual (AV) Solutions",
    image: "/images/portacabin_av_hero.jpg",
    overview: "Al Masoudi Contracting & Trading delivers state-of-the-art modular portacabins and fully integrated audio-visual solutions designed for modern construction sites and corporate events. We provide premium, custom-built temporary facilities—including site offices and accommodations—equipped with cutting-edge AV technology to ensure your team remains connected, productive, and comfortable in any environment.",
    capabilities: [
      "Custom Modular Portacabins & Site Office Design",
      "Temporary Workforce Accommodations & Mobile Units",
      "Professional Audio-Visual (AV) Systems Integration",
      "High-Tech Conferencing Equipment & Presentation Setups"
    ],
    process: [
      { step: "Design & Consultation", desc: "Collaborating with you to customize cabin layouts and define precise AV requirements." },
      { step: "Precision Fabrication", desc: "Constructing high-quality, durable modular units to your exact specifications." },
      { step: "Seamless Installation", desc: "Safe, efficient on-site setup, including full wiring and AV systems integration." },
      { step: "Ongoing Maintenance", desc: "Providing dedicated technical support and servicing to keep all facilities and tech running smoothly." }
    ]
  },
  // Fallback for other routes for demonstration
  "default": {
    title: "Specialized Engineering Services",
    image: "/images/image.png",
    overview: "Our specialized services are tailored to meet the unique demands of your project. We bring together industry experts, state-of-the-art technology, and proven methodologies to deliver outstanding results.",
    capabilities: [
      "Advanced System Integration",
      "Custom Engineering Solutions",
      "Quality Assurance and Testing",
      "Lifecycle Maintenance"
    ],
    process: [
      { step: "Consultation", desc: "Understanding project requirements." },
      { step: "Planning", desc: "Developing a strategic roadmap." },
      { step: "Implementation", desc: "Executing the plan with precision." },
      { step: "Support", desc: "Ongoing maintenance and support." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceData[slug] || { ...serviceData["default"], title: slug.replace(/-/g, ' ') };

  return {
    title: `${data.title} | Al Masoudi Contracting & Trading`,
    description: data.overview.substring(0, 155) + "...",
    openGraph: {
      title: `${data.title} | Al Masoudi Contracting & Trading`,
      description: data.overview.substring(0, 155) + "...",
      images: [data.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = serviceData[slug] || { ...serviceData["default"], title: slug.replace(/-/g, ' ') };

  return (
    <main className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-brand-dark">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedReveal direction="right" className="max-w-2xl">
            <Link href="/services" className="text-brand-orange hover:text-white transition-colors mb-4 inline-flex items-center gap-2 font-semibold text-sm tracking-wider uppercase">
              <ArrowRight className="rotate-180" size={16} /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 capitalize leading-tight">
              {data.title}
            </h1>
            <div className="w-24 h-1.5 bg-brand-orange" />
          </AnimatedReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column - Content */}
            <div className="w-full lg:w-2/3">
              <AnimatedReveal direction="up">
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Service Overview</h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-12">
                  {data.overview}
                </p>

                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                  {data.capabilities.map((cap: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-brand-light rounded-md border-l-4 border-brand-orange">
                      <CheckCircle2 className="text-brand-orange shrink-0 mt-0.5" size={20} />
                      <span className="font-semibold text-brand-dark">{cap}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8">Our Process</h3>
                <div className="space-y-8">
                  {data.process.map((proc: any, i: number) => (
                    <div key={i} className="flex gap-6 relative">
                      {i !== data.process.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200" />
                      )}
                      <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-heading font-bold shrink-0 z-10 shadow-md">
                        {i + 1}
                      </div>
                      <div className="pt-2 pb-6">
                        <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">{proc.step}</h4>
                        <p className="text-brand-gray">{proc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-1/3">
              <AnimatedReveal direction="left" delay={0.2} className="sticky top-32">
                <div className="bg-brand-dark text-white p-8 rounded-lg shadow-xl border-t-4 border-brand-orange">
                  <h3 className="text-2xl font-heading font-bold mb-4">Need this service?</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Contact our specialists today to discuss your project requirements and receive a detailed consultation.
                  </p>
                  <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold hover:text-brand-dark text-white rounded-none py-6 text-lg">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="font-heading font-semibold mb-4">Other Services</h4>
                    <ul className="space-y-3">
                      {["Manpower Supply", "Equipment Rental", "Industrial Support Services", "Trading and Project Solutions", "Portacabin and AV Solutions"].map(s => (
                        <li key={s}>
                          <Link href={`/services/${s.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                            <span className="w-1 h-1 bg-brand-orange rounded-full" /> {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
