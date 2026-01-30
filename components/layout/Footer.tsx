"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-bold font-outfit text-white mb-6 block">
              Spider<span className="text-blue-500">Dashboard</span>
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              The ultimate 3D-enhanced dashboard for modern teams. Connect,
              visualize, and analyze your data with unprecedented clarity.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-white font-semibold mb-6 font-outfit">Product</h4>
            <ul className="space-y-4">
              {["Features", "Integrations", "Pricing", "Changelog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Features" ? "/features" : "#"}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2 col-span-6">
            <h4 className="text-white font-semibold mb-6 font-outfit">Company</h4>
            <ul className="space-y-4">
              {["About", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-6 font-outfit">
              Stay Updated
            </h4>
            <p className="text-white/60 mb-6">
              Get the latest updates on features and new 3D components delivered
              to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Spider Dashboard. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
