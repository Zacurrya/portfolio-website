"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ImageBanner from '../../../components/ui/image-banner';
import ChevronDown from '../../../components/ui/chevron-down';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 639px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
        return () => mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    }, []);

    return (
        <section className="sm:min-h-screen  flex flex-col items-center overflow-hidden">
            <div className="w-full">
                <ImageBanner
                    bottomBlend={true}
                    bottomBlendHeight="50px"
                    imageSrc="/pics/me-at-canary-wharf.jpg"
                    height={55}
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-center px-4">

                        {/* Main Content Group - Styled Typography */}
                        <div className="flex flex-col items-center gap-4 animate-slide-up">

                            {/* Subtitle & Title */}
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-blue-200 text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] uppercase drop-shadow-md">
                                    Full Stack Developer
                                </p>
                                <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-extrabold leading-none tracking-tight drop-shadow-2xl">
                                    Zaky Yusuf
                                </h1>
                            </div>

                            {/* Tagline */}
                            <h2 className="text-white/90 text-sm sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-lg text-center">
                                Building software to solve real issues and benefit society
                            </h2>

                            {/* Location Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white/90 text-xs sm:text-sm font-medium hover:bg-black/30 transition-colors cursor-default mt-2">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>London</span>
                            </div>
                        </div>
                    </div>
                </ImageBanner>
            </div>

            {/* Buttons - Outside Banner for split layout */}
            <div className="flex text-xs sm:text-[1rem] md:text-md lg:text-lg flex-row items-center gap-4 mt-12 sm:mt-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Link
                    href="#projects"
                    className="w-full sm:w-auto px-10 py-3.5 bg-[#004C9C] text-white font-semibold rounded-full hover:bg-[#003a7a] hover:scale-105 transition-all shadow-lg hover:-translate-y-1 text-center min-w-[160px]"
                >
                    View Work
                </Link>
                <Link
                    href="#contact"
                    className="w-full sm:w-auto px-10 py-3.5 bg-white text-[#004C9C] border border-[#004C9C]/20 font-semibold rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-md hover:-translate-y-1 text-center min-w-[160px]"
                >
                    Contact Me
                </Link>
            </div>

            {/* Scroll Indicator - Bottom of section */}
            {!isMobile && (
                <div className="mt-auto mb-12 animate-bounce">
                    <ChevronDown href="about" color="text-[#004C9C]" className="opacity-80 hover:opacity-100 transition-opacity" />
                </div>
            )}
        </section>
    );
};

export default Hero;
