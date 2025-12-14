import { LOGOS, TEXTOS } from "../constants/data";

/**
 * Componente Header - Cabecera principal del sitio web
 *
 * Muestra el encabezado con:
 * - Título de la marca a la izquierda
 * - Logo principal centrado
 * - Logo secundario circular a la derecha
 *
 * @param {string} logoSrc - Ruta de la imagen del logo principal (opcional, viene de constants/data.js)
 * @param {string} titulo - Texto del título (opcional, viene de constants/data.js)
 *
 * 📝 NOTA: Los valores por defecto ahora vienen de src/constants/data.js
 * Para cambiar el logo o título, editá ese archivo
 */
export default function Header({
  logoSrc = LOGOS.principal,
  titulo = TEXTOS.header.titulo
}) {
  // 🎨 AQUÍ PUEDES CAMBIAR EL TAMAÑO DEL LOGO CENTRAL
  // Responsive: más pequeño en móvil, más grande en desktop
  const logoSize = "w-48 h-24 md:w-64 md:h-32 lg:w-96 lg:h-48"; // 👈 Cambia este valor para ajustar el tamaño

  // 📏 ALTURA DEL BANNER NEGRO (ancho vertical)
  // Opciones: h-12 (48px), h-16 (64px), h-20 (80px), h-24 (96px), h-28 (112px), h-32 (128px)
  const bannerAltura = "h-24"; // 👈 Cambia este valor para hacer el banner más angosto o más ancho
  
  // 🔼 POSICIÓN VERTICAL DEL TEXTO "2BD WORLDWIDE" (valores en píxeles)
  // Para SUBIR usa valores negativos: -mt-[10px], -mt-[20px], -mt-[30px]
  // Para BAJAR usa valores positivos: mt-[10px], mt-[20px], mt-[30px]
  // Puedes usar CUALQUIER número que quieras
  const textoPosY = "-mt-[0px]"; // 👈 Cambia el número dentro de los corchetes (ejemplo: -mt-[15px] para subir 15px)

  // 🔼 POSICIÓN VERTICAL DEL LOGO CENTRAL (valores en píxeles)
  // Para SUBIR usa valores negativos: -mt-[10px], -mt-[20px], -mt-[30px]
  // Para BAJAR usa valores positivos: mt-[10px], mt-[20px], mt-[30px]
  // Puedes usar CUALQUIER número que quieras
  const logoCentralPosY = "-mt-[0px]"; // 👈 Cambia el número dentro de los corchetes (ejemplo: -mt-[25px] para subir 25px)

  return (
    // Header con posición relativa para centrar el logo con position absolute
    // flex: layout flexible | justify-between: separa a los extremos | items-center: alinea verticalmente
    // padding responsive: menos padding en móvil, más en desktop | group: permite usar group-hover en elementos hijos
    <header className="relative flex justify-between items-center p-4 md:p-6 lg:p-8 group">

      {/* Banner negro de fondo - Aparece solo con hover */}
      {/* absolute: posición absoluta | top-0: pegado arriba SIEMPRE | left-0 right-0: ancho completo */}
      {/* h-X: altura controlable (hace el banner más o menos delgado hacia abajo) */}
      {/* bg-black: color negro | opacity-0: invisible por defecto */}
      {/* group-hover:opacity-80: aparece al 80% cuando pasas el mouse sobre el header */}
      {/* transition-opacity: animación suave | duration-300: dura 300ms */}
      {/* -z-10: posiciona el banner DETRÁS de todo el contenido */}
      <div className={`absolute top-0 left-0 right-0 ${bannerAltura} bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10`} />

      {/* Sección Izquierda - Título de la marca */}
      {/* relative z-10: asegura que esté ADELANTE del banner negro */}
      {/* text responsive: más pequeño en móvil, más grande en desktop */}
      <h1 className={`relative z-10 ${textoPosY} text-lg md:text-2xl lg:text-3xl font-bold tracking-widest`}>
        {titulo}
      </h1>

      {/* Sección Centro - Logo principal centrado absolutamente */}
      {/* absolute: posición absoluta | left-1/2 top-1/2: centro exacto */}
      {/* transform -translate: centra perfectamente */}
      {/* z-10: asegura que esté ADELANTE del banner negro */}
      {/* mt-X o -mt-X: controla posición vertical adicional (arriba/abajo) */}
      <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${logoCentralPosY} z-10 ${logoSize}`}>
        <img
          src={logoSrc}
          alt="2BD Logo"
          className="w-full h-full object-contain" // object-contain: mantiene proporción sin recortar
        />
      </div>

 
     
    </header>
  );
}

