import Link from 'next/link';
import ImageBanner from '../../../components/ui/image-banner';
import ChevronDown from '../../../components/ui/chevron-down';

const Hero = () => {
    return (
        <section className="sm:min-h-[70vh] md:min-h-screen lg:min-h-screen pt-10 snap-section max-h-screen flex flex-col items-center text-center overflow-hidden">
            <div className="w-full">
                <ImageBanner bottomBlend={true} bottomBlendHeight="50px" imageSrc="/pics/me-at-canary-wharf.jpg" height={55}>
                    {/* Subtitle */}
                    <p className="no-interact-text text-blue-200/90 text-xs sm:text-sm md:text-base font-semibold mb-4 tracking-[0.2em] uppercase drop-shadow-lg">
                        Full Stack Developer
                    </p>

                    {/* Main Title */}
                    <h1 className="no-interact-text text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)] mb-4">
                        Zaky Yusuf
                    </h1>

                    {/* Tagline */}
                    <h2 className="no-interact-text max-w-[85%] sm:max-w-[70%] md:max-w-2xl mx-auto text-white/90 text-sm sm:text-base md:text-xl font-normal leading-relaxed drop-shadow-lg mb-4">
                        Building software to solve real issues and benefit society
                    </h2>

                    {/* Location */}
                    <p className="no-interact-text text-white/80 text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-2 drop-shadow-lg">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        London
                    </p>
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
