import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Wrench, Factory, Truck, HardHat, Droplets, PaintRoller } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const services = [
  {
    title: "Civil Construction & Building Works",
    description: "End-to-end residential, commercial, and infrastructure construction services.",
    icon: Building2,
    slug: "civil-construction",
    image: "/images/hero_1.png"
  },
  {
    title: "Electro-Mechanical / MEP Works",
    description: "Expert mechanical, electrical, plumbing, and HVAC installation and maintenance.",
    icon: Wrench,
    slug: "electro-mechanical-works",
    image: "/images/hero_2.png"
  },
  {
    title: "Interior Fit-Out & Finishing",
    description: "Premium interior design execution, finishing works, and bespoke joinery.",
    icon: PaintRoller,
    slug: "interior-fit-out",
    image: "/images/hero_4.png"
  },
  {
    title: "Road & Infrastructure Works",
    description: "Comprehensive earthworks, road construction, and utility network development.",
    icon: Factory,
    slug: "road-and-infrastructure",
    image: "/images/hero_5.png"
  },
  {
    title: "General Trading",
    description: "Reliable supply of building materials, heavy equipment, and industrial products.",
    icon: Truck,
    slug: "general-trading",
    image: "/images/hero_6.png"
  },
  {
    title: "Project Management & Consultancy",
    description: "Professional planning, supervision, and rigorous quality control for complex projects.",
    icon: HardHat,
    slug: "project-management",
    image: "/images/hero_3.png"
  }
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24">
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <Image
          src="/images/hero_2.png"
          alt="Our Services"
          fill
          className="object-cover opacity-40"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedReveal direction="up">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto" />
          </AnimatedReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <AnimatedReveal direction="up" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
              Comprehensive Contracting & Trading Solutions
            </h2>
            <p className="text-brand-gray text-lg">
              We offer a full spectrum of services designed to meet the rigorous demands of modern development. From concept to completion, we deliver excellence across every discipline.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedReveal key={service.slug} direction="up" delay={index * 0.1}>
                <Link href={`/services/${service.slug}`} className="group block bg-white h-full shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border-b-4 border-brand-orange hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />
                    <div className="absolute bottom-0 left-0 bg-brand-orange text-white p-3">
                      <service.icon size={24} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-brand-gray mb-6">
                      {service.description}
                    </p>
                    <span className="text-brand-orange font-semibold flex items-center gap-2">
                      View Details <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
