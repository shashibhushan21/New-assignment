"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function FooterCTA() {
  return (
    <>
      {/* CTA Banner */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Orange gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"
          aria-hidden="true"
        />

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sign up for the 21-Day
              <br />
              Sales Challenge
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Transform your career in just 3 weeks. Limited spots available for
              the next batch.
            </p>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#060612] text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-[#0a0a1a] transition-colors duration-300"
            >
              Get Started Now
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030308] border-t border-white/5 py-12 md:py-16">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a
                href="#"
                className="text-xl font-bold tracking-tight inline-block mb-4"
              >
                <span className="text-white">Sales</span>
                <span className="gradient-text-orange">Mastery</span>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                India&apos;s #1 sales training program. Transforming careers
                since 2020 with our industry-leading 21-day program.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {["Features", "Program", "Mentors", "Pricing", "FAQ"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Refund Policy",
                  "Cookie Policy",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Mail size={14} className="text-orange-400 flex-shrink-0" />
                  hello@salesmastery.in
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Phone size={14} className="text-orange-400 flex-shrink-0" />
                  +91 98765 43210
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <MapPin
                    size={14}
                    className="text-orange-400 flex-shrink-0 mt-0.5"
                  />
                  Bengaluru, Karnataka, India
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Sales Mastery. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {["Twitter", "LinkedIn", "Instagram", "YouTube"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-slate-500 text-xs hover:text-white transition-colors duration-200"
                    aria-label={`Follow us on ${social}`}
                  >
                    {social}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
