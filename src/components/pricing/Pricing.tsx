"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="py-20 md:py-32">
      <GlowEffect
        color="orange"
        size="lg"
        intensity="medium"
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
            Invest In Your Future
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Choose Your{" "}
            <span className="gradient-text-orange">Path</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Flexible plans designed to match your career goals and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={cn(
                "rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden",
                plan.highlighted
                  ? "bg-gradient-to-b from-orange-500/10 to-orange-500/5 border-2 border-orange-500/30"
                  : "glass-card"
              )}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{plan.description}</p>

              {/* Price */}
              <div className="mt-6 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-slate-500 line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mt-1">{plan.duration}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-6" />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={16}
                      className={cn(
                        "flex-shrink-0 mt-0.5",
                        plan.highlighted
                          ? "text-orange-400"
                          : "text-slate-500"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full py-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-sm transition-all duration-300",
                  plan.highlighted
                    ? "btn-primary"
                    : "border border-white/10 text-white hover:bg-white/5 hover:border-white/20"
                )}
              >
                {plan.ctaText}
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
