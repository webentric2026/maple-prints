// TrustedBy.jsx
import { useRef, useState, useEffect } from "react";
import dr_morepen from '../assets/logos/Dr. Morepen.png'
import glenmark from '../assets/logos/glenmark.png'
import lark from '../assets/logos/lark.png'
import mankind from '../assets/logos/mankind.png'
import primal from '../assets/logos/primal.png'
import ranbaxy from '../assets/logos/ranbaxy.png'
import synokem from '../assets/logos/synokem.png'
import yaxon from '../assets/logos/yaxon.png'
import zydus from '../assets/logos/zydus.png'

const companies = [
  { name: "Dr. Morepen", logo: dr_morepen, initials: "DM", color: "#3B82F6" },
  { name: "Mankind", logo: mankind, initials: "MK", color: "#10B981" },
  { name: "Ranbaxy", logo: ranbaxy, initials: "RX", color: "#F59E0B" },
  { name: "Zydus", logo: zydus, initials: "ZY", color: "#8B5CF6" },
  { name: "Yaxon Healthcare", logo: yaxon, initials: "YH", color: "#EC4899" },
  { name: "Lark Industries", logo: lark, initials: "LI", color: "#14B8A6" },
  { name: "Synochem Pharma", logo: synokem, initials: "SP", color: "#F97316" },
  { name: "Glenmark", logo: glenmark, initials: "GL", color: "#06B6D4" },
  { name: "Primal Group", logo: primal, initials: "PG", color: "#EF4444" },
];

const marqueeItems = [...companies, ...companies, ...companies];

