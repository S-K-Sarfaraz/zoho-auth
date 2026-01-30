"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxFeatureProps {
    title: string;
    description: string;
    image: string;
    align?: "left" | "right";
    subtitle: string;
}

export default function ParallaxFeature({ title, description, image, align = "left", subtitle }: ParallaxFeatureProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.9], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden bg-black">
        {/* Background Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <span className="text-[20vw] font-black uppercase text-white whitespace-nowrap">
                {subtitle}
            </span>
        </div>

      <div className={cn(
        "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full relative z-10",
         align === "right" ? "md:grid-flow-dense" : ""
      )}>
        
        {/* Text Content */}
        <div className={cn(align === "right" ? "md:col-start-2" : "")}>
           <motion.div style={{ opacity, y }}>
               <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">
                   {subtitle}
               </span>
               <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-outfit uppercase leading-[0.9]">
                   {title}
               </h2>
               <p className="text-xl text-white/60 font-light leading-relaxed">
                   {description}
               </p>
           </motion.div>
        </div>

        {/* Image / Graphic Content */}
        <div className={cn(
             align === "right" ? "md:col-start-1" : "",
             "relative aspect-square"
        )}>
           <motion.div 
             style={{ scale }}
             className="w-full h-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
           >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
           </motion.div>
        </div>

      </div>
    </section>
  );
}
