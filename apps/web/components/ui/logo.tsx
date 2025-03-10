"use client";

import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={cn("relative", sizes[size], className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-90" />

      <div className="absolute inset-0 rounded-full border-2 border-white/20" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-white/80 border-l-white/80 rotate-45 animate-pulse" />
      </div>

      <div className="absolute inset-[3px] rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </div>

      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent" />
    </div>
  );
}
