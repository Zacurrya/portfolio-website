import ImageBanner from "../../../components/ui/image-banner";
import { ReactNode } from "react";

const Banner = ({ children }: { children?: ReactNode }) => {
    return (
        <ImageBanner
            imageSrc="/pics/shinjuku-night.jpg"
            height={40}
            scaleFactor={1}
            blurFactor={1}
            topBlend={true}
            bottomBlend={true}
            topBlendHeight="40px"
            bottomBlendHeight="100px"
        >
            <div className="h-full w-full flex flex-col justify-center items-center gap-16 max-w-5xl mx-auto px-4 z-40 relative">
                <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] text-center">
                    <span className="inline">Featured</span>
                    <span className="ml-3 inline text-gradient-purple text-hover-glow-purple bg-white/0 px-1 md:px-2">Projects</span>
                </h1>

                <div className="w-full z-30">
                    {children}
                </div>
            </div>
        </ImageBanner>
    )
}

export default Banner;