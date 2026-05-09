"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Confetti from "@/components/Confetti";
import Balloons from "@/components/Balloons";
import Candle from "@/components/Candle";
import Typewriter from "@/components/Typewriter";
import Sparkles from "@/components/Sparkles";
import Stars from "@/components/Stars";

// Foto-foto yang tersedia
const fotoMei = [
  "/foto-mei/mei1.jpg",
  "/foto-mei/mei2.jpg",
  "/foto-mei/mei3.jpg",
  "/foto-mei/mei4.jpg",
  "/foto-mei/mei5.jpg",
  "/foto-mei/mei6.jpg",
  "/foto-mei/mei7.jpg",
  "/foto-mei/mei8.jpg",
  "/foto-mei/mei9.jpg",
];

const fotoAdit = [
  "/foto-mei/adit1.jpg",
  "/foto-mei/adit2.jpg",
];

const fotoBersama = [
  "/foto-mei/meiadit.jpg",
  "/foto-mei/meiadit1.jpg",
  "/foto-mei/meiadit2.jpg",
  "/foto-mei/meiadit3.jpg",
  "/foto-mei/meiadit4.jpg",
  "/foto-mei/meiadit5.jpg",
];

const ucapanList = [
  "Selamat ulang tahun sayangku, Meilinda Khusnul Khotimah.",
  "Di usiamu yang ke-28 ini, doaku selalu menyertai setiap langkahmu.",
  "Semoga kamu selalu diberikan kebahagiaan, kesehatan, dan kesuksesan.",
  "Terima kasih sudah menjadi bagian terindah dalam hidupku.",
  "Aku mencintaimu hari ini, besok, dan selamanya. 💕",
];

