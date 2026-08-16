"use client"

import { useEffect, useState, useMemo } from 'react';
import { projects } from '@/app/lib/data/projects';
import ProjectCard from './_components/project-card';
import SeeMoreCard from './_components/see-more-card';
import ProjectStack from './_components/project-stack';
import Banner from './_components/banner';

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 639px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
        return () => mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    }, []);

    const displayed = projects;

    return (
        <section id="projects" className="pb-60 bg-gradient-to-b from-white to-blue-50">
            <Banner />
            <div className="container mx-auto max-w-6xl pt-12 md:pt-16 px-6">

                {!isMobile ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {displayed.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}

                        {/* See more on GitHub card */}
                        {displayed.length > 0 && <SeeMoreCard />}
                    </div>
                ) : (
                    <ProjectStack items={displayed.slice(0, 5)} />
                )}
            </div>
        </section>
    );
};

export default Projects;
