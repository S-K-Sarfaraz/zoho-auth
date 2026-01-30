"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Award, Database, Cloud } from "lucide-react";

const partners = [
  { name: "Zoho", icon: Database },
  { name: "Next.js", icon: Globe },
  { name: "Vercel", icon: Cloud },
  { name: "React", icon: Zap },
  { name: "Tailwind", icon: Shield },
  { name: "Framer", icon: Award },
];

export default function Carousel() {
  return (
    <div className="w-full py-20 overflow-hidden bg-black/50 backdrop-blur-sm border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-center text-white/50 text-sm tracking-widest uppercase font-sans">
          Powered By Modern Tech
        </h3>
      </div>
      
      <div className="relative w-full flex overflow-hidden mask-gradient-x">
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-20" />

        <motion.div
          className="flex gap-8 md:gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Double the array to create seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 cursor-default group"
            >
              <partner.icon className="w-8 h-8 group-hover:text-blue-500 transition-colors" />
              <span className="text-xl font-bold font-sans tracking-tight opacity-70 group-hover:opacity-100">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
