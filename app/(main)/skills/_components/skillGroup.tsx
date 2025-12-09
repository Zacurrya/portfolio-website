import React from 'react';
import Image from 'next/image';
import { getSkillDisplayName } from '../../../lib/tech-icons';

type Props = {
    title?: string;
    skills: string[];
};

const SkillGroup: React.FC<Props> = ({ title, skills }) => {
    return (
        <div className="py-2">
            {title && <h4 className="text-lg font-semibold text-gray-800 mb-3">{title}</h4>}
            <div className="flex flex-wrap gap-3 items-center">
                {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-md shadow-sm">
                        <Image
                            src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
                            alt={skill}
                            width={26}
                            height={26}
                            className="rounded"
                        />
                        <span className="text-sm text-gray-700">{getSkillDisplayName(skill)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillGroup;