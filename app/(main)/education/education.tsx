"use client";
import EducationCard from './_components/educationCard';
import { education } from '@/app/lib/data/education';


type Props = {
    compact?: boolean;
};

const Education = ({ compact = false }: Props) => {
    return (
        <div
            id="education"
            className={compact ? "w-full" : "px-4 md:px-6 max-w-6xl mx-auto"}
        >
            <div className="relative group">
                {/* Glow/Blur Effect - Blue tones to match Education gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />

                {/* Glass Panel Content */}
                <div className={compact ? "relative glass-panel p-2 md:p-3 rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg" : "relative glass-panel p-6 md:p-8 rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg"}>
                    <h3 className={compact ? "text-lg md:text-xl font-semibold mb-3 md:mb-4 tracking-tight drop-shadow-sm" : "text-xl md:text-2xl font-semibold mb-3 md:mb-6 tracking-tight drop-shadow-sm"}>
                        <span className="blue-text-gradient">Education</span>
                        <hr className="mt-3 border-0 h-0.5 bg-gradient-to-r from-blue-300 via-indigo-400 to-transparent" />
                    </h3>

                    {/* Education Cards Grid */}
                    <div className={compact ? "grid grid-cols-1 gap-4" : "grid md:grid-cols-2 gap-6"}>
                        {education.map((uni, idx) => (
                            <EducationCard
                                key={idx}
                                uni={uni}
                                compact={compact}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
