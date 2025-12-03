import WaveDivider from "../ui/wave-divider";
import SocialIcons from "../ui/social-icons";
import Link from 'next/link';

function Navbar() {
    // Define navigation links
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#004C9C] backdrop-blur-sm">
            <div className="container h-14 mx-auto px-6 py-4 relative">
                {/* Logo */}
                <a href="#home" className="">
                    <img
                        src="/navbar-logo.svg"
                        alt="Zaky Yusuf"
                        className="absolute top-3 left-5 z-50 h-10 w-auto object-contain"
                    />
                </a>

                {/* Navigation and Social Icons - Right aligned */}
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-8">
                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-white/30"></div>

                    {/* Social Icons */}
                    <SocialIcons iconSize="w-6 h-6" />
                </div>

                <div className="text-[#004C9C] left-0 w-full absolute top-[45px]">
                    <WaveDivider position="bottom" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
