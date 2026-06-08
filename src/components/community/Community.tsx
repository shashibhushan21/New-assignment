"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";
import { communityPosts } from "@/data/community";

export default function Community() {
  return (
    <SectionWrapper id="community">
      <GlowEffect
        color="orange"
        size="md"
        intensity="low"
        className="top-0 right-0 translate-x-1/3"
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
            Join The Community
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Join the{" "}
            <span className="gradient-text-orange">10-Day</span>{" "}
            Sales Challenge
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Connect with thousands of aspiring and established sales
            professionals in our thriving community.
          </p>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {communityPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm font-medium">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-6">
            <Users size={18} className="text-orange-400" />
            <span className="text-slate-300 text-sm">
              <span className="text-white font-semibold">5,000+</span> members
              already joined
            </span>
          </div>
          <div>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
            >
              Join the Challenge
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
