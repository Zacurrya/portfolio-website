import Link from 'next/link';
import ImageBanner from './image-banner';
import ChevronDown from './chevron-down';

const Hero = () => {
    return (
        <section className="min-h-[40vh] flex flex-col items-center text-center pt-10 pb-20">
            <ImageBanner
                bottomBlend={true}
                bottomBlendHeight="50px"
                bannerTitle="Zakariya Yusuf"
                sameLine={false}
                bannerHighlight="Portfolio"
                bannerCaption="Full Stack Developer"
                imageSrc="/pics/me-at-canary-wharf.jpg"
                bannerHeight="750px"
            />
            {/* Call to Action Buttons */}
            <div className="flex mt-20 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Link
                    href="#projects"
                    className="px-8 py-3 bg-[#004C9C] text-white font-medium rounded-full hover:bg-[#003a7a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    View Work
                </Link>
                <Link
                    href="#contact"
                    className="px-8 py-3 bg-white text-[#004C9C] border border-[#004C9C]/20 font-medium rounded-full hover:bg-gray-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                    Contact Me
                </Link>
            </div>

            {/* See more button */}
            <ChevronDown href="about" color="text-[#004C9C]" />
        </section>
    );
};

export default Hero;
