"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sentences = [
  "save time.",
  "get better resultss.",
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
    <div className="flex flex-col items-center py-24">
      <span className="text-4xl font-semibold mb-8">Digital Solutions That Help You...</span>
      <div className="h-8 min-w-[280px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gradient bg-clip-text"
          >
            {sentences[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RevolvingText; 