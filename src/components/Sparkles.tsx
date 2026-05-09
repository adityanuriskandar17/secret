"use client";

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface SparklesProps {
  active: boolean;
  count?: number;
}

export default function Sparkles({ active, count = 30 }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (active) {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < count; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 4 + Math.random() * 8,
          delay: Math.random() * 2,
        });
      }
      setSparkles(newSparkles);
    }
  }, [active, count]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size / 2}px rgba(255, 215, 0, 0.6)`,
          }}
        />
      ))}
    </div>
  );
}