export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    // Mulai balon setelah halaman dimuat
    const timer = setTimeout(() => {
      setShowBalloons(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayMusic = () => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement;
    if (audio) {
      audio.play();
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  const handleBlowCandle = useCallback(() => {
    setCandleBlown(true);
    setShowConfetti(true);
    setTimeout(() => setShowGift(true), 1500);
  }, []);

  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden text-slate-200 selection:bg-rose-500/30">
      <audio id="bgMusic" loop>
        <source src="/hbd-song.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {showPlayButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900 to-black" />
            
            {/* Animated stars for the cover */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <motion.div 
              className="relative z-10 flex flex-col items-center text-center px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h2 className="text-rose-300 tracking-[0.4em] uppercase text-xs md:text-sm mb-8 font-light">
                A Special Message For You
              </h2>
              
              <div className="w-24 h-24 md:w-32 md:h-32 mb-12 relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-rose-500/20 rounded-full blur-xl"
                />
                <svg className="w-full h-full text-rose-400 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayMusic}
                className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-full border border-rose-400/50 text-rose-200 font-elegant text-xl tracking-widest transition-all"
              >
                <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-400/40 via-transparent to-transparent" />
                <span className="relative flex items-center gap-3">
                  Buka Undangan
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Confetti active={showConfetti} />
      <Balloons active={showBalloons} />
      <Stars />
      <Sparkles active={true} count={40} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center z-10"
        >
          <h2 className="text-rose-300 tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-light">
            A Special Day For A Special Person
          </h2>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-rose-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dashed border-rose-300/20 rounded-full"
            />
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-rose-200/50 shadow-[0_0_50px_rgba(244,63,94,0.3)] relative z-10">
              <Image
                src="/foto-mei/meiadit.jpg"
                alt="Mei & Adit"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="font-elegant text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-white to-rose-200 mb-4 drop-shadow-lg">
            Happy 28th Birthday
          </h1>
          <h2 className="font-elegant text-3xl md:text-5xl text-rose-300 mb-8 italic">
            Meilinda Khusnul Khotimah
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="text-rose-200/80 font-light tracking-wide"
          >
            <Typewriter text="Scroll down to unfold our story..." speed={60} />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-300/50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Gallery Mei - The Birthday Girl */}
      <section className="relative min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-4xl md:text-6xl text-white mb-4">
            The <span className="text-rose-400 italic">Beautiful</span> Birthday Girl
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {fotoMei.map((foto, index) => (
            <motion.div
              key={foto}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group break-inside-avoid"
            >
              <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <Image
                src={foto}
                alt={`Mei ${index + 1}`}
                width={500}
                height={700}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Bersama - Our Story */}
      <section className="relative min-h-screen py-24 px-4 overflow-hidden z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20 z-20"
        >
          <h2 className="font-elegant text-4xl md:text-6xl text-white mb-4">
            Our <span className="text-rose-400 italic">Precious</span> Moments
          </h2>
          <p className="text-rose-200/80 font-light tracking-wide max-w-xl mx-auto">
            Setiap detik bersamamu adalah memori yang tak ternilai harganya.
          </p>
        </motion.div>

        {/* Scattered Polaroids */}
        <div className="relative w-full max-w-5xl h-[60vh] md:h-[80vh] mx-auto flex items-center justify-center">
          {fotoBersama.map((foto, index) => {
            // Randomize rotation and position for the scattered effect
            const randomRotate = (Math.random() - 0.5) * 30; // -15 to 15 degrees
            const randomX = (Math.random() - 0.5) * 40; // -20% to 20%
            const randomY = (Math.random() - 0.5) * 40; // -20% to 20%
            
            return (
              <motion.div
                key={foto}
                initial={{ opacity: 0, scale: 0.5, rotate: randomRotate * 2 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: randomRotate,
                  x: `${randomX}vw`,
                  y: `${randomY}vh`
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 0, 
                  zIndex: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                className="absolute w-40 md:w-64 bg-white p-3 md:p-4 pb-10 md:pb-14 rounded-sm shadow-xl cursor-pointer transition-shadow"
                style={{ zIndex: index }}
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={foto}
                    alt={`Bersama ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center">
                  <span className="font-elegant text-gray-800 text-sm md:text-lg italic">
                    You & Me
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Cake & Wishes Section */}
      <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl p-8 md:p-12 max-w-3xl w-full mx-auto text-center relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-rose-400/50 rounded-tl-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-rose-400/50 rounded-br-3xl opacity-50" />

          <h2 className="font-elegant text-3xl md:text-5xl text-white mb-12">
            Make A <span className="text-rose-400 italic">Wish</span>
          </h2>

          {/* Birthday Cake */}
          <div className="relative mb-20 flex justify-center mt-12">
            <motion.div
              animate={candleBlown ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Glow effect behind cake */}
              <div className="absolute inset-0 bg-rose-500/20 blur-3xl rounded-full group-hover:bg-rose-500/30 transition-colors duration-500" />
              
              {/* Top tier */}
              <div className="w-32 h-20 bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300 rounded-t-md rounded-b-sm mx-auto relative shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.2)] border-x border-t border-white/40 z-30">
                <div className="absolute inset-x-0 -top-14 flex justify-center z-40">
                  <Candle onBlowOut={handleBlowCandle} blownOut={candleBlown} />
                </div>
                {/* Icing drips */}
                <div className="absolute -top-1 inset-x-0 flex justify-center z-10">
                  <svg width="128" height="24" viewBox="0 0 128 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C8 0 10 16 16 16C22 16 26 6 32 6C38 6 42 20 48 20C54 20 58 8 64 8C70 8 74 18 80 18C86 18 90 4 96 4C102 4 106 14 112 14C118 14 122 0 128 0V0H0V0Z" fill="white" fillOpacity="0.95"/>
                  </svg>
                </div>
                {/* Decorative dots */}
                <div className="absolute bottom-3 inset-x-0 flex justify-around px-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white/80 rounded-full shadow-sm" />
                  ))}
                </div>
              </div>
              
              {/* Middle tier */}
              <div className="w-48 h-24 bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 rounded-t-sm rounded-b-sm mx-auto relative shadow-[inset_0_-10px_20px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.25)] border-x border-white/30 z-20">
                {/* Icing drips */}
                <div className="absolute -top-1 inset-x-0 flex justify-center z-10">
                  <svg width="192" height="28" viewBox="0 0 192 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C12 0 16 18 24 18C32 18 36 6 48 6C60 6 64 24 72 24C80 24 84 8 96 8C108 8 112 22 120 22C128 22 132 10 144 10C156 10 160 16 168 16C176 16 180 0 192 0V0H0V0Z" fill="white" fillOpacity="0.9"/>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pt-2">
                  <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.1)]">
                    <span className="font-elegant text-white font-bold text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                      28
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Bottom tier */}
              <div className="w-64 h-28 bg-gradient-to-br from-rose-300 via-rose-400 to-rose-500 rounded-t-sm rounded-b-md mx-auto relative shadow-[inset_0_-15px_30px_rgba(0,0,0,0.2),0_20px_40px_rgba(0,0,0,0.4)] border-x border-b border-white/20 z-10">
                {/* Icing drips */}
                <div className="absolute -top-1 inset-x-0 flex justify-center z-10">
                  <svg width="256" height="32" viewBox="0 0 256 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C16 0 20 22 32 22C44 22 48 8 64 8C80 8 84 26 96 26C108 26 112 12 128 12C144 12 148 24 160 24C172 24 176 10 192 10C208 10 212 18 224 18C236 18 240 0 256 0V0H0V0Z" fill="white" fillOpacity="0.85"/>
                  </svg>
                </div>
                {/* Decorative ribbon */}
                <div className="absolute bottom-4 inset-x-0 h-3 bg-rose-200/40 shadow-[0_2px_4px_rgba(0,0,0,0.1)] border-y border-white/30" />
                {/* Decorative pearls on ribbon */}
                <div className="absolute bottom-3.5 inset-x-0 flex items-center justify-around px-6">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gradient-to-br from-white to-rose-100 rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.3)] border border-white/80" />
                  ))}
                </div>
              </div>
              
              {/* Cake plate */}
              <div className="w-80 h-8 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 rounded-[100%] mx-auto -mt-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] border-t border-white/80 relative z-0">
                <div className="absolute inset-x-6 bottom-1.5 h-2 bg-slate-600/40 rounded-full blur-[3px]" />
              </div>
            </motion.div>
          </div>

          {/* Messages */}
          <div className="space-y-6 max-w-2xl mx-auto mt-12">
            {ucapanList.map((ucapan, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-rose-100/90 font-elegant italic leading-relaxed"
              >
                "{ucapan}"
              </motion.p>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 pt-8 border-t border-rose-400/20 max-w-md mx-auto"
          >
            <p className="font-elegant text-3xl text-rose-300">
              With all my love,<br/>
              <span className="text-4xl mt-2 block">Adit</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Gift reveal Modal */}
      <AnimatePresence>
        {showGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md px-4"
            onClick={() => setShowGift(false)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.9 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-3xl max-w-lg w-full text-center shadow-[0_0_50px_rgba(244,63,94,0.2)] border border-rose-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-7xl mb-6"
              >
                🎁
              </motion.div>
              <h3 className="font-elegant text-3xl md:text-4xl text-rose-300 mb-6">
                Kejutan Spesial!
              </h3>
              <p className="text-slate-300 text-lg mb-8 font-light leading-relaxed">
                Semoga di umur yang baru ini, kamu semakin cantik, semakin dewasa, dan kita bisa terus sama-sama sampai kapanpun. <br/><br/>
                <span className="italic text-rose-200">I love you more than words can say.</span>
              </p>
              <button
                onClick={() => setShowGift(false)}
                className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-colors duration-300 shadow-lg shadow-rose-500/30 font-medium tracking-wide"
              >
                Terima Kasih Sayang 💕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 text-center text-rose-200/40 text-sm font-light z-10 relative">
        Made with ❤️ by Adit untuk Meilinda
      </footer>
    </main>
  );
}