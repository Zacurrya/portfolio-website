import React from 'react';
import Image from 'next/image';
import { getSkillDisplayName, getIconUrl } from '@/app/lib/skills-config';

type Props = {
    title?: string;
    skills: string[];
    compact?: boolean;
};

const SkillGroup: React.FC<Props> = ({ title, skills, compact = false }) => {
    return (
        <div className={compact ? "pb-1" : "pb-2"}>
            {title && (
                <h4 className={compact ? "text-sm font-semibold text-gray-800 mb-2" : "text-md font-semibold text-gray-800 mb-3"}>
                    {title}
                </h4>
            )}
            <div className={compact ? "flex flex-wrap gap-2 items-center max-w-full" : "flex flex-wrap gap-3 items-center max-w-full"}>
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className={compact ? "flex items-center gap-2 bg-white/60 backdrop-blur-sm px-2 py-1.5 rounded-md shadow-sm max-w-full" : "flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-md shadow-sm max-w-full"}
                    >
                        <Image
                            src={getIconUrl(skill)}
                            alt={skill}
                            width={compact ? 22 : 26}
                            height={compact ? 22 : 26}
                            className="rounded"
                        />
                        <span className={compact ? "text-[11px] font-semibold text-gray-700" : "text-xs font-semibold text-gray-700"}>
                            {getSkillDisplayName(skill)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillGroup;