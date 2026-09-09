import groupedAll from "../../assets/images/Products/grouped-images/grouped-all.jpg";

export default function ServicesHero() {
  return (
    <section className="w-full bg-[#FAFAF8] py-14 md:py-24 mt-15">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-10 md:grid-cols-2 md:gap-14">
        {/* Left: text */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#E8820C]">
            What we do
          </p>
          <h1 className="font-bold leading-[1.05] tracking-tight text-[#1E3A5F] text-[clamp(2.5rem,5vw+1rem,4.25rem)]">
            Services
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-[15px] leading-relaxed text-black/65 md:mx-0 md:text-base">
            At Maple Prints, printing is not merely a production process — it
            is a craft. We create packaging that communicates sophistication,
            quality, and brand value at first glance: luxury finishes, precise
            colour, and dependable execution, all under one roof.
          </p>
        </div>

        {/* Right: image */}
        <div className="overflow-hidden border border-black/10 bg-white shadow-[0_30px_60px_-30px_rgba(20,30,40,0.25)]">
          <img
            src={groupedAll}
            alt="Range of premium packaging boxes produced by Maple Prints"
            width={1600}
            height={900}
            loading="eager"
            className="block aspect-video w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
