import { TEXTOS } from "../constants/data";

/**
 * Componente Footer - Pie de página del sitio web
 *
 * Muestra el mensaje de bienvenida y eslogan de la marca
 * Con efecto de sombra para mejorar legibilidad sobre el fondo
 *
 * @param {string} textoIdentidad - Texto del eslogan (opcional, viene de constants/data.js)
 * @param {string} textoBienvenida - Texto de bienvenida (opcional, viene de constants/data.js)
 *
 * 📝 NOTA: Los valores por defecto ahora vienen de src/constants/data.js
 * Para cambiar los textos, editá ese archivo
 */

interface FooterProps {
    textoIdentidad?: string;
    textoBienvenida?: string;
}

export default function Footer({
    textoIdentidad = TEXTOS.footer.identidad,
    textoBienvenida = TEXTOS.footer.bienvenida
}: FooterProps) {
    // 🎨 VARIABLES DE CONTROL - Cambiá estos valores para personalizar

    // Distancia respecto a la sección anterior
    const margenSuperior = "mt-10 sm:mt-12"; // 👈 Ajustá cuánto se separa del contenido anterior

    // Tamaño de texto responsive
    const textoSize = "text-xs sm:text-sm md:text-base"; // 👈 Cambia el tamaño de texto

    // Tamaño del eslogan "MÁS QUE UNA MARCA" (usa misma tipografía que el cuerpo del footer)
    const esloganSize = textoSize;

    // Padding del footer
    const paddingFooter = "px-6 py-8"; // 👈 Cambia el espacio interno

    // Espaciado entre las dos líneas de texto
    const espacioTextos = "gap-2"; // 👈 Cambia el espacio entre textos (gap-1, gap-2, gap-3, etc.)

    return (
        // Contenedor principal del footer: ancho completo, texto centrado y blanco
        <footer className={`w-full text-center text-white ${margenSuperior} ${paddingFooter} ${textoSize}`}>
            {/* Contenedor interno: limita ancho máximo, centra contenido, gap-1 crea el flow visual entre bloques */}
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">

                {/* BLOQUE 1: Eslogan "MÁS QUE UNA MARCA" - bold, uppercase, letras espaciadas */}
                <div className={`${esloganSize} font-bold uppercase tracking-[0.2em]`}>
                    <p>{TEXTOS.colecciones.eslogan.linea1}</p>
                    <p>{TEXTOS.colecciones.eslogan.linea2}</p>
                </div>

                {/* BLOQUE 2: Textos informativos - "Somos un universo..." y "Bienvenido..." */}
                <div className={`flex flex-col ${espacioTextos}`}>
                    <p>{textoIdentidad}</p>
                    <p className="font-bold uppercase tracking-[0.2em]">{textoBienvenida}</p>
                </div>
            </div>
        </footer>
    );
}
