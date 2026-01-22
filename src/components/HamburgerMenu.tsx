import { useEffect, useRef, useState } from "react";
import { TEXTOS } from "../constants/data";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        const onPointerDown = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node | null;
            if (target && containerRef.current && !containerRef.current.contains(target)) {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("mousedown", onPointerDown);
        document.addEventListener("touchstart", onPointerDown);
        panelRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("mousedown", onPointerDown);
            document.removeEventListener("touchstart", onPointerDown);
        };
    }, [open]);

    return (
        <div ref={containerRef} className="relative z-20">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-label={TEXTOS.menu.botonAbrir}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur transition hover:bg-black/55 sm:h-9 sm:w-9 md:h-10 md:w-10"
            >
                <span className="sr-only">{TEXTOS.menu.botonAbrir}</span>
                <div className="flex flex-col gap-0.5">
                    <span className={`h-0.5 w-3.5 bg-white/90 transition sm:w-4 ${open ? "translate-y-1 rotate-45" : ""}`} />
                    <span className={`h-0.5 w-3.5 bg-white/90 transition sm:w-4 ${open ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-3.5 bg-white/90 transition sm:w-4 ${open ? "-translate-y-1 -rotate-45" : ""}`} />
                </div>
            </button>

            {open ? (
                <div
                    ref={panelRef}
                    tabIndex={-1}
                    className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-black/80 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">{TEXTOS.menu.titulo}</p>
                    <p className="mt-2 text-sm text-white/80">
                        {TEXTOS.menu.placeholder}
                    </p>
                </div>
            ) : null}
        </div>
    );
}
