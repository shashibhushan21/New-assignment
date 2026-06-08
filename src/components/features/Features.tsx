"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Briefcase, Users } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";

const features = [
  {
    icon: Award,
    title: "Exclusive Access to Elite Training by Rebien Ghazali",
    description:
      "Immerse yourself in top-notch training curated by Rebien Ghazali, the Sales King. Gain insights, techniques, and proven strategies that guarantee success in the competitive world of sales.",
  },
  {
    icon: Briefcase,
    title: "Secure your future with a guaranteed, high-income sales job.",
    description:
      "Upon course completion, land a high-paying sales role at a prestigious Dutch agency. We don't just train; we ensure your success by providing real job opportunities in your desired field.",
  },
  {
    icon: Users,
    title: "Stay Motivated and Connected through our Community.",
    description:
      "Foster a sense of community. Join forces with like-minded individuals, share experiences, and receive ongoing support to guarantee your success.",
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="py-12 md:py-20">
      <GlowEffect
        color="orange"
        size="md"
        intensity="low"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="section-container relative z-10">
        {/* 3-Column Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" as const }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-400 cursor-default"
              >
                {/* Top orange line accent */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/15 transition-colors duration-300">
                  <Icon size={20} className="text-orange-400" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
