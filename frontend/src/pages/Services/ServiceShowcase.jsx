import { useState, useEffect, useCallback } from "react";

import embossing from "../../assets/images/Products/grouped-images/grouped-embossed.png";
import foil from "../../assets/images/Products/grouped-images/grouped-leaf.png";
import rigid from "../../assets/images/Products/grouped-images/grouped-rigid.png";
import metallic from "../../assets/images/Products/grouped-images/grouped-metal.png";
// import uvCoating from "../../assets/images/Products/grouped-images/grouped-uv.png";
import spotUv from "../../assets/images/Products/grouped-images/grouped-spotuv.jpg";
import hybrid from "../../assets/images/Products/grouped-images/grouped-hybrid.png";
import mattgloss from "../../assets/images/Products/grouped-images/grouped-mattgloss.png";
import corrugated from "../../assets/images/Products/grouped-images/grouped-corrugated.png";
import foodTrays from "../../assets/images/Products/grouped-images/grouped-window.png";

const AUTOPLAY_MS = 5000;

const services = [
  {
    title: "Embossing",
    essence: "Touch-led luxury",
    description:
      "Raised detailing and tactile definition that enhance brand perception, adding depth, dimension, and a distinctly premium feel to every package.",
    image: embossing,
  },
  {
    title: "Leafing",
    essence: "Light, caught precisely",
    description:
      "Precision-applied metallic and holographic foils that create controlled reflectivity, sharp visual accents, and a refined premium finish.",
    image: foil,
  },
  {
    title: "Rigid Cartons",
    essence: "The luxury box",
    description:
      "Sturdy, premium-grade cartons engineered for superior protection, structural integrity, and a refined high-end unboxing experience.",
    image: rigid,
  },
  {
    title: "Metallic Cartons",
    essence: "Made to be noticed",
    description:
      "Reflective metallic finishes designed to capture light and attention, creating a striking shelf presence while elevating overall product presentation.",
    image: metallic,
  },
  {
    title: "Matte & Gloss",
    essence: "Depth and durability",
    description:
      "A rich, high-gloss protective coating that enhances colour vibrancy, adds visual depth, resists scuffs and abrasion, and keeps packaging looking new.",
    image: mattgloss,
  },
  {
    title: "Spot UV",
    essence: "Highlights that pop",
    description:
      "Selective gloss applied to logos, text, patterns, and artwork to create contrast, depth, and subtle visual highlights without overpowering the overall design.",
    image: spotUv,
  },
  {
    title: "Hybrid Coating",
    essence: "Matte meets gloss",
    description:
      "Striking matte–gloss texture contrasts that combine smooth sophistication with eye-catching highlights, making it a preferred finish for premium packaging.",
    image: hybrid,
  },
  {
    title: "Corrugated Cartons",
    essence: "Strength in transit",
    description:
      "Durable corrugated board engineered for reliable protection during handling, stacking, storage, and shipping, helping products arrive safely and securely.",
    image: corrugated,
  },
  {
    title: "Window Carton",
    essence: "Window Cartons",
    description:
      "Hygienic, moisture-resistant trays designed for safe food handling and serving, combining practical performance with dependable strength for everyday use.",
    image: foodTrays,
  },
];

export default function ServiceShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = services.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, next]);

  const active = services[index];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#E8820C]">
            Capabilities
          </p>
          <h2 className="max-w-[20ch] font-bold leading-[1.08] tracking-tight text-[#1E3A5F] text-[clamp(1.9rem,4vw,3rem)]">
            Finishing & packaging services
          </h2>
        </div>

        <div
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
          role="region"
          aria-label="Services showcase"
          aria-roledescription="slideshow"
          tabIndex={0}
        >
          {/* ── Left: full image ── */}
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-square overflow-hidden border border-black/10 bg-[#F4F4F2]">
              {services.map((service, i) => (
                <img
                  key={service.title}
                  src={service.image}
                  alt={service.title}
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable="false"
                  aria-hidden={i !== index}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${i === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.04] opacity-0"
                    }`}
                />
              ))}
              <span className="absolute left-0 top-4 bg-[#1E3A5F] px-3 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white tabular-nums">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── Right: name + description + selector ── */}
          <div className="flex min-h-full flex-col justify-between">
            <p key={`meta-${active.title}`} className="showcase-fade">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8820C]">
                {active.essence}
              </span>
              <span className="mt-2 block font-bold leading-[1.1] tracking-tight text-[#1E3A5F] text-[clamp(1.75rem,3vw,3.5rem)]">
                {active.title}
              </span>
              <span className="mt-4 block max-w-[48ch] text-[15px] leading-relaxed text-black/65">
                {active.description}
              </span>
            </p>

            {/* Progress + arrows */}
            <div className="mt-8 flex items-center gap-4">
              <span className="h-[3px] flex-1 bg-black/10">
                <span
                  key={index}
                  className="showcase-progress block h-full bg-[#E8820C]"
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              </span>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous service"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/15 text-xl leading-none text-[#1E3A5F] transition-colors duration-200 hover:border-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next service"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/15 text-xl leading-none text-[#1E3A5F] transition-colors duration-200 hover:border-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes showcase-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .showcase-progress {
          transform-origin: left;
          animation-name: showcase-progress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes showcase-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .showcase-fade {
          animation: showcase-fade-in 450ms ease-out;
        }
      `}</style>
    </section>
  );
}
