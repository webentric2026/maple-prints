// Products.jsx
import { useRef, useState, useEffect, useCallback } from "react";

// ─────────────────────────────────────────────
//  ADD YOUR IMAGES HERE
//  import rigidBoxesImg from '../assets/products/rigid-boxes.jpg'
//  etc.
// ─────────────────────────────────────────────
import rigidBoxesImg from '../assets/images/rigid.png'
import corrugatedImg from '../assets/images/Products/nutra-7.png'
import foodTrayImg from '../assets/images/food-trays.png'
import windowCartonImg from '../assets/images/Products/food-1.png'
import monoCartonImg from '../assets/images/Products/grouped-pharma-1.png'

const products = [
    { name: "Rigid Boxes", image: rigidBoxesImg },
    { name: "Corrugated Cartons", image: corrugatedImg },
    { name: "Food Trays", image: foodTrayImg },
    { name: "Window Cartons", image: windowCartonImg },
    { name: "Mono Cartons", image: monoCartonImg },
];

// How many cards visible at each breakpoint
// We read this at runtime from a ref so no window resize listener needed
function getVisible() {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

// ── Arrow Button ──
function ArrowBtn({ direction, onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label={direction === "left" ? "Previous product" : "Next product"}
            className="
        flex-shrink-0 flex items-center justify-center
        w-11 h-11 rounded-full bg-white shadow-md border border-black/8
        text-gray-500 hover:text-[#E8820C] hover:border-[#E8820C]/30
        hover:shadow-lg active:scale-95
        transition-all duration-200 z-10
      "
        >
            {direction === "left" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            )}
        </button>
    );
}

// ── Product Card ──
function ProductCard({ name, image }) {
    return (
        <div className="
      flex-shrink-0 flex flex-col gap-0
      w-full
      group cursor-default
    ">
            <div className="
        aspect-square w-full overflow-hidden
        bg-[#F8F8F8] border border-black/5
        flex items-center justify-center
        p-1
        transition-all duration-300
        group-hover:shadow-xl group-hover:-translate-y-1
        shadow-sm
      ">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="
            w-full h-full object-contain
            transition-transform duration-500
            group-hover:scale-105
          "
                />
            </div>

            {/* Product name — below the image, never overlaid */}
            <p className="
        text-center text-[20px] font-semibold text-gray-800
        tracking-wide leading-snug 
      ">
                {name}
            </p>
        </div>
    );
}

// ── Main ──
export default function Products() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(getVisible);
    const intervalRef = useRef(null);
    const total = products.length;

    // Max valid index = last position where we can show `visible` cards
    const maxIndex = Math.max(0, total - visible);

    // Advance one step, wrapping at the end
    const next = useCallback(() => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = useCallback(() => {
        setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Auto-scroll every 3 s
    const startAuto = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(next, 3000);
    }, [next]);

    useEffect(() => {
        startAuto();
        return () => clearInterval(intervalRef.current);
    }, [startAuto]);

    // Recalculate visible cards on resize
    useEffect(() => {
        const onResize = () => {
            const v = getVisible();
            setVisible(v);
            setIndex((prev) => Math.min(prev, Math.max(0, total - v)));
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [total]);

    // Manual nav — restart auto after click
    const handlePrev = () => { prev(); startAuto(); };
    const handleNext = () => { next(); startAuto(); };

    // Card width as % of the track — gap is 1.5rem (24px) between cards
    // We use CSS variables so the math is clean
    const gapRem = 1.5;                              // gap-6 = 1.5rem
    const cardWidthPct = `calc((100% - ${(visible - 1) * gapRem}rem) / ${visible})`;
    const translateX = `calc(-${index} * (${cardWidthPct} + ${gapRem}rem))`;

    return (
        <section className="w-full bg-white py-20 md:py-28 overflow-hidden">

            {/* ── Heading ── */}
            <div className="flex flex-col items-center text-center px-4 mb-14">
                <h2 className="text-[#1E3A5F] font-black leading-[1.1] tracking-tight mb-4 text-[50px] md:text-[60px]">
                    Products
                </h2>
                {/* Accent underline */}
                <div className="w-14 h-[3px] rounded-full bg-[#E8820C] mt-2" />
            </div>

            {/* ── Carousel wrapper ── */}
            <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">


                <div className="
          absolute inset-y-0 left-0 right-0
          flex items-center justify-between
          pointer-events-none
          px-0 sm:-mx-6
        ">
                    {/* Left */}
                    <div className="pointer-events-auto">
                        <ArrowBtn direction="left" onClick={handlePrev} />
                    </div>
                    {/* Right */}
                    <div className="pointer-events-auto">
                        <ArrowBtn direction="right" onClick={handleNext} />
                    </div>
                </div>

                {/* ── Clipping window ── */}
                <div className="overflow-hidden mx-10 sm:mx-12">
                    {/* ── Sliding track ── */}
                    <div
                        className="flex gap-6"
                        style={{
                            transform: `translateX(${translateX})`,
                            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                            willChange: "transform",
                        }}
                    >
                        {products.map((product, i) => (
                            <div
                                key={i}
                                style={{ width: cardWidthPct, flexShrink: 0 }}
                            >
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Dot indicators ── */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setIndex(i); startAuto(); }}
                            aria-label={`Go to slide ${i + 1}`}
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: i === index ? "24px" : "8px",
                                height: "8px",
                                background: i === index ? "#E8820C" : "rgba(0,0,0,0.15)",
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}