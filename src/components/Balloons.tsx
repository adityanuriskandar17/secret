"use client";

import { motion } from "framer-motion";

interface BalloonsProps {
  active: boolean;
}

const balloonColors = [
  { bg: "#ff6b9d", string: "#e91e63" },
  { bg: "#ffd93d", string: "#ffc107" },
  { bg: "#6bcf7f", string: "#4caf50" },
  { bg: "#4ecdc4", string: "#009688" },
  { bg: "#a855f7", string: "#7c3aed" },
  { bg: "#ff8fab", string: "#f06292" },
  { bg: "#95e1d3", string: "#80cbc4" },
];

export default function Balloons({ active }: BalloonsProps) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {[...Array(15)].map((_, i) => {
        const color = balloonColors[i % balloonColors.length];
        const startX = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 8 + Math.random() * 6;
        const scale = 0.8 + Math.random() * 0.6;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: "110vh", x: `${startX}vw`, scale: 0 }}
            animate={{
              y: "-20vh",
              x: `${startX + (Math.random() - 0.5) * 20}vw`,
              scale: scale,
            }}
            transition={{
              duration: duration,
              delay: delay,
              ease: "easeOut",
              x: {
                duration: duration,
                ease: "easeInOut",
              },
            }}
          >
            <svg width="60" height="100" viewBox="0 0 60 100">
              {/* String */}
              <line
                x1="30"
                y1="50"
                x2="30"
                y2="100"
                stroke={color.string}
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              {/* Balloon */}
              <ellipse
                cx="30"
                cy="35"
                rx="25"
                ry="35"
                fill={color.bg}
                opacity="0.9"
              />
              {/* Highlight */}
              <ellipse
                cx="22"
                cy="25"
                rx="8"
                ry="12"
                fill="rgba(255,255,255,0.3)"
              />
              {/* Knot */}
              <polygon
                points="27,68 30,72 33,68"
                fill={color.bg}
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
