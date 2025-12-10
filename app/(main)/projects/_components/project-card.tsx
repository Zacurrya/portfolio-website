import WaveDivider from '../../../components/ui/wave-divider';
import { groupTagsByIcon, getIconUrl } from '@/app/lib/skills-config';
import Image from 'next/image';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        image: string;
        link: string;
        tags: string[];
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const iconGroups = groupTagsByIcon(project.tags);

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#004C9F] rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl group flex flex-col h-full relative"
        >
            {/* Image Container - overflow-visible to allow tooltips to show */}
            <div className="h-64 lg:h-72 relative">
                <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
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
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                        {tags.join(", ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wave Divider - Overlaying image and content */}
                <div className="absolute bottom-0 left-0 right-0 text-[#004C9C] z-10" style={{ transform: 'translateY(33%)' }}>
                    <WaveDivider position="top" height={23} reverse={true} />
                </div>
            </div>

            {/* Content - Blue section */}
            <div className="px-4 lg:px-5 pt-4 lg:pt-5 pb-4 lg:pb-5 flex flex-col flex-grow">
                {/* Description */}
                <p className="text-white leading-relaxed text-sm lg:text-base">
                    {project.description}
                </p>
            </div>
        </a>
    );
};

export default ProjectCard;
