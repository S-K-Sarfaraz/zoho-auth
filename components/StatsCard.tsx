"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  color?: string; // e.g. "text-spider-red" or hex
}

export default function StatsCard({ title, value, trend, icon: Icon, color = "text-spider-red" }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
      className="relative overflow-hidden rounded-xl bg-spider-panel p-6 shadow-lg border border-white/5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-white tracking-tight">{value}</h3>
        </div>
        <div className={`rounded-lg bg-white/5 p-2 ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-medium text-green-400">{trend}</span>
        <span className="text-xs text-gray-500">from last month</span>
      </div>
    </motion.div>
  );
}
