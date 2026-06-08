"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq">
      <GlowEffect
        color="purple"
        size="md"
        intensity="low"
        className="top-1/4 right-0 translate-x-1/2"
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
            Got Questions?
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently Asked{" "}
            <span className="gradient-text-orange">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={cn(
                  "glass-card rounded-xl overflow-hidden transition-colors duration-300",
                  isOpen && "border-orange-500/20"
                )}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-white font-medium text-sm sm:text-base pr-4">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                      isOpen
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-white/5 text-slate-400"
                    )}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
