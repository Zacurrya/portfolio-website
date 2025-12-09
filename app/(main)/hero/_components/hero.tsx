import Link from 'next/link';
import ImageBanner from '../../../components/ui/image-banner';
import ChevronDown from '../../../components/ui/chevron-down';

const Hero = () => {
    return (
        <section className="sm:min-h-[70vh] md:min-h-screen lg:min-h-screen pt-10 snap-section max-h-screen flex flex-col items-center text-center overflow-hidden">
            <div className="w-full">
                <ImageBanner bottomBlend={true} bottomBlendHeight="50px" imageSrc="/pics/me-at-canary-wharf.jpg" height={55}>
                    <p className="text-blue-300 text-sm sm:text-base md:text-lg font-semibold mb-3 tracking-wide uppercase drop-shadow-md">
                        Full Stack Developer
                    </p>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] max-w-[90%] md:max-w-3xl">
                        Zakariya Yusuf
                        <span className="mt-2 inline-block text-gradient text-hover-glow bg-white/0 px-1 md:px-2">
                            Portfolio
                        </span>
                    </h1>
                </ImageBanner>
            </div>
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
