"use client";

import { useState } from 'react';
import { skillDisplayNames } from '@/app/lib/skills-config';

type SkillsFilterProps = {
    allTags: string[];
    onFilterChange: (selectedTags: string[]) => void;
};

const SkillsFilter = ({ allTags, onFilterChange }: SkillsFilterProps) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagClick = (tag: string) => {
        const newSelectedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(newSelectedTags);
        onFilterChange(newSelectedTags);
    };

    // Get display name from dictionary or fallback to original
    const getDisplayName = (tag: string) => {
        return skillDisplayNames[tag.toLowerCase()] || tag;
    };

    return (
        <div className="w-full flex justify-center">
            <div className="max-w-4xl p-2">
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={`
                            px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm border
                            ${selectedTags.includes(tag)
                                    ? 'bg-white text-[#004C9C] border-white shadow-lg scale-105 font-bold'
                                    : 'bg-white/5 text-white/90 border-white/20 hover:bg-white/15 hover:border-white/40 hover:scale-105'
                                }
                        `}
                        >
                            {getDisplayName(tag)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsFilter;
