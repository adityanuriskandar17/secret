"use client";

import { useEffect, useState } from "react";

const emojis = ["🎈", "🎉", "🎊", "✨", "🌟", "💫", "🎂", "🎁", "🎀", "💖", "🩷", "💝"];

interface EmojiParticle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface FloatingEmojisProps {
  active: boolean;
  count?: number;
}

export default function FloatingEmojis({ active, count = 20 }: FloatingEmojisProps) {
  const [particles, setParticles] = useState<EmojiParticle[]>([]);

  useEffect(() => {
    if (active) {
      const newParticles: EmojiParticle[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 4,
        });
      }
      setParticles(newParticles);
    }
  }, [active, count]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl md:text-4xl floating-emoji"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}
