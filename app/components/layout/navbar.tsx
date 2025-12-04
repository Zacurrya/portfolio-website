"use client";
import WaveDivider from "../ui/wave-divider";
import SocialIcons from "../ui/social-icons";
import { useState } from 'react';

function Navbar() {
    // Define navigation links
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#004C9C] backdrop-blur-sm overflow-visible">
            <div className="container h-10 md:h-16 mx-auto px-4 md:px-6 py-3 relative overflow-visible">
                {/* Logo */}
                <a href="#home">
                    <img
                        src="/navbar-logo.svg"
                        alt="Zaky Yusuf"
                        className="absolute left-3 top-2 md:top-6 md:h-10 lg:top-2 lg:h-16 z-60 h-9 w-auto object-contain"
                    />
                </a>

                {/* Navigation and Social Icons - Right aligned */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="h-6 w-px bg-white/30" />
                        <SocialIcons iconSize="w-6 h-6" />
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        aria-label="Open menu"
                        onClick={() => setOpen(!open)}
                        className="md:hidden pr-0 pt-3 rounded-md text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                    </button>
                </div>

                {/* Mobile menu panel */}
                {open && (
                    <div className="md:hidden absolute top-full right-0 left-0 bg-[#004C9C] text-white z-50 shadow-lg">
                        <div className="flex flex-col items-center gap-3 pb-4 pt-2">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-xl font-semibold" onClick={() => setOpen(false)}>{link.name}</a>
                            ))}
                                    <div className="w-full border-t border-white/20 pt-4 flex justify-center">
                                        <SocialIcons iconSize="w-6 h-6" showEmail={false} />
                                    </div>
                        </div>
                    </div>
                )}

                <div className="text-[#004C9C] absolute left-0 right-0 w-full top-[100%] z-40 overflow-visible">
                    <WaveDivider position="bottom" height={32} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
