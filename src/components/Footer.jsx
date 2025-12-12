/**
 * Componente Footer - Pie de página del sitio web
 *
 * Muestra el mensaje de bienvenida y eslogan de la marca
 * Con efecto de sombra para mejorar legibilidad sobre el fondo
 */
function Footer() {
  // 📍 POSICIÓN DEL TEXTO "Somos un universo con identidad" (desde ABAJO)
  // Opciones: bottom-4 (16px), bottom-8 (32px), bottom-12 (48px), bottom-16 (64px), bottom-20 (80px)
  const textoIdentidadPosicion = "bottom-14"; // 👈 Cambia este valor para mover el texto desde abajo

  // 📍 POSICIÓN DEL TEXTO "Bienvenido a 2BD WORLDWIDE" (desde ABAJO)
  // Opciones: bottom-4 (16px), bottom-8 (32px), bottom-12 (48px), bottom-16 (64px), bottom-20 (80px)
  const textoBienvenidaPosicion = "bottom-8"; // 👈 Cambia este valor para mover el texto desde abajo

  return (
    // relative: contenedor de referencia para los elementos absolute
    // text-center: texto centrado | py-6: padding vertical 24px | text-sm: texto pequeño
    <footer className="relative text-center py-6 text-sm">

      {/* Texto "Somos un universo con identidad" - POSICIÓN ABSOLUTA */}
      {/* absolute: se posiciona independiente del flujo normal */}
      {/* left-1/2 -translate-x-1/2: centrado horizontal perfecto */}
      {/* bottom-X: distancia desde abajo del footer */}
      <p className={`absolute ${textoIdentidadPosicion} left-1/2 -translate-x-1/2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]`}>
        Somos un universo con identidad.
      </p>

      {/* Texto "Bienvenido a 2BD WORLDWIDE" - POSICIÓN ABSOLUTA */}
      {/* absolute: se posiciona independiente del flujo normal */}
      {/* font-bold: texto en negrita para darle más peso visual */}
      {/* left-1/2 -translate-x-1/2: centrado horizontal perfecto */}
      <p className={`absolute ${textoBienvenidaPosicion} left-1/2 -translate-x-1/2 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]`}>
        Bienvenido a 2BD WORLWIDE
      </p>
    </footer>
  );
}

export default Footer;
