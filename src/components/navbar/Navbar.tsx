"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-5"
    >
      {/* Floating Pill Navbar */}
      <nav
        className={cn(
          "relative flex items-center justify-between gap-2 w-full max-w-3xl px-4 sm:px-6 py-3 rounded-full transition-all duration-500",
          "border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
          isScrolled && "bg-[#0d0d1a]/80 border-white/[0.12] shadow-lg shadow-black/20"
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-base font-semibold tracking-tight flex-shrink-0"
          aria-label="Sales Mastery Home"
        >
          {/* Geometric Logo Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M4 4h7v7H4V4Z"
              fill="#f97316"
              opacity="0.8"
            />
            <path
              d="M13 4h7v7h-7V4Z"
              fill="#f97316"
              opacity="0.5"
            />
            <path
              d="M4 13h7v7H4v-7Z"
              fill="#f97316"
              opacity="0.5"
            />
            <path
              d="M13 13h7v7h-7v-7Z"
              fill="#f97316"
              opacity="0.3"
            />
          </svg>
          <span className="text-white">
            Sales <span className="text-orange-400">Mastery</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-slate-400 hover:text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Enroll Now CTA */}
        <motion.a
          href="#pricing"
          className="hidden md:flex items-center gap-1.5 text-sm font-medium text-white px-5 py-2 rounded-full border border-orange-500/50 bg-orange-500/10 relative overflow-hidden group flex-shrink-0 cursor-pointer"
          whileTap={{ scale: 0.96 }}
        >
          {/* Hover gradient fill */}
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-full" />
          <span className="relative z-10 flex items-center gap-1.5">
            Enroll Now
            <ChevronRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </motion.a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1.5 rounded-full hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden bg-[#0d0d1a]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-xl shadow-black/30"
          >
            <ul className="p-3 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 px-4 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-1">
                <a
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl"
                >
                  Enroll Now
                  <ChevronRight size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
