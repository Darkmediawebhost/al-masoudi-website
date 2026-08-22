import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HardHat, Building2, Wrench, Factory, Truck, Calendar, Users, Globe, Award, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { StatsCounter } from "@/components/StatsCounter";
import { HeroVideo } from "@/components/HeroVideo";

const services = [
  {
    title: "Manpower Supply",
    description: "Providing a reliable, skilled, and unskilled workforce tailored for your specific project needs.",
    icon: Users,
    href: "/services/manpower-supply",
    image: "/images/manpower_supply_hero.jpg"
  },
  {
    title: "Equipment Rental",
    description: "Extensive fleet of heavy machinery and construction equipment available for short and long-term rental.",
    icon: Factory,
    href: "/services/equipment-rental",
    image: "/images/equipment_rental_hero.jpg"
  },
  {
    title: "Industrial Support",
    description: "Comprehensive support for industrial operations including maintenance and logistical support.",
    icon: Wrench,
    href: "/services/industrial-support-services",
    image: "/images/industrial_support_hero.jpg"
  },
  {
    title: "Trading & Projects",
    description: "Reliable supply chain management and procurement of essential project materials.",
    icon: Truck,
    href: "/services/trading-and-project-solutions",
    image: "/images/trading_solutions_hero.jpg"
  },
  {
    title: "Portacabin",
    description: "High-quality temporary facilities and site offices.",
    icon: Building2,
    href: "/services/portacabin",
    image: "/images/portacabin_av_hero.jpg"
  },
  {
    title: "AV Solutions",
    description: "Professional audio-visual setups for sites and events.",
    icon: MonitorPlay,
    href: "/services/av-solutions",
    image: "/images/av_solutions_hero.jpg"
  }
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-screen min-h-[450px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <HeroVideo />
      </section>


   {/* Stats Section */}
      {/* <section className="relative z-30 -mt-24 md:-mt-32 mb-16 lg:mb-24 px-1 md:px-4">
        <div className="container mx-auto">
          <div className="bg-brand-dark/70 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 lg:p-12 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-r from-brand-orange/20 to-brand-gold/20 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative z-10">
              <AnimatedReveal direction="up" delay={0.1}>
                <StatsCounter end={25} label="Years Experience" suffix="+" icon={<Award className="text-white w-6 h-6 sm:w-8 sm:h-8 group-hover:text-brand-orange transition-colors" />} />
              </AnimatedReveal>
              <AnimatedReveal direction="up" delay={0.2}>
                <StatsCounter end={150} label="Projects Completed" suffix="+" icon={<CheckCircle2 className="text-white w-6 h-6 sm:w-8 sm:h-8 group-hover:text-brand-orange transition-colors" />} />
              </AnimatedReveal>
              <AnimatedReveal direction="up" delay={0.3}>
                <StatsCounter end={50} label="Active Clients" suffix="+" icon={<Users className="text-white w-6 h-6 sm:w-8 sm:h-8 group-hover:text-brand-orange transition-colors" />} />
              </AnimatedReveal>
              <AnimatedReveal direction="up" delay={0.4}>
                <StatsCounter end={12} label="Countries Served" icon={<Globe className="text-white w-6 h-6 sm:w-8 sm:h-8 group-hover:text-brand-orange transition-colors" />} />
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section> */}


      {/* About Preview */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        
        {/* Elegant glowing orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative z-0">
              <AnimatedReveal direction="right">
                <div className="relative group pl-6 pb-6">
                  {/* Decorative Frame */}
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-brand-orange/30 rounded-[2.5rem] transform translate-x-6 translate-y-6 transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8" />
                  
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <Image
                      src="/images/image.png"
                      alt="Our Team at Work"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-80" />
                  </div>
                  
                  {/* Floating Badge overlay */}
                  {/* <div className="absolute -left-8 bottom-24 bg-white/95 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-2xl border border-brand-orange/20 flex items-center gap-4 hover:-translate-y-2 transition-all duration-500 cursor-default group z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-orange rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange/80 flex items-center justify-center text-white shadow-lg">
                        <Award size={24} />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-black text-brand-dark">Award</div>
                      <div className="text-xs font-bold text-brand-orange uppercase tracking-widest">Winning</div>
                    </div>
                  </div> */}
                </div>
              </AnimatedReveal>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 z-10 lg:-ml-12">
              <AnimatedReveal direction="up" delay={0.2}>
                <div className="bg-white/80 backdrop-blur-2xl border border-white/50 p-10 lg:p-14 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  {/* Glassmorphic sheen */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4 mt-2">
                      <span className="w-10 h-[2px] bg-brand-orange block" />
                      <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Legacy</span>
                    </div>
                    <div className="relative w-24 h-12 shrink-0">
                      <Image src="/images/2030vision.jpg" alt="Saudi Vision 2030" fill className="object-contain mix-blend-darken" />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl lg:text-6xl font-heading font-black text-brand-dark mb-8 leading-[1.1] tracking-tight">
                    Pioneering <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold relative inline-block">
                      Infrastructure
                      {/* Underline swoosh */}
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                      </svg>
                    </span>
                  </h2>
                  
                  <p className="text-brand-gray/90 text-lg mb-6 leading-relaxed font-medium">
                    For over two decades, Al Masoudi Contracting & Trading Co. has stood at the forefront of regional development, turning visionary blueprints into reality.
                  </p>
                  
                  <p className="text-brand-gray/80 text-lg mb-10 leading-relaxed">
                    Our unyielding commitment to safety, unparalleled quality, and timely delivery has forged trusted partnerships worldwide.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <Button asChild variant="default" className="rounded-full bg-brand-dark text-white hover:bg-brand-orange hover:shadow-xl hover:shadow-brand-orange/30 transition-all duration-500 px-8 py-7 text-lg group w-full sm:w-auto border border-transparent hover:border-brand-orange/20">
                      <Link href="/about" className="flex items-center justify-center gap-3">
                        Discover Our Story 
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-orange transition-colors">
                          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </Link>
                    </Button>
                    <Link href="/contact" className="text-brand-dark font-bold hover:text-brand-orange transition-colors px-6 py-4 flex items-center gap-3 group">
                      Get in Touch
                      <div className="w-8 h-[2px] bg-brand-gray/30 group-hover:bg-brand-orange group-hover:w-12 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

   

      {/* Services Overview */}
      <section className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <AnimatedReveal direction="up" className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-1 bg-brand-orange block rounded-full" />
                <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight">
                Comprehensive<br/>Solutions.
              </h2>
            </AnimatedReveal>
            <AnimatedReveal direction="left" delay={0.2}>
              <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-brand-dark transition-all duration-300 px-8 py-6 text-lg">
                <Link href="/services">Explore All Services</Link>
              </Button>
            </AnimatedReveal>
          </div>

          <AnimatedReveal direction="up" delay={0.3}>
            <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-4 lg:gap-6 w-full">
              {services.map((service, index) => (
                <Link href={service.href} key={index} className="relative group flex-none h-[280px] sm:h-[320px] lg:h-auto lg:flex-1 lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl lg:rounded-[3rem] overflow-hidden cursor-pointer border border-white/10 hover:border-brand-orange/50 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(255,102,0,0.3)] block">
                  
                  {/* Background Image */}
                  <Image src={service.image} alt={service.title} fill className="object-cover opacity-80 lg:opacity-40 group-hover:opacity-80 transition-opacity duration-700 grayscale-0 lg:grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent opacity-100 lg:opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Content wrapper */}
                  <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
                    
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-4 lg:gap-6 mb-2">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-brand-orange group-hover:border-transparent transition-all duration-500 shadow-lg group-hover:scale-110">
                        <service.icon size={28} className="text-white" />
                      </div>
                      
                      {/* Title: Always visible on mobile, hidden on desktop until hover */}
                      <h3 className="text-xl lg:text-3xl font-heading font-black text-white whitespace-nowrap opacity-100 lg:opacity-0 group-hover:opacity-100 lg:translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description (Visible on mobile, hidden until hover on desktop) */}
                    <div className="overflow-hidden max-h-48 lg:max-h-0 group-hover:max-h-48 transition-all duration-700 ease-in-out opacity-100 lg:opacity-0 group-hover:opacity-100 pl-2 lg:pl-0">
                       <p className="text-gray-200 text-sm lg:text-lg mb-4 lg:mb-6 max-w-sm font-medium mt-2 lg:mt-6 drop-shadow-sm">
                         {service.description}
                       </p>
                       <div className="flex items-center gap-2 lg:gap-3 text-brand-orange font-bold uppercase tracking-widest text-[10px] lg:text-sm bg-brand-dark/50 lg:inline-flex px-3 lg:px-4 py-1.5 lg:py-2 rounded-full backdrop-blur-md border border-brand-orange/30 w-fit">
                         Explore <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                       </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Why Choose Us (Bento Box Grid) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <AnimatedReveal direction="up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-dark mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-brand-gray text-xl">We don't just build structures; we build enduring partnerships grounded in excellence and trust.</p>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Large Bento Box */}
            <AnimatedReveal direction="up" delay={0.1} className="md:col-span-2 md:row-span-2">
              <div className="group relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <Image src="/images/hero_1.png" alt="Machinery" fill className="object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-10 w-full z-10">
                  <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-heading font-black text-white mb-4">Uncompromising Quality & Safety</h3>
                  <p className="text-gray-300 text-lg max-w-lg">Our safety-first approach and strict quality control protocols ensure every project exceeds industry standards.</p>
                </div>
              </div>
            </AnimatedReveal>

            {/* Small Bento Box 1 */}
            <AnimatedReveal direction="up" delay={0.2} className="h-full">
              <div className="group bg-brand-light p-8 lg:p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-brand-orange/30">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-dark mb-6 shadow-sm group-hover:text-brand-orange transition-colors">
                   <HardHat size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">Decades of Expertise</h3>
                <p className="text-brand-gray leading-relaxed">Deep regional knowledge combined with global best practices allows us to tackle the most complex engineering challenges.</p>
              </div>
            </AnimatedReveal>

            {/* Small Bento Box 2 */}
            <AnimatedReveal direction="up" delay={0.3} className="h-full">
              <div className="group bg-brand-dark p-8 lg:p-10 rounded-3xl h-full shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-brand-dark hover:border-brand-orange/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-brand-orange/40 transition-colors duration-700" />
                <div className="relative z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-6">
                   <Calendar size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4 relative z-10 group-hover:text-brand-orange transition-colors">On-Time Delivery</h3>
                <p className="text-gray-400 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">Advanced project management methodologies guarantee we meet strict deadlines without sacrificing quality.</p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-brand-dark">
        {/* Animated glowing mesh background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-orange/30 rounded-full blur-[120px] mix-blend-screen animate-pulse -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-gold/20 rounded-full blur-[100px] mix-blend-screen -translate-y-1/4" />
          <div className="absolute inset-0 bg-[url('/images/hero_5.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-brand-dark/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedReveal direction="up">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-8 tracking-tight">
              Ready to build <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">the future together?</span>
            </h2>
            <p className="text-gray-300 text-xl lg:text-2xl max-w-3xl mx-auto mb-12 font-light">
              Contact our team of experts today for a consultation and discover how we can add value to your next major development.
            </p>
            <Button asChild size="lg" className="rounded-full bg-brand-orange hover:bg-white text-white hover:text-brand-dark text-xl h-16 px-12 shadow-[0_0_50px_rgba(255,102,0,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-500 transform hover:-translate-y-2">
              <Link href="/contact" className="flex items-center gap-3">
                Request a Quote <ArrowRight size={24} />
              </Link>
            </Button>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
