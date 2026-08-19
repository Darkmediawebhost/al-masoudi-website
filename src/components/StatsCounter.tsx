"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
  icon?: React.ReactNode;
}

export function StatsCounter({ end, label, suffix = "", duration = 2, icon }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <div 
      ref={ref} 
      className="relative group flex flex-col justify-between p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 overflow-hidden cursor-default transition-all duration-500 hover:bg-white/10 hover:border-brand-orange/40 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(255,102,0,0.3)]"
    >
      {/* Background Watermark */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-white transform scale-[4] group-hover:scale-[4.5] group-hover:text-brand-orange group-hover:opacity-10 transition-all duration-700 pointer-events-none origin-bottom-right">
        {icon}
      </div>

      <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-8">
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 group-hover:border-brand-orange/30 group-hover:from-brand-orange/20 transition-all duration-500 shadow-lg">
          <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
            {icon}
          </div>
        </div>
        <div className="h-px flex-1 mx-2 sm:mx-6 bg-gradient-to-r from-white/10 to-transparent group-hover:from-brand-orange/30 transition-colors duration-500" />
      </div>

      <div className="relative z-10">
        <div className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-1 sm:mb-2 tracking-tight group-hover:text-brand-orange transition-colors duration-300 drop-shadow-md">
          {count}
          <span className="text-brand-orange group-hover:text-white transition-colors ml-1">{suffix}</span>
        </div>
        <div className="text-[10px] sm:text-sm text-gray-400 font-semibold uppercase tracking-widest group-hover:text-gray-200 transition-colors duration-300">
          {label}
        </div>
      </div>
    </div>
  );
}
