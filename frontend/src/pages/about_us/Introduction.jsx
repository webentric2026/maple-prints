// Introduction.jsx
import {
    Save,
    Cog,
    Truck,
    BadgeCheck,
} from "lucide-react";

// ─────────────────────────────────────────────
//  FEATURE CARDS DATA
// ─────────────────────────────────────────────
const features = [
    {
        icon: Save,
        title: "Premium Packaging",
        description: "Elevating brands with superior materials and finishes.",
    },
    {
        icon: Cog,
        title: "End-to-End",
        description: "Comprehensive manufacturing from concept to completion.",
    },
    {
        icon: Truck,
        title: "Reliable Delivery",
        description: "Streamlined logistics for on-time global fulfillment.",
    },
    {
        icon: BadgeCheck,
        title: "Quality Assurance",
        description: "Rigorous testing at every stage of production.",
    },
];

// ─────────────────────────────────────────────
//  FEATURE CARD
// ─────────────────────────────────────────────
function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div className="group flex flex-col items-center justify-center text-center px-6 py-8 bg-white border border-black/[0.06] transition-all duration-300 hover:border-[#E8820C]/40 m-2">
            <div className="flex items-center justify-center w-12 h-12 mb-5">
                <Icon
                    size={32}
                    strokeWidth={1.75}
                    className="text-black transition-colors duration-300 group-hover:text-[#E8820C]"
                />
            </div>

            <h3 className="font-bold text-black text-[17px] mb-2">
                {title}
            </h3>

            <p className="text-black/50 text-[13.5px] leading-relaxed max-w-[200px]">
                {description}
            </p>
        </div>
    );
}

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export default function Introduction() {
    return (
        <section
            className="relative w-full py-20 md:py-28 mt-20 lg:mt-10"
            style={{ background: "#F5F6F8" }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left Content ── */}
                    <div>
                        <h2 className="font-black text-black leading-[1.1] tracking-tight mb-8 text-[40px]">
                            About Us
                        </h2>

                        <p className="leading-relaxed font-[clamp(14px,1.5vw,16px)] text-black/75">
                            Maple Prints is a professionally managed packaging and printing company specializing in the manufacturing of premium mono cartons and paper-based packaging solutions. With a strong focus on precision, consistency, and visual excellence, we cater to industries where packaging plays a critical role in product protection, brand positioning, and consumer perception.
                            <br />
                            <br />
                            Our strength lies in offering complete end-to-end packaging solutions under one roof — from advanced printing to luxury finishing applications — ensuring superior quality control, faster turnaround times, and dependable execution.
                            <br />
                            <br />
                            Backed by advanced machinery, skilled expertise, and a commitment to manufacturing excellence, Maple Prints delivers packaging solutions that combine structural integrity with premium aesthetics.
                            <br />
                            <br />
                            We believe packaging is more than a protective layer — it is a powerful brand communication tool that creates first impressions, enhances shelf appeal, and strengthens customer trust.
                            <br />
                            <br />
                            At Maple Prints, we are committed to building long-term relationships through consistent quality, professional service, and reliable delivery standards.
                        </p>
                    </div>

                    {/* ── Right Feature Grid ── */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                    >
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                {...feature}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}