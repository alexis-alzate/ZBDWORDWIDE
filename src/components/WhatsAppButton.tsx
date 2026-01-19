import { TEXTOS } from "../constants/data";

export default function WhatsAppButton() {
    const phoneDigits = TEXTOS.whatsapp.telefono.replace(/\D/g, "");
    const message = TEXTOS.whatsapp.mensaje.trim();
    const href =
        message.length > 0
            ? `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`
            : `https://wa.me/${phoneDigits}`;

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={TEXTOS.whatsapp.etiqueta}
                className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2DE06D] via-[#25D366] to-[#18B955] text-white shadow-[0_22px_50px_rgba(7,94,84,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(7,94,84,0.6)] whatsapp-float"
            >
                <span className="absolute -left-2 top-1/2 hidden -translate-x-full -translate-y-1/2 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_25px_rgba(0,0,0,0.35)] backdrop-blur-sm group-hover:flex">
                    Escríbenos
                </span>
                <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 blur-2xl" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full ring-1 ring-white/30" aria-hidden="true" />
                <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 2.05c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.46 1.33 4.98L2 22l5.14-1.35a9.92 9.92 0 0 0 4.86 1.26h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.65-1.03-5.15-2.9-7.03A9.9 9.9 0 0 0 12 2.05zm0 18.1a8.12 8.12 0 0 1-4.14-1.14l-.3-.18-3.04.8.81-2.97-.2-.31a8.13 8.13 0 1 1 6.87 3.8zm4.49-6.1c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.17.25-.64.8-.79.96-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42l-.48-.01c-.17 0-.45.06-.69.32-.24.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.82 2.77 4.4 3.88.61.26 1.09.42 1.46.54.61.19 1.16.16 1.6.1.49-.07 1.46-.6 1.66-1.19.2-.59.2-1.09.14-1.19-.06-.1-.23-.16-.48-.29z" />
                </svg>
            </a>
        </div>
    );
}
