"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface CandleProps {
  onBlowOut: () => void;
  blownOut: boolean;
}

export default function Candle({ onBlowOut, blownOut }: CandleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={!blownOut ? onBlowOut : undefined}
    >
      {/* Flame */}
      {!blownOut && (
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2"
          animate={{
            scaleY: isHovered ? [1, 1.2, 0.8, 1.1, 0.9, 1] : [1, 1.1, 0.95, 1.05, 0.98, 1],
            rotate: isHovered ? [0, -5, 5, -3, 3, 0] : [0, 2, -2, 1, -1, 0],
          }}
          transition={{
            duration: isHovered ? 0.5 : 0.8,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 w-8 h-12 bg-orange-400 rounded-full blur-xl opacity-60 -translate-x-1/4" />
            {/* Inner flame */}
            <svg width="32" height="48" viewBox="0 0 32 48">
              <defs>
                <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="50%" stopColor="#f7c600" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <path
                d="M16 48 Q4 35 4 20 Q4 8 16 0 Q28 8 28 20 Q28 35 16 48"
                fill="url(#flameGrad)"
              />
            </svg>
          </div>
        </motion.div>
      )}

      {/* Candle body */}
      <motion.div
        className="w-4 h-16 bg-gradient-to-b from-rose-100 to-rose-200 rounded-t-sm rounded-b-sm relative shadow-inner border-x border-white/40"
        animate={blownOut ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Spiral Stripes */}
        <div className="absolute inset-0 overflow-hidden rounded-t-sm rounded-b-sm">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[150%] h-1.5 bg-rose-400/40 rotate-[-30deg] -left-1"
              style={{ top: `${15 + i * 20}%` }}
            />
          ))}
        </div>
        {/* Wick */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-slate-800 rounded-full" />
      </motion.div>

      {/* Click hint */}
      {!blownOut && (
        <motion.div
          className="absolute -right-24 top-1/2 -translate-y-1/2 whitespace-nowrap bg-rose-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-rose-300/30"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="text-[10px] text-rose-200 font-light tracking-wider">
            Click to blow
          </p>
        </motion.div>
      )}
    </div>
  );
}
