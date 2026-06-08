"use client";

import { cn } from "@/lib/utils";

interface GlowEffectProps {
  color?: "orange" | "purple";
  size?: "sm" | "md" | "lg";
  className?: string;
  intensity?: "low" | "medium" | "high";
}

const sizeMap = {
  sm: "w-[300px] h-[300px]",
  md: "w-[500px] h-[500px]",
  lg: "w-[800px] h-[800px]",
};

const colorMap = {
  orange: {
    low: "bg-orange-500/5",
    medium: "bg-orange-500/10",
    high: "bg-orange-500/20",
  },
  purple: {
    low: "bg-purple-500/5",
    medium: "bg-purple-500/10",
    high: "bg-purple-500/20",
  },
};

export default function GlowEffect({
  color = "orange",
  size = "md",
  className,
  intensity = "medium",
}: GlowEffectProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-[120px] pointer-events-none",
        sizeMap[size],
        colorMap[color][intensity],
        className
      )}
    />
  );
}
