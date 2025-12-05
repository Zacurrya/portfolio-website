import Marquee from "react-fast-marquee";
import hobbies from "../../lib/data/hobbies";

const HobbiesMarquee = () => {
    return (
        <Marquee pauseOnHover={false} gradient={true} gradientWidth={50}>
            {hobbies.map((hobby, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center mx-4 md:mx-8 min-w-[80px] md:min-w-[100px] cursor-default"
                >
                    <div className="text-3xl md:text-4xl mb-2 md:mb-3">
                        {hobby.emoji}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-gray-500 whitespace-nowrap">
                        {hobby.name}
                    </div>
                </div>
            ))}
        </Marquee>
    );
};

export default HobbiesMarquee;
