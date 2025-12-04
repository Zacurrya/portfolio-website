"use client"

import { useEffect, useState } from 'react';
import { projects } from '../../lib/data/projects';
import ProjectCard from './project-card';
import SeeMoreCard from './see-more-card';

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 639px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
        return () => mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    }, []);

    const displayed = isMobile ? projects.slice(0, 3) : projects;

    return (
        <section id="projects" className="pt-24 pb-52 px-6 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="text-gradient">Featured</span> Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayed.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}

                    {/* See more on GitHub card */}
                    <SeeMoreCard />
                </div>
            </div>
        </section>
    );
};

export default Projects;
