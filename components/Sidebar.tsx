"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Activity, 
  Settings, 
  User, 
  LogOut,
  Menu,
  X 
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils"; 
// Note: I will create @/lib/utils for clsx/tailwind-merge next if it doesn't exist, 
// or I will implement the logic inline for now if I don't want to create extra files yet.
// Actually, standard practice suggests having utils. I'll define a simple helper inline or create it.
// I'll create components/Sidebar.tsx and assume I'll make lib/utils.ts right after.

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: Activity },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Profile", href: "/dashboard/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-spider-panel rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Container */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }} // You might want a different behavior for desktop (always open)
        // Let's make it responsive: On md screens, it should be relative/fixed and always visible usually, 
        // or sidebar style. For simplicity in this iteration, standard sidebar.
        className={`fixed md:relative z-40 h-screen w-64 flex-shrink-0 flex-col bg-spider-blue border-r border-spider-panel/50 transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} md:translate-x-0`}
        // Actually, mixing framer-motion animate with CSS classes for responsiveness can be tricky.
        // Let's stick to CSS for responsive toggle and Framer for interactions.
      >
        <div className="flex h-full flex-col px-4 py-6">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2 px-2">
            <div className="h-8 w-8 rounded-full bg-spider-red flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold tracking-wider text-white uppercase">SpiderApp</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 
                    ${isActive 
                      ? "bg-spider-red/10 text-spider-red shadow-[0_0_10px_rgba(229,9,20,0.2)]" 
                      : "text-gray-400 hover:bg-spider-panel hover:text-white"
                    }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-spider-red" : "text-gray-400 group-hover:text-white"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User / Footer */}
          <div className="mt-auto border-t border-spider-panel/50 pt-4">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-spider-panel hover:text-white">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
