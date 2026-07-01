// Contact.jsx
import { Phone, MapPin, Mail, Clock, ArrowUpRight, MessageCircle, Navigation } from "lucide-react";

// ─────────────────────────────────────────────
//  CONTACT DATA — edit freely
// ─────────────────────────────────────────────
const phoneNumbers = ["9810152101", "9212540800"];

const whatsappNumber = "919810152101";

const address = "Plot No. 2173, HSIIDC Industrial Estate, Rai, Sonipat (Haryana), India";

const email = "info@mapleprints.in";

const officeHours = [
    { day: "Monday – Saturday", time: "9:00 AM – 6:30 PM" },
    { day: "Sunday", time: "Closed" },
];

const mapEmbedSrc =
    "https://www.google.com/maps?q=Plot+No.+2173,+HSIIDC+Industrial+Estate,+Rai,+Sonipat,+Haryana,+India&output=embed";

const mapDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Plot+No.+2173,+HSIIDC+Industrial+Estate,+Rai,+Sonipat,+Haryana,+India";

// ─────────────────────────────────────────────
//  QUICK ACTION BUTTON
// ─────────────────────────────────────────────
function QuickAction({ icon: Icon, label, href, primary }) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`group flex items-center gap-2.5 px-6 py-3.5 text-[13.5px] font-semibold tracking-wide transition-all duration-300 ${primary
                ? "bg-[#E8820C] text-white hover:bg-[#d17509]"
                : "bg-transparent text-white border border-white/25 hover:border-white/50 hover:bg-white/5"
                }`}
        >
            <Icon size={16} strokeWidth={2} />
            {label}
        </a>
    );
}

// ─────────────────────────────────────────────
//  CONTACT CARD
// ─────────────────────────────────────────────
function ContactCard({ icon: Icon, label, title, children, action }) {
    return (
        <div className="group relative flex flex-col gap-5 bg-white px-7 py-9 sm:px-8 sm:py-10 transition-all duration-300 hover:bg-[#FAFAF9] border border-black/10">
            <div className="flex items-start justify-between">
                <Icon size={26} strokeWidth={1.6} className="text-[#E8820C]" />
                {action && (
                    <ArrowUpRight
                        size={16}
                        strokeWidth={2}
                        className="text-black/25 group-hover:text-[#E8820C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                )}
            </div>

            <div>
                <p
                    className="uppercase tracking-widest text-black/40 font-semibold mb-2"
                    style={{ fontSize: "10.5px", letterSpacing: "0.14em" }}
                >
                    {label}
                </p>
                <h3 className="font-bold text-[#1E3A5F] text-[18px] mb-3 leading-snug">
                    {title}
                </h3>
                <div className="text-black/75 text-[14px] leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export default function Contact() {
    return (
        <section className="relative w-full mt-15 ">
            {/* ── Header Band ── */}
            <div
                className="relative w-full overflow-hidden py-20 sm:py-24 md:py-32"
                style={{
                    background:
                        "linear-gradient(160deg, #142845 0%, #1E3A5F 55%, #16304f 100%)",
                }}
            >
                {/* subtle glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 55% 45% at 80% 20%, rgba(232,130,12,0.08) 0%, transparent 70%)",
                    }}
                />

                <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="flex flex-col items-start text-left max-w-[640px]">
                        <p
                            className="font-bold uppercase tracking-widest mb-5"
                            style={{ color: "#E8820C", fontSize: "11.5px", letterSpacing: "0.18em" }}
                        >
                            Get In Touch
                        </p>
                        <h1
                            className="font-black text-white leading-[1.1] tracking-tight mb-6"
                            style={{ fontSize: "clamp(32px,5.5vw,52px)" }}
                        >
                            Let&rsquo;s talk packaging
                        </h1>
                        <p
                            className="leading-relaxed mb-10 text-[16px] text-white/75">
                            Whether you're planning a new product launch or refining an
                            existing line, our team is ready to discuss specifications,
                            timelines, and pricing.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <QuickAction
                                icon={Phone}
                                label={`Call +91 ${phoneNumbers[0]}`}
                                href={`tel:+91${phoneNumbers[0]}`}
                                primary
                            />
                            <QuickAction
                                icon={MessageCircle}
                                label="WhatsApp Us"
                                href={`https://wa.me/${whatsappNumber}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Contact Cards ── */}
            <div className="w-full bg-[#F5F6F8]">
                <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  -my-10"
                        style={{
                            boxShadow: "0 20px 50px rgba(20,40,70,0.08)",
                        }}
                    >
                        {/* Phone */}
                        <ContactCard icon={Phone} label="Phone" title="Call Us Directly">
                            <div className="flex flex-col gap-1.5">
                                {phoneNumbers.map((num) => (
                                    <a
                                        key={num}
                                        href={`tel:+91${num}`}
                                        className="hover:text-[#E8820C] transition-colors duration-200 font-medium text-[#1E3A5F]/80"
                                    >
                                        +91 {num}
                                    </a>
                                ))}
                            </div>
                        </ContactCard>

                        {/* Address */}
                        <ContactCard icon={MapPin} label="Location" title="Visit Our Facility" action>
                            <a
                                href={mapDirectionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E8820C] transition-colors duration-200"
                            >
                                {address}
                            </a>
                        </ContactCard>

                        {/* Email */}
                        <ContactCard icon={Mail} label="Email" title="Write To Us" action>
                            <a
                                href={`mailto:${email}`}
                                className="hover:text-[#E8820C] transition-colors duration-200"
                            >
                                {email}
                            </a>
                        </ContactCard>

                        {/* Hours */}
                        <ContactCard icon={Clock} label="Availability" title="Business Hours">
                            <div className="flex flex-col gap-1.5">
                                {officeHours.map((row) => (
                                    <div key={row.day} className="flex items-baseline justify-between gap-3">
                                        <span>{row.day}</span>
                                        <span className="text-[#1E3A5F]/70 font-medium whitespace-nowrap">
                                            {row.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </ContactCard>
                    </div>
                </div>
            </div>

            {/* ── Map ── */}
            <div className="w-full" style={{ background: "#F5F6F8" }}>
                <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
                    <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
                        <div>
                            <p
                                className="font-bold uppercase tracking-widest mb-2"
                                style={{ color: "#E8820C", fontSize: "11px", letterSpacing: "0.16em" }}
                            >
                                Our Facility
                            </p>
                            <h2 className="font-black text-[#1E3A5F] text-[24px] sm:text-[28px] leading-tight">
                                Find Us in Sonipat
                            </h2>
                        </div>
                        <a
                            href={mapDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[13.5px] font-semibold text-[#1E3A5F] hover:text-[#E8820C] transition-colors duration-200 pb-1 border-b border-[#1E3A5F]/20 hover:border-[#E8820C]"
                        >
                            <Navigation size={15} strokeWidth={2} />
                            Get Directions
                        </a>
                    </div>

                    <div
                        className="relative w-full"
                        style={{ height: "420px", border: "1px solid rgba(0,0,0,0.08)" }}
                    >
                        <iframe
                            title="Maple Prints Location Map"
                            src={mapEmbedSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(12%) contrast(1.02)" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {/* Address overlay card */}
                        <div
                            className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[340px] bg-white px-6 py-5 flex items-start gap-3"
                            style={{ boxShadow: "0 12px 32px rgba(20,40,70,0.18)" }}
                        >
                            <MapPin size={20} strokeWidth={1.8} className="text-[#E8820C] flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-[#1E3A5F] text-[13.5px] mb-1">Maple Prints</p>
                                <p className="text-black/55 text-[12.5px] leading-relaxed">{address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}