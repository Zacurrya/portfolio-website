import Link from "next/link"
const ImageCredits = ({ credits, link }: { credits: string, link: string }) => {
    return (
        <h1 className="no-interact-text absolute bottom-2 left-2 text-xs text-white/30 ">
            Taken by {link ? <Link href={link}>{credits}</Link> : credits}
        </h1>
    )
}

export default ImageCredits;