"use client"

import React, { useEffect, useRef, useState } from 'react';

interface ChevronDownProps {
    href?: string;
    color?: string; // Tailwind text class (e.g. 'text-white' or 'text-[#004C9C]')
    className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ href = 'about', color = 'text-[#004C9C]', className = '' }) => {
    const [visible, setVisible] = useState(true);
    const lastY = useRef<number>(0);

    useEffect(() => {
        lastY.current = window.scrollY || 0;
        let ticking = false;

        const onScroll = () => {
            const y = window.scrollY || 0;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const delta = y - lastY.current;
                    // small threshold to avoid flicker
                    if (Math.abs(delta) > 5) {
                        if (delta > 0) {
                            // scrolling down
                            setVisible(false);
                        } else {
                            // scrolling up
                            setVisible(true);
                        }
                        lastY.current = y;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`transition-all duration-300 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'} ${className}`}>
            <a
                href={`#${href}`}
                className={`inline-flex items-center justify-center px-6 py-3 bg-transparent ${color} rounded-full`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
            </a>
        </div>
    );
};

export default ChevronDown;