const stats = [
  {
    value: "50+",
    label: "Clients Served",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87a4 4 0 10-8 0m12-10a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "Industries Covered",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    value: "20+",
    label: "Years Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const partnerHighlights = [
  {
    label: "Pharmaceutical Partners",
    names: "Yaxon Healthcare, Lark Laboratories, Synochem Pharma",
    note: "Channel partners for Zydus, Mankind, Ranbaxy & Glenmark.",
  },
  {
    label: "LED Packaging",
    names: "WOW Lights",
    note: "Corrugated & mono cartons built for durability, structural strength, and safe product handling during transit.",
  },
  {
    label: "Mobile Accessories",
    names: "Snexian",
    note: "Premium printed packaging for chargers, cables & accessories with a strong focus on branding and retail visibility.",
  },
];

// Pharma partners list
const pharmaPartners = [
  "Yaxon Healthcare",
  "Lark Laboratories",
  "Synochem Pharma",
  "Pro Chem (Channel Partners for Zydus, Mankind, Ranbaxy & Glenmark)",
];

// ── Stat Counter ──
function StatItem({ value, label, icon }) {
  const [count, setCount] = useState(0);
  const numeric = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          let start = 0;
          const inc = numeric / (1400 / 16);
          const t = setInterval(() => {
            start += inc;
            if (start >= numeric) { setCount(numeric); clearInterval(t); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [numeric]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="text-[#E8820C] mb-1">{icon}</div>
      <span className="text-white font-black leading-none text-[clamp(28px,4vw,44px)]">
        {count}{suffix}
      </span>
      <span className="text-white/45 text-[13px] font-medium tracking-wide text-center">
        {label}
      </span>
    </div>
  );
}

// ── Logo Card ──
function LogoCard({ name, logo, initials, color }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-3  border border-white/10 cursor-default group transition-all duration-300 hover:border-white/25 hover:bg-white/10"
      style={{
        width: "var(--card-w, 148px)",
        height: "var(--card-h, 104px)",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="object-contain group-hover:opacity-100 transition-opacity duration-300"
          style={{
            width: "var(--logo-w, 80px)",
            height: "var(--logo-h, 36px)",
            opacity: 0.8,
            filter: "brightness(0) invert(1)",
          }}
        />
      ) : (
        <div
          className=" flex items-center justify-center font-black tracking-wide flex-shrink-0"
          style={{
            width: "var(--badge-size, 44px)",
            height: "var(--badge-size, 44px)",
            background: `${color}22`,
            border: `1.5px solid ${color}44`,
            fontSize: "var(--badge-font, 13px)",
            color,
          }}
        >
          {initials}
        </div>
      )}
      <span
        className="text-white/70 font-semibold text-center leading-tight px-3 group-hover:text-white transition-colors duration-300"
        style={{ fontSize: "var(--name-font, 11.5px)" }}
      >
        {name}
      </span>
    </div>
  );
}

// ── Marquee Row ──
function MarqueeRow({ items, direction = "left", speed = "28s", paused }) {
  const animation = direction === "left" ? "marquee-left" : "marquee-right";
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" />
        <div
          className={`flex gap-5 w-max ${animation} ${paused ? "marquee-paused" : ""}`}
          style={{ animationDuration: speed, paddingLeft: "20px" }}
        >
          {items.map((c, i) => (
            <LogoCard key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Divider ──
function Divider() {
  return (
    <div
      className="w-full max-w-[900px] h-px mx-auto"
      style={{
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
      }}
    />
  );
}

// ── Main ──
export default function TrustedBy() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-15"
      style={{
        background: "linear-gradient(160deg, #05122B 0%, #0A1A3A 50%, #060D1F 100%)",
        "--card-w": "220px",
        "--card-h": "130px",
        "--logo-w": "110px",
        "--logo-h": "44px",
        "--badge-size": "52px",
        "--badge-font": "15px",
        "--name-font": "13px",
      }}
    >
      {/* CSS keyframes */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  linear infinite; }
        .marquee-right { animation: marquee-right linear infinite; }
        .marquee-paused { animation-play-state: paused !important; }

        @media (max-width: 640px) {
          section {
            --card-w: 148px !important;
            --card-h: 104px !important;
            --logo-w: 80px  !important;
            --logo-h: 34px  !important;
            --badge-size: 42px !important;
            --badge-font: 12px !important;
            --name-font: 11px  !important;
          }
        }
      `}</style>

      {/* Bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 55%, rgba(230,140,40,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mb-14">
        <h2 className="text-white font-black leading-[1.1] tracking-tight mb-4 text-[50px] md:text-[60px]">
          Our Clients
        </h2>
        <div className="w-14 h-[3px] rounded-full bg-[#E8820C] mt-2" />
        <p className="text-white/75 text-[clamp(15px,1.6vw,18px)] max-w-[660px] leading-relaxed mb-3 pt-10">
          Maple Prints caters to a wide spectrum of industries, each with unique packaging
          requirements and quality expectations.
        </p>
        <p className="text-white/75 text-[clamp(15px,1.6vw,18px)] max-w-[660px] leading-relaxed">
          We have built strong professional relationships with reputed companies and channel
          partners across multiple industries, reflecting our commitment to quality, consistency,
          and reliability.
        </p>
      </div>

      {/* ── Marquee Rows ── */}
      <div
        className="flex flex-col gap-5 mb-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <MarqueeRow items={marqueeItems} direction="left" speed="26s" paused={paused} />
        <MarqueeRow items={[...marqueeItems].reverse()} direction="right" speed="26s" paused={paused} />
      </div>

      {/* ── Divider ── */}
      <div className="mb-14"><Divider /></div>

      {/* ── Partners intro block ── */}
      <div className="relative z-10 max-w-[700px] mx-auto px-6 sm:px-10 mb-10 text-center">
        <p className="text-[#E8820C] text-[25px] md:text-[40px] font-bold tracking-[0.1em] uppercase mb-3">
          Who We Work With
        </p>
        <h3 className="text-white text-[20px] md:text-[30px] font-bold mb-3">
          Trusted by Leading Brands Across Segments
        </h3>
        <p className="text-white/75 text-[clamp(14px,1.4vw,16px)] leading-relaxed mb-5">
          In addition to pharmaceutical packaging, we also have strong expertise in commercial
          and consumer packaging segments. Our experience includes working with:
        </p>
        {/* Proper bullet list — no raw * markdown */}
        <ul className="text-white/75 text-[clamp(14px,1.4vw,16px)] leading-relaxed space-y-2 text-left inline-block">
          {pharmaPartners.map((partner, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#E8820C] flex-shrink-0" />
              {partner}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Partner Highlight Cards ── */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-10 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {partnerHighlights.map((p, i) => (
            <div
              key={i}
              className=" border border-white/8 p-6 flex flex-col gap-2"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <span className="text-[#E8820C] text-[15px] font-bold tracking-[0.14em] uppercase mb-1">
                {p.label}
              </span>
              <h4 className="text-white font-bold text-[15px] leading-snug">
                {p.names}
              </h4>
              <p className="text-white/65 text-[13px] leading-relaxed">
                {p.note}
              </p>
            </div>
          ))}
        </div>

        {/* Summary line */}
        <p className="text-white/75 text-[13px] text-center mt-8 leading-relaxed max-w-[640px] mx-auto">
          Our diverse experience enables us to efficiently manage both high-precision regulated
          packaging and high-volume commercial packaging requirements.
        </p>
      </div>

    </section>
  );
}