import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageBannerProps {
    imageSrc: string;
    /**
     * Preferred height in viewport height units. Example: 50 means 50vh.
     */
    height?: number;
    topBlend?: boolean;
    bottomBlend?: boolean;
    topBlendHeight?: string;
    bottomBlendHeight?: string;
    /** Multiplier to scale the background image for a zoom effect. Values < 1 are ignored; default is 1. */
    scaleFactor?: number;
    /** Background blur in pixels to apply to the banner image (default 0). */
    blurFactor?: number;
    /** Content to render on top of the banner (centered) */
    children?: React.ReactNode;
}

const ImageBanner: React.FC<ImageBannerProps> = (props) => {
    const topBlendHeight = props.topBlendHeight || '100px';
    const bottomBlendHeight = props.bottomBlendHeight || '100px';
    const scale = Math.max(1, typeof props.scaleFactor === 'number' ? props.scaleFactor : 1);
    const blur = typeof props.blurFactor === 'number' && props.blurFactor > 0 ? props.blurFactor : 0;
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const update = () => setIsLargeScreen(mediaQuery.matches);

        update();
        mediaQuery.addEventListener ? mediaQuery.addEventListener('change', update) : mediaQuery.addListener(update);

        return () => mediaQuery.removeEventListener ? mediaQuery.removeEventListener('change', update) : mediaQuery.removeListener(update);
    }, []);

    const defaultHeight = 50;
    const containerHeightStyle = typeof props.height === 'number'
        ? `${props.height}vh`
        : `${defaultHeight}vh`;
    const effectiveScale = isLargeScreen ? Math.max(scale * 1.08, 1.08) : scale;

    return (
        <div className="relative w-full max-w-[1280px] mx-auto overflow-hidden animate-slide-up lg:rounded-none" style={{ height: containerHeightStyle }}>

            {/* 1. Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src={props.imageSrc}
                    alt="Banner Image"
                    fill
                    className="object-cover"
                    style={{
                        objectPosition: 'center',
                        transform: `scale(${effectiveScale})`,
                        transformOrigin: 'center',
                        filter: blur ? `blur(${blur}px)` : undefined,
                    }}
                />

                {/* Overlay: Darkens image slightly so content pops */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Top blend gradient (fades into page background) */}
                {props.topBlend && (
                    <div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white to-transparent  z-10"
                        style={{ height: topBlendHeight }}
                    />
                )}

                {/* Bottom blend gradient */}
                {
                    props.bottomBlend && (
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent  z-10"
                            style={{ height: bottomBlendHeight }}
                        />
                    )
                }
            </div>

            {/* 2. Content Container - Flexbox Centering */}
            {/* absolute inset-0 covers the whole banner, flex/items-center centers the content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
                {props.children}
            </div>
        </div>
    );
};

export default ImageBanner;