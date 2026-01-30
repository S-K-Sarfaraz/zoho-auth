"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";

const FRAME_COUNT = 118;
const SCROLL_HEIGHT = 4000; // Total scrollable height in pixels (adjust for longer/shorter scrub)

export default function HeroScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  
  // Track Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll (0-1) to frame index (0 - 117)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  
  // Button opacity: visible only at the very end
  const buttonOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  // Scroll Indicator Opacity
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  
  // Button interactions
  const buttonPointerEvents = useTransform(scrollYProgress, (val) => val > 0.95 ? "auto" : "none");

  // 1. Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = async () => {
      // Fetch manifest first
      let filenames: string[] = [];
      try {
        const res = await fetch("/frames/manifest.json");
        if (res.ok) {
          filenames = await res.json();
        } else {
             console.error("Failed to load manifest");
             return;
        }
      } catch (e) {
        console.error("Error fetching manifest", e);
        return;
      }

      if (filenames.length === 0) return;

      const promises = [];

      for (let i = 0; i < filenames.length; i++) {
        const img = new Image();
        img.src = `/frames/${filenames[i]}`;

        const promise = new Promise<void>((resolve) => {
          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / filenames.length) * 100));
            resolve();
          };
          img.onerror = () => {
             console.error(`Failed to load frame ${i}`);
             resolve(); // Don't break the chain
          };
        });
        
        imagesRef.current[i] = img; // Store in order (0-based index)
        promises.push(promise);
      }

      await Promise.all(promises);
      setLoading(false);
      // Draw first frame immediately after loading
      renderFrame(0);
    };

    preloadImages();
  }, []);

  // 2. Render Logic (Canvas Object-Fit: Cover)
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    // Canvas dimensions
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Image dimensions
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Calculate aspect ratios
    const canvasRatio = canvasWidth / canvasHeight;
    const imgRatio = imgWidth / imgHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    // "Contain" logic reversed for "Cover"
    if (imgRatio > canvasRatio) {
      // Image is wider than canvas: clamp height, crop width
      drawHeight = canvasHeight;
      drawWidth = imgWidth * (canvasHeight / imgHeight);
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller than canvas: clamp width, crop height
      drawWidth = canvasWidth;
      drawHeight = imgHeight * (canvasWidth / imgWidth);
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    // Clear and Draw
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 3. Subscription to Scroll Change
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.round(latest);
    if (index !== currentFrameRef.current) {
      currentFrameRef.current = index;
      renderFrame(index);
    }
  });

  // 4. Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Set canvas internal resolution to match screen pixel density for sharpness
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        const ctx = canvasRef.current.getContext("2d");
        if(ctx) ctx.scale(dpr, dpr);

        // Reset width/height styles to ensure it fits viewport
        canvasRef.current.style.width = `${window.innerWidth}px`;
        canvasRef.current.style.height = `${window.innerHeight}px`;
        
        // Re-render current frame
        renderFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing

    return () => window.removeEventListener("resize", handleResize);
  }, [loading]); // Re-run after loading to ensure first frame is correct

  return (
    <div 
      ref={containerRef} 
      className="relative bg-black"
      style={{ height: `${SCROLL_HEIGHT}px` }} 
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loader Overlay */}
        {loading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
            <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-800">
               <motion.div 
                 className="h-full bg-spider-red" 
                 style={{ width: `${loadProgress}%` }}
               />
            </div>
            <p className="mt-4 font-mono text-sm text-gray-400">Loading Assets... {loadProgress}%</p>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Cinematic Content Overlay */}
        <motion.div 
          style={{ opacity: buttonOpacity, pointerEvents: buttonPointerEvents as any }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 md:pb-32"
        >
          <div className="text-center">
             <h1 className="mb-6 text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_25px_rgba(229,9,20,0.8)]">
               Enter The Verse
             </h1>
             <button
               onClick={() => signIn("zoho", { callbackUrl: "/dashboard" })}
               className="transform rounded-full bg-spider-red px-8 py-3 text-lg md:px-10 md:py-4 md:text-xl font-bold text-white shadow-[0_0_50px_rgba(229,9,20,0.6)] transition-all hover:scale-105 hover:bg-red-600 hover:shadow-[0_0_80px_rgba(229,9,20,0.8)] active:scale-95"
             >
               Access Dashboard
             </button>
          </div>
        </motion.div>
        
        {/* Scroll Indicator (Fades out) */}
        {!loading && (
           <motion.div 
             style={{ opacity: scrollIndicatorOpacity }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
           >
             <div className="flex flex-col items-center gap-2">
               <span className="text-xs uppercase tracking-widest">Scroll to Begin</span>
               <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent"></div>
             </div>
           </motion.div>
        )}
      </div>
    </div>
  );
}
