import { TEXTOS } from "../constants/data";

export default function SearchButton() {
    return (
        <button
            type="button"
            aria-label={TEXTOS.buscar.etiqueta}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_16px_30px_rgba(0,0,0,0.45)] sm:h-12 sm:w-12"
        >
            <span className="sr-only">{TEXTOS.buscar.etiqueta}</span>
            <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
            >
                <circle cx="11" cy="11" r="6.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 16.5L21 21" />
            </svg>
        </button>
    );
}
