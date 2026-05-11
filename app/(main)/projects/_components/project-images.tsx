"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
    images: string[];
    alt: string;
    intervalMs?: number;
};

const ProjectImages = ({ images, alt, intervalMs = 4000 }: Props) => {
    const safeImages = useMemo(() => images.filter(Boolean), [images]);
    const [activeIndex, setActiveIndex] = useState(0);

    // cycles through images according to an interval
    useEffect(() => {
        if (safeImages.length <= 1) return;
        const id = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % safeImages.length);
        }, intervalMs);

        return () => window.clearInterval(id);
    }, [intervalMs, safeImages.length]);

    const current = safeImages[activeIndex] || safeImages[0];

    return (
        <img
            src={current}
            alt={alt}
            className="w-full h-full object-contain object-center transition-opacity duration-700"
        />
    );
};

export default ProjectImages;
