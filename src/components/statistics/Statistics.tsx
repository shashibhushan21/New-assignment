"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
];

export default function Statistics() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <GlowEffect
        color="orange"
        size="md"
        intensity="low"
        className="bottom-0 left-1/4"
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Revolutionise Your Approach to Cold Calling and Get Closer to Your{" "}
              <span className="gradient-text-orange">Dream Career</span>
              <br />
              and{" "}
              <span className="gradient-text-orange">Financial Freedom!</span>
            </h2>
            <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
              Embark on a transformative 21 day journey and discover the secrets
              to effective communication.
            </p>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 rounded-full shadow-lg shadow-orange-500/20"
            >
              Book a Free Call
              <ArrowRight size={15} />
            </motion.a>
          </motion.div>

          {/* Right Column — Avatar Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              {avatars.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-orange-500/20 hover:border-orange-500/50 transition-colors duration-300"
                >
                  <Image
                    src={src}
                    alt={`Community member ${i + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
