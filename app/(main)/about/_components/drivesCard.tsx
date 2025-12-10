const DrivesCard = ({ Content }) => {
    return (
        <>
            {/* Glow/Blur Effect - Orange/Amber tones to match What drives me gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 to-amber-300 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            {/* Glass Panel Content */}
            <div className="relative h-full glass-panel p-6 md:p-8 rounded-2xl border border-white/60 bg-white/60 shadow-xl backdrop-blur-md">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 tracking-tight">
                    <span className="text-gradient-orange">What drives me?</span>
                </h3>
                <ul className="space-y-3 md:space-y-4">
                    {Content.about.drives.items.map((item: any, index: number) => (
                        <li key={index} className="flex items-start gap-3 md:gap-4">
                            <div className="shrink-0 text-blue-600 mt-0.5 text-2xl md:text-3xl">
                                {item.icon}
                            </div>
                            <span className="text-gray-700 text-sm md:text-base font-medium leading-snug">
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