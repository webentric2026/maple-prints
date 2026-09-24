import React, { useEffect, useRef, useState } from "react";

// ── HOW TO ADD / CHANGE IMAGES (1:1 template) ──────────────────────────
// 1. Drop your square image into: src/assets/images/ (or Products/)
//    Tip: use 800x800px or 1000x1000px for best 1:1 quality.
// 2. Import it here, e.g.:
//      import pharmaImg from "../assets/images/Products/pharma-6.png";
// 3. Set it on the matching industry below:
//      { title: "...", desc: "...", image: pharmaImg }
//    To hide image for an item, set image: null.
//    Images render with `aspect-square object-cover` = always 1:1.
// ───────────────────────────────────────────────────────────────────────
import pharmaImg from "../assets/images/Products/pharma-6.png";
import cosmeticImg from "../assets/images/Products/cosmetic-1.png";
import ayurvedicImg from "../assets/images/Products/ayurvedic-1.png";
import fmcgImg from "../assets/images/Products/food-1.png";
import electronicsImg from "../assets/images/Products/electric-1.png";
import accessoriesImg from "../assets/images/Products/CB-1.jpg";

const industries = [
    {
        title: "Pharmaceutical & Healthcare",
        desc: "Precision-driven packaging solutions developed to meet stringent quality and compliance standards required in the pharmaceutical sector.",
        image: pharmaImg,
    },
    {
        title: "Cosmetics & Personal Care",
        desc: "Premium packaging designed to enhance shelf appeal, strengthen brand identity, and create a luxurious customer experience.",
        image: cosmeticImg,
    },
    {
        title: "Ayurvedic & Herbal Products",
        desc: "Packaging solutions that combine natural aesthetics with modern printing standards to reflect authenticity and trust.",
        image: ayurvedicImg,
    },
    {
        title: "FMCG (Fast-Moving Consumer Goods)",
        desc: "High-volume packaging solutions focused on consistency, visual impact, and efficient production turnaround.",
        image: fmcgImg,
    },
    {
        title: "Electronics & Appliances",
        desc: "Durable and structurally reliable cartons designed for product protection while maintaining premium presentation standards.",
        image: electronicsImg,
    },
    {
        title: "Accessories & Consumer Products",
        desc: "Retail-focused packaging solutions created to maximize visual appeal and strengthen shelf presence.",
        image: accessoriesImg,
    },
];

// Arrow Button
function ArrowBtn({ direction, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            aria-label={direction === "left" ? "Previous" : "Next"}
            className="flex items-center justify-center w-12 h-12 border border-black/15 bg-white shadow-sm transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1E3A5F] hover:border-[#1E3A5F] hover:text-white active:scale-95"
        >
            {direction === "left" ? (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            ) : (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            )}
        </button>
    );
}

export default function IndustriesWeServe() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index) => {
        const container = scrollRef.current;
        if (!container) return;

        const clamped = Math.max(
            0,
            Math.min(index, industries.length - 1)
        );

        container.children[clamped].scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
        });

        setActiveIndex(clamped);
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const index = [...container.children].indexOf(entry.target);
                    if (index !== -1) {
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: container,
                threshold: 0.6,
            }
        );

        [...container.children].forEach((card) =>
            observer.observe(card)
        );

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-10 py-4">
            {/* Heading */}
            <p className="text-[#1E3A5F] text-center font-black leading-[1.1] tracking-tight mb-4 text-[50px] md:text-[60px] py-10 items-center flex flex-col">
                Industries We Serve
                <div className="w-14 h-[3px] rounded-full bg-[#E8820C] mt-2 " />
            </p>


            {/* Desktop */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-5">
                {industries.map((item, i) => (
                    <div
                        key={i}
                        className="border border-black/8 overflow-hidden flex flex-col"
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                        }}
                    >
                        {/* 1:1 Image */}
                        {item.image && (
                            <div className="w-full aspect-square overflow-hidden bg-black/5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="p-5 flex flex-col gap-2">
                            <h4 className="text-black font-semibold text-[18px] leading-snug">
                                {item.title}
                            </h4>

                            <p className="text-black/60 text-[13px] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Slider */}
            <div className="sm:hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <style>{`
            div::-webkit-scrollbar{
              display:none;
            }
          `}</style>

                    {industries.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[85vw] snap-start border border-black/8 overflow-hidden flex flex-col"
                            style={{
                                background: "rgba(255,255,255,0.04)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                            }}
                        >
                            {/* 1:1 Image */}
                            {item.image && (
                                <div className="w-full aspect-square overflow-hidden bg-black/5">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full aspect-square object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="p-5 flex flex-col gap-2">
                                <h4 className="text-black font-semibold text-[25px] leading-snug">
                                    {item.title}
                                </h4>

                                <p className="text-black/60 text-[16px] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-5">
                    <ArrowBtn
                        direction="left"
                        onClick={() => scrollToIndex(activeIndex - 1)}
                        disabled={activeIndex === 0}
                    />

                    <div className="flex gap-2 items-center">
                        {industries.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className="rounded-full transition-all duration-300"
                                aria-label={`Go to slide ${i + 1}`}
                                style={{
                                    width: i === activeIndex ? "20px" : "7px",
                                    height: "7px",
                                    background:
                                        i === activeIndex
                                            ? "#1E3A5F"
                                            : "rgba(30,58,95,0.25)",
                                }}
                            />
                        ))}
                    </div>

                    <ArrowBtn
                        direction="right"
                        onClick={() => scrollToIndex(activeIndex + 1)}
                        disabled={activeIndex === industries.length - 1}
                    />
                </div>
            </div>
        </div>
    );
}