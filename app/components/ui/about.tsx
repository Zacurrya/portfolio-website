import React from 'react';
import Education from './education';
import { content } from '../../lib/data/content';
import ImageBanner from './image-banner';
import HobbiesMarquee from './hobbiesMarquee';
import ChevronDown from './chevron-down';

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-gray-50 to-white">
            {/* Top Banner - Hidden on mobile xs */}
            <div className="hidden xs:block">
                <ImageBanner
                    imageSrc="/pics/shanghai-night.jpg"
                    bannerTitle="More than just "
                    sameLine={true}
                    bannerHighlight="code"
                    bannerHeight="400px"
                    blurFactor={0.1}
                    topBlend={true}
                    topBlendHeight="300px"
                    bottomBlend={true}
                    bottomBlendHeight="10px"
                />
            </div>

            {/* Narrative Section */}
            <div
                className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-20 
                grid 
                grid-cols-1 
                md:grid-cols-2 
                gap-8 md:gap-16 items-start"
            >
                {/* Left Column: Narrative Text */}
                <div className="w-full min-w-0 space-y-4 md:space-y-6">
                    <div className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-loose">
                        {content.about.paragraphs.map((paragraph: string, index: number) => (
                            <p key={index} className="mb-4 last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right Column: Drives/List Card */}
                <div className="w-full min-w-0 relative group mt-4 md:mt-0">
                    {/* Glow/Blur Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

                    {/* Glass Panel Content */}
                    <div className="relative h-full glass-panel p-6 md:p-8 rounded-2xl border border-white/60 bg-white/60 shadow-xl backdrop-blur-md">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 tracking-tight">
                            {content.about.drives.title}
                        </h3>
                        <ul className="space-y-3 md:space-y-4">
                            {content.about.drives.items.map((item: any, index: number) => (
                                <li key={index} className="flex items-start gap-3 md:gap-4">
                                    <div className="shrink-0 text-blue-600 mt-1 p-1 bg-blue-50 rounded-md">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base font-medium leading-snug">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Hobbies Marquee - Spanning full width */}
                {/* Fixed: Reduced padding from md:pb-56 to md:pb-16 */}
                <div className="pt-12 pb-8 md:pt-20 md:pb-16 col-span-1 md:col-span-2 flex items-center justify-center w-full overflow-hidden">
                    <HobbiesMarquee />
                </div>

                {/* Chevron Link */}
                <div className="col-span-1 md:col-span-2 flex justify-center pb-12">
                    <ChevronDown href="education" />
                </div>
            </div>

            {/* Education Section Anchor (Placed before banner so scroll lands correctly) */}
            <div id="education" className="scroll-mt-20"></div>
            

            <ImageBanner
                imageSrc="/pics/shibuya-crossing.jpg"
                bannerHeight="400px"
                sameLine={true}
                scaleFactor={1.5}
                topBlend={true}
                bottomBlend={true}
                topBlendHeight="40px"
                bottomBlendHeight="10px"
            />

            {/* Education Content */}
            <div className="px-6 pt-16 pb-32 relative">
                <Education />
            </div>

            <ImageBanner
                imageSrc="/pics/shibuya-crossing.jpg"
                bannerHeight="350px"
                bannerTitle="Featured"
                bannerHighlight="Projects"
                sameLine={true}
                scaleFactor={1}
                blurFactor={1.2}
                topBlend={true}
                bottomBlend={true}
                topBlendHeight="40px"
                bottomBlendHeight="10px"
            />
        </section>
    );
};

export default About;
