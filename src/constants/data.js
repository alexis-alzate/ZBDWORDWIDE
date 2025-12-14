/**
 * 📦 ARCHIVO DE CONSTANTES CENTRALIZADAS
 *
 * Aquí se guardan todos los textos, imágenes y rutas del proyecto.
 *
 * VENTAJAS:
 * - Todo en un solo lugar, fácil de encontrar y modificar
 * - Si querés traducir el sitio a otro idioma, solo duplicás este archivo
 * - Los componentes quedan limpios y reutilizables
 * - Menos errores por typos (si escribís mal una ruta, solo la arreglás aquí)
 */

// ========================================
// 🖼️ RUTAS DE LOGOS
// ========================================
export const LOGOS = {
  // Logo principal del header (centro)
  principal: "/logos/logo1.PNG",

  // Logos de las colecciones
  colecciones: {
    bc2: "/logos/LOGO2.png",
    blacklist: "/logos/logo3.png",
    c3m: "/logos/logo4.png"
  }
};

// ========================================
// 📝 TEXTOS DEL SITIO
// ========================================
export const TEXTOS = {
  // Textos del Header
  header: {
    titulo: "2BD WORDLWIDE"
  },

  // Textos del Footer
  footer: {
    identidad: "Somos un universo con identidad.",
    bienvenida: "Bienvenido a 2BD WORLWIDE"
  },

  // Textos de la sección de colecciones
  colecciones: {
    titulo: "Colecciones",
    eslogan: {
      linea1: "MÁS QUE UNA",
      linea2: "MARCA"
    },
    // Nombres de las colecciones
    nombres: {
      bc2: "2BC",
      blacklist: "2BD BLACKLIST",
      c3m: "C3M"
    },
    estilos: {
      // Controla la opacidad y decoraciones del título principal
      tituloOpacidad: "opacity-60",
      tituloDecoracion: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-2 uppercase tracking-[0.35em] backdrop-blur-sm"
    }
  }
};

// ========================================
// 🎨 IMÁGENES DEL CARRUSEL DE FONDO
// ========================================
// Cada array es un "set" de 3 imágenes que se muestran juntas
// El carrusel rota entre estos sets cada 5 segundos
export const IMAGE_SETS = [
  [ "/2bd/2BD2.JPG", "/2bd/2BD1.JPG", "/2bd/2BD3.JPG"],
  ["/2bd/2BD4.JPG", "/2bd/2BD5.JPG", "/2bd/2BD6.JPG"],    
  ["/2bd/2BD7.JPG", "/2bd/2BD8.JPG", "/2bd/2BD9.JPG"]                  
];

// ========================================
// 🔧 CONFIGURACIÓN DEL CARRUSEL
// ========================================
export const CAROUSEL_CONFIG = {
  // Tiempo en milisegundos entre cada transición (5000ms = 5 segundos)
  intervalo: 5000,
  // Duración de la transición de opacidad (1000ms = 1 segundo)
  duracionTransicion: 1000
};
