import PeopleInspiration from './people-inspiration';
import Education from './education';
import { content } from '../../lib/data/content';
import ImageBanner from './image-banner';
import HobbiesMarquee from './hobbiesMarquee';

const About = () => {
    return (
        <section id="about"  className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-gray-50 to-white">
            <ImageBanner
                imageSrc="/pics/shanghai-night.jpg"
                bannerTitle="More than just "
                sameLine={true}
                bannerHighlight="code"
                bannerHeight="700px"
                topBlend={true}
                topBlendHeight="500px"
            />
            <div className="container mx-auto max-w-5xl px-6 pt-10">
                {/* Narrative Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        {content.about.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative glass-panel p-8 rounded-2xl border border-white/50 bg-white/50">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{content.about.drives.title}</h3>
                            <ul className="space-y-4">
                                {content.about.drives.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-blue-600 mt-1">{item.icon}</span>
                                        <span className="text-gray-700">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div id="education" className="py-40">
                    <Education />
                </div>
                {/* Hobbies Marquee */}
                <HobbiesMarquee />

            </div>

            <ImageBanner imageSrc="/pics/shibuya-crossing.jpg" bannerHeight="400px" topBlend={true} bottomBlend={true} blendHeight="25px" />
            
            <PeopleInspiration />
        </section>
    );
};

export default About;
