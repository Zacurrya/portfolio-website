import React from 'react';
 
interface WaveDividerProps {
    position: 'top' | 'bottom';
    className?: string;
    height?: number;
    reverse?: boolean;
    color?: string;
    speed?: number;
}
 
// One SVG tile is 1440px wide.
// Two tiles sit side by side (2880px total).
// The animation shifts the pair by exactly -1440px, then loops —
// at that point tile 2 is sitting exactly where tile 1 started, so the
// seam is invisible and it repeats forever.
 
const WaveDivider: React.FC<WaveDividerProps> = ({
    position,
    className = "",
    height = 50,
    reverse = false,
    color = 'currentColor',
    speed = 60, // pixels per second, same unit as the old marquee prop
}) => {
    const path = position === 'bottom'
        ? "M0,0 L1440,0 L1440,25 C1150,55 950,-5 720,25 C490,55 200,-5 0,25 Z"
        : "M0,50 L1440,50 L1440,25 C1150,-5 950,55 720,25 C490,-5 200,55 0,25 Z";
 
    // how long it takes to scroll one full tile width at the given speed
    const duration = 1440 / speed;
 
    const svg = (
        <svg
            viewBox="0 0 1440 50"
            fill="currentColor"
            preserveAspectRatio="none"
            style={{ display: 'block', height: `${height}px`, width: '1440px', flexShrink: 0 }}
        >
            <path d={path} />
        </svg>
    );
 
    return (
        <div
            className={`w-full overflow-hidden leading-none ${className}`}
            style={{ fontSize: 0, color }}
        >
            <style>{`
                @keyframes wave-scroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-1440px); }
                }
            `}</style>
 
            <div
                style={{
                    display: 'flex',
                    width: '2880px',
                    animation: `wave-scroll ${duration}s linear infinite`,
                    animationDirection: reverse ? 'reverse' : 'normal',
                    willChange: 'transform',
                }}
            >
                {svg}
                {svg}
            </div>
        </div>
    );
};
 
export default WaveDivider;
