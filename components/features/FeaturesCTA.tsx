"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturesCTA() {
  return (
    <section className="py-32 bg-black text-center relative overflow-hidden">
        {/* Background Beams */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8"
        >
          Ready to <span className="text-blue-500">Ascend?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/60 mb-12 font-light max-w-2xl mx-auto"
        >
          Join the elite organizations powering their intelligence with Spider Dashboard.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-black rounded-full font-bold text-xl tracking-tight transition-all hover:bg-blue-500 hover:text-white"
        >
          Start Free Trial
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-ping opacity-75 duration-1000" />
        </motion.button>
      </div>
    </section>
  );
}
