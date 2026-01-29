"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const blocks = [
  {
    title: "Global Neural Network",
    description: "Our distributed intelligence grid spans every continent, monitoring and analyzing data streams in real-time. Connected by a lattice of encrypted quantum channels, our network ensures that no anomaly goes unnoticed.",
    image: "/images/global-connectivity.png",
    align: "left", // Image on left, text on right
  },
  {
    title: "Impenetrable Security",
    description: "Built on a foundation of cryptographic spider-web protocols, our security systems trap and neutralize threats before they can breach the perimeter. Your data is protected by layers of adaptive shielding.",
    image: "/images/security-shield.png",
    align: "right", // Image on right, text on left
  },
  {
    title: "Data Sovereignty",
    description: "Retain absolute control over your digital assets. Our architecture empowers you to govern your data flow with precision, backed by automated compliance enforcement and transparency engines.",
    image: "/images/neural-network.png",
    align: "left", // Image on left
  },
];

export default function AIContentBlocks() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0A1A2F_1px,transparent_1px),linear-gradient(to_bottom,#0A1A2F_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="container relative z-10 mx-auto px-4">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={cn(
              "flex min-h-[60vh] flex-col items-center gap-12 py-16 md:flex-row md:py-24",
              block.align === "right" ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: block.align === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full flex-1"
            >
              <div className="relative aspect-square w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/10 p-1 shadow-[0_0_100px_rgba(229,9,20,0.1)] transition-all duration-500 hover:border-spider-red/30 hover:shadow-[0_0_150px_rgba(229,9,20,0.2)] mx-auto">
                 <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-900">
                    <Image
                        src={block.image}
                        alt={block.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: block.align === "left" ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="flex items-center justify-center gap-4 md:justify-start">
                  <div className="h-[2px] w-12 bg-spider-red" />
                  <span className="font-mono text-sm uppercase tracking-widest text-spider-red">
                    0{index + 1} / Analysis
                  </span>
              </div>
              
              <h3 className="mt-4 text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl lg:text-6xl">
                {block.title}
              </h3>
              
              <p className="mt-8 text-lg leading-relaxed text-gray-400">
                {block.description}
              </p>

              <button className="group mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-spider-red">
                Read Documentation
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
