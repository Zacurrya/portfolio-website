interface SocialIconsProps {
    iconSize?: string;
    emailIconSize?: string;
    showEmail?: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ iconSize = "w-6 h-6", emailIconSize= "w-8 h-8", showEmail = true }) => {
    return (
        <div className="flex items-center gap-6">
            {/* GitHub Icon - Simple outline */}
            <a
                href="https://github.com/Zacurrya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="GitHub"
            >
                <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            </a>

            {/* LinkedIn Icon - Simple outline */}
            <a
                href="https://linkedin.com/in/zakariya-yusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="LinkedIn"
            >
                <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>

            {/* Email Icon - Simple outline (conditionally shown) */}
            {showEmail && (
                <a
                    href="#contact"
                    className="text-white hover:text-blue-200 transition-colors"
                    aria-label="Email"
                >
                    <svg className={emailIconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </a>
            )}
        </div>
    );
};

export default SocialIcons;
