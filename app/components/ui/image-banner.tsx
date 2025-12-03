import React from 'react';
import Image from 'next/image';

interface ImageBannerProps {
    imageSrc: string;
    sameLine?: boolean;
    bannerHeight: string;
    bannerTitle?: string;
    bannerHighlight?: string;
    bannerCaption?: string;
    topBlend?: boolean;
    bottomBlend?: boolean;
    topBlendHeight?: string;
    bottomBlendHeight?: string;
}

const ImageBanner: React.FC<ImageBannerProps> = (props) => {
    const topBlendHeight = props.topBlendHeight || '100px';
    const bottomBlendHeight = props.bottomBlendHeight || '100px';
    return (
        <div className="relative w-full animate-slide-up" style={{ height: props.bannerHeight }}>

            {/* 1. Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src={props.imageSrc}
                    alt={props.bannerTitle || "Banner Image"}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 60%' }}
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
                    <p className="text-blue-400 text-lg font-bold mb-4 tracking-wide uppercase drop-shadow-md">
                        {props.bannerCaption}
                    </p>
                )}

                {props.bannerTitle && (
                    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                        {props.bannerTitle}
                        {props.bannerHighlight && (
                            <>
                                {props.sameLine ? null : <br />}
                                {/* Inline gradient styles to ensure it works without external CSS */}
                                <span className="text-gradient">
                                    {props.bannerHighlight}
                                </span>
                            </>
                        )}
                    </h1>
                )}
            </div>
        </div>
    );
};

export default ImageBanner;