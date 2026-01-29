"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-spider-panel/50 bg-spider-blue/80 px-6 backdrop-blur-md">
      {/* Search Bar (Optional) */}
      <div className="hidden md:flex items-center gap-2 rounded-full bg-spider-panel/50 px-4 py-1.5 focus-within:ring-1 focus-within:ring-spider-red">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none w-64"
        />
      </div>
      <div className="md:hidden"></div> {/* Spacer for mobile */}

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-gray-400 hover:bg-spider-panel hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-spider-red ring-2 ring-spider-blue"></span>
        </button>
        
        {/* User Avatar Placeholder */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-spider-red to-spider-accent ring-2 ring-spider-panel cursor-pointer"></div>
      </div>
    </header>
  );
}
