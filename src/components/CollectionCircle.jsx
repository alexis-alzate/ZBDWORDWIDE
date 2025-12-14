/**
 * Componente CollectionCircle - Logo de colección interactivo
 *
 * @param {string} logo - Ruta de la imagen del logo de la colección
 * @param {string} name - Nombre de la colección (usado para alt text)
 *
 * Características:
 * - Logo circular directo (sin contenedor blanco)
 * - Animación hover (crece 10% al pasar el mouse)
 * - Cursor pointer para indicar que es clickeable
 * - Sombra para dar profundidad
 */
export default function CollectionCircle({ logo, name, destacado = false }) {
  // 🎨 Tamaños responsive para que los logos no se salgan en pantallas pequeñas
  const logoSizeBase = "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28";
  const logoSizeDestacado = "w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36";
  const logoSize = destacado ? logoSizeDestacado : logoSizeBase;

  return (
    // Logo directo sin contenedor circular blanco
    // cursor-pointer: manita al hover | transition-transform: anima cambios
    // hover:scale-110: crece 110% al hover | shadow-2xl: sombra grande
    // object-contain: mantiene proporción del logo
    <img
      src={logo}
      alt={name}
      className={`${logoSize} flex-shrink-0 cursor-pointer object-contain transition-transform hover:scale-110 drop-shadow-2xl`}
    />
  );
}
