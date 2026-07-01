import hero_image from "../assets/images/Hero/grouped-all-16-9.png"

// Hero.jsx
export default function Hero() {
    return (
        <section className="w-full ">

            {/* ── Top: Full-width Image ── */}
            <div className="w-full h-[340px] md:h-[460px] lg:h-[450px] overflow-hidden bg-[#EFEFED] mt-15">
                <img
                    src={hero_image}
                    alt="Maple Prints packaging products"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width={1440}
                    height={540}
                />
            </div>

            {/* ── Bottom: Text Content ── */}
            <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left column — badge + headline */}
                    <div>
                        {/* Category Badge */}
                        <span className="inline-block mb-5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white bg-[#2E7D32]">
                            MAPLE PRINTS
                        </span>

                        {/* Headline */}
                        <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-tight text-[#1a1a1a] max-w-[520px]">
                            Precision in Every Impression<br />{" "}
                            <span className="text-[#1E3A5F]">Premium Packaging & Printing Solutions</span>
                        </h1>
                    </div>

                    {/* Right column — description + CTA */}
                    <div className="flex flex-col gap-6 pt-0 lg:pt-[52px]">
                        <p className="text-[15px] leading-relaxed text-[#555] max-w-[520px]">
                            Maple Prints is a professionally managed packaging and printing company specializing in the manufacturing of premium mono cartons and paper-based packaging solutions. With a strong focus on precision, consistency, and visual excellence, we cater to industries where packaging plays a critical role in product protection, brand positioning, and consumer perception.
                        </p>
                        <p className="text-[15px] leading-relaxed text-[#555] max-w-[520px]">
                            Our strength lies in offering complete end-to-end packaging solutions under one roof — from advanced printing to luxury finishing applications — ensuring superior quality control, faster turnaround times, and dependable execution.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <a
                                href="/about"
                                className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold text-white bg-[#E09A00] shadow-md transition-all duration-200 hover:bg-[#c98700] hover:shadow-lg active:scale-[0.98]"
                            >
                                Read More About Us
                            </a>
                            <a
                                href="https://wa.me/919810152101"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 h-12 px-8 text-sm font-semibold text-[#1E3A5F] border-2 border-[#1E3A5F] transition-all duration-200 hover:bg-[#1E3A5F] hover:text-white active:scale-[0.98]"
                            >
                                {/* WhatsApp icon */}
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Get a Quote
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}