import React from 'react';
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

    const defaultHeight = 50;
    const containerHeightStyle = typeof props.height === 'number'
        ? `${props.height}vh`
        : `${defaultHeight}vh`;

    return (
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] animate-slide-up" style={{ height: containerHeightStyle }}>

            {/* 1. Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src={props.imageSrc}
                    alt="Banner Image"
                    fill
                    className="object-cover"
                    style={{
                        objectPosition: 'center',
                        transform: `scale(${scale})`,
                        transformOrigin: 'center',
                        filter: blur ? `blur(${blur}px)` : undefined,
                    }}
                />

                {/* Overlay: Darkens image slightly so content pops */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Top blend gradient (fades into page background) */}
                {props.topBlend && (
                    <div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"
                        style={{ height: topBlendHeight }}
                    />
                )}

                {/* Bottom blend gradient */}
                {props.bottomBlend && (
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"
                        style={{ height: bottomBlendHeight }}
                    />
                )}
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