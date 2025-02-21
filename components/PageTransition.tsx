"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, position: 'absolute', width: '100%', zIndex: 1 }}
          animate={{ opacity: 1, position: 'relative', zIndex: 2 }}
          exit={{ opacity: 0, position: 'absolute', zIndex: 0 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;