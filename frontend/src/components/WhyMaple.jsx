// WhyMaple.jsx
import { useEffect, useRef, useState } from "react";

// ── Feature data ──
const features = [
    {
        title: "Advanced Printing Infrastructure",
        desc: "State-of-the-art offset and digital presses deliver sharp, vibrant output at every scale.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="6" y="9" width="12" height="9" rx="1" />
                <path d="M6 12H4a1 1 0 01-1-1V7a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1h-2" />
                <path d="M9 21v-6h6v6" />
                <circle cx="18" cy="11.5" r="0.75" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        title: "Complete In-House Finishing",
        desc: "Lamination, foiling, embossing, diecutting — every finish handled under one roof.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: "Premium Quality Standards",
        desc: "Rigorous QC at every production stage ensures zero compromise on finish and form.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 12l2 2 4-4" />
                <path d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        title: "Faster Turnaround Times",
        desc: "Optimised production scheduling ensures on-time delivery even for high-urgency orders.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
    },
    {
        title: "Strong Industry Experience",
        desc: "20+ years of packaging expertise across pharma, FMCG, cosmetics, and consumer goods.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
];

// The highlighted/featured card content (right column — dark card)
const featuredCard = {
    title: "Luxury Finishing Expertise",
    desc: "From soft-touch lamination and spot UV to hot stamping and embossing — we bring premium finishes that command shelf attention and reinforce your brand at every touchpoint.",
    cta: "Request a Sample",
    icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
            strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
};

// ── Animated counter ──
function useCountUp(target, duration = 1200) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const fired = useRef(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !fired.current) {
                fired.current = true;
                let start = 0;
                const step = target / (duration / 16);
                const t = setInterval(() => {
                    start += step;
                    if (start >= target) { setVal(target); clearInterval(t); }
                    else setVal(Math.floor(start));
                }, 16);
            }
        }, { threshold: 0.6 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [target, duration]);
    return [val, ref];
}

// ── Scroll-reveal hook ──
function useReveal(delay = 0) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
        }, { threshold: 0.12 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible, delay];
}

// ── Small feature card (left grid) ──
function SmallCard({ title, desc, icon, delay }) {
    const [ref, visible] = useReveal(delay);
    return (
        <div
            ref={ref}
            className="
        group relative flex flex-col gap-3 p-6
        border border-white/8 cursor-default
        hover:border-[#E8820C]/30 hover:bg-white/6
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]
        transition-all duration-300
      "
            style={{
                background: "rgba(255,255,255,0.045)",
                backdropFilter: "blur(12px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms,
                     background 0.3s, border-color 0.3s, box-shadow 0.3s`,
            }}
        >
            {/* Icon */}
            <div className="
        w-10 h-10 flex items-center justify-center flex-shrink-0
        bg-[#E8820C]/12 text-[#E8820C] border border-[#E8820C]/20
        group-hover:bg-[#E8820C]/22 group-hover:border-[#E8820C]/40
        transition-all duration-300
      ">
                {icon}
            </div>
            <h3 className="text-white font-semibold text-[15px] leading-snug">{title}</h3>
            <p className="text-white/45 text-[13px] leading-relaxed">{desc}</p>
        </div>
    );
}

// ── Main ──
export default function WhyMaple() {
    const [heroRef, heroVisible] = useReveal(0);
    const [featRef, featVisible] = useReveal(200);

    return (
        <section
            className="relative w-full overflow-hidden py-24 md:py-32"
            style={{
                background: "linear-gradient(160deg, #05122B 0%, #0A1A3A 50%, #060D1F 100%)",
            }}
        >
            {/* Bg glow */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(232,130,12,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-[1160px] mx-auto px-6 sm:px-10">

                {/* ── Eyebrow + Heading ── */}
                <div
                    ref={heroRef}
                    className="mb-14"
                    style={{
                        opacity: heroVisible ? 1 : 0,
                        transform: heroVisible ? "translateY(0)" : "translateY(16px)",
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                    }}
                >

                    <h2 className="
            text-white font-black leading-[1.08] tracking-tight
            text-[clamp(28px,5vw,56px)] max-w-[640px] 
          ">
                        Why{" "}
                        <span className="text-[#E8820C]">Maple Prints</span>{" "}
                        is the Right Choice for You
                    </h2>
                </div>
                {/* ── Stats strip ── */}
                <div className="mt-14">
                    <div
                        className=" border border-white/8 px-6 py-8 grid grid-cols-3 gap-6"
                        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
                    >
                        {[
                            { value: 50, suffix: "+", label: "Clients Served" },
                            { value: 10, suffix: "+", label: "Industries Covered" },
                            { value: 20, suffix: "+", label: "Years Experience" },
                        ].map(({ value, suffix, label }) => {
                            const [count, ref] = useCountUp(value);
                            return (
                                <div key={label} ref={ref} className="flex flex-col items-center gap-1">
                                    <span className="text-[#E8820C] font-black text-[clamp(28px,4vw,48px)] leading-none tabular-nums">
                                        {count}{suffix}
                                    </span>
                                    <span className="text-white/45 text-[12px] font-medium tracking-wide text-center">{label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* ── Two-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-5 items-start mt-10">

                    {/* Left: 2×2 + 1 grid of small cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <SmallCard key={i} {...f} delay={i * 70} />
                        ))}
                    </div>

                    {/* Right: featured dark highlight card */}
                    <div
                        ref={featRef}
                        className="
              relative flex flex-col justify-between gap-8
               p-8 h-full min-h-[360px]
              lg:sticky lg:top-8
            "
                        style={{
                            background: "linear-gradient(145deg, #0E2247 0%, #071530 100%)",
                            border: "1px solid rgba(232,130,12,0.18)",
                            boxShadow: "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
                            opacity: featVisible ? 1 : 0,
                            transform: featVisible ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.6s ease 200ms, transform 0.6s ease 200ms",
                        }}
                    >
                        {/* Subtle orange glow inside the card */}
                        <div className="absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,130,12,0.08) 0%, transparent 60%)",
                            }}
                        />

                        <div className="relative z-10 flex flex-col gap-5">
                            {/* Icon */}
                            <div className="
                w-12 h-12  flex items-center justify-center flex-shrink-0
                text-[#E8820C]
              "
                                style={{
                                    background: "rgba(232,130,12,0.15)",
                                    border: "1px solid rgba(232,130,12,0.28)",
                                }}
                            >
                                {featuredCard.icon}
                            </div>

                            <h3 className="text-white font-bold text-[clamp(20px,2.2vw,26px)] leading-snug">
                                {featuredCard.title}
                            </h3>

                            <p className="text-white/55 text-[14px] leading-relaxed">
                                {featuredCard.desc}
                            </p>

                            {/* Bullet highlights */}
                            <ul className="flex flex-col gap-2 mt-1">
                                {["Soft-touch lamination", "Spot UV coating", "Hot foil stamping", "Embossing & debossing"].map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 text-white/65 text-[13px]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8820C] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="relative z-10">
                            <a
                                href="#contact"
                                className="
                  inline-flex items-center gap-2.5 px-6 py-3 
                  bg-[#E8820C] text-white font-semibold text-[14px] tracking-wide
                  hover:bg-[#d4720a] hover:shadow-[0_8px_24px_rgba(232,130,12,0.40)]
                  active:scale-95 transition-all duration-200
                "
                            >
                                {featuredCard.cta}
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>



            </div>
        </section>
    );
}