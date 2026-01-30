"use client";

import { motion } from "framer-motion";
import { Grid, Lock, Zap, Cpu, Layers, Globe } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Global Sync",
    description: "Real-time data replication across 12 availability zones.",
    icon: Globe,
    className: "md:col-span-2 md:row-span-2", // Large Square
    gradient: "from-blue-600/20 to-cyan-400/20",
    image: "/images/bento-data.png",
  },
  {
    title: "Encryption",
    description: "AES-256 GCM encryption at rest and in transit.",
    icon: Lock,
    className: "md:col-span-1 md:row-span-1", // Small
    gradient: "from-purple-600/20 to-pink-400/20",
     image: "/images/bento-lock.png",
  },
  {
    title: "Neural Proc",
    description: "AI-driven anomaly detection in < 2ms.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-1", // Small
    gradient: "from-amber-600/20 to-orange-400/20",
     image: "/images/bento-chip.png",
  },
  {
      title: "Smart Cache",
      description: "Predictive data pre-fetching.",
      icon: Zap,
      className: "md:col-span-1 md:row-span-1", // Small - Fills Row 2 Col 4
      gradient: "from-yellow-600/20 to-amber-400/20",
      image: "/images/bento-cache.png",
  },
  {
    title: "Modular API",
    description: "Extensible GraphQL endpoints for custom integration.",
    icon: Layers,
    className: "md:col-span-1 md:row-span-2", // Tall
    gradient: "from-emerald-600/20 to-green-400/20",
     image: "/images/bento-layers.png",
  },
  {
    title: "Instant Deploy",
    description: "One-click deployment to edge networks.",
    icon: Zap,
    className: "md:col-span-2 md:row-span-1", // Wide
    gradient: "from-blue-600/20 to-indigo-400/20",
    image: "/images/bento-instant.png",
  },
  {
    title: "Edge Network",
    description: "Low-latency delivery via our global CDN mesh.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1", // Square to fill gap
    gradient: "from-cyan-600/20 to-teal-400/20",
    image: "/images/bento-edge.png",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-outfit">
            Modular Intelligence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A suite of tools designed to work together seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[250px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative rounded-3xl p-8 border border-white/10 overflow-hidden group hover:border-white/20 transition-colors",
                "backdrop-blur-sm bg-white/5",
                feature.className
              )}
            >
              {/* Background Gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  feature.gradient
                )}
              />

              {/* Background Image */}
               {feature.image && (
                 <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-screen">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                    />
                 </div>
               )}
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-outfit group-hover:translate-x-1 transition-transform">
                        {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                        {feature.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
