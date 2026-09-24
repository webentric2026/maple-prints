// Clients.jsx — CLIENTS & CHANNEL PARTNERSHIPS
//
// ── HOW TO ADD / CHANGE A LOGO (template) ─────────────────────────────
// 1. Drop your logo file into:  src/assets/logos/   (e.g. my-client.png)
// 2. Import it at the top:      import myclient from '../assets/logos/my-client.png'
// 3. Find the company in directClients / channelPartners below and set:
//       logo: myclient   (instead of null)
//    To remove a logo, set logo: null — an initials badge will show automatically.
// 4. To add a brand-new company, copy-paste a line:
//       { name: "New Company", logo: null, initials: "NC", color: "#E8820C" },
// ───────────────────────────────────────────────────────────────────────

import { useState } from "react";
import lark from '../assets/logos/lark.png'
import prochem from '../assets/logos/prochem.png'
import yaxon from '../assets/logos/yaxon.png'
import synokem from '../assets/logos/synokem.png'
import mankind from '../assets/logos/mankind.png'
import alchemist from '../assets/logos/alchemist.png'
import glenmark from '../assets/logos/glenmark.png'
import ranbaxy from '../assets/logos/ranbaxy.png'

// ── LIST 1: Direct Clients ─────────────────────────────────────────────
// Logos wired where we have files. Rest use initials badge until you add logos.
const directClients = [
  { name: "Unijules", logo: null, initials: "UJ", color: "#3B82F6" },
  { name: "Lark Laboratories", logo: lark, initials: "LL", color: "#14B8A6" },
  { name: "Pro Chem Pharmaceuticals", logo: prochem, initials: "PC", color: "#F59E0B" },
  { name: "Pro Pharma", logo: null, initials: "PP", color: "#8B5CF6" },
  { name: "Jaypee Laboratories", logo: null, initials: "JL", color: "#10B981" },
  { name: "Yaxon", logo: yaxon, initials: "YX", color: "#EC4899" },
  { name: "Sky Map", logo: null, initials: "SM", color: "#06B6D4" },
  { name: "Rapross", logo: null, initials: "RP", color: "#EF4444" },
  { name: "Apple Formulation", logo: null, initials: "AF", color: "#84CC16" },
  { name: "Synokem Pharmaceuticals", logo: synokem, initials: "SP", color: "#F97316" },
];

// ── LIST 2: Channel Partners (reach via client channel networks) ───────
const channelPartners = [
  { name: "Mankind", logo: mankind, initials: "MK", color: "#10B981" },
  { name: "Alchemist", logo: alchemist, initials: "AL", color: "#8B5CF6" },
  { name: "Glenmark", logo: glenmark, initials: "GL", color: "#06B6D4" },
  { name: "Ranbaxy", logo: ranbaxy, initials: "RX", color: "#F59E0B" },
  { name: "Cipla", logo: null, initials: "CI", color: "#3B82F6" },
  { name: "Sun Pharmaceuticals", logo: null, initials: "SN", color: "#EF4444" },
  { name: "Abbott Laboratories", logo: null, initials: "AB", color: "#14B8A6" },
  { name: "Cadillac", logo: null, initials: "CA", color: "#F97316" },
  { name: "Dava India", logo: null, initials: "DV", color: "#84CC16" },
  { name: "Ipca", logo: null, initials: "IP", color: "#EC4899" },
  { name: "Alchem", logo: null, initials: "AC", color: "#E8820C" },
  { name: "Torrent", logo: null, initials: "TO", color: "#6366F1" },
  { name: "And other leading pharma companies", logo: null, initials: "+", color: "#E8820C" },
];

// Tripled for seamless loop
const clientMarqueeItems = [...directClients, ...directClients, ...directClients];
const partnerMarqueeItems = [...channelPartners, ...channelPartners, ...channelPartners];

// ── Logo Card ──
function LogoCard({ name, logo, initials, color }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 border border-white/10 cursor-default group transition-all duration-300 hover:border-white/25 hover:bg-white/10"
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
          className="flex items-center justify-center font-black tracking-wide flex-shrink-0"
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

// ── Section label pill ──
function Pill({ children }) {
  return (
    <span className="inline-block text-[#E8820C] text-[12px] font-bold tracking-[0.22em] uppercase border border-[#E8820C]/30 rounded-full px-4 py-1.5 mb-4 bg-[#E8820C]/10">
      {children}
    </span>
  );
}

// ── Main ──
export default function TrustedBy() {
  const [pausedClients, setPausedClients] = useState(false);
  const [pausedPartners, setPausedPartners] = useState(false);

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
        <h2 className="text-white font-black leading-[1.1] tracking-tight mb-4 text-[clamp(32px,5vw,60px)]">
          CLIENTS &amp; CHANNEL PARTNERSHIPS
        </h2>
        <div className="w-14 h-[3px] rounded-full bg-[#E8820C] mt-2" />
      </div>

      {/* ── BLOCK 1: Direct Clients ── */}
      <div className="relative z-10 max-w-[760px] mx-auto px-6 sm:px-10 mb-8 text-center">
        <Pill>Our Clients</Pill>
        <p className="text-white/80 text-[clamp(15px,1.6vw,18px)] leading-relaxed">
          We currently serve a reputed portfolio of clients, including:
        </p>
        <p className="text-white/50 text-[13.5px] leading-relaxed mt-3">
          {directClients.map((c) => c.name).join("  •  ")}
        </p>
      </div>

      <div
        className="flex flex-col gap-5 mb-16"
        onMouseEnter={() => setPausedClients(true)}
        onMouseLeave={() => setPausedClients(false)}
      >
        <MarqueeRow items={clientMarqueeItems} direction="left" speed="28s" paused={pausedClients} />
      </div>

      {/* ── Divider ── */}
      <div
        className="w-full max-w-[900px] h-px mx-auto mb-14"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      {/* ── BLOCK 2: Channel Partners ── */}
      <div className="relative z-10 max-w-[760px] mx-auto px-6 sm:px-10 mb-8 text-center">
        <Pill>Channel Partners</Pill>
        <p className="text-white/80 text-[clamp(15px,1.6vw,18px)] leading-relaxed">
          Through our association with these clients and their channel networks,
          our packaging solutions have also reached leading pharmaceutical
          and multinational companies, including:
        </p>
        <p className="text-white/50 text-[13.5px] leading-relaxed mt-3">
          {channelPartners.map((c) => c.name).join("  •  ")}
        </p>
      </div>

      <div
        className="flex flex-col gap-5 mb-14"
        onMouseEnter={() => setPausedPartners(true)}
        onMouseLeave={() => setPausedPartners(false)}
      >
        <MarqueeRow items={partnerMarqueeItems} direction="right" speed="30s" paused={pausedPartners} />
      </div>

      {/* ── Closing note ── */}
      <div className="relative z-10 max-w-[680px] mx-auto px-6 text-center">
        <p className="text-white/75 text-[clamp(14px,1.4vw,16px)] leading-relaxed border border-white/10 rounded-2xl px-6 py-5 bg-white/[0.03]">
          These associations reflect our experience in delivering reliable,
          high-quality printed packaging solutions to the pharmaceutical industry.
        </p>
      </div>

    </section>
  );
}
