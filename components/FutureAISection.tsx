"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Neural Architecture",
    description: "Multi-layered cognitive processing mimicking human synaptic responses for unprecedented decision-making accuracy.",
    delay: 0.1,
  },
  {
    title: "Quantum Processing",
    description: "Leveraging quantum states to process complex datasets at speeds previously thought impossible in classical computing.",
    delay: 0.2,
  },
  {
    title: "Adaptive Learning",
    description: "Self-evolving algorithms that rewrite their own codebase to adapt to new threats and opportunities in real-time.",
    delay: 0.3,
  },
];

export default function FutureAISection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-spider-red selection:text-white">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.15),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-24">
        
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-spider-red">
            System Upgrade Available
          </h2>
          <h3 className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent sm:text-7xl md:text-8xl">
            The Future Is Now
          </h3>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 p-1 hover:border-spider-red/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative flex h-full flex-col justify-between rounded-xl bg-black/50 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-black/80">
                <div>
                  <div className="mb-6 h-1 w-12 bg-spider-red" />
                  <h4 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">
                    {feature.title}
                  </h4>
                  <p className="font-mono text-sm leading-relaxed text-gray-400">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase text-spider-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Initialize</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="mt-32 max-w-4xl text-center"
        >
          <p className="text-xl text-gray-400 sm:text-2xl">
            Experience the next evolution of digital intelligence. 
            <span className="block mt-2 text-white">Are you ready to ascend?</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
