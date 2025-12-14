import CollectionCircle from "./CollectionCircle";
import { LOGOS, TEXTOS } from "../constants/data";

/**
 * Componente CollectionsSection - Sección principal de colecciones
 *
 * Muestra:
 * - Título "Colecciones"
 * - Logos de las colecciones (C3M, 2BC, 2BD)
 * - Eslogan de la marca
 *
 * Esta sección ocupa el espacio central de la página
 *
 * 📝 NOTA: Los logos y textos ahora vienen de src/constants/data.js
 * Para cambiar los contenidos, editá ese archivo
 */
export default function CollectionsSection() {
  // 🎨 VARIABLES DE CONTROL - Cambiá estos valores para personalizar

  // Controla cuánto se separa la sección desde el header
  const separacionSuperior = "mt-12 sm:mt-16 lg:mt-20"; // 👈 Ajustá la distancia vertical superior

  // Tamaño del título "COLECCIONES"
  // Responsive: más pequeño en móvil, más grande en desktop
  const tituloSize = "text-[10px] sm:text-xs lg:text-sm"; // 👈 Cambia aquí el tamaño

  const tituloEstilos = TEXTOS.colecciones.estilos || {};
  // Opacidad del título configurable desde data.js
  const tituloOpacidad = tituloEstilos.tituloOpacidad || "opacity-90";

  // Decoración adicional del título (uppercase, bordes, fondo, etc.)
  const tituloDecoracion = tituloEstilos.tituloDecoracion || "uppercase tracking-normal";

  // Espaciado entre logos
  const espacioLogos = "gap-6 sm:gap-10 lg:gap-14"; // 👈 Cambia el espacio entre logos

  // Padding de la sección completa
  const paddingSeccion = "px-6 py-12 sm:px-10 lg:px-20"; // 👈 Espacio alrededor de todo

  return (
    <section className={`relative flex-1 w-full text-center text-white ${separacionSuperior} ${paddingSeccion}`}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <h2 className={`${tituloSize} ${tituloOpacidad} ${tituloDecoracion} font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]`}>
          {TEXTOS.colecciones.titulo}
        </h2>

        <div className={`flex w-full flex-wrap items-center justify-center ${espacioLogos}`}>
          <CollectionCircle logo={LOGOS.colecciones.bc2} name={TEXTOS.colecciones.nombres.bc2} />
          <CollectionCircle logo={LOGOS.colecciones.blacklist} name={TEXTOS.colecciones.nombres.blacklist} destacado />
          <CollectionCircle logo={LOGOS.colecciones.c3m} name={TEXTOS.colecciones.nombres.c3m} />
        </div>
      </div>
    </section>
  );
}
