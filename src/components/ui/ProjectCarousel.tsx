"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface ProjectCarouselProps {
  images: string[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(timer);
  }, [images, isHovered]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 relative z-30">
        <Icon
          icon="bx:image-alt"
          width="48"
          height="48"
          className="mb-2 opacity-50 group-hover/carousel:opacity-100 group-hover/carousel:text-[#BA4242] transition-all duration-500"
        />
        <span className="font-mono text-sm tracking-widest uppercase">
          Project Preview
        </span>
      </div>
    );
  }

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden group/carousel z-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[currentIndex]}
            alt={`Project preview ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Remove dark overlay that requires hover */}
      {/* Just a very subtle gradient for text/icon contrast if needed, but keeping it light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BA4242]/5 to-transparent opacity-100 z-10 pointer-events-none" />

      {/* Slide counter specifically for mobile */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 z-30 md:hidden bg-black/60 text-white/90 text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Click zones */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 md:w-1/2 z-20 cursor-pointer flex items-center justify-start pl-2 md:pl-4 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300"
        onClick={handleLeftClick}
      >
        <div className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/90 md:text-white/70 md:hover:text-white hover:bg-black/70 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <Icon icon="bx:chevron-left" width="24" height="24" />
        </div>
      </div>
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/2 z-20 cursor-pointer flex items-center justify-end pr-2 md:pr-4 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300"
        onClick={handleRightClick}
      >
        <div className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/90 md:text-white/70 md:hover:text-white hover:bg-black/70 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <Icon icon="bx:chevron-right" width="24" height="24" />
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 hidden md:flex justify-center gap-2 z-30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
              i === currentIndex
                ? "bg-[#BA4242] scale-110 shadow-[0_0_10px_rgba(186,66,66,0.8)] border border-[#BA4242]/50"
                : "bg-white/30 border border-white/50 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
