"use client";

import { motion } from "framer-motion";

export function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-center bg-black"
        >
          <source src="/images/Al%20Masoudi.mp4" type="video/mp4" />
        </video>

        {/* Watermark Cover - Angled Design Element */}
        <div className="absolute bottom-[23%] mt-[-30px] left-0 z-20 md:hidden">
          <div
            className="bg-[#D45903] text-white pl-4 pr-10 py-3 shadow-[0_10px_40px_rgba(212,89,3,0.5)] border-t border-r border-white/20 backdrop-blur-md"
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="font-heading font-black tracking-widest text-[10px] md:text-sm uppercase drop-shadow-md">
                Excellence Delivered
              </span>
            </div>
          </div>
        </div>
      </motion.div>


    </div>
  );
}
