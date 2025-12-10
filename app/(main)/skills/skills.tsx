import SkillGroup from "./_components/skillGroup";
import { skills } from "./_contexts/skills";

const Skills = () => {
    return (
        <section id="skills" className="pb-32 px-4 md:px-6 max-w-6xl mx-auto">
            <div className="relative group">
                {/* Glow/Blur Effect - Red/Pink tones to match Technical Skills gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-200 to-pink-300 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />

                {/* Glass Panel Content */}
                <div className="relative glass-panel p-6 md:p-8 rounded-2xl border border-white/60 bg-white/60 shadow-xl backdrop-blur-md">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-6 tracking-tight">
                        <span className="text-gradient-red">Technical Skills</span>
                        <hr className="mt-3 border-0 h-0.5 bg-gradient-to-r from-red-300 via-pink-400 to-transparent" />
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {skills.map((group, idx) => (
                            <SkillGroup key={idx} title={group.title} skills={group.items} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;