import WaveDivider from '../../../components/ui/wave-divider';
import { groupTagsByIcon, getIconUrl } from '@/app/lib/skills-config';
import Image from 'next/image';
import ProjectImages from './project-images';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        images: string[];
        link: string;
        demoLink?: string;
        demoType?: 'link' | 'video';
        tags: string[];
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const iconGroups = groupTagsByIcon(project.tags);
    const isVideoDemo = project.demoType === 'video' || /(?:youtube\.com|youtu\.be)/i.test(project.demoLink ?? '');

    return (
        <div className="bg-[var(--pocari-blue)] rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl group flex flex-col h-full relative">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
            {/* Image Container - overflow-visible to allow tooltips to show */}
            <div className="h-64 lg:h-72 relative">
                <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                    <ProjectImages images={project.images} alt={project.title} />
                    {/* Stronger gradient for better title visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content overlay - Title and Icons */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 z-20 flex flex-col justify-between h-full">
                    {/* Spacer to push content to bottom */}
                    <div className="flex-grow" />

                    {/* Bottom content: Title and Icons */}
                    <div className="flex items-end justify-between gap-4">
                        {/* Project Title */}
                        <h3 className="text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
                            {project.title}
                        </h3>

                        {/* Skill Icons */}
                        <div className="flex flex-wrap gap-2 lg:gap-2.5 items-end justify-end">
                            {Object.entries(iconGroups).map(([icon, tags]) => (
                                <div key={icon} className="relative group/icon">
                                    <Image
                                        width={28}
                                        height={28}
                                        src={getIconUrl(icon)}
                                        alt={tags.join(", ")}
                                        className="hover:scale-110 transition-transform rounded"
                                    />
                                    {/* Tooltip - positioned above with high z-index to appear on blue background */}
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap  z-50">
                                        {tags.join(", ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wave Divider - Overlaying image and content */}
                <div className="absolute bottom-0 left-0 right-0 text-[var(--pocari-blue)] z-10" style={{ transform: 'translateY(33%)' }}>
                    <WaveDivider position="top" height={23} reverse={true} />
                </div>
            </div>

            <div className="px-4 lg:px-5 pt-4 lg:pt-5 pb-4 lg:pb-5 flex flex-col flex-grow">
                <p className="text-white leading-relaxed text-sm lg:text-base">
                    {project.description}
                </p>
            </div>
            </a>

            {project.demoLink && (
                <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isVideoDemo ? 'Watch demo on YouTube' : 'View demo'}
                    title={isVideoDemo ? 'Watch demo on YouTube' : 'View demo'}
                    className="absolute left-4 top-4 z-30 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--pocari-blue)] shadow-md transition-colors hover:bg-blue-100"
                >
                    {isVideoDemo ? (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                            <path fill="#FF0000" d="M23.498 6.186a2.99 2.99 0 0 0-2.106-2.117C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.392.569A2.99 2.99 0 0 0 .502 6.186C0 8.083 0 12 0 12s0 3.917.502 5.814a2.99 2.99 0 0 0 2.106 2.117C4.495 20.5 12 20.5 12 20.5s7.505 0 9.392-.569a2.99 2.99 0 0 0 2.106-2.117C24 15.917 24 12 24 12s0-3.917-.502-5.814Z" />
                            <path fill="#FFFFFF" d="m9.6 15.5 6.3-3.5-6.3-3.5v7Z" />
                        </svg>
                    ) : 'View demo'}
                </a>
            )}
        </div>
    );
};

export default ProjectCard;
