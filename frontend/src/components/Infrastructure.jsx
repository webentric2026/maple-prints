// Infrastructure.jsx
import { useState, useEffect, useRef } from "react";

// ── Import your machine images ──
import machine1 from "../assets/images/Machines/machine-1.jpeg";
import machine2 from "../assets/images/Machines/machine-2.jpeg";
import machine3 from "../assets/images/Machines/machine-3.jpeg";
import machine4 from "../assets/images/Machines/machine-4.jpeg";

// ─────────────────────────────────────────────
//  SLIDESHOW IMAGES  (independent of the list)
//  Add / remove images freely — the list won't change
// ─────────────────────────────────────────────
const slideshowImages = [
    { src: machine1, caption: "Paper Cutting — POLAR" },
    { src: machine2, caption: "4 Colour KBA Press" },
    { src: machine3, caption: "Heidelberg Hybrid / UV" },
    { src: machine4, caption: "Die Cutting Unit" },
    { src: machine3, caption: "Auto Gluing & Pasting" },
];

// ─────────────────────────────────────────────
//  MACHINERY BULLET LIST  (independent of the slideshow)
//  Edit names here freely without touching the images
// ─────────────────────────────────────────────
const machineryList = [
    { id: 1, name: "POLAR" },
    { id: 2, name: "Roland 700 – 5 Colour with Coater (UV)" },
    { id: 3, name: "4 colour KBA" },
    { id: 4, name: "Heildberg" },
    { id: 5, name: "Dye Cutting" },
];

// ─────────────────────────────────────────────
//  IMAGE SLIDESHOW (right panel — fully standalone)
// ─────────────────────────────────────────────
function ImageSlideshow() {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);
    const total = slideshowImages.length;

    const startTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 3500);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(intervalRef.current);
    }, []);

    const go = (dir) => {
        setCurrent((prev) => (prev + dir + total) % total);
        startTimer();
    };

    const goTo = (i) => {
        setCurrent(i);
        startTimer();
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Main image frame */}
            <div
                className="relative overflow-hidden "
                style={{ aspectRatio: "4/3" }}
            >
                {/* Slides */}
                {slideshowImages.map((img, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
                    >
                        <img
                            src={img.src}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                        />
                        {/* Caption bar */}
                        <div
                            className="absolute bottom-0 left-0 right-0 px-5 py-3"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                            }}
                        >
                            <p
                                className="text-white font-semibold"
                                style={{ fontSize: "13.5px", letterSpacing: "0.02em" }}
                            >
                                {img.caption}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Glow overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(232,130,12,0.08) 0%, transparent 70%)",
                        zIndex: 2,
                    }}
                />

                {/* Slide counter badge */}


                {/* Prev arrow */}
                <button
                    onClick={() => go(-1)}
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 z-10 flex items-center justify-center  transition-all duration-200 hover:scale-105"
                    style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.8)",
                        marginTop: 0,
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* Next arrow */}
                <button
                    onClick={() => go(1)}
                    aria-label="Next"
                    className="absolute right-3 top-1/2 z-10 flex items-center justify-center  transition-all duration-200 hover:scale-105"
                    style={{
                        width: "36px",
                        height: "36px",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.8)",
                        marginTop: 0,
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* Dot nav */}
            <div className="flex items-center justify-center gap-2">
                {slideshowImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className="rounded-full transition-all duration-300 focus:outline-none"
                        style={{
                            width: i === current ? "24px" : "7px",
                            height: "7px",
                            background:
                                i === current ? "#E8820C" : "#1E3A5F",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
//  MACHINERY BULLET LIST (left panel — fully standalone)
// ─────────────────────────────────────────────
function MachineryBulletList() {
    return (
        <div
            className=" px-7 py-7 h-full"
            style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
            }}
        >
            <p
                className="font-black mb-5 text-[25px] md:[30px]"
                style={{
                    color: "#E8820C",
                    letterSpacing: "0.01em",
                }}
            >
                Few of the Machineries are
            </p>

            <ul className="flex flex-col gap-2.5 ">
                {machineryList.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center gap-3 group"
                    >
                        {/* Bullet dot */}
                        <span
                            className="flex-shrink-0 rounded-full mt-[6px]"
                            style={{
                                width: "7px",
                                height: "7px",
                                minWidth: "7px",
                                background: "#E8820C",
                                opacity: 0.85,
                            }}
                        />
                        <span
                            className="leading-snug text-l md:text-xl"
                        >
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export default function Infrastructure() {
    return (
        <section
            className="relative w-full overflow-hidden py-20 md:py-28"

        >
            {/* Bg glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 55% at 50% 55%, rgba(230,140,40,0.06) 0%, transparent 70%)",
                }}
            />

            {/* ── Header ── */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 mb-14">
                <h2
                    className="text-[#1E3A5F] font-black leading-[1.1] tracking-tight mb-4"
                    style={{ fontSize: "clamp(26px,5vw,54px)" }}
                >
                    Our Infrastructure
                </h2>
                <p
                    className="leading-relaxed max-w-[500px] text-black/75"

                >
                    Powered by world-class machinery from globally trusted brands, ensuring
                    precision, consistency, and scale in every production run.
                </p>
            </div>

            {/* ── Two-Column Layout ── */}
            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10">
                <div
                    className="infra-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "32px",
                        alignItems: "start",
                    }}
                >

                    <ImageSlideshow />

                    <MachineryBulletList />


                </div>
            </div>

            {/* Responsive: stack on mobile */}
            <style>{`
        @media (max-width: 768px) {
          .infra-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}