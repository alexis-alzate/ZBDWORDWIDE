import { TEXTOS } from "../constants/data";

export default function CartButton() {
    return (
        <button
            type="button"
            aria-label={TEXTOS.carrito.etiqueta}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-black/40 to-black/70 text-white shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_22px_46px_rgba(0,0,0,0.5)] sm:h-14 sm:w-14"
        >
            <span className="sr-only">{TEXTOS.carrito.etiqueta}</span>
            <span className="absolute inset-0 -z-10 rounded-full bg-white/10 blur-xl" aria-hidden="true" />
            <span className="absolute inset-0 rounded-full ring-1 ring-white/20" aria-hidden="true" />
            <svg
                className="h-5 w-5 sm:h-7 sm:w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12l-1.2 7.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.6L6 7Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7 5 4H3"
                />
                <circle cx="9.5" cy="19" r="1.1" fill="currentColor" />
                <circle cx="16.5" cy="19" r="1.1" fill="currentColor" />
            </svg>
        </button>
    );
}
