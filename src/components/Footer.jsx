/**
 * Componente Footer - Pie de página del sitio web
 *
 * Muestra el mensaje de bienvenida y eslogan de la marca
 * Con efecto de sombra para mejorar legibilidad sobre el fondo
 */
function Footer() {
  return (
    // text-center: texto centrado | py-6: padding vertical 24px | text-sm: texto pequeño
    <footer className="text-center py-6 text-sm">
      {/* Eslogan principal */}
      {/* drop-shadow: sombra rgba(0,0,0,0.9) - mejora legibilidad sobre fondo */}
      <p className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        Somos un universo con identidad.
      </p>

      {/* Mensaje de bienvenida en negrita */}
      {/* font-bold: texto en negrita para darle más peso visual */}
      <p className="font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        Bienvenido a 2BD WORLWIDE
      </p>
    </footer>
  );
}

export default Footer;
