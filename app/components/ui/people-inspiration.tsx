import Marquee from "react-fast-marquee";
import People from "../../lib/data/people";

const PersonCard = (props) => (
    <div className="px-10 group flex flex-col items-center cursor-pointer relative">
        {/* Image Container with Overlay */}
        <div className="relative w-[180px] h-[180px] rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl isolate">
            {/* Image (z-0 to ensure it stays in back) */}
            <img
                src={props.src}
                alt={props.alt}
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-full"
            />

            {/* Overlay Text (appears on hover) */}
            <div className="absolute inset-0 bg-black/80 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-full">
                <p className="text-white text-xs text-center font-medium leading-tight drop-shadow-md select-none">
                    {props.text}
                </p>
            </div>
        </div>

        {/* Name Displayed Below */}
        <p className="mt-2 text-slate-800 font-semibold tracking-wide text-md group-hover:text-blue-300 transition-colors">
            {props.alt}
        </p>
    </div>
)


const PeopleInspiration = () => {
    return (
        <>
            <div className="text-center py-16 ">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    People That <span className="text-gradient">Inspire</span> Me
                </h3>
            </div>
            <Marquee pauseOnHover={true} gradient={true} gradientWidth={50} className="mb-16">
                {People.map(person => (
                    <PersonCard
                        key={person.alt}
                        src={person.src}
                        alt={person.alt}
                        text={person.text}
                    />)
                )}
            </Marquee>
        </>
    )
};
export default PeopleInspiration;
