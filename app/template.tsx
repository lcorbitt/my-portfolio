'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setIsPageLoading(true);
    const handleComplete = () => setIsPageLoading(false);

    document.addEventListener('navigationStart', handleStart);
    document.addEventListener('navigationComplete', handleComplete);
    document.addEventListener('navigationError', handleComplete);

    return () => {
      document.removeEventListener('navigationStart', handleStart);
      document.removeEventListener('navigationComplete', handleComplete);
      document.removeEventListener('navigationError', handleComplete);
    };
  }, []);

  // Reset loading state when pathname changes
  useEffect(() => {
    setIsPageLoading(false);
  }, [pathname]);

  return (
    <div className="min-h-[calc(100vh-180px)]">
      {isPageLoading ? (
        <div className="min-h-[calc(100vh-180px)] flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}