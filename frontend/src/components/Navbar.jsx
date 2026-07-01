import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/icons/mapple_logo.png'

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [infoVisible, setInfoVisible] = useState(true);
    const [infoBarHeight, setInfoBarHeight] = useState(0);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);
    const infoBarRef = useRef(null);

    useEffect(() => {
        const updateInfoBarHeight = () => {
            setInfoBarHeight(infoVisible && infoBarRef.current ? infoBarRef.current.offsetHeight : 0);
        };

        const onScroll = () => {
            setScrolled(window.scrollY > 10);
            setInfoVisible(window.scrollY < 40);
        };

        onScroll();
        updateInfoBarHeight();

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateInfoBarHeight);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateInfoBarHeight);
        };
    }, [infoVisible]);

    useEffect(() => {
        const updateInfoBarHeight = () => {
            setInfoBarHeight(infoVisible && infoBarRef.current ? infoBarRef.current.offsetHeight : 0);
        };

        updateInfoBarHeight();
    }, [infoVisible]);

    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e) => {
            if (
                menuRef.current && !menuRef.current.contains(e.target) &&
                toggleRef.current && !toggleRef.current.contains(e.target)
            ) setMenuOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [menuOpen]);

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <div
                ref={infoBarRef}
                className="fixed top-0 left-0 w-full z-49 bg-[#1E3A5F] text-white overflow-hidden"
                style={{
                    maxHeight: infoVisible ? "140px" : "0px",
                    opacity: infoVisible ? 1 : 0,
                    transition: "max-height 300ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease",
                    pointerEvents: infoVisible ? "auto" : "none",
                }}
                aria-hidden={!infoVisible}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-2.5 sm:py-3">
                    <div className="flex flex-col gap-2 sm:gap-2.5 md:flex-row items-center md:justify-between md:gap-4">
                        <p className="flex items-start sm:items-center gap-1.5 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-white/80 leading-relaxed md:flex-1 min-w-0">
                            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 shrink-0 text-[#E09A00] mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                            </svg>
                            <span className="break-words text-center">Plot No. 2173, HSIIDC Industrial Estate, Rai, Sonipat (Haryana), India</span>
                        </p>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 md:justify-end md:ml-auto shrink-0">
                            <a href="tel:+919810152101" className="flex items-center gap-1 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap">
                                <svg className="w-3 h-3 text-[#E09A00]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                                </svg>
                                +91 98101 52101
                            </a>
                            <a href="tel:+919212540800" className="flex items-center gap-1 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap">
                                <svg className="w-3 h-3 text-[#E09A00]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                                </svg>
                                92125 40800
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav
                className="fixed left-0 w-full min-h-[72px] md:h-18 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 bg-white backdrop-blur-md border-b border-white/10 z-49"
                style={{
                    top: `${infoBarHeight}px`,
                    transition: "top 300ms cubic-bezier(0.16,1,0.3,1)",
                    boxShadow: scrolled ? "0 2px 16px rgba(30,58,95,0.10)" : "none",
                }}
                aria-label="Main navigation"
            >
                <a
                    href="/"
                    className="flex items-center gap-2 sm:gap-2.5 min-w-0 outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label="Mapple Prints – home"
                >
                    <img src={logo} alt="" className="w-9 sm:w-10 md:w-11 lg:w-13 shrink-0" />
                    <span className="text-[18px] xs:text-[20px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold tracking-tight text-[#1E3A5F] leading-none whitespace-nowrap">
                        MAPLE <span className="text-[#E09A00]">PRINTS</span>
                    </span>
                </a>

                <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8" role="list">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <NavLink
                                to={href}
                                className={({ isActive }) =>
                                    `text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${isActive
                                        ? "text-[#E09A00] decoration-6 underline underline-offset-[24px]"
                                        : "text-[#1E3A5F]/95 hover:text-[#E09A00]"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block shrink-0">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center h-11 lg:h-12 px-6 lg:px-10 text-sm font-semibold text-white bg-[#E09A00] shadow-md transition-all duration-200 hover:bg-[#c98700] hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E09A00] whitespace-nowrap"
                    >
                        Contact
                    </a>
                </div>

                <button
                    ref={toggleRef}
                    type="button"
                    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center text-[#1E3A5F] outline-none transition-colors duration-150 hover:text-[#f0a500] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] md:hidden shrink-0"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <HamburgerIcon open={menuOpen} />
                </button>
            </nav>

            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div
                id="mobile-nav"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className="fixed top-0 right-0 h-dvh w-full bg-white shadow-[-8px_0_32px_rgba(27,58,143,0.12)] md:hidden flex flex-col overflow-y-auto z-50"
                style={{
                    transformOrigin: "right",
                    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition:
                        "transform 260ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease",
                }}
            >
                <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-gray-100">
                    <span className="text-[#1E3A5F] text-sm font-bold uppercase tracking-[0.08em]">
                        Menu
                    </span>
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-[#1E3A5F] hover:bg-gray-100 transition-colors duration-200"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <ul
                    role="list"
                    className="flex flex-col px-4 py-2 divide-y divide-gray-100 items-center"
                >
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={label} className="w-full flex justify-center">
                            <NavLink
                                to={href}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center justify-center py-4 text-sm font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${isActive
                                        ? "text-[#E09A00]"
                                        : "text-[#1E3A5F] hover:text-[#E09A00]"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="px-4 pb-8 pt-4 border-t border-gray-100">
                    <a
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="flex h-11 items-center justify-center bg-[#E09A00] text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#c98700] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E09A00]"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
}

function HamburgerIcon({ open }) {
    const base =
        "origin-center transition-[transform,opacity] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            <line
                x1="3" y1="6" x2="19" y2="6"
                stroke="currentColor" strokeWidth="2" strokeLinecap="square"
                className={`${base} ${open ? "translate-y-[5px] rotate-45" : ""}`}
                style={{ transformBox: "fill-box" }}
            />
            <line
                x1="3" y1="11" x2="19" y2="11"
                stroke="currentColor" strokeWidth="2" strokeLinecap="square"
                className={`${base} ${open ? "opacity-0" : "opacity-100"}`}
                style={{ transformBox: "fill-box" }}
            />
            <line
                x1="3" y1="16" x2="19" y2="16"
                stroke="currentColor" strokeWidth="2" strokeLinecap="square"
                className={`${base} ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
                style={{ transformBox: "fill-box" }}
            />
        </svg>
    );
}