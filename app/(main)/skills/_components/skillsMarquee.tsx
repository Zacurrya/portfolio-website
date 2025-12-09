"use client";
import Marquee from "react-fast-marquee";
import { skills } from "../_contexts/skills";
import Image from "next/image";
import { getIconUrl } from "../../../lib/tech-icons";

const SkillsMarquee = () => {
    return (
        <div className="px-20">
            <Marquee
                pauseOnClick={true}
                gradient={true}
                gradientWidth={100}
            >
                {skills.flatMap(g => g.items).map((skill, idx) => (
                    <Image
                        width={70}
                        height={70}
                        key={idx}
                        src={getIconUrl(skill)}
                        alt={skill}
                        className="hover:scale-110 m-4 transition-transform"
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default SkillsMarquee;
