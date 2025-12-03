import Link from 'next/link';
import WaveDivider from '../ui/wave-divider';
import SocialIcons from '../ui/social-icons';
import TextHoverEffect from '../ui/shadcn-io/text-hover-effect';

const Header = () => {
    return (
        <nav id="home" className="snap-section absolute top-0 left-0 right-0 z-51 bg-[#004C9C]">
            <div className="container mx-auto px-6 pt-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="z-100 hover:opacity-90 transition-opacity block flex-shrink-0">
                        <img
                            src="/header-logo.svg"
                            alt="Zaky Yusuf"
                            className="h-20 w-auto object-contain"
                        />
                    </Link>

                    {/* Right Side: Navigation & Socials */}
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                        <div className="hidden sm:flex items-center gap-8">
                            {/* Navigation Links */}
                            <div className="flex items-center gap-8">
                                {[
                                    { name: 'About', href: '#about' },
                                    { name: 'Projects', href: '#projects' },
                                    { name: 'Contact', href: '#contact' },
                                ].map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-white text-lg font-semibold transition-colors"
                                    >
                                        <TextHoverEffect>{link.name}</TextHoverEffect>
                                    </a>
                                ))}
                            </div>

                            {/* Divider (same style as in navbar) */}
                            <div className="h-6 w-px bg-white/30"></div>

                            {/* Social Icons */}
                            <SocialIcons iconSize="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Bottom */}
            <div className="text-[#004C9C] absolute top-21 z-50 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                <WaveDivider position="bottom" />
            </div>
        </nav>
    );
};

export default Header;
