const SeeMoreCard = () => {
    return (
        <>
            {/* See more on GitHub card */}
            <a
                href="https://github.com/Zacurrya"
                target="_blank"
                rel="noopener noreferrer"
                // 1. Add 'group' class.
                // 2. Change gradient to darker tones (e.g., slate-900 to dark blue).
                className="group relative bg-gradient-to-br from-slate-900 via-[#002a5c] to-slate-900 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl overflow-hidden flex flex-col items-center justify-center h-full min-h-[400px] p-8"
            >
                {/* --- Pattern Overlay Layer --- */}
                {/* This div sits behind the content. It uses an inline SVG data-uri for the pattern. 
                Adjust opacity-[0.07] to make it more or less visible. */}
                <div
                    className="absolute inset-0 opacity-[0.07] z-0 pointer-events-none blend-overlay"
                    style={{
                        // Inline SVG of a white question mark, repeated.
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='18' fill='%23ffffff'%3E%3F%3C/text%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }}
                />

                {/* --- Content Layer --- */}
                {/* Wrap content in relative z-10 to ensure it sits ABOVE the pattern overlay */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Added group-hover:scale-110 for a nice effect on hover */}
                    <svg className="w-16 h-16 mb-4 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-2">See More Projects</h3>
                    <p className="text-white/80 text-center">Visit my GitHub profile</p>
                </div>
            </a>
        </>
    )
}

export default SeeMoreCard;