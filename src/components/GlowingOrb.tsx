"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

interface GlowingOrbProps {
  onClick: () => void;
}

export default function GlowingOrb({ onClick }: GlowingOrbProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Light burst effect
    confetti({
      particleCount: 30,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ffffff", "#fde047", "#ffd700"],
      shapes: ["circle"],
      scalar: 0.8,
    });

    onClick();
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
        }}
        animate={{
          scale: isHovered ? [1, 1.3, 1] : [0.9, 1.2, 0.9],
          opacity: isHovered ? [0.5, 0.8, 0.5] : [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main orb */}
      <motion.div
        className="w-28 h-28 md:w-36 md:h-36 rounded-full relative"
        style={{
          background: "radial-gradient(circle at 30% 30%, #fdfbfb, #ebedee 60%, #a1a1aa)",
          boxShadow: isHovered
            ? "0 0 60px rgba(248, 250, 252, 0.8), inset 0 0 30px rgba(203, 213, 225, 0.5)"
            : "0 0 40px rgba(248, 250, 252, 0.6), inset 0 0 20px rgba(148, 163, 184, 0.4)",
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Inner highlight */}
        <div
          className="absolute top-[15%] left-[20%] w-[25%] h-[30%] rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
      </motion.div>

      {/* Tap text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: isHovered ? 0 : 0.5 }}
      >
        <span className="text-slate-800 font-bold text-xs uppercase tracking-[0.2em]">
          Tap
        </span>
      </motion.div>
    </motion.div>
  );
}
