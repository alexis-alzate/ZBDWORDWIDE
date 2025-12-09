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
function CollectionCircle({ logo, name }) {
  // 🎨 AQUÍ PUEDES CAMBIAR EL TAMAÑO DE LOS LOGOS
  // Opciones: w-32 (128px), w-40 (160px), w-48 (192px), w-56 (224px), w-64 (256px)
  const logoSize = "w-40 h-40"; // 👈 Cambia este valor para ajustar el tamaño

  return (
    // Logo directo sin contenedor circular blanco
    // cursor-pointer: manita al hover | transition-transform: anima cambios
    // hover:scale-110: crece 110% al hover | shadow-2xl: sombra grande
    // object-contain: mantiene proporción del logo
    <img
      src={logo}
      alt={name}
      className={`${logoSize} cursor-pointer transition-transform hover:scale-110 drop-shadow-2xl object-contain`}
    />
  );
}

export default CollectionCircle;
