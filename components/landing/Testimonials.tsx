"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const testimonials = [
  {
    quote:
      "This dashboard completely revolutionized how we handle our analytics. The integration with Zoho is seamless.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow",
    image: "https://i.pravatar.cc/100?u=sarah",
  },
  {
    quote:
      "Stunning design and incredibly fast. The 3D elements add a layer of interactivity I haven't seen before.",
    author: "Michael Chen",
    role: "Product Lead, Apex",
    image: "https://i.pravatar.cc/100?u=michael",
  },
  {
    quote:
      "The best admin template I've used in years. Clean, modular, and easy to extend. Highly recommended!",
    author: "Elena Rodriguez",
    role: "Frontend Dev, Spark",
    image: "https://i.pravatar.cc/100?u=elena",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText
            text="Trusted by Industry Leaders"
            className="text-3xl md:text-5xl font-bold mb-4 font-outfit text-white"
          />
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Don't just take our word for it. See what others are building with
            Spider Dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors"
            >
              <div className="mb-6">
                <span className="text-4xl text-blue-400 font-serif">"</span>
                <p className="text-white/80 italic relative z-10 leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-outfit">
                    {t.author}
                  </h4>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
