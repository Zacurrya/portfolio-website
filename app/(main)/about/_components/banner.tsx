import ImageCredits from "@/app/components/ui/imageCredits";
import ImageBanner from "../../../components/ui/image-banner"

const Banner = () => {
    return (
        <ImageBanner
            imageSrc="/pics/hong-kong-night.jpg"
            height={30}
            blurFactor={0.3}
            topBlend={true}
            topBlendHeight="300px"
            bottomBlend={true}
            bottomBlendHeight="10px"
        >
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] max-w-[90%] md:max-w-3xl">
                <span className="inline">More than just</span>
                <span className="ml-3 inline text-gradient text-hover-glow bg-white/0 px-1 md:px-2">code</span>
            </h1>
            <ImageCredits
                credits="Yun Xu"
                link="https://unsplash.com/photos/aerial-photography-of-highrise-building-at-nighttime-tjymdpLMUCA"
            />
        </ImageBanner>
    )
}

export default Banner;