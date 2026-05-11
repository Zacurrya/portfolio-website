"use client"

import { useEffect, useState, useMemo } from 'react';
import { projects } from '@/app/lib/data/projects';
import ProjectCard from './_components/project-card';
import SeeMoreCard from './_components/see-more-card';
import ProjectStack from './_components/project-stack';
import SkillsFilter from './_components/skills-filter';
import { mainFilterTags } from '@/app/lib/skills-config';
import Banner from './_components/banner';

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 639px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
        return () => mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    }, []);

    // Extract all unique tags from projects and filter to only show main technologies
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach(project => {
            project.tags.forEach(tag => {
                // Only include tags that are in the mainFilterTags list
                if (mainFilterTags.includes(tag)) {
                    tags.add(tag);
                }
            });
        });
        return Array.from(tags).sort();
    }, []);

    // Filter projects based on selected tags
    const filteredProjects = useMemo(() => {
        if (selectedTags.length === 0) {
            return projects;
        }
        return projects.filter(project =>
            selectedTags.every(tag => project.tags.includes(tag))
        );
    }, [selectedTags]);

    const displayed = filteredProjects;

    return (
        <section id="projects" className=" pb-60 bg-gradient-to-b from-white to-blue-50">
            <Banner>
                {/* Skills Filter */}
                <SkillsFilter
                    allTags={allTags}
                    onFilterChange={setSelectedTags}
                />
            </Banner>
            <div className="container mx-auto max-w-6xl pt-10 px-6">

                {!isMobile ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {displayed.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}

                        {/* See more on GitHub card */}
                        {displayed.length > 0 && <SeeMoreCard />}
                    </div>
                ) : (
                    <ProjectStack items={filteredProjects.slice(0, 5)} />
                )}

                {/* Show message when no projects match filter */}
                {displayed.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No projects match the selected filters.</p>
                        <button
                            onClick={() => setSelectedTags([])}
                            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
