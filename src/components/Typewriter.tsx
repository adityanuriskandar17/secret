"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 50,
  onComplete,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const typeNextChar = useCallback(
    (index: number) => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        setTimeout(() => typeNextChar(index + 1), speed);
      } else {
        setIsComplete(true);
        setTimeout(() => setShowCursor(false), 1000);
        onComplete?.();
      }
    },
    [text, speed, onComplete]
  );

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    setShowCursor(true);
    const timeout = setTimeout(() => typeNextChar(0), 300);
    return () => clearTimeout(timeout);
  }, [typeNextChar]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span
          className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle animate-pulse"
          style={{ animationDuration: "0.8s" }}
        />
      )}
    </span>
  );
}
