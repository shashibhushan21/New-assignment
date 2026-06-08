"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Search,
  MessageSquare,
  Presentation,
  Shield,
  Handshake,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";
import { timelineSteps } from "@/data/timeline";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Search,
  MessageSquare,
  Presentation,
  Shield,
  Handshake,
  Briefcase,
};

export default function Timeline() {
  return (
    <SectionWrapper id="timeline">
      <GlowEffect
        color="orange"
        size="md"
        intensity="low"
        className="top-1/3 left-0 -translate-x-1/2"
      />
      <GlowEffect
        color="purple"
        size="md"
        intensity="low"
        className="bottom-1/3 right-0 translate-x-1/2"
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
            The Program
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Your{" "}
            <span className="gradient-text-orange">21-Day</span>{" "}
            Learning Journey
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            A structured roadmap from beginner to interview-ready in just 3
            weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-line" aria-hidden="true" />

          <div className="flex flex-col gap-8 md:gap-12">
            {timelineSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Brain;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="glass-card rounded-xl p-5 sm:p-6 hover:bg-white/[0.06] transition-colors duration-300">
                      <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                        {step.day}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-2 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#060612] border-2 border-orange-500/50 flex items-center justify-center z-10">
                    <Icon size={18} className="text-orange-400" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
