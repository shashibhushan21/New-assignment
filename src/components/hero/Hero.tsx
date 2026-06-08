"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import GlowEffect from "@/components/shared/GlowEffect";

const stats = [
  { prefix: "+", value: "200", label: "Active users" },
  { prefix: "+", value: "10,000$", label: "Avg. profit p/m per client" },
  { prefix: "+", value: "1,200,000$", label: "Total capital" },
];

interface Star {
  id: number;
  left: string;
  top: string;
  opacity: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(40)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-8 overflow-hidden">
      {/* Background Glows */}
      <GlowEffect
        color="orange"
        size="lg"
        intensity="medium"
        className="top-[-10%] right-[10%]"
      />
      <GlowEffect
        color="purple"
        size="lg"
        intensity="low"
        className="bottom-[10%] left-[-10%]"
      />

      {/* Subtle star particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              left: star.left,
              top: star.top,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Limited Seats Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-slate-300 text-xs font-medium mb-6"
        >
          <Zap size={12} className="text-orange-400" />
          Limited Seats
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-5xl"
        >
          Guarantee your first sales
          <br className="hidden sm:block" />
          {" "}job and{" "}
          <span className="gradient-text-orange">start earning</span> hard
          <br className="hidden sm:block" />
          {" "}earned cash in{" "}
          <span className="text-orange-500">21 days.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-5 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed"
        >
          Discover Elite Sales Strategies, Transform Your Mindset, and
          <br className="hidden sm:block" />
          Make Every Moment Count in Your Path to Sales Mastery!
        </motion.p>

        {/* Inline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-8 sm:gap-12 mt-10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                <span className="text-orange-400">{stat.prefix}</span>
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(249,115,22,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-sm sm:text-base px-8 py-4 rounded-xl flex items-center gap-2 font-semibold"
          >
            Join the Challenge Now
            <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#video"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 text-sm sm:text-base text-orange-400 font-medium cursor-pointer group"
          >
            <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300">
              <Play size={14} className="text-white ml-0.5" fill="white" />
            </span>
            Watch Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
