import { useEffect, useState } from "react";
import { IMAGE_SETS, CAROUSEL_CONFIG } from "../constants/data";

// 📝 EXPLICACIÓN:
// Ahora las imágenes y configuración vienen de src/constants/data.js
// Para agregar más imágenes al carrusel, editá ese archivo

export default function BackgroundCarousel({ children }) {
  // Estado para saber qué set de imágenes mostrar
  const [index, setIndex] = useState(0);

  // useEffect: ejecuta código después de que el componente se monta
  useEffect(() => {
    // setInterval: ejecuta una función cada X milisegundos
    const id = setInterval(() => {
      // Cambia al siguiente set de imágenes
      setIndex((prev) => (prev + 1) % IMAGE_SETS.length);
      // % IMAGE_SETS.length: vuelve a 0 cuando llega al final (loop infinito)
    }, CAROUSEL_CONFIG.intervalo); // Tiempo configurable desde constants/data.js

    // Cleanup: limpia el interval cuando el componente se desmonta
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Renderiza TODOS los sets, pero solo uno es visible */}
      {IMAGE_SETS.map((imageSet, setIdx) => (
        <div
          key={setIdx}
          className={`absolute inset-0 flex flex-col md:flex-row transition-opacity ${
            setIdx === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${CAROUSEL_CONFIG.duracionTransicion}ms` }}
          // transition-opacity: anima el cambio de opacidad
        >
          {imageSet.map((img, imgIdx) => (
            <div key={imgIdx} className="flex-1">
              <img
                src={img}
                alt={`Foto ${imgIdx + 1}`}
                className="h-full w-full object-cover"
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
