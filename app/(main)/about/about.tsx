"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Content from '../../(main)/about/_contexts/content';
import DrivesCard from './_components/drivesCard';
import Banner from './_components/banner';
import CurrentlyCard from './_components/currentlyCard';
import GithubContrib from './_components/githubContrib';
import EducationCard from '../education/_components/educationCard';
import SkillGroup from '../skills/_components/skillGroup';
import { education } from '@/app/lib/data/education';
import { skills } from '@/app/lib/data/skills';

const About = () => {
    const [skillsOpen, setSkillsOpen] = useState(false);

    return (
        <section id="about" className="relative overflow-x-visible overflow-y-hidden bg-gradient-to-b from-white via-blue-100 to-white">
            {/* Top Banner - Hidden on mobile xs */}
            <div className="hidden sm:block">
                <Banner />
            </div>

            {/* Narrative Section */}
            <div
                className="mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-6 md:pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18 items-start">
                {/* Left Column: Narrative Text */}
                <div className="w-full min-w-0 space-y-4 md:space-y-6 text-base md:text-[1.05rem] text-gray-900 leading-relaxed md:leading-loose">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        {Content.about.title.start} <span className="blue-text-gradient">{Content.about.title.highlight}</span>
                    </h2>
                    {Content.about.paragraphs.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-4 md:text-md last:mb-0">
                            {paragraph}
                        </p>
                    ))}
                    <div className="relative group pt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-2xl blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200" />
                        <div className="relative glass-panel p-2 md:p-3 rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 tracking-tight drop-shadow-sm">
                                <span className="blue-text-gradient">Education</span>
                                <hr className="mt-3 border-0 h-0.5 bg-gradient-to-r from-blue-300 via-indigo-400 to-transparent" />
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {education.map((uni, idx) => (
                                    <EducationCard key={idx} uni={uni} compact />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative group pt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-2xl blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200" />
                        <div className="relative glass-panel p-2 md:p-3 rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 tracking-tight drop-shadow-sm">
                                <span className="purple-text-gradient">Interests</span>
                            </h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {Content.about.interests.map((tag: string, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs md:text-sm text-gray-800"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <GithubContrib />
                    </div>
                </div>

                {/* Right Column: Drives/List Card */}
                <div className="w-full min-w-0 space-y-6 overflow-visible">
                    <div className="relative group mt-4 md:mt-0">
                        <DrivesCard Content={Content} />
                    </div>
                    <div className="relative group">
                        <CurrentlyCard Content={Content} />
                    </div>
                    <div className="relative group pt-2 pb-4 md:pb-6 w-full max-w-full min-w-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-200 to-pink-300 rounded-xl blur-sm opacity-8 group-hover:opacity-15 transition duration-1000 group-hover:duration-200" />
                        <div
                            className="relative glass-panel w-full max-w-full min-w-0 p-2 md:p-2.5 rounded-xl border border-white/60 bg-white/40 shadow-lg backdrop-blur-lg cursor-pointer"
                            onClick={() => setSkillsOpen((open) => !open)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    setSkillsOpen((open) => !open);
                                }
                            }}
                            aria-expanded={skillsOpen}
                            aria-label={skillsOpen ? 'Collapse technical skills' : 'Expand technical skills'}
                        >
                            <div className="flex items-center justify-between gap-3 w-full">
                                <h3 className="text-base md:text-lg font-semibold tracking-tight drop-shadow-sm min-w-0">
                                    <span className="text-gradient-red">Technical Skills</span>
                                </h3>
                                <button
                                    type="button"
                                    aria-label={skillsOpen ? 'Collapse technical skills' : 'Expand technical skills'}
                                    aria-expanded={skillsOpen}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setSkillsOpen((open) => !open);
                                    }}
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-red-500 transition-colors focus:outline-none"
                                >
                                    <motion.svg
                                        animate={{ rotate: skillsOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="drop-shadow-sm"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </motion.svg>
                                </button>
                            </div>
                            <AnimatePresence initial={false}>
                                {skillsOpen ? (
                                    <motion.div
                                        key="skills-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                                        className="overflow-hidden w-full max-w-full"
                                    >
                                        <hr className="mt-3 border-0 h-0.5 bg-gradient-to-r from-red-300 via-pink-400 to-transparent" />
                                        <div className="grid grid-cols-1 gap-4 pt-4 w-full max-w-full min-w-0">
                                            {skills.map((group, idx) => (
                                                <SkillGroup key={idx} title={group.title} skills={group.items} compact />
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="pt-12 pb-8 md:pt-20 md:pb-16 col-span-1 md:col-span-2 flex items-center justify-center w-full overflow-hidden"><HobbiesMarquee /></div>*/}
        </section >
    );
};

export default About;
