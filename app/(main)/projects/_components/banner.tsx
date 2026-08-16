import ImageBanner from "../../../components/ui/image-banner";
import { ReactNode } from "react";

const Banner = ({ children }: { children?: ReactNode }) => {
    return (
        <ImageBanner
            imageSrc="/pics/shinjuku-night.jpg"
            height={34}
            scaleFactor={1}
            blurFactor={1}
            topBlend={true}
            bottomBlend={true}
            topBlendHeight="40px"
            bottomBlendHeight="100px"
        >
            <div className="h-full w-full flex flex-col justify-center items-center gap-8 md:gap-10 max-w-4xl mx-auto px-4 z-40 relative pt-5 md:pt-8">
                <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] text-center">
                    <span className="inline">Featured</span>
                    <span className="ml-3 inline text-gradient-purple bg-white/0 px-1 md:px-2">Projects</span>
                </h1>

                {children && (
                    <div className="w-full max-w-[min(90vw,32rem)] z-30">
                        {children}
                    </div>
                )}
            </div>
        </ImageBanner>
    )
}

export default Banner;