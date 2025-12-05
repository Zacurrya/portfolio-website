import Link from 'next/link';
import ImageBanner from './image-banner';
import ChevronDown from './chevron-down';

const Hero = () => {
    return (
        <section className="
        sm:min-h-[70vh]
        md:min-h-screen
        lg:min-h-screen
        pt-10 snap-section max-h-screen flex flex-col items-center text-center">
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
            {/* Call to Action Buttons (hidden on phone) */}
            <div className="hidden md:flex mt-8 gap-4 sm:mt-20 sm:gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Link
                    href="#projects"
                    className="px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-[#004C9C] text-white text-sm sm:text-base md:text-lg font-medium rounded-full hover:bg-[#003a7a] transition-all shadow sm:shadow-lg md:shadow-xl hover:-translate-y-1"
                >
                    View Work
                </Link>
                <Link
                    href="#contact"
                    className="px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-white text-[#004C9C] text-sm sm:text-base md:text-lg border border-[#004C9C]/20 font-medium rounded-full hover:bg-gray-50 transition-all shadow-sm sm:shadow-md md:shadow-lg hover:-translate-y-1"
                >
                    Contact Me
                </Link>
            </div>

            {/* See more button (hidden on small screens) */}
            <div className="hidden sm:block  mt-[23%] mb-10 animate-slide-up">
                <ChevronDown href="about" color="text-[#004C9C]" className="" />
            </div>
        </section>
    );
};

export default Hero;
