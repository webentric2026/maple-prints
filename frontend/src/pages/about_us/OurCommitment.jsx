// OurCommitment.jsx

export default function OurCommitment() {
    return (
        <section
            className="relative w-full py-16 sm:py-20 md:py-28"
            style={{ background: "#1E3A5F" }}
        >
            <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
                <p
                    className="font-bold uppercase tracking-widest mb-5"
                    style={{ color: "#E8820C", fontSize: "11.5px", letterSpacing: "0.16em" }}
                >
                    Our Commitment
                </p>

                <p
                    className="leading-relaxed mb-6"
                    style={{
                        color: "rgba(255,255,255,0.92)",
                        fontSize: "clamp(16px,2.2vw,20px)",
                    }}
                >
                    At Maple Prints, packaging is not simply manufactured — it is
                    carefully crafted to enhance product value, strengthen brand
                    identity, and create a lasting impression.
                </p>

                <p
                    className="leading-relaxed"
                    style={{
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "clamp(14px,1.8vw,16px)",
                    }}
                >
                    By combining advanced printing technology, manufacturing precision,
                    and premium finishing expertise, we deliver packaging solutions
                    that reflect excellence at every stage.
                </p>
            </div>
        </section>
    );
}