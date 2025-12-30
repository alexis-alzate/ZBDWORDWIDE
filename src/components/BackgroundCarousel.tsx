import { useEffect, useState, ReactNode } from "react";
import { IMAGE_SETS, CAROUSEL_CONFIG } from "../constants/data";

interface BackgroundCarouselProps {
    children: ReactNode;
}

export default function BackgroundCarousel({ children }: BackgroundCarouselProps) {
    // Índice del set visible
    const [index, setIndex] = useState(0);
    const hasImages = IMAGE_SETS.length > 0;

    useEffect(() => {
        if (!hasImages) {
            return;
        }
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % IMAGE_SETS.length);
        }, CAROUSEL_CONFIG.intervalo);

        return () => clearInterval(id);
    }, [hasImages]);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Capas de fondo rotando por opacidad */}
            {IMAGE_SETS.map((imageSet, setIdx) => (
                <div
                    key={setIdx}
                    className={`absolute inset-0 flex flex-col md:flex-row transition-opacity ${setIdx === index ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ transitionDuration: `${CAROUSEL_CONFIG.duracionTransicion}ms` }}
                >
                    {imageSet.map((img, imgIdx) => (
                        <div key={imgIdx} className="flex-1">
                            <img
                                src={img}
                                alt={`Foto ${imgIdx + 1}`}
                                className="kenburns h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            ))}

            <div className="relative z-[2] flex min-h-screen flex-col">
                {children}
            </div>
        </div>
    );
}
