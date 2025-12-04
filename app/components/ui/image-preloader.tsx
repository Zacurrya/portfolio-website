"use client"

import React, { useEffect, useState } from 'react';

interface ImagePreloaderProps {
  children: React.ReactNode;
  timeoutMs?: number;
}

export default function ImagePreloader({ children, timeoutMs = 5000 }: ImagePreloaderProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const imgs = Array.from(document.images) as HTMLImageElement[];

    if (imgs.length === 0) {
      // nothing to wait for
      setLoaded(true);
      return;
    }

    const promises = imgs.map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete && img.naturalWidth !== 0) return resolve();
        const onLoad = () => {
          cleanup();
          resolve();
        };
        const onError = () => {
          cleanup();
          resolve();
        };
        const cleanup = () => {
          img.removeEventListener('load', onLoad);
          img.removeEventListener('error', onError);
        };
        img.addEventListener('load', onLoad);
        img.addEventListener('error', onError);
      });
    });

    const timeout = new Promise<void>((resolve) => setTimeout(resolve, timeoutMs));

    Promise.race([Promise.all(promises), timeout]).then(() => {
      if (!mounted) return;
      setLoaded(true);
    });

    return () => {
      mounted = false;
    };
  }, [timeoutMs]);

  if (loaded) {
    return <>{children}</>;
  }

  // Loading overlay - simple centered spinner
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-[#004C9C] border-gray-200" />
        <div className="mt-4 text-gray-700">Loading images…</div>
      </div>
    </div>
  );
}
