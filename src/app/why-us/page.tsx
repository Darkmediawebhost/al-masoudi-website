import Image from "next/image";
import { ShieldCheck, Clock, Award, Users, HardHat, TrendingUp } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const reasons = [
  {
    title: "Uncompromising Quality",
    desc: "We adhere strictly to international quality standards in every project, ensuring durability, functionality, and aesthetic excellence.",
    icon: Award,
  },
  {
    title: "Safety First Approach",
    desc: "Our robust health and safety policies protect our workforce and your investment, resulting in zero-incident project sites.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Leadership",
    desc: "Our team of seasoned engineers and project managers bring decades of combined experience across complex developments.",
    icon: Users,
  },
  {
    title: "On-Time Delivery",
    desc: "Through meticulous planning and agile project management, we consistently meet or beat our project handover deadlines.",
    icon: Clock,
  },
  {
    title: "Modern Equipment Fleet",
    desc: "We invest heavily in state-of-the-art construction machinery and technology to drive efficiency and precision on-site.",
    icon: HardHat,
  },
  {
    title: "Value Engineering",
    desc: "We optimize designs and supply chains to provide the most cost-effective solutions without sacrificing quality or performance.",
    icon: TrendingUp,
  },
];

export default function WhyUsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 bg-brand-light">
      {/* Page Header */}
      <section className="bg-brand-dark py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/10" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(236,99,3,0.3) 0%, transparent 50%)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedReveal direction="up">
            <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
              Why Choose Al Masoudi?
            </h1>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              In a highly competitive market, we stand out through our unwavering commitment to client success, engineering precision, and operational excellence.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <AnimatedReveal key={reason.title} direction="up" delay={index * 0.1}>
                <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-brand-orange">
                  <div className="w-16 h-16 bg-brand-light text-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <reason.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative h-[500px]">
              <AnimatedReveal direction="right" className="h-full">
                <div className="absolute inset-0 bg-brand-orange transform -rotate-3 rounded-3xl opacity-20" />
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero_1.png"
                    alt="Construction machinery"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <AnimatedReveal direction="left">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                  A Legacy of Excellence
                </h2>
                <p className="text-brand-gray text-lg mb-6 leading-relaxed">
                  Choosing a contracting and trading partner is one of the most critical decisions in any development lifecycle. At Al Masoudi, we don't just build structures; we build enduring relationships based on transparency and trust.
                </p>
                <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange mt-8">
                  <p className="text-brand-dark font-semibold italic text-lg">
                    "Our track record speaks for itself. We have navigated the complexities of large-scale infrastructure projects while delivering exceptional value at every step."
                  </p>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
