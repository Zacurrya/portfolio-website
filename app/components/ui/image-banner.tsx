import React from 'react';
import Image from 'next/image';

interface ImageBannerProps {
    imageSrc: string;
    sameLine?: boolean;
    /**
     * Maximum banner height (e.g. '700px'). Used as the upper bound for responsive sizing.
     */
    bannerHeight?: string;
    /**
     * Preferred height in viewport width units. Example: 50 means 50vw.
     * The final height will use CSS clamp(min, preferred vw, max bannerHeight).
     */
    bannerHeightVW?: number;
    bannerTitle?: string;
    bannerHighlight?: string;
    bannerCaption?: string;
    topBlend?: boolean;
    bottomBlend?: boolean;
    topBlendHeight?: string;
    bottomBlendHeight?: string;
    /** Multiplier to scale the background image for a zoom effect. Values < 1 are ignored; default is 1. */
    scaleFactor?: number;
    /** Background blur in pixels to apply to the banner image (default 0). */
    blurFactor?: number;
}

const ImageBanner: React.FC<ImageBannerProps> = (props) => {
    const topBlendHeight = props.topBlendHeight || '100px';
    const bottomBlendHeight = props.bottomBlendHeight || '100px';
    const scale = Math.max(1, typeof props.scaleFactor === 'number' ? props.scaleFactor : 1);
    const blur = typeof props.blurFactor === 'number' && props.blurFactor > 0 ? props.blurFactor : 0;

    // Determine responsive height: prefer a vw-based height, but clamp it between a min and
    // the provided bannerHeight (if any). This makes banner heights scale with viewport width
    // while respecting an explicit pixel max for large screens.
    const minHeight = '280px';
    const preferredVW = typeof props.bannerHeightVW === 'number' ? `${props.bannerHeightVW}vw` : '50vw';
    const maxHeight = props.bannerHeight || '900px';
    const heightStyle = `clamp(${minHeight}, ${preferredVW}, ${maxHeight})`;
    // If scaled, multiply the resulting height by the scale factor using CSS calc.
    // If scaled, multiply the resulting height by the scale factor but cap at the
    // provided `bannerHeight` (maxHeight). Use CSS min() so the final height never
    // exceeds the explicit max.
    const effectiveHeightStyle = scale > 1
        ? `min(${maxHeight}, calc(${heightStyle} * ${scale}))`
        : heightStyle;

    const titleDisplayClass = props.sameLine ? 'inline' : 'block';
    const highlightClass = props.sameLine
        ? 'ml-3 inline text-gradient bg-white/0 px-1 md:px-2'
        : 'mt-2 inline-block text-gradient bg-white/0 px-1 md:px-2';

    return (
        <div className="relative w-full animate-slide-up" style={{ height: effectiveHeightStyle }}>

            {/* 1. Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src={props.imageSrc}
                    alt={props.bannerTitle || "Banner Image"}
                    fill
                    className=" object-cover"
                    style={{
                        objectPosition: 'center 60%',
                        transform: `scale(${scale})`,
                        transformOrigin: 'center',
                        willChange: 'transform, filter',
                        filter: blur ? `blur(${blur}px)` : undefined,
                        transition: 'transform 400ms ease, filter 400ms ease'
                    }}
                    priority
                />

                {/* Overlay: Darkens image slightly so white text pops */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Top blend gradient (fades into page background) */}
                {props.topBlend && (
                    <div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none z-10"
                        style={{ height: topBlendHeight }}
                    />
                )}

                {/* Bottom blend gradient */}
                {props.bottomBlend && (
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10"
                        style={{ height: bottomBlendHeight }}
                    />
                )}
            </div>

            {/* 2. Content Container - Flexbox Centering */}
            {/* absolute inset-0 covers the whole banner, flex/items-center centers the content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">

                {props.bannerCaption && (
                    <p className="text-blue-300 text-sm sm:text-base md:text-lg font-semibold mb-3 tracking-wide uppercase drop-shadow-md">
                        {props.bannerCaption}
                    </p>
                )}

                {props.bannerTitle && (
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] max-w-[90%] md:max-w-3xl">
                        <span className={titleDisplayClass}>
                            {props.bannerTitle}
                        </span>
                        {props.bannerHighlight && (
                            <span className={highlightClass}>
                                {props.bannerHighlight}
                            </span>
                        )}
                    </h1>
                )}
            </div>
        </div>
    );
};

export default ImageBanner;