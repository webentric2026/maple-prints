// HowWeManufacture.jsx
import {
    MessageSquare,
    Scissors as ScissorsIcon,
    Printer,
    Scissors,
    Sparkles,
    ClipboardCheck,
} from "lucide-react";

// ─────────────────────────────────────────────
//  WORKFLOW STEPS DATA
// ─────────────────────────────────────────────
const steps = [
    { icon: MessageSquare, label: "Consultation" },
    { icon: ScissorsIcon, label: "Design Support" },
    { icon: Printer, label: "Offset Printing" },
    { icon: Scissors, label: "Die Cutting" },
    { icon: Sparkles, label: "Premium Finishing" },
    { icon: ClipboardCheck, label: "Quality Inspection" },
];

// ─────────────────────────────────────────────
//  STEP ITEM
// ─────────────────────────────────────────────
function StepItem({ icon: Icon, label, index, total }) {
    return (
        <div className="relative flex flex-col items-center text-center">
            {/* Icon */}
            <div
                className="relative z-10 flex items-center justify-center bg-white rounded-full transition-all duration-300 hover:border-[#E8820C]/50 hover:shadow-md"
                style={{
                    width: "65px",
                    height: "65px",
                    border: "1.5px solid rgba(0,0,0,0.08)",
                }}
            >
                <Icon
                    size={22}
                    strokeWidth={1.75}
                    className="text-black/70"
                />
            </div>

            {/* Connector Line */}
            {index < total - 1 && (
                <div
                    className="absolute"
                    style={{
                        top: "56px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "2px",
                        height: "42px",
                        background: "rgba(0,0,0,0.08)",
                    }}
                />
            )}

            {/* Label */}
            <span className="mt-4 font-semibold text-black/75 text-[16px] text-center">
                {label}
            </span>
        </div>
    );
}

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export default function HowWeManufacture() {
    return (
        <section
            className="relative w-full py-16 sm:py-20 md:py-24 hidden md:flex"
            style={{ background: "#F8F9FA" }}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                    <p
                        className="font-bold uppercase tracking-widest mb-3"
                        style={{
                            color: "#C97A1E",
                            fontSize: "15px",
                            letterSpacing: "0.14em",
                        }}
                    >
                        Workflow
                    </p>

                    <h2 className="font-black text-black leading-[1.15] tracking-tight text-[40px]">
                        How We Manufacture Excellence
                    </h2>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    <div
                        className="absolute top-[28px] left-0 right-0"
                        style={{
                            height: "1.5px",
                            background: "rgba(0,0,0,0.08)",
                        }}
                    />

                    <div className="grid grid-cols-6 gap-2">
                        {steps.map((step, i) => (
                            <StepItem
                                key={step.label}
                                {...step}
                                index={i}
                                total={steps.length}
                            />
                        ))}
                    </div>
                </div>

                {/* Tablet */}
                <div className="hidden sm:grid lg:hidden grid-cols-3 gap-x-6 gap-y-10">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.label}
                                className="flex flex-col items-center text-center"
                            >
                                <div
                                    className="flex items-center justify-center bg-white rounded-full mb-3"
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        border: "1.5px solid rgba(0,0,0,0.08)",
                                    }}
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={1.75}
                                        className="text-black/70"
                                    />
                                </div>

                                <span className="font-semibold text-black/75 text-[13.5px]">
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Timeline */}
                <div className="flex sm:hidden flex-col items-center">
                    {steps.map((step, i) => (
                        <div
                            key={step.label}
                            className={i !== steps.length - 1 ? "mb-10" : ""}
                        >
                            <StepItem
                                {...step}
                                index={i}
                                total={steps.length}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}