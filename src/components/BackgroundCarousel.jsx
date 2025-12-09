import { useEffect, useState } from "react";

// Crea SETS de 3 imágenes (cada set será una "slide")
const imageSets = [
  ["/2bd/2BD1.JPG", "/2bd/2BD2.JPG", "/2bd/2BD3.JPG"],
  ["/2bd/2BD4.JPG", "/2bd/2BD5.JPG", "/2bd/2BD6.JPG"],  // ← Agrega más
  ["/2bd/2BD7.JPG", "/2bd/2BD8.JPG", "/2bd/2BD9.JPG"], // ← Agrega más
];

function BackgroundCarousel({ children }) {
  // Estado para saber qué set de imágenes mostrar
  const [index, setIndex] = useState(0);

  // useEffect: ejecuta código después de que el componente se monta
  useEffect(() => {
    // setInterval: ejecuta una función cada X milisegundos
    const id = setInterval(() => {
      // Cambia al siguiente set de imágenes
      setIndex((prev) => (prev + 1) % imageSets.length);
      // % imageSets.length: vuelve a 0 cuando llega al final (loop infinito)
    }, 5000); // 5000ms = 5 segundos

    // Cleanup: limpia el interval cuando el componente se desmonta
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* Renderiza TODOS los sets, pero solo uno es visible */}
      {imageSets.map((imageSet, setIdx) => (
        <div
          key={setIdx}
          className={`absolute inset-0 flex transition-opacity duration-1000 ${
            setIdx === index ? "opacity-100" : "opacity-0"
          }`}
          // transition-opacity: anima el cambio de opacidad
          // duration-1000: la transición dura 1 segundo
          // opacity-100: visible (cuando setIdx === index)
          // opacity-0: invisible (cuando no es el índice actual)
        >
          {imageSet.map((img, imgIdx) => (
            <div key={imgIdx} className="w-1/3 h-full">
              <img 
                src={img} 
                alt={`Foto ${imgIdx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}

      <div className="relative z-[2] h-full">
        {children}
      </div>
    </div>
  );
}

export default BackgroundCarousel;