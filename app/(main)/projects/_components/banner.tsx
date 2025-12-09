import ImageBanner from "../../../components/ui/image-banner";

const Banner = () => {
    return (
        <ImageBanner
            imageSrc="/pics/shibuya-crossing.jpg"
            height={30}
            scaleFactor={1}
            blurFactor={1}
            topBlend={true}
            bottomBlend={true}
            topBlendHeight="40px"
            bottomBlendHeight="50px"
        >
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] max-w-[90%] md:max-w-3xl">
                <span className="inline">Featured</span>
                <span className="ml-3 inline text-gradient text-hover-glow bg-white/0 px-1 md:px-2">Projects</span>
            </h1>
        </ImageBanner>
    )
}

export default Banner;