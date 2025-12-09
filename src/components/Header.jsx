/**
 * Componente Header - Cabecera principal del sitio web
 *
 * Muestra el encabezado con:
 * - Título de la marca a la izquierda
 * - Logo principal centrado
 * - Logo secundario circular a la derecha
 */
function Header() {
  // 🎨 AQUÍ PUEDES CAMBIAR EL TAMAÑO DEL LOGO CENTRAL
  // Opciones: w-20 (80px), w-24 (96px), w-32 (128px), w-40 (160px), w-48 (192px), w-56 (224px), w-64 (256px)
  const logoSize = "w-48 h-48"; // 👈 Cambia este valor para ajustar el tamaño

  return (
    // Header con posición relativa para centrar el logo con position absolute
    // flex: layout flexible | justify-between: separa a los extremos | items-center: alinea verticalmente
    <header className="relative flex justify-between items-center p-8">

      {/* Sección Izquierda - Título de la marca */}
      <h1 className="text-3xl font-bold tracking-widest">
        2BD WORDLWIDE
      </h1>

      {/* Sección Centro - Logo principal centrado absolutamente */}
      {/* absolute: posición absoluta | left-1/2 top-1/2: centro exacto */}
      {/* transform -translate: centra perfectamente */}
      <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${logoSize}`}>
        <img
          src="/logos/logo1.PNG"
          alt="2BD Logo"
          className="w-full h-full object-contain" // object-contain: mantiene proporción sin recortar
        />
      </div>

      {/* Sección Derecha - Logo secundario en círculo blanco */}
      {/* w-20 h-20: 80px | rounded-full: círculo perfecto | bg-white: fondo blanco */}
      {/* flex items-center justify-center: centra el contenido */}
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
        <img
          src="/logos/logo1.png"
          alt="Logo secundario"
          className="w-full h-full object-contain p-2" // p-2: padding de 8px
        />
      </div>
    </header>
  );
}

export default Header;

