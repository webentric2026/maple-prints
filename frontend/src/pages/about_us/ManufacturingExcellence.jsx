// ManufacturingExcellence.jsx
import { Printer, Palette, Scissors, Gauge } from "lucide-react";
import machineImg from "../../assets/images/Machines/combined-machinary.png";

// ─────────────────────────────────────────────
//  CAPABILITIES DATA — edit freely
// ─────────────────────────────────────────────
const capabilities = [
    {
        icon: Printer,
        title: "KBA Offset Printing",
        description: "Industry-standard precision presses.",
    },
    {
        icon: Palette,
        title: "Four Colour Printing",
        description: "Vibrant, accurate color reproduction.",
    },
    {
        icon: Scissors,
        title: "Automatic Die Cutting",
        description: "Perfect structural alignment every time.",
    },
    {
        icon: Gauge,
        title: "High-Speed Pasting",
        description: "Efficient, robust assembly lines.",
    },
];

// ─────────────────────────────────────────────
//  CAPABILITY ITEM
// ─────────────────────────────────────────────
function CapabilityItem({ icon: Icon, title, description }) {
    return (
        <div className="flex items-start gap-3">
            <Icon
                size={20}
                strokeWidth={1.75}
                className="flex-shrink-0 mt-0.5 text-black/70"
            />
            <div>
                <h4 className="font-bold text-black text-[14.5px] leading-snug mb-1">
                    {title}
                </h4>
                <p className="text-black/45 text-[12.5px] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export default function ManufacturingExcellence() {
    return (
        <section
            className="relative w-full py-14 sm:py-20 md:py-28 bg-white"

        >
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                    {/* ── LEFT: Text + Capabilities ── */}
                    <div className="flex flex-col order-2 lg:order-1">
                        {/* <p
                            className="font-bold uppercase tracking-widest mb-3 sm:mb-4 text-center lg:text-left"
                            style={{ color: "#C97A1E", fontSize: "11px", letterSpacing: "0.12em" }}
                        >
                            Our Capabilities
                        </p> */}

                        <h2
                            className="font-black text-black leading-[1.15] tracking-tight mb-4 sm:mb-5 text-center lg:text-left text-[40px]"

                        >
                            Manufacturing Excellence
                        </h2>

                        <p
                            className="leading-relaxed mb-8 sm:mb-10 text-center lg:text-left mx-auto lg:mx-0 text-[16px] max-w-[460px] text-black/75"
                        >
                            At Maple Prints, manufacturing excellence is built on a foundation of advanced technology, precision engineering, and an uncompromising commitment to quality. Our production facility is equipped with modern high-performance machinery that enables us to consistently deliver premium packaging solutions with exceptional print clarity, structural accuracy, and finishing precision.<br />
                            <br />
                            Our infrastructure includes KBA Offset Printing Machines, renowned globally for their superior print performance, color consistency, and high-speed production capabilities. Supported by advanced Four Colour Printing Systems, we are able to achieve vibrant color reproduction, sharp detailing, and excellent registration accuracy across every production batch.<br />
                            <br />
                            To ensure structural perfection and production efficiency, our facility is further equipped with Automatic Die Cutting Machines and High-Speed Pasting Machines, enabling us to maintain precision in carton shaping, folding, and finishing while handling medium to high-volume production requirements seamlessly.<br />
                            <br />
                            What truly distinguishes Maple Prints is our ability to offer a fully integrated production process under one roof. From printing to premium finishing applications, every stage is closely monitored through a quality-controlled workflow to ensure consistency, reliability, and timely execution.<br />
                            <br />
                            Our manufacturing capabilities are designed not only to meet industry standards but to exceed client expectations by delivering packaging that reflects refinement, durability, and premium visual appeal.<br />
                        </p>


                    </div>

                    {/* ── RIGHT: Image ── */}
                    <div className="relative w-full order-1 lg:order-2">
                        <img
                            src={machineImg}
                            alt="KBA offset printing machine in Maple Prints facility"
                            className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[460px] object-cover"
                            loading="lazy"
                        />
                        {/* Capabilities grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-7 mt-10">
                            {capabilities.map((c) => (
                                <CapabilityItem key={c.title} {...c} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}