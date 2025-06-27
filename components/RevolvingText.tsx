"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sentences = [
  "save time.",
  "get better results.",
  "focus on growth."
];

const DURATION = 2500; // ms

const RevolvingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white flex flex-col items-center py-36">
      <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto gap-32 lg:gap-12 container px-4">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <span className="text-4xl font-extrabold mb-8 text-primary">Helping you</span>
          <div className="h-8 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold text-gradient bg-clip-text"
              >
                {sentences[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="h-8 mt-16 items-center">
            <p className="text-dark text-center md:text-left">Custom digital solutions tailored for your unique needs.</p>
          </div>
        </div>
        {/* Right: SVG Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/graph.svg" alt="Graph illustration" className="max-w-xs w-full" />
        </div>
      </div>
    </div>
  );
};

export default RevolvingText; 