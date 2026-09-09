// Infrastructure.jsx

// ─────────────────────────────────────────────
//  MACHINERY LIST
//  Written from a box-maker's point of view:
//  what each machine does FOR the packaging.
// ─────────────────────────────────────────────
const machineryList = [
    {
        id: 1,
        name: "POLAR Paper Cutter",
        tag: "Cutting",
        blurb:
            "Boards cut clean and true to size, so every carton folds square with crisp, even edges.",
    },
    {
        id: 2,
        name: "Roland 700 — 5 Colour with UV Coater",
        tag: "Printing + Coating",
        blurb:
            "Rich, consistent brand colour sealed under a protective coat for a premium on-shelf look.",
    },
    {
        id: 3,
        name: "KBA — 4 Colour Press",
        tag: "High-Volume Printing",
        blurb:
            "Sharp, repeatable colour across long runs — ideal for large carton orders with zero shade shift.",
    },
    {
        id: 4,
        name: "Heidelberg — Hybrid / UV",
        tag: "Specialty Finishing",
        blurb:
            "Tough, scuff-resistant surfaces with a deep gloss effect, so boxes look new from factory to shelf.",
    },
    {
        id: 5,
        name: "Auto Die Cutting",
        tag: "Cutting + Creasing",
        blurb:
            "Exact cutting and creasing, so cartons erect smoothly, lock firmly, and hold their shape.",
    },
];

// ─────────────────────────────────────────────
//  MACHINERY LIST
// ─────────────────────────────────────────────
function MachineryList() {
    return (
        <div className="flex h-full flex-col">
            {/* <p
                className="font-black mb-1 text-2xl md:text-[30px]"
                style={{ color: "#E8820C", letterSpacing: "0.01em" }}
            >
                Key machines on our floor
            </p>
            <p className="mb-6 text-sm leading-relaxed text-black/60 max-w-[46ch]">
                Every machine here earns its place by what it does to your boxes —
                sharper print, cleaner folds, tougher finishes.
            </p> */}

            <ul className="flex flex-col gap-3">
                {machineryList.map((item, i) => (
                    <li
                        key={item.id}
                        className="group flex items-start gap-4 border border-black/10 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                        {/* Step number */}
                        <span
                            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-black text-white"
                            style={{ background: "#1E3A5F" }}
                            aria-hidden="true"
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                            <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <span className="text-[15px] font-bold leading-snug text-gray-900 md:text-base">
                                    {item.name}
                                </span>
                            </span>
                            <span className="mt-1 block text-[13.5px] leading-relaxed text-black/65">
                                {item.blurb}
                            </span>
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
        <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
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
                <p className="leading-relaxed max-w-[500px] text-black/75">
                    Powered by world-class machinery from globally trusted brands, ensuring
                    precision, consistency, and scale in every production run.
                </p>
            </div>

            {/* ── Machinery list, centred single column ── */}
            <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-10">
                <MachineryList />
            </div>
        </section>
    );
}
