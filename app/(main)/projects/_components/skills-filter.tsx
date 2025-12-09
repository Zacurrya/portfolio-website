"use client";

import { useState } from 'react';
import { skillNames } from '../_contexts/skillNames';

type SkillsFilterProps = {
    allTags: string[];
    tagCounts: Record<string, number>;
    onFilterChange: (selectedTags: string[]) => void;
};

const SkillsFilter = ({ allTags, tagCounts, onFilterChange }: SkillsFilterProps) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagClick = (tag: string) => {
        const newSelectedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(newSelectedTags);
        onFilterChange(newSelectedTags);
    };

    const handleClear = () => {
        setSelectedTags([]);
        onFilterChange([]);
    };

    const handleAll = () => {
        setSelectedTags([]);
        onFilterChange([]);
    };

    // Get display name from dictionary or fallback to original
    const getDisplayName = (tag: string) => {
        return skillNames[tag.toLowerCase()] || tag;
    };

    return (
        <div className="mb-8 flex justify-center">
            <div className="max-w-3xl">
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={`
                            px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                            ${selectedTags.includes(tag)
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105'
                                    : 'bg-blue-900/70 text-blue-50 hover:bg-blue-800/80 hover:scale-105'
                                }
                        `}
                        >
                            {getDisplayName(tag)} ({tagCounts[tag] || 1})
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsFilter;
