import Image from 'next/image';

const CurrentlyCard = ({ Content }) => {
    return (
        <>
            {/* Glow/Blur Effect - Blue tones to match Currently gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            {/* Glass Panel Content */}
            <div className="relative h-full glass-panel p-2 md:p-3 rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 tracking-tight drop-shadow-sm">
                    <span className="blue-text-gradient">{Content.about.currently.title}</span>
                </h3>

                {/* Currently list */}
                <ul className="flex flex-col gap-3">
                    {Content.about.currently.items.map((item: any, index: number) => (
                        <li key={index} className="flex flex-row gap-4 items-center">
                            {typeof item.icon === 'string' && (item.icon.startsWith('/images/') || item.icon.startsWith('/svgs/')) ? (
                                <span className="shrink-0 mt-0.5">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={44}
                                        height={44}
                                        className="rounded-xl p-1 bg-blue-50/50"
                                    />
                                </span>
                            ) : (
                                <div className="shrink-0 text-blue-600 mt-0.5 text-2xl md:text-3xl">
                                    {item.icon}
                                </div>
                            )}
                            <span className="text-gray-700 text-xs md:text-sm font-medium leading-snug">
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CurrentlyCard;
