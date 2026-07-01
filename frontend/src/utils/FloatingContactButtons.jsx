// FloatingContactButtons.jsx
import { Phone, MessageCircle } from "lucide-react";

const phoneNumber = "919810152101";
const whatsappNumber = "919810152101";

export default function FloatingContactButtons() {
    return (
        <>
            <style>{`
        @keyframes float-whatsapp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes float-call {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes ring-pulse-green {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.38);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes ring-pulse-blue {
          0% {
            box-shadow: 0 0 0 0 rgba(30, 58, 95, 0.32);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(30, 58, 95, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(30, 58, 95, 0);
          }
        }

        @keyframes icon-wiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          20% { transform: rotate(-7deg) scale(1.04); }
          40% { transform: rotate(7deg) scale(1.06); }
          60% { transform: rotate(-4deg) scale(1.04); }
          80% { transform: rotate(4deg) scale(1.02); }
        }

        .fab-whatsapp {
          animation: float-whatsapp 3s ease-in-out infinite, ring-pulse-green 2.6s infinite;
        }

        .fab-call {
          animation: float-call 3.3s ease-in-out infinite, ring-pulse-blue 2.8s infinite;
        }

        .fab-whatsapp:hover,
        .fab-call:hover {
          animation-play-state: paused;
        }

        .fab-call:hover svg,
        .fab-whatsapp:hover svg {
          animation: icon-wiggle 0.55s ease-in-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .fab-whatsapp,
          .fab-call,
          .fab-call:hover svg,
          .fab-whatsapp:hover svg {
            animation: none !important;
          }
        }
      `}</style>

            <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[60] flex flex-col items-end gap-3">
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="fab-whatsapp group flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(37,211,102,0.34)] active:scale-[0.96]"
                >
                    <MessageCircle
                        size={24}
                        strokeWidth={2.2}
                        className="transition-transform duration-300 group-hover:scale-105"
                    />
                </a>

                <a
                    href={`tel:+${phoneNumber}`}
                    aria-label="Call now"
                    className="fab-call group flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#1E3A5F] text-white shadow-[0_12px_28px_rgba(30,58,95,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16304f] hover:shadow-[0_16px_36px_rgba(30,58,95,0.3)] active:scale-[0.96]"
                >
                    <Phone
                        size={22}
                        strokeWidth={2.2}
                        className="transition-transform duration-300 group-hover:scale-105"
                    />
                </a>
            </div>
        </>
    );
}