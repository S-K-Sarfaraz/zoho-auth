"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Features", href: "#features" },
  { title: "Analysis", href: "#analysis" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Contact", href: "#contact" },
];

export default function AnimatedNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      } as any,
    },
  };

  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      {/* Floating Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed right-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-spider-red text-white shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-transform hover:scale-110 active:scale-95"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="flex flex-col gap-1.5"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            className="h-0.5 w-6 bg-white block"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="h-0.5 w-6 bg-white block"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 },
            }}
            className="h-0.5 w-6 bg-white block"
          />
        </motion.div>
      </button>

      {/* Full Screen Overlay */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
            
            {/* Background Decorative Elements */}
            <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(229,9,20,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

          <motion.ul
            variants={containerVariants}
            className="relative z-10 flex flex-col items-center gap-8 text-center"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.title}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="group relative text-5xl font-black uppercase tracking-tighter text-white sm:text-7xl md:text-8xl"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:stroke-white group-hover:stroke-2" style={{ WebkitTextStroke: "1px transparent" }}>{link.title}</span>
                  {/* Outline / Stroke effect on hover */}
                  <span className="absolute left-0 top-0 -z-10 text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white" style={{ WebkitTextStroke: "1px #E50914" }}>
                    {link.title}
                  </span>
                  
                  {/* Glitch Overlay */}
                  <div className="absolute inset-0 translate-x-[2px] translate-y-[2px] text-spider-red opacity-0 blur-sm mix-blend-screen transition-opacity group-hover:opacity-50">
                      {link.title}
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Footer Info */}
           <motion.div 
            variants={itemVariants} 
            className="absolute bottom-10 left-0 w-full text-center text-gray-500 font-mono text-sm"
          >
            <p>© 2026 SPIDER INTELLIGENCE SYSTEMS</p>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
