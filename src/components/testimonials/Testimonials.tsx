"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GlowEffect from "@/components/shared/GlowEffect";

const testimonialVideos = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    name: "Rahul Sharma",
    role: "Closed 12 deals in first month",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=face",
    name: "Priya Patel",
    role: "Landed 12 LPA at HubSpot",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
    name: "Arjun Mehta",
    role: "From zero to sales manager",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&crop=face",
    name: "Vikram Singh",
    role: "15 LPA Enterprise role at Oracle",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face",
    name: "Sneha Reddy",
    role: "Built a 5-person sales team",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <SectionWrapper id="testimonials" className="py-16 md:py-24">
      <GlowEffect
        color="purple"
        size="lg"
        intensity="low"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 section-container">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text-orange italic">Success Stories</span>{" "}
            that
            <br />
            Speak Volumes
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Hear from Participants who Transformed their Sales Careers with Sales
            Mastery
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-5">
              {testimonialVideos.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-[0_0_70%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0"
                >
                  <motion.div
                    className={`relative aspect-[3/4] rounded-2xl overflow-hidden border transition-all duration-500 group cursor-pointer ${
                      index === selectedIndex
                        ? "border-orange-500/30 scale-100"
                        : "border-white/[0.06] scale-[0.92] opacity-60"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/25 transition-all duration-300">
                        <Play
                          size={18}
                          className="text-white ml-0.5"
                          fill="white"
                        />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="text-slate-300 text-xs mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-8 justify-center sm:justify-start sm:ml-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
