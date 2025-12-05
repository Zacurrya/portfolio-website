import Link from 'next/link';
import WaveDivider from '../ui/wave-divider';
import SocialIcons from '../ui/social-icons';
import TextHoverEffect from '../ui/shadcn-io/text-hover-effect';

const Header = () => {
    return (
        <header id="home" className="snap-section absolute top-0 left-0 right-0 z-51 bg-[#004C9C]">
            <div>
                <div className="flex pt-2 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="z-100 hover:opacity-90 transition-opacity block flex-shrink-0">
                        <img
                            src="/header-logo.svg"
                            alt="Zaky Yusuf"
                            className="h-12 pl-2 sm:h-16 sm:pl-3.5 w-auto object-contain"
                        />
                    </Link>

                    {/* Right Side: Navigation & Socials */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div className="hidden md:flex items-center gap-6">
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
                        {/* Mobile: show a compact social/menu row */}
                        <div className="flex md:hidden items-center gap-4">
                            <SocialIcons iconSize="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Bottom */}
            <div className="text-[#004C9C] absolute top-17 z-50 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                <WaveDivider position="bottom" height={40} />
            </div>
        </header>
    );
};

export default Header;
