"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 -skew-y-3 z-0 transform origin-top-left scale-110" />
        
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedText
              text="Ready to Transform Your Analytics?"
              className="text-4xl md:text-5xl font-bold mb-6 font-outfit text-white justify-start"
            />
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Join thousands of developers and teams who are building the future
              of data visualization. Get started with Spider Dashboard today.
            </p>
            
            <ul className="space-y-4 mb-8">
                {[
                    "Instant Zoho Integration",
                    "Advanced 3D Components",
                    "Real-time Collaboration",
                    "Enterprise Security"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                         <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                             ✓
                         </div>
                         {item}
                    </li>
                ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
