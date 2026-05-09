"use client";

import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
  active: boolean;
}

export default function Confetti({ active }: ConfettiProps) {
  const fireConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 100,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#ff6b9d", "#ffd93d", "#6bcf7f", "#4ecdc4", "#a855f7"],
    });

    fire(0.2, {
      spread: 60,
      colors: ["#ff8fab", "#ffc93d", "#95e1d3", "#f38181", "#aa96da"],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#ffd700", "#ff69b4", "#00ced1", "#ff6347", "#9370db"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#fff", "#ffeb3b", "#ff4081", "#00e676", "#7c4dff"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#ff1744", "#ff9100", "#76ff03", "#00b0ff", "#e040fb"],
    });
  }, []);

  useEffect(() => {
    if (active) {
      fireConfetti();

      const interval = setInterval(() => {
        fireConfetti();
      }, 2000);

      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 10000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [active, fireConfetti]);

  return null;
}
