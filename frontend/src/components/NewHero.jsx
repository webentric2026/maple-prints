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
        <div className="mt-15">
            <h1 className="text-center md:text-left">
                <p className="text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-[1.18] tracking-tight text-[#1E3A5F] max-w-[540px]">
                    MAPLE <span className="text-[#E09A00]">PRINTS</span>
                </p>
                <span className="text-[26px] md:text-[38px] lg:text-[42px] font-bold leading-[1.18] tracking-wide italic text-[#16181a] max-w-[540px] mb-5 underline decoration-1 underline-offset-4">
                    Premium Packaging & Printing Solutions
                </span>
            </h1>
        </div>
    );
}

function HeroDescription() {
    return (
        <div className="flex flex-col">
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-black/90 mt-10 md:mt-0 max-w-[520px] mb-4">
                Maple Prints is a professionally managed packaging and printing
                company specializing in the manufacturing of premium mono cartons
                and paper-based packaging solutions. With a strong focus on
                precision, consistency, and visual excellence, we cater to
                industries where packaging plays a critical role in product
                protection, brand positioning, and consumer perception.
            </p>

            <p className="text-[15px] md:text-[16px] leading-[1.7] text-black/90 max-w-[520px] mb-4">
                Our strength lies in offering complete end-to-end packaging
                solutions under one roof — from advanced printing to luxury
                finishing applications — ensuring superior quality control, faster
                turnaround times, and dependable execution.
            </p>

            <div className="flex flex-wrap sm:flex-row flex-col items-stretch sm:items-center gap-3 sm:gap-4 mt-3">
                <a
                    href="/about"
                    className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold text-white bg-[#E09A00] shadow-md shadow-[#E09A00]/30 transition-all duration-200 hover:bg-[#c98700] hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
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
            className="block relative w-full max-w-[380px] lg:max-w-[480px] mx-auto md:mt-15"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="region"
            aria-label="Maple Prints product showcase"
        >
            <div className="relative w-full aspect-square rounded-sm bg-gradient-to-br from-white to-[#f1f1ee] shadow-[0_30px_60px_-20px_rgba(20,30,40,0.18),0_0_0_1px_rgba(20,30,40,0.05)] overflow-hidden">
                {slides.map((slide, i) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 flex items-center justify-center p-9 transition-all duration-700 ease-out ${i === index
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
                    className="absolute top-1/2 left-3.5 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/85 backdrop-blur-sm text-[#16181a] text-xl leading-none flex items-center justify-center shadow-md transition-transform duration-200 hover:bg-white hover:scale-110"
                >
                    ‹
                </button>
                <button
                    type="button"
                    onClick={next}
                    aria-label="Next product"
                    className="absolute top-1/2 right-3.5 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/85 backdrop-blur-sm text-[#16181a] text-xl leading-none flex items-center justify-center shadow-md transition-transform duration-200 hover:bg-white hover:scale-110"
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
            className="relative w-full h-auto md:h-[80vh] my-10 overflow-hidden bg-[#FAFAF8] flex items-center isolate"
            aria-label="Maple Prints — Premium Packaging Solutions"
        >
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-[12%] -right-[8%] w-[55%] h-[65%] bg-[radial-gradient(circle,rgba(46,125,50,0.06)_0%,rgba(46,125,50,0)_70%)]" />
                <div className="absolute -bottom-[18%] -left-[10%] w-[50%] h-[55%] bg-[radial-gradient(circle,rgba(30,58,95,0.05)_0%,rgba(30,58,95,0)_70%)]" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 lg:gap-0 md:items-center">
                <div className="order-1 md:order-none md:col-start-1 md:row-start-1">
                    <HeroHeading />
                </div>

                <div className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2">
                    <SlideshowWindow />
                </div>

                <div className="order-3 md:order-none md:col-start-1 md:row-start-2">
                    <HeroDescription />
                </div>
            </div>
        </section>
    );
}