"use client";

import { useState } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const text = `*New Contact Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    
    // WhatsApp Number (without plus)
    const whatsappNumber = "966590470783";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormStatus("success");
    e.currentTarget.reset();
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <main className="flex flex-col min-h-screen pt-24 bg-brand-light">
      {/* Page Header */}
      <section className="bg-brand-dark py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedReveal direction="up">
            <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you have a project in mind or just want to learn more about our services, our team is ready to hear from you.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Details & Map */}
            <div className="w-full lg:w-1/2 space-y-12">
              <AnimatedReveal direction="right">
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-dark mb-2">Head Office</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">
                        Eastern Ring Branch Rd, Ar Rayyan<br />
                        Riyadh 14211, KSA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Phone className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-dark mb-2">Phone</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">
                        +966 590 470 783
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Mail className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-dark mb-2">Email</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">
                        info@masoudi-sa.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Clock className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-dark mb-2">Working Hours</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 h-64 md:h-[450px] relative overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.0272811059963!2d46.7751157!3d24.6915889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f06c96b28d157%3A0x96ce321ee3f850e8!2sEastern%20Ring%20Branch%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1784269356745!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded"
                  ></iframe>
                </div>
              </AnimatedReveal>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <AnimatedReveal direction="left" className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-brand-orange">
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-2">Send us a Message</h2>
                <p className="text-brand-gray mb-8">Fill out the form below and we will get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-brand-dark">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        className="w-full px-4 py-3 bg-brand-light/50 border border-gray-200 rounded-md text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-brand-dark">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required 
                        className="w-full px-4 py-3 bg-brand-light/50 border border-gray-200 rounded-md text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-brand-dark">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        className="w-full px-4 py-3 bg-brand-light/50 border border-gray-200 rounded-md text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-brand-dark">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        required 
                        className="w-full px-4 py-3 bg-brand-light/50 border border-gray-200 rounded-md text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-brand-dark">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      required 
                      rows={5}
                      className="w-full px-4 py-3 bg-brand-light/50 border border-gray-200 rounded-md text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-none h-14 text-lg bg-brand-orange hover:bg-brand-dark"
                    disabled={formStatus !== "idle"}
                  >
                    {formStatus === "idle" && <><Send className="mr-2" size={20} /> Send Message</>}
                    {formStatus === "submitting" && "Sending..."}
                    {formStatus === "success" && "Message Sent Successfully!"}
                  </Button>
                </form>

                {/* WhatsApp Quick Contact */}
                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-brand-gray font-semibold text-sm">Need immediate assistance?</span>
                  <a 
                    href="https://wa.me/966580430781" 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors"
                  >
                    <MessageCircle size={24} /> WhatsApp Us
                  </a>
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}
