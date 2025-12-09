import Marquee from "react-fast-marquee";
import People from "../../lib/data/people";

const PersonCard = (props) => (
    <div className="px-9 pt-0.5 group flex flex-col items-center relative">
        {/* Image Container with Overlay */}
        <div className="relative w-[180px] h-[180px] z-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 isolate">
            {/* Image (z-0 to ensure it stays in back) */}
            <img
                src={props.src}
                alt={props.alt}
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-full"
            />
        </div>

        {/* Name Displayed Below */}
        <p className="mt-2 text-slate-800 font-semibold tracking-wide text-md transition-colors">
            {props.alt}
        </p>
    </div>
)


const PeopleInspiration = () => {
    return (
        <>
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    People That <span className="text-gradient">Inspire</span> Me
                </h3>
            </div>
            <Marquee pauseOnHover={false} gradient={true} gradientWidth={20}
             className="mb-16">
                {People.map(person => (
                    <PersonCard
                        key={person.alt}
                        src={person.src}
                        alt={person.alt}
                    />)
                )}
            </Marquee>
        </>
    )
};
export default PeopleInspiration;
