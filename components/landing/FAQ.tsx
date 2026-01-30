"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimatedText from "./AnimatedText";

const faqs = [
  {
    question: "How does the Zoho integration work?",
    answer:
      "We use the official Zoho API to securely sync your data in real-time. You just need to authenticate once using our secure OAuth flow, and the dashboard handles the rest automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. We never store your raw Zoho credentials, only secure access tokens which are refreshed automatically.",
  },
  {
    question: "Can I customize the 3D components?",
    answer:
      "Yes! All 3D elements are built with Three.js and React Three Fiber. You can customize colors, shapes, animations, and camera angles directly via props or by editing the component files.",
  },
  {
    question: "Do you offer support for custom integrations?",
    answer:
      "We offer priority support for Enterprise plans, including assistance within custom integration development. Contact our sales team for more details on bespoke solutions.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
            <AnimatedText
            text="Frequently Asked Questions"
            className="text-3xl md:text-5xl font-bold mb-4 font-outfit text-white"
            />
          <p className="text-white/60 font-light">
            Everything you need to know about the platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white/10 border-blue-500/50"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white font-outfit">
                  {faq.question}
                </span>
                <span className="ml-4 text-white/50">
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
