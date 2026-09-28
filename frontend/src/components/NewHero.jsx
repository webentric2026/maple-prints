import React, { useState, useEffect, useCallback } from "react";

import ayurvedic_1 from '../assets/images/Products/bg_removed/ayurvedic-1.png'
import cosmetic_1 from '../assets/images/Products/bg_removed/cosmetic-1.png'
import electronics_1 from '../assets/images/Products/bg_removed/electric-1.png'
import food_1 from '../assets/images/Products/bg_removed/food-1.png'
import nutraceuticals_1 from '../assets/images/Products/bg_removed/nutra-1.png'
import pharmaceuticals_6 from '../assets/images/Products/bg_removed/pharma-6.png'

const slides = [
    { id: 1, src: ayurvedic_1, alt: "Ayurvedic product packaging" },
    { id: 2, src: cosmetic_1, alt: "Cosmetic product packaging" },
    { id: 3, src: electronics_1, alt: "Electronics packaging box" },
    { id: 4, src: food_1, alt: "Food packaging box" },
    { id: 5, src: nutraceuticals_1, alt: "Nutraceutical packaging box" },
    { id: 6, src: pharmaceuticals_6, alt: "Pharmaceutical packaging box" },
];

const AUTOPLAY_MS = 4000;

function HeroHeading() {
    return (
        <div className="w-full min-w-0">
            <h1 className="text-center md:text-left flex flex-col items-center md:items-start">
                <span className="block w-full max-w-[560px] text-[clamp(1.75rem,3.5vw+1rem,3.75rem)] font-extrabold leading-[1.12] tracking-tight text-[#1E3A5F] break-words">
                    MAPLE <span className="text-[#E09A00]">PRINTS</span>
                </span>
                <span className="block w-full max-w-[560px] text-[clamp(1.1rem,2vw+0.6rem,2.6rem)] font-bold leading-[1.25] tracking-wide italic text-[#16181a] mt-2 break-words underline decoration-[#E09A00]/40 decoration-[3px] underline-offset-[6px]">
                    Premium Packaging & Printing Solutions
                </span>
            </h1>
        </div>
    );
}

function HeroDescription() {
    return (
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full min-w-0">
            <p className="text-[14.5px] sm:text-[15px] md:text-[14.5px] lg:text-[16px] leading-[1.7] text-black/90 w-full max-w-[560px] mb-4 break-words">
                Maple Prints is a professionally managed packaging and printing
                company specializing in the manufacturing of premium mono cartons
                and paper-based packaging solutions. With a strong focus on
                precision, consistency, and visual excellence, we cater to
                industries where packaging plays a critical role in product
                protection, brand positioning, and consumer perception.
            </p>

            <p className="text-[14.5px] sm:text-[15px] md:text-[14.5px] lg:text-[16px] leading-[1.7] text-black/90 w-full max-w-[560px] mb-4 break-words">
                Our strength lies in offering complete end-to-end packaging
                solutions under one roof — from advanced printing to luxury
                finishing applications — ensuring superior quality control, faster
                turnaround times, and dependable execution.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 mt-3 w-full sm:w-auto">
                <a
                    href="/about"
                    className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold text-white bg-[#E09A00] shadow-md shadow-[#E09A00]/30 transition-all duration-200 hover:bg-[#c98700] hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] whitespace-nowrap"
                >
                    Read More About Us
                </a>
            </div>
        </div>
    );
}

function SlideshowWindow() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const goTo = useCallback((i) => {
        setIndex(((i % slides.length) + slides.length) % slides.length);
    }, []);

    const next = useCallback(() => goTo(index + 1), [index, goTo]);
    const prev = useCallback(() => goTo(index - 1), [index, goTo]);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, AUTOPLAY_MS);
        return () => clearInterval(timer);
    }, [paused]);

    return (
        <div
            className="block relative w-full max-w-full mx-auto min-w-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="region"
            aria-label="Maple Prints product showcase"
        >
            <div className="relative w-full aspect-square rounded-sm bg-gradient-to-br from-white to-[#f1f1ee] shadow-[0_30px_60px_-20px_rgba(20,30,40,0.18),0_0_0_1px_rgba(20,30,40,0.05)] overflow-hidden">
                {slides.map((slide, i) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 flex items-center justify-center p-4 sm:p-9 transition-all duration-700 ease-out ${i === index
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                            }`}
                        aria-hidden={i !== index}
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.16)]"
                            draggable="false"
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}

                <div
                    className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(46,125,50,0.08)_0%,rgba(46,125,50,0)_60%)]"
                    aria-hidden="true"
                />

                <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous product"
                    className="absolute top-1/2 left-2 sm:left-3.5 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/85 backdrop-blur-sm text-[#16181a] text-xl leading-none flex items-center justify-center shadow-md transition-transform duration-200 hover:bg-white hover:scale-110"
                >
                    ‹
                </button>
                <button
                    type="button"
                    onClick={next}
                    aria-label="Next product"
                    className="absolute top-1/2 right-2 sm:right-3.5 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/85 backdrop-blur-sm text-[#16181a] text-xl leading-none flex items-center justify-center shadow-md transition-transform duration-200 hover:bg-white hover:scale-110"
                >
                    ›
                </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-5" role="tablist" aria-label="Slide selector">
                {slides.map((slide, i) => (
                    <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Show ${slide.alt}`}
                        onClick={() => goTo(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-250 ${i === index ? "bg-[#2E7D32] scale-125" : "bg-black/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function MaplePrintsHeroSlideshow() {
    return (
        <section
            className="relative w-full overflow-x-clip overflow-y-hidden bg-[#FAFAF8] flex items-center isolate"
            aria-label="Maple Prints — Premium Packaging Solutions"
        >
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-[12%] -right-[8%] w-[55%] h-[65%] bg-[radial-gradient(circle,rgba(46,125,50,0.06)_0%,rgba(46,125,50,0)_70%)]" />
                <div className="absolute -bottom-[18%] -left-[10%] w-[50%] h-[55%] bg-[radial-gradient(circle,rgba(30,58,95,0.05)_0%,rgba(30,58,95,0)_70%)]" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:grid-cols-2 gap-10 md:gap-6 lg:gap-12 items-center">
                <div className="order-1 min-w-0 flex flex-col gap-6 md:gap-8 lg:gap-10">
                    <HeroHeading />
                    <HeroDescription />
                </div>

                <div className="order-2 min-w-0 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[320px] lg:max-w-[480px] justify-self-center md:justify-self-end">
                    <SlideshowWindow />
                </div>
            </div>
        </section>
    );
}