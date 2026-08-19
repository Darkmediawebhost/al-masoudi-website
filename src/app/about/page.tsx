import Image from "next/image";
import { CheckCircle2, Target, Eye, Shield, Users, Lightbulb, Leaf, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  { title: "Integrity", icon: Shield, desc: "We uphold the highest standards of honesty and transparency in all our dealings." },
  { title: "Quality", icon: CheckCircle2, desc: "We deliver excellence, ensuring every project meets rigorous industry standards." },
  { title: "Safety", icon: Users, desc: "The well-being of our workforce and clients is our uncompromising priority." },
  { title: "Innovation", icon: Lightbulb, desc: "We embrace new technologies and methods to solve complex engineering challenges." },
  { title: "Customer Focus", icon: Target, desc: "Our clients' success is our success. We build long-term, trusted partnerships." },
  { title: "Sustainability", icon: Leaf, desc: "We are committed to environmentally responsible construction practices." },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-light selection:bg-brand-orange selection:text-white">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_4.png"
            alt="About Al Masoudi Background"
            fill
            className="object-cover opacity-30 transform scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/50 to-brand-light opacity-90 mix-blend-multiply" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedReveal direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">Story</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mb-8">
              Building the future with decades of unyielding excellence and engineering precision.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-orange to-brand-gold mx-auto rounded-full shadow-[0_0_15px_rgba(255,102,0,0.5)]" />
          </AnimatedReveal>
        </div>
      </section>

      {/* 2. "Our Story" (Asymmetrical Narrative) */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[url('/images/hero_5.png')] bg-cover opacity-[0.03] rotate-12 pointer-events-none mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Text Side */}
            <div className="w-full lg:w-1/2 relative z-10">
              <AnimatedReveal direction="right">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-[2px] bg-brand-orange block" />
                  <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Who We Are</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-heading font-black text-brand-dark mb-10 leading-tight">
                  From Local Roots to <br className="hidden md:block"/>
                  <span className="text-brand-orange">Regional Pioneers.</span>
                </h2>
                
                <div className="prose prose-lg text-brand-gray/80 max-w-none">
                  <p className="mb-6 leading-relaxed font-medium">
                    <span className="float-left text-6xl font-heading font-black text-brand-orange mr-3 -mt-2 leading-none">F</span>ounded with a vision to reshape the skyline and infrastructure of the region, Al Masoudi Contracting & Trading Co. has grown from a specialized local contractor into a premier multi-disciplinary group.
                  </p>
                  <p className="mb-10 leading-relaxed">
                    With over 25 years of experience, we have successfully delivered hundreds of projects spanning civil construction, electro-mechanical works, and interior fit-outs. Our trading division complements our construction capabilities by ensuring a steady, high-quality supply of building materials and industrial equipment.
                  </p>
                </div>
                
                <div className="relative bg-brand-light p-8 md:p-10 rounded-[2rem] border border-brand-orange/10 shadow-sm mb-8">
                  <div className="absolute -top-6 -left-4 text-7xl text-brand-orange/20 font-serif font-black">"</div>
                  <p className="text-brand-dark text-xl md:text-2xl leading-relaxed font-heading font-bold italic relative z-10">
                    Our foundation is built on trust, engineered with precision, and delivered with excellence.
                  </p>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl transform translate-x-10 translate-y-10" />
                </div>
                
                {/* Vision 2030 Nod */}
                <div className="flex items-center gap-6 mt-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 inline-flex">
                   <div className="relative w-20 h-12 shrink-0">
                      <Image src="/images/2030vision.jpg" alt="Saudi Vision 2030" fill className="object-contain mix-blend-darken" />
                   </div>
                   <div className="h-10 w-px bg-gray-200" />
                   <p className="text-sm font-semibold text-brand-dark max-w-[200px]">Proudly building in alignment with Vision 2030 goals.</p>
                </div>
                
              </AnimatedReveal>
            </div>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative z-0">
              <AnimatedReveal direction="left">
                <div className="relative w-full aspect-[4/5] md:aspect-square">
                  {/* Backdrop glowing frame */}
                  <div className="absolute inset-4 border-2 border-brand-orange/30 rounded-[3rem] transform translate-x-6 translate-y-6" />
                  
                  {/* Top Image */}
                  <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl z-20 group">
                    <Image src="/images/hero_1.png" alt="Construction Work" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {/* Bottom Image (Glass Effect) */}
                  <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl z-30 group backdrop-blur-md border border-white/50 bg-white/20 p-2 transform -translate-y-10 translate-x-10">
                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                       <Image src="/images/hero_3.png" alt="Engineering Team" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Dual-Pane Glass Cards) */}
      <section className="py-32 relative overflow-hidden bg-brand-dark">
        {/* Deep ambient glowing orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[150px] mix-blend-screen opacity-50 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-[120px] mix-blend-screen opacity-50 transform translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('/images/hero_5.png')] bg-cover opacity-[0.05] mix-blend-overlay" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Vision Pane */}
            <AnimatedReveal direction="up" delay={0.1}>
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] blur-xl transition-opacity duration-700" />
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-10 lg:p-14 rounded-[2.5rem] shadow-2xl h-full relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                    <Eye className="text-white" size={40} />
                  </div>
                  <h3 className="text-4xl font-heading font-black text-white mb-6">Our Vision</h3>
                  <p className="text-gray-300 text-xl leading-relaxed font-light">
                    To be the region's most trusted and innovative contracting and trading partner, recognized for setting new standards in <strong className="text-white">quality, safety, and sustainable development.</strong>
                  </p>
                </div>
              </div>
            </AnimatedReveal>
            
            {/* Mission Pane */}
            <AnimatedReveal direction="up" delay={0.3}>
              <div className="relative group h-full lg:mt-24">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] blur-xl transition-opacity duration-700" />
                <div className="bg-white backdrop-blur-md border border-white/50 p-10 lg:p-14 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] h-full relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-full h-2 bg-brand-dark" />
                  
                  <div className="w-20 h-20 bg-brand-dark rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:-rotate-6 transition-transform duration-500">
                    <Target className="text-brand-orange" size={40} />
                  </div>
                  <h3 className="text-4xl font-heading font-black text-brand-dark mb-6">Our Mission</h3>
                  <p className="text-brand-gray text-xl leading-relaxed font-medium">
                    To deliver exceptional value by combining engineering excellence, premium materials, and unparalleled service, while fostering a culture of continuous improvement and safety.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
            
          </div>
        </div>
      </section>

      {/* 4. Core Values (Interactive Bento Grid) */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedReveal direction="up" className="text-center max-w-4xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-brand-orange block" />
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Principles</span>
              <span className="w-10 h-[2px] bg-brand-orange block" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-dark mb-8">
              Our Core Values
            </h2>
            <p className="text-brand-gray text-xl font-medium">
              The unwavering principles that guide our decisions, shape our actions, and define how we build the future every single day.
            </p>
          </AnimatedReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              // Creating a staggered grid effect by adding margin to middle column on large screens
              const isMiddleCol = idx % 3 === 1;
              return (
                <AnimatedReveal key={val.title} direction="up" delay={idx * 0.1}>
                  <div className={`group relative bg-white p-10 rounded-[2rem] h-full transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,102,0,0.15)] hover:-translate-y-2 border border-transparent hover:border-brand-orange/20 overflow-hidden ${isMiddleCol ? 'lg:translate-y-12' : ''}`}>
                    
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-brand-light group-hover:bg-brand-orange rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm group-hover:shadow-lg">
                        <val.icon className="text-brand-dark group-hover:text-white transform group-hover:scale-110 transition-all duration-500" size={32} />
                      </div>
                      <h4 className="text-2xl font-heading font-black text-brand-dark mb-4 group-hover:text-brand-orange transition-colors duration-300">
                        {val.title}
                      </h4>
                      <p className="text-brand-gray text-lg leading-relaxed group-hover:text-brand-dark transition-colors duration-300">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini CTA block at the very bottom */}
      <section className="bg-brand-dark py-20 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[url('/images/hero_3.png')] bg-cover bg-center opacity-[0.05]" />
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimatedReveal direction="right">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white text-left">
              Want to join our journey?
            </h2>
          </AnimatedReveal>
          <AnimatedReveal direction="left">
            <Button asChild size="lg" className="rounded-full bg-brand-orange hover:bg-white text-white hover:text-brand-dark text-lg px-10 py-6 h-auto shadow-[0_0_30px_rgba(255,102,0,0.3)] transition-all transform hover:scale-105">
              <Link href="/contact" className="flex items-center gap-3">
                Work With Us <ArrowRight size={20} />
              </Link>
            </Button>
          </AnimatedReveal>
        </div>
      </section>

    </main>
  );
}
