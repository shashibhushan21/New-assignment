"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";
import { mentors } from "@/data/mentors";

export default function MentorSection() {
  return (
    <SectionWrapper id="mentors">
      <GlowEffect
        color="purple"
        size="lg"
        intensity="low"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Learn From The Best
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Industry{" "}
            <span className="gradient-text-orange">Pioneers</span> and{" "}
            <span className="gradient-text-purple">Mentors</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Learn directly from sales leaders who have built and scaled
            multi-million dollar revenue engines.
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060612] via-[#060612]/30 to-transparent" />

                {/* LinkedIn Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-white/20">
                  <ExternalLink size={16} className="text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {mentor.name}
                </h3>
                <p className="text-orange-400 text-sm font-medium mt-1">
                  {mentor.role}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  {mentor.company}
                </p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {mentor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
