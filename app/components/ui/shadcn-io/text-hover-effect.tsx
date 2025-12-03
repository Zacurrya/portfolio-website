"use client";
import React from 'react';

interface TextHoverEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const TextHoverEffect: React.FC<TextHoverEffectProps> = ({ children, className = '' }) => {
  return (
    <span
      className={
        `inline-block transition-colors duration-200 text-white hover:text-blue-200 ${className}`
      }
    >
      {children}
    </span>
  );
};

export default TextHoverEffect;
