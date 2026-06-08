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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-6 pointer-events-none"
    >
      {/* Floating Pill Navbar matching Figma */}
      <nav
        className={cn(
          "pointer-events-auto relative flex items-center justify-between w-full max-w-5xl px-6 sm:px-8 md:px-12 rounded-full transition-all duration-500",
          "border border-white/[0.08] bg-[#030303]/45 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
          isScrolled && "bg-[#030303]/85 border-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
        )}
        style={{
          paddingTop: isScrolled ? "14px" : "26px",
          paddingBottom: isScrolled ? "14px" : "26px",
        }}
        aria-label="Main navigation"
      >
        {/* Logo matching Figma (Double lightning bolt + all white text) */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight flex-shrink-0 group"
          aria-label="Sales Mastery Home"
        >
          {/* Lightning Bolt Icon */}
          <div className="relative w-8 h-6 flex items-center justify-center">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            >
              {/* Left Bolt */}
              <path
                d="M11.5 2 L5 13 H10 L9 20 L17 10 H12 L12.5 2 Z"
                fill="url(#lightning-grad)"
              />
              {/* Right Bolt */}
              <path
                d="M18.5 4 L12 15 H17 L16 22 L24 12 H19 L19.5 4 Z"
                fill="url(#lightning-grad)"
              />
              <defs>
                <linearGradient id="lightning-grad" x1="5" y1="2" x2="24" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff512f" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 bg-orange-500/25 blur-md rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
          </div>
          <span className="text-white font-semibold text-[15px] tracking-wide">
            Sales Mastery
          </span>
        </a>

        {/* Desktop Navigation Links with Animated Hover Pill */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={cn(
                  "relative text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 z-10 block",
                  hoveredIndex === index ? "text-white" : "text-slate-300/90 hover:text-white"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating highlight pill */}
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/[0.05] border border-white/[0.01] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Enroll Now CTA matching Figma (Dark background with top-right spotlight glow) */}
        <motion.a
          href="#pricing"
          className="relative hidden md:flex items-center justify-center px-7 py-3 rounded-full overflow-hidden group flex-shrink-0 cursor-pointer bg-[#0a0a16] text-white font-semibold text-[13px] tracking-wide transition-all duration-300 border border-white/[0.1] hover:border-white/[0.2] hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Subtle background overlay */}
          <span className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent -z-10" />

          {/* Top-right spotlight glow inside the button */}
          <span className="absolute -top-4 right-4 w-16 h-8 bg-orange-500/35 rounded-full blur-md opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 pointer-events-none -z-10" />

          {/* Soft outer glow behind the button */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 -z-20 pointer-events-none" />

          {/* Top border highlight line */}
          <span className="absolute top-0 left-1/4 right-8 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent group-hover:via-orange-400 group-hover:scale-x-110 transition-all duration-300 pointer-events-none" />

          {/* Premium Shimmer Sweep */}
          <motion.span
            className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -skew-x-12 pointer-events-none"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />

          <span className="relative z-10 flex items-center gap-1.5 text-white font-medium">
            Enroll Now
            <ChevronRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 text-white"
            />
          </span>
        </motion.a>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 transition-all border border-transparent hover:border-white/10 pointer-events-auto cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-3 md:hidden bg-black/90 backdrop-blur-2xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 pointer-events-auto"
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
              <li className="pt-1.5">
                <motion.a
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl relative overflow-hidden group shadow-[0_4px_15px_rgba(249,115,22,0.25)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.45)] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Shimmer sweep on mobile tap / hover */}
                  <motion.span
                    className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                  />

                  <span className="relative z-10 flex items-center gap-1">
                    Enroll Now
                    <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
