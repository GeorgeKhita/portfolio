"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type Screen = {
  src: string;
  alt: string;
  description: string;
};

export default function ScreensGallery({ screens }: { screens: Screen[] }) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGalleryAt = (index: number) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % screens.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + screens.length) % screens.length);

  return (
    <>
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4 min-w-max">
          {screens.map((screen, i) => (
            <div key={i} className="relative w-64 flex-shrink-0 cursor-pointer group" onClick={() => openGalleryAt(i)}>
              <div className="aspect-video relative mb-2">
                <Image src={screen.src} alt={screen.alt} fill className="object-cover rounded-lg transition-transform group-hover:scale-105" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{screen.description}</p>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setShowGallery(false)}
          >
            <button className="absolute top-4 right-4 text-white text-2xl hover:bg-white/10 p-2 rounded-full transition-colors" onClick={e => { e.stopPropagation(); setShowGallery(false); }}>✕</button>
            <button className="absolute left-4 text-white text-4xl hover:bg-white/10 p-2 rounded-full transition-colors" onClick={e => { e.stopPropagation(); prevImage(); }}>‹</button>
            <div className="relative w-4/5 h-4/5">
              <Image src={screens[currentImageIndex].src} alt={screens[currentImageIndex].alt} fill className="object-contain" />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-medium">{screens[currentImageIndex].description}</p>
              </div>
            </div>
            <button className="absolute right-4 text-white text-4xl hover:bg-white/10 p-2 rounded-full transition-colors" onClick={e => { e.stopPropagation(); nextImage(); }}>›</button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto p-4">
              {screens.map((screen, index) => (
                <div key={index} className="relative w-20 h-20 flex-shrink-0 cursor-pointer" onClick={e => { e.stopPropagation(); setCurrentImageIndex(index); }}>
                  <Image src={screen.src} alt={screen.alt} fill className={`object-cover rounded ${index === currentImageIndex ? "ring-2 ring-blue-500" : ""}`} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 