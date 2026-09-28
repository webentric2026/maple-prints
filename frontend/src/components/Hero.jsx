import { useState, useEffect, useCallback } from "react";

import rigid from '../assets/images/Products/grouped-images/grouped-rigid.png'
import metal from '../assets/images/Products/grouped-images/grouped-metal.png'
import windowImg from '../assets/images/Products/grouped-images/grouped-window.png'
import embossed from '../assets/images/Products/grouped-images/grouped-embossed.png'
import hybrid from '../assets/images/Products/grouped-images/grouped-hybrid.png'
import corrugated from '../assets/images/Products/grouped-images/grouped-corrugated.png'
import leaf from '../assets/images/Products/grouped-images/grouped-leaf.png'

import hero_bg from '../assets/images/Hero/bg.png'

const slides = [
    { id: 1, src: rigid, name: "Rigid Boxes", alt: "Rigid Boxes product packaging" },
    { id: 2, src: metal, name: "Metallic Boxes", alt: "Metallic Boxes product packaging" },
    { id: 3, src: windowImg, name: "Window Boxes", alt: "Window Boxes product packaging" },
    { id: 4, src: embossed, name: "Embossed Boxes", alt: "Embossed Boxes product packaging" },
    { id: 5, src: hybrid, name: "Hybrid Boxes", alt: "Hybrid Boxes product packaging" },
    { id: 6, src: corrugated, name: "Corrugated Boxes", alt: "Corrugated Boxes product packaging" },
    { id: 7, src: leaf, name: "Foil Stamped Boxes", alt: "Foil Stamped Boxes product packaging" },
];

const AUTOPLAY_MS = 4000;

function HeroHeading() {
    return (
        <div className="w-full min-w-0">
            {/* md+ = big-screen look (left-aligned, side-by-side); stacked+centered only below 768px */}
            <h1 className="text-center md:text-left flex flex-col items-center md:items-start">
                <span className="block w-full max-w-[560px] font-extrabold leading-[1.12] tracking-tight text-[#1E3A5F] text-[clamp(1.75rem,3.5vw+1rem,3.75rem)] break-words">
                    MAPLE <span className="text-[#E09A00]">PRINTS</span>
                </span>
                <span className="block w-full max-w-[560px] font-bold leading-[1.25] tracking-wide italic text-[#16181a] text-[clamp(1.1rem,2vw+0.6rem,2.5rem)] mt-2 break-words underline decoration-[#E09A00]/40 decoration-[3px] underline-offset-[6px]">
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
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            role="region"
            aria-label="Maple Prints product showcase"
            aria-roledescription="slideshow"
        >
            <div className="relative w-full aspect-square rounded-sm bg-gradient-to-br from-white to-[#f1f1ee] shadow-[0_30px_60px_-20px_rgba(20,30,40,0.18),0_0_0_1px_rgba(20,30,40,0.05)] overflow-hidden">
                {slides.map((slide, i) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 flex flex-col items-center justify-center px-4 pt-4 pb-16 sm:px-9 sm:pt-9 sm:pb-20 transition-all duration-700 ease-out ${i === index
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                            }`}
                        aria-hidden={i !== index}
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="max-w-full max-h-full w-auto h-auto flex-1 min-h-0 object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.16)]"
                            draggable="false"
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}

                <div
                    className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(46,125,50,0.08)_0%,rgba(46,125,50,0)_60%)]"
                    aria-hidden="true"
                />

                {/* ── Box name label — always visible ── */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-1.5 px-3 sm:px-4 pt-6 pb-3 sm:pb-4 pointer-events-none">
                    <p
                        key={slides[index].id}
                        className="pointer-events-auto inline-flex max-w-full items-center justify-center px-4 sm:px-5 py-2 bg-[#1E3A5F]/90 backdrop-blur-sm text-white text-[12px] sm:text-sm font-semibold tracking-wide shadow-lg truncate"
                        aria-live="polite"
                    >
                        {slides[index].name}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={prev}
                    aria-label={`Previous product, currently showing ${slides[index].name}`}
                    className="absolute top-1/2 left-2 sm:left-3.5 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 bg-white/85 backdrop-blur-sm text-[#16181a] text-xl leading-none flex items-center justify-center shadow-md transition-transform duration-200 hover:bg-white hover:scale-110 border border-[#16181a]/10"
                >
                    ‹
                </button>
                <button
                    type="button"
                    onClick={next}
                    aria-label={`Next product, currently showing ${slides[index].name}`}
                    className="absolute top-1/2 right-2 sm:right-3.5 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 bg-white/85 backdrop-blur-sm text-[#16181a] text-xl leading-none flex items-center justify-center shadow-md transition-transform duration-200 hover:bg-white hover:scale-110 border border-[#16181a]/10"
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
                        aria-label={`Show ${slide.name}`}
                        title={slide.name}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[#2E7D32]" : "w-2 bg-black/20 hover:bg-black/40"
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
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30 sm:opacity-50 md:opacity-80 lg:opacity-100"
                style={{ backgroundImage: `url(${hero_bg})` }}
                aria-hidden="true"
            />
            {/* Readability overlay on small screens so text never clashes with bg art */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#FAFAF8]/85 via-[#FAFAF8]/60 to-[#FAFAF8]/90 md:from-transparent md:via-transparent md:to-transparent pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-[12%] -right-[8%] w-[55%] h-[65%] bg-[radial-gradient(circle,rgba(46,125,50,0.06)_0%,rgba(46,125,50,0)_70%)]" />
                <div className="absolute -bottom-[18%] -left-[10%] w-[50%] h-[55%] bg-[radial-gradient(circle,rgba(30,58,95,0.05)_0%,rgba(30,58,95,0)_70%)]" />
            </div>

            {/* Big-screen 2-col look kept down to md (768px); stacks only on phones/portrait-small tablets */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:grid-cols-2 gap-10 md:gap-6 lg:gap-12 items-center">
                <div className="order-1 min-w-0 flex flex-col gap-6 md:gap-8 lg:gap-10">
                    <HeroHeading />
                    <HeroDescription />
                </div>

                {/* Capped cell width per breakpoint — slideshow fills the cell, never exceeds it */}
                <div className="order-2 min-w-0 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[320px] lg:max-w-[480px] justify-self-center md:justify-self-end">
                    <SlideshowWindow />
                </div>
            </div>

        </section>
    );
}