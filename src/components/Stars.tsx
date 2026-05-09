"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nebula Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900/80 to-black" />

      {/* Moving gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-[100px] bg-rose-600/10"
        animate={{
          x: ["-10%", "110%"],
          y: ["10%", "30%", "10%"],
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-[120px] bg-amber-600/10"
        animate={{
          x: ["110%", "-10%"],
          y: ["60%", "40%", "60%"],
        }}
        transition={{
          x: { duration: 30, repeat: Infinity, ease: "linear" },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
