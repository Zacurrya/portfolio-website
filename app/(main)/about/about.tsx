import Content from '../../(main)/about/_contexts/content';
import Education from '../education/education';
import Skills from '../skills/skills';
import HobbiesMarquee from '../hobbies/hobbiesMarquee';
import ChevronDown from '../../components/ui/chevron-down';
import DrivesCard from './_components/drivesCard';
import Banner from './_components/banner';

const About = () => {
    return (
        <section id="about" className="snap-section relative overflow-hidden bg-gradient-to-b from-white via-blue-100 to-white">
            {/* Top Banner - Hidden on mobile xs */}
            <div className="hidden sm:block">
                <Banner />
            </div>

            {/* Narrative Section */}
            <div
                className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:pt-6 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                {/* Left Column: Narrative Text */}
                <div className="w-full min-w-0 space-y-4 md:space-y-6 text-base md:text-[1.05rem] text-gray-900 leading-relaxed md:leading-loose">
                    {Content.about.paragraphs.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-4 last:mb-0">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Right Column: Drives/List Card */}
                <div className="w-full min-w-0 relative group mt-4 md:mt-0">
                    <DrivesCard Content={Content} />
                </div>
            </div>
            <div className="snap-section mb-32 mt-20">
                {/* Skills Section */}
                <Skills />
                {/* Education Section */}
                <Education />
            </div>
            {/*<div className="pt-12 pb-8 md:pt-20 md:pb-16 col-span-1 md:col-span-2 flex items-center justify-center w-full overflow-hidden"><HobbiesMarquee /></div>*/}
        </section >
    );
};

export default About;
