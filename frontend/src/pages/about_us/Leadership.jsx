import CEO from '../../assets/images/CEO.jpeg'

export default function Leadership() {
    return (
        <section
            className="relative w-full py-16 sm:py-20 md:py-24"
            style={{ background: "#EDEEF0" }}
        >
            <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-14 items-center">
                    {/* ── LEFT: CEO Photo ── */}
                    <div className="w-full order-1">
                        <img
                            src={CEO}
                            alt="Managing Director of Maple Prints in office"
                            className="w-full h-auto   object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* ── RIGHT: Text ── */}
                    <div className="order-2 text-[#1E3A5F]">
                        <p
                            className="font-bold uppercase tracking-widest mb-3"
                            style={{ color: "#C97A1E", fontSize: "11px", letterSpacing: "0.14em" }}
                        >
                            Leadership
                        </p>

                        <h2
                            className="font-black leading-[1.15] tracking-tight mb-6"
                            style={{ fontSize: "clamp(20px,3vw,26px)" }}
                        >
                            Message from Our CEO
                        </h2>

                        <blockquote
                            className="italic leading-relaxed pl-5 mb-5"
                            style={{
                                fontSize: "clamp(13.5px,1.6vw,15px)",
                                borderLeft: "2px solid #C97A1E",
                            }}
                        >
                            "At Maple Prints, we don't just manufacture boxes; we engineer the
                            structural foundation of your brand's identity. Our commitment to
                            precision is unwavering, and our investment in state-of-the-art
                            technology reflects our dedication to delivering excellence in
                            every fold."
                        </blockquote>

                        <p
                            className="font-bold pl-5"
                            style={{ fontSize: "14px" }}
                        >
                            — Managing Director
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}