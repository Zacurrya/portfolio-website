"use client"

import React, { useState, useRef } from 'react';
import ProjectCard from './project-card';

type Props = {
    items: any[];
};

const ProjectStack: React.FC<Props> = ({ items }) => {
    const [active, setActive] = useState(0);
    const [dragDelta, setDragDelta] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchDelta = useRef<number>(0);
    const [mobileList, setMobileList] = useState(() => items.slice(0, 5));

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchDelta.current = 0;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current == null) return;
        touchDelta.current = e.touches[0].clientX - touchStartX.current;
        setDragDelta(touchDelta.current);
    };

    const onTouchEnd = () => {
        const delta = touchDelta.current;
        const threshold = 50; // px
        if (Math.abs(delta) > threshold) {
            // Move the swiped card to the bottom of the mobile list
            setMobileList((list) => {
                if (!list || list.length === 0) return list;
                const next = [...list];
                const [moved] = next.splice(active, 1);
                next.push(moved);
                return next;
            });
            // keep focus at the same index so the next card becomes active
            setActive((idx) => Math.min(idx, Math.max(0, mobileList.length - 2)));
        }
        touchStartX.current = null;
        touchDelta.current = 0;
        setDragDelta(0);
    };

    const displayed = mobileList;

    return (
        <div className="relative w-full h-[520px] flex items-center justify-center">
            <div
                className="w-full h-full relative touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {displayed.map((project, i) => {
                    const offset = i - active;
                    const abs = Math.abs(offset);
                    const translateY = `${abs * 6}px`;
                    const offsetPercent = offset * 6; // horizontal stagger in percent (tighter)
                    const scale = i === active ? 1 : 0.98 - Math.min(abs * 0.01, 0.03);
                    const zIndex = i === active ? 100 : 100 - abs;
                    const liveDelta = i === active ? dragDelta : 0;
                    const shadowOpacity = 0.14 + Math.min(abs * 0.04, 0.28);
                    const boxShadow = i === active
                        ? '0 12px 30px rgba(0,0,0,0.32)'
                        : `0 ${6 + abs * 3}px ${12 + abs * 4}px rgba(0,0,0,${shadowOpacity})`;

                    const isActive = i === active;
                    const visualFilter = isActive ? 'none' : 'blur(3px) brightness(0.78)';
                    const pointerEvents = isActive ? 'auto' : 'none';

                    const pattern = `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='18' fill='%23ffffff'%3E%3F%3C/text%3E%3C/svg%3E")`;

                    return (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50px',
                                transform: `translate(-50%, ${translateY}) translateX(${offsetPercent}%) translateX(${liveDelta}px) scale(${scale})`,
                                transition: dragDelta === 0 ? 'transform 300ms ease' : 'none',
                                width: '82vw',
                                maxWidth: 420,
                                zIndex,
                                boxShadow,
                                borderRadius: 16,
                                overflow: 'hidden',
                                filter: visualFilter,
                                pointerEvents,
                            }}
                        >
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <ProjectCard project={project} />

                                {!isActive && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: pattern,
                                            backgroundRepeat: 'repeat',
                                            opacity: 0.06,
                                            pointerEvents: 'none',
                                            mixBlendMode: 'overlay',
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {displayed.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActive(idx)}
                            className={`w-2 h-2 rounded-full ${idx === active ? 'bg-[#004C9C]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectStack;
