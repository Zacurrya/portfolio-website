"use client";
import EducationCard from './_components/educationCard';
import { education } from '@/app/(main)/education/_contexts/education';


const Education = () => {
    return (
        <div id="education" className="mb-10 px-5">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"><span className="text-gradient">Education</span></h3>
                <p className="text-gray-600 max-w-2xl mx-auto">Academic background and qualifications.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {education.map((uni, idx) => (
                    <EducationCard
                        key={idx}
                        uni={uni}
                    />
                ))}
            </div>
        </div>
    );
};

export default Education;
