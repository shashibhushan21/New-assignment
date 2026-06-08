"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import GlowEffect from "@/components/shared/GlowEffect";

export default function VideoSection() {
  return (
    <section id="video" className="relative pb-16 md:pb-24 mb-20 md:mb-32">
      <GlowEffect
        color="purple"
        size="lg"
        intensity="low"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08]"
        >
          <div className="relative aspect-video bg-[#0a0a1a]">
            <Image
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&h=675&fit=crop&crop=face"
              alt="Sales training session preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
            {/* Darkened overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Play Button — centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center cursor-pointer border border-white/20 group transition-all duration-300 hover:bg-white/25"
                aria-label="Play demo video"
              >
                <Play
                  size={28}
                  className="text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                  fill="white"
                />
              </motion.button>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#060612] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
