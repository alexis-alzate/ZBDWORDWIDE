import { useState } from "react";
import { TEXTOS } from "../constants/data";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative z-20">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-label={TEXTOS.menu.botonAbrir}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
            >
                <span className="sr-only">{TEXTOS.menu.botonAbrir}</span>
                <div className="flex flex-col gap-1.5">
                    <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                </div>
            </button>

            {open ? (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-black/80 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">{TEXTOS.menu.titulo}</p>
                    <p className="mt-2 text-sm text-white/80">
                        {TEXTOS.menu.placeholder}
                    </p>
                </div>
            ) : null}
        </div>
    );
}
