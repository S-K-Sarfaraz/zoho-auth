"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { motion } from "framer-motion";

import * as THREE from "three";

function ParticleSphere(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random points in a sphere
  const [positions] = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 1.5 * Math.cbrt(Math.random()); // Radius 1.5

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
            <PointMaterial
                transparent
                color="#3B82F6"
                size={0.005} // Smaller size for "star" look
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    </group>
  );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <Float
                speed={1.5} // Animation speed
                rotationIntensity={1} // XYZ rotation intensity
                floatIntensity={0.5} // Up/down float intensity
            >
                <ParticleSphere />
            </Float>
        </>
    )
}

export default function FeaturesHero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
            <h2 className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
                Core Architecture
            </h2>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                The Engine
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Powered by a distributed neural lattice, Spider Dashboard processes 
                 exabytes of data with quantum-resistant encryption.
            </p>
        </motion.div>
      </div>

       <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-widest animate-pulse"
       >
         Scroll to Initialize
       </motion.div>
    </section>
  );
}
