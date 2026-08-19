import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Button } from "@/components/ui/button";

// This would typically come from a CMS or API
const serviceData: Record<string, any> = {
  "civil-construction": {
    title: "Civil Construction & Building Works",
    image: "/images/hero_1.png",
    overview: "We offer comprehensive civil engineering and construction services, delivering high-quality residential, commercial, and industrial projects. Our team manages every phase of construction, from excavation and structural works to final finishing.",
    capabilities: [
      "High-rise and Commercial Buildings",
      "Residential Complexes and Villas",
      "Industrial Facilities and Warehouses",
      "Structural Concrete and Steel Works"
    ],
    process: [
      { step: "Site Evaluation", desc: "Comprehensive analysis and topographic surveys." },
      { step: "Structural Design", desc: "Robust engineering ensuring longevity and safety." },
      { step: "Execution", desc: "Precision construction managed by experienced engineers." },
      { step: "Handover", desc: "Rigorous quality checks before project delivery." }
    ]
  },
  // Fallback for other routes for demonstration
  "default": {
    title: "Specialized Engineering Services",
    image: "/images/hero_3.png",
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
                      {["Civil Construction", "Electro-Mechanical Works", "General Trading", "Project Management"].map(s => (
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
