// Footer.jsx
import { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/mapple_logo.png"

// ─────────────────────────────────────────────
//  FOOTER DATA — edit here freely
// ─────────────────────────────────────────────
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Products", href: "/products" },
    { label: "Our Clients", href: "/clients" },
    { label: "Contact Us", href: "/contact" },
];

const productLinks = [
    { label: "Pharmaceutical Packaging", href: "/products#pharma" },
    { label: "Cosmetics & Personal Care", href: "/products#cosmetics" },
    { label: "Ayurvedic & Herbal", href: "/products#ayurvedic" },
    { label: "FMCG Packaging", href: "/products#fmcg" },
    { label: "Electronics & Appliances", href: "/products#electronics" },
    { label: "Accessories & Consumer", href: "/products#accessories" },
];

const contactInfo = {
    address: "B-47, Sector 10, Noida, Uttar Pradesh – 201301, India",
    phone: "+91 98765 43210",
    email: "info@mapleprints.in",
    gst: "09ABCDE1234F1Z5",
};

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/919876543210",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.845L.057 23.49a.75.75 0 00.921.916l5.733-1.498A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.648-.49-5.18-1.35l-.37-.213-3.834 1.004 1.019-3.726-.228-.374A9.964 9.964 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
        ),
    },
];

// ─────────────────────────────────────────────
//  LINK COLUMN
// ─────────────────────────────────────────────
function LinkColumn({ heading, links }) {
    return (
        <div className="flex flex-col gap-4">
            <p
                className="font-black uppercase tracking-widest"
                style={{ color: "#E8820C", fontSize: "15px" }}
            >
                {heading}
            </p>
            <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="footer-link group relative flex items-center gap-2 transition-colors duration-200 text-white/75 text-[13px]"

                        >
                            <span
                                className="footer-link-line absolute left-0 bottom-0 h-px transition-all duration-300"
                                style={{ width: "0%", background: "#E8820C" }}
                            />
                            <span
                                className="group-hover:text-white transition-colors duration-200"
                                style={{ lineHeight: 1.5 }}
                            >
                                {link.label}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ─────────────────────────────────────────────
//  MAIN FOOTER COMPONENT
// ─────────────────────────────────────────────
export default function Footer() {
    const footerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (footerRef.current) obs.observe(footerRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative w-full overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #060D1F 0%, #030812 100%)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            {/* Subtle top glow line */}
            <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to right, transparent, rgba(232,130,12,0.4), transparent)",
                }}
            />

            {/* ── LAYER 1: Main Footer ── */}
            <div
                className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
            >
                <div
                    className="footer-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.8fr 1fr 1fr 1.3fr",
                        gap: "48px",
                        alignItems: "start",
                    }}
                >
                    {/* COL 1 — Brand */}
                    <div className="flex flex-col gap-5">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center justify-center font-black text-white"
                                style={{
                                    width: "38px",
                                    height: "38px",
                                }}
                            >
                                <img src={logo} alt="" />
                            </div>
                            <span
                                className="font-black text-white tracking-tight"
                                style={{ fontSize: "20px" }}
                            >
                                Maple Prints
                            </span>
                        </div>

                        <p
                            className="leading-relaxed"
                            style={{
                                color: "rgba(255,255,255,0.40)",
                                fontSize: "13px",
                                maxWidth: "280px",
                            }}
                        >
                            At Maple Prints, manufacturing excellence is built on a foundation of advanced technology, precision engineering, and an uncompromising commitment to quality. Our production facility is equipped with modern high-performance machinery that enables us to consistently deliver premium packaging solutions with exceptional print clarity, structural accuracy, and finishing precision.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-3 mt-1">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex items-center justify-center transition-all duration-200"
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "rgba(255,255,255,0.45)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(232,130,12,0.5)";
                                        e.currentTarget.style.color = "#E8820C";
                                        e.currentTarget.style.background = "rgba(232,130,12,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                                        e.currentTarget.style.background = "transparent";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 font-bold transition-all duration-200"
                            style={{
                                color: "#fff",
                                background: "#E8820C",
                                padding: "10px 20px",
                                fontSize: "13px",
                                letterSpacing: "0.04em",
                                width: "fit-content",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#d4740a";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#E8820C";
                            }}
                        >
                            Get a Quote
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* COL 2 — Quick Links */}
                    <LinkColumn heading="Quick Links" links={quickLinks} />

                    {/* COL 3 — Products */}
                    <LinkColumn heading="Products" links={productLinks} />

                    {/* COL 4 — Contact */}
                    <div className="flex flex-col gap-4">
                        <p
                            className="font-black uppercase tracking-widest"
                            style={{ color: "#E8820C", fontSize: "15px" }}
                        >
                            Contact Us
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Address */}
                            <div className="flex items-start gap-3 text-white/75 text-[12px]">
                                <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(232,130,12,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className="text-white/75 text-[12px]">
                                    {contactInfo.address}
                                </span>
                            </div>

                            {/* Phone */}
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="flex items-center gap-3 transition-colors duration-200 text-white/75 text-[13px]"

                                onMouseEnter={(e) => e.currentTarget.style.color = "#E8820C"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                            >
                                <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(232,130,12,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                {contactInfo.phone}
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center gap-3 transition-colors duration-200 text-white/75 text-[13px]"

                                onMouseEnter={(e) => e.currentTarget.style.color = "#E8820C"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                            >
                                <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(232,130,12,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                {contactInfo.email}
                            </a>

                            {/* GST */}
                            <div className="flex items-center gap-3">
                                <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(232,130,12,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="5" width="20" height="14" />
                                    <line x1="2" y1="10" x2="22" y2="10" />
                                </svg>
                                <span className="text-white/75 text-[12px]">
                                    GST: {contactInfo.gst}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── LAYER 2: Divider ── */}
            <div
                className="max-w-7xl mx-auto px-6 sm:px-10"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            />

            {/* ── LAYER 3: Bottom Bar ── */}
            <div
                className="max-w-7xl mx-auto px-6 sm:px-10 py-5"
                style={{
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.6s ease 0.2s",
                }}
            >
                <div
                    className="footer-bottom"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                    }}
                >
                    <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>
                        © {new Date().getFullYear()} Maple Prints. All rights reserved.
                    </p>



                    <p className="text-[14px] text-white">
                        Designed & Developed by{" "}
                        <a
                            href="https://webentric.in"
                            target="_blank"
                            className=" duration-200 text-[#ffa63f] font-bold"
                        >
                            Webentric
                        </a>
                    </p>
                </div>
            </div>

            {/* Responsive styles */}
            <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
        .footer-link:hover .footer-link-line {
          width: 100% !important;
        }
        .footer-link:hover span {
          color: #fff !important;
        }
      `}</style>
        </footer>
    );
}