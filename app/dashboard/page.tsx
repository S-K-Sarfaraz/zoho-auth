"use client";

import StatsCard from "@/components/StatsCard";
import ChartWidget from "@/components/ChartWidget";
import { Users, DollarSign, Activity, Eye } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">Overview</h1>
        <p className="text-gray-400">Welcome back, Hero. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Users" 
          value="12,345" 
          trend="+12%" 
          icon={Users} 
        />
        <StatsCard 
          title="Revenue" 
          value="$54,230" 
          trend="+8%" 
          icon={DollarSign}
          color="text-green-500"
        />
        <StatsCard 
          title="Active Sessions" 
          value="1,203" 
          trend="+23%" 
          icon={Activity}
          color="text-blue-500"
        />
        <StatsCard 
          title="Page Views" 
          value="450K" 
          trend="+5%" 
          icon={Eye}
          color="text-yellow-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
           <ChartWidget />
        </div>
        <div className="rounded-xl bg-spider-panel p-6 shadow-lg border border-white/5">
          <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="flex items-start gap-3 border-b border-gray-700 pb-3 last:border-0">
                 <div className="h-2 w-2 mt-2 rounded-full bg-spider-red" />
                 <div>
                   <p className="text-sm font-medium text-gray-200">New user registered</p>
                   <p className="text-xs text-gray-500">2 minutes ago</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
