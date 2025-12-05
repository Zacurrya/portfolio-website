import WaveDivider from './wave-divider';
import { groupTagsByIcon } from '../../lib/tech-icons';

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
            className="bg-[#004C9C] rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl overflow-hidden group flex flex-col h-full relative"
        >
            {/* Image Container */}
            <div className="h-60 overflow-hidden relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                {/* Stronger gradient for better title visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Project Title - Bottom positioned for better visibility */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {project.title}
                    </h3>
                </div>

                {/* Wave Divider - Overlaying image and content */}
                <div className="absolute bottom-0 left-0 right-0 text-[#004C9C] z-10" style={{ transform: 'translateY(33%)' }}>
                    <WaveDivider position="top" height={23} reverse={true} />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow pb-20">
                <p className="text-white leading-relaxed text-sm">
                    {project.description}
                </p>
            </div>

            {/* Skill Icons - Absolutely positioned at bottom-left of entire card */}
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                {Object.entries(iconGroups).map(([icon, tags]) => (
                    <div key={icon} className="relative group/icon">
                        <img
                            src={`https://skillicons.dev/icons?i=${icon}&theme=light`}
                            alt={tags.join(", ")}
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                            {tags.join(", ")}
                        </span>
                    </div>
                ))}
            </div>
        </a>
    );
};

export default ProjectCard;
