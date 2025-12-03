import Marquee from "react-fast-marquee";
import hobbies from "../../lib/data/hobbies";

const HobbiesMarquee = () => {
    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    When I'm <span className="text-gradient">Not</span> Coding
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    My interests and hobbies outside of software development.
                </p>
            </div>

            {/* Full-viewport width marquee. The inner wrapper recenters the marquee visually while
                allowing it to span the full screen width regardless of parent container. */}
            <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
                <Marquee pauseOnHover={false} gradient={true} gradientWidth={50}>
                    {hobbies.map((hobby, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center mx-8 min-w-[100px] cursor-default"
                        >
                            <div className="text-4xl mb-3">
                                {hobby.emoji}
                            </div>
                            <div className="text-sm font-medium text-gray-500 whitespace-nowrap">
                                {hobby.name}
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default HobbiesMarquee;
