"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("zoho", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-spider-blue p-4 text-white">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-spider-panel p-8 shadow-2xl border border-spider-panel/50">
        
        {/* Animated Background Effect */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-spider-red/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-spider-accent/20 blur-3xl"></div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="relative z-10 flex flex-col items-center gap-6"
        >
          <div className="rounded-full bg-spider-red/10 p-4 ring-1 ring-spider-red/50">
            <Lock className="h-10 w-10 text-spider-red" />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Access Restricted
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Please authenticate with your Zoho ID to enter the dashboard.
            </p>
          </div>

          <button
            onClick={handleLogin}
            className="group relative flex w-full justify-center rounded-lg bg-spider-red px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-spider-red/30 focus:outline-none focus:ring-2 focus:ring-spider-red focus:ring-offset-2 focus:ring-offset-spider-panel"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* Optional Icon */}
            </span>
            Sign in with Zoho
          </button>
        </motion.div>
      </div>
    </div>
  );
}
