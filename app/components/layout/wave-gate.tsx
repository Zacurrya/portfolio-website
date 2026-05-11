"use client";

import { useEffect, useState } from 'react';

interface WaveGateProps {
  children: React.ReactNode;
}

const WaveGate = ({ children }: WaveGateProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    import('../ui/wave-divider').then(() => {
      if (active) {
        setReady(true);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  if (!ready) {
    return null;
  }

  return <>{children}</>;
};

export default WaveGate;
