const DrivesCard = ({ Content }) => {
    return (
        <>
            {/* Glow/Blur Effect - Orange/Amber tones to match What drives me gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 to-amber-300 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            {/* Glass Panel Content */}
            <div className="relative h-full glass-panel p-2 md:p-3 rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 tracking-tight drop-shadow-sm">
                    <span className="text-gradient-orange">What drives me?</span>
                </h3>
                <ul className="space-y-2.5 md:space-y-3.5">
                    {Content.about.drives.items.map((item: any, index: number) => (
                        <li key={index} className="flex items-center gap-3 md:gap-4">
                            <div
                                className={`shrink-0 flex items-center justify-center text-xl md:text-2xl leading-none ${item.muted ? 'text-gray-400 opacity-20' : 'text-blue-600'}`}
                            >
                                {item.icon}
                            </div>
                            <span
                                className={`text-xs md:text-sm font-medium leading-snug ${item.muted ? 'text-gray-400 opacity-20' : 'text-gray-700'}`}
                            >
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default DrivesCard